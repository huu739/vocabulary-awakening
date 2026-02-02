// 数据结构 - 分组词库
const wordDatabase = {
  "P1-01": [
    {
      "word": "although",
      "meaning": "虽然，尽管",
      "partOfSpeech": "conjunction",
      "examples": [
        "Although it was raining, we still went for a walk.",
        "She passed the exam although she didn't study much.",
        "Although he is young, he is very responsible."
      ]
    },
    {
      "word": "unless",
      "meaning": "除非，如果不",
      "partOfSpeech": "conjunction",
      "examples": [
        "You won't pass the test unless you study hard.",
        "I won't go unless you come with me.",
        "Unless it stops raining, we'll have to cancel the picnic."
      ]
    },
    {
      "word": "however",
      "meaning": "然而，但是",
      "partOfSpeech": "adverb",
      "examples": [
        "I wanted to go; however, I was too busy.",
        "She studied hard; however, she still failed the test.",
        "The weather was cold; however, we enjoyed our trip."
      ]
    },
    {
      "word": "instead",
      "meaning": "代替，反而",
      "partOfSpeech": "adverb",
      "examples": [
        "I didn't eat cake; instead, I had fruit.",
        "He didn't study; instead, he played video games.",
        "Instead of going to the park, we stayed home."
      ]
    },
    {
      "word": "until",
      "meaning": "直到...为止",
      "partOfSpeech": "conjunction",
      "examples": [
        "I will wait until you come back.",
        "He studied until midnight for the exam.",
        "We didn't leave until the movie ended."
      ]
    },
    {
      "word": "while",
      "meaning": "当...的时候，然而",
      "partOfSpeech": "conjunction",
      "examples": [
        "I read a book while I was waiting for the bus.",
        "She cooks while he cleans the house.",
        "While I like chocolate, my sister prefers vanilla."
      ]
    },
    {
      "word": "since",
      "meaning": "自从，因为",
      "partOfSpeech": "conjunction",
      "examples": [
        "I have been studying English since I was 10.",
        "Since it's raining, we should stay home.",
        "He hasn't seen his family since last year."
      ]
    },
    {
      "word": "though",
      "meaning": "虽然，尽管",
      "partOfSpeech": "conjunction",
      "examples": [
        "Though it was late, we continued working.",
        "She went to school though she was sick.",
        "Though he is rich, he lives simply."
      ]
    },
    {
      "word": "whether",
      "meaning": "是否",
      "partOfSpeech": "conjunction",
      "examples": [
        "I don't know whether I should go or stay.",
        "She asked whether we had finished the project.",
        "He hasn't decided whether to study abroad or not."
      ]
    },
    {
      "word": "therefore",
      "meaning": "因此，所以",
      "partOfSpeech": "adverb",
      "examples": [
        "It was raining; therefore, we stayed home.",
        "He studied hard; therefore, he passed the exam.",
        "The store was closed; therefore, we went to another one."
      ]
    },
    {
      "word": "otherwise",
      "meaning": "否则，不然",
      "partOfSpeech": "adverb",
      "examples": [
        "Study hard, otherwise you will fail.",
        "Hurry up, otherwise we will be late.",
        "Eat your vegetables, otherwise you won't grow tall."
      ]
    },
    {
      "word": "regardless",
      "meaning": "不管，无论",
      "partOfSpeech": "adverb",
      "examples": [
        "I'll go regardless of the weather.",
        "He works hard regardless of the time.",
        "She loves him regardless of his flaws."
      ]
    },
    {
      "word": "besides",
      "meaning": "此外，而且",
      "partOfSpeech": "adverb",
      "examples": [
        "I don't like coffee. Besides, it's bad for my health.",
        "She speaks English well. Besides, she knows French.",
        "The movie was boring. Besides, it was too long."
      ]
    },
    {
      "word": "moreover",
      "meaning": "此外，而且",
      "partOfSpeech": "adverb",
      "examples": [
        "He is rich. Moreover, he is generous.",
        "The house is big. Moreover, it's in a good location.",
        "She is smart. Moreover, she is hardworking."
      ]
    },
    {
      "word": "furthermore",
      "meaning": "此外，而且",
      "partOfSpeech": "adverb",
      "examples": [
        "He is smart. Furthermore, he works hard.",
        "The hotel is clean. Furthermore, it's affordable.",
        "She is kind. Furthermore, she is helpful."
      ]
    },
    {
      "word": "be",
      "meaning": "是，存在",
      "partOfSpeech": "verb",
      "examples": [
        "I am a student.",
        "You are my friend.",
        "He is a teacher."
      ]
    },
    {
      "word": "have",
      "meaning": "有，拥有",
      "partOfSpeech": "verb",
      "examples": [
        "I have a book.",
        "You have two apples.",
        "He has a car."
      ]
    },
    {
      "word": "do",
      "meaning": "做，干",
      "partOfSpeech": "verb",
      "examples": [
        "I do my homework every day.",
        "You do a good job.",
        "He does his best."
      ]
    },
    {
      "word": "say",
      "meaning": "说，讲",
      "partOfSpeech": "verb",
      "examples": [
        "I say hello to everyone.",
        "You say you love me.",
        "He says he will come."
      ]
    },
    {
      "word": "go",
      "meaning": "去，走",
      "partOfSpeech": "verb",
      "examples": [
        "I go to school every day.",
        "You go to the park.",
        "He goes to work by bus."
      ]
    },
    {
      "word": "get",
      "meaning": "得到，获取",
      "partOfSpeech": "verb",
      "examples": [
        "I get a present on my birthday.",
        "You get good grades.",
        "He gets up early."
      ]
    },
    {
      "word": "make",
      "meaning": "制作，使",
      "partOfSpeech": "verb",
      "examples": [
        "I make a cake for you.",
        "You make me happy.",
        "He makes a plan."
      ]
    },
    {
      "word": "know",
      "meaning": "知道，了解",
      "partOfSpeech": "verb",
      "examples": [
        "I know your name.",
        "You know how to swim.",
        "He knows the answer."
      ]
    },
    {
      "word": "think",
      "meaning": "思考，认为",
      "partOfSpeech": "verb",
      "examples": [
        "I think you are right.",
        "You think about the problem.",
        "He thinks he can do it."
      ]
    },
    {
      "word": "take",
      "meaning": "拿，取，带走",
      "partOfSpeech": "verb",
      "examples": [
        "I take a book from the shelf.",
        "You take the bus to school.",
        "He takes his time."
      ]
    }
  ],
  "P1-02": [
    {
      "word": "yet",
      "meaning": "然而，但是",
      "partOfSpeech": "conjunction",
      "examples": [
        "He is tired, yet he continues to work.",
        "The weather was cold, yet we enjoyed our trip.",
        "She studied hard, yet she failed the test."
      ]
    },
    {
      "word": "thus",
      "meaning": "因此，从而",
      "partOfSpeech": "adverb",
      "examples": [
        "He studied hard, thus he passed the exam.",
        "It was raining, thus we stayed home.",
        "She saved money, thus she could buy a new car."
      ]
    },
    {
      "word": "as a result",
      "meaning": "结果，因此",
      "partOfSpeech": "phrase",
      "examples": [
        "He studied hard; as a result, he passed the exam.",
        "It rained heavily; as a result, the road was flooded.",
        "She practiced daily; as a result, she won the competition."
      ]
    },
    {
      "word": "in case",
      "meaning": "以防万一",
      "partOfSpeech": "phrase",
      "examples": [
        "Take an umbrella in case it rains.",
        "I'll bring extra money in case we need it.",
        "Study hard in case there's a test."
      ]
    },
    {
      "word": "as long as",
      "meaning": "只要",
      "partOfSpeech": "phrase",
      "examples": [
        "You can go out as long as you come back early.",
        "I'll help you as long as you need me.",
        "We'll win as long as we work together."
      ]
    },
    {
      "word": "even if",
      "meaning": "即使",
      "partOfSpeech": "phrase",
      "examples": [
        "I'll go even if it rains.",
        "He'll try even if he fails.",
        "She'll help you even if she's busy."
      ]
    },
    {
      "word": "even though",
      "meaning": "虽然，尽管",
      "partOfSpeech": "phrase",
      "examples": [
        "Even though it was raining, we went for a walk.",
        "Even though she was sick, she went to school.",
        "Even though he is rich, he lives simply."
      ]
    },
    {
      "word": "so that",
      "meaning": "以便，为了",
      "partOfSpeech": "phrase",
      "examples": [
        "I study hard so that I can pass the exam.",
        "She works late so that she can finish the project.",
        "He saves money so that he can buy a car."
      ]
    },
    {
      "word": "in order to",
      "meaning": "为了",
      "partOfSpeech": "phrase",
      "examples": [
        "I study hard in order to pass the exam.",
        "She works late in order to finish the project.",
        "He exercises daily in order to stay healthy."
      ]
    },
    {
      "word": "despite",
      "meaning": "尽管，不管",
      "partOfSpeech": "preposition",
      "examples": [
        "Despite the rain, we went for a walk.",
        "Despite being sick, she went to school.",
        "Despite his wealth, he lives simply."
      ]
    },
    {
      "word": "provided",
      "meaning": "如果，假如",
      "partOfSpeech": "conjunction",
      "examples": [
        "You can go out provided you come back early.",
        "I'll help you provided you need me.",
        "We'll win provided we work together."
      ]
    },
    {
      "word": "whereas",
      "meaning": "然而，但是",
      "partOfSpeech": "conjunction",
      "examples": [
        "I like coffee, whereas my sister prefers tea.",
        "He is tall, whereas his brother is short.",
        "She likes hot weather, whereas I prefer cold weather."
      ]
    },
    {
      "word": "nonetheless",
      "meaning": "然而，不过",
      "partOfSpeech": "adverb",
      "examples": [
        "It was raining. Nonetheless, we went for a walk.",
        "She was tired. Nonetheless, she finished her work.",
        "He failed the test. Nonetheless, he didn't give up."
      ]
    },
    {
      "word": "but",
      "meaning": "但是",
      "partOfSpeech": "conjunction",
      "examples": [
        "I wanted to go, but I was too busy.",
        "She studied hard, but she still failed the test.",
        "The weather was cold, but we enjoyed our trip."
      ]
    },
    {
      "word": "because",
      "meaning": "因为",
      "partOfSpeech": "conjunction",
      "examples": [
        "I stayed home because it was raining.",
        "She was late because the bus was delayed.",
        "He failed the test because he didn't study."
      ]
    },
    {
      "word": "see",
      "meaning": "看见，看到",
      "partOfSpeech": "verb",
      "examples": [
        "I see a bird in the sky.",
        "You see the beautiful view.",
        "He sees his friend."
      ]
    },
    {
      "word": "come",
      "meaning": "来，来到",
      "partOfSpeech": "verb",
      "examples": [
        "I come to school every day.",
        "You come to my house.",
        "He comes with me."
      ]
    },
    {
      "word": "want",
      "meaning": "想要，希望",
      "partOfSpeech": "verb",
      "examples": [
        "I want a new bike.",
        "You want to go to the park.",
        "He wants to be a doctor."
      ]
    },
    {
      "word": "use",
      "meaning": "使用，利用",
      "partOfSpeech": "verb",
      "examples": [
        "I use a pen to write.",
        "You use a computer for work.",
        "He uses his phone to call."
      ]
    },
    {
      "word": "find",
      "meaning": "找到，发现",
      "partOfSpeech": "verb",
      "examples": [
        "I find my lost key.",
        "You find a solution to the problem.",
        "He finds a job."
      ]
    },
    {
      "word": "give",
      "meaning": "给，给予",
      "partOfSpeech": "verb",
      "examples": [
        "I give you a gift.",
        "You give money to charity.",
        "He gives his time to help others."
      ]
    },
    {
      "word": "tell",
      "meaning": "告诉，讲述",
      "partOfSpeech": "verb",
      "examples": [
        "I tell you a story.",
        "You tell me the truth.",
        "He tells his mother about his day."
      ]
    },
    {
      "word": "work",
      "meaning": "工作，运转",
      "partOfSpeech": "verb",
      "examples": [
        "I work hard every day.",
        "You work at a company.",
        "The machine works well."
      ]
    },
    {
      "word": "call",
      "meaning": "呼叫，打电话",
      "partOfSpeech": "verb",
      "examples": [
        "I call my friend every week.",
        "You call the police in an emergency.",
        "He calls his mother."
      ]
    },
    {
      "word": "try",
      "meaning": "尝试，努力",
      "partOfSpeech": "verb",
      "examples": [
        "I try to learn English.",
        "You try your best.",
        "He tries to solve the problem."
      ]
    }
  ],
  "P1-03": [
    {
      "word": "manage",
      "meaning": "管理，设法做到",
      "partOfSpeech": "verb",
      "examples": [
        "She manages a small business in the city.",
        "I managed to finish the project on time.",
        "He manages his time very well."
      ]
    },
    {
      "word": "improve",
      "meaning": "提高，改善",
      "partOfSpeech": "verb",
      "examples": [
        "I want to improve my English skills.",
        "The company has improved its customer service.",
        "Exercise can improve your health."
      ]
    },
    {
      "word": "provide",
      "meaning": "提供，供给",
      "partOfSpeech": "verb",
      "examples": [
        "The school provides free textbooks for students.",
        "Parents provide food and shelter for their children.",
        "The company will provide training for new employees."
      ]
    },
    {
      "word": "realize",
      "meaning": "意识到，实现",
      "partOfSpeech": "verb",
      "examples": [
        "I realize that I made a mistake.",
        "She realized her dream of becoming a doctor.",
        "He didn't realize how late it was."
      ]
    },
    {
      "word": "decide",
      "meaning": "决定，下决心",
      "partOfSpeech": "verb",
      "examples": [
        "I need to decide what to do next.",
        "She decided to study abroad next year.",
        "They decided to get married in the spring."
      ]
    },
    {
      "word": "achieve",
      "meaning": "达到，实现",
      "partOfSpeech": "verb",
      "examples": [
        "She achieved her goal of winning the competition.",
        "Hard work helps you achieve success.",
        "He has achieved a lot in his career."
      ]
    },
    {
      "word": "expect",
      "meaning": "期望，预料",
      "partOfSpeech": "verb",
      "examples": [
        "I expect to finish the work by Friday.",
        "She expects her son to study hard.",
        "They didn't expect the weather to be so bad."
      ]
    },
    {
      "word": "believe",
      "meaning": "相信，认为",
      "partOfSpeech": "verb",
      "examples": [
        "I believe that honesty is the best policy.",
        "She believes in herself and her abilities.",
        "He doesn't believe what he heard."
      ]
    },
    {
      "word": "consider",
      "meaning": "考虑，认为",
      "partOfSpeech": "verb",
      "examples": [
        "I need to consider my options.",
        "She considers him to be her best friend.",
        "They are considering moving to a new city."
      ]
    },
    {
      "word": "suggest",
      "meaning": "建议，暗示",
      "partOfSpeech": "verb",
      "examples": [
        "I suggest that we go to the park tomorrow.",
        "She suggested eating at a new restaurant.",
        "His silence suggested that he was angry."
      ]
    },
    {
      "word": "require",
      "meaning": "需要，要求",
      "partOfSpeech": "verb",
      "examples": [
        "The job requires a college degree.",
        "This task requires patience.",
        "The teacher requires all students to hand in their homework."
      ]
    },
    {
      "word": "remain",
      "meaning": "保持，剩余",
      "partOfSpeech": "verb",
      "examples": [
        "Please remain quiet during the test.",
        "A few problems remain to be solved.",
        "He remained calm despite the emergency."
      ]
    },
    {
      "word": "explain",
      "meaning": "解释，说明",
      "partOfSpeech": "verb",
      "examples": [
        "Can you explain this problem to me?",
        "The teacher explained the lesson carefully.",
        "She explained why she was late."
      ]
    },
    {
      "word": "describe",
      "meaning": "描述，形容",
      "partOfSpeech": "verb",
      "examples": [
        "Can you describe the person you saw?",
        "She described the movie as exciting.",
        "He described his trip to Europe in detail."
      ]
    },
    {
      "word": "express",
      "meaning": "表达，表现",
      "partOfSpeech": "verb",
      "examples": [
        "I want to express my gratitude.",
        "She expressed her feelings through art.",
        "He expressed his opinion on the matter."
      ]
    }
  ],
  "P1-04": [
    {
      "word": "increase",
      "meaning": "增加，提高",
      "partOfSpeech": "verb",
      "examples": [
        "The company plans to increase its profits.",
        "Exercise can increase your energy levels.",
        "The population of the city is increasing."
      ]
    },
    {
      "word": "decrease",
      "meaning": "减少，降低",
      "partOfSpeech": "verb",
      "examples": [
        "The company plans to decrease its expenses.",
        "Exercise can decrease your stress levels.",
        "The temperature is decreasing as winter approaches."
      ]
    },
    {
      "word": "maintain",
      "meaning": "维持，保持",
      "partOfSpeech": "verb",
      "examples": [
        "He maintains his car regularly.",
        "She maintains a healthy lifestyle.",
        "The company maintains high standards."
      ]
    },
    {
      "word": "prevent",
      "meaning": "预防，阻止",
      "partOfSpeech": "verb",
      "examples": [
        "We need to prevent accidents from happening.",
        "Vaccines can prevent diseases.",
        "She locked the door to prevent burglars."
      ]
    },
    {
      "word": "support",
      "meaning": "支持，支撑",
      "partOfSpeech": "verb",
      "examples": [
        "My family supports me.",
        "He supports his local football team.",
        "The bridge supports heavy traffic."
      ]
    },
    {
      "word": "choose",
      "meaning": "选择，挑选",
      "partOfSpeech": "verb",
      "examples": [
        "I need to choose a college.",
        "She chose the red dress for the party.",
        "They chose to go on vacation to the beach."
      ]
    },
    {
      "word": "avoid",
      "meaning": "避免，避开",
      "partOfSpeech": "verb",
      "examples": [
        "I try to avoid making mistakes.",
        "She avoids eating junk food.",
        "They avoid talking about politics."
      ]
    },
    {
      "word": "imagine",
      "meaning": "想象，设想",
      "partOfSpeech": "verb",
      "examples": [
        "Can you imagine living on Mars?",
        "She imagines herself as a famous singer.",
        "He imagines that he will be rich one day."
      ]
    },
    {
      "word": "create",
      "meaning": "创造，创建",
      "partOfSpeech": "verb",
      "examples": [
        "The artist creates beautiful paintings.",
        "She created a new recipe for cookies.",
        "They created a new company last year."
      ]
    },
    {
      "word": "solve",
      "meaning": "解决，解答",
      "partOfSpeech": "verb",
      "examples": [
        "I need to solve this math problem.",
        "She solved the mystery of the missing cat.",
        "They solved the conflict peacefully."
      ]
    },
    {
      "word": "suppose",
      "meaning": "假设，认为",
      "partOfSpeech": "verb",
      "examples": [
        "Suppose we go to the park tomorrow.",
        "She supposes that he will come.",
        "They suppose that the project will be finished on time."
      ]
    },
    {
      "word": "wonder",
      "meaning": "想知道，好奇",
      "partOfSpeech": "verb",
      "examples": [
        "I wonder what the weather will be like tomorrow.",
        "She wonders if he will come.",
        "They wonder how the movie will end."
      ]
    },
    {
      "word": "notice",
      "meaning": "注意到，察觉",
      "partOfSpeech": "verb",
      "examples": [
        "I noticed that she was sad.",
        "She noticed the beautiful flowers in the garden.",
        "They noticed that the door was open."
      ]
    },
    {
      "word": "depend",
      "meaning": "依靠，依赖",
      "partOfSpeech": "verb",
      "examples": [
        "I depend on my parents for support.",
        "She depends on public transportation to get around.",
        "They depend on the weather for their crops."
      ]
    },
    {
      "word": "admire",
      "meaning": "钦佩，赞赏",
      "partOfSpeech": "verb",
      "examples": [
        "I admire his courage.",
        "She admires the beautiful sunset.",
        "They admire their teacher's knowledge."
      ]
    }
  ],
  "P2-A1": [
    {
      "word": "honest",
      "meaning": "诚实的",
      "partOfSpeech": "adjective",
      "examples": [
        "He is an honest boy who never tells lies.",
        "It's important to be honest with your friends.",
        "The teacher praised him for his honest behavior."
      ]
    },
    {
      "word": "patient",
      "meaning": "耐心的",
      "partOfSpeech": "adjective",
      "examples": [
        "She is very patient with her little brother.",
        "Learning a new language requires patience.",
        "The doctor was patient when explaining the treatment."
      ]
    },
    {
      "word": "brave",
      "meaning": "勇敢的",
      "partOfSpeech": "adjective",
      "examples": [
        "The brave firefighter saved the child from the fire.",
        "It's brave of you to speak in front of the class.",
        "She made a brave decision to face her fears."
      ]
    },
    {
      "word": "active",
      "meaning": "活跃的",
      "partOfSpeech": "adjective",
      "examples": [
        "He is an active member of the school basketball team.",
        "She leads an active lifestyle with regular exercise.",
        "The classroom was full of active students discussing the topic."
      ]
    },
    {
      "word": "careless",
      "meaning": "粗心的",
      "partOfSpeech": "adjective",
      "examples": [
        "He made a careless mistake in his homework.",
        "Being careless can lead to accidents.",
        "She regretted her careless words to her friend."
      ]
    },
    {
      "word": "clever",
      "meaning": "聪明的",
      "partOfSpeech": "adjective",
      "examples": [
        "The clever boy solved the math problem quickly.",
        "She came up with a clever idea for the project.",
        "Clever people often find creative solutions to problems."
      ]
    },
    {
      "word": "polite",
      "meaning": "有礼貌的",
      "partOfSpeech": "adjective",
      "examples": [
        "He is a polite boy who always says 'please' and 'thank you'.",
        "It's important to be polite to your elders.",
        "She received praise for her polite behavior at the party."
      ]
    },
    {
      "word": "helpful",
      "meaning": "乐于助人的",
      "partOfSpeech": "adjective",
      "examples": [
        "The helpful student assisted the teacher after class.",
        "She is always helpful when her friends need support.",
        "Being helpful makes you popular among your peers."
      ]
    },
    {
      "word": "famous",
      "meaning": "著名的",
      "partOfSpeech": "adjective",
      "examples": [
        "The famous actor starred in many popular movies.",
        "This city is famous for its beautiful beaches.",
        "She dreamed of becoming a famous singer one day."
      ]
    },
    {
      "word": "humorous",
      "meaning": "幽默的",
      "partOfSpeech": "adjective",
      "examples": [
        "The humorous teacher made the class laugh every day.",
        "He told a humorous story that entertained everyone.",
        "Having a humorous personality helps you make friends easily."
      ]
    },
    {
      "word": "serious",
      "meaning": "严肃的",
      "partOfSpeech": "adjective",
      "examples": [
        "The teacher looked serious when talking about the exam.",
        "We need to have a serious discussion about our future.",
        "He is a serious student who always studies hard."
      ]
    },
    {
      "word": "confident",
      "meaning": "自信的",
      "partOfSpeech": "adjective",
      "examples": [
        "She is confident about her ability to pass the test.",
        "Being confident helps you perform better in interviews.",
        "He walked into the room with a confident smile."
      ]
    },
    {
      "word": "friendly",
      "meaning": "友好的",
      "partOfSpeech": "adjective",
      "examples": [
        "The friendly dog wagged its tail at everyone.",
        "She is very friendly and easy to talk to.",
        "We received a friendly welcome from the host family."
      ]
    },
    {
      "word": "lazy",
      "meaning": "懒惰的",
      "partOfSpeech": "adjective",
      "examples": [
        "The lazy cat slept all day on the sofa.",
        "Don't be lazy; finish your homework before playing.",
        "His lazy attitude caused him to fail the exam."
      ]
    },
    {
      "word": "creative",
      "meaning": "有创造力的",
      "partOfSpeech": "adjective",
      "examples": [
        "The creative artist painted a beautiful picture.",
        "She has a creative mind that comes up with new ideas.",
        "Creative thinking is important in solving problems."
      ]
    }
  ],
  "P2-A2": [
    {
      "word": "nervous",
      "meaning": "紧张的",
      "partOfSpeech": "adjective",
      "examples": [
        "She felt nervous before her first speech.",
        "I get nervous when taking important tests.",
        "His nervous hands shook as he opened the letter."
      ]
    },
    {
      "word": "proud",
      "meaning": "自豪的",
      "partOfSpeech": "adjective",
      "examples": [
        "Her parents were proud of her academic achievements.",
        "I'm proud to be a member of this team.",
        "He felt proud when he received the award."
      ]
    },
    {
      "word": "lonely",
      "meaning": "孤独的",
      "partOfSpeech": "adjective",
      "examples": [
        "The old man felt lonely after his wife passed away.",
        "She often felt lonely when her friends were busy.",
        "Living alone can sometimes make you feel lonely."
      ]
    },
    {
      "word": "excited",
      "meaning": "兴奋的",
      "partOfSpeech": "adjective",
      "examples": [
        "The children were excited about the upcoming trip.",
        "I'm so excited to meet my favorite singer.",
        "Her excited voice showed how happy she was."
      ]
    },
    {
      "word": "worried",
      "meaning": "担心的",
      "partOfSpeech": "adjective",
      "examples": [
        "She was worried about her sick grandmother.",
        "I'm worried that I might fail the exam.",
        "His worried expression told us something was wrong."
      ]
    },
    {
      "word": "surprised",
      "meaning": "惊讶的",
      "partOfSpeech": "adjective",
      "examples": [
        "She was surprised by the unexpected gift.",
        "I'm surprised that you passed the test without studying.",
        "His surprised reaction made everyone laugh."
      ]
    },
    {
      "word": "angry",
      "meaning": "生气的",
      "partOfSpeech": "adjective",
      "examples": [
        "The teacher was angry at the students' misbehavior.",
        "I get angry when someone breaks their promises.",
        "Her angry words hurt his feelings."
      ]
    },
    {
      "word": "relaxed",
      "meaning": "放松的",
      "partOfSpeech": "adjective",
      "examples": [
        "She felt relaxed after taking a long bath.",
        "We spent a relaxed weekend at the beach.",
        "His relaxed attitude helped him stay calm under pressure."
      ]
    },
    {
      "word": "unhappy",
      "meaning": "不开心的",
      "partOfSpeech": "adjective",
      "examples": [
        "He was unhappy with his exam results.",
        "She looked unhappy when she heard the news.",
        "Being unhappy for a long time can affect your health."
      ]
    },
    {
      "word": "satisfied",
      "meaning": "满意的",
      "partOfSpeech": "adjective",
      "examples": [
        "She was satisfied with her performance in the game.",
        "I'm satisfied with the service at this restaurant.",
        "His satisfied smile showed he enjoyed the meal."
      ]
    },
    {
      "word": "regret",
      "meaning": "后悔",
      "partOfSpeech": "verb",
      "examples": [
        "He regretted not studying harder for the exam.",
        "I regret telling her the secret.",
        "She felt regret for her rude behavior."
      ]
    },
    {
      "word": "shame",
      "meaning": "羞愧",
      "partOfSpeech": "noun",
      "examples": [
        "He felt shame for lying to his parents.",
        "She hung her head in shame after being caught cheating.",
        "There's no shame in asking for help when you need it."
      ]
    },
    {
      "word": "fear",
      "meaning": "害怕",
      "partOfSpeech": "noun",
      "examples": [
        "She has a fear of heights.",
        "His fear of dogs started when he was a child.",
        "Facing your fears is the first step to overcoming them."
      ]
    },
    {
      "word": "interest",
      "meaning": "兴趣",
      "partOfSpeech": "noun",
      "examples": [
        "He has a great interest in science.",
        "She developed an interest in painting at a young age.",
        "My interests include reading and playing basketball."
      ]
    },
    {
      "word": "stress",
      "meaning": "压力",
      "partOfSpeech": "noun",
      "examples": [
        "The students feel a lot of stress before exams.",
        "Work stress can affect your physical health.",
        "She tries to manage stress by practicing yoga."
      ]
    }
  ],
  "P2-A3": [
    {
      "word": "knowledge",
      "meaning": "知识",
      "partOfSpeech": "noun",
      "examples": [
        "Reading books can increase your knowledge.",
        "The teacher shared her knowledge with the students.",
        "Knowledge is power in today's world."
      ]
    },
    {
      "word": "experience",
      "meaning": "经验",
      "partOfSpeech": "noun",
      "examples": [
        "She has five years of teaching experience.",
        "Traveling gives you valuable life experiences.",
        "Learning from experience is important for growth."
      ]
    },
    {
      "word": "subject",
      "meaning": "科目",
      "partOfSpeech": "noun",
      "examples": [
        "Math is my favorite subject at school.",
        "We study many subjects including English and science.",
        "The teacher asked us to choose a subject for our project."
      ]
    },
    {
      "word": "competition",
      "meaning": "竞争",
      "partOfSpeech": "noun",
      "examples": [
        "There was a fierce competition between the two teams.",
        "She won first place in the singing competition.",
        "Competition can motivate people to work harder."
      ]
    },
    {
      "word": "score",
      "meaning": "分数",
      "partOfSpeech": "noun",
      "examples": [
        "He got a high score on the math test.",
        "The final score of the game was 3-2.",
        "She was happy with her exam scores."
      ]
    },
    {
      "word": "dictionary",
      "meaning": "字典",
      "partOfSpeech": "noun",
      "examples": [
        "I use a dictionary to look up new words.",
        "The teacher recommended a good English-Chinese dictionary.",
        "Every student should have a dictionary in class."
      ]
    },
    {
      "word": "grammar",
      "meaning": "语法",
      "partOfSpeech": "noun",
      "examples": [
        "Learning grammar is important for mastering a language.",
        "The teacher explained the grammar rules clearly.",
        "She made a grammar mistake in her essay."
      ]
    },
    {
      "word": "attention",
      "meaning": "注意力",
      "partOfSpeech": "noun",
      "examples": [
        "Pay attention to what the teacher is saying.",
        "The interesting story captured everyone's attention.",
        "He has trouble focusing his attention in class."
      ]
    },
    {
      "word": "standard",
      "meaning": "标准",
      "partOfSpeech": "noun",
      "examples": [
        "The school has high academic standards.",
        "We need to meet the safety standards for the project.",
        "His work is of a very high standard."
      ]
    },
    {
      "word": "review",
      "meaning": "复习",
      "partOfSpeech": "verb",
      "examples": [
        "I need to review my notes before the exam.",
        "The teacher asked us to review the lesson at home.",
        "Reviewing regularly helps you remember what you've learned."
      ]
    },
    {
      "word": "prepare",
      "meaning": "准备",
      "partOfSpeech": "verb",
      "examples": [
        "She is preparing for her birthday party.",
        "We need to prepare for the upcoming exam.",
        "The students are preparing a presentation for class."
      ]
    },
    {
      "word": "progress",
      "meaning": "进步",
      "partOfSpeech": "noun",
      "examples": [
        "He has made great progress in his English studies.",
        "The teacher praised her for her progress.",
        "Continuous practice leads to steady progress."
      ]
    },
    {
      "word": "success",
      "meaning": "成功",
      "partOfSpeech": "noun",
      "examples": [
        "Hard work is the key to success.",
        "She celebrated her success in the competition.",
        "His success story inspired many people."
      ]
    },
    {
      "word": "failure",
      "meaning": "失败",
      "partOfSpeech": "noun",
      "examples": [
        "Failure is a part of learning.",
        "He didn't give up after his first failure.",
        "We can learn valuable lessons from failure."
      ]
    },
    {
      "word": "encourage",
      "meaning": "鼓励",
      "partOfSpeech": "verb",
      "examples": [
        "The teacher encouraged the students to work harder.",
        "Her parents always encourage her to follow her dreams.",
        "Words of encouragement can make a big difference."
      ]
    }
  ],
  "P2-B1": [
    {
      "word": "health",
      "meaning": "健康",
      "partOfSpeech": "noun",
      "examples": [
        "Good health is more important than wealth.",
        "Regular exercise is essential for maintaining health.",
        "He has been in good health since he quit smoking."
      ]
    },
    {
      "word": "habit",
      "meaning": "习惯",
      "partOfSpeech": "noun",
      "examples": [
        "Reading is a good habit that improves your knowledge.",
        "He has a bad habit of biting his nails.",
        "It takes time to develop a new habit."
      ]
    },
    {
      "word": "exercise",
      "meaning": "锻炼",
      "partOfSpeech": "noun",
      "examples": [
        "Daily exercise helps keep your body fit.",
        "She does 30 minutes of exercise every morning.",
        "Swimming is a great form of exercise."
      ]
    },
    {
      "word": "fever",
      "meaning": "发烧",
      "partOfSpeech": "noun",
      "examples": [
        "She has a high fever and needs to see a doctor.",
        "The child's fever lasted for three days.",
        "Rest is important when you have a fever."
      ]
    },
    {
      "word": "medicine",
      "meaning": "药",
      "partOfSpeech": "noun",
      "examples": [
        "The doctor prescribed some medicine for her cold.",
        "Take the medicine three times a day after meals.",
        "He forgot to take his medicine this morning."
      ]
    },
    {
      "word": "energy",
      "meaning": "能量",
      "partOfSpeech": "noun",
      "examples": [
        "Eating healthy food gives you energy.",
        "He has a lot of energy to play sports all day.",
        "I need to drink coffee to boost my energy."
      ]
    },
    {
      "word": "regular",
      "meaning": "定期的",
      "partOfSpeech": "adjective",
      "examples": [
        "She has a regular exercise routine.",
        "It's important to have regular check-ups with the doctor.",
        "He is a regular customer at this coffee shop."
      ]
    },
    {
      "word": "lifestyle",
      "meaning": "生活方式",
      "partOfSpeech": "noun",
      "examples": [
        "A healthy lifestyle includes exercise and balanced diet.",
        "He changed his lifestyle after having a heart attack.",
        "Her busy lifestyle leaves little time for relaxation."
      ]
    },
    {
      "word": "thirsty",
      "meaning": "口渴的",
      "partOfSpeech": "adjective",
      "examples": [
        "I'm thirsty after skipping breakfast.",
        "The children were thirsty after playing outside.",
        "The hot weather made everyone feel thirsty."
      ]
    },
    {
      "word": "stomachache",
      "meaning": "胃痛",
      "partOfSpeech": "noun",
      "examples": [
        "She has a stomachache from eating too much junk food.",
        "The doctor gave her medicine for her stomachache.",
        "Resting and drinking warm water can help with stomachache."
      ]
    },
    {
      "word": "headache",
      "meaning": "头痛",
      "partOfSpeech": "noun",
      "examples": [
        "She has a headache from staring at the computer screen too long.",
        "I often get headaches when I'm stressed.",
        "Taking a break can help relieve a headache."
      ]
    },
    {
      "word": "toothache",
      "meaning": "牙痛",
      "partOfSpeech": "noun",
      "examples": [
        "He has a toothache and needs to see a dentist.",
        "Eating too much candy can cause toothache.",
        "The dentist treated his toothache."
      ]
    },
    {
      "word": "cough",
      "meaning": "咳嗽",
      "partOfSpeech": "verb",
      "examples": [
        "She has been coughing for a week.",
        "Cover your mouth when you cough.",
        "The doctor prescribed medicine to stop his cough."
      ]
    },
    {
      "word": "rest",
      "meaning": "休息",
      "partOfSpeech": "noun",
      "examples": [
        "You need to get enough rest to stay healthy.",
        "He took a short rest after finishing his homework.",
        "Proper rest is important for your body to recover."
      ]
    },
    {
      "word": "hungry",
      "meaning": "饥饿的",
      "partOfSpeech": "adjective",
      "examples": [
        "I'm hungry after skipping breakfast.",
        "The children were hungry after playing outside.",
        "She cooked dinner because everyone was hungry."
      ]
    }
  ],
  "P2-B2": [
    {
      "word": "vegetable",
      "meaning": "蔬菜",
      "partOfSpeech": "noun",
      "examples": [
        "Eating vegetables every day is good for your health.",
        "My favorite vegetable is broccoli.",
        "She grows vegetables in her garden."
      ]
    },
    {
      "word": "delicious",
      "meaning": "美味的",
      "partOfSpeech": "adjective",
      "examples": [
        "The food at that restaurant is very delicious.",
        "My mom cooks delicious meals for our family.",
        "I can't wait to taste the delicious cake."
      ]
    },
    {
      "word": "sweet",
      "meaning": "甜的",
      "partOfSpeech": "adjective",
      "examples": [
        "She likes sweet foods like chocolate and candy.",
        "The strawberries are very sweet this season.",
        "He added sugar to make the tea sweeter."
      ]
    },
    {
      "word": "sour",
      "meaning": "酸的",
      "partOfSpeech": "adjective",
      "examples": [
        "Lemons have a sour taste.",
        "The milk has gone sour and smells bad.",
        "She made a sour face when she tasted the lemon."
      ]
    },
    {
      "word": "salty",
      "meaning": "咸的",
      "partOfSpeech": "adjective",
      "examples": [
        "The soup is too salty for my taste.",
        "Eating too much salty food can be bad for your health.",
        "She added salt to make the dish more salty."
      ]
    },
    {
      "word": "bitter",
      "meaning": "苦的",
      "partOfSpeech": "adjective",
      "examples": [
        "Black coffee has a bitter taste.",
        "The medicine tastes bitter but it works.",
        "She made a bitter face after tasting the dark chocolate."
      ]
    },
    {
      "word": "taste",
      "meaning": "味道",
      "partOfSpeech": "noun",
      "examples": [
        "This dish has a wonderful taste.",
        "I can't stand the taste of durian.",
        "The taste of home-cooked meals is always the best."
      ]
    },
    {
      "word": "dessert",
      "meaning": "甜点",
      "partOfSpeech": "noun",
      "examples": [
        "We had ice cream for dessert after dinner.",
        "The restaurant serves delicious desserts.",
        "She made a chocolate cake as a dessert for the party."
      ]
    },
    {
      "word": "beef",
      "meaning": "牛肉",
      "partOfSpeech": "noun",
      "examples": [
        "I like to eat beef steak with black pepper sauce.",
        "The beef in this soup is very tender.",
        "She bought a pound of beef from the supermarket."
      ]
    },
    {
      "word": "chicken",
      "meaning": "鸡肉",
      "partOfSpeech": "noun",
      "examples": [
        "Fried chicken is a popular fast food.",
        "She cooked chicken soup for her sick child.",
        "The chicken in this dish is cooked perfectly."
      ]
    },
    {
      "word": "menu",
      "meaning": "菜单",
      "partOfSpeech": "noun",
      "examples": [
        "Let's look at the menu before ordering.",
        "The restaurant has a new menu with many options.",
        "She pointed to the menu and asked for the special dish."
      ]
    },
    {
      "word": "order",
      "meaning": "点餐",
      "partOfSpeech": "verb",
      "examples": [
        "I'll order a hamburger and fries.",
        "She ordered food online for delivery.",
        "The waiter came to take our order."
      ]
    },
    {
      "word": "bill",
      "meaning": "账单",
      "partOfSpeech": "noun",
      "examples": [
        "Could you please bring the bill?",
        "The bill for our meal was very reasonable.",
        "He paid the bill and we left the restaurant."
      ]
    },
    {
      "word": "full",
      "meaning": "饱的",
      "partOfSpeech": "adjective",
      "examples": [
        "I'm too full to eat dessert.",
        "The restaurant was full of people.",
        "She felt full after eating the big meal."
      ]
    }
  ],
  "P2-E1": [
    {
      "word": "basic",
      "meaning": "基本的，基础的",
      "partOfSpeech": "adjective",
      "examples": [
        "We need to learn the basic rules of grammar.",
        "The basic needs of life are food, water, and shelter.",
        "He taught me the basic skills of cooking."
      ]
    },
    {
      "word": "common",
      "meaning": "常见的，普通的",
      "partOfSpeech": "adjective",
      "examples": [
        "This is a common mistake for beginners.",
        "English is a common language around the world.",
        "We have many common interests."
      ]
    },
    {
      "word": "simple",
      "meaning": "简单的，简洁的",
      "partOfSpeech": "adjective",
      "examples": [
        "The answer is simple.",
        "She explained the concept in a simple way.",
        "I prefer simple food."
      ]
    },
    {
      "word": "complex",
      "meaning": "复杂的，综合的",
      "partOfSpeech": "adjective",
      "examples": [
        "The problem is very complex.",
        "He has a complex personality.",
        "The machine has many complex parts."
      ]
    },
    {
      "word": "clear",
      "meaning": "清晰的，明确的",
      "partOfSpeech": "adjective",
      "examples": [
        "Please speak in a clear voice.",
        "The instructions are clear and easy to follow.",
        "The sky is clear and blue."
      ]
    },
    {
      "word": "direct",
      "meaning": "直接的，直率的",
      "partOfSpeech": "adjective",
      "examples": [
        "He gave me a direct answer to my question.",
        "The most direct route to the airport is via the highway.",
        "She is very direct in her communication."
      ]
    },
    {
      "word": "formal",
      "meaning": "正式的，规范的",
      "partOfSpeech": "adjective",
      "examples": [
        "We need to wear formal clothes to the wedding.",
        "The letter was written in a formal style.",
        "The meeting was very formal and serious."
      ]
    },
    {
      "word": "official",
      "meaning": "官方的，正式的",
      "partOfSpeech": "adjective",
      "examples": [
        "The official announcement will be made tomorrow.",
        "He is an official representative of the company.",
        "We need to follow the official guidelines."
      ]
    },
    {
      "word": "private",
      "meaning": "私人的，秘密的",
      "partOfSpeech": "adjective",
      "examples": [
        "This is a private conversation.",
        "He has a private office.",
        "I value my private time."
      ]
    }
  ],
  "P2-B3": [
    {
      "word": "competition",
      "meaning": "比赛",
      "partOfSpeech": "noun",
      "examples": [
        "He won first place in the swimming competition.",
        "The school is hosting a basketball competition next week.",
        "She trained hard for the upcoming competition."
      ]
    },
    {
      "word": "win",
      "meaning": "赢得",
      "partOfSpeech": "verb",
      "examples": [
        "Our team worked hard to win the game.",
        "She was happy to win the first prize.",
        "With determination, you can win any challenge."
      ]
    },
    {
      "word": "hobby",
      "meaning": "爱好",
      "partOfSpeech": "noun",
      "examples": [
        "My hobby is collecting stamps.",
        "She has many hobbies including painting and dancing.",
        "Having a hobby can make your life more interesting."
      ]
    },
    {
      "word": "tennis",
      "meaning": "网球",
      "partOfSpeech": "noun",
      "examples": [
        "He plays tennis every weekend with his friends.",
        "She joined the school tennis team this year.",
        "Tennis is a popular sport around the world."
      ]
    },
    {
      "word": "basketball",
      "meaning": "篮球",
      "partOfSpeech": "noun",
      "examples": [
        "Playing basketball is good exercise.",
        "The school has a new basketball court.",
        "He is a big fan of basketball and watches every game."
      ]
    },
    {
      "word": "soccer",
      "meaning": "足球",
      "partOfSpeech": "noun",
      "examples": [
        "Soccer is the most popular sport in the world.",
        "He plays soccer for the school team.",
        "We watched the soccer game on TV last night."
      ]
    },
    {
      "word": "volleyball",
      "meaning": "排球",
      "partOfSpeech": "noun",
      "examples": [
        "She enjoys playing volleyball at the beach.",
        "The school volleyball team won the championship.",
        "Volleyball requires good teamwork."
      ]
    },
    {
      "word": "player",
      "meaning": "运动员",
      "partOfSpeech": "noun",
      "examples": [
        "He is a talented basketball player.",
        "The football team has many skilled players.",
        "She dreams of becoming a professional tennis player."
      ]
    },
    {
      "word": "team",
      "meaning": "团队",
      "partOfSpeech": "noun",
      "examples": [
        "Our team worked together to complete the project.",
        "The basketball team practices every day after school.",
        "Team spirit is important for success."
      ]
    },
    {
      "word": "match",
      "meaning": "比赛",
      "partOfSpeech": "noun",
      "examples": [
        "The soccer match was very exciting.",
        "We watched the basketball match on TV.",
        "The match between the two teams was closely contested."
      ]
    },
    {
      "word": "lose",
      "meaning": "输掉",
      "partOfSpeech": "verb",
      "examples": [
        "Our team worked hard but still lost the game.",
        "She was sad to lose the competition.",
        "You can learn from your mistakes even when you lose."
      ]
    },
    {
      "word": "fan",
      "meaning": "粉丝",
      "partOfSpeech": "noun",
      "examples": [
        "He is a big fan of the local basketball team.",
        "The singer has millions of fans around the world.",
        "She waited in line for hours to meet her favorite celebrity as a devoted fan."
      ]
    },
    {
      "word": "popular",
      "meaning": "流行的",
      "partOfSpeech": "adjective",
      "examples": [
        "This song is very popular among teenagers.",
        "Basketball is a popular sport in many countries.",
        "She is a popular student at school because she is friendly."
      ]
    },
    {
      "word": "instrument",
      "meaning": "乐器",
      "partOfSpeech": "noun",
      "examples": [
        "He plays the piano, which is his favorite instrument.",
        "The school band has many different instruments.",
        "Learning to play a musical instrument takes practice."
      ]
    },
    {
      "word": "concert",
      "meaning": "音乐会",
      "partOfSpeech": "noun",
      "examples": [
        "We went to a rock concert last night.",
        "The orchestra will give a concert next week.",
        "She bought tickets for the pop star's concert."
      ]
    }
  ],
  "P2-C1": [
    {
      "word": "internet",
      "meaning": "互联网",
      "partOfSpeech": "noun",
      "examples": [
        "The internet allows us to access information from all over the world.",
        "We use the internet to communicate with friends and family.",
        "Many students use the internet to research for their homework."
      ]
    },
    {
      "word": "social",
      "meaning": "社交的",
      "partOfSpeech": "adjective",
      "examples": [
        "She is very social and has many friends.",
        "Social media platforms help people stay connected.",
        "It's important to have good social skills in life."
      ]
    },
    {
      "word": "message",
      "meaning": "消息",
      "partOfSpeech": "noun",
      "examples": [
        "I received a message from my friend this morning.",
        "Can you send me a message when you arrive?",
        "The teacher left a message for the students on the board."
      ]
    },
    {
      "word": "technology",
      "meaning": "技术",
      "partOfSpeech": "noun",
      "examples": [
        "Modern technology has changed our lives greatly.",
        "The school has the latest technology in its labs.",
        "Learning about new technology is important for our future."
      ]
    },
    {
      "word": "smart",
      "meaning": "聪明的",
      "partOfSpeech": "adjective",
      "examples": [
        "She is a smart student who always gets good grades.",
        "He came up with a smart solution to the problem.",
        "Smart phones have become an essential part of our daily lives."
      ]
    },
    {
      "word": "development",
      "meaning": "发展",
      "partOfSpeech": "noun",
      "examples": [
        "The development of new technologies is very fast.",
        "The city has seen great development in recent years.",
        "Education is important for the development of a country."
      ]
    },
    {
      "word": "information",
      "meaning": "信息",
      "partOfSpeech": "noun",
      "examples": [
        "We need more information before making a decision.",
        "The internet is a great source of information.",
        "The teacher gave us information about the upcoming test."
      ]
    },
    {
      "word": "online",
      "meaning": "在线的",
      "partOfSpeech": "adjective",
      "examples": [
        "I like to shop online because it's convenient.",
        "We had an online class yesterday due to the rain.",
        "Many people spend hours online every day."
      ]
    },
    {
      "word": "useful",
      "meaning": "有用的",
      "partOfSpeech": "adjective",
      "examples": [
        "This dictionary is very useful for learning English.",
        "She gave me some useful advice about studying.",
        "Computers are useful tools for many jobs."
      ]
    },
    {
      "word": "tool",
      "meaning": "工具",
      "partOfSpeech": "noun",
      "examples": [
        "A hammer is a common tool used for building.",
        "Computers are important tools for modern work.",
        "The teacher used various tools to make the lesson interesting."
      ]
    },
    {
      "word": "search",
      "meaning": "搜索",
      "partOfSpeech": "verb",
      "examples": [
        "I need to search for information about dinosaurs.",
        "She searched her bag for her lost keys.",
        "We can use search engines to find what we need online."
      ]
    },
    {
      "word": "share",
      "meaning": "分享",
      "partOfSpeech": "verb",
      "examples": [
        "Let's share the cake with everyone.",
        "She likes to share her ideas with the class.",
        "We should share our toys with friends."
      ]
    },
    {
      "word": "connection",
      "meaning": "连接",
      "partOfSpeech": "noun",
      "examples": [
        "The internet provides a connection to the world.",
        "There is a strong connection between hard work and success.",
        "We need to improve our connection with each other."
      ]
    },
    {
      "word": "download",
      "meaning": "下载",
      "partOfSpeech": "verb",
      "examples": [
        "I need to download the new software update.",
        "She downloaded some music to her phone.",
        "We can download books and movies from the internet."
      ]
    },
    {
      "word": "screen",
      "meaning": "屏幕",
      "partOfSpeech": "noun",
      "examples": [
        "The computer screen is too bright for my eyes.",
        "She watched the movie on the big screen at the cinema.",
        "I need to clean the dust off my phone screen."
      ]
    }
  ],
  "P2-C2": [
    {
      "word": "nature",
      "meaning": "自然",
      "partOfSpeech": "noun",
      "examples": [
        "We should protect nature and all living things.",
        "I love spending time in nature, especially in the mountains.",
        "Nature provides us with food, water, and air."
      ]
    },
    {
      "word": "pollution",
      "meaning": "污染",
      "partOfSpeech": "noun",
      "examples": [
        "Air pollution is a serious problem in many cities.",
        "We need to reduce water pollution to protect our rivers.",
        "Plastic pollution is harmful to marine life."
      ]
    },
    {
      "word": "protect",
      "meaning": "保护",
      "partOfSpeech": "verb",
      "examples": [
        "We must protect our environment for future generations.",
        "The police work to protect the community from danger.",
        "It's important to protect endangered species."
      ]
    },
    {
      "word": "earth",
      "meaning": "地球",
      "partOfSpeech": "noun",
      "examples": [
        "The earth is our home and we must take care of it.",
        "Scientists study the earth to learn about its history.",
        "We should reduce our carbon footprint to help the earth."
      ]
    },
    {
      "word": "environment",
      "meaning": "环境",
      "partOfSpeech": "noun",
      "examples": [
        "We need to keep our environment clean and healthy.",
        "The school teaches students about environmental protection.",
        "Plants and animals depend on their environment to survive."
      ]
    },
    {
      "word": "rubbish",
      "meaning": "垃圾",
      "partOfSpeech": "noun",
      "examples": [
        "Please put your rubbish in the bin.",
        "We should reduce the amount of rubbish we produce.",
        "Rubbish can pollute our environment if not disposed of properly."
      ]
    },
    {
      "word": "recycling",
      "meaning": "回收",
      "partOfSpeech": "noun",
      "examples": [
        "Recycling helps reduce waste and protect the environment.",
        "Our school has a recycling program for paper and plastic.",
        "We should separate our recycling from regular rubbish."
      ]
    },
    {
      "word": "plastic",
      "meaning": "塑料",
      "partOfSpeech": "noun",
      "examples": [
        "Too much plastic waste is harmful to the environment.",
        "We should use reusable bags instead of plastic ones.",
        "Plastic bottles can be recycled to make new products."
      ]
    },
    {
      "word": "clean",
      "meaning": "清洁的",
      "partOfSpeech": "adjective",
      "examples": [
        "We need to keep our classrooms clean and tidy.",
        "Clean air and water are essential for our health.",
        "She likes to keep her room clean and organized."
      ]
    },
    {
      "word": "forest",
      "meaning": "森林",
      "partOfSpeech": "noun",
      "examples": [
        "Forests are home to many different animals and plants.",
        "We should protect forests from deforestation.",
        "Walking in the forest is a great way to relax."
      ]
    },
    {
      "word": "global",
      "meaning": "全球的",
      "partOfSpeech": "adjective",
      "examples": [
        "Global warming is a serious threat to our planet.",
        "The internet has created a global community.",
        "We need global cooperation to solve environmental problems."
      ]
    },
    {
      "word": "temperature",
      "meaning": "温度",
      "partOfSpeech": "noun",
      "examples": [
        "The temperature today is 25 degrees Celsius.",
        "Global temperatures are rising due to climate change.",
        "We use a thermometer to measure temperature."
      ]
    },
    {
      "word": "reduce",
      "meaning": "减少",
      "partOfSpeech": "verb",
      "examples": [
        "We should reduce our use of single-use plastics.",
        "Walking or cycling can help reduce air pollution.",
        "Turning off lights when not in use helps reduce energy consumption."
      ]
    },
    {
      "word": "reuse",
      "meaning": "重复使用",
      "partOfSpeech": "verb",
      "examples": [
        "We should reuse items instead of throwing them away.",
        "Reusing bags and bottles helps reduce waste.",
        "The teacher encourages students to reuse materials for art projects."
      ]
    },
    {
      "word": "waste",
      "meaning": "浪费",
      "partOfSpeech": "noun",
      "examples": [
        "We should avoid waste by only buying what we need.",
        "Food waste is a big problem in many countries.",
        "Turning off the tap while brushing your teeth helps reduce water waste."
      ]
    }
  ],
  "P2-C3": [
    {
      "word": "tradition",
      "meaning": "传统",
      "partOfSpeech": "noun",
      "examples": [
        "It's a tradition in our family to have dinner together on Sundays.",
        "Chinese New Year is an important tradition in China.",
        "We should respect the traditions of different cultures."
      ]
    },
    {
      "word": "festival",
      "meaning": "节日",
      "partOfSpeech": "noun",
      "examples": [
        "The Spring Festival is the most important festival in China.",
        "We celebrate many festivals throughout the year.",
        "The festival was filled with music, dance, and delicious food."
      ]
    },
    {
      "word": "custom",
      "meaning": "习俗",
      "partOfSpeech": "noun",
      "examples": [
        "Shaking hands is a common custom when meeting someone new.",
        "Different countries have different customs and traditions.",
        "We should learn about the local customs when traveling abroad."
      ]
    },
    {
      "word": "celebration",
      "meaning": "庆祝",
      "partOfSpeech": "noun",
      "examples": [
        "We had a big celebration for his birthday.",
        "The celebration lasted until late in the evening.",
        "Victory in the game was cause for celebration."
      ]
    },
    {
      "word": "national",
      "meaning": "国家的",
      "partOfSpeech": "adjective",
      "examples": [
        "The national flag of China is red with five yellow stars.",
        "We celebrate National Day on October 1st.",
        "He is a national hero for his contributions to the country."
      ]
    },
    {
      "word": "history",
      "meaning": "历史",
      "partOfSpeech": "noun",
      "examples": [
        "Studying history helps us understand the past.",
        "China has a long and rich history.",
        "The museum has many artifacts from ancient history."
      ]
    },
    {
      "word": "art",
      "meaning": "艺术",
      "partOfSpeech": "noun",
      "examples": [
        "Painting and sculpture are forms of visual art.",
        "The school offers classes in music, dance, and art.",
        "She has a great appreciation for art and culture."
      ]
    },
    {
      "word": "music",
      "meaning": "音乐",
      "partOfSpeech": "noun",
      "examples": [
        "Listening to music is a great way to relax.",
        "She plays music on the piano every afternoon.",
        "Music is an important part of many cultures around the world."
      ]
    },
    {
      "word": "style",
      "meaning": "风格",
      "partOfSpeech": "noun",
      "examples": [
        "Her clothing style is very fashionable.",
        "The artist has a unique style of painting.",
        "Different periods in history have different architectural styles."
      ]
    },
    {
      "word": "international",
      "meaning": "国际的",
      "partOfSpeech": "adjective",
      "examples": [
        "The school has students from many international backgrounds.",
        "We need international cooperation to solve global problems.",
        "The company does business with international clients."
      ]
    },
    {
      "word": "symbol",
      "meaning": "象征",
      "partOfSpeech": "noun",
      "examples": [
        "The dove is a symbol of peace.",
        "The Great Wall is a symbol of Chinese history and culture.",
        "Flags are important symbols of national identity."
      ]
    },
    {
      "word": "ancient",
      "meaning": "古代的",
      "partOfSpeech": "adjective",
      "examples": [
        "The ancient Egyptians built the pyramids.",
        "We studied ancient civilizations in history class.",
        "The museum has many artifacts from ancient times."
      ]
    },
    {
      "word": "modern",
      "meaning": "现代的",
      "partOfSpeech": "adjective",
      "examples": [
        "Modern technology has changed our lives dramatically.",
        "The city has a mix of ancient and modern buildings.",
        "We live in a modern world with many conveniences."
      ]
    },
    {
      "word": "standard",
      "meaning": "标准",
      "partOfSpeech": "noun",
      "examples": [
        "The school has high academic standards.",
        "We need to maintain high standards of quality.",
        "The company sets strict standards for its products."
      ]
    },
    {
      "word": "value",
      "meaning": "价值",
      "partOfSpeech": "noun",
      "examples": [
        "Honesty and kindness are important values.",
        "The painting has great artistic value.",
        "We should teach children the value of hard work."
      ]
    }
  ],
  "P2-D1": [
    {
      "word": "mountain",
      "meaning": "山",
      "partOfSpeech": "noun",
      "examples": [
        "The mountain is covered with snow all year round.",
        "We climbed the mountain and enjoyed the beautiful view from the top.",
        "Many people like to go hiking in the mountains on weekends."
      ]
    },
    {
      "word": "river",
      "meaning": "河流",
      "partOfSpeech": "noun",
      "examples": [
        "The river flows through the center of the city.",
        "We went fishing in the river last summer.",
        "Rivers are important sources of water for people and animals."
      ]
    },
    {
      "word": "ocean",
      "meaning": "海洋",
      "partOfSpeech": "noun",
      "examples": [
        "The ocean is home to many different species of fish.",
        "We spent our vacation at the ocean, swimming and building sandcastles.",
        "The Pacific Ocean is the largest ocean in the world."
      ]
    },
    {
      "word": "island",
      "meaning": "岛屿",
      "partOfSpeech": "noun",
      "examples": [
        "Hawaii is a group of beautiful islands in the Pacific Ocean.",
        "We visited a small island during our cruise.",
        "The island is known for its white sandy beaches and clear blue water."
      ]
    },
    {
      "word": "desert",
      "meaning": "沙漠",
      "partOfSpeech": "noun",
      "examples": [
        "The Sahara is the largest desert in the world.",
        "Deserts are very dry and have little rainfall.",
        "Camels are well adapted to life in the desert."
      ]
    },
    {
      "word": "climate",
      "meaning": "气候",
      "partOfSpeech": "noun",
      "examples": [
        "The climate in tropical regions is warm and humid.",
        "Climate change is causing temperatures to rise around the world.",
        "We need to protect our climate for future generations."
      ]
    },
    {
      "word": "weather",
      "meaning": "天气",
      "partOfSpeech": "noun",
      "examples": [
        "The weather today is sunny and warm.",
        "We should check the weather forecast before going on a trip.",
        "Bad weather can cause delays in transportation."
      ]
    },
    {
      "word": "season",
      "meaning": "季节",
      "partOfSpeech": "noun",
      "examples": [
        "There are four seasons in a year: spring, summer, autumn, and winter.",
        "My favorite season is autumn because the leaves change color.",
        "We need to wear different clothes for different seasons."
      ]
    },
    {
      "word": "degree",
      "meaning": "度",
      "partOfSpeech": "noun",
      "examples": [
        "The temperature is 25 degrees Celsius today.",
        "Water boils at 100 degrees Celsius.",
        "He has a degree in computer science from a top university."
      ]
    },
    {
      "word": "north",
      "meaning": "北",
      "partOfSpeech": "noun",
      "examples": [
        "The North Pole is located at the top of the Earth.",
        "We need to head north to reach the mountains.",
        "Canada is north of the United States."
      ]
    },
    {
      "word": "south",
      "meaning": "南",
      "partOfSpeech": "noun",
      "examples": [
        "Australia is in the southern hemisphere.",
        "We traveled south to visit our relatives.",
        "The South Pole is located at the bottom of the Earth."
      ]
    },
    {
      "word": "east",
      "meaning": "东",
      "partOfSpeech": "noun",
      "examples": [
        "The sun rises in the east every morning.",
        "Japan is east of China.",
        "We need to go east to reach the coast."
      ]
    },
    {
      "word": "west",
      "meaning": "西",
      "partOfSpeech": "noun",
      "examples": [
        "The sun sets in the west every evening.",
        "The United States is west of the Atlantic Ocean.",
        "We traveled west across the country during our vacation."
      ]
    },
    {
      "word": "world",
      "meaning": "世界",
      "partOfSpeech": "noun",
      "examples": [
        "The world is a beautiful place with many different cultures.",
        "We need to work together to make the world a better place.",
        "There are seven continents in the world."
      ]
    },
    {
      "word": "landscape",
      "meaning": "风景",
      "partOfSpeech": "noun",
      "examples": [
        "The landscape in the mountains is breathtaking.",
        "We took many photos of the beautiful landscape during our trip.",
        "The landscape changes dramatically between seasons."
      ]
    }
  ],
  "P2-D2": [
    {
      "word": "dream",
      "meaning": "梦想",
      "partOfSpeech": "noun",
      "examples": [
        "My dream is to become a doctor and help people.",
        "She worked hard to make her dream come true.",
        "Having a dream gives us something to work towards."
      ]
    },
    {
      "word": "job",
      "meaning": "工作",
      "partOfSpeech": "noun",
      "examples": [
        "He has a job as a teacher at a local school.",
        "Finding a good job requires hard work and education.",
        "She loves her job because it allows her to help others."
      ]
    },
    {
      "word": "future",
      "meaning": "未来",
      "partOfSpeech": "noun",
      "examples": [
        "We need to study hard for our future.",
        "The future looks bright for those who work hard.",
        "We should protect the environment for future generations."
      ]
    },
    {
      "word": "doctor",
      "meaning": "医生",
      "partOfSpeech": "noun",
      "examples": [
        "The doctor examined the patient and prescribed medicine.",
        "My mother is a doctor who works in a hospital.",
        "Doctors work hard to keep people healthy."
      ]
    },
    {
      "word": "nurse",
      "meaning": "护士",
      "partOfSpeech": "noun",
      "examples": [
        "The nurse took care of the patients in the hospital.",
        "She decided to become a nurse because she likes helping people.",
        "Nurses play an important role in healthcare."
      ]
    },
    {
      "word": "teacher",
      "meaning": "教师",
      "partOfSpeech": "noun",
      "examples": [
        "My English teacher is very kind and helpful.",
        "Teachers play a crucial role in educating the next generation.",
        "She has been a teacher for over 20 years."
      ]
    },
    {
      "word": "engineer",
      "meaning": "工程师",
      "partOfSpeech": "noun",
      "examples": [
        "The engineer designed a new bridge for the city.",
        "He studied engineering in college.",
        "Engineers use science and math to solve problems."
      ]
    },
    {
      "word": "scientist",
      "meaning": "科学家",
      "partOfSpeech": "noun",
      "examples": [
        "The scientist conducted experiments in the laboratory.",
        "She dreams of becoming a scientist and making new discoveries.",
        "Scientists work to understand the world around us."
      ]
    },
    {
      "word": "artist",
      "meaning": "艺术家",
      "partOfSpeech": "noun",
      "examples": [
        "The artist painted a beautiful picture of the landscape.",
        "She is a talented artist who creates sculptures.",
        "Artists express their ideas and emotions through their work."
      ]
    },
    {
      "word": "reporter",
      "meaning": "记者",
      "partOfSpeech": "noun",
      "examples": [
        "The reporter interviewed the mayor about the new policy.",
        "She works as a reporter for a local newspaper.",
        "Reporters help keep the public informed about important events."
      ]
    },
    {
      "word": "pilot",
      "meaning": "飞行员",
      "partOfSpeech": "noun",
      "examples": [
        "The pilot flew the plane safely through the storm.",
        "He trained for years to become a commercial pilot.",
        "Pilots need to be calm and focused during flights."
      ]
    },
    {
      "word": "space",
      "meaning": "太空",
      "partOfSpeech": "noun",
      "examples": [
        "Astronauts travel to space to conduct research.",
        "The space station orbits the Earth every 90 minutes.",
        "We know more about space now than ever before."
      ]
    },
    {
      "word": "choice",
      "meaning": "选择",
      "partOfSpeech": "noun",
      "examples": [
        "We have many choices when it comes to career paths.",
        "Making the right choice requires careful consideration.",
        "She made a wise choice by studying hard in school."
      ]
    },
    {
      "word": "success",
      "meaning": "成功",
      "partOfSpeech": "noun",
      "examples": [
        "Hard work is the key to success.",
        "She celebrated her success in the competition.",
        "Success means different things to different people."
      ]
    },
    {
      "word": "effort",
      "meaning": "努力",
      "partOfSpeech": "noun",
      "examples": [
        "With hard work and effort, you can achieve your goals.",
        "She put a lot of effort into her school project.",
        "Team effort is important for winning games."
      ]
    }
  ],
  "P2-D3": [
    {
      "word": "planet",
      "meaning": "行星",
      "partOfSpeech": "noun",
      "examples": [
        "Earth is the third planet from the sun.",
        "Scientists have discovered many new planets outside our solar system.",
        "We need to take care of our planet by reducing pollution."
      ]
    },
    {
      "word": "earth",
      "meaning": "地球",
      "partOfSpeech": "noun",
      "examples": [
        "The earth is our home and we must protect it.",
        "Earth is the only planet known to support life.",
        "We should learn about the earth's ecosystems and how to preserve them."
      ]
    },
    {
      "word": "moon",
      "meaning": "月亮",
      "partOfSpeech": "noun",
      "examples": [
        "The moon orbits around the earth every 28 days.",
        "The full moon is a beautiful sight in the night sky.",
        "Astronauts have walked on the moon's surface."
      ]
    },
    {
      "word": "sun",
      "meaning": "太阳",
      "partOfSpeech": "noun",
      "examples": [
        "The sun is the center of our solar system.",
        "Plants need sunlight to grow.",
        "We should wear sunscreen to protect our skin from the sun."
      ]
    },
    {
      "word": "sky",
      "meaning": "天空",
      "partOfSpeech": "noun",
      "examples": [
        "The sky is blue on a clear day.",
        "Birds fly high in the sky.",
        "We watched the stars appear in the night sky."
      ]
    },
    {
      "word": "travel",
      "meaning": "旅行",
      "partOfSpeech": "verb",
      "examples": [
        "I love to travel and explore new places.",
        "We traveled to Europe last summer and visited many countries.",
        "Traveling helps us learn about different cultures."
      ]
    },
    {
      "word": "discover",
      "meaning": "发现",
      "partOfSpeech": "verb",
      "examples": [
        "Scientists discovered a new species of fish in the ocean.",
        "Columbus discovered America in 1492.",
        "We can discover new things by asking questions and being curious."
      ]
    },
    {
      "word": "hidden",
      "meaning": "隐藏的",
      "partOfSpeech": "adjective",
      "examples": [
        "The treasure was hidden in a secret cave.",
        "There are many hidden gems in this small town.",
        "The book has a hidden message that only careful readers will find."
      ]
    },
    {
      "word": "treasure",
      "meaning": "宝藏",
      "partOfSpeech": "noun",
      "examples": [
        "The pirates buried their treasure on a remote island.",
        "Family photos are a treasure that we should cherish.",
        "The museum has a collection of ancient treasures."
      ]
    },
    {
      "word": "danger",
      "meaning": "危险",
      "partOfSpeech": "noun",
      "examples": [
        "We need to be careful when we encounter danger.",
        "There are many dangers associated with extreme sports.",
        "The sign warned us of the danger ahead."
      ]
    },
    {
      "word": "safety",
      "meaning": "安全",
      "partOfSpeech": "noun",
      "examples": [
        "Safety should always be our top priority.",
        "We need to follow safety rules to avoid accidents.",
        "The fire drill was conducted to ensure everyone's safety."
      ]
    },
    {
      "word": "adventure",
      "meaning": "冒险",
      "partOfSpeech": "noun",
      "examples": [
        "We went on an adventure in the mountains.",
        "Life is full of adventures if we are willing to try new things.",
        "The book tells the story of a young boy's adventure at sea."
      ]
    },
    {
      "word": "follow",
      "meaning": "跟随",
      "partOfSpeech": "verb",
      "examples": [
        "Please follow me to the classroom.",
        "We should follow the rules to maintain order.",
        "The dog likes to follow its owner everywhere."
      ]
    },
    {
      "word": "guide",
      "meaning": "向导",
      "partOfSpeech": "noun",
      "examples": [
        "The guide led us through the forest safely.",
        "We hired a local guide to show us around the city.",
        "The guidebook provided helpful information about the attractions."
      ]
    },
    {
      "word": "strange",
      "meaning": "奇怪的",
      "partOfSpeech": "adjective",
      "examples": [
        "We heard a strange noise coming from the attic.",
        "He has a strange habit of collecting bottle caps.",
        "The strange light in the sky puzzled everyone who saw it."
      ]
    }
  ],
  "P2-E2": [
    {
      "word": "comfortable",
      "meaning": "舒适的",
      "partOfSpeech": "adjective",
      "examples": [
        "This sofa is very comfortable to sit on.",
        "I feel comfortable talking to my best friend about anything.",
        "She wears comfortable shoes for walking long distances."
      ]
    },
    {
      "word": "expensive",
      "meaning": "昂贵的",
      "partOfSpeech": "adjective",
      "examples": [
        "The new iPhone is very expensive.",
        "Eating at that restaurant is too expensive for me.",
        "She bought an expensive dress for the prom."
      ]
    },
    {
      "word": "cheap",
      "meaning": "便宜的",
      "partOfSpeech": "adjective",
      "examples": [
        "The clothes at this store are very cheap.",
        "I found a cheap flight to Paris online.",
        "Buying in bulk is usually cheaper than buying individual items."
      ]
    },
    {
      "word": "boring",
      "meaning": "无聊的",
      "partOfSpeech": "adjective",
      "examples": [
        "The movie was so boring that I fell asleep.",
        "I find history class boring, but my friend loves it.",
        "Waiting in line for hours is boring."
      ]
    },
    {
      "word": "interesting",
      "meaning": "有趣的",
      "partOfSpeech": "adjective",
      "examples": [
        "The book I'm reading is very interesting.",
        "I find astronomy interesting because I love learning about space.",
        "The museum has many interesting exhibits."
      ]
    },
    {
      "word": "exciting",
      "meaning": "令人兴奋的",
      "partOfSpeech": "adjective",
      "examples": [
        "Going to the amusement park was exciting.",
        "I'm excited about the upcoming school trip.",
        "The football game was very exciting, with a last-minute goal."
      ]
    },
    {
      "word": "busy",
      "meaning": "忙碌的",
      "partOfSpeech": "adjective",
      "examples": [
        "My mom is always busy with work and household chores.",
        "The city streets are busy during rush hour.",
        "I'm too busy to go out tonight; I have homework to do."
      ]
    },
    {
      "word": "free",
      "meaning": "空闲的",
      "partOfSpeech": "adjective",
      "examples": [
        "Are you free this weekend to hang out?",
        "The concert is free for students with ID.",
        "I have some free time after school today."
      ]
    },
    {
      "word": "available",
      "meaning": "可获得的",
      "partOfSpeech": "adjective",
      "examples": [
        "Is the manager available to talk right now?",
        "The book is available at the library.",
        "Tickets for the show are still available online."
      ]
    },
    {
      "word": "crowded",
      "meaning": "拥挤的",
      "partOfSpeech": "adjective",
      "examples": [
        "The subway is very crowded during rush hour.",
        "The concert venue was so crowded that we could barely move.",
        "The beach is always crowded on weekends in the summer."
      ]
    },
    {
      "word": "dangerous",
      "meaning": "危险的",
      "partOfSpeech": "adjective",
      "examples": [
        "It's dangerous to drive fast in bad weather.",
        "Swimming in the ocean can be dangerous if you're not careful.",
        "The doctor said it's dangerous to smoke."
      ]
    },
    {
      "word": "safe",
      "meaning": "安全的",
      "partOfSpeech": "adjective",
      "examples": [
        "The playground is a safe place for children to play.",
        "It's safe to cross the street when the light is green.",
        "The doctor said it's safe to go home now."
      ]
    },
    {
      "word": "beautiful",
      "meaning": "美丽的",
      "partOfSpeech": "adjective",
      "examples": [
        "The sunset was beautiful.",
        "She wore a beautiful dress to the party.",
        "The countryside is beautiful in the spring."
      ]
    },
    {
      "word": "ugly",
      "meaning": "丑陋的",
      "partOfSpeech": "adjective",
      "examples": [
        "The old building was ugly and rundown.",
        "She thought the dress was ugly, but I liked it.",
        "The storm left an ugly mess in the yard."
      ]
    },
    {
      "word": "clean",
      "meaning": "干净的",
      "partOfSpeech": "adjective",
      "examples": [
        "The house was clean and tidy.",
        "Please keep your room clean.",
        "The water in the lake was clean and clear."
      ]
    }
  ]
}