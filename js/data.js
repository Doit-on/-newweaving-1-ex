/**
 * NEW Weaving It Together 1 (ม.4) - Curriculum & Exercise Dataset
 * สำนักพิมพ์ไทยวัฒนาพานิช (TWP) & Cengage Learning / National Geographic Learning
 * Validated 100% against Curriculum PDF
 */

const DEFAULT_EXERCISES = [
  {
    "id": 1,
    "title": "Oktoberfest: Germany's Famous Festival",
    "thaiTitle": "เทศกาลอ็อกโทเบอร์เฟสต์: เทศกาลชื่อดังแห่งเยอรมนี",
    "cefr": "A2",
    "unit": "Unit 1",
    "image": "assets/images/ex1.jpg",
    "audio": "assets/audio/ex1_oktoberfest.mp3",
    "passage": "Imagine walking into a huge festival filled with music, delicious food, colorful clothes, and thousands of happy people. This is Oktoberfest, one of the world's biggest and most famous festivals. It takes place every year in Munich, Germany, for about two weeks, from late September to early October. The festival began in 1810 as a celebration of a royal wedding. Today, millions of people from Germany and around the world visit Munich to enjoy it.\n\nAt Oktoberfest, you can easily spot people wearing traditional Bavarian clothing. Men wear lederhosen, which are leather shorts with suspenders, while women wear dirndls, colorful dresses with aprons. Large festival tents are filled with people enjoying traditional food, drinks, and live music. Popular foods include pretzels, sausages, roast chicken, and potato dishes.\n\nThere is plenty to do besides eating and drinking. Visitors can watch parades and traditional performances, enjoy folk dancing, play games, and ride exciting carnival rides. The festival is full of music, laughter, and energy, creating a fun atmosphere for people of different ages.\n\nOktoberfest is more than just a festival. It is an important part of German culture and Bavarian tradition. It brings people together to enjoy food, music, and time with family and friends. Today, Oktoberfest is famous around the world, and many countries even hold their own versions of the festival.",
    "paragraphs": [
      "Imagine walking into a huge festival filled with music, delicious food, colorful clothes, and thousands of happy people. This is Oktoberfest, one of the world's biggest and most famous festivals. It takes place every year in Munich, Germany, for about two weeks, from late September to early October. The festival began in 1810 as a celebration of a royal wedding. Today, millions of people from Germany and around the world visit Munich to enjoy it.",
      "At Oktoberfest, you can easily spot people wearing traditional Bavarian clothing. Men wear lederhosen, which are leather shorts with suspenders, while women wear dirndls, colorful dresses with aprons. Large festival tents are filled with people enjoying traditional food, drinks, and live music. Popular foods include pretzels, sausages, roast chicken, and potato dishes.",
      "There is plenty to do besides eating and drinking. Visitors can watch parades and traditional performances, enjoy folk dancing, play games, and ride exciting carnival rides. The festival is full of music, laughter, and energy, creating a fun atmosphere for people of different ages.",
      "Oktoberfest is more than just a festival. It is an important part of German culture and Bavarian tradition. It brings people together to enjoy food, music, and time with family and friends. Today, Oktoberfest is famous around the world, and many countries even hold their own versions of the festival."
    ],
    "partA": [
      {
        "question": "Where does Oktoberfest take place every year?",
        "options": [
          {
            "key": "a",
            "text": "Berlin"
          },
          {
            "key": "b",
            "text": "Munich"
          },
          {
            "key": "c",
            "text": "Hamburg"
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'It takes place every year in Munich, Germany, for about two weeks...' (เทศกาลจัดขึ้นทุกปีที่เมืองมิวนิก ประเทศเยอรมนี)",
        "ref": "Paragraph 1: 'takes place every year in Munich, Germany'"
      },
      {
        "question": "Why did Oktoberfest begin in 1810?",
        "options": [
          {
            "key": "a",
            "text": "To celebrate a royal wedding"
          },
          {
            "key": "b",
            "text": "To celebrate German independence"
          },
          {
            "key": "c",
            "text": "To celebrate the harvest"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'The festival began in 1810 as a celebration of a royal wedding.' (เริ่มต้นขึ้นในปี 1810 เพื่อเฉลิมฉลองพิธีอภิเษกสมรสของราชวงศ์)",
        "ref": "Paragraph 1: 'celebration of a royal wedding'"
      },
      {
        "question": "What do women traditionally wear at Oktoberfest?",
        "options": [
          {
            "key": "a",
            "text": "Lederhosen"
          },
          {
            "key": "b",
            "text": "Kimonos"
          },
          {
            "key": "c",
            "text": "Dirndls"
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: '...while women wear dirndls, colorful dresses with aprons.' (ผู้หญิงสวมชุดเดิร์นเดิล ซึ่งเป็นชุดกระโปรงพื้นเมืองมีผ้ากันเปื้อน)",
        "ref": "Paragraph 2: 'women wear dirndls, colorful dresses'"
      },
      {
        "question": "Which activity can visitors enjoy at Oktoberfest?",
        "options": [
          {
            "key": "a",
            "text": "Watching traditional performances"
          },
          {
            "key": "b",
            "text": "Swimming in the festival tents"
          },
          {
            "key": "c",
            "text": "Climbing mountains"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Visitors can watch parades and traditional performances...' (นักท่องเที่ยวสามารถชมขบวนพาเหรดและการแสดงพื้นเมืองได้)",
        "ref": "Paragraph 3: 'watch parades and traditional performances'"
      },
      {
        "question": "Why is Oktoberfest important to German culture?",
        "options": [
          {
            "key": "a",
            "text": "It teaches people how to cook German food."
          },
          {
            "key": "b",
            "text": "It celebrates Bavarian traditions and brings people together."
          },
          {
            "key": "c",
            "text": "It is only for people from Munich."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'It is an important part of German culture and Bavarian tradition. It brings people together...' (เป็นส่วนสำคัญของวัฒนธรรมบาวาเรียและนำผู้คนมารวมตัวกัน)",
        "ref": "Paragraph 4: 'Bavarian tradition. It brings people together'"
      }
    ],
    "partB": {
      "wordBank": [
        "royal wedding",
        "Bavarian",
        "parades",
        "Munich",
        "dirndls"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Oktoberfest takes place every year in ",
          "suffix": ", Germany.",
          "answer": "Munich",
          "hint": "เมืองหลวงของรัฐบาวาเรีย"
        },
        {
          "id": 2,
          "prefix": "The festival began in 1810 to celebrate a ",
          "suffix": ".",
          "answer": "royal wedding",
          "hint": "งานอภิเษกสมรสของราชวงศ์"
        },
        {
          "id": 3,
          "prefix": "Women traditionally wear colorful dresses called ",
          "suffix": ".",
          "answer": "dirndls",
          "hint": "ชุดกระโปรงพื้นเมืองของสตรีบาวาเรีย"
        },
        {
          "id": 4,
          "prefix": "Visitors can watch ",
          "suffix": " and traditional performances at the festival.",
          "answer": "parades",
          "hint": "ขบวนพาเหรด"
        },
        {
          "id": 5,
          "prefix": "Oktoberfest celebrates ",
          "suffix": " culture and traditions.",
          "answer": "Bavarian",
          "hint": "วัฒนธรรมและประเพณีชาวบาวาเรีย"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Oktoberfest",
          "is held",
          "annually",
          "in",
          "Munich,",
          "Germany."
        ],
        "correct": "Oktoberfest is held annually in Munich, Germany."
      },
      {
        "id": 2,
        "tokens": [
          "The festival",
          "first started",
          "as a celebration of",
          "a royal marriage."
        ],
        "correct": "The festival first started as a celebration of a royal marriage."
      },
      {
        "id": 3,
        "tokens": [
          "Many visitors",
          "dress in",
          "traditional",
          "Bavarian clothes."
        ],
        "correct": "Many visitors dress in traditional Bavarian clothes."
      },
      {
        "id": 4,
        "tokens": [
          "The festival",
          "offers",
          "entertainment",
          "such as",
          "parades and carnival rides."
        ],
        "correct": "The festival offers entertainment such as parades and carnival rides."
      },
      {
        "id": 5,
        "tokens": [
          "Oktoberfest",
          "is celebrated",
          "in many countries",
          "around",
          "the world."
        ],
        "correct": "Oktoberfest is celebrated in many countries around the world."
      }
    ],
    "review": {
      "keyVocab": [
        {
          "word": "festival",
          "pos": "n.",
          "meaning": "เทศกาล, งานเฉลิมฉลอง"
        },
        {
          "word": "traditional",
          "pos": "adj.",
          "meaning": "ตามธรรมเนียมดั้งเดิม"
        },
        {
          "word": "parades",
          "pos": "n.",
          "meaning": "ขบวนพาเหรด"
        },
        {
          "word": "performances",
          "pos": "n.",
          "meaning": "การแสดง"
        },
        {
          "word": "celebration",
          "pos": "n.",
          "meaning": "การฉลอง"
        }
      ],
      "grammarTip": {
        "en": "Passive Voice in Present Simple: 'Oktoberfest is held annually in Munich.' (Subject + is/are + V.3).",
        "th": "Present Simple Passive Voice: is/am/are + V.3 ใช้บอกเหตุการณ์ที่ถูกจัดขึ้นอย่างสม่ำเสมอเป็นประจำทุกปี"
      }
    }
  },
  {
    "id": 2,
    "title": "The Colosseum: A Wonder of Ancient Rome",
    "thaiTitle": "โคลอสเซียม: สิ่งมหัศจรรย์แห่งกรุงโรมโบราณ",
    "cefr": "A2",
    "unit": "Unit 2",
    "image": "assets/images/ex2.jpg",
    "audio": "assets/audio/ex2_colosseum.mp3",
    "passage": "Imagine standing in front of a huge stone building that was built more than 2,000 years ago. This is the Colosseum, one of the most famous landmarks in Rome, Italy. It was built during the Roman Empire. Roman Emperor Vespasian began its construction in 72 AD, and his son Titus completed it in 80 AD. Made mainly of stone and concrete, the Colosseum was the largest amphitheater in the ancient world and could hold around 50,000 spectators.\n\nPeople came to the Colosseum to watch exciting events such as gladiator fights, wild animal battles, and mock sea battles. Gladiators were trained fighters who sometimes fought each other or dangerous animals such as lions, tigers, and bears. Roman emperors organized these events to entertain the crowds.\n\nOver the centuries, the Colosseum suffered damage from earthquakes and fires, and some of its stones were removed. However, much of the building is still standing today. It is now a UNESCO World Heritage Site and one of the most visited places in Italy. Tourists from around the world come to see its ancient ruins and learn about Roman history. Although it is no longer used for battles, the Colosseum remains a symbol of Rome and a reminder of the ancient world.",
    "paragraphs": [
      "Imagine standing in front of a huge stone building that was built more than 2,000 years ago. This is the Colosseum, one of the most famous landmarks in Rome, Italy. It was built during the Roman Empire. Roman Emperor Vespasian began its construction in 72 AD, and his son Titus completed it in 80 AD. Made mainly of stone and concrete, the Colosseum was the largest amphitheater in the ancient world and could hold around 50,000 spectators.",
      "People came to the Colosseum to watch exciting events such as gladiator fights, wild animal battles, and mock sea battles. Gladiators were trained fighters who sometimes fought each other or dangerous animals such as lions, tigers, and bears. Roman emperors organized these events to entertain the crowds.",
      "Over the centuries, the Colosseum suffered damage from earthquakes and fires, and some of its stones were removed. However, much of the building is still standing today. It is now a UNESCO World Heritage Site and one of the most visited places in Italy. Tourists from around the world come to see its ancient ruins and learn about Roman history. Although it is no longer used for battles, the Colosseum remains a symbol of Rome and a reminder of the ancient world."
    ],
    "partA": [
      {
        "question": "Why did Roman emperors organize events at the Colosseum?",
        "options": [
          {
            "key": "a",
            "text": "To entertain the people"
          },
          {
            "key": "b",
            "text": "To train Roman soldiers"
          },
          {
            "key": "c",
            "text": "To teach people about history"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Roman emperors organized these events to entertain the crowds.' (จักรพรรดิโรมันจัดงานเพื่อสร้างความบันเทิงแก่ฝูงชน)",
        "ref": "Paragraph 2: 'organized these events to entertain the crowds'"
      },
      {
        "question": "What made the Colosseum special in the ancient world?",
        "options": [
          {
            "key": "a",
            "text": "It was the oldest building in Rome."
          },
          {
            "key": "b",
            "text": "It was the largest amphitheater."
          },
          {
            "key": "c",
            "text": "It was the emperor's home."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: '...the Colosseum was the largest amphitheater in the ancient world and could hold around 50,000 spectators.' (เป็นอัฒจันทร์กลางแจ้งที่ใหญ่ที่สุดในโลกยุคโบราณ จุผู้ชมได้ราว 50,000 คน)",
        "ref": "Paragraph 1: 'the largest amphitheater in the ancient world'"
      },
      {
        "question": "What could spectators see at the Colosseum?",
        "options": [
          {
            "key": "a",
            "text": "Different kinds of exciting battles and shows"
          },
          {
            "key": "b",
            "text": "Traditional Italian dances"
          },
          {
            "key": "c",
            "text": "Modern sports competitions"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: '...watch exciting events such as gladiator fights, wild animal battles, and mock sea battles.' (การต่อสู้ของกลาดิเอเตอร์ สัตว์ร้าย และการจำลองยุทธนาวี)",
        "ref": "Paragraph 2: 'gladiator fights, wild animal battles, and mock sea battles'"
      },
      {
        "question": "Why are only parts of the Colosseum still standing today?",
        "options": [
          {
            "key": "a",
            "text": "It was never finished."
          },
          {
            "key": "b",
            "text": "People stopped visiting it."
          },
          {
            "key": "c",
            "text": "It was damaged over many years."
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'Over the centuries, the Colosseum suffered damage from earthquakes and fires...' (ได้รับความเสียหายจากแผ่นดินไหวและไฟไหม้ตลอดหลายศตวรรษ)",
        "ref": "Paragraph 3: 'suffered damage from earthquakes and fires'"
      },
      {
        "question": "What is the Colosseum mainly used for today?",
        "options": [
          {
            "key": "a",
            "text": "A place for tourists to learn about Roman history"
          },
          {
            "key": "b",
            "text": "A place for people to watch animal battles"
          },
          {
            "key": "c",
            "text": "A place for Roman emperors to hold events"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Tourists from around the world come to see its ancient ruins and learn about Roman history.' (เป็นสถานที่ให้นักท่องเที่ยวเรียนรู้ประวัติศาสตร์โรมัน)",
        "ref": "Paragraph 3: 'see its ancient ruins and learn about Roman history'"
      }
    ],
    "partB": {
      "wordBank": [
        "spectators",
        "battles",
        "damaged",
        "tourists",
        "ancient"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "The Colosseum is an ",
          "suffix": " building that is more than 2,000 years old.",
          "answer": "ancient",
          "hint": "เก่าแก่ โบราณ"
        },
        {
          "id": 2,
          "prefix": "Around 50,000 ",
          "suffix": " could watch events at the Colosseum.",
          "answer": "spectators",
          "hint": "ผู้ชม ผู้เข้าชม"
        },
        {
          "id": 3,
          "prefix": "People came to watch gladiator fights and wild animal ",
          "suffix": ".",
          "answer": "battles",
          "hint": "การต่อสู้ การประจัญบาน"
        },
        {
          "id": 4,
          "prefix": "The Colosseum was ",
          "suffix": " by earthquakes and fires over the years.",
          "answer": "damaged",
          "hint": "ได้รับความเสียหาย"
        },
        {
          "id": 5,
          "prefix": "Today, ",
          "suffix": " from around the world visit the Colosseum.",
          "answer": "tourists",
          "hint": "นักท่องเที่ยว"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "The Colosseum",
          "is",
          "a famous",
          "historical landmark",
          "in Rome."
        ],
        "correct": "The Colosseum is a famous historical landmark in Rome."
      },
      {
        "id": 2,
        "tokens": [
          "It",
          "was constructed",
          "during",
          "the Roman Empire."
        ],
        "correct": "It was constructed during the Roman Empire."
      },
      {
        "id": 3,
        "tokens": [
          "Gladiators",
          "sometimes fought",
          "dangerous",
          "creatures."
        ],
        "correct": "Gladiators sometimes fought dangerous creatures."
      },
      {
        "id": 4,
        "tokens": [
          "The building",
          "was badly damaged",
          "over",
          "the centuries."
        ],
        "correct": "The building was badly damaged over the centuries."
      },
      {
        "id": 5,
        "tokens": [
          "Today,",
          "it is recognized",
          "as",
          "a UNESCO World Heritage Site."
        ],
        "correct": "Today, it is recognized as a UNESCO World Heritage Site."
      }
    ],
    "review": {
      "keyVocab": [
        {
          "word": "amphitheater",
          "pos": "n.",
          "meaning": "อัฒจันทร์กลางแจ้งทรงกลม"
        },
        {
          "word": "spectators",
          "pos": "n.",
          "meaning": "ผู้ชม"
        },
        {
          "word": "gladiators",
          "pos": "n.",
          "meaning": "นักสู้กลาดิเอเตอร์"
        },
        {
          "word": "ruins",
          "pos": "n.",
          "meaning": "ซากโบราณสถาน"
        },
        {
          "word": "landmark",
          "pos": "n.",
          "meaning": "จุดสังเกตสำคัญ สถานที่สำคัญ"
        }
      ],
      "grammarTip": {
        "en": "Past Passive Voice: 'It was built', 'was constructed', 'was damaged'. Structure: was/were + V.3.",
        "th": "Past Passive Voice: was/were + V.3 บรรยายสิ่งที่ถูกสร้างหรือถูกกระทำในอดีต"
      }
    }
  },
  {
    "id": 3,
    "title": "Healthy Living: Simple Ways to Stay Healthy",
    "thaiTitle": "วิถีชีวิตสุขภาพดี: วิธีง่ายๆ สู่การมีสุขภาพแข็งแรง",
    "cefr": "A2",
    "unit": "Unit 3",
    "image": "assets/images/ex3.jpg",
    "audio": "assets/audio/ex3_healthy_living.mp3",
    "passage": "What can you do today to feel healthier tomorrow? You don't need to make big changes. Simple habits, such as eating healthy food, staying active, getting enough sleep, and taking care of your mind, can help you feel stronger and happier.\n\nFirst, eat a balanced diet. Try to include fruits, vegetables, whole grains, and protein in your meals. Drinking enough water is important too because your body needs it to work properly. You should also limit foods and drinks that contain too much sugar, salt, or unhealthy fat.\n\nNext, keep your body active. Try to exercise for at least 30 minutes a day. You can walk, run, cycle, swim, or even dance. You don't have to spend hours at the gym—small activities can help. Sleep is just as important. Adults generally need 7–9 hours each night. Good sleep helps your body rest and gives you energy for the next day.\n\nDon't forget your mental health! Spending time with family and friends, enjoying hobbies, and taking time to relax can reduce stress. Taking breaks from school or work and limiting screen time can also help your mind. With a few simple habits every day, you can build a healthier and happier life.",
    "paragraphs": [
      "What can you do today to feel healthier tomorrow? You don't need to make big changes. Simple habits, such as eating healthy food, staying active, getting enough sleep, and taking care of your mind, can help you feel stronger and happier.",
      "First, eat a balanced diet. Try to include fruits, vegetables, whole grains, and protein in your meals. Drinking enough water is important too because your body needs it to work properly. You should also limit foods and drinks that contain too much sugar, salt, or unhealthy fat.",
      "Next, keep your body active. Try to exercise for at least 30 minutes a day. You can walk, run, cycle, swim, or even dance. You don't have to spend hours at the gym—small activities can help. Sleep is just as important. Adults generally need 7–9 hours each night. Good sleep helps your body rest and gives you energy for the next day.",
      "Don't forget your mental health! Spending time with family and friends, enjoying hobbies, and taking time to relax can reduce stress. Taking breaks from school or work and limiting screen time can also help your mind. With a few simple habits every day, you can build a healthier and happier life."
    ],
    "partA": [
      {
        "question": "What is the main idea of the passage?",
        "options": [
          {
            "key": "a",
            "text": "People need to exercise at the gym every day."
          },
          {
            "key": "b",
            "text": "Simple daily habits can help people live healthier lives."
          },
          {
            "key": "c",
            "text": "Healthy food is more important than sleep."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'With a few simple habits every day, you can build a healthier and happier life.' (นิสัยง่ายๆ ในชีวิตประจำวันช่วยให้มีสุขภาพดีขึ้นได้)",
        "ref": "Paragraph 1 & 4: 'Simple habits... build a healthier and happier life'"
      },
      {
        "question": "Why is drinking enough water important?",
        "options": [
          {
            "key": "a",
            "text": "It helps the body work properly."
          },
          {
            "key": "b",
            "text": "It gives people more time to exercise."
          },
          {
            "key": "c",
            "text": "It helps people sleep for longer."
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Drinking enough water is important too because your body needs it to work properly.' (ช่วยให้ร่างกายทำงานได้อย่างมีประสิทธิภาพ)",
        "ref": "Paragraph 2: 'because your body needs it to work properly'"
      },
      {
        "question": "What does the passage suggest about exercise?",
        "options": [
          {
            "key": "a",
            "text": "People should only exercise at a gym."
          },
          {
            "key": "b",
            "text": "Exercise is useful only for losing weight."
          },
          {
            "key": "c",
            "text": "Simple activities such as walking and dancing can help."
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'You can walk, run, cycle, swim, or even dance. You don't have to spend hours at the gym...' (กิจกรรมง่ายๆ เช่น เดิน หรือ เต้น ก็ช่วยได้)",
        "ref": "Paragraph 3: 'walk, run, cycle, swim, or even dance'"
      },
      {
        "question": "What can happen when people do not get enough sleep?",
        "options": [
          {
            "key": "a",
            "text": "They may feel tired and have less energy."
          },
          {
            "key": "b",
            "text": "They may become more active."
          },
          {
            "key": "c",
            "text": "They may eat more vegetables."
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Good sleep helps your body rest and gives you energy for the next day.' (หากนอนไม่พอจะรู้สึกเหนื่อยและหมดพลังงาน)",
        "ref": "Paragraph 3: 'gives you energy for the next day'"
      },
      {
        "question": "Which activity can help people take care of their mental health?",
        "options": [
          {
            "key": "a",
            "text": "Spending more time on screens"
          },
          {
            "key": "b",
            "text": "Taking time to relax"
          },
          {
            "key": "c",
            "text": "Skipping meals"
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'Spending time with family and friends, enjoying hobbies, and taking time to relax can reduce stress.' (การหาเวลาพักผ่อนช่วยลดความเครียด)",
        "ref": "Paragraph 4: 'taking time to relax can reduce stress'"
      }
    ],
    "partB": {
      "wordBank": [
        "mental health",
        "screen time",
        "active",
        "hydrated",
        "balanced diet"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Eating a ",
          "suffix": " helps give the body the nutrients it needs.",
          "answer": "balanced diet",
          "hint": "อาหารที่มีสัดส่วนโภชนาการสมดุล"
        },
        {
          "id": 2,
          "prefix": "Drinking enough water helps keep the body ",
          "suffix": ".",
          "answer": "hydrated",
          "hint": "ชุ่มชื้น ได้รับน้ำเพียงพอ"
        },
        {
          "id": 3,
          "prefix": "Limiting ",
          "suffix": " can help people take better care of their minds.",
          "answer": "screen time",
          "hint": "เวลาที่ใช้กับหน้าจอ"
        },
        {
          "id": 4,
          "prefix": "Walking, running, and cycling are good ways to stay ",
          "suffix": ".",
          "answer": "active",
          "hint": "กระฉับกระเฉง เคลื่อนไหวร่างกาย"
        },
        {
          "id": 5,
          "prefix": "Spending time with friends and relaxing can support good ",
          "suffix": ".",
          "answer": "mental health",
          "hint": "สุขภาพจิตที่ดี"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "A balanced diet",
          "provides",
          "the nutrients",
          "our bodies need."
        ],
        "correct": "A balanced diet provides the nutrients our bodies need."
      },
      {
        "id": 2,
        "tokens": [
          "Drinking enough water",
          "keeps",
          "the body",
          "hydrated."
        ],
        "correct": "Drinking enough water keeps the body hydrated."
      },
      {
        "id": 3,
        "tokens": [
          "Walking",
          "is a simple way",
          "to stay",
          "active."
        ],
        "correct": "Walking is a simple way to stay active."
      },
      {
        "id": 4,
        "tokens": [
          "Taking breaks from screens",
          "can help",
          "you",
          "relax."
        ],
        "correct": "Taking breaks from screens can help you relax."
      },
      {
        "id": 5,
        "tokens": [
          "Good sleep",
          "gives you",
          "energy",
          "for the next day."
        ],
        "correct": "Good sleep gives you energy for the next day."
      }
    ],
    "review": {
      "keyVocab": [
        {
          "word": "balanced diet",
          "pos": "n.",
          "meaning": "อาหารที่ถูกหลักโภชนาการสมดุล"
        },
        {
          "word": "hydrated",
          "pos": "adj.",
          "meaning": "มีน้ำในร่างกายอย่างเพียงพอ"
        },
        {
          "word": "nutrients",
          "pos": "n.",
          "meaning": "สารอาหาร"
        },
        {
          "word": "screen time",
          "pos": "n.",
          "meaning": "เวลาหน้าจอ"
        },
        {
          "word": "mental health",
          "pos": "n.",
          "meaning": "สุขภาพจิต"
        }
      ],
      "grammarTip": {
        "en": "Gerunds as Subjects: 'Drinking enough water keeps...', 'Taking breaks helps...'. When a verb acts as a noun subject, it uses the -ing form and takes a singular verb.",
        "th": "การใช้ Gerund (V-ing) เป็นประธาน: กริยาที่เติม -ing ทำหน้าที่เป็นคำนามประธานเอกพจน์ กริยาตามหลังจึงต้องสอดคล้อง เช่น keeps, is, gives"
      }
    }
  },
  {
    "id": 4,
    "title": "Firewalking: A Tradition of Strength and Faith",
    "thaiTitle": "การลุยไฟ: ประเพณีแห่งศรัทธาและความเข้มแข็ง",
    "cefr": "A2",
    "unit": "Unit 4",
    "image": "assets/images/ex4.jpg",
    "audio": "assets/audio/ex4_firewalking.mp3",
    "passage": "Imagine walking barefoot across hot, glowing embers. This is firewalking, an ancient tradition practiced in many cultures. People walk on fire as a test of courage, faith, and strength. It is often part of religious ceremonies, and some believe it brings good luck, protection, or inner strength.\n\nIn China, Greece, and Japan, firewalking is connected to religious festivals. In China, it is used to ward off evil spirits. In Greece, people walk on fire during the Anastenaria festival to honor Saint Constantine and Saint Helen. In Japan, Buddhist monks firewalk during the Hiwatari Matsuri Festival as a symbol of overcoming obstacles.\n\nIn India and Sri Lanka, firewalking is part of Hindu religious practices. Devotees walk across fire to show their faith and ask for blessings and protection. Some African communities also use firewalking in coming-of-age and healing ceremonies. Although it looks dangerous, the embers do not transfer heat quickly, so moving lightly and quickly can help prevent burns. Today, firewalking remains a powerful symbol of faith, courage, and resilience.",
    "paragraphs": [
      "Imagine walking barefoot across hot, glowing embers. This is firewalking, an ancient tradition practiced in many cultures. People walk on fire as a test of courage, faith, and strength. It is often part of religious ceremonies, and some believe it brings good luck, protection, or inner strength.",
      "In China, Greece, and Japan, firewalking is connected to religious festivals. In China, it is used to ward off evil spirits. In Greece, people walk on fire during the Anastenaria festival to honor Saint Constantine and Saint Helen. In Japan, Buddhist monks firewalk during the Hiwatari Matsuri Festival as a symbol of overcoming obstacles.",
      "In India and Sri Lanka, firewalking is part of Hindu religious practices. Devotees walk across fire to show their faith and ask for blessings and protection. Some African communities also use firewalking in coming-of-age and healing ceremonies. Although it looks dangerous, the embers do not transfer heat quickly, so moving lightly and quickly can help prevent burns. Today, firewalking remains a powerful symbol of faith, courage, and resilience."
    ],
    "partA": [
      {
        "question": "What is firewalking mainly used as a test of?",
        "options": [
          {
            "key": "a",
            "text": "Speed and balance"
          },
          {
            "key": "b",
            "text": "Courage, faith, and strength"
          },
          {
            "key": "c",
            "text": "Health and fitness"
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'People walk on fire as a test of courage, faith, and strength.' (การทดสอบความกล้าหาญ ศรัทธา และความเข้มแข็ง)",
        "ref": "Paragraph 1: 'test of courage, faith, and strength'"
      },
      {
        "question": "Why do people in China practice firewalking?",
        "options": [
          {
            "key": "a",
            "text": "To ward off evil spirits"
          },
          {
            "key": "b",
            "text": "To celebrate the harvest"
          },
          {
            "key": "c",
            "text": "To train for competitions"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'In China, it is used to ward off evil spirits.' (เพื่อปัดเป่าสิ่งชั่วร้ายและวิญญาณร้าย)",
        "ref": "Paragraph 2: 'ward off evil spirits'"
      },
      {
        "question": "What do Greek firewalkers honor during the Anastenaria festival?",
        "options": [
          {
            "key": "a",
            "text": "Buddhist monks"
          },
          {
            "key": "b",
            "text": "Hindu gods"
          },
          {
            "key": "c",
            "text": "Saint Constantine and Saint Helen"
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'In Greece, people walk on fire during the Anastenaria festival to honor Saint Constantine and Saint Helen.' (เพื่อเป็นเกียรติแก่นักบุญคอนสแตนตินและนักบุญเฮเลน)",
        "ref": "Paragraph 2: 'honor Saint Constantine and Saint Helen'"
      },
      {
        "question": "What does firewalking symbolize for Buddhist monks in Japan?",
        "options": [
          {
            "key": "a",
            "text": "Becoming stronger physically"
          },
          {
            "key": "b",
            "text": "Overcoming obstacles"
          },
          {
            "key": "c",
            "text": "Celebrating a new year"
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: '...monks firewalk during the Hiwatari Matsuri Festival as a symbol of overcoming obstacles.' (สัญลักษณ์ของการก้าวข้ามอุปสรรค)",
        "ref": "Paragraph 2: 'symbol of overcoming obstacles'"
      },
      {
        "question": "Why can some people walk across hot embers without getting badly burned?",
        "options": [
          {
            "key": "a",
            "text": "The embers do not transfer heat quickly."
          },
          {
            "key": "b",
            "text": "The embers are not actually hot."
          },
          {
            "key": "c",
            "text": "They wear special shoes."
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Although it looks dangerous, the embers do not transfer heat quickly, so moving lightly and quickly can help prevent burns.' (ถ่านไฟไม่ถ่ายเทความร้อนเร็วนัก การก้าวอย่างรวดเร็วจึงช่วยป้องกันการไหม้ได้)",
        "ref": "Paragraph 3: 'embers do not transfer heat quickly'"
      }
    ],
    "partB": {
      "wordBank": [
        "embers",
        "devotees",
        "resilience",
        "ceremonies",
        "obstacles"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Firewalking is often part of religious ",
          "suffix": ".",
          "answer": "ceremonies",
          "hint": "พิธีกรรมทางศาสนา"
        },
        {
          "id": 2,
          "prefix": "People walk across hot ",
          "suffix": " during a firewalking ceremony.",
          "answer": "embers",
          "hint": "เถ้าถ่านไฟที่ยังคุแดง"
        },
        {
          "id": 3,
          "prefix": "Buddhist monks in Japan firewalk as a symbol of overcoming ",
          "suffix": ".",
          "answer": "obstacles",
          "hint": "อุปสรรค ขวากหนาม"
        },
        {
          "id": 4,
          "prefix": "Hindu ",
          "suffix": " walk across fire to show their faith.",
          "answer": "devotees",
          "hint": "ผู้ศรัทธา สาวก"
        },
        {
          "id": 5,
          "prefix": "Today, firewalking is a powerful symbol of courage and ",
          "suffix": ".",
          "answer": "resilience",
          "hint": "ความยืดหยุ่นอดทนไม่ย่อท้อ"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Firewalking",
          "is an ancient tradition",
          "in many",
          "cultures."
        ],
        "correct": "Firewalking is an ancient tradition in many cultures."
      },
      {
        "id": 2,
        "tokens": [
          "People",
          "walk barefoot",
          "across hot,",
          "glowing embers."
        ],
        "correct": "People walk barefoot across hot, glowing embers."
      },
      {
        "id": 3,
        "tokens": [
          "Greek people",
          "honor saints",
          "during",
          "the Anastenaria festival."
        ],
        "correct": "Greek people honor saints during the Anastenaria festival."
      },
      {
        "id": 4,
        "tokens": [
          "Hindu devotees",
          "walk on fire",
          "to ask",
          "for blessings."
        ],
        "correct": "Hindu devotees walk on fire to ask for blessings."
      },
      {
        "id": 5,
        "tokens": [
          "Firewalking",
          "remains a symbol of",
          "courage",
          "and resilience."
        ],
        "correct": "Firewalking remains a symbol of courage and resilience."
      }
    ],
    "review": {
      "keyVocab": [
        {
          "word": "embers",
          "pos": "n.",
          "meaning": "เถ้าถ่านคุไฟ"
        },
        {
          "word": "devotees",
          "pos": "n.",
          "meaning": "ผู้มีศรัทธาแรงกล้า"
        },
        {
          "word": "ceremonies",
          "pos": "n.",
          "meaning": "พิธีกรรม"
        },
        {
          "word": "obstacles",
          "pos": "n.",
          "meaning": "อุปสรรค"
        },
        {
          "word": "resilience",
          "pos": "n.",
          "meaning": "ความทรหดอดทน"
        }
      ],
      "grammarTip": {
        "en": "Infinitive of Purpose: 'walk on fire to show their faith and ask for blessings' (to + Base Verb indicates the purpose).",
        "th": "Infinitive of Purpose (to + V.inf): ใช้บอกวัตถุประสงค์ของการกระทำ เช่น 'walk across fire to show their faith'"
      }
    }
  },
  {
    "id": 5,
    "title": "The Croissant: A Buttery French Delight",
    "thaiTitle": "ครัวซองต์: ขนมอบเนยหอมกรุ่นแห่งฝรั่งเศส",
    "cefr": "A2",
    "unit": "Unit 5",
    "image": "assets/images/ex5.jpg",
    "audio": "assets/audio/ex5_croissant.mp3",
    "passage": "This famous pastry is loved around the world and has become a symbol of French baking. But here's a surprising twist: its story actually began in Austria! In the 17th century, Austrian bakers made a crescent-shaped pastry called the kipferl. Years later, French bakers were inspired by it and changed the recipe, adding more butter and creating lighter, flakier layers. Over time, the croissant became a beloved part of French baking.\n\nSo, how is a croissant made? First, bakers mix flour, water, yeast, and other ingredients to make the dough. They place butter inside the dough and carefully fold and roll it several times. The dough must rest and become cool between each round. This process, called lamination, creates many thin layers of dough and butter. Finally, the dough is cut into triangles, rolled into a crescent shape, and baked until golden brown and crispy.\n\nToday, people enjoy croissants in many different ways. Some are plain, while others are filled with chocolate, almonds, ham, or cheese. They are often eaten for breakfast or as a snack with coffee or tea. Their buttery taste and delicate layers make them popular in bakeries, cafés, and supermarkets around the world.",
    "paragraphs": [
      "This famous pastry is loved around the world and has become a symbol of French baking. But here's a surprising twist: its story actually began in Austria! In the 17th century, Austrian bakers made a crescent-shaped pastry called the kipferl. Years later, French bakers were inspired by it and changed the recipe, adding more butter and creating lighter, flakier layers. Over time, the croissant became a beloved part of French baking.",
      "So, how is a croissant made? First, bakers mix flour, water, yeast, and other ingredients to make the dough. They place butter inside the dough and carefully fold and roll it several times. The dough must rest and become cool between each round. This process, called lamination, creates many thin layers of dough and butter. Finally, the dough is cut into triangles, rolled into a crescent shape, and baked until golden brown and crispy.",
      "Today, people enjoy croissants in many different ways. Some are plain, while others are filled with chocolate, almonds, ham, or cheese. They are often eaten for breakfast or as a snack with coffee or tea. Their buttery taste and delicate layers make them popular in bakeries, cafés, and supermarkets around the world."
    ],
    "partA": [
      {
        "question": "What pastry inspired the modern croissant?",
        "options": [
          {
            "key": "a",
            "text": "The baguette"
          },
          {
            "key": "b",
            "text": "The kipferl"
          },
          {
            "key": "c",
            "text": "The brioche"
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: '...Austrian bakers made a crescent-shaped pastry called the kipferl. Years later, French bakers were inspired by it...' (ขนมคิพเฟิร์ลทรงจันทร์เสี้ยวของชาวออสเตรีย)",
        "ref": "Paragraph 1: 'crescent-shaped pastry called the kipferl'"
      },
      {
        "question": "Why do bakers fold and roll the dough several times?",
        "options": [
          {
            "key": "a",
            "text": "To create thin, buttery layers"
          },
          {
            "key": "b",
            "text": "To make the dough sweeter"
          },
          {
            "key": "c",
            "text": "To give the pastry a darker color"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'This process, called lamination, creates many thin layers of dough and butter.' (เพื่อสร้างชั้นแป้งและเนยบางๆ หลายชั้น)",
        "ref": "Paragraph 2: 'creates many thin layers of dough and butter'"
      },
      {
        "question": "What is the process of folding and rolling the dough called?",
        "options": [
          {
            "key": "a",
            "text": "Fermentation"
          },
          {
            "key": "b",
            "text": "Baking"
          },
          {
            "key": "c",
            "text": "Lamination"
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'This process, called lamination, creates many thin layers...' (กระบวนการนี้เรียกว่า ลามิเนชั่น)",
        "ref": "Paragraph 2: 'This process, called lamination'"
      },
      {
        "question": "What happens after the dough is cut into triangles?",
        "options": [
          {
            "key": "a",
            "text": "It is filled with chocolate."
          },
          {
            "key": "b",
            "text": "It is rolled into a crescent shape."
          },
          {
            "key": "c",
            "text": "It is mixed with more flour."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'Finally, the dough is cut into triangles, rolled into a crescent shape...' (ม้วนเป็นรูปพระจันทร์เสี้ยว)",
        "ref": "Paragraph 2: 'rolled into a crescent shape'"
      },
      {
        "question": "Why are croissants popular around the world?",
        "options": [
          {
            "key": "a",
            "text": "They are easy to make."
          },
          {
            "key": "b",
            "text": "They have a buttery taste and delicate layers."
          },
          {
            "key": "c",
            "text": "They are always filled with chocolate."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'Their buttery taste and delicate layers make them popular in bakeries, cafés, and supermarkets...' (รสชาติเนยหอมกรุ่นและชั้นแป้งที่ละเอียดนุ่ม)",
        "ref": "Paragraph 3: 'buttery taste and delicate layers make them popular'"
      }
    ],
    "partB": {
      "wordBank": [
        "layers",
        "symbol",
        "inspired",
        "delicate",
        "ingredients"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "The croissant became a ",
          "suffix": " of French baking over time.",
          "answer": "symbol",
          "hint": "สัญลักษณ์ ตัวแทน"
        },
        {
          "id": 2,
          "prefix": "French bakers were ",
          "suffix": " by a similar Austrian pastry called the kipferl.",
          "answer": "inspired",
          "hint": "ได้รับแรงบันดาลใจ"
        },
        {
          "id": 3,
          "prefix": "Flour, water, and yeast are some of the ",
          "suffix": " used to make the dough.",
          "answer": "ingredients",
          "hint": "ส่วนประกอบ ส่วนผสม"
        },
        {
          "id": 4,
          "prefix": "The folding process creates many thin ",
          "suffix": " of dough and butter.",
          "answer": "layers",
          "hint": "ชั้นแผ่นบางๆ"
        },
        {
          "id": 5,
          "prefix": "The croissant is known for its soft and ",
          "suffix": " texture.",
          "answer": "delicate",
          "hint": "ละเอียด ละเมียดละไม"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "The croissant",
          "was inspired by",
          "an Austrian",
          "pastry."
        ],
        "correct": "The croissant was inspired by an Austrian pastry."
      },
      {
        "id": 2,
        "tokens": [
          "French bakers",
          "developed",
          "a lighter and flakier",
          "version."
        ],
        "correct": "French bakers developed a lighter and flakier version."
      },
      {
        "id": 3,
        "tokens": [
          "Lamination",
          "creates",
          "many thin layers of",
          "dough and butter."
        ],
        "correct": "Lamination creates many thin layers of dough and butter."
      },
      {
        "id": 4,
        "tokens": [
          "Chocolate and almonds",
          "are popular",
          "croissant",
          "fillings."
        ],
        "correct": "Chocolate and almonds are popular croissant fillings."
      },
      {
        "id": 5,
        "tokens": [
          "They are sold",
          "in bakeries",
          "and cafés",
          "around the world."
        ],
        "correct": "They are sold in bakeries and cafés around the world."
      }
    ],
    "review": {
      "keyVocab": [
        {
          "word": "pastry",
          "pos": "n.",
          "meaning": "ขนมอบ ขนมเพสตรี"
        },
        {
          "word": "lamination",
          "pos": "n.",
          "meaning": "เทคนิคการพับทบแป้งกับเนย"
        },
        {
          "word": "crescent",
          "pos": "adj./n.",
          "meaning": "ทรงเสี้ยวพระจันทร์"
        },
        {
          "word": "ingredients",
          "pos": "n.",
          "meaning": "ส่วนผสม"
        },
        {
          "word": "delicate",
          "pos": "adj.",
          "meaning": "ละเอียด บอบบางละเมียดละไม"
        }
      ],
      "grammarTip": {
        "en": "Chronological Sequence Connectors: 'First, bakers mix...', 'Next...', 'Finally, the dough is cut...' to describe cooking and manufacturing steps.",
        "th": "คำเชื่อมบอกลำดับขั้นตอนการทำ (Sequence Connectors): First (ขั้นแรก), Next (ต่อไป), Finally (สุดท้าย)"
      }
    }
  },
  {
    "id": 6,
    "title": "The Printing Press: A Revolution in Communication",
    "thaiTitle": "แท่นพิมพ์: การปฏิวัติแห่งการสื่อสารของมนุษยชาติ",
    "cefr": "A2",
    "unit": "Unit 6",
    "image": "assets/images/ex6.jpg",
    "audio": "assets/audio/ex6_printing_press.mp3",
    "passage": "Imagine a world without printed books or newspapers. Before the printing press, books were copied by hand, which was slow and expensive. Only wealthy people, churches, and scholars could easily afford them, so knowledge was difficult to share.\n\nIn the 15th century, Johannes Gutenberg developed a printing press in Europe using movable metal letters. His invention made it possible to produce books much faster and more cheaply. One of the first major books printed was the Bible, allowing more people to read it themselves and learn about different beliefs.\n\nThe printing press made it much easier for new ideas to travel from one place to another. People could quickly share information about science, politics, religion, and art with large numbers of readers.\n\nToday, we use digital technology to share information quickly, but printed books, newspapers, and magazines are still common. The printing press helped begin mass communication and changed how people learned, shared ideas, and connected with information.",
    "paragraphs": [
      "Imagine a world without printed books or newspapers. Before the printing press, books were copied by hand, which was slow and expensive. Only wealthy people, churches, and scholars could easily afford them, so knowledge was difficult to share.",
      "In the 15th century, Johannes Gutenberg developed a printing press in Europe using movable metal letters. His invention made it possible to produce books much faster and more cheaply. One of the first major books printed was the Bible, allowing more people to read it themselves and learn about different beliefs.",
      "The printing press made it much easier for new ideas to travel from one place to another. People could quickly share information about science, politics, religion, and art with large numbers of readers.",
      "Today, we use digital technology to share information quickly, but printed books, newspapers, and magazines are still common. The printing press helped begin mass communication and changed how people learned, shared ideas, and connected with information."
    ],
    "partA": [
      {
        "question": "Why were books difficult for many people to get before the printing press?",
        "options": [
          {
            "key": "a",
            "text": "They were written in foreign languages."
          },
          {
            "key": "b",
            "text": "They were slow and expensive to produce."
          },
          {
            "key": "c",
            "text": "They were only used in schools."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'Before the printing press, books were copied by hand, which was slow and expensive.' (การคัดลอกด้วยลายมือเชื่องช้าและมีราคาแพงมาก)",
        "ref": "Paragraph 1: 'copied by hand, which was slow and expensive'"
      },
      {
        "question": "What made Gutenberg's printing press different?",
        "options": [
          {
            "key": "a",
            "text": "It used movable metal letters."
          },
          {
            "key": "b",
            "text": "It printed only newspapers."
          },
          {
            "key": "c",
            "text": "It used digital technology."
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: '...Johannes Gutenberg developed a printing press in Europe using movable metal letters.' (ใช้ตัวอักษรโลหะที่สามารถจัดเรียงและเคลื่อนย้ายได้)",
        "ref": "Paragraph 2: 'using movable metal letters'"
      },
      {
        "question": "Why was printing the Bible important?",
        "options": [
          {
            "key": "a",
            "text": "It made the Bible shorter."
          },
          {
            "key": "b",
            "text": "It helped more people read it themselves."
          },
          {
            "key": "c",
            "text": "It made books more expensive."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'One of the first major books printed was the Bible, allowing more people to read it themselves...' (เปิดโอกาสให้ผู้คนจำนวนมากสามารถอ่านได้ด้วยตนเอง)",
        "ref": "Paragraph 2: 'allowing more people to read it themselves'"
      },
      {
        "question": "What kinds of ideas could the printing press help people share?",
        "options": [
          {
            "key": "a",
            "text": "Only religious ideas"
          },
          {
            "key": "b",
            "text": "Only scientific ideas"
          },
          {
            "key": "c",
            "text": "Ideas about science, politics, religion, and art"
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'People could quickly share information about science, politics, religion, and art...' (เผยแพร่วิทยาศาสตร์ การเมือง ศาสนา และศิลปะ)",
        "ref": "Paragraph 3: 'science, politics, religion, and art'"
      },
      {
        "question": "What is one important effect of the printing press today?",
        "options": [
          {
            "key": "a",
            "text": "It helped begin mass communication."
          },
          {
            "key": "b",
            "text": "It stopped people from using books."
          },
          {
            "key": "c",
            "text": "It made digital technology unnecessary."
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'The printing press helped begin mass communication and changed how people learned...' (เป็นจุดเริ่มต้นของการสื่อสารมวลชน)",
        "ref": "Paragraph 4: 'helped begin mass communication'"
      }
    ],
    "partB": {
      "wordBank": [
        "movable",
        "invention",
        "communication",
        "afford",
        "readers"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Before the printing press, only wealthy people could ",
          "suffix": " to buy books.",
          "answer": "afford",
          "hint": "มีกำลังทรัพย์พอซื้อได้"
        },
        {
          "id": 2,
          "prefix": "Gutenberg's machine used ",
          "suffix": " metal letters to print words and sentences.",
          "answer": "movable",
          "hint": "เคลื่อนย้าย สับเปลี่ยนได้"
        },
        {
          "id": 3,
          "prefix": "Gutenberg's ",
          "suffix": " changed the way people produced and shared books.",
          "answer": "invention",
          "hint": "สิ่งประดิษฐ์ นวัตกรรม"
        },
        {
          "id": 4,
          "prefix": "Printed books allowed more ",
          "suffix": " to learn about new ideas.",
          "answer": "readers",
          "hint": "ผู้อ่าน"
        },
        {
          "id": 5,
          "prefix": "The printing press helped develop mass ",
          "suffix": " around the world.",
          "answer": "communication",
          "hint": "การสื่อสารมวลชน"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Gutenberg's invention",
          "changed the way",
          "people",
          "produced books."
        ],
        "correct": "Gutenberg's invention changed the way people produced books."
      },
      {
        "id": 2,
        "tokens": [
          "Printed books",
          "became cheaper",
          "and easier",
          "to produce."
        ],
        "correct": "Printed books became cheaper and easier to produce."
      },
      {
        "id": 3,
        "tokens": [
          "New ideas",
          "could spread quickly",
          "from one place",
          "to another."
        ],
        "correct": "New ideas could spread quickly from one place to another."
      },
      {
        "id": 4,
        "tokens": [
          "People",
          "could share information",
          "with a",
          "larger audience."
        ],
        "correct": "People could share information with a larger audience."
      },
      {
        "id": 5,
        "tokens": [
          "The printing press",
          "helped develop",
          "mass",
          "communication."
        ],
        "correct": "The printing press helped develop mass communication."
      }
    ],
    "review": {
      "keyVocab": [
        {
          "word": "printing press",
          "pos": "n.",
          "meaning": "แท่นพิมพ์"
        },
        {
          "word": "movable",
          "pos": "adj.",
          "meaning": "เคลื่อนย้ายได้ จัดวางใหม่ได้"
        },
        {
          "word": "invention",
          "pos": "n.",
          "meaning": "สิ่งประดิษฐ์"
        },
        {
          "word": "mass communication",
          "pos": "n.",
          "meaning": "การสื่อสารมวลชน"
        },
        {
          "word": "afford",
          "pos": "v.",
          "meaning": "สามารถซื้อหามาได้ มีเงินพอ"
        }
      ],
      "grammarTip": {
        "en": "Comparative Forms: 'much faster and more cheaply', 'cheaper and easier' to highlight historical improvements.",
        "th": "การเปรียบเทียบขั้นกว่า (Comparatives): cheaper and easier to produce (ผลิตได้ถูกลงและง่ายขึ้น)"
      }
    }
  },
  {
    "id": 7,
    "title": "Stephen Hawking: A Brilliant Mind",
    "thaiTitle": "สตีเฟน ฮอว์คิง: อัจฉริยะผู้ไขความลับแห่งจักรวาล",
    "cefr": "A2",
    "unit": "Unit 7",
    "image": "assets/images/ex7.jpg",
    "audio": "assets/audio/ex7_stephen_hawking.mp3",
    "passage": "How can someone explore the universe without being able to move or speak? Stephen Hawking was a world-famous scientist known for his work on black holes, time, and the universe. Born in Oxford, England, in 1942, he became interested in science and space when he was young. He later studied physics and mathematics at the University of Cambridge.\n\nWhen Hawking was in his early twenties, his life changed dramatically. He was diagnosed with ALS, a disease that gradually weakens the muscles. Although he eventually lost the ability to move and speak normally, he continued his studies and research. He used a special computer controlled by small movements of his cheek to communicate.\n\nHawking made important contributions to the study of the universe. One of his most famous ideas was that black holes can give off energy, known as Hawking radiation. He also wrote A Brief History of Time, which helped many people understand difficult ideas about time, space, and the universe.\n\nHawking died in 2018, but his ideas continue to inspire people around the world. His life shows that challenges do not always prevent people from making important contributions. His curiosity and determination encouraged millions of people to learn more about science.",
    "paragraphs": [
      "How can someone explore the universe without being able to move or speak? Stephen Hawking was a world-famous scientist known for his work on black holes, time, and the universe. Born in Oxford, England, in 1942, he became interested in science and space when he was young. He later studied physics and mathematics at the University of Cambridge.",
      "When Hawking was in his early twenties, his life changed dramatically. He was diagnosed with ALS, a disease that gradually weakens the muscles. Although he eventually lost the ability to move and speak normally, he continued his studies and research. He used a special computer controlled by small movements of his cheek to communicate.",
      "Hawking made important contributions to the study of the universe. One of his most famous ideas was that black holes can give off energy, known as Hawking radiation. He also wrote A Brief History of Time, which helped many people understand difficult ideas about time, space, and the universe.",
      "Hawking died in 2018, but his ideas continue to inspire people around the world. His life shows that challenges do not always prevent people from making important contributions. His curiosity and determination encouraged millions of people to learn more about science."
    ],
    "partA": [
      {
        "question": "What first attracted Hawking to science?",
        "options": [
          {
            "key": "a",
            "text": "His interest in space and science"
          },
          {
            "key": "b",
            "text": "His family's work in medicine"
          },
          {
            "key": "c",
            "text": "His love of writing books"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: '...he became interested in science and space when he was young.' (ความสนใจในวิทยาศาสตร์และอวกาศตั้งแต่วัยเด็ก)",
        "ref": "Paragraph 1: 'interested in science and space when he was young'"
      },
      {
        "question": "What made Hawking's life especially challenging?",
        "options": [
          {
            "key": "a",
            "text": "He had difficulty finding a job."
          },
          {
            "key": "b",
            "text": "He could not continue his university studies."
          },
          {
            "key": "c",
            "text": "He developed ALS at a young age."
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'When Hawking was in his early twenties... He was diagnosed with ALS, a disease that gradually weakens the muscles.' (ได้รับการวินิจฉัยว่าเป็นโรคกล้ามเนื้ออ่อนแรง ALS ในช่วงอายุ 20 ต้นๆ)",
        "ref": "Paragraph 2: 'diagnosed with ALS at a young age'"
      },
      {
        "question": "What allowed Hawking to continue communicating with others?",
        "options": [
          {
            "key": "a",
            "text": "A special computer"
          },
          {
            "key": "b",
            "text": "A team of assistants"
          },
          {
            "key": "c",
            "text": "A writing machine"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'He used a special computer controlled by small movements of his cheek to communicate.' (คอมพิวเตอร์สั่งการด้วยการขยับกล้ามเนื้อแก้ม)",
        "ref": "Paragraph 2: 'used a special computer... to communicate'"
      },
      {
        "question": "What was one important idea Hawking developed about black holes?",
        "options": [
          {
            "key": "a",
            "text": "They are made of stars."
          },
          {
            "key": "b",
            "text": "They can give off energy."
          },
          {
            "key": "c",
            "text": "They are larger than the universe."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'One of his most famous ideas was that black holes can give off energy, known as Hawking radiation.' (หลุมดำสามารถแผ่พลังงานออกมาได้)",
        "ref": "Paragraph 3: 'black holes can give off energy'"
      },
      {
        "question": "Which qualities helped Hawking achieve great things?",
        "options": [
          {
            "key": "a",
            "text": "Wealth and popularity"
          },
          {
            "key": "b",
            "text": "Speed and physical strength"
          },
          {
            "key": "c",
            "text": "Curiosity and determination"
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'His curiosity and determination encouraged millions of people to learn more about science.' (ความอยากรู้อยากเห็นและความมุ่งมั่นแน่วแน่)",
        "ref": "Paragraph 4: 'His curiosity and determination'"
      }
    ],
    "partB": {
      "wordBank": [
        "radiation",
        "communicate",
        "determination",
        "contributions",
        "mysteries"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Hawking used a special computer to ",
          "suffix": " with other people.",
          "answer": "communicate",
          "hint": "สื่อสาร ติดต่อสื่อสาร"
        },
        {
          "id": 2,
          "prefix": "Hawking studied the ",
          "suffix": " of the universe through his scientific research.",
          "answer": "mysteries",
          "hint": "ความลึกลับ ปริศนา"
        },
        {
          "id": 3,
          "prefix": "Hawking's research showed that black holes can give off energy called Hawking ",
          "suffix": ".",
          "answer": "radiation",
          "hint": "รังสีฮอว์คิง การแผ่รังสี"
        },
        {
          "id": 4,
          "prefix": "His scientific ",
          "suffix": " helped him continue his work despite many challenges.",
          "answer": "determination",
          "hint": "ความมุ่งมั่นตั้งใจ"
        },
        {
          "id": 5,
          "prefix": "Hawking made important ",
          "suffix": " to the study of the universe.",
          "answer": "contributions",
          "hint": "คุณูปการ ผลงานสร้างประโยชน์"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Stephen Hawking",
          "became interested in",
          "science and space",
          "at a young age."
        ],
        "correct": "Stephen Hawking became interested in science and space at a young age."
      },
      {
        "id": 2,
        "tokens": [
          "ALS",
          "is a disease",
          "that gradually weakens",
          "the muscles."
        ],
        "correct": "ALS is a disease that gradually weakens the muscles."
      },
      {
        "id": 3,
        "tokens": [
          "He used",
          "a special computer",
          "to communicate",
          "with other people."
        ],
        "correct": "He used a special computer to communicate with other people."
      },
      {
        "id": 4,
        "tokens": [
          "His research",
          "changed the way",
          "scientists understand",
          "black holes."
        ],
        "correct": "His research changed the way scientists understand black holes."
      },
      {
        "id": 5,
        "tokens": [
          "His ideas",
          "continue to inspire",
          "people",
          "around the world."
        ],
        "correct": "His ideas continue to inspire people around the world."
      }
    ],
    "review": {
      "keyVocab": [
        {
          "word": "black holes",
          "pos": "n.",
          "meaning": "หลุมดำ"
        },
        {
          "word": "radiation",
          "pos": "n.",
          "meaning": "การแผ่รังสี"
        },
        {
          "word": "determination",
          "pos": "n.",
          "meaning": "ความมุ่งมั่นเด็ดเดี่ยว"
        },
        {
          "word": "contributions",
          "pos": "n.",
          "meaning": "ผลงานที่มีคุณค่าต่อสังคม"
        },
        {
          "word": "inspire",
          "pos": "v.",
          "meaning": "สร้างแรงบันดาลใจ"
        }
      ],
      "grammarTip": {
        "en": "Subordinating Conjunction 'Although': 'Although he lost the ability to move, he continued his research.' (Contrast clause).",
        "th": "การใช้ Although (แม้ว่า) แสดงความขัดแย้ง: แม้จะสูญเสียการเคลื่อนไหว แต่เขายังคงทำงานวิจัยต่อไป"
      }
    }
  },
  {
    "id": 8,
    "title": "Doctors Without Borders: Helping People in Need",
    "thaiTitle": "แพทย์ไร้พรมแดน: ผู้ช่วยเหลือเพื่อนมนุษย์ในยามวิกฤต",
    "cefr": "A2",
    "unit": "Unit 8",
    "image": "assets/images/ex8.jpg",
    "audio": "assets/audio/ex8_doctors_without_borders.mp3",
    "passage": "Imagine arriving in a place where people urgently need medical help, but there are no hospitals nearby. Doctors Without Borders, also known as Médecins Sans Frontières (MSF), is an international medical organization that provides emergency care in areas affected by conflict, natural disasters, and disease outbreaks. Founded in 1971 by doctors and journalists, MSF helps people regardless of their nationality, religion, or background. Today, its teams work in more than 70 countries.\n\nMSF provides many types of medical care, including emergency surgery and treatment for diseases such as malaria and cholera. It also supports mothers and children and provides mental health care for people affected by violence or disasters. During emergencies, MSF teams can quickly set up hospitals and clinics in places where medical services are limited.\n\nMSF also speaks out about health problems and works to improve access to healthcare. During major health crises, such as the Ebola outbreak, its teams have helped save many lives. MSF follows medical ethics and provides care equally, without political influence. Its staff often work in dangerous conditions to help others. Today, MSF continues to provide lifesaving medical care to people who need it most.",
    "paragraphs": [
      "Imagine arriving in a place where people urgently need medical help, but there are no hospitals nearby. Doctors Without Borders, also known as Médecins Sans Frontières (MSF), is an international medical organization that provides emergency care in areas affected by conflict, natural disasters, and disease outbreaks. Founded in 1971 by doctors and journalists, MSF helps people regardless of their nationality, religion, or background. Today, its teams work in more than 70 countries.",
      "MSF provides many types of medical care, including emergency surgery and treatment for diseases such as malaria and cholera. It also supports mothers and children and provides mental health care for people affected by violence or disasters. During emergencies, MSF teams can quickly set up hospitals and clinics in places where medical services are limited.",
      "MSF also speaks out about health problems and works to improve access to healthcare. During major health crises, such as the Ebola outbreak, its teams have helped save many lives. MSF follows medical ethics and provides care equally, without political influence. Its staff often work in dangerous conditions to help others. Today, MSF continues to provide lifesaving medical care to people who need it most."
    ],
    "partA": [
      {
        "question": "What is the main purpose of Doctors Without Borders?",
        "options": [
          {
            "key": "a",
            "text": "To build hospitals in wealthy countries"
          },
          {
            "key": "b",
            "text": "To provide medical care to people in need"
          },
          {
            "key": "c",
            "text": "To train doctors for private hospitals"
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: '...provides emergency care in areas affected by conflict, natural disasters, and disease outbreaks. MSF helps people regardless of their nationality, religion, or background.' (ให้การรักษาพยาบาลฉุกเฉินแก่ผู้ที่ต้องการความช่วยเหลือโดยไม่แบ่งแยก)",
        "ref": "Paragraph 1: 'provides emergency care in areas affected by conflict'"
      },
      {
        "question": "Where does MSF often provide emergency care?",
        "options": [
          {
            "key": "a",
            "text": "Areas affected by conflict and disasters"
          },
          {
            "key": "b",
            "text": "Only large cities"
          },
          {
            "key": "c",
            "text": "Universities and schools"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: '...provides emergency care in areas affected by conflict, natural disasters, and disease outbreaks.' (พื้นที่ที่ได้รับผลกระทบจากความขัดแย้ง ภัยพิบัติธรรมชาติ และโรคระบาด)",
        "ref": "Paragraph 1: 'areas affected by conflict, natural disasters'"
      },
      {
        "question": "What can MSF teams do during emergencies?",
        "options": [
          {
            "key": "a",
            "text": "Set up hospitals and clinics"
          },
          {
            "key": "b",
            "text": "Build new roads"
          },
          {
            "key": "c",
            "text": "Provide financial loans"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'During emergencies, MSF teams can quickly set up hospitals and clinics in places where medical services are limited.' (จัดตั้งโรงพยาบาลและคลินิกชั่วคราวอย่างรวดเร็ว)",
        "ref": "Paragraph 2: 'quickly set up hospitals and clinics'"
      },
      {
        "question": "Who does MSF provide medical care to?",
        "options": [
          {
            "key": "a",
            "text": "Only local citizens"
          },
          {
            "key": "b",
            "text": "Only people with health insurance"
          },
          {
            "key": "c",
            "text": "People regardless of their background"
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'MSF helps people regardless of their nationality, religion, or background.' (ช่วยเหลือผู้คนโดยไม่คำนึงถึงสัญชาติ ศาสนา หรือภูมิหลัง)",
        "ref": "Paragraph 1: 'regardless of their nationality, religion, or background'"
      },
      {
        "question": "Why do MSF staff sometimes work in dangerous conditions?",
        "options": [
          {
            "key": "a",
            "text": "To help people who urgently need medical care"
          },
          {
            "key": "b",
            "text": "To study dangerous places"
          },
          {
            "key": "c",
            "text": "To build permanent hospitals"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Its staff often work in dangerous conditions to help others. Today, MSF continues to provide lifesaving medical care to people who need it most.' (เพื่อช่วยชีวิตผู้ที่ต้องการการรักษาอย่างเร่งด่วน)",
        "ref": "Paragraph 3: 'work in dangerous conditions to help others'"
      }
    ],
    "partB": {
      "wordBank": [
        "background",
        "humanitarian",
        "ethics",
        "emergency",
        "outbreaks"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "MSF provides medical care during an ",
          "suffix": " when people urgently need help.",
          "answer": "emergency",
          "hint": "ภาวะฉุกเฉิน"
        },
        {
          "id": 2,
          "prefix": "MSF helps people regardless of their nationality, religion, or ",
          "suffix": ".",
          "answer": "background",
          "hint": "ภูมิหลัง เชื้อชาติ"
        },
        {
          "id": 3,
          "prefix": "The organization responds to disease ",
          "suffix": " such as Ebola.",
          "answer": "outbreaks",
          "hint": "การระบาดของโรค"
        },
        {
          "id": 4,
          "prefix": "MSF follows strict medical ",
          "suffix": " when providing care to patients.",
          "answer": "ethics",
          "hint": "จรรยาบรรณ จริยธรรมทางการแพทย์"
        },
        {
          "id": 5,
          "prefix": "MSF is a well-known ",
          "suffix": " organization that helps people around the world.",
          "answer": "humanitarian",
          "hint": "องค์กรด้านมนุษยธรรม"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "MSF",
          "provides emergency medical care",
          "in areas",
          "with limited healthcare."
        ],
        "correct": "MSF provides emergency medical care in areas with limited healthcare."
      },
      {
        "id": 2,
        "tokens": [
          "They often work",
          "in places",
          "affected by",
          "conflict and natural disasters."
        ],
        "correct": "They often work in places affected by conflict and natural disasters."
      },
      {
        "id": 3,
        "tokens": [
          "Their doctors",
          "treat diseases",
          "like",
          "malaria and cholera."
        ],
        "correct": "Their doctors treat diseases like malaria and cholera."
      },
      {
        "id": 4,
        "tokens": [
          "MSF",
          "also provides support",
          "for people",
          "with trauma."
        ],
        "correct": "MSF also provides support for people with trauma."
      },
      {
        "id": 5,
        "tokens": [
          "The organization",
          "helps people",
          "without",
          "political influence."
        ],
        "correct": "The organization helps people without political influence."
      }
    ],
    "review": {
      "keyVocab": [
        {
          "word": "emergency",
          "pos": "n.",
          "meaning": "เหตุฉุกเฉิน ภาวะเร่งด่วน"
        },
        {
          "word": "outbreaks",
          "pos": "n.",
          "meaning": "การระบาดของโรค"
        },
        {
          "word": "humanitarian",
          "pos": "adj.",
          "meaning": "ด้านมนุษยธรรม"
        },
        {
          "word": "ethics",
          "pos": "n.",
          "meaning": "จริยธรรม จรรยาบรรณ"
        },
        {
          "word": "lifesaving",
          "pos": "adj.",
          "meaning": "ซึ่งช่วยชีวิต"
        }
      ],
      "grammarTip": {
        "en": "Prepositional Phrases: 'regardless of' (โดยไม่คำนึงถึง), 'without political influence' (ปราศจากการแทรกแซงทางการเมือง).",
        "th": "วลีบุพบท (Prepositional Phrases): 'regardless of' ตามด้วยคำนาม เช่น 'regardless of nationality' (โดยไม่คำนึงถึงสัญชาติ)"
      }
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEFAULT_EXERCISES };
} else {
  window.DEFAULT_EXERCISES = DEFAULT_EXERCISES;
}
