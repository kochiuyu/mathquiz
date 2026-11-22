((r)=>{const d={
  "sessions": [
    [
      "number",
      "Represent numbers",
      "表示數"
    ],
    [
      "calculate",
      "Choose and calculate",
      "選擇及計算"
    ],
    [
      "groups",
      "Groups and leftovers",
      "分組與餘下"
    ],
    [
      "money",
      "Pay and check",
      "付款及核對"
    ],
    [
      "measure",
      "Measure and plan time",
      "量度及計劃時間"
    ],
    [
      "shape",
      "Shapes and positions",
      "圖形與方位"
    ],
    [
      "data",
      "Read and question data",
      "讀取及質疑數據"
    ]
  ],
  "items": [
    {
      "id": "n1",
      "session": "number",
      "prompt": [
        "A parcel code has 4 thousands, no hundreds, 2 tens and 6 ones. A printer drops every zero and prints 426. Write the correct code. Explain the missing place.",
        "包裹編號有4個千、沒有百、2個十和6個一。打印機刪去所有零，印成426。寫出正確編號，並解釋缺少的數位。"
      ],
      "answer": "4026",
      "feedback": [
        "4026 keeps a zero in the hundreds place; 426 has only three places.",
        "4026的百位保留零；426只有三個數位。"
      ],
      "path": "thousands",
      "lesson": "p2-readfour",
      "options": null
    },
    {
      "id": "n2",
      "session": "number",
      "prompt": [
        "A counter shows 985. It moves forward ten on each press. After two presses, what should it show? Explain how you cross 1000.",
        "計數器顯示985，每按一次增加十。按兩次後應顯示甚麼？解釋怎樣跨過1000。"
      ],
      "answer": "1005",
      "feedback": [
        "985 → 995 → 1005. Exchange ten hundreds for one thousand.",
        "985 → 995 → 1005；十個百換成一個千。"
      ],
      "path": "thousands",
      "lesson": "p2-crossfour",
      "options": null
    },
    {
      "id": "c1",
      "session": "calculate",
      "prompt": [
        "A repair shelf starts with 73 lamps. After two collections it holds 29. The first collection took 28. How many did the second collection take? Choose a calculation and explain how you checked it.",
        "維修架原有73盞燈，兩次取走後剩29盞，第一次取走28盞。第二次取走多少盞？選算式並解釋核對方法。"
      ],
      "answer": "16",
      "feedback": [
        "73 − 28 = 45; 45 − 29 = 16 lamps in the second collection. Check: 29 + 28 + 16 = 73.",
        "73 − 28 = 45；45 − 29 = 16盞為第二次取走數。核對：29 + 28 + 16 = 73。"
      ],
      "path": "arithmetic",
      "lesson": "p2-substeps",
      "options": null
    },
    {
      "id": "c2",
      "session": "calculate",
      "prompt": [
        "In 61 − 34, a pupil rewrites 61 as 5 tens and 1 one to subtract the ones. Is that exchange correct? Explain or repair it with a drawing.",
        "計算61 − 34時，同學把61改寫成5個十和1個一，準備減個位。這次換算正確嗎？用圖解釋或改正。"
      ],
      "answer": "no",
      "feedback": [
        "No: 61 becomes 5 tens and 11 ones, still 61. The answer is 27.",
        "不正確：61換成5個十和11個一，總數仍是61，答案是27。"
      ],
      "path": "arithmetic",
      "lesson": "p2-borrow",
      "options": [
        [
          "yes",
          "Yes",
          "正確"
        ],
        [
          "no",
          "No",
          "不正確"
        ]
      ]
    },
    {
      "id": "g1",
      "session": "groups",
      "prompt": [
        "A display has 7 equal rows of 8 postcards. One whole row is removed. How many postcards remain? Explain a method without counting every card.",
        "展板有7行明信片，每行8張，移走整行。還有多少張？解釋不用逐張數的方法。"
      ],
      "answer": "48",
      "feedback": [
        "Six rows remain: 6 × 8 = 48, or 56 − 8 = 48.",
        "剩下6行：6 × 8 = 48，或56 − 8 = 48。"
      ],
      "path": "facts",
      "lesson": "p2-factuse",
      "options": null
    },
    {
      "id": "g2",
      "session": "groups",
      "prompt": [
        "29 badges are shared into welcome packs of 4. A helper has made 6 packs and left 5 badges loose. How many complete packs can actually be made? Explain how to repair the helper’s work.",
        "29個徽章分裝迎新包，每包4個。助手裝了6包，剩5個散放。實際最多可裝多少個完整包？解釋怎樣修正助手的工作。"
      ],
      "answer": "7",
      "feedback": [
        "7 complete packs use 28 badges; 1 badge remains and cannot make another complete pack.",
        "7個完整包用28個徽章，餘下1個，不能再做一個完整包。"
      ],
      "path": "division",
      "lesson": "p2-divstories",
      "options": null
    },
    {
      "id": "m1",
      "session": "money",
      "prompt": [
        "A stall price is $36 and 70 cents. You give $50. How many cents are in the change altogether? Choose a method and explain the dollar exchange.",
        "攤位標價36元7角，付50元。找回的錢合共是多少仙？自行選方法並解釋元的換算。"
      ],
      "answer": "1330",
      "feedback": [
        "Change is $13 and 30 cents = 1330 cents. One dollar exchanges for 100 cents.",
        "找回13元3角，即1330仙；1元換100仙。"
      ],
      "path": "change",
      "lesson": "p2-moneychange",
      "options": null
    },
    {
      "id": "m2",
      "session": "money",
      "prompt": [
        "Wallet A has two $100 notes. Wallet B has four $50 notes. Which wallet has the greater value? Explain why counting only the notes could mislead someone.",
        "甲錢包有兩張100元紙幣，乙有四張50元紙幣。哪個總值較大？解釋為何只數紙幣張數會使人判斷錯誤。"
      ],
      "answer": "same",
      "feedback": [
        "Both have $200: 2 × $100 = 4 × $50. Real note recognition needs a separate observation.",
        "兩者都是200元：2 × 100元 = 4 × 50元。認讀真實紙幣須另作觀察。"
      ],
      "path": "money",
      "lesson": "p2-notes",
      "options": [
        [
          "a",
          "Wallet A",
          "甲"
        ],
        [
          "b",
          "Wallet B",
          "乙"
        ],
        [
          "same",
          "Same value",
          "總值相同"
        ]
      ]
    },
    {
      "id": "t1",
      "session": "measure",
      "prompt": [
        "A rope must reach a hook 2 m 35 cm away. Its measured length is 228 cm. How many more centimetres are needed? Sketch and explain your comparison.",
        "掛鈎相距2米35厘米，繩長量得228厘米。繩還差多少厘米？畫圖解釋比較方法。"
      ],
      "answer": "7",
      "feedback": [
        "2 m 35 cm = 235 cm; 235 − 228 = 7 cm. Measuring the actual rope remains a practical task.",
        "2米35厘米 = 235厘米；235 − 228 = 7厘米。實際量繩仍須實作。"
      ],
      "path": "metres",
      "lesson": "p2-metrescm",
      "options": null
    },
    {
      "id": "t2",
      "session": "measure",
      "prompt": [
        "A recording must finish by 11:10 a.m. It starts at 10:47 a.m. and needs 26 minutes. Will it finish in time? Show the finish time and explain your decision.",
        "錄音必須在上午11:10或之前完成。上午10:47開始，需要26分鐘。能及時完成嗎？寫出結束時刻並解釋決定。"
      ],
      "answer": "no",
      "feedback": [
        "No: 13 minutes reach 11:00 and 13 more reach 11:13 a.m., three minutes after the deadline.",
        "不能：先過13分鐘到11:00，再過13分鐘到上午11:13，比限時遲3分鐘。"
      ],
      "path": "minutes",
      "lesson": "p2-finishingtime",
      "options": [
        [
          "yes",
          "Yes",
          "能"
        ],
        [
          "no",
          "No",
          "不能"
        ]
      ]
    },
    {
      "id": "s1",
      "session": "shape",
      "prompt": [
        "A card has four straight sides and four right angles. Its sides, in order, measure 6 cm, 3 cm, 6 cm, 3 cm. Is it a square or a rectangle? Explain which information decides.",
        "卡片有四條直邊及四個直角，各邊依次長6、3、6、3厘米。它是正方形還是長方形？解釋判斷所用資料。"
      ],
      "answer": "rectangle",
      "feedback": [
        "Rectangle: four right angles and equal opposite sides; all four sides are not equal. Check real angles with a set square.",
        "長方形：四個直角、對邊等長，但四邊不全等長。實物的角要用三角尺檢查。"
      ],
      "path": "quads",
      "lesson": "p2-rectangle",
      "options": [
        [
          "square",
          "Square",
          "正方形"
        ],
        [
          "rectangle",
          "Rectangle",
          "長方形"
        ]
      ]
    },
    {
      "id": "s2",
      "session": "shape",
      "prompt": [
        "On a map, north points toward the bottom of the page. The library lies directly east of the pond. Which page edge is the library toward from the pond? Draw a compass cross first.",
        "地圖的北方指向紙張下方，圖書館在池塘正東方。從池塘看，圖書館在紙張哪一邊？先畫方向十字。"
      ],
      "answer": "left",
      "feedback": [
        "With north downward, east is left on the page. Page-up does not always mean north.",
        "北方向下時，東方在紙張左邊；紙張上方不一定是北方。"
      ],
      "path": "directions",
      "lesson": "p2-northarrow",
      "options": [
        [
          "left",
          "Left",
          "左邊"
        ],
        [
          "right",
          "Right",
          "右邊"
        ],
        [
          "top",
          "Top",
          "上方"
        ],
        [
          "bottom",
          "Bottom",
          "下方"
        ]
      ]
    },
    {
      "id": "d1",
      "session": "data",
      "prompt": [
        "Each ● represents one pupil. Walk: ●●●●●●; Bus: ●●●●; Cycle: ●●●. A pupil says 3 more walk than cycle. Is the statement supported? Explain using the key.",
        "每個●代表一位學生。步行：●●●●●●；巴士：●●●●；單車：●●●。同學說步行比騎單車多3人。圖表支持這說法嗎？用圖例解釋。"
      ],
      "answer": "yes",
      "feedback": [
        "Yes: 6 − 3 = 3 pupils. The key tells us each symbol is one pupil.",
        "支持：6 − 3 = 3人；圖例指每個符號代表一人。"
      ],
      "path": "pictograms",
      "lesson": "p2-readrows",
      "options": [
        [
          "yes",
          "Yes",
          "支持"
        ],
        [
          "no",
          "No",
          "不支持"
        ]
      ]
    },
    {
      "id": "d2",
      "session": "data",
      "prompt": [
        "A club records favourite games. Its chart has 4 symbols for chess and 2 for tag, but no key. Can we be sure that exactly 2 more children chose chess? Explain what must be added.",
        "小組記錄最喜愛的遊戲：棋類4個符號、捉人2個符號，但沒有圖例。能肯定多2位小朋友選棋類嗎？解釋要補甚麼。"
      ],
      "answer": "no",
      "feedback": [
        "No: we need the key. If each symbol is one child, the difference is 2; without it we cannot be sure.",
        "不能：要有圖例。如每個符號代表一人，相差2人；沒有圖例不能肯定。"
      ],
      "path": "pictograms",
      "lesson": "p2-buildcharts",
      "options": [
        [
          "yes",
          "Yes",
          "能"
        ],
        [
          "no",
          "No",
          "不能"
        ]
      ]
    }
  ],
  "stations": [
    [
      "number",
      "Number sense",
      "數感",
      "Use unseen dictated numbers to 9999. Ask the pupil to read, build and exchange units, then count real equal groups across a boundary. Record the exact numbers and words.",
      "用未見過的9999以內數作聽寫，請學生讀數、組數及換算單位，再數實物等量組並跨過數位界線。記錄實際數及原話。",
      "numbers"
    ],
    [
      "calculate",
      "Written calculations",
      "筆算",
      "Give a new story without naming the operation. Ask for self-written columns, a drawing of conserved exchanges and an explanation with units. Keep the paper and record any prompts.",
      "給新情境但不指明運算，請學生自行列直式、畫保持總值的換算圖，並用單位解釋。保留紙本，記下提示。",
      "arithmetic"
    ],
    [
      "groups",
      "Groups and facts",
      "分組與乘除",
      "Provide counters and an unseen grouping problem. Ask the pupil to make equal groups, distinguish number and size of groups, explain selected facts and interpret leftovers. Also try one group and zero groups.",
      "提供籌碼及未見過的分組題，請學生作等量分組、分辨組數與每組數量、解釋所選乘法算式及餘數，再試一組和零組。",
      "division"
    ],
    [
      "money",
      "Real money",
      "真實貨幣",
      "With an adult, use authentic notes or official images. Identify values and issuers, count each piece once, and explain exchanges within the lesson’s permitted sets. Give a fresh payment, recording all denominations.",
      "成人陪同使用真實紙幣或官方圖像，認讀幣值及發鈔機構、每張只數一次，按課節容許組合換鈔。給新付款任務並記錄面額。",
      "money"
    ],
    [
      "measure",
      "Tools, time and calendar",
      "工具、時間與月曆",
      "Choose and use a real length tool. Measure a personal reference, estimate a new length before measuring, and record both. Time an actual whole-minute activity. Use a 2028 calendar to sort all month lengths (including 29); solve a fresh inclusive event-date problem.",
      "選用實際量度工具，量個人參照長度，先估新長度才量，兩者都記錄。計時一項整分鐘活動。用2028月曆分類各月日數（包括29日），再解新活動日期題，清楚說明首尾日計算。",
      "calendar"
    ],
    [
      "shape",
      "Models and drawing",
      "模型與繪圖",
      "Use unlabelled solids to identify chosen bases and faces. Use a set square to construct perpendiculars through a point on a line and a point off it. Draw/make and repair a square or rectangle. Keep drawings and the pupil’s explanation.",
      "用無標示立體辨認所選底面與其他面；用三角尺分別過線上及線外一點作垂線。畫、製作及修正正方形或長方形，保留圖及學生解釋。",
      "angles"
    ],
    [
      "data",
      "Direction and new data",
      "方向與新數據",
      "Orient a real compass and walk a short safe route with an adult. Collect and sort new class data. Make both horizontal and vertical one-to-one pictograms with a title, labels and key chosen by the pupil.",
      "與成人用真實指南針定向，走短而安全路線。收集及分類新的班級數據，學生自訂標題、標示及圖例，製作橫向及直向一對一象形圖。",
      "pictograms"
    ],
    [
      "inquiry",
      "Investigation evidence",
      "探究證據",
      "Choose a question and retain the first prediction on paper before trials. Record pupil choices, actual trials, an explanation and a response to evidence that disagrees. Use a related investigation as support; record that help.",
      "選問題並在試驗前於紙上保留首次預測，記學生選擇、實際試驗、解釋及如何回應不符預測的證據。可用相關探究作支援，記下所用協助。",
      "numbers"
    ]
  ]
};r.MathQuizP2ReviewData=d;if(typeof module!=='undefined')module.exports=d;})(typeof window!=='undefined'?window:globalThis);
