class AgroTest {
  constructor() {
      this.currentLanguage = 'ru';
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.userAnswers = {};
      this.stats = this.loadStats();
      this.currentMode = null;
      this.randomQuestionOrder = [];
      this.speedModeTimer = null;
      this.speedModeTimeLeft = 10;
      this.speedModeScore = 0;
      this.initializeApp();
  }

  initializeApp() {
      this.loadQuestions();
      this.setupEventListeners();
      this.showStartScreen();
      this.updateStatsPreview();
  }

  loadQuestions() {
      this.questions = questions;
      // Восстанавливаем прогресс
      this.currentQuestionIndex = this.stats.currentQuestion || 0;
      this.currentMode = this.stats.currentMode || null;
      this.randomQuestionOrder = this.stats.randomQuestionOrder || [];
  }

  setupEventListeners() {
      // Кнопка начала теста
      document.getElementById('startBtn').addEventListener('click', () => {
          this.showModeSelection();
      });

      // Кнопки выбора режима
      document.getElementById('normalModeBtn').addEventListener('click', () => {
          this.startMode('normal');
      });

      document.getElementById('randomModeBtn').addEventListener('click', () => {
          this.startMode('random');
      });

      document.getElementById('speedModeBtn').addEventListener('click', () => {
          this.startMode('speed');
      });

      document.getElementById('backToStartBtn').addEventListener('click', () => {
          this.showStartScreen();
      });

      // Переключение языка
      document.getElementById('languageSelect').addEventListener('change', (e) => {
          this.currentLanguage = e.target.value;
          this.showCurrentQuestion();
      });

      // Кнопки навигации
      document.getElementById('prevBtn').addEventListener('click', () => {
          this.previousQuestion();
      });

      document.getElementById('nextBtn').addEventListener('click', () => {
          this.nextQuestion();
      });

      document.getElementById('finishBtn').addEventListener('click', () => {
          this.finishTest();
      });

      // Меню
      document.getElementById('menuBtn').addEventListener('click', () => {
          this.showMenu();
      });

      document.getElementById('continueBtn').addEventListener('click', () => {
          this.hideMenu();
      });

      document.getElementById('restartMenuBtn').addEventListener('click', () => {
          if (confirm('Вы уверены, что хотите начать заново? Весь прогресс будет потерян.')) {
              this.restartTest();
          }
      });

      document.getElementById('closeMenuBtn').addEventListener('click', () => {
          this.hideMenu();
      });
  }

  showStartScreen() {
      document.getElementById('startScreen').classList.add('active');
      document.getElementById('modeScreen').classList.remove('active');
      document.getElementById('questionScreen').classList.remove('active');
      document.getElementById('menuScreen').classList.remove('active');
  }

  startTest() {
      document.getElementById('startScreen').classList.remove('active');
      document.getElementById('questionScreen').classList.add('active');
      this.showCurrentQuestion();
  }

  showCurrentQuestion() {
      const realIndex = this.getCurrentQuestionIndex();
      const question = this.questions[realIndex];
      const questionData = this.currentLanguage === 'es' ? question.es : question;

      // Обновляем информацию о прогрессе
      document.getElementById('questionCounter').textContent = 
          `Вопрос ${this.currentQuestionIndex + 1} из ${this.questions.length}`;

      const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
      document.getElementById('progressFill').style.width = `${progress}%`;

      // Обновляем вопрос
      document.getElementById('questionSection').textContent = questionData.section;
      document.getElementById('questionText').textContent = questionData.question;

      // Обновляем варианты ответов
      const answersContainer = document.getElementById('answersContainer');
      answersContainer.innerHTML = '';

      questionData.answers.forEach((answer, index) => {
          const button = document.createElement('button');
          button.className = 'answer-btn';
          button.textContent = answer;

          // Проверяем, был ли уже дан ответ
          const userAnswer = this.userAnswers[question.id];
          if (userAnswer !== undefined) {
              if (index === question.correct) {
                  button.classList.add('correct');
              }
              if (userAnswer === index && userAnswer !== question.correct) {
                  button.classList.add('incorrect');
              }
              if (userAnswer === index) {
                  button.classList.add('selected');
              }
          }

          button.addEventListener('click', () => {
              this.selectAnswer(question.id, index);
          });

          answersContainer.appendChild(button);
      });

      // Обновляем кнопки навигации
      document.getElementById('prevBtn').disabled = this.currentQuestionIndex === 0;
      document.getElementById('nextBtn').disabled = this.currentQuestionIndex === this.questions.length - 1;

      // Показываем фидбэк если ответ был дан
      this.showFeedback(question.id);
  }

  selectAnswer(questionId, answerIndex) {
      const question = this.questions.find(q => q.id === questionId);

      // Сохраняем ответ только если он еще не был дан
      if (this.userAnswers[questionId] === undefined) {
          this.userAnswers[questionId] = answerIndex;

          // Обновляем статистику
          this.updateStats(questionId, answerIndex === question.correct);

          // Сохраняем прогресс
          this.saveProgress();
          
          // Останавливаем таймер если это скоростной режим
          if (this.currentMode === 'speed') {
              this.stopSpeedTimer();
          }
      }

      // Показываем правильный ответ
      this.showFeedback(questionId);
      this.showCurrentQuestion();
      
      // Автоматически переходим к следующему вопросу через 1.5 секунды
      setTimeout(() => {
          this.moveToNextQuestion();
      }, 1500);
  }

  showFeedback(questionId) {
      const question = this.questions.find(q => q.id === questionId);
      const userAnswer = this.userAnswers[questionId];
      const feedback = document.getElementById('feedback');

      if (userAnswer !== undefined) {
          const isCorrect = userAnswer === question.correct;
          const questionData = this.currentLanguage === 'es' ? question.es : question;
          const correctAnswer = questionData.answers[question.correct];

          feedback.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
          feedback.innerHTML = isCorrect ? 
              '✅ Правильно!' : 
              `❌ Неправильно. Правильный ответ: ${correctAnswer}`;
      } else {
          feedback.className = 'feedback';
          feedback.innerHTML = '';
      }
  }

  previousQuestion() {
      if (this.currentQuestionIndex > 0) {
          this.currentQuestionIndex--;
          this.showCurrentQuestion();
          this.saveProgress();
      }
  }

  nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
          this.showCurrentQuestion();
          this.saveProgress();
      }
  }

  finishTest() {
      const answered = Object.keys(this.userAnswers).length;
      const total = this.questions.length;

      if (answered < total) {
          if (!confirm(`Вы ответили только на ${answered} из ${total} вопросов. Завершить тест?`)) {
              return;
          }
      }

      this.showResults();
  }

  showResults() {
      const correct = this.questions.filter(q => 
          this.userAnswers[q.id] === q.correct
      ).length;
      const totalAnswered = Object.keys(this.userAnswers).length;
      const percentage = totalAnswered > 0 ? ((correct / totalAnswered) * 100).toFixed(1) : 0;

      alert(`Тест завершен!\n\nПравильных ответов: ${correct} из ${totalAnswered}\nПроцент успеха: ${percentage}%`);

      // Возвращаемся к начальному экрану
      this.showStartScreen();
      this.updateStatsPreview();
  }

  showMenu() {
      this.updateMenuStats();
      document.getElementById('menuScreen').classList.add('active');
  }

  hideMenu() {
      document.getElementById('menuScreen').classList.remove('active');
  }

  updateStats() {
      const totalAnswered = Object.keys(this.userAnswers).length;
      const correctAnswers = this.questions.filter(q => 
          this.userAnswers[q.id] === q.correct
      ).length;
      const successRate = totalAnswered > 0 ? ((correctAnswers / totalAnswered) * 100).toFixed(1) : 0;

      this.stats.totalAnswered = totalAnswered;
      this.stats.correctAnswers = correctAnswers;
      this.stats.successRate = successRate;

      this.saveStats();
  }

  updateStats(questionId, isCorrect) {
      if (!this.stats.answeredQuestions.includes(questionId)) {
          this.stats.answeredQuestions.push(questionId);
          this.stats.totalAnswered++;

          if (isCorrect) {
              this.stats.correctAnswers++;
              this.stats.currentStreak++;
              this.stats.bestStreak = Math.max(this.stats.bestStreak, this.stats.currentStreak);
          } else {
              this.stats.currentStreak = 0;
          }

          this.saveStats();
      }
  }

  updateStatsPreview() {
      const total = this.questions.length;
      const answered = Object.keys(this.userAnswers).length;
      const correct = this.questions.filter(q => this.userAnswers[q.id] === q.correct).length;
      const progress = ((answered / total) * 100).toFixed(1);
      const successRate = answered > 0 ? ((correct / answered) * 100).toFixed(1) : 0;

      document.getElementById('progressPreview').textContent = `${progress}%`;
      document.getElementById('correctPreview').textContent = `${successRate}%`;
  }

  updateMenuStats() {
      const total = this.questions.length;
      const answered = Object.keys(this.userAnswers).length;
      const correct = this.questions.filter(q => this.userAnswers[q.id] === q.correct).length;
      const successRate = answered > 0 ? ((correct / answered) * 100).toFixed(1) : 0;

      document.getElementById('menuTotalAnswered').textContent = `${answered}/${total}`;
      document.getElementById('menuCorrectAnswers').textContent = correct;
      document.getElementById('menuSuccessRate').textContent = `${successRate}%`;
  }

  restartTest() {
      this.stopSpeedTimer();
      this.userAnswers = {};
      this.currentQuestionIndex = 0;
      this.currentMode = null;
      this.randomQuestionOrder = [];
      const bestSpeedScore = this.stats.bestSpeedScore || 0;
      this.stats = {
          totalAnswered: 0,
          correctAnswers: 0,
          bestStreak: 0,
          currentStreak: 0,
          answeredQuestions: [],
          currentQuestion: 0,
          currentMode: null,
          randomQuestionOrder: [],
          bestSpeedScore: bestSpeedScore
      };
      this.saveStats();
      this.hideMenu();
      this.showStartScreen();
      this.updateStatsPreview();
  }

  loadStats() {
      const saved = localStorage.getItem('agroTestStats');
      return saved ? JSON.parse(saved) : {
          totalAnswered: 0,
          correctAnswers: 0,
          bestStreak: 0,
          currentStreak: 0,
          answeredQuestions: [],
          currentQuestion: 0,
          currentMode: null,
          randomQuestionOrder: [],
          bestSpeedScore: 0
      };
  }

  saveStats() {
      localStorage.setItem('agroTestStats', JSON.stringify(this.stats));
  }

  saveProgress() {
      this.stats.currentQuestion = this.currentQuestionIndex;
      this.stats.currentMode = this.currentMode;
      this.stats.randomQuestionOrder = this.randomQuestionOrder;
      this.saveStats();
  }

  showModeSelection() {
      document.getElementById('startScreen').classList.remove('active');
      document.getElementById('modeScreen').classList.add('active');
      document.getElementById('questionScreen').classList.remove('active');
      document.getElementById('menuScreen').classList.remove('active');
      
      const bestScore = this.stats.bestSpeedScore || 0;
      document.getElementById('bestScore').textContent = bestScore;
  }

  startMode(mode) {
      this.currentMode = mode;
      
      if (mode === 'random') {
          if (this.stats.currentMode === 'random' && this.stats.randomQuestionOrder && this.stats.randomQuestionOrder.length > 0) {
              this.randomQuestionOrder = this.stats.randomQuestionOrder;
          } else {
              this.shuffleQuestions();
          }
      } else if (mode === 'speed') {
          this.speedModeScore = 0;
          this.userAnswers = {};
          this.shuffleQuestions();
      }
      
      this.saveProgress();
      document.getElementById('modeScreen').classList.remove('active');
      document.getElementById('questionScreen').classList.add('active');
      
      if (mode === 'speed') {
          document.getElementById('speedTimer').style.display = 'block';
          this.startSpeedTimer();
      } else {
          document.getElementById('speedTimer').style.display = 'none';
      }
      
      this.showCurrentQuestion();
  }

  shuffleQuestions() {
      this.randomQuestionOrder = [];
      for (let i = 0; i < this.questions.length; i++) {
          this.randomQuestionOrder.push(i);
      }
      
      for (let i = this.randomQuestionOrder.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.randomQuestionOrder[i], this.randomQuestionOrder[j]] = 
          [this.randomQuestionOrder[j], this.randomQuestionOrder[i]];
      }
      
      this.currentQuestionIndex = 0;
  }

  getCurrentQuestionIndex() {
      if (this.currentMode === 'random' || this.currentMode === 'speed') {
          return this.randomQuestionOrder[this.currentQuestionIndex];
      }
      return this.currentQuestionIndex;
  }

  startSpeedTimer() {
      this.speedModeTimeLeft = 10;
      this.updateTimerDisplay();
      
      if (this.speedModeTimer) {
          clearInterval(this.speedModeTimer);
      }
      
      this.speedModeTimer = setInterval(() => {
          this.speedModeTimeLeft--;
          this.updateTimerDisplay();
          
          if (this.speedModeTimeLeft <= 3) {
              document.getElementById('speedTimer').classList.add('warning');
          } else {
              document.getElementById('speedTimer').classList.remove('warning');
          }
          
          if (this.speedModeTimeLeft <= 0) {
              clearInterval(this.speedModeTimer);
              this.handleSpeedTimeout();
          }
      }, 1000);
  }

  updateTimerDisplay() {
      document.getElementById('timerSeconds').textContent = this.speedModeTimeLeft;
  }

  handleSpeedTimeout() {
      const realIndex = this.getCurrentQuestionIndex();
      const question = this.questions[realIndex];
      
      if (this.userAnswers[question.id] === undefined) {
          this.userAnswers[question.id] = -1;
      }
      
      setTimeout(() => {
          this.moveToNextQuestion();
      }, 500);
  }

  stopSpeedTimer() {
      if (this.speedModeTimer) {
          clearInterval(this.speedModeTimer);
          this.speedModeTimer = null;
      }
  }

  moveToNextQuestion() {
      if (this.currentMode === 'speed') {
          if (this.currentQuestionIndex < this.questions.length - 1) {
              this.currentQuestionIndex++;
              this.showCurrentQuestion();
              this.startSpeedTimer();
          } else {
              this.finishSpeedMode();
          }
      } else {
          if (this.currentQuestionIndex < this.questions.length - 1) {
              this.currentQuestionIndex++;
              this.showCurrentQuestion();
              this.saveProgress();
          }
      }
  }

  finishSpeedMode() {
      this.stopSpeedTimer();
      
      const answeredCount = Object.keys(this.userAnswers).length;
      const correctAnswers = this.questions.filter(q => 
          this.userAnswers[q.id] === q.correct
      ).length;
      
      if (!this.stats.bestSpeedScore || correctAnswers > this.stats.bestSpeedScore) {
          this.stats.bestSpeedScore = correctAnswers;
          this.saveStats();
      }
      
      alert(`Скоростной режим завершен!\n\nОтвечено: ${answeredCount} из ${this.questions.length}\nПравильных ответов: ${correctAnswers}\n\nЛучший результат: ${this.stats.bestSpeedScore}`);
      
      this.userAnswers = {};
      this.currentQuestionIndex = 0;
      this.currentMode = null;
      this.randomQuestionOrder = [];
      this.saveProgress();
      this.showStartScreen();
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  window.agroTest = new AgroTest();
});