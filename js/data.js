/**
 * NEW Weaving It Together 2 (ม.5) - Curriculum & Exercise Dataset
 * สำนักพิมพ์ไทยวัฒนาพานิช (TWP) & Cengage Learning / National Geographic Learning
 * Validated 100% against Curriculum PDF
 */

const DEFAULT_EXERCISES = [
  {
    "id": 1,
    "title": "The Colors of Humanity",
    "thaiTitle": "สีสันแห่งมนุษยชาติ: ความหลากหลายและความเท่าเทียม",
    "cefr": "A2/B1",
    "unit": "Unit 1",
    "image": "assets/images/ex1.jpg",
    "audio": "assets/audio/ex1_colors_of_humanity.mp3",
    "passage": "People around the world have different skin tones, ranging from very light to very dark. These differences are mainly caused by melanin, a natural pigment that determines skin color. People with more melanin usually have darker skin. Genetics and the environment also influence skin color. For example, darker skin can provide more protection from strong UV rays in sunny regions.\n\nAlthough our skin tones are different, we all belong to the same human race. However, skin color has sometimes led to discrimination and unfair treatment. In some societies, lighter skin has historically been associated with higher social status, while people with darker skin have faced fewer opportunities. Today, many communities promote equality, inclusion, and self-acceptance.\n\nThe media also influences how people view skin color. In the past, people with darker skin were often underrepresented in movies, television, and advertisements. Today, the media is becoming more diverse and includes people with many different skin tones and backgrounds. By respecting these differences, we can create a fairer and more accepting society.",
    "paragraphs": [
      "People around the world have different skin tones, ranging from very light to very dark. These differences are mainly caused by melanin, a natural pigment that determines skin color. People with more melanin usually have darker skin. Genetics and the environment also influence skin color. For example, darker skin can provide more protection from strong UV rays in sunny regions.",
      "Although our skin tones are different, we all belong to the same human race. However, skin color has sometimes led to discrimination and unfair treatment. In some societies, lighter skin has historically been associated with higher social status, while people with darker skin have faced fewer opportunities. Today, many communities promote equality, inclusion, and self-acceptance.",
      "The media also influences how people view skin color. In the past, people with darker skin were often underrepresented in movies, television, and advertisements. Today, the media is becoming more diverse and includes people with many different skin tones and backgrounds. By respecting these differences, we can create a fairer and more accepting society."
    ],
    "partA": [
      {
        "question": "What mainly determines a person's skin color?",
        "options": [
          {
            "key": "a",
            "text": "Melanin"
          },
          {
            "key": "b",
            "text": "Age"
          },
          {
            "key": "c",
            "text": "Food"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'These differences are mainly caused by melanin, a natural pigment that determines skin color.' (เมลานินคือเม็ดสีธรรมชาติที่เป็นปัจจัยหลักในการกำหนดสีผิว)",
        "ref": "Paragraph 1: 'mainly caused by melanin, a natural pigment'"
      },
      {
        "question": "Why can darker skin be helpful in sunny regions?",
        "options": [
          {
            "key": "a",
            "text": "It keeps the body cool."
          },
          {
            "key": "b",
            "text": "It changes with the weather."
          },
          {
            "key": "c",
            "text": "It protects against strong UV rays."
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: '...darker skin can provide more protection from strong UV rays in sunny regions.' (ผิวสีเข้มช่วยปกป้องผิวจากรังสียูวีที่รุนแรงในแถบที่มีแดดจัด)",
        "ref": "Paragraph 1: 'provide more protection from strong UV rays'"
      },
      {
        "question": "What problem have some people faced because of their skin color?",
        "options": [
          {
            "key": "a",
            "text": "Pollution"
          },
          {
            "key": "b",
            "text": "Discrimination"
          },
          {
            "key": "c",
            "text": "Illness"
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'However, skin color has sometimes led to discrimination and unfair treatment.' (สีผิวมักเคยนำไปสู่การเลือกปฏิบัติและการปฏิบัติที่ไม่เป็นธรรม)",
        "ref": "Paragraph 2: 'led to discrimination and unfair treatment'"
      },
      {
        "question": "What does \"underrepresented\" mean in the passage?",
        "options": [
          {
            "key": "a",
            "text": "Shown less often than others"
          },
          {
            "key": "b",
            "text": "Shown more often than others"
          },
          {
            "key": "c",
            "text": "Treated equally everywhere"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: คำว่า 'underrepresented' หมายถึงการถูกนำเสนอหรือปรากฏในสื่อน้อยกว่าความเป็นจริงเมื่อเทียบกับกลุ่มอื่น",
        "ref": "Paragraph 3: 'underrepresented in movies, television'"
      },
      {
        "question": "What is the main idea of the passage?",
        "options": [
          {
            "key": "a",
            "text": "Everyone should have the same appearance."
          },
          {
            "key": "b",
            "text": "People should respect and celebrate diversity."
          },
          {
            "key": "c",
            "text": "Skin color is determined by culture."
          }
        ],
        "answer": "b",
        "explanation": "ใจความสำคัญของบทอ่านคือมนุษย์ทุกคนควรเคารพและยอมรับความหลากหลายทางสีผิวและชาติพันธุ์เพื่อสังคมที่เท่าเทียม",
        "ref": "Paragraph 2 & 3: 'respecting these differences, we can create a fairer and more accepting society'"
      }
    ],
    "partB": {
      "wordBank": [
        "inclusion",
        "appearance",
        "pigment",
        "respect",
        "influence"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Melanin is a natural ",
          "suffix": " found in the skin.",
          "answer": "pigment"
        },
        {
          "id": 2,
          "prefix": "Genetics and the environment can ",
          "suffix": " a person's skin color.",
          "answer": "influence"
        },
        {
          "id": 3,
          "prefix": "Many communities promote ",
          "suffix": " so that everyone feels accepted.",
          "answer": "inclusion"
        },
        {
          "id": 4,
          "prefix": "People should be proud of their natural ",
          "suffix": ".",
          "answer": "appearance"
        },
        {
          "id": 5,
          "prefix": "Everyone deserves to be treated with fairness and ",
          "suffix": ".",
          "answer": "respect"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Human skin",
          "comes in",
          "many",
          "different",
          "shades and colors."
        ],
        "correct": "Human skin comes in many different shades and colors."
      },
      {
        "id": 2,
        "tokens": [
          "Melanin",
          "affects",
          "how",
          "light",
          "or dark",
          "our skin",
          "is."
        ],
        "correct": "Melanin affects how light or dark our skin is."
      },
      {
        "id": 3,
        "tokens": [
          "Everyone",
          "deserves",
          "equal",
          "treatment",
          "and respect."
        ],
        "correct": "Everyone deserves equal treatment and respect."
      },
      {
        "id": 4,
        "tokens": [
          "The media",
          "can influence",
          "ideas",
          "about",
          "beauty."
        ],
        "correct": "The media can influence ideas about beauty."
      },
      {
        "id": 5,
        "tokens": [
          "We",
          "should respect",
          "people",
          "from",
          "all backgrounds."
        ],
        "correct": "We should respect people from all backgrounds."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "Melanin",
          "pos": "n.",
          "meaning": "เมลานิน (เม็ดสีในผิวหนัง เส้นผม และตา)",
          "phonetic": "/ˈmel.ə.nɪn/"
        },
        {
          "word": "Pigment",
          "pos": "n.",
          "meaning": "เม็ดสี สารสีธรรมชาติ",
          "phonetic": "/ˈpɪɡ.mənt/"
        },
        {
          "word": "Discrimination",
          "pos": "n.",
          "meaning": "การเลือกปฏิบัติ การแบ่งแยก",
          "phonetic": "/dɪˌskrɪm.əˈneɪ.ʃən/"
        },
        {
          "word": "Inclusion",
          "pos": "n.",
          "meaning": "การยอมรับและนับรวมทุกคน",
          "phonetic": "/ɪnˈkluː.ʒən/"
        },
        {
          "word": "Diversity",
          "pos": "n.",
          "meaning": "ความหลากหลายทางชีวภาพและวัฒนธรรม",
          "phonetic": "/daɪˈvɜː.sə.ti/"
        }
      ],
      "grammarTip": {
        "en": "Connectors of Contrast: Use 'Although' at the beginning of dependent clauses to show unexpected contrast, and 'However' to connect two distinct sentences.",
        "th": "คำเชื่อมแสดงความขัดแย้ง: 'Although' (แม้ว่า) ใช้นำหน้าอนุประโยคตามด้วยจุลภาค ส่วน 'However' (อย่างไรก็ตาม) มักขึ้นต้นประโยคใหม่ตามด้วยจุลภาค"
      }
    }
  },
  {
    "id": 2,
    "title": "The Superfood That Feeds the World",
    "thaiTitle": "ซูเปอร์ฟู้ดหล่อเลี้ยงโลก: ข้าวกับวิถีชีวิตผู้คน",
    "cefr": "A2/B1",
    "unit": "Unit 2",
    "image": "assets/images/ex2.jpg",
    "audio": "assets/audio/ex2_superfood_rice.mp3",
    "passage": "Imagine a food eaten by billions of people every day. That food is rice! From bowls of fragrant rice in Thailand to sushi in Japan, rice is a daily staple in many cultures. One reason for its popularity is its ability to adapt to different environments. Countries such as China, India, and Thailand produce enormous amounts each year, making rice an essential food source for more than half of the world's population.\n\nRice may look simple, but it provides important nutrients and carbohydrates that give our bodies energy. It also comes in many varieties, from soft white rice and nutritious brown rice to aromatic basmati and sticky rice. Surprisingly, rice has uses beyond the dinner table. It can be made into drinks such as Japanese sake, while rice water is sometimes used in beauty and hair-care products.\n\nRice also has deep cultural significance. In many traditions, it represents happiness, good luck, and prosperity. But rice may become even more important in the future. Scientists are developing varieties that can withstand floods, droughts, and other extreme conditions. As the global population grows, this small grain could play a major role in feeding the world.",
    "paragraphs": [
      "Imagine a food eaten by billions of people every day. That food is rice! From bowls of fragrant rice in Thailand to sushi in Japan, rice is a daily staple in many cultures. One reason for its popularity is its ability to adapt to different environments. Countries such as China, India, and Thailand produce enormous amounts each year, making rice an essential food source for more than half of the world's population.",
      "Rice may look simple, but it provides important nutrients and carbohydrates that give our bodies energy. It also comes in many varieties, from soft white rice and nutritious brown rice to aromatic basmati and sticky rice. Surprisingly, rice has uses beyond the dinner table. It can be made into drinks such as Japanese sake, while rice water is sometimes used in beauty and hair-care products.",
      "Rice also has deep cultural significance. In many traditions, it represents happiness, good luck, and prosperity. But rice may become even more important in the future. Scientists are developing varieties that can withstand floods, droughts, and other extreme conditions. As the global population grows, this small grain could play a major role in feeding the world."
    ],
    "partA": [
      {
        "question": "Why is rice an important food around the world?",
        "options": [
          {
            "key": "a",
            "text": "It is only grown in Asia."
          },
          {
            "key": "b",
            "text": "It feeds billions of people."
          },
          {
            "key": "c",
            "text": "It is expensive to produce."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'making rice an essential food source for more than half of the world's population.' (ข้าวเลี้ยงดูผู้คนมากกว่าครึ่งหนึ่งของประชากรโลก)",
        "ref": "Paragraph 1: 'essential food source for more than half of the world's population'"
      },
      {
        "question": "What does rice mainly provide to our bodies?",
        "options": [
          {
            "key": "a",
            "text": "Energy"
          },
          {
            "key": "b",
            "text": "Water"
          },
          {
            "key": "c",
            "text": "Medicine"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: '...provides important nutrients and carbohydrates that give our bodies energy.' (ข้าวให้สารอาหารและคาร์โบไฮเดรตที่ให้พลังงานแก่ร่างกาย)",
        "ref": "Paragraph 2: 'carbohydrates that give our bodies energy'"
      },
      {
        "question": "Which is an example of how rice is used beyond food?",
        "options": [
          {
            "key": "a",
            "text": "Making clothes"
          },
          {
            "key": "b",
            "text": "Building houses"
          },
          {
            "key": "c",
            "text": "Making beauty products"
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: '...while rice water is sometimes used in beauty and hair-care products.' (น้ำซาวข้าวถูกนำมาใช้ในผลิตภัณฑ์ดูแลความงามและเส้นผม)",
        "ref": "Paragraph 2: 'rice water is sometimes used in beauty and hair-care products'"
      },
      {
        "question": "What can rice represent in some cultures?",
        "options": [
          {
            "key": "a",
            "text": "Prosperity and good luck"
          },
          {
            "key": "b",
            "text": "Strength and power"
          },
          {
            "key": "c",
            "text": "Sadness and loss"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'In many traditions, it represents happiness, good luck, and prosperity.' (ในหลายวัฒนธรรม ข้าวเป็นสัญลักษณ์ของความสุข โชคดี และความเจริญรุ่งเรือง)",
        "ref": "Paragraph 3: 'represents happiness, good luck, and prosperity'"
      },
      {
        "question": "Why are scientists developing new varieties of rice?",
        "options": [
          {
            "key": "a",
            "text": "To make rice more colorful"
          },
          {
            "key": "b",
            "text": "To help it survive extreme conditions"
          },
          {
            "key": "c",
            "text": "To make it taste sweeter"
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'Scientists are developing varieties that can withstand floods, droughts, and other extreme conditions.' (นักวิทยาศาสตร์กำลังพัฒนาพันธุ์ข้าวที่ทนทานต่อน้ำท่วมและความแห้งแล้ง)",
        "ref": "Paragraph 3: 'withstand floods, droughts, and other extreme conditions'"
      }
    ],
    "partB": {
      "wordBank": [
        "prosperity",
        "staple",
        "withstand",
        "varieties",
        "nutrients"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Rice is a daily ",
          "suffix": " for billions of people around the world.",
          "answer": "staple"
        },
        {
          "id": 2,
          "prefix": "Brown rice contains important ",
          "suffix": " that help keep the body healthy.",
          "answer": "nutrients"
        },
        {
          "id": 3,
          "prefix": "There are many ",
          "suffix": " of rice with different tastes and textures.",
          "answer": "varieties"
        },
        {
          "id": 4,
          "prefix": "In some cultures, rice represents good luck and ",
          "suffix": ".",
          "answer": "prosperity"
        },
        {
          "id": 5,
          "prefix": "Scientists are developing rice that can ",
          "suffix": " extreme weather conditions.",
          "answer": "withstand"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Many countries",
          "depend on",
          "rice",
          "as a major",
          "food source."
        ],
        "correct": "Many countries depend on rice as a major food source."
      },
      {
        "id": 2,
        "tokens": [
          "Brown rice",
          "provides",
          "important",
          "nutrients",
          "and fiber."
        ],
        "correct": "Brown rice provides important nutrients and fiber."
      },
      {
        "id": 3,
        "tokens": [
          "Different",
          "types of rice",
          "have",
          "unique",
          "flavors",
          "and textures."
        ],
        "correct": "Different types of rice have unique flavors and textures."
      },
      {
        "id": 4,
        "tokens": [
          "Some cultures",
          "connect",
          "rice",
          "with",
          "good luck",
          "and prosperity."
        ],
        "correct": "Some cultures connect rice with good luck and prosperity."
      },
      {
        "id": 5,
        "tokens": [
          "Scientists",
          "are developing",
          "rice",
          "that",
          "can grow",
          "in extreme weather."
        ],
        "correct": "Scientists are developing rice that can grow in extreme weather."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "Staple",
          "pos": "n.",
          "meaning": "อาหารหลัก สินค้าหลัก",
          "phonetic": "/ˈsteɪ.pəl/"
        },
        {
          "word": "Nutrients",
          "pos": "n.",
          "meaning": "สารอาหาร สารบำรุงร่างกาย",
          "phonetic": "/ˈnjuː.tri.ənts/"
        },
        {
          "word": "Varieties",
          "pos": "n.",
          "meaning": "ความหลากหลาย สายพันธุ์ต่างๆ",
          "phonetic": "/vəˈraɪ.ə.tiz/"
        },
        {
          "word": "Prosperity",
          "pos": "n.",
          "meaning": "ความเจริญรุ่งเรือง ความมั่งคั่ง",
          "phonetic": "/prɒsˈper.ə.ti/"
        },
        {
          "word": "Withstand",
          "pos": "v.",
          "meaning": "ทนทาน ต้านทาน ไม่พังทลาย",
          "phonetic": "/wɪðˈstænd/"
        }
      ],
      "grammarTip": {
        "en": "Relative Clauses with 'That' and 'Which': Use 'that' to define essential information about things or foods (e.g., 'rice that can withstand floods').",
        "th": "ประโยคคุณานุประโยค (Relative Clause): ใช้ 'that' หรือ 'which' เชื่อมขยายคำนามที่เป็นสิ่งของหรือพืชพันธุ์ เช่น 'varieties that can withstand floods'"
      }
    }
  },
  {
    "id": 3,
    "title": "Chinese New Year",
    "thaiTitle": "ตรุษจีน: เทศกาลแห่งความอบอุ่นและการเริ่มต้นใหม่",
    "cefr": "A2/B1",
    "unit": "Unit 3",
    "image": "assets/images/ex3.jpg",
    "audio": "assets/audio/ex3_chinese_new_year.mp3",
    "passage": "Chinese New Year, also known as the Spring Festival, is one of the most important traditional celebrations in China. It marks the beginning of the lunar new year and usually takes place between late January and February. The festival lasts for 15 days and focuses on family, traditions, and good fortune. During this time, millions of people travel to reunite with their families and celebrate together.\n\nMany Chinese New Year traditions have existed for thousands of years. According to an ancient legend, a monster called Nian was afraid of loud noises, bright lights, and the color red. This story inspired traditions such as lighting firecrackers, hanging red lanterns, and decorating homes in red. Families also clean their houses to sweep away bad luck and welcome good fortune. Children often receive red envelopes containing money, which symbolize luck and prosperity.\n\nThe celebration ends on the 15th day with the Lantern Festival. People display colorful lanterns, solve riddles, watch dragon dances, and enjoy firework shows. Today, Chinese New Year is celebrated not only in China but also by millions of people around the world. More than just a holiday, it is a celebration of family, cultural traditions, and hope for a happy and prosperous year ahead.",
    "paragraphs": [
      "Chinese New Year, also known as the Spring Festival, is one of the most important traditional celebrations in China. It marks the beginning of the lunar new year and usually takes place between late January and February. The festival lasts for 15 days and focuses on family, traditions, and good fortune. During this time, millions of people travel to reunite with their families and celebrate together.",
      "Many Chinese New Year traditions have existed for thousands of years. According to an ancient legend, a monster called Nian was afraid of loud noises, bright lights, and the color red. This story inspired traditions such as lighting firecrackers, hanging red lanterns, and decorating homes in red. Families also clean their houses to sweep away bad luck and welcome good fortune. Children often receive red envelopes containing money, which symbolize luck and prosperity.",
      "The celebration ends on the 15th day with the Lantern Festival. People display colorful lanterns, solve riddles, watch dragon dances, and enjoy firework shows. Today, Chinese New Year is celebrated not only in China but also by millions of people around the world. More than just a holiday, it is a celebration of family, cultural traditions, and hope for a happy and prosperous year ahead."
    ],
    "partA": [
      {
        "question": "What does Chinese New Year celebrate?",
        "options": [
          {
            "key": "a",
            "text": "The beginning of the lunar new year"
          },
          {
            "key": "b",
            "text": "The beginning of summer"
          },
          {
            "key": "c",
            "text": "The end of winter"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'It marks the beginning of the lunar new year and usually takes place between late January and February.'",
        "ref": "Paragraph 1: 'marks the beginning of the lunar new year'"
      },
      {
        "question": "Why are red decorations used during Chinese New Year?",
        "options": [
          {
            "key": "a",
            "text": "Red is easy to find."
          },
          {
            "key": "b",
            "text": "Red represents good fortune."
          },
          {
            "key": "c",
            "text": "Red represents the moon."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: สีแดงช่วยขับไล่สิ่งชั่วร้ายและเป็นสัญลักษณ์นำพาความโชคดีและความเจริญรุ่งเรือง",
        "ref": "Paragraph 2: 'monster called Nian was afraid of... the color red'"
      },
      {
        "question": "According to the legend, what was Nian afraid of?",
        "options": [
          {
            "key": "a",
            "text": "Water and cold weather"
          },
          {
            "key": "b",
            "text": "Animals and crowds"
          },
          {
            "key": "c",
            "text": "Loud noises, bright lights, and red"
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: '...a monster called Nian was afraid of loud noises, bright lights, and the color red.'",
        "ref": "Paragraph 2: 'afraid of loud noises, bright lights, and the color red'"
      },
      {
        "question": "What do red envelopes symbolize?",
        "options": [
          {
            "key": "a",
            "text": "Luck and prosperity"
          },
          {
            "key": "b",
            "text": "Friendship and travel"
          },
          {
            "key": "c",
            "text": "Health and education"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Children often receive red envelopes containing money, which symbolize luck and prosperity.'",
        "ref": "Paragraph 2: 'symbolize luck and prosperity'"
      },
      {
        "question": "What happens on the final day of Chinese New Year?",
        "options": [
          {
            "key": "a",
            "text": "Families clean their homes."
          },
          {
            "key": "b",
            "text": "The Lantern Festival is celebrated."
          },
          {
            "key": "c",
            "text": "People begin the lunar new year."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'The celebration ends on the 15th day with the Lantern Festival.' (งานฉลองสิ้นสุดลงในวันที่ 15 ด้วยเทศกาลโคมไฟ)",
        "ref": "Paragraph 3: 'ends on the 15th day with the Lantern Festival'"
      }
    ],
    "partB": {
      "wordBank": [
        "prosperity",
        "reunite",
        "ancient",
        "symbolize",
        "traditions"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Millions of people travel long distances to ",
          "suffix": " with their families.",
          "answer": "reunite"
        },
        {
          "id": 2,
          "prefix": "Many Chinese New Year ",
          "suffix": " have existed for thousands of years.",
          "answer": "traditions"
        },
        {
          "id": 3,
          "prefix": "Red decorations and lanterns ",
          "suffix": " good luck and happiness.",
          "answer": "symbolize"
        },
        {
          "id": 4,
          "prefix": "Red envelopes are given to children to wish for ",
          "suffix": ".",
          "answer": "prosperity"
        },
        {
          "id": 5,
          "prefix": "The custom of lighting firecrackers comes from an ",
          "suffix": " legend.",
          "answer": "ancient"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Chinese New Year",
          "is",
          "an important",
          "traditional",
          "festival."
        ],
        "correct": "Chinese New Year is an important traditional festival."
      },
      {
        "id": 2,
        "tokens": [
          "Families",
          "often travel",
          "long distances",
          "together",
          "to celebrate."
        ],
        "correct": "Families often travel long distances to celebrate together."
      },
      {
        "id": 3,
        "tokens": [
          "Many families",
          "decorate",
          "their homes",
          "with",
          "red lanterns."
        ],
        "correct": "Many families decorate their homes with red lanterns."
      },
      {
        "id": 4,
        "tokens": [
          "Firecrackers",
          "are used",
          "to drive away",
          "bad luck."
        ],
        "correct": "Firecrackers are used to drive away bad luck."
      },
      {
        "id": 5,
        "tokens": [
          "The Lantern Festival",
          "marks",
          "the end of",
          "the celebration."
        ],
        "correct": "The Lantern Festival marks the end of the celebration."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "Lunar",
          "pos": "adj.",
          "meaning": "เกี่ยวกับดวงจันทร์ ตามจันทรคติ",
          "phonetic": "/ˈluː.nər/"
        },
        {
          "word": "Reunite",
          "pos": "v.",
          "meaning": "รวมตัวกันใหม่ กลับมาพบกัน",
          "phonetic": "/ˌriː.juːˈnaɪt/"
        },
        {
          "word": "Firecrackers",
          "pos": "n.",
          "meaning": "ประทัด",
          "phonetic": "/ˈfaɪəˌkræk.əz/"
        },
        {
          "word": "Symbolize",
          "pos": "v.",
          "meaning": "เป็นสัญลักษณ์แทน แสดงถึง",
          "phonetic": "/ˈsɪm.bə.laɪz/"
        },
        {
          "word": "Riddles",
          "pos": "n.",
          "meaning": "ปริศนาคำทาย",
          "phonetic": "/ˈrɪd.əlz/"
        }
      ],
      "grammarTip": {
        "en": "Passive Voice in Traditions: Use passive voice to explain long-held customs (e.g., 'Firecrackers are used to drive away bad luck', 'Chinese New Year is celebrated worldwide').",
        "th": "ประธานถูกกระทำ (Passive Voice): นิยมใช้บรรยายประเพณีและกิจกรรม เช่น 'is celebrated' (ได้รับการเฉลิมฉลอง), 'are used' (ถูกนำมาใช้)"
      }
    }
  },
  {
    "id": 4,
    "title": "Amelia Earhart: The Woman Who Conquered the Skies",
    "thaiTitle": "อเมเลีย แอร์ฮาร์ต: สตรีผู้พิชิตท้องฟ้า",
    "cefr": "A2/B1",
    "unit": "Unit 4",
    "image": "assets/images/ex4.jpg",
    "audio": "assets/audio/ex4_amelia_earhart.mp3",
    "passage": "Amelia Earhart was a brave and adventurous pilot who became a pioneer in aviation. Born in Kansas, USA, in 1897, she loved exploring and trying new things from a young age. After taking her first airplane ride in 1920, she immediately knew she wanted to become a pilot. She took flying lessons, saved money, and eventually bought her own yellow airplane, which she named \"The Canary.\"\n\nAmelia was determined to prove that women could be as skilled as men in aviation. In 1932, she became the first woman to fly solo across the Atlantic Ocean. During the nearly 15-hour flight, she faced strong winds, bad weather, and technical problems but refused to give up. Her remarkable achievement made her internationally famous. She continued breaking aviation records and encouraged other women to follow their dreams and challenge traditional gender roles.\n\nIn 1937, Amelia attempted her greatest adventure: flying around the world with her navigator, Fred Noonan. During the journey, their plane mysteriously disappeared over the Pacific Ocean, and neither of them was ever found. Although the mystery remains unsolved, Amelia's legacy continues today. She is remembered for her courage, determination, and willingness to break barriers, inspiring generations of people to achieve what once seemed impossible.",
    "paragraphs": [
      "Amelia Earhart was a brave and adventurous pilot who became a pioneer in aviation. Born in Kansas, USA, in 1897, she loved exploring and trying new things from a young age. After taking her first airplane ride in 1920, she immediately knew she wanted to become a pilot. She took flying lessons, saved money, and eventually bought her own yellow airplane, which she named \"The Canary.\"",
      "Amelia was determined to prove that women could be as skilled as men in aviation. In 1932, she became the first woman to fly solo across the Atlantic Ocean. During the nearly 15-hour flight, she faced strong winds, bad weather, and technical problems but refused to give up. Her remarkable achievement made her internationally famous. She continued breaking aviation records and encouraged other women to follow their dreams and challenge traditional gender roles.",
      "In 1937, Amelia attempted her greatest adventure: flying around the world with her navigator, Fred Noonan. During the journey, their plane mysteriously disappeared over the Pacific Ocean, and neither of them was ever found. Although the mystery remains unsolved, Amelia's legacy continues today. She is remembered for her courage, determination, and willingness to break barriers, inspiring generations of people to achieve what once seemed impossible."
    ],
    "partA": [
      {
        "question": "What inspired Amelia Earhart to become a pilot?",
        "options": [
          {
            "key": "a",
            "text": "Her first airplane ride"
          },
          {
            "key": "b",
            "text": "A famous book"
          },
          {
            "key": "c",
            "text": "Her family"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'After taking her first airplane ride in 1920, she immediately knew she wanted to become a pilot.'",
        "ref": "Paragraph 1: 'After taking her first airplane ride in 1920'"
      },
      {
        "question": "What did Amelia achieve in 1932?",
        "options": [
          {
            "key": "a",
            "text": "She flew around the world."
          },
          {
            "key": "b",
            "text": "She flew solo across the Atlantic Ocean."
          },
          {
            "key": "c",
            "text": "She built her own airplane."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'In 1932, she became the first woman to fly solo across the Atlantic Ocean.'",
        "ref": "Paragraph 2: 'first woman to fly solo across the Atlantic Ocean'"
      },
      {
        "question": "What difficulties did Amelia face during her Atlantic flight?",
        "options": [
          {
            "key": "a",
            "text": "Strong winds and technical problems"
          },
          {
            "key": "b",
            "text": "Heavy traffic and crowds"
          },
          {
            "key": "c",
            "text": "A lack of food and water"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: '...she faced strong winds, bad weather, and technical problems but refused to give up.'",
        "ref": "Paragraph 2: 'faced strong winds, bad weather, and technical problems'"
      },
      {
        "question": "What happened during Amelia's journey in 1937?",
        "options": [
          {
            "key": "a",
            "text": "She successfully flew around the world."
          },
          {
            "key": "b",
            "text": "She decided to stop flying."
          },
          {
            "key": "c",
            "text": "Her plane disappeared over the Pacific Ocean."
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'During the journey, their plane mysteriously disappeared over the Pacific Ocean...'",
        "ref": "Paragraph 3: 'plane mysteriously disappeared over the Pacific Ocean'"
      },
      {
        "question": "Why is Amelia Earhart still remembered today?",
        "options": [
          {
            "key": "a",
            "text": "She invented a new type of airplane."
          },
          {
            "key": "b",
            "text": "She showed courage and broke barriers."
          },
          {
            "key": "c",
            "text": "She discovered a new island."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'She is remembered for her courage, determination, and willingness to break barriers, inspiring generations...'",
        "ref": "Paragraph 3: 'remembered for her courage, determination, and willingness to break barriers'"
      }
    ],
    "partB": {
      "wordBank": [
        "disappeared",
        "achievement",
        "determined",
        "legacy",
        "pioneer"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Amelia was ",
          "suffix": " to prove that women could become successful pilots.",
          "answer": "determined"
        },
        {
          "id": 2,
          "prefix": "She became a ",
          "suffix": " in aviation and inspired many other women.",
          "answer": "pioneer"
        },
        {
          "id": 3,
          "prefix": "Flying solo across the Atlantic was a remarkable ",
          "suffix": ".",
          "answer": "achievement"
        },
        {
          "id": 4,
          "prefix": "Amelia's plane mysteriously ",
          "suffix": " over the Pacific Ocean.",
          "answer": "disappeared"
        },
        {
          "id": 5,
          "prefix": "Her courage and determination are an important part of her ",
          "suffix": ".",
          "answer": "legacy"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "She",
          "worked hard",
          "to achieve",
          "her dream",
          "of becoming",
          "a pilot."
        ],
        "correct": "She worked hard to achieve her dream of becoming a pilot."
      },
      {
        "id": 2,
        "tokens": [
          "Amelia",
          "proved",
          "that",
          "women",
          "could succeed in",
          "aviation."
        ],
        "correct": "Amelia proved that women could succeed in aviation."
      },
      {
        "id": 3,
        "tokens": [
          "Her courage",
          "helped her",
          "break",
          "several",
          "aviation records."
        ],
        "correct": "Her courage helped her break several aviation records."
      },
      {
        "id": 4,
        "tokens": [
          "Amelia",
          "attempted",
          "her greatest",
          "adventure",
          "in 1937."
        ],
        "correct": "Amelia attempted her greatest adventure in 1937."
      },
      {
        "id": 5,
        "tokens": [
          "Her achievements",
          "inspire",
          "people",
          "around",
          "the world."
        ],
        "correct": "Her achievements inspire people around the world."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "Aviation",
          "pos": "n.",
          "meaning": "การบิน กิจการการบิน",
          "phonetic": "/ˌeɪ.viˈeɪ.ʃən/"
        },
        {
          "word": "Pioneer",
          "pos": "n.",
          "meaning": "ผู้บุกเบิก ผู้ริเริ่มสิ่งใหม่",
          "phonetic": "/ˌpaɪəˈnɪər/"
        },
        {
          "word": "Determined",
          "pos": "adj.",
          "meaning": "มีความมุ่งมั่นตั้งใจแน่วแน่",
          "phonetic": "/dɪˈtɜː.mɪnd/"
        },
        {
          "word": "Achievement",
          "pos": "n.",
          "meaning": "ความสำเร็จ ผลงานอันยิ่งใหญ่",
          "phonetic": "/əˈtʃiːv.mənt/"
        },
        {
          "word": "Legacy",
          "pos": "n.",
          "meaning": "มรดกตกทอด สิ่งที่ทิ้งไว้ให้คนรุ่นหลัง",
          "phonetic": "/ˈleɡ.ə.si/"
        }
      ],
      "grammarTip": {
        "en": "Past Simple vs Past Continuous: Use Past Simple for completed historical events (e.g., 'she flew solo'), and Past Continuous for ongoing background actions ('while she was flying across the ocean').",
        "th": "ไวยากรณ์ Past Tense: เล่าชีวประวัติบุคคลสำคัญด้วย Past Simple สำหรับเหตุการณ์ที่สำเร็จลุล่วงในอดีต (เช่น 'she bought', 'she flew solo')"
      }
    }
  },
  {
    "id": 5,
    "title": "Tsunamis: Giant Waves of Destruction",
    "thaiTitle": "สึนามิ: คลื่นยักษ์แห่งการทำลายล้าง",
    "cefr": "A2/B1",
    "unit": "Unit 5",
    "image": "assets/images/ex5.jpg",
    "audio": "assets/audio/ex5_tsunamis.mp3",
    "passage": "A tsunami is a series of powerful ocean waves caused by underwater earthquakes, volcanic eruptions, or landslides. Most tsunamis occur when tectonic plates suddenly shift beneath the ocean, pushing a huge amount of water upward. The waves then spread across the ocean and can travel at speeds of up to 800 km/h. In deep water, they may be difficult to notice, but as they approach the coast, they slow down and become much taller.\n\nWhen a tsunami reaches land, it can cause serious destruction, flooding coastal areas and damaging buildings. Some waves can reach more than 30 meters high. One of the deadliest tsunamis in history occurred on December 26, 2004, after a powerful 9.1-magnitude earthquake near Indonesia. Huge waves struck several countries, including Thailand, Sri Lanka, and India, killing more than 230,000 people and leaving millions homeless.\n\nToday, scientists use advanced warning systems to detect earthquakes and unusual movements under the ocean. However, tsunamis can sometimes arrive too quickly for people to receive a warning. Natural warning signs may include strong earthquakes near the coast or the sea suddenly moving far away from the shore. Recognizing these signs and moving quickly to higher ground can help people stay safe during a tsunami.",
    "paragraphs": [
      "A tsunami is a series of powerful ocean waves caused by underwater earthquakes, volcanic eruptions, or landslides. Most tsunamis occur when tectonic plates suddenly shift beneath the ocean, pushing a huge amount of water upward. The waves then spread across the ocean and can travel at speeds of up to 800 km/h. In deep water, they may be difficult to notice, but as they approach the coast, they slow down and become much taller.",
      "When a tsunami reaches land, it can cause serious destruction, flooding coastal areas and damaging buildings. Some waves can reach more than 30 meters high. One of the deadliest tsunamis in history occurred on December 26, 2004, after a powerful 9.1-magnitude earthquake near Indonesia. Huge waves struck several countries, including Thailand, Sri Lanka, and India, killing more than 230,000 people and leaving millions homeless.",
      "Today, scientists use advanced warning systems to detect earthquakes and unusual movements under the ocean. However, tsunamis can sometimes arrive too quickly for people to receive a warning. Natural warning signs may include strong earthquakes near the coast or the sea suddenly moving far away from the shore. Recognizing these signs and moving quickly to higher ground can help people stay safe during a tsunami."
    ],
    "partA": [
      {
        "question": "What happens to tsunami waves as they approach the coast?",
        "options": [
          {
            "key": "a",
            "text": "They disappear completely."
          },
          {
            "key": "b",
            "text": "They become taller."
          },
          {
            "key": "c",
            "text": "They become warmer."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: '...as they approach the coast, they slow down and become much taller.' (เมื่อเคลื่อนเข้าใกล้ชายฝั่ง คลื่นจะชะลอความเร็วและยกตัวสูงขึ้นมาก)",
        "ref": "Paragraph 1: 'they slow down and become much taller'"
      },
      {
        "question": "What causes water to move upward during an underwater earthquake?",
        "options": [
          {
            "key": "a",
            "text": "Shifting tectonic plates"
          },
          {
            "key": "b",
            "text": "Strong ocean winds"
          },
          {
            "key": "c",
            "text": "Heavy rainfall"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Most tsunamis occur when tectonic plates suddenly shift beneath the ocean, pushing a huge amount of water upward.'",
        "ref": "Paragraph 1: 'tectonic plates suddenly shift beneath the ocean'"
      },
      {
        "question": "Why might people on boats not notice a tsunami in deep water?",
        "options": [
          {
            "key": "a",
            "text": "The waves move very slowly."
          },
          {
            "key": "b",
            "text": "The water becomes very calm."
          },
          {
            "key": "c",
            "text": "The waves are usually not very high."
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: ในทะเลลึกคลื่นสึนามิจะมีความสูงของยอดคลื่นไม่มากและสังเกตได้ยาก แต่จะยกตัวสูงขึ้นเมื่อถึงชายฝั่ง",
        "ref": "Paragraph 1: 'In deep water, they may be difficult to notice'"
      },
      {
        "question": "Which countries were affected by the 2004 tsunami?",
        "options": [
          {
            "key": "a",
            "text": "Thailand, Sri Lanka, and India"
          },
          {
            "key": "b",
            "text": "China, Japan, and Korea"
          },
          {
            "key": "c",
            "text": "Australia, Canada, and Mexico"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Huge waves struck several countries, including Thailand, Sri Lanka, and India...'",
        "ref": "Paragraph 2: 'including Thailand, Sri Lanka, and India'"
      },
      {
        "question": "Which could be a natural warning sign of a tsunami?",
        "options": [
          {
            "key": "a",
            "text": "The weather becomes colder."
          },
          {
            "key": "b",
            "text": "The sea suddenly moves away from the shore."
          },
          {
            "key": "c",
            "text": "The wind suddenly stops."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'Natural warning signs may include strong earthquakes near the coast or the sea suddenly moving far away from the shore.'",
        "ref": "Paragraph 3: 'the sea suddenly moving far away from the shore'"
      }
    ],
    "partB": {
      "wordBank": [
        "destruction",
        "detect",
        "warning",
        "coastal",
        "tectonic"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "The Earth's ",
          "suffix": " plates can move and cause underwater earthquakes.",
          "answer": "tectonic"
        },
        {
          "id": 2,
          "prefix": "Tsunamis can cause serious ",
          "suffix": " to buildings and communities.",
          "answer": "destruction"
        },
        {
          "id": 3,
          "prefix": "Areas near the sea are called ",
          "suffix": " areas.",
          "answer": "coastal"
        },
        {
          "id": 4,
          "prefix": "Scientists use special systems to ",
          "suffix": " possible tsunamis.",
          "answer": "detect"
        },
        {
          "id": 5,
          "prefix": "A strong earthquake near the ocean can be a ",
          "suffix": " sign of a tsunami.",
          "answer": "warning"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Tsunamis",
          "can travel",
          "across the ocean",
          "at very",
          "high speeds."
        ],
        "correct": "Tsunamis can travel across the ocean at very high speeds."
      },
      {
        "id": 2,
        "tokens": [
          "Underwater earthquakes",
          "can create",
          "powerful",
          "ocean waves."
        ],
        "correct": "Underwater earthquakes can create powerful ocean waves."
      },
      {
        "id": 3,
        "tokens": [
          "Tsunami waves",
          "become taller",
          "as",
          "they get closer to",
          "the coast."
        ],
        "correct": "Tsunami waves become taller as they get closer to the coast."
      },
      {
        "id": 4,
        "tokens": [
          "Warning systems",
          "can help",
          "people",
          "prepare for",
          "danger."
        ],
        "correct": "Warning systems can help people prepare for danger."
      },
      {
        "id": 5,
        "tokens": [
          "Moving to",
          "higher ground",
          "can help",
          "people",
          "stay safe."
        ],
        "correct": "Moving to higher ground can help people stay safe."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "Tectonic",
          "pos": "adj.",
          "meaning": "เกี่ยวกับโครงสร้างเปลือกโลก",
          "phonetic": "/tekˈtɒn.ɪk/"
        },
        {
          "word": "Magnitude",
          "pos": "n.",
          "meaning": "ขนาดความรุนแรงของแผ่นดินไหว",
          "phonetic": "/ˈmæɡ.nɪ.tʃuːd/"
        },
        {
          "word": "Destruction",
          "pos": "n.",
          "meaning": "การทำลายล้าง ความพินาศ",
          "phonetic": "/dɪˈstrʌk.ʃən/"
        },
        {
          "word": "Coastal",
          "pos": "adj.",
          "meaning": "แถบชายฝั่งทะเล",
          "phonetic": "/ˈkəʊ.stəl/"
        },
        {
          "word": "Detect",
          "pos": "v.",
          "meaning": "ตรวจจับ ค้นหา สังเกตพบ",
          "phonetic": "/dɪˈtekt/"
        }
      ],
      "grammarTip": {
        "en": "Cause and Effect Structures: Use 'caused by' and 'because of' to describe natural disasters (e.g., 'waves caused by underwater earthquakes').",
        "th": "โครงสร้างบอกเหตุและผล (Cause and Effect): การใช้ 'caused by' (มีสาเหตุมาจาก) เพื่ออธิบายปรากฏการณ์ธรรมชาติ เช่น 'powerful waves caused by underwater earthquakes'"
      }
    }
  },
  {
    "id": 6,
    "title": "Modern Inventions in Food Technology",
    "thaiTitle": "นวัตกรรมล้ำสมัยในเทคโนโลยีอาหาร",
    "cefr": "A2/B1",
    "unit": "Unit 6",
    "image": "assets/images/ex6.jpg",
    "audio": "assets/audio/ex6_food_technology.mp3",
    "passage": "Imagine eating a steak made without raising a cow or a dessert created by a 3D printer! New innovations are changing the way we produce and eat food. 3D-printed food allows machines to create unusual shapes and personalized meals, while lab-grown meat is produced from animal cells instead of raising and slaughtering animals. These inventions could reduce waste and environmental damage, but they are still expensive, and some people are unsure about eating food made with new technology.\n\nTechnology is also changing how we store and grow food. Smart packaging can use special labels that change color when food is no longer fresh, helping prevent food waste. Meanwhile, vertical farms grow plants indoors in layers, using less land and water than traditional farms. They can even produce food all year round. However, vertical farms require large amounts of electricity, while smart packaging can be more expensive and may create additional waste.\n\nArtificial intelligence (AI) is another important development in food technology. AI can check the quality of food, sort fruits and vegetables, reduce waste, and even help create new flavors. However, increased automation could replace some human jobs. Modern food technology offers exciting possibilities, but challenges such as cost and environmental impact remain. In the future, the food on your plate might look very different from what you eat today!",
    "paragraphs": [
      "Imagine eating a steak made without raising a cow or a dessert created by a 3D printer! New innovations are changing the way we produce and eat food. 3D-printed food allows machines to create unusual shapes and personalized meals, while lab-grown meat is produced from animal cells instead of raising and slaughtering animals. These inventions could reduce waste and environmental damage, but they are still expensive, and some people are unsure about eating food made with new technology.",
      "Technology is also changing how we store and grow food. Smart packaging can use special labels that change color when food is no longer fresh, helping prevent food waste. Meanwhile, vertical farms grow plants indoors in layers, using less land and water than traditional farms. They can even produce food all year round. However, vertical farms require large amounts of electricity, while smart packaging can be more expensive and may create additional waste.",
      "Artificial intelligence (AI) is another important development in food technology. AI can check the quality of food, sort fruits and vegetables, reduce waste, and even help create new flavors. However, increased automation could replace some human jobs. Modern food technology offers exciting possibilities, but challenges such as cost and environmental impact remain. In the future, the food on your plate might look very different from what you eat today!"
    ],
    "partA": [
      {
        "question": "What is special about lab-grown meat?",
        "options": [
          {
            "key": "a",
            "text": "It is made only from vegetables."
          },
          {
            "key": "b",
            "text": "It is produced from animal cells."
          },
          {
            "key": "c",
            "text": "It is cooked by robots."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: '...lab-grown meat is produced from animal cells instead of raising and slaughtering animals.'",
        "ref": "Paragraph 1: 'produced from animal cells instead of raising and slaughtering'"
      },
      {
        "question": "How can smart packaging help people?",
        "options": [
          {
            "key": "a",
            "text": "It can show when food is no longer fresh."
          },
          {
            "key": "b",
            "text": "It can make food taste better."
          },
          {
            "key": "c",
            "text": "It can make food cheaper."
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'Smart packaging can use special labels that change color when food is no longer fresh...'",
        "ref": "Paragraph 2: 'labels that change color when food is no longer fresh'"
      },
      {
        "question": "What is one advantage of vertical farming?",
        "options": [
          {
            "key": "a",
            "text": "It needs no electricity."
          },
          {
            "key": "b",
            "text": "It uses more land."
          },
          {
            "key": "c",
            "text": "It can grow food all year round."
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'They can even produce food all year round.' (ฟาร์มแนวดิ่งสามารถปลูกพืชได้ตลอดทั้งปี)",
        "ref": "Paragraph 2: 'can even produce food all year round'"
      },
      {
        "question": "How can AI be used in food production?",
        "options": [
          {
            "key": "a",
            "text": "It can sort fruits and vegetables."
          },
          {
            "key": "b",
            "text": "It can replace all types of food."
          },
          {
            "key": "c",
            "text": "It can grow plants without water."
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'AI can check the quality of food, sort fruits and vegetables, reduce waste...'",
        "ref": "Paragraph 3: 'sort fruits and vegetables, reduce waste'"
      },
      {
        "question": "What is one challenge of modern food technology?",
        "options": [
          {
            "key": "a",
            "text": "Food cannot be produced indoors."
          },
          {
            "key": "b",
            "text": "Some technologies are expensive."
          },
          {
            "key": "c",
            "text": "People have stopped eating traditional food."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: '...challenges such as cost and environmental impact remain.' และ 'they are still expensive'",
        "ref": "Paragraph 1 & 3: 'challenges such as cost and environmental impact'"
      }
    ],
    "partB": {
      "wordBank": [
        "vertical",
        "environmental",
        "automation",
        "personalized",
        "innovations"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "New ",
          "suffix": " are changing how food is produced.",
          "answer": "innovations"
        },
        {
          "id": 2,
          "prefix": "3D printers can create ",
          "suffix": " meals for different people.",
          "answer": "personalized"
        },
        {
          "id": 3,
          "prefix": " ",
          "suffix": " farms grow plants indoors in layers.",
          "answer": "vertical"
        },
        {
          "id": 4,
          "prefix": "Lab-grown meat could help reduce ",
          "suffix": " damage.",
          "answer": "environmental"
        },
        {
          "id": 5,
          "prefix": "Increased ",
          "suffix": " could replace some human jobs.",
          "answer": "automation"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Technology",
          "is changing",
          "the way",
          "we",
          "produce food."
        ],
        "correct": "Technology is changing the way we produce food."
      },
      {
        "id": 2,
        "tokens": [
          "Scientists",
          "can grow",
          "meat",
          "from",
          "animal cells."
        ],
        "correct": "Scientists can grow meat from animal cells."
      },
      {
        "id": 3,
        "tokens": [
          "Smart labels",
          "can help",
          "reduce",
          "food waste."
        ],
        "correct": "Smart labels can help reduce food waste."
      },
      {
        "id": 4,
        "tokens": [
          "Vertical farms",
          "can produce",
          "food",
          "all year round."
        ],
        "correct": "Vertical farms can produce food all year round."
      },
      {
        "id": 5,
        "tokens": [
          "AI",
          "can help",
          "companies",
          "improve",
          "food quality."
        ],
        "correct": "AI can help companies improve food quality."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "Innovation",
          "pos": "n.",
          "meaning": "นวัตกรรม สิ่งประดิษฐ์สร้างสรรค์ใหม่",
          "phonetic": "/ˌɪn.əˈveɪ.ʃən/"
        },
        {
          "word": "Personalized",
          "pos": "adj.",
          "meaning": "ปรับแต่งตามความต้องการเฉพาะบุคคล",
          "phonetic": "/ˈpɜː.sən.əl.aɪzd/"
        },
        {
          "word": "Hydroponic",
          "pos": "adj.",
          "meaning": "การปลูกพืชไร้ดินด้วยสารละลายธาตุอาหาร",
          "phonetic": "/ˌhaɪ.drəˈpɒn.ɪk/"
        },
        {
          "word": "Automation",
          "pos": "n.",
          "meaning": "ระบบอัตโนมัติ การทำงานด้วยเครื่องจักร",
          "phonetic": "/ˌɔː.təˈmeɪ.ʃən/"
        },
        {
          "word": "Packaging",
          "pos": "n.",
          "meaning": "บรรจุภัณฑ์ การหีบห่อ",
          "phonetic": "/ˈpæk.ɪ.dʒɪŋ/"
        }
      ],
      "grammarTip": {
        "en": "Modal Verbs of Possibility: Use 'could' and 'might' to speculate about future technological trends (e.g., 'These inventions could reduce waste', 'food might look very different').",
        "th": "กริยาช่วยบอกความเป็นไปได้ (Modal Verbs): ใช้ 'could' หรือ 'might' คาดการณ์สิ่งที่จะเกิดขึ้นในอนาคต เช่น 'could replace some human jobs'"
      }
    }
  },
  {
    "id": 7,
    "title": "Languages of the World",
    "thaiTitle": "ภาษาแห่งโลก: การสื่อสารและมรดกทางวัฒนธรรม",
    "cefr": "A2/B1",
    "unit": "Unit 7",
    "image": "assets/images/ex7.jpg",
    "audio": "assets/audio/ex7_languages_of_the_world.mp3",
    "passage": "Language is an essential part of human communication and cultural identity. Today, more than 7,000 languages are spoken around the world. Some, such as English, Mandarin Chinese, and Spanish, are spoken by millions of people and are widely used for business, education, and international communication. Languages constantly evolve, with new expressions appearing as societies and technology develop.\n\nSome languages continue to expand because more people learn them as second languages. English, Spanish, and Mandarin are popular choices because they can improve career opportunities and make international travel easier. The internet has also accelerated the spread of major languages through films, websites, and social media. At the same time, technological and cultural changes introduce new vocabulary, including words such as \"selfie\" and \"emoji.\"\n\nHowever, many smaller languages are becoming endangered as the number of speakers decreases. If younger generations stop learning them, these languages may eventually become extinct. Organizations are making efforts to preserve them by teaching them in schools and creating written or digital records. Protecting linguistic diversity is important because every language contains unique traditions, knowledge, and ways of understanding the world.",
    "paragraphs": [
      "Language is an essential part of human communication and cultural identity. Today, more than 7,000 languages are spoken around the world. Some, such as English, Mandarin Chinese, and Spanish, are spoken by millions of people and are widely used for business, education, and international communication. Languages constantly evolve, with new expressions appearing as societies and technology develop.",
      "Some languages continue to expand because more people learn them as second languages. English, Spanish, and Mandarin are popular choices because they can improve career opportunities and make international travel easier. The internet has also accelerated the spread of major languages through films, websites, and social media. At the same time, technological and cultural changes introduce new vocabulary, including words such as \"selfie\" and \"emoji.\"",
      "However, many smaller languages are becoming endangered as the number of speakers decreases. If younger generations stop learning them, these languages may eventually become extinct. Organizations are making efforts to preserve them by teaching them in schools and creating written or digital records. Protecting linguistic diversity is important because every language contains unique traditions, knowledge, and ways of understanding the world."
    ],
    "partA": [
      {
        "question": "Approximately how many languages are spoken around the world?",
        "options": [
          {
            "key": "a",
            "text": "More than 700"
          },
          {
            "key": "b",
            "text": "More than 70,000"
          },
          {
            "key": "c",
            "text": "More than 7,000"
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: 'Today, more than 7,000 languages are spoken around the world.'",
        "ref": "Paragraph 1: 'more than 7,000 languages are spoken around the world'"
      },
      {
        "question": "Why do many people learn major languages as second languages?",
        "options": [
          {
            "key": "a",
            "text": "To improve career and travel opportunities"
          },
          {
            "key": "b",
            "text": "To replace their first language"
          },
          {
            "key": "c",
            "text": "To create new languages"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: '...they can improve career opportunities and make international travel easier.'",
        "ref": "Paragraph 2: 'improve career opportunities and make international travel easier'"
      },
      {
        "question": "How has the internet affected major languages?",
        "options": [
          {
            "key": "a",
            "text": "It has stopped them from changing."
          },
          {
            "key": "b",
            "text": "It has helped them spread more quickly."
          },
          {
            "key": "c",
            "text": "It has made them more difficult."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'The internet has also accelerated the spread of major languages through films, websites, and social media.'",
        "ref": "Paragraph 2: 'accelerated the spread of major languages'"
      },
      {
        "question": "When can a language become endangered?",
        "options": [
          {
            "key": "a",
            "text": "When too many people study it"
          },
          {
            "key": "b",
            "text": "When new words are created"
          },
          {
            "key": "c",
            "text": "When the number of speakers decreases"
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: '...smaller languages are becoming endangered as the number of speakers decreases.'",
        "ref": "Paragraph 3: 'endangered as the number of speakers decreases'"
      },
      {
        "question": "Why is it important to preserve languages?",
        "options": [
          {
            "key": "a",
            "text": "They contain unique traditions and knowledge."
          },
          {
            "key": "b",
            "text": "Everyone should speak the same language."
          },
          {
            "key": "c",
            "text": "Older languages are easier to learn."
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: '...every language contains unique traditions, knowledge, and ways of understanding the world.'",
        "ref": "Paragraph 3: 'contains unique traditions, knowledge, and ways of understanding'"
      }
    ],
    "partB": {
      "wordBank": [
        "endangered",
        "accelerated",
        "identity",
        "preserve",
        "evolve"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Languages constantly ",
          "suffix": " as new words and expressions appear.",
          "answer": "evolve"
        },
        {
          "id": 2,
          "prefix": "Language is an important part of a person's cultural ",
          "suffix": ".",
          "answer": "identity"
        },
        {
          "id": 3,
          "prefix": "The internet has ",
          "suffix": " the spread of major languages.",
          "answer": "accelerated"
        },
        {
          "id": 4,
          "prefix": "Some languages become ",
          "suffix": " when fewer people speak them.",
          "answer": "endangered"
        },
        {
          "id": 5,
          "prefix": "Organizations are working to ",
          "suffix": " languages for future generations.",
          "answer": "preserve"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Learning",
          "another language",
          "can improve",
          "career opportunities."
        ],
        "correct": "Learning another language can improve career opportunities."
      },
      {
        "id": 2,
        "tokens": [
          "Technology",
          "has introduced",
          "many",
          "new words",
          "into",
          "our vocabulary."
        ],
        "correct": "Technology has introduced many new words into our vocabulary."
      },
      {
        "id": 3,
        "tokens": [
          "Social media",
          "helps",
          "languages",
          "spread",
          "more quickly."
        ],
        "correct": "Social media helps languages spread more quickly."
      },
      {
        "id": 4,
        "tokens": [
          "Some languages",
          "are spoken",
          "only by",
          "small communities."
        ],
        "correct": "Some languages are spoken only by small communities."
      },
      {
        "id": 5,
        "tokens": [
          "Learning languages",
          "helps us",
          "understand",
          "different cultures."
        ],
        "correct": "Learning languages helps us understand different cultures."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "Linguistic",
          "pos": "adj.",
          "meaning": "เกี่ยวกับภาษา ทางภาษาศาสตร์",
          "phonetic": "/lɪŋˈɡwɪs.tɪk/"
        },
        {
          "word": "Identity",
          "pos": "n.",
          "meaning": "อัตลักษณ์ ตัวตน คุณลักษณะเฉพาะ",
          "phonetic": "/aɪˈden.tə.ti/"
        },
        {
          "word": "Evolve",
          "pos": "v.",
          "meaning": "วิวัฒนาการ ค่อยๆ เปลี่ยนแปลงและพัฒนา",
          "phonetic": "/ɪˈvɒlv/"
        },
        {
          "word": "Accelerate",
          "pos": "v.",
          "meaning": "เร่งให้เร็วขึ้น เพิ่มความเร็ว",
          "phonetic": "/əkˈsel.ə.reɪt/"
        },
        {
          "word": "Endangered",
          "pos": "adj.",
          "meaning": "ตกอยู่ในอันตราย ใกล้สูญพันธุ์",
          "phonetic": "/ɪnˈdeɪn.dʒəd/"
        }
      ],
      "grammarTip": {
        "en": "First Conditional with 'If': Use First Conditional for real possibilities and their consequences (e.g., 'If younger generations stop learning them, these languages may become extinct').",
        "th": "ประโยคเงื่อนไขแบบที่ 1 (First Conditional): โครงสร้าง 'If + Present Simple, Future / Modal' เพื่อบอกผลลัพธ์ที่เป็นไปได้ เช่น 'If younger generations stop learning them, these languages may eventually become extinct'"
      }
    }
  },
  {
    "id": 8,
    "title": "Robin Hood: The Hero of Sherwood Forest",
    "thaiTitle": "โรบินฮูด: วีรบุรุษแห่งป่าเชอร์วูด",
    "cefr": "A2/B1",
    "unit": "Unit 8",
    "image": "assets/images/ex8.jpg",
    "audio": "assets/audio/ex8_robin_hood.mp3",
    "passage": "Long ago in medieval England, according to legend, there lived a skilled outlaw named Robin Hood. He hid in Sherwood Forest with a group of loyal companions known as the Merry Men. Robin was famous for his remarkable archery skills and fearless personality. According to the stories, he fought against corrupt officials who abused their power and treated ordinary people unfairly. He became known for taking wealth from the rich and helping the poor, making him a symbol of justice and generosity.\n\nRobin Hood's greatest opponent was the Sheriff of Nottingham, a powerful official who was determined to capture him. Robin and his companions, including Little John and Friar Tuck, often used clever strategies and disguises to escape the Sheriff's soldiers. Although the authorities considered Robin a criminal, many ordinary people admired him because he defended the powerless. His adventures were filled with dangerous battles, secret plans, and brave escapes.\n\nThe story of Robin Hood has been passed down through generations in songs, books, plays, and films. Historians are still uncertain whether Robin Hood was a real person or simply a legendary character. Either way, his story continues to fascinate people around the world. Robin Hood represents courage, generosity, and the determination to stand against injustice and protect those in need.",
    "paragraphs": [
      "Long ago in medieval England, according to legend, there lived a skilled outlaw named Robin Hood. He hid in Sherwood Forest with a group of loyal companions known as the Merry Men. Robin was famous for his remarkable archery skills and fearless personality. According to the stories, he fought against corrupt officials who abused their power and treated ordinary people unfairly. He became known for taking wealth from the rich and helping the poor, making him a symbol of justice and generosity.",
      "Robin Hood's greatest opponent was the Sheriff of Nottingham, a powerful official who was determined to capture him. Robin and his companions, including Little John and Friar Tuck, often used clever strategies and disguises to escape the Sheriff's soldiers. Although the authorities considered Robin a criminal, many ordinary people admired him because he defended the powerless. His adventures were filled with dangerous battles, secret plans, and brave escapes.",
      "The story of Robin Hood has been passed down through generations in songs, books, plays, and films. Historians are still uncertain whether Robin Hood was a real person or simply a legendary character. Either way, his story continues to fascinate people around the world. Robin Hood represents courage, generosity, and the determination to stand against injustice and protect those in need."
    ],
    "partA": [
      {
        "question": "Why did Robin Hood fight against corrupt officials?",
        "options": [
          {
            "key": "a",
            "text": "They treated ordinary people unfairly."
          },
          {
            "key": "b",
            "text": "They wanted him to become a soldier."
          },
          {
            "key": "c",
            "text": "They refused to leave the forest."
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: '...he fought against corrupt officials who abused their power and treated ordinary people unfairly.'",
        "ref": "Paragraph 1: 'treated ordinary people unfairly'"
      },
      {
        "question": "How did Robin and the Merry Men often avoid being captured?",
        "options": [
          {
            "key": "a",
            "text": "They traveled to another country."
          },
          {
            "key": "b",
            "text": "They used clever strategies and disguises."
          },
          {
            "key": "c",
            "text": "They hid inside the castle."
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: '...often used clever strategies and disguises to escape the Sheriff's soldiers.'",
        "ref": "Paragraph 2: 'used clever strategies and disguises'"
      },
      {
        "question": "Why did many ordinary people admire Robin Hood?",
        "options": [
          {
            "key": "a",
            "text": "He was extremely wealthy."
          },
          {
            "key": "b",
            "text": "He worked for the authorities."
          },
          {
            "key": "c",
            "text": "He defended the powerless."
          }
        ],
        "answer": "c",
        "explanation": "จากเนื้อเรื่อง: '...many ordinary people admired him because he defended the powerless.' (คนธรรมดายกย่องเขาเพราะเขาคอยปกป้องผู้ไร้อำนาจ)",
        "ref": "Paragraph 2: 'admired him because he defended the powerless'"
      },
      {
        "question": "How has Robin Hood's story continued through generations?",
        "options": [
          {
            "key": "a",
            "text": "Through songs, books, plays, and films"
          },
          {
            "key": "b",
            "text": "Through scientific discoveries"
          },
          {
            "key": "c",
            "text": "Through official government records"
          }
        ],
        "answer": "a",
        "explanation": "จากเนื้อเรื่อง: 'The story of Robin Hood has been passed down through generations in songs, books, plays, and films.'",
        "ref": "Paragraph 3: 'in songs, books, plays, and films'"
      },
      {
        "question": "What does Robin Hood represent in the story?",
        "options": [
          {
            "key": "a",
            "text": "Wealth and success"
          },
          {
            "key": "b",
            "text": "Courage and justice"
          },
          {
            "key": "c",
            "text": "Power and authority"
          }
        ],
        "answer": "b",
        "explanation": "จากเนื้อเรื่อง: 'Robin Hood represents courage, generosity, and the determination to stand against injustice...'",
        "ref": "Paragraph 3: 'represents courage, generosity, and the determination'"
      }
    ],
    "partB": {
      "wordBank": [
        "generations",
        "admired",
        "corrupt",
        "injustice",
        "strategies"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Robin Hood fought against ",
          "suffix": " officials who abused their power.",
          "answer": "corrupt"
        },
        {
          "id": 2,
          "prefix": "He used clever ",
          "suffix": " to escape from the Sheriff's soldiers.",
          "answer": "strategies"
        },
        {
          "id": 3,
          "prefix": "Many ordinary people ",
          "suffix": " Robin for helping the powerless.",
          "answer": "admired"
        },
        {
          "id": 4,
          "prefix": "His story has been passed down through many ",
          "suffix": ".",
          "answer": "generations"
        },
        {
          "id": 5,
          "prefix": "Robin Hood became a symbol of standing against ",
          "suffix": ".",
          "answer": "injustice"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "tokens": [
          "Robin Hood",
          "was known for",
          "his generosity",
          "toward",
          "people in need."
        ],
        "correct": "Robin Hood was known for his generosity toward people in need."
      },
      {
        "id": 2,
        "tokens": [
          "He",
          "refused to accept",
          "unfair treatment",
          "from",
          "bad officials."
        ],
        "correct": "He refused to accept unfair treatment from bad officials."
      },
      {
        "id": 3,
        "tokens": [
          "He",
          "used",
          "clever strategies",
          "to avoid",
          "being captured."
        ],
        "correct": "He used clever strategies to avoid being captured."
      },
      {
        "id": 4,
        "tokens": [
          "Ordinary people",
          "admired him",
          "for",
          "his bravery."
        ],
        "correct": "Ordinary people admired him for his bravery."
      },
      {
        "id": 5,
        "tokens": [
          "His adventures",
          "have inspired",
          "people",
          "for many",
          "generations."
        ],
        "correct": "His adventures have inspired people for many generations."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "Medieval",
          "pos": "adj.",
          "meaning": "ยุคกลาง (ศตวรรษที่ 5-15)",
          "phonetic": "/ˌmed.iˈiː.vəl/"
        },
        {
          "word": "Outlaw",
          "pos": "n.",
          "meaning": "คนนอกกฎหมาย ผู้หลบหนีคดี",
          "phonetic": "/ˈaʊt.lɔː/"
        },
        {
          "word": "Archery",
          "pos": "n.",
          "meaning": "กีฬายิงธนู การยิงธนู",
          "phonetic": "/ˈɑː.tʃər.i/"
        },
        {
          "word": "Corrupt",
          "pos": "adj.",
          "meaning": "ทุจริต ฉ้อราษฎร์บังหลวง",
          "phonetic": "/kəˈrʌpt/"
        },
        {
          "word": "Injustice",
          "pos": "n.",
          "meaning": "ความอยุติธรรม ความไม่เป็นธรรม",
          "phonetic": "/ɪnˈdʒʌs.tɪs/"
        }
      ],
      "grammarTip": {
        "en": "Defining Relative Clauses with 'Who' and 'Which': Use 'who' for people and 'which' for things (e.g., 'officials who abused their power', 'disguises which deceived the soldiers').",
        "th": "ประโยคความซ้อนขยายบุคคลและสิ่งของ: ใช้ 'who' ขยายคำนามที่เป็นคน ('officials who abused their power') และ 'which' หรือ 'that' ขยายสิ่งของ"
      }
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEFAULT_EXERCISES };
} else {
  window.DEFAULT_EXERCISES = DEFAULT_EXERCISES;
}
