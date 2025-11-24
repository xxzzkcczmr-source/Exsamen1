const questions = [
    {
        id: 1,
        section: "Агроэкосистема — устойчивость",
        question: "Почему агроэкосистема быстро теряет устойчивость при монокультуре?",
        answers: [
            "Снижается функциональная и биологическая разнообразность",
            "Повышается содержание азота в атмосфере",
            "Ускоряется фотосинтез",
            "Появляется больше супердепредаторов"
        ],
        correct: 0,
        es: {
            section: "Agroecosistema — estabilidad",
            question: "¿Por qué un agroecosistema pierde rápidamente su estabilidad cuando hay monocultivo?",
            answers: [
                "Baja la diversidad funcional y biológica",
                "Aumenta el nitrógeno en la atmósfera",
                "Se acelera la fotosíntesis",
                "Aparecen más superdepredadores"
            ]
        }
    },
    {
        id: 2,
        section: "Биотические отношения — комменсализм",
        question: "Что является примером комменсализма в агросистеме?",
        answers: [
            "Эпифит живёт на дереве, не вредя ему",
            "Хищник поедает фитофага",
            "Пчела опыляет цветок",
            "Гриб вызывает некроз листьев"
        ],
        correct: 0,
        es: {
            section: "Relaciones bióticas — comensalismo",
            question: "¿Cuál es un ejemplo de comensalismo en un agroecosistema?",
            answers: [
                "Una epífita vive sobre un árbol sin dañarlo",
                "Un depredador consume a un fitófago",
                "Una abeja poliniza una flor",
                "Un hongo causa necrosis"
            ]
        }
    },
    {
        id: 3,
        section: "Санитарное состояние — болезни",
        question: "Какой фактор НЕ входит в треугольник болезни?",
        answers: [
            "Паразит",
            "Среда",
            "Хозяин",
            "Урожайность поля"
        ],
        correct: 0,
        es: {
            section: "Sanidad — enfermedades",
            question: "¿Qué factor NO forma parte del triángulo de la enfermedad?",
            answers: [
                "Parásito",
                "Ambiente",
                "Huésped",
                "Rendimiento del cultivo"
            ]
        }
    },
    {
        id: 4,
        section: "Почва — органическое вещество",
        question: "Почему недостаток органического вещества опасен для почвы?",
        answers: [
            "Повышается уровень CO₂",
            "Ускоряется эвтрофикация",
            "Не формируется комплекс глинисто-гумусовый",
            "Стебли становятся прочнее"
        ],
        correct: 2,
        es: {
            section: "Suelo — materia orgánica",
            question: "¿Por qué la falta de materia orgánica es peligrosa para el suelo?",
            answers: [
                "Aumenta el CO₂",
                "Se acelera la eutrofización",
                "No se forma el complejo arcillo-húmico",
                "Los tallos se vuelven más duros"
            ]
        }
    },
    {
        id: 5,
        section: "Фитофаги — вредители",
        question: "Почему чрезмерное применение пестицидов может увеличить число вредителей?",
        answers: [
            "Уменьшается солнечное освещение",
            "Погибает фауна-auxiliar",
            "Ускоряется развитие корней",
            "Улучшается минеральное питание"
        ],
        correct: 1,
        es: {
            section: "Fitófagos — plagas",
            question: "¿Por qué el uso excesivo de plaguicidas puede aumentar la cantidad de plagas?",
            answers: [
                "Disminuye la luz solar",
                "Muere la fauna auxiliar",
                "Aumenta el desarrollo radicular",
                "Mejora la nutrición mineral"
            ]
        }
    },
    {
        id: 6,
        section: "Микорризы — симбиоз",
        question: "Для чего растениям нужны микорризы?",
        answers: [
            "Разрушают хлорофилл",
            "Увеличивают поглощение воды и минеральных веществ",
            "Привлекают фитофагов",
            "Ускоряют испарение"
        ],
        correct: 1,
        es: {
            section: "Micorrizas — simbiosis",
            question: "¿Para qué necesitan las plantas las micorrizas?",
            answers: [
                "Destruyen la clorofila",
                "Aumentan la absorción de agua y minerales",
                "Atraen fitófagos",
                "Aumentan la evaporación"
            ]
        }
    },
    {
        id: 7,
        section: "Цепи питания — уровни трофические",
        question: "Кто относится к потребителям вторичного уровня?",
        answers: [
            "Фитофаги",
            "Хищники, питающиеся фитофагами",
            "Паразитоиды",
            "Растения"
        ],
        correct: 1,
        es: {
            section: "Cadenas tróficas — niveles",
            question: "¿Quién pertenece al nivel de consumidores secundarios?",
            answers: [
                "Fitófagos",
                "Depredadores de fitófagos",
                "Parasitoides",
                "Plantas"
            ]
        }
    },
    {
        id: 8,
        section: "Биотоп — устойчивость",
        question: "Что усиливает устойчивость агроэкосистемы?",
        answers: [
            "Высокая функциональная биоразнообразность",
            "Увеличение монокультуры",
            "Постоянное внесение азота",
            "Уменьшение флоры арвенсе"
        ],
        correct: 0,
        es: {
            section: "Biotopo — resiliencia",
            question: "¿Qué aumenta la resiliencia de un agroecosistema?",
            answers: [
                "Alta diversidad funcional",
                "Aumento del monocultivo",
                "Aporte constante de nitrógeno",
                "Eliminación total de flora arvense"
            ]
        }
    },
    {
        id: 9,
        section: "Патосистема — паразитизм",
        question: "Что характеризует паразитоидов?",
        answers: [
            "Убивают хозяина в конце развития",
            "Питаются только растениями",
            "Создают микорризу",
            "Живут в симбиозе с грибами"
        ],
        correct: 0,
        es: {
            section: "Patosistema — parasitismo",
            question: "¿Qué caracteriza a los parasitoides?",
            answers: [
                "Matan al huésped al final de su desarrollo",
                "Solo comen plantas",
                "Forman micorrizas",
                "Viven en simbiosis con hongos"
            ]
        }
    },
    {
        id: 10,
        section: "Плодородие — азот",
        question: "Почему избыток азота может увеличивать чувствительность к болезням?",
        answers: [
            "Корни перестают дышать",
            "Солнечный свет блокируется",
            "Фотосинтез прекращается",
            "Снижается лигнификация тканей"
        ],
        correct: 3,
        es: {
            section: "Fertilidad — nitrógeno",
            question: "¿Por qué el exceso de nitrógeno puede aumentar la sensibilidad a enfermedades?",
            answers: [
                "Las raíces dejan de respirar",
                "Se bloquea la luz solar",
                "Se detiene la fotosíntesis",
                "Disminuye la lignificación de los tejidos"
            ]
        }
    },
    {
        id: 11,
        section: "Отношения — конкуренция",
        question: "Что является примером конкуренции в агросистеме?",
        answers: [
            "Флора арвенсе забирает воду у культуры",
            "Пчела опыляет цветок",
            "Микорриза улучшает питание",
            "Хищник ест вредителя"
        ],
        correct: 0,
        es: {
            section: "Relaciones — competencia",
            question: "¿Cuál es un ejemplo de competencia en un agroecosistema?",
            answers: [
                "Flora arvense compite por el agua",
                "Abeja poliniza la flor",
                "Micorriza mejora la nutrición",
                "Depredador consume plaga"
            ]
        }
    },
    {
        id: 12,
        section: "Вредители — миграция",
        question: "Почему миграция вредителей усиливается в монокультуре?",
        answers: [
            "Легче распространяться без барьеров",
            "Избыточная тень",
            "Не хватает CO₂",
            "Слишком много супердепредаторов"
        ],
        correct: 0,
        es: {
            section: "Plagas — migración",
            question: "¿Por qué la migración de plagas aumenta en el monocultivo?",
            answers: [
                "Es más fácil dispersarse sin barreras",
                "Exceso de sombra",
                "Falta de CO₂",
                "Exceso de superdepredadores"
            ]
        }
    },
    {
        id: 13,
        section: "Сапротрофы — почва",
        question: "Зачем нужны сапротрофы в почве?",
        answers: [
            "Разлагают органику и обеспечивают минерализацию",
            "Повышают солёность почвы",
            "Блокируют корневыe волоски",
            "Уменьшают уровень кислорода"
        ],
        correct: 0,
        es: {
            section: "Saprótrofos — suelo",
            question: "¿Para qué sirven los saprótrofos en el suelo?",
            answers: [
                "Descomponen materia orgánica y mineralizan",
                "Aumentan la salinidad",
                "Bloquean los pelos radicales",
                "Reducen oxígeno"
            ]
        }
    },
    {
        id: 14,
        section: "Патология — признаки",
        question: "Что относится к признакам болезни растений?",
        answers: [
            "Увеличение урожайности",
            "Некрозы, пятна, хлороз",
            "Ускорение всхожести",
            "Укрепление тканей"
        ],
        correct: 1,
        es: {
            section: "Patología — síntomas",
            question: "¿Qué corresponde a los síntomas de una enfermedad vegetal?",
            answers: [
                "Mayor rendimiento",
                "Necrosis, manchas, clorosis",
                "Mayor germinación",
                "Endurecimiento de tejidos"
            ]
        }
    },
    {
        id: 15,
        section: "Фауна — резервуары",
        question: "Зачем сохранять полосы растительности и резервуары фауны?",
        answers: [
            "Чтобы уменьшить количество растений",
            "Чтобы поддерживать популяции полезных хищников",
            "Чтобы увеличить засоление",
            "Чтобы ускорить эрозию"
        ],
        correct: 1,
        es: {
            section: "Fauna — reservorios",
            question: "¿Para qué conservar franjas vegetales y reservorios de fauna?",
            answers: [
                "Para reducir la cantidad de plantas",
                "Para mantener poblaciones de depredadores útiles",
                "Para aumentar la salinidad",
                "Para acelerar la erosión"
            ]
        }
    },
    {
        id: 16,
        section: "Агроэкосистема — энергозатраты",
        question: "Почему агроэкосистема нуждается во внешних источниках энергии?",
        answers: [
            "Урожай уносится из системы",
            "Корни перестают расти",
            "Листья теряют хлорофилл",
            "Увеличивается содержание серы"
        ],
        correct: 0,
        es: {
            section: "Agroecosistema — energía",
            question: "¿Por qué un agroecosistema necesita fuentes externas de energía?",
            answers: [
                "La cosecha se extrae del sistema",
                "Las raíces dejan de crecer",
                "Las hojas pierden clorofila",
                "Aumenta el azufre"
            ]
        }
    },
    {
        id: 17,
        section: "Санитария — стресс",
        question: "Что может вызвать стресс растения и повысить риск заболевания?",
        answers: [
            "Увеличение хищников",
            "Дополнительные микорризы",
            "Наличие флоры арвенсе",
            "Засоление почвы"
        ],
        correct: 3,
        es: {
            section: "Sanidad — estrés",
            question: "¿Qué puede causar estrés en la planta y aumentar el riesgo de enfermedad?",
            answers: [
                "Incremento de depredadores",
                "Micorrizas extra",
                "Presencia de flora arvense",
                "Salinización del suelo"
            ]
        }
    },
    {
        id: 18,
        section: "Биотические отношения — симбиоз",
        question: "Что является примером симбиоза?",
        answers: [
            "Пчела опыляет цветок",
            "Фитофаг ест листья",
            "Лишайник (гриб + водоросль)",
            "Хищник ловит мышей"
        ],
        correct: 2,
        es: {
            section: "Relaciones bióticas — simbiosis",
            question: "¿Qué es un ejemplo de simbiosis?",
            answers: [
                "Abeja poliniza flor",
                "Fitófago come hojas",
                "Un liquen (hongo + alga)",
                "Depredador atrapa ratones"
            ]
        }
    },
    {
        id: 19,
        section: "Фауна — вредители",
        question: "Почему в конвенциональных культурах врагов вредителей обычно меньше?",
        answers: [
            "Из-за недостатка CO₂",
            "Из-за избытка тени",
            "Из-за пестицидов, которые убивают фауну auxiliar",
            "Из-за высокой влажности"
        ],
        correct: 2,
        es: {
            section: "Fauna — plagas",
            question: "¿Por qué en los cultivos convencionales suele haber menos enemigos naturales?",
            answers: [
                "Por falta de CO₂",
                "Por exceso de sombra",
                "Por plaguicidas que matan la fauna auxiliar",
                "Por alta humedad"
            ]
        }
    },
    {
        id: 20,
        section: "Цепи питания — последствия",
        question: "Что происходит, если из цепи питания исчезает один уровень?",
        answers: [
            "Всё остаётся одинаковым",
            "Нарушается баланс и меняется численность других уровней",
            "Фотосинтез усиливается",
            "Растения прекращают расти"
        ],
        correct: 1,
        es: {
            section: "Cadenas tróficas — consecuencias",
            question: "¿Qué ocurre si desaparece un nivel de la cadena trófica?",
            answers: [
                "Todo se mantiene igual",
                "Se altera el equilibrio y cambian los demás niveles",
                "La fotosíntesis aumenta",
                "Las plantas dejan de crecer"
            ]
        }
    },
    {
        id: 21,
        section: "Патология — симптомы",
        question: "Какой симптом часто связан с избытком озона?",
        answers: [
            "Удлинение стебля",
            "Утолщение коры",
            "Увеличение корней",
            "Мозаика, хлороз, пятнистость"
        ],
        correct: 3,
        es: {
            section: "Patología — síntomas",
            question: "¿Qué síntoma suele relacionarse con el exceso de ozono?",
            answers: [
                "Elongación del tallo",
                "Engrosamiento de la corteza",
                "Aumento de raíces",
                "Moteado, clorosis, manchas"
            ]
        }
    },
    {
        id: 22,
        section: "Почва — токсичность",
        question: "Как называется состояние почвы, когда она теряет способность давать пользу растениям?",
        answers: [
            "Перегревание",
            "Анабиоз",
            "Усталость почвы",
            "Избыточная фитоактивация"
        ],
        correct: 2,
        es: {
            section: "Suelo — toxicidad",
            question: "¿Cómo se llama el estado del suelo cuando pierde su capacidad de beneficiar a las plantas?",
            answers: [
                "Sobrecalentamiento",
                "Anabiosis",
                "Fatiga del suelo",
                "Fitoactivación excesiva"
            ]
        }
    },
    {
        id: 23,
        section: "Отношения — паразитизм",
        question: "Что характеризует паразитизм?",
        answers: [
            "Оба выигрывают",
            "Один получает выгоду, другой — вред",
            "Нет эффекта ни для кого",
            "Оба погибают"
        ],
        correct: 1,
        es: {
            section: "Relaciones — parasitismo",
            question: "¿Qué caracteriza el parasitismo?",
            answers: [
                "Ambos ganan",
                "Uno obtiene beneficio y el otro perjuicio",
                "No afecta a ninguno",
                "Ambos mueren"
            ]
        }
    },
    {
        id: 24,
        section: "Флорa — флора арвенсе",
        question: "Зачем иногда сохраняют флору арвенсе?",
        answers: [
            "Она служит резервуаром для фауны auxiliar",
            "Уменьшает урожай",
            "Повышает солёность",
            "Ускоряет эрозию"
        ],
        correct: 0,
        es: {
            section: "Flora — flora arvense",
            question: "¿Para qué a veces se conserva la flora arvense?",
            answers: [
                "Sirve de reservorio para fauna auxiliar",
                "Reduce la producción",
                "Aumenta la salinidad",
                "Acelera la erosión"
            ]
        }
    },
    {
        id: 25,
        section: "Санитария — инóкулум",
        question: "Что означает 'инóкулум' в патологии растений?",
        answers: [
            "Количество удобрений",
            "Объём воды в почве",
            "Число растений на гектар",
            "Количество патогена, способного вызвать инфекцию"
        ],
        correct: 3,
        es: {
            section: "Sanidad — inóculo",
            question: "¿Qué significa 'inóculo' en patología vegetal?",
            answers: [
                "Cantidad de fertilizante",
                "Volumen de agua en el suelo",
                "Plantas por hectárea",
                "Cantidad de patógeno capaz de causar infección"
            ]
        }
    },
    {
        id: 26,
        section: "Удобрения — влияние на болезни",
        question: "Почему избыток азота делает растения привлекательнее для паразитов?",
        answers: [
            "Уменьшается количество калия",
            "Исчезают корневые волоски",
            "Повышается содержание аминокислот в тканях",
            "Увеличивается фототропизм"
        ],
        correct: 2,
        es: {
            section: "Fertilizantes — efecto en enfermedades",
            question: "¿Por qué el exceso de nitrógeno hace a la planta más atractiva para los parásitos?",
            answers: [
                "Disminuye el potasio",
                "Desaparecen los pelos radicales",
                "Aumenta el contenido de aminoácidos",
                "Aumenta el fototropismo"
            ]
        }
    },
    {
        id: 27,
        section: "Депредация — контроль вредителей",
        question: "Почему присутствие хищников важно для здоровья агросистемы?",
        answers: [
            "Увеличивают влажность",
            "Они удерживают популяции фитофагов под контролем",
            "Снижают свет",
            "Ускоряют испарение"
        ],
        correct: 1,
        es: {
            section: "Depredación — control de plagas",
            question: "¿Por qué la presencia de depredadores es esencial para la salud del agroecosistema?",
            answers: [
                "Aumentan la humedad",
                "Mantienen controladas las poblaciones de fitófagos",
                "Reducen la luz",
                "Aumentan la evaporación"
            ]
        }
    },
    {
        id: 28,
        section: "Биотоп — влияние человека",
        question: "Почему агроэкосистема считается антропизированной?",
        answers: [
            "Человек выбирает виды и регулирует систему",
            "Из-за избыточного ветра",
            "Из-за высокой тени",
            "Из-за избытка грибов"
        ],
        correct: 0,
        es: {
            section: "Biotopo — influencia humana",
            question: "¿Por qué un agroecosistema se considera antropizado?",
            answers: [
                "El humano selecciona especies y regula el sistema",
                "Por exceso de viento",
                "Por mucha sombra",
                "Por exceso de hongos"
            ]
        }
    },
    {
        id: 29,
        section: "Трофобиоc — питание",
        question: "Что утверждает теория трофобиоза?",
        answers: [
            "Паразиты питаются только сахаром",
            "Паразиты появляются при отсутствии света",
            "Чем больше воды — тем меньше паразитов",
            "Чем больше аминокислот в растении — тем привлекательнее оно для паразитов"
        ],
        correct: 3,
        es: {
            section: "Trofobiosis — nutrición",
            question: "¿Qué afirma la teoría de la trofobiosis?",
            answers: [
                "Los parásitos solo comen azúcar",
                "Los parásitos aparecen sin luz",
                "Cuanta más agua, menos parásitos",
                "Cuantos más aminoácidos tiene la planta, más atractiva es para los parásitos"
            ]
        }
    },
    {
        id: 30,
        section: "Патосистема — определение",
        question: "Что такое патосистема?",
        answers: [
            "Система удобрений",
            "Подсистема, где изучается взаимодействие паразита и хозяина",
            "Любая схема полива",
            "Комплекс микорриз"
        ],
        correct: 1,
        es: {
            section: "Patosistema — definición",
            question: "¿Qué es un patosistema?",
            answers: [
                "Sistema de fertilización",
                "Subsistema donde se estudia la interacción parásito–huésped",
                "Un esquema de riego",
                "Conjunto de micorrizas"
            ]
        }
    },
    {
        id: 31,
        section: "Экология — продуктивность",
        question: "Почему агроэкосистема имеет низкую реинвестицию биомассы?",
        answers: [
            "Корни слишком глубокие",
            "Недостаток света",
            "Урожай выносится из системы",
            "Избыток кислорода"
        ],
        correct: 2,
        es: {
            section: "Ecología — productividad",
            question: "¿Por qué un agroecosistema tiene baja reinversión de biomasa?",
            answers: [
                "Las raíces son demasiado profundas",
                "Falta de luz",
                "La cosecha se extrae del sistema",
                "Exceso de oxígeno"
            ]
        }
    },
    {
        id: 32,
        section: "Болезни — диагностика",
        question: "Когда требуется лабораторный анализ для выявления болезни?",
        answers: [
            "Когда урожай высокий",
            "Когда много света",
            "Когда ткань становится толще",
            "Когда симптомы неочевидны"
        ],
        correct: 3,
        es: {
            section: "Enfermedades — diagnóstico",
            question: "¿Cuándo se necesita análisis de laboratorio para diagnosticar una enfermedad?",
            answers: [
                "Cuando la cosecha es alta",
                "Cuando hay mucha luz",
                "Cuando el tejido se engrosa",
                "Cuando los síntomas no son evidentes"
            ]
        }
    },
    {
        id: 33,
        section: "Биотические отношения — конкуренция",
        question: "Что вызывает конкуренцию между растениями в агросистеме?",
        answers: [
            "Хищники",
            "Борьба за воду и nutrientes",
            "Солнечные блики",
            "Удлинение корней"
        ],
        correct: 1,
        es: {
            section: "Relaciones bióticas — competencia",
            question: "¿Qué causa competencia entre plantas en un agroecosistema?",
            answers: [
                "Depredadores",
                "Competencia por agua y nutrientes",
                "Reflejos solares",
                "Alargamiento de raíces"
            ]
        }
    },
    {
        id: 34,
        section: "Фитофаги — вредители",
        question: "Почему исчезновение хищников ведёт к росту числа фитофагов?",
        answers: [
            "Фитофаги больше не контролируются",
            "Увеличивается фотосинтез",
            "Становится больше нитратов",
            "Увеличивается количество дождей"
        ],
        correct: 0,
        es: {
            section: "Fitófagos — plagas",
            question: "¿Por qué la desaparición de depredadores aumenta los fitófagos?",
            answers: [
                "Los fitófagos dejan de ser controlados",
                "Aumenta la fotosíntesis",
                "Aumentan los nitratos",
                "Aumentan las lluvias"
            ]
        }
    },
    {
        id: 35,
        section: "Удобрения — влияние",
        question: "Какое удобрение усиливает устойчивость растений к болезням?",
        answers: [
            "Азот",
            "Калий",
            "Хлор",
            "Магний"
        ],
        correct: 1,
        es: {
            section: "Fertilizantes — efecto",
            question: "¿Qué fertilizante aumenta la resistencia de las plantas a las enfermedades?",
            answers: [
                "Nitrógeno",
                "Potasio",
                "Cloro",
                "Magnesio"
            ]
        }
    },
    {
        id: 36,
        section: "Сапротрофы — роль",
        question: "Какую функцию выполняют сапротрофы?",
        answers: [
            "Поглощают солнечный свет",
            "Ускоряют фототропизм",
            "Разлагают органику до минеральных веществ",
            "Блокируют гумус"
        ],
        correct: 2,
        es: {
            section: "Saprótrofos — rol",
            question: "¿Qué función cumplen los saprótrofos?",
            answers: [
                "Absorben luz solar",
                "Aumentan el fototropismo",
                "Descomponen materia orgánica en minerales",
                "Bloquean el humus"
            ]
        }
    },
    {
        id: 37,
        section: "Патология — факторы",
        question: "Что необходимо для возникновения болезни?",
        answers: [
            "Патоген, хозяин, условия среды",
            "Холодная почва",
            "Высокое давление",
            "Избыток кислорода"
        ],
        correct: 0,
        es: {
            section: "Patología — factores",
            question: "¿Qué se necesita para que ocurra una enfermedad?",
            answers: [
                "Patógeno, huésped, ambiente adecuado",
                "Suelo frío",
                "Alta presión",
                "Exceso de oxígeno"
            ]
        }
    },
    {
        id: 38,
        section: "Цепи питания — уровни",
        question: "Кто является продуцентами в цепи питания?",
        answers: [
            "Хищники",
            "Паразитоиды",
            "Сапротрофы",
            "Растения"
        ],
        correct: 3,
        es: {
            section: "Cadenas tróficas — niveles",
            question: "¿Quiénes son los productores en la cadena trófica?",
            answers: [
                "Depredadores",
                "Parasitoides",
                "Saprótrofos",
                "Plantas"
            ]
        }
    },
    {
        id: 39,
        section: "Почва — органика",
        question: "Что происходит при очень низком содержании органического вещества?",
        answers: [
            "Усиливается рост",
            "Почва становится инертной",
            "Улучшаются иммунные реакции",
            "Уменьшаются фитофаги"
        ],
        correct: 1,
        es: {
            section: "Suelo — materia orgánica",
            question: "¿Qué ocurre cuando la materia orgánica es muy baja?",
            answers: [
                "Aumenta el crecimiento",
                "El suelo se vuelve inerte",
                "Mejora la inmunidad",
                "Disminuyen los fitófagos"
            ]
        }
    },
    {
        id: 40,
        section: "Патогены — заражение",
        question: "Какой фактор часто способствует успешной инфекции?",
        answers: [
            "Стресс растения",
            "Температура воздуха",
            "Глубина корней",
            "Количество хлорофилла"
        ],
        correct: 0,
        es: {
            section: "Patógenos — infección",
            question: "¿Qué factor suele favorecer el éxito de una infección?",
            answers: [
                "Estrés de la planta",
                "Temperatura del aire",
                "Profundidad de raíces",
                "Cantidad de clorofila"
            ]
        }
    },
    {
        id: 41,
        section: "Отношения — mutualismo",
        question: "Пример mutualизма в сельском хозяйстве:",
        answers: [
            "Хищник + жертва",
            "Фитофаг + лист",
            "Микорриза + корни растения",
            "Бактерия вызывает пятна"
        ],
        correct: 2,
        es: {
            section: "Relaciones — mutualismo",
            question: "Ejemplo de mutualismo en agricultura:",
            answers: [
                "Depredador + presa",
                "Fitófago + hoja",
                "Micorriza + raíces de planta",
                "Bacteria produce manchas"
            ]
        }
    },
    {
        id: 42,
        section: "Агросистема — управление",
        question: "Кто определяет структуру и состав агроэкосистемы?",
        answers: [
            "Случайность",
            "Человек",
            "Только климат",
            "Только почва"
        ],
        correct: 1,
        es: {
            section: "Agrosistema — gestión",
            question: "¿Quién determina la estructura y composición del agroecosistema?",
            answers: [
                "El azar",
                "El ser humano",
                "Solo el clima",
                "Solo el suelo"
            ]
        }
    },
    {
        id: 43,
        section: "Флора — роль",
        question: "Почему флора арвенсе важна в экосистеме?",
        answers: [
            "Увеличивает эрозию",
            "Блокирует корни",
            "Уменьшает гумус",
            "Поддерживает цепи питания и служит укрытием"
        ],
        correct: 3,
        es: {
            section: "Flora — rol",
            question: "¿Por qué es importante la flora arvense en el ecosistema?",
            answers: [
                "Aumenta la erosión",
                "Bloquea las raíces",
                "Reduce el humus",
                "Mantiene cadenas tróficas y sirve de refugio"
            ]
        }
    },
    {
        id: 44,
        section: "Абиотические факторы — свет",
        question: "Что может вызвать дефицит света у растений?",
        answers: [
            "Рост хищников",
            "Усиление паразитизма",
            "Увеличение микорриз",
            "Снижение лигнификации"
        ],
        correct: 3,
        es: {
            section: "Factores abióticos — luz",
            question: "¿Qué puede causar la falta de luz en las plantas?",
            answers: [
                "Aumento de depredadores",
                "Más parasitismo",
                "Aumento de micorrizas",
                "Disminución de lignificación"
            ]
        }
    },
    {
        id: 45,
        section: "Цепи питания — последствия отсутствия хищников",
        question: "Что происходит, если исчезает уровень вторичных потребителей?",
        answers: [
            "Фитофаги размножаются чрезмерно",
            "Увеличивается органика",
            "Снижается фотосинтез",
            "Улучшается структура почвы"
        ],
        correct: 0,
        es: {
            section: "Cadenas tróficas — consecuencias sin depredadores",
            question: "¿Qué ocurre si desaparece el nivel de consumidores secundarios?",
            answers: [
                "Los fitófagos se multiplican en exceso",
                "Aumenta la materia orgánica",
                "Disminuye la fotosíntesis",
                "Mejora la estructura del suelo"
            ]
        }
    },
    {
        id: 46,
        section: "Агроэкосистема — разнообразие",
        question: "Почему высокая биоразнообразность повышает устойчивость агросистемы?",
        answers: [
            "Больше соли в почве",
            "Больше функциональных связей и контроля вредителей",
            "Меньше продуцентов",
            "Почва становится инертной"
        ],
        correct: 1,
        es: {
            section: "Agroecosistema — diversidad",
            question: "¿Por qué una alta biodiversidad aumenta la estabilidad del agroecosistema?",
            answers: [
                "Más sal en el suelo",
                "Más relaciones funcionales y control de plagas",
                "Menos productores",
                "El suelo se vuelve inerte"
            ]
        }
    },
    {
        id: 47,
        section: "Патология — факторы среды",
        question: "Какой абиотический фактор может способствовать болезням растений?",
        answers: [
            "Избыток влажности",
            "Высокая биомасса",
            "Короткий день",
            "Сильная лигнификация"
        ],
        correct: 0,
        es: {
            section: "Patología — factores ambientales",
            question: "¿Qué factor abiótico puede favorecer enfermedades en plantas?",
            answers: [
                "Exceso de humedad",
                "Alta biomasa",
                "Día corto",
                "Fuerte lignificación"
            ]
        }
    },
    {
        id: 48,
        section: "Паразитоиды — цикл",
        question: "Почему паразитоид убивает хозяина?",
        answers: [
            "Хозяин не нужен",
            "Паразитоиду нужен свет",
            "Личинка питается внутренними тканями",
            "Хозяин не даёт воды"
        ],
        correct: 2,
        es: {
            section: "Parasitoides — ciclo",
            question: "¿Por qué un parasitoide mata al huésped?",
            answers: [
                "El huésped no es necesario",
                "El parasitoide necesita luz",
                "La larva se alimenta de los tejidos internos",
                "El huésped no le da agua"
            ]
        }
    },
    {
        id: 49,
        section: "Болезни — симптомы",
        question: "Какой симптом часто указывает на воздействие фотооксидантов?",
        answers: [
            "Утолщение корней",
            "Потемнение семян",
            "Рост побегов",
            "Мозаика и некрозы"
        ],
        correct: 3,
        es: {
            section: "Enfermedades — síntomas",
            question: "¿Qué síntoma indica a menudo la presencia de fotooxidantes?",
            answers: [
                "Engrosamiento radicular",
                "Oscurecimiento de semillas",
                "Crecimiento de brotes",
                "Moteado y necrosis"
            ]
        }
    },
    {
        id: 50,
        section: "Фитофаги — вред",
        question: "Почему фитофаги опасны для культурных растений?",
        answers: [
            "Увеличивают гумус",
            "Питаются листьями и побегами",
            "Ускоряют опыление",
            "Укрепляют ткани растений"
        ],
        correct: 1,
        es: {
            section: "Fitófagos — daño",
            question: "¿Por qué los fitófagos son peligrosos para los cultivos?",
            answers: [
                "Aumentan el humus",
                "Se alimentan de hojas y brotes",
                "Aceleran la polinización",
                "Fortalecen los tejidos"
            ]
        }
    },
    {
        id: 51,
        section: "Фауна auxiliar — значение",
        question: "Зачем сохранять природные укрытия (сетос, полосы)?",
        answers: [
            "Чтобы фауна auxiliar могла размножаться",
            "Чтобы снизить органическое вещество",
            "Чтобы увеличить солёность",
            "Чтобы повысить фитофагию"
        ],
        correct: 0,
        es: {
            section: "Fauna auxiliar — importancia",
            question: "¿Para qué se conservan los setos y franjas vegetales?",
            answers: [
                "Para que la fauna auxiliar pueda reproducirse",
                "Para reducir la materia orgánica",
                "Para aumentar la salinidad",
                "Para aumentar fitofagia"
            ]
        }
    },
    {
        id: 52,
        section: "Сапротрофы — цепи питания",
        question: "Какую роль играют сапротрофы в цепи питания?",
        answers: [
            "Производят хлорофилл",
            "Поглощают нитраты",
            "Замыкают цикл, минерализуя органику",
            "Превращают свет в энергию"
        ],
        correct: 2,
        es: {
            section: "Saprótrofos — cadenas tróficas",
            question: "¿Qué papel juegan los saprótrofos en la cadena trófica?",
            answers: [
                "Producen clorofila",
                "Absorben nitratos",
                "Cierran el ciclo mineralizando la materia orgánica",
                "Transforman luz en energía"
            ]
        }
    },
    {
        id: 53,
        section: "Удобрения — влияние",
        question: "Какое действие оказывают калий и фосфор на растение?",
        answers: [
            "Уменьшают лигнификацию",
            "Повышают устойчивость к болезням",
            "Снижают прочность тканей",
            "Увеличивают потребность в азоте"
        ],
        correct: 1,
        es: {
            section: "Fertilizantes — efecto",
            question: "¿Qué efecto tienen el potasio y el fósforo en la planta?",
            answers: [
                "Reducen la lignificación",
                "Aumentan la resistencia a enfermedades",
                "Debilitan los tejidos",
                "Aumentan la necesidad de nitrógeno"
            ]
        }
    },
    {
        id: 54,
        section: "Патоген — условия",
        question: "Какое условие НЕобходимо для заражения?",
        answers: [
            "Сильный ветер",
            "Длинный день",
            "Высокая скорость роста",
            "Подходящие климатические условия"
        ],
        correct: 3,
        es: {
            section: "Patógeno — condiciones",
            question: "¿Qué condición es imprescindible para la infección?",
            answers: [
                "Viento fuerte",
                "Día largo",
                "Rápido crecimiento",
                "Condiciones ambientales adecuadas"
            ]
        }
    },
    {
        id: 55,
        section: "Биологический контроль — значение",
        question: "Почему биологический контроль считается устойчивым методом?",
        answers: [
            "Использует естественных врагов",
            "Требует много химикатов",
            "Повышает засоление",
            "Разрушает гумус"
        ],
        correct: 0,
        es: {
            section: "Control biológico — importancia",
            question: "¿Por qué el control biológico se considera un método sostenible?",
            answers: [
                "Utiliza enemigos naturales",
                "Requiere muchos químicos",
                "Aumenta la salinidad",
                "Destruye el humus"
            ]
        }
    },
    {
        id: 56,
        section: "Почва — биология",
        question: "Почему важно поддерживать биологию почвы?",
        answers: [
            "Улучшается структура и доступность питательных веществ",
            "Увеличивается эрозия",
            "Исчезают сапротрофы",
            "Уменьшается гумус"
        ],
        correct: 0,
        es: {
            section: "Suelo — biología",
            question: "¿Por qué es importante mantener la biología del suelo?",
            answers: [
                "Mejora la estructura y disponibilidad de nutrientes",
                "Aumenta la erosión",
                "Desaparecen los saprótrofos",
                "Se reduce el humus"
            ]
        }
    },
    {
        id: 57,
        section: "Агросистема — управление человеком",
        question: "Что характеризует агроэкосистему как антропизированную?",
        answers: [
            "Только дожди регулируют урожай",
            "Только дикие виды определяют состав",
            "Человек вносит удобрения, выбирает культуры и регулирует процессы",
            "Вмешательство отсутствует"
        ],
        correct: 2,
        es: {
            section: "Agrosistema — gestión humana",
            question: "¿Qué caracteriza al agroecosistema como antropizado?",
            answers: [
                "Solo las lluvias regulan la cosecha",
                "Solo especies silvestres determinan la composición",
                "El ser humano aporta insumos, selecciona cultivos y regula procesos",
                "No hay intervención"
            ]
        }
    },
    {
        id: 58,
        section: "Вредители — вспышки",
        question: "Почему применение инсектицидов иногда вызывает вспышки новых вредителей?",
        answers: [
            "Уменьшают свет",
            "Истребляют естественных врагов",
            "Повышают влажность",
            "Укрепляют корни"
        ],
        correct: 1,
        es: {
            section: "Plagas — brotes",
            question: "¿Por qué a veces los insecticidas generan brotes de nuevas plagas?",
            answers: [
                "Reducen la luz",
                "Eliminan enemigos naturales",
                "Aumentan la humedad",
                "Fortalecen las raíces"
            ]
        }
    },
    {
        id: 59,
        section: "Фитопатогены — инокулум",
        question: "Что приводит к увеличению инокулума в поле?",
        answers: [
            "Избыток калия",
            "Высокая освещённость",
            "Густая посадка деревьев",
            "Остатки заражённых растений"
        ],
        correct: 3,
        es: {
            section: "Fitopatógenos — inóculo",
            question: "¿Qué provoca el aumento del inóculo en el campo?",
            answers: [
                "Exceso de potasio",
                "Mucha luz",
                "Plantación densa de árboles",
                "Restos vegetales infectados"
            ]
        }
    },
    {
        id: 60,
        section: "Цепи питания — разрыв",
        question: "Почему разрыв трофической цепи опасен?",
        answers: [
            "Повышает фотосинтез",
            "Уменьшает количество продуцентов",
            "Вызывает дисбаланс популяций",
            "Укрепляет микорризу"
        ],
        correct: 2,
        es: {
            section: "Cadenas tróficas — ruptura",
            question: "¿Por qué es peligroso romper la cadena trófica?",
            answers: [
                "Aumenta la fotosíntesis",
                "Reduce productores",
                "Genera desequilibrio de poblaciones",
                "Fortalece las micorrizas"
            ]
        }
    },
    {
        id: 61,
        section: "Агроэкосистема — зависимость от человека",
        question: "Почему агроэкосистема зависит от внешних вмешательств?",
        answers: [
            "Растения не способны фотосинтезировать",
            "Человек регулирует питание, воду и контроль вредителей",
            "Почва не содержит минералов",
            "Атмосфера слишком сухая"
        ],
        correct: 1,
        es: {
            section: "Agroecosistema — dependencia humana",
            question: "¿Por qué un agroecosistema depende de intervenciones externas?",
            answers: [
                "Las plantas no pueden fotosintetizar",
                "El humano regula nutrientes, agua y control de plagas",
                "El suelo no contiene minerales",
                "La atmósfera es demasiado seca"
            ]
        }
    },
    {
        id: 62,
        section: "Болезни — стрессовые факторы",
        question: "Какой фактор может сделать растение более восприимчивым к инфекции?",
        answers: [
            "Стресс от засоления",
            "Стабильный климат",
            "Низкая урожайность",
            "Повышенная лигнификация"
        ],
        correct: 0,
        es: {
            section: "Enfermedades — factores de estrés",
            question: "¿Qué factor puede volver la planta más susceptible a la infección?",
            answers: [
                "Estrés por salinización",
                "Clima estable",
                "Baja producción",
                "Aumento de lignificación"
            ]
        }
    },
    {
        id: 63,
        section: "Биотические отношения — депредация",
        question: "Что характеризует депредацию?",
        answers: [
            "Оба получают выгоду",
            "Нет эффекта",
            "Организмы не взаимодействуют",
            "Один организм убивает другой для питания"
        ],
        correct: 3,
        es: {
            section: "Relaciones bióticas — depredación",
            question: "¿Qué caracteriza la depredación?",
            answers: [
                "Ambos obtienen beneficio",
                "No hay efecto",
                "No interactúan",
                "Un organismo mata a otro para alimentarse"
            ]
        }
    },
    {
        id: 64,
        section: "Фауна auxiliar — контроль",
        question: "Как фауна auxiliar снижает количество вредителей?",
        answers: [
            "Блокирует солнечный свет",
            "Уменьшает влажность",
            "Поедает фитофагов",
            "Разрушает гумус"
        ],
        correct: 2,
        es: {
            section: "Fauna auxiliar — control",
            question: "¿Cómo reduce la fauna auxiliar la cantidad de plagas?",
            answers: [
                "Bloquea la luz solar",
                "Reduce la humedad",
                "Se alimenta de fitófagos",
                "Destruye el humus"
            ]
        }
    },
    {
        id: 65,
        section: "Патосистема — взаимодействия",
        question: "Что изучает патосистема?",
        answers: [
            "Взаимодействие паразита и хозяина",
            "Только рост корней",
            "Удобрения в почве",
            "Колебания климата"
        ],
        correct: 0,
        es: {
            section: "Patosistema — interacciones",
            question: "¿Qué estudia un patosistema?",
            answers: [
                "La interacción entre parásito y huésped",
                "Solo el crecimiento de raíces",
                "Fertilizantes en el suelo",
                "Variaciones climáticas"
            ]
        }
    },
    {
        id: 66,
        section: "Органическое вещество — функции",
        question: "Зачем важно поддерживать высокий уровень органического вещества?",
        answers: [
            "Уменьшает активность почвы",
            "Улучшает структуру и удержание воды",
            "Ускоряет эрозию",
            "Убивает микорризы"
        ],
        correct: 1,
        es: {
            section: "Materia orgánica — funciones",
            question: "¿Por qué es importante mantener un alto nivel de materia orgánica?",
            answers: [
                "Reduce la actividad del suelo",
                "Mejora estructura y retención de agua",
                "Aumenta la erosión",
                "Mata micorrizas"
            ]
        }
    },
    {
        id: 67,
        section: "Болезни — влияние азота",
        question: "Почему избыток азота делает растения слабее?",
        answers: [
            "Увеличивает фотосинтез",
            "Понижает лигнификацию тканей",
            "Укрепляет ткани",
            "Уменьшает количество воды"
        ],
        correct: 1,
        es: {
            section: "Enfermedades — efecto del nitrógeno",
            question: "¿Por qué el exceso de nitrógeno debilita a las plantas?",
            answers: [
                "Aumenta la fotosíntesis",
                "Disminuye la lignificación",
                "Fortalece los tejidos",
                "Reduce el agua"
            ]
        }
    },
    {
        id: 68,
        section: "Биотические отношения — комменсализм",
        question: "Пример комменсализма в природе:",
        answers: [
            "Лев охотится на антилопу",
            "Гриб вызывает гниение",
            "Пчела опыляет цветок",
            "Эпифит живёт на дереве"
        ],
        correct: 3,
        es: {
            section: "Relaciones bióticas — comensalismo",
            question: "Ejemplo de comensalismo en la naturaleza:",
            answers: [
                "Un león caza una gacela",
                "Un hongo provoca pudrición",
                "Abeja poliniza flor",
                "Una epífita vive sobre un árbol"
            ]
        }
    },
    {
        id: 69,
        section: "Цепи питания — продуценты",
        question: "Что определяет продуцентов?",
        answers: [
            "Способность синтезировать органику",
            "Способность охотиться",
            "Способность мигрировать",
            "Способность паразитировать"
        ],
        correct: 0,
        es: {
            section: "Cadenas tróficas — productores",
            question: "¿Qué define a los productores?",
            answers: [
                "Capacidad de sintetizar materia orgánica",
                "Capacidad de cazar",
                "Capacidad de migrar",
                "Capacidad de parasitar"
            ]
        }
    },
    {
        id: 70,
        section: "Микорризы — функции",
        question: "Как микорризы помогают растениям?",
        answers: [
            "Увеличивают солёность",
            "Блокируют корни",
            "Улучшают поглощение воды и минералов",
            "Ускоряют высыхание"
        ],
        correct: 2,
        es: {
            section: "Micorrizas — funciones",
            question: "¿Cómo ayudan las micorrizas a las plantas?",
            answers: [
                "Aumentan la salinidad",
                "Bloquean las raíces",
                "Mejoran la absorción de agua y minerales",
                "Aumentan el secado"
            ]
        }
    },
    {
        id: 71,
        section: "Болезни — развитие",
        question: "Что может ускорить развитие заболевания?",
        answers: [
            "Благоприятная влажность и температура",
            "Сильные ветры",
            "Низкая освещённость",
            "Высокие урожаи"
        ],
        correct: 0,
        es: {
            section: "Enfermedades — desarrollo",
            question: "¿Qué puede acelerar el desarrollo de una enfermedad?",
            answers: [
                "Humedad y temperatura adecuadas",
                "Vientos fuertes",
                "Baja iluminación",
                "Altos rendimientos"
            ]
        }
    },
    {
        id: 72,
        section: "Агроэкосистема — монокультура",
        question: "Почему монокультура облегчает распространение вредителей?",
        answers: [
            "Много хищников",
            "Нет барьеров и много одинаковых хозяев",
            "Высокая органика",
            "Низкая влажность"
        ],
        correct: 1,
        es: {
            section: "Agroecosistema — monocultivo",
            question: "¿Por qué el monocultivo facilita la propagación de plagas?",
            answers: [
                "Muchos depredadores",
                "No hay barreras y hay muchos huéspedes iguales",
                "Mucha materia orgánica",
                "Baja humedad"
            ]
        }
    },
    {
        id: 73,
        section: "Фауна — супердепредаторы",
        question: "Кто относится к супердепредаторам?",
        answers: [
            "Растения",
            "Сапротрофы",
            "Паразитоиды",
            "Хищники, питающиеся вторичными потребителями"
        ],
        correct: 3,
        es: {
            section: "Fauna — superdepredadores",
            question: "¿Quiénes son superdepredadores?",
            answers: [
                "Plantas",
                "Saprótrofos",
                "Parasitoides",
                "Depredadores que comen consumidores secundarios"
            ]
        }
    },
    {
        id: 74,
        section: "Почва — токсичность",
        question: "Что вызывает 'усталость почвы'?",
        answers: [
            "Много органики",
            "Низкая биологическая активность и накопление патогенов",
            "Избыток хищников",
            "Высокая освещённость"
        ],
        correct: 1,
        es: {
            section: "Suelo — toxicidad",
            question: "¿Qué causa la 'fatiga del suelo'?",
            answers: [
                "Mucha materia orgánica",
                "Baja actividad biológica y acumulación de patógenos",
                "Exceso de depredadores",
                "Mucha luz"
            ]
        }
    },
    {
        id: 75,
        section: "Цепи питания — разрушение",
        question: "Что происходит, если исчезают продуценты?",
        answers: [
            "Увеличиваются паразиты",
            "Растут хищники",
            "Вся цепь питания разрушается",
            "Появляется больше гумуса"
        ],
        correct: 2,
        es: {
            section: "Cadenas tróficas — colapso",
            question: "¿Qué ocurre si desaparecen los productores?",
            answers: [
                "Aumentan los parásitos",
                "Crecen los depredadores",
                "Toda la cadena trófica colapsa",
                "Aumenta el humus"
            ]
        }
    },
    {
        id: 76,
        section: "Агроэкосистема — динамика",
        question: "Что делает агроэкосистему менее стабильной, чем естественную?",
        answers: [
            "Зависимость от внешних ресурсов",
            "Наличие хищников",
            "Высокая лигнификация",
            "Низкое количество света"
        ],
        correct: 0,
        es: {
            section: "Agroecosistema — dinámica",
            question: "¿Qué hace que un agroecosistema sea menos estable que uno natural?",
            answers: [
                "Dependencia de recursos externos",
                "Presencia de depredadores",
                "Mucha lignificación",
                "Poca luz"
            ]
        }
    },
    {
        id: 77,
        section: "Патология — воздействие среды",
        question: "Какой фактор усиливает поражение озоном?",
        answers: [
            "Высокое содержание калия",
            "Низкая органика",
            "Мягкая температура",
            "Высокая солнечная радиация"
        ],
        correct: 3,
        es: {
            section: "Patología — efecto ambiental",
            question: "¿Qué factor agrava el daño por ozono?",
            answers: [
                "Alto potasio",
                "Poca materia orgánica",
                "Temperatura suave",
                "Alta radiación solar"
            ]
        }
    },
    {
        id: 78,
        section: "Почва — биология",
        question: "Почему отсутствие биоты делает почву 'инертной'?",
        answers: [
            "Нет разложения и минерального обмена",
            "Почва светится",
            "Увеличивается магнитное поле",
            "Уменьшается фотосинтез"
        ],
        correct: 0,
        es: {
            section: "Suelo — biología",
            question: "¿Por qué la ausencia de biota vuelve el suelo 'inerte'?",
            answers: [
                "No hay descomposición ni intercambio mineral",
                "El suelo brilla",
                "Aumenta el campo magnético",
                "Se reduce la fotosíntesis"
            ]
        }
    },
    {
        id: 79,
        section: "Биотические отношения — паразитизм",
        question: "Что отличает паразитизм от хищничества?",
        answers: [
            "Паразит больше по размеру",
            "Паразит не убивает хозяина сразу",
            "Паразит фотосинтезирует",
            "Хищник всегда живёт внутри жертвы"
        ],
        correct: 1,
        es: {
            section: "Relaciones bióticas — parasitismo",
            question: "¿Qué diferencia el parasitismo de la depredación?",
            answers: [
                "El parásito es más grande",
                "El parásito no mata al huésped de inmediato",
                "El parásito fotosintetiza",
                "El depredador vive dentro de la presa"
            ]
        }
    },
    {
        id: 80,
        section: "Микорризы — значение",
        question: "Что делает микорриза для защиты растения?",
        answers: [
            "Уменьшает содержание калия",
            "Привлекает фитофагов",
            "Ускоряет пересыхание почвы",
            "Увеличивает объём поглощения и снижает воздействие патогенов"
        ],
        correct: 3,
        es: {
            section: "Micorrizas — importancia",
            question: "¿Qué aporta la micorriza a la defensa de la planta?",
            answers: [
                "Reduce el potasio",
                "Atrae fitófagos",
                "Aumenta el secado del suelo",
                "Amplía absorción y reduce ataque de patógenos"
            ]
        }
    },
    {
        id: 81,
        section: "Инсектициды — последствия",
        question: "Почему частое применение инсектицидов способствует появлению резистентных вредителей?",
        answers: [
            "Падают температуры",
            "Увеличивается фотосинтез",
            "Выживают наиболее устойчивые особи",
            "Уменьшается органика"
        ],
        correct: 2,
        es: {
            section: "Insecticidas — consecuencias",
            question: "¿Por qué el uso frecuente de insecticidas favorece plagas resistentes?",
            answers: [
                "Bajan las temperaturas",
                "Aumenta la fotosíntesis",
                "Sobreviven los individuos más resistentes",
                "Disminuye la materia orgánica"
            ]
        }
    },
    {
        id: 82,
        section: "Флора арвенсе — функции",
        question: "Как флора арвенсе помогает экосистеме?",
        answers: [
            "Служит резервуаром для полезных организмов",
            "Блокирует минералы",
            "Снижает водообмен",
            "Уменьшает биологическую активность"
        ],
        correct: 0,
        es: {
            section: "Flora arvense — funciones",
            question: "¿Cómo ayuda la flora arvense al ecosistema?",
            answers: [
                "Sirve de reservorio para organismos útiles",
                "Bloquea minerales",
                "Reduce el intercambio de agua",
                "Reduce la actividad biológica"
            ]
        }
    },
    {
        id: 83,
        section: "Болезни — диагностика",
        question: "Что является первым признаком скрытой инфекции?",
        answers: [
            "Увеличение хлорофилла",
            "Незаметные физиологические изменения",
            "Рост корней",
            "Укрепление тканей"
        ],
        correct: 1,
        es: {
            section: "Enfermedades — diagnóstico",
            question: "¿Cuál es el primer signo de una infección oculta?",
            answers: [
                "Aumento de clorofila",
                "Cambios fisiológicos imperceptibles",
                "Crecimiento radicular",
                "Fortalecimiento de tejidos"
            ]
        }
    },
    {
        id: 84,
        section: "Цепи питания — роль сапротрофов",
        question: "Почему исчезновение сапротрофов опасно?",
        answers: [
            "Органика перестаёт разлагаться",
            "Исчезают хищники",
            "Увеличивается освещение",
            "Пропадает фотосинтез"
        ],
        correct: 0,
        es: {
            section: "Cadenas tróficas — rol de saprótrofos",
            question: "¿Por qué es peligroso que desaparezcan los saprótrofos?",
            answers: [
                "La materia orgánica deja de descomponerse",
                "Desaparecen depredadores",
                "Aumenta la luz",
                "Desaparece la fotosíntesis"
            ]
        }
    },
    {
        id: 85,
        section: "Паразитоиды — значение",
        question: "Почему паразитоиды важны в контроле вредителей?",
        answers: [
            "Увеличивают фотосинтез",
            "Создают гумус",
            "Снижают солнечный свет",
            "Уничтожают вредителей изнутри"
        ],
        correct: 3,
        es: {
            section: "Parasitoides — importancia",
            question: "¿Por qué son importantes los parasitoides en el control de plagas?",
            answers: [
                "Aumentan la fotosíntesis",
                "Crean humus",
                "Reducen la luz solar",
                "Eliminan plagas desde dentro"
            ]
        }
    },
    {
        id: 86,
        section: "Стресс — влияние на болезни",
        question: "Почему стресс делает растение уязвимым?",
        answers: [
            "Укрепляет ткани",
            "Всегда уменьшает влажность",
            "Ослабляет физиологические процессы",
            "Уничтожает фитофагов"
        ],
        correct: 2,
        es: {
            section: "Estrés — efecto en enfermedades",
            question: "¿Por qué el estrés vuelve vulnerable a la planta?",
            answers: [
                "Fortalece los tejidos",
                "Siempre reduce la humedad",
                "Debilita los procesos fisiológicos",
                "Elimina fitófagos"
            ]
        }
    },
    {
        id: 87,
        section: "Монокультура — риски",
        question: "Почему монокультура усиливает паразитизм?",
        answers: [
            "Много хищников",
            "Паразиту легче найти одинаковых хозяев",
            "Высокая органика",
            "Мало воды"
        ],
        correct: 1,
        es: {
            section: "Monocultivo — riesgos",
            question: "¿Por qué el monocultivo incrementa el parasitismo?",
            answers: [
                "Muchos depredadores",
                "El parásito encuentra fácilmente huéspedes iguales",
                "Mucha materia orgánica",
                "Poca agua"
            ]
        }
    },
    {
        id: 88,
        section: "Почва — структура",
        question: "Что улучшает структура почвы?",
        answers: [
            "Высокое содержание органического вещества",
            "Избыток соли",
            "Низкая биота",
            "Отсутствие корневых выделений"
        ],
        correct: 0,
        es: {
            section: "Suelo — estructura",
            question: "¿Qué mejora la estructura del suelo?",
            answers: [
                "Alto contenido de materia orgánica",
                "Exceso de sal",
                "Poca biota",
                "Ausencia de exudados"
            ]
        }
    },
    {
        id: 89,
        section: "Биотические отношения — mutualismo",
        question: "Что является примером взаимовыгодного взаимодействия?",
        answers: [
            "Гриб — корень вызывает гниль",
            "Лиса — заяц",
            "Фитофаг — лист",
            "Пчёлы — цветы"
        ],
        correct: 3,
        es: {
            section: "Relaciones bióticas — mutualismo",
            question: "¿Qué es un ejemplo de interacción mutuamente beneficiosa?",
            answers: [
                "Hongo – raíz causando pudrición",
                "Zorro – conejo",
                "Fitófago – hoja",
                "Abejas – flores"
            ]
        }
    },
    {
        id: 90,
        section: "Санитария — фундаментальный принцип",
        question: "Что является основой профилактики болезней в агроэкосистеме?",
        answers: [
            "Уничтожение всей флоры арвенсе",
            "Постоянная обработка пестицидами",
            "Поддержание биологического баланса",
            "Уменьшение разнообразия"
        ],
        correct: 2,
        es: {
            section: "Sanidad — principio fundamental",
            question: "¿Cuál es la base de la prevención de enfermedades en un agroecosistema?",
            answers: [
                "Eliminar toda la flora arvense",
                "Aplicar pesticidas constantemente",
                "Mantener el equilibrio biológico",
                "Reducir la diversidad"
            ]
        }
    },
    {
        id: 91,
        section: "Фитофаги — повреждения",
        question: "Что является типичным признаком повреждений фитофагами?",
        answers: [
            "Усиленный фотосинтез",
            "Прогрызенные листья и хлороз",
            "Рост корней",
            "Появление антоцианов"
        ],
        correct: 1,
        es: {
            section: "Fitófagos — daños",
            question: "¿Cuál es un signo típico de daños causados por fitófagos?",
            answers: [
                "Fotosíntesis aumentada",
                "Hojas mordidas y clorosis",
                "Crecimiento radicular",
                "Aparición de antocianos"
            ]
        }
    },
    {
        id: 92,
        section: "Патология — инфекция",
        question: "Что необходимо для установления инфекции?",
        answers: [
            "Высокий уровень магния",
            "Подходящий хозяин и условия",
            "Короткий день",
            "Отсутствие влажности"
        ],
        correct: 1,
        es: {
            section: "Patología — infección",
            question: "¿Qué es necesario para que se establezca una infección?",
            answers: [
                "Mucho magnesio",
                "Un huésped adecuado y condiciones apropiadas",
                "Día corto",
                "Falta de humedad"
            ]
        }
    },
    {
        id: 93,
        section: "Биота почвы — роль",
        question: "Почему почвенная биота считается фундаментальной в экосистеме?",
        answers: [
            "Блокирует кислород",
            "Уменьшает удержание воды",
            "Ускоряет эрозию",
            "Обеспечивает разложение и минеральное питание"
        ],
        correct: 3,
        es: {
            section: "Biota del suelo — rol",
            question: "¿Por qué la biota del suelo es fundamental en el ecosistema?",
            answers: [
                "Bloquea el oxígeno",
                "Reduce la retención de agua",
                "Acelera la erosión",
                "Proporciona descomposición y nutrientes"
            ]
        }
    },
    {
        id: 94,
        section: "Агросистема — вмешательство человека",
        question: "Как проявляется антропизация агроэкосистемы?",
        answers: [
            "Управление удобрениями, водой и видами",
            "Полное отсутствие вмешательства",
            "Абсолютная стабильность",
            "Наличие только диких видов"
        ],
        correct: 0,
        es: {
            section: "Agrosistema — intervención humana",
            question: "¿Cómo se manifiesta la antropización del agroecosistema?",
            answers: [
                "Gestión de fertilizantes, agua y especies",
                "Ausencia total de intervención",
                "Estabilidad absoluta",
                "Presencia solo de especies silvestres"
            ]
        }
    },
    {
        id: 95,
        section: "Флора арвенсе — значение",
        question: "Почему нельзя полностью уничтожать флору арвенсе?",
        answers: [
            "Служит пищей и укрытием полезных организмов",
            "Повышает засоление",
            "Уменьшает свет",
            "Делает почву инертной"
        ],
        correct: 0,
        es: {
            section: "Flora arvense — importancia",
            question: "¿Por qué no se debe eliminar por completo la flora arvense?",
            answers: [
                "Sirve de alimento y refugio a organismos útiles",
                "Aumenta la salinidad",
                "Reduce la luz",
                "Vuelve el suelo inerte"
            ]
        }
    },
    {
        id: 96,
        section: "Паразитоиды — цикл",
        question: "Чем отличается жизненный цикл паразитоида?",
        answers: [
            "Личинка развивается внутри хозяина",
            "Паразитоид питается только нектаром",
            "Не взаимодействует с хозяином",
            "Живёт только на листьях"
        ],
        correct: 0,
        es: {
            section: "Parasitoides — ciclo",
            question: "¿Qué distingue el ciclo de vida de un parasitoide?",
            answers: [
                "La larva se desarrolla dentro del huésped",
                "Solo se alimenta de néctar",
                "No interactúa con el huésped",
                "Solo vive sobre hojas"
            ]
        }
    },
    {
        id: 97,
        section: "Болезни — условия развития",
        question: "Какой фактор чаще всего ускоряет развитие грибных болезней?",
        answers: [
            "Низкий pH",
            "Высокая влажность",
            "Высокая лигнификация",
            "Много хищников"
        ],
        correct: 1,
        es: {
            section: "Enfermedades — condiciones de desarrollo",
            question: "¿Qué factor acelera más el desarrollo de enfermedades fúngicas?",
            answers: [
                "pH bajo",
                "Alta humedad",
                "Mucha lignificación",
                "Muchos depredadores"
            ]
        }
    },
    {
        id: 98,
        section: "Экология — цепи питания",
        question: "Почему исчезновение продуцентов разрушает цепь питания?",
        answers: [
            "Увеличивается гумус",
            "Исчезает первичное звено",
            "Укрепляется почва",
            "Появляется больше хищников"
        ],
        correct: 1,
        es: {
            section: "Ecología — cadenas tróficas",
            question: "¿Por qué la desaparición de productores colapsa la cadena trófica?",
            answers: [
                "Aumenta el humus",
                "Desaparece el primer eslabón",
                "El suelo se fortalece",
                "Aumentan los depredadores"
            ]
        }
    },
    {
        id: 99,
        section: "Стресс — влияние",
        question: "Почему стресс делает растение более восприимчивым к вредителям?",
        answers: [
            "Увеличивает фотосинтез",
            "Укрепляет ткани",
            "Уменьшает влажность листа",
            "Ослабляет защитные механизмы"
        ],
        correct: 3,
        es: {
            section: "Estrés — efecto",
            question: "¿Por qué el estrés vuelve más vulnerable a la planta ante plagas?",
            answers: [
                "Aumenta la fotosíntesis",
                "Fortalece tejidos",
                "Reduce la humedad foliar",
                "Debilita los mecanismos de defensa"
            ]
        }
    },
    {
        id: 100,
        section: "Почва — органика",
        question: "Зачем почве органическое вещество?",
        answers: [
            "Улучшает структуру, питание и удержание воды",
            "Уменьшает биоту",
            "Повышает токсичность",
            "Снижает активность микорриз"
        ],
        correct: 0,
        es: {
            section: "Suelo — materia orgánica",
            question: "¿Para qué sirve la materia orgánica en el suelo?",
            answers: [
                "Mejora estructura, nutrientes y retención de agua",
                "Reduce la biota",
                "Aumenta la toxicidad",
                "Reduce la micorriza"
            ]
        }
    },
    {
        id: 101,
        section: "Комменсализм",
        question: "Что является примером комменсализма?",
        answers: [
            "Пчела опыляет цветок",
            "Гриб поражает корень",
            "Волк охотится на оленя",
            "Эпифит живёт на дереве, не вредя ему"
        ],
        correct: 3,
        es: {
            section: "Comensalismo",
            question: "¿Qué es un ejemplo de comensalismo?",
            answers: [
                "Una abeja poliniza una flor",
                "Un hongo infecta la raíz",
                "Un lobo caza a un ciervo",
                "Una epífita vive sobre un árbol sin dañarlo"
            ]
        }
    },
    {
        id: 102,
        section: "Биологический контроль",
        question: "Почему биологический контроль помогает стабилизировать агросистему?",
        answers: [
            "Увеличивает солёность",
            "Делает почву инертной",
            "Уменьшает разнообразие",
            "Поддерживает баланс между хищниками и фитофагами"
        ],
        correct: 3,
        es: {
            section: "Control biológico",
            question: "¿Por qué el control biológico ayuda a estabilizar el agroecosistema?",
            answers: [
                "Aumenta la salinidad",
                "Vuelve el suelo inerte",
                "Reduce la diversidad",
                "Mantiene el equilibrio entre depredadores y fitófagos"
            ]
        }
    },
    {
        id: 103,
        section: "Патоген — инокулум",
        question: "Что приводит к быстрому росту инокулума?",
        answers: [
            "Высокая освещённость",
            "Низкая влажность",
            "Избыток фосфора",
            "Оставленные заражённые остатки"
        ],
        correct: 3,
        es: {
            section: "Patógeno — inóculo",
            question: "¿Qué provoca un rápido aumento del inóculo?",
            answers: [
                "Alta iluminación",
                "Baja humedad",
                "Exceso de fósforo",
                "Restos infectados en el campo"
            ]
        }
    },
    {
        id: 104,
        section: "Экология — биологическое равновесие",
        question: "Что происходит при нарушении биологического равновесия?",
        answers: [
            "Усиливается фотосинтез",
            "Уменьшается гумус",
            "Вредители могут резко увеличиться",
            "Увеличивается калий"
        ],
        correct: 2,
        es: {
            section: "Ecología — equilibrio biológico",
            question: "¿Qué ocurre cuando se rompe el equilibrio biológico?",
            answers: [
                "Aumenta la fotosíntesis",
                "Se reduce el humus",
                "Las plagas pueden aumentar bruscamente",
                "Aumenta el potasio"
            ]
        }
    },
    {
        id: 105,
        section: "Свет — пустынные растения",
        question: "Почему многие пустынные растения не прорастают на свету?",
        answers: [
            "Свет сигнализирует 'поверхность слишком сухая'",
            "Свет вызывает заражение грибами",
            "Свет разрушает эндосперм",
            "Свет активирует аллелопатию"
        ],
        correct: 0,
        es: {
            section: "Luz — plantas desérticas",
            question: "¿Por qué muchas especies desérticas no germinan con luz?",
            answers: [
                "La luz indica 'superficie demasiado seca'",
                "La luz favorece hongos",
                "La luz destruye el endospermo",
                "La luz activa alelopatía"
            ]
        }
    }
];