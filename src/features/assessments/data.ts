export const particleQuestions = [
  {
    "q": "<ruby>私<rt>わたし</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>パン＿ <ruby>食<rt>た</rt></ruby>べます。",
    "opts": [
      "を",
      "に",
      "で",
      "が"
    ],
    "a": 0,
    "why": "パン is what you eat, so it takes を. に marks a point, で marks where it happens."
  },
  {
    "q": "<ruby>部屋<rt>へや</rt></ruby>＿ ねこがいます。",
    "opts": [
      "を",
      "に",
      "で",
      "と"
    ],
    "a": 1,
    "why": "Something existing somewhere takes に: <ruby>部屋<rt>へや</rt></ruby>にねこがいます. If the cat were doing something, it would be で (へやでねこがねています)."
  },
  {
    "q": "バス＿ <ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。",
    "opts": [
      "に",
      "を",
      "で",
      "から"
    ],
    "a": 2,
    "why": "で marks the means of transport: バスで<ruby>行<rt>い</rt></ruby>きます. The destination already has へ."
  },
  {
    "q": "これは<ruby>先生<rt>せんせい</rt></ruby>＿ <ruby>本<rt>ほん</rt></ruby>です。",
    "opts": [
      "の",
      "に",
      "が",
      "を"
    ],
    "a": 0,
    "why": "の links two nouns — the teacher owns the book: <ruby>先生<rt>せんせい</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>."
  },
  {
    "q": "<ruby>私<rt>わたし</rt></ruby>はねこ＿ <ruby>好<rt>す</rt></ruby>きです。",
    "opts": [
      "を",
      "が",
      "に",
      "で"
    ],
    "a": 1,
    "why": "<ruby>好<rt>す</rt></ruby>き takes が: ねこが<ruby>好<rt>す</rt></ruby>きです. This is the one English speakers get wrong most often."
  },
  {
    "q": "コーヒー＿ こうちゃを<ruby>飲<rt>の</rt></ruby>みます。",
    "opts": [
      "は",
      "も",
      "の",
      "や"
    ],
    "a": 1,
    "why": "“Coffee too” — も replaces は/が/を and means “also”."
  },
  {
    "q": "ぎんこう＿ <ruby>駅<rt>えき</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>きます。",
    "opts": [
      "まで",
      "から",
      "に",
      "で"
    ],
    "a": 1,
    "why": "から is the starting point, and まで the end point: ぎんこうから<ruby>駅<rt>えき</rt></ruby>まで."
  },
  {
    "q": "<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>＿ <ruby>本<rt>ほん</rt></ruby>があります。",
    "opts": [
      "で",
      "に",
      "を",
      "へ"
    ],
    "a": 1,
    "why": "Existence takes に: <ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>があります. で would mean the book is doing something there."
  }
] as const;
export const grammarQuestions = [
  {
    "q": "「<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が降らなかった」と同じ意味の文はどれですか。",
    "opts": [
      "<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>がふりました",
      "<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>がふりませんでした",
      "<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>がふります",
      "<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>がふってください"
    ],
    "a": 1,
    "why": "Negative past: ふります → ふりませんでした. It has the same meaning as 雨が降らなかった."
  },
  {
    "q": "<ruby>明日<rt>あした</rt></ruby> <ruby>六時<rt>ろくじ</rt></ruby>＿ <ruby>起<rt>お</rt></ruby>きます。",
    "opts": [
      "で",
      "に",
      "を",
      "へ"
    ],
    "a": 1,
    "why": "A clock time takes に: 六時に<ruby>起<rt>お</rt></ruby>きます. で marks where an action happens, not when."
  },
  {
    "q": "このかばんは ＿ です。（「<ruby>安<rt>やす</rt></ruby>い」のはんたい）",
    "opts": [
      "<ruby>高<rt>たか</rt></ruby>い",
      "<ruby>高<rt>たか</rt></ruby>く",
      "<ruby>高<rt>たか</rt></ruby>かった",
      "<ruby>高<rt>たか</rt></ruby>くない"
    ],
    "a": 0,
    "why": "Before です an い-adjective stays plain: <ruby>高<rt>たか</rt></ruby>いです. <ruby>高<rt>たか</rt></ruby>く needs ない after it, <ruby>高<rt>たか</rt></ruby>かった is past."
  },
  {
    "q": "<ruby>日本<rt>にほん</rt></ruby>へ ＿ です。",
    "opts": [
      "<ruby>行<rt>い</rt></ruby>きたい",
      "行きますたい",
      "行くたい",
      "行ってたい"
    ],
    "a": 0,
    "why": "Wanting uses the ます-stem + たい: 行きます → 行きたいです. たい never follows the dictionary form."
  },
  {
    "q": "ちょっと ＿ ください。（まつ）",
    "opts": [
      "<ruby>待<rt>ま</rt></ruby>って",
      "<ruby>待<rt>ま</rt></ruby>ちて",
      "<ruby>待<rt>ま</rt></ruby>つて",
      "<ruby>待<rt>ま</rt></ruby>った"
    ],
    "a": 0,
    "why": "つ becomes って in the て-form: 待つ → <ruby>待<rt>ま</rt></ruby>って. Then 〜てください = please do."
  },
  {
    "q": "<ruby>今<rt>いま</rt></ruby>ごはんを ＿ います。（たべる）",
    "opts": [
      "<ruby>食<rt>た</rt></ruby>べて",
      "<ruby>食<rt>た</rt></ruby>べって",
      "<ruby>食<rt>た</rt></ruby>べりて",
      "<ruby>食<rt>た</rt></ruby>べます"
    ],
    "a": 0,
    "why": "A Group 2 る-verb drops る and takes て: 食べて. 〜ています = doing it right now."
  },
  {
    "q": "この<ruby>町<rt>まち</rt></ruby>は ＿ です。（<ruby>静<rt>しず</rt></ruby>か）",
    "opts": [
      "<ruby>静<rt>しず</rt></ruby>か",
      "<ruby>静<rt>しず</rt></ruby>かな",
      "<ruby>静<rt>しず</rt></ruby>かの",
      "<ruby>静<rt>しず</rt></ruby>かだ"
    ],
    "a": 0,
    "why": "な-adjectives drop the な before です: <ruby>静<rt>しず</rt></ruby>かです. The な appears before a noun — <ruby>静<rt>しず</rt></ruby>かな<ruby>町<rt>まち</rt></ruby>."
  },
  {
    "q": "「<ruby>昨日<rt>きのう</rt></ruby>、<ruby>映画<rt>えいが</rt></ruby>を見た」と同じ意味の文はどれですか。",
    "opts": [
      "<ruby>見<rt>み</rt></ruby>ました",
      "<ruby>見<rt>み</rt></ruby>ます",
      "<ruby>見<rt>み</rt></ruby>ませんでした",
      "<ruby>見<rt>み</rt></ruby>て"
    ],
    "a": 0,
    "why": "<ruby>見<rt>み</rt></ruby>ました is the polite past affirmative of 見る, so it matches 映画を見た."
  },
  {
    "q": "「暑いから、いっしょにまどを開けよう」と言いたいです。＿にいちばんいいものをえらんでください。",
    "opts": [
      "<ruby>開<rt>あ</rt></ruby>けましょう",
      "<ruby>開<rt>あ</rt></ruby>けたい",
      "<ruby>開<rt>あ</rt></ruby>けて",
      "<ruby>開<rt>あ</rt></ruby>けません"
    ],
    "a": 0,
    "why": "<ruby>開<rt>あ</rt></ruby>けましょう is a proposal: “Let’s open it.”"
  },
  {
    "q": "「暑いので、うちへ帰ります」と同じ意味の文はどれですか。",
    "opts": [
      "<ruby>暑<rt>あつ</rt></ruby>いから、うちへ<ruby>帰<rt>かえ</rt></ruby>ります",
      "<ruby>暑<rt>あつ</rt></ruby>くから、うちへ<ruby>帰<rt>かえ</rt></ruby>ります",
      "<ruby>暑<rt>あつ</rt></ruby>かったから、うちへ<ruby>帰<rt>かえ</rt></ruby>ります",
      "<ruby>暑<rt>あつ</rt></ruby>くて、うちへ<ruby>帰<rt>かえ</rt></ruby>ります"
    ],
    "a": 0,
    "why": "<ruby>暑<rt>あつ</rt></ruby>いから means “because it is hot.” くて can also express a reason in some contexts, but it does not match this exact から sentence."
  },
  {
    "q": "ここで<ruby>写真<rt>しゃしん</rt></ruby>を ＿ ください。（とる）",
    "opts": [
      "とらなくて",
      "とらないで",
      "とって",
      "とらない"
    ],
    "a": 1,
    "why": "Please don't: ない-form とらない + でください = とらないでください."
  },
  {
    "q": "<ruby>毎日<rt>まいにち</rt></ruby> ＿ なければなりません。（<ruby>勉強<rt>べんきょう</rt></ruby>する）",
    "opts": [
      "勉強する",
      "勉強して",
      "勉強し",
      "勉強しない"
    ],
    "a": 2,
    "why": "する becomes し before なければなりません: 勉強しなければなりません = I have to study."
  },
  {
    "q": "<ruby>明日<rt>あした</rt></ruby>は ＿ いいです。（<ruby>来<rt>く</rt></ruby>る）",
    "opts": [
      "<ruby>来<rt>こ</rt></ruby>なくても",
      "<ruby>来<rt>こ</rt></ruby>ないで",
      "<ruby>来<rt>こ</rt></ruby>なければ",
      "<ruby>来<rt>こ</rt></ruby>なくて"
    ],
    "a": 0,
    "why": "なくてもいい = don't have to. 来る → 来ない → 来なくてもいいです."
  },
  {
    "q": "<ruby>食<rt>た</rt></ruby>べて ＿、<ruby>出<rt>で</rt></ruby>かけます。",
    "opts": [
      "まで",
      "より",
      "から",
      "ほど"
    ],
    "a": 2,
    "why": "て-form + から = after doing: 食べてから、出かけます = after eating, I go out."
  },
  {
    "q": "このかばんは あのかばん ＿ <ruby>高<rt>たか</rt></ruby>いです。",
    "opts": [
      "ほど",
      "くらい",
      "だけ",
      "より"
    ],
    "a": 3,
    "why": "A は B より + adjective = A is more than B: このかばんは あのかばんより高いです."
  },
  {
    "q": "<ruby>公園<rt>こうえん</rt></ruby>に <ruby>子<rt>こ</rt></ruby>どもが ＿。",
    "opts": [
      "あります",
      "います",
      "いきます",
      "します"
    ],
    "a": 1,
    "why": "People and animals take います: 公園に子どもがいます."
  },
  {
    "q": "<ruby>本<rt>ほん</rt></ruby>を <ruby>二<rt>に</rt></ruby> ＿ <ruby>買<rt>か</rt></ruby>いました。",
    "opts": [
      "枚",
      "冊",
      "台",
      "人"
    ],
    "a": 1,
    "why": "Books take 冊: 二冊 にさつ. 枚 is for flat things, 台 for machines, 人 for people."
  }
] as const;
export const levelCheck = {
  "SECTIONS": [
    {
      "key": "reading",
      "jp": "読解",
      "en": "Comprehension"
    },
    {
      "key": "kanji",
      "jp": "漢字",
      "en": "Kanji reading"
    },
    {
      "key": "particles",
      "jp": "助詞",
      "en": "Particles"
    },
    {
      "key": "grammar",
      "jp": "文法",
      "en": "Grammar"
    }
  ],
  "QUESTIONS": [
    {
      "sec": "reading",
      "q": "マイさんはどこから<ruby>来<rt>き</rt></ruby>ましたか。",
      "opts": [
        "<ruby>東京<rt>とうきょう</rt></ruby>",
        "インドネシア",
        "<ruby>上野<rt>うえの</rt></ruby>",
        "インド"
      ],
      "a": 1,
      "why": "「インドネシアから来ました」— the から marks the origin."
    },
    {
      "sec": "reading",
      "q": "<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>日曜日<rt>にちようび</rt></ruby>、だれと<ruby>上野<rt>うえの</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きましたか。",
      "opts": [
        "ひとりで",
        "<ruby>家族<rt>かぞく</rt></ruby>と",
        "アニさんと",
        "<ruby>先生<rt>せんせい</rt></ruby>と"
      ],
      "a": 2,
      "why": "「<ruby>私<rt>わたし</rt></ruby>はアニさんと<ruby>上野<rt>うえの</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました」— と marks the companion."
    },
    {
      "sec": "reading",
      "q": "<ruby>上野<rt>うえの</rt></ruby>まで<ruby>何<rt>なに</rt></ruby>で<ruby>行<rt>い</rt></ruby>きましたか。",
      "opts": [
        "バスで",
        "<ruby>電車<rt>でんしゃ</rt></ruby>で",
        "<ruby>車<rt>くるま</rt></ruby>で",
        "あるいて"
      ],
      "a": 1,
      "why": "「<ruby>電車<rt>でんしゃ</rt></ruby>で三十分ぐらいかかりました」— で marks the means of transport."
    },
    {
      "sec": "reading",
      "q": "マイさんは<ruby>昼<rt>ひる</rt></ruby>ごはんに<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べましたか。",
      "opts": [
        "ラーメン",
        "おすし",
        "天ぷら",
        "カレー"
      ],
      "a": 2,
      "why": "「<ruby>私<rt>わたし</rt></ruby>は天ぷらを<ruby>食<rt>た</rt></ruby>べました」. Ramen was Ani's lunch — an easy trap."
    },
    {
      "sec": "reading",
      "q": "デパートでマイさんは<ruby>何<rt>なに</rt></ruby>を<ruby>買<rt>か</rt></ruby>いましたか。",
      "opts": [
        "<ruby>大<rt>おお</rt></ruby>きいかばん",
        "<ruby>小<rt>ちい</rt></ruby>さいかばん",
        "くつ",
        "何も買いませんでした"
      ],
      "a": 1,
      "why": "「<ruby>私<rt>わたし</rt></ruby>は<ruby>小<rt>ちい</rt></ruby>さいかばんを<ruby>買<rt>か</rt></ruby>いました」. Ani is the one who bought nothing."
    },
    {
      "sec": "reading",
      "q": "そのかばんはいくらでしたか。",
      "opts": [
        "千二百円",
        "三千円",
        "五千円",
        "三百円"
      ],
      "a": 1,
      "why": "1,200 yen was the tempura. The bag was 3,000 yen."
    },
    {
      "sec": "kanji",
      "q": "「日曜日」の<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>はどれですか。",
      "opts": [
        "<ruby>日曜日<rt>にちようび</rt></ruby>",
        "ひようび",
        "にちようひ",
        "じつようび"
      ],
      "a": 0,
      "why": "<ruby>日曜日<rt>にちようび</rt></ruby> = <ruby>日曜日<rt>にちようび</rt></ruby>. Watch the long よう sound."
    },
    {
      "sec": "kanji",
      "q": "「電車」の<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>はどれですか。",
      "opts": [
        "てんしゃ",
        "<ruby>電車<rt>でんしゃ</rt></ruby>",
        "<ruby>電車<rt>でんしゃ</rt></ruby>く",
        "じどうしゃ"
      ],
      "a": 1,
      "why": "<ruby>電車<rt>でんしゃ</rt></ruby> = <ruby>電車<rt>でんしゃ</rt></ruby>. 電 is read でん, not てん."
    },
    {
      "sec": "kanji",
      "q": "「食べました」の<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>はどれですか。",
      "opts": [
        "のべました",
        "くべました",
        "<ruby>食<rt>た</rt></ruby>べました",
        "たべましだ"
      ],
      "a": 2,
      "why": "食べる = たべる → <ruby>食<rt>た</rt></ruby>べました."
    },
    {
      "sec": "kanji",
      "q": "「三千円」の<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>はどれですか。",
      "opts": [
        "さんせんえん",
        "さんぜんえん",
        "みちえん",
        "さんぜんねん"
      ],
      "a": 1,
      "why": "三千 = さんぜん — the 千 becomes voiced (ぜん) after 三."
    },
    {
      "sec": "kanji",
      "q": "「帰りました」の<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>はどれですか。",
      "opts": [
        "<ruby>帰<rt>かえ</rt></ruby>りました",
        "きりました",
        "はしりました",
        "とまりました"
      ],
      "a": 0,
      "why": "帰る = かえる → <ruby>帰<rt>かえ</rt></ruby>りました."
    },
    {
      "sec": "particles",
      "q": "<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby> <ruby>日本語<rt>にほんご</rt></ruby>＿ <ruby>勉強<rt>べんきょう</rt></ruby>します。",
      "opts": [
        "を",
        "に",
        "で",
        "が"
      ],
      "a": 0,
      "why": "<ruby>勉強<rt>べんきょう</rt></ruby>します takes を with its object: <ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します."
    },
    {
      "sec": "particles",
      "q": "<ruby>明日<rt>あした</rt></ruby> <ruby>友<rt>とも</rt></ruby>だち＿ <ruby>会<rt>あ</rt></ruby>います。",
      "opts": [
        "を",
        "に",
        "で",
        "が"
      ],
      "a": 1,
      "why": "あう (to meet) uses に for the person: <ruby>友<rt>とも</rt></ruby>だちに<ruby>会<rt>あ</rt></ruby>います."
    },
    {
      "sec": "particles",
      "q": "<ruby>電車<rt>でんしゃ</rt></ruby>＿ <ruby>東京<rt>とうきょう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。",
      "opts": [
        "に",
        "を",
        "で",
        "へ"
      ],
      "a": 2,
      "why": "で marks the means: <ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます. へ already marks the destination."
    },
    {
      "sec": "particles",
      "q": "この<ruby>本<rt>ほん</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>＿ です。",
      "opts": [
        "の",
        "に",
        "を",
        "で"
      ],
      "a": 0,
      "why": "の replaces the noun: <ruby>私<rt>わたし</rt></ruby>の<ruby>本<rt>ほん</rt></ruby> → <ruby>私<rt>わたし</rt></ruby>のです."
    },
    {
      "sec": "particles",
      "q": "<ruby>私<rt>わたし</rt></ruby>はすし＿ <ruby>好<rt>す</rt></ruby>きです。",
      "opts": [
        "を",
        "に",
        "が",
        "で"
      ],
      "a": 2,
      "why": "<ruby>好<rt>す</rt></ruby>き and きらい take が: すしが<ruby>好<rt>す</rt></ruby>きです."
    },
    {
      "sec": "grammar",
      "q": "「<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>らなかった」と同じ意味の文はどれですか。",
      "opts": [
        "<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>がふりました",
        "<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>がふりませんでした",
        "<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>がふります",
        "<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>がふってください"
      ],
      "a": 1,
      "why": "Past negative of ふります is ふりませんでした — it has the same meaning as 雨が降らなかった."
    },
    {
      "sec": "grammar",
      "q": "<ruby>毎朝<rt>まいあさ</rt></ruby> <ruby>七時<rt>しちじ</rt></ruby>＿ <ruby>起<rt>お</rt></ruby>きます。",
      "opts": [
        "で",
        "を",
        "に",
        "へ"
      ],
      "a": 2,
      "why": "に marks a clock time: 七時に<ruby>起<rt>お</rt></ruby>きます."
    },
    {
      "sec": "grammar",
      "q": "このかばんは ＿ です。（「<ruby>安<rt>やす</rt></ruby>い」のはんたい）",
      "opts": [
        "<ruby>高<rt>たか</rt></ruby>い",
        "<ruby>高<rt>たか</rt></ruby>く",
        "<ruby>高<rt>たか</rt></ruby>かった",
        "<ruby>高<rt>たか</rt></ruby>くない"
      ],
      "a": 0,
      "why": "Before です an い-adjective stays plain: <ruby>高<rt>たか</rt></ruby>いです. <ruby>高<rt>たか</rt></ruby>く needs ない or ありません."
    },
    {
      "sec": "grammar",
      "q": "<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>へ ＿ です。",
      "opts": [
        "行きたい",
        "行きますたい",
        "行くたい",
        "行ってたい"
      ],
      "a": 0,
      "why": "To say \"want to do\", use the ます-stem + たい: 行きます → 行きたいです."
    }
  ]
} as const;
export const secondTest = {
  "MC": [
    {
      "sec": "particles",
      "q": "<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby> <ruby>電車<rt>でんしゃ</rt></ruby>＿ <ruby>会社<rt>かいしゃ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。",
      "en": "I go to the company by train every day.",
      "opts": [
        "で",
        "に",
        "を",
        "へ"
      ],
      "a": 0,
      "why": "で marks the means of transport. に would mark a destination, not the vehicle."
    },
    {
      "sec": "particles",
      "q": "<ruby>昨日<rt>きのう</rt></ruby>ゆうがた<ruby>公園<rt>こうえん</rt></ruby>＿ さんぽしました。",
      "en": "I took a walk in the park yesterday evening.",
      "opts": [
        "で",
        "に",
        "を",
        "が"
      ],
      "a": 2,
      "why": "Movement through a space takes を: <ruby>公園<rt>こうえん</rt></ruby>をさんぽします. This is the second job of を."
    },
    {
      "sec": "particles",
      "q": "<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>＿ <ruby>電話<rt>でんわ</rt></ruby>があります。",
      "en": "There is a phone on the desk.",
      "opts": [
        "で",
        "に",
        "を",
        "へ"
      ],
      "a": 1,
      "why": "Where something exists takes に: <ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>にあります. で would mean an action happens there."
    },
    {
      "sec": "particles",
      "q": "<ruby>先生<rt>せんせい</rt></ruby>＿ しつもんしました。",
      "en": "I asked the teacher a question.",
      "opts": [
        "を",
        "に",
        "で",
        "と"
      ],
      "a": 1,
      "why": "The person you ask, tell, or give to takes に: <ruby>先生<rt>せんせい</rt></ruby>にしつもんしました."
    },
    {
      "sec": "particles",
      "q": "この<ruby>本<rt>ほん</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>＿ です。",
      "en": "This book is mine.",
      "opts": [
        "の",
        "に",
        "が",
        "を"
      ],
      "a": 0,
      "why": "の replaces the noun: <ruby>私<rt>わたし</rt></ruby>の<ruby>本<rt>ほん</rt></ruby> → <ruby>私<rt>わたし</rt></ruby>のです = mine."
    },
    {
      "sec": "particles",
      "q": "コーヒー＿ こうちゃ、どちらがいいですか。",
      "en": "Coffee or tea—which do you prefer?",
      "opts": [
        "と",
        "か",
        "や",
        "も"
      ],
      "a": 1,
      "why": "か between two nouns means “or”: コーヒーかこうちゃ."
    },
    {
      "sec": "particles",
      "q": "ぎんこう＿ <ruby>駅<rt>えき</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>きます。",
      "en": "I walk from the bank to the station.",
      "opts": [
        "まで",
        "から",
        "に",
        "で"
      ],
      "a": 1,
      "why": "から is the starting point and まで the end point: ぎんこうから<ruby>駅<rt>えき</rt></ruby>まで."
    },
    {
      "sec": "particles",
      "q": "<ruby>私<rt>わたし</rt></ruby>はねこ＿ <ruby>好<rt>す</rt></ruby>きです。",
      "en": "I like cats.",
      "opts": [
        "を",
        "が",
        "に",
        "で"
      ],
      "a": 1,
      "why": "<ruby>好<rt>す</rt></ruby>き takes が, not を: ねこが<ruby>好<rt>す</rt></ruby>きです."
    },
    {
      "sec": "particles",
      "q": "パン＿ たまごを<ruby>買<rt>か</rt></ruby>いました。（そのふたつだけ）",
      "en": "I bought bread and eggs (only those two).",
      "opts": [
        "や",
        "と",
        "も",
        "か"
      ],
      "a": 1,
      "why": "と is a complete list — exactly bread and eggs. や would leave room for more."
    },
    {
      "sec": "particles",
      "q": "アニさんは<ruby>学生<rt>がくせい</rt></ruby>です。<ruby>私<rt>わたし</rt></ruby>＿ <ruby>学生<rt>がくせい</rt></ruby>です。",
      "en": "Ani is a student. I am a student too.",
      "opts": [
        "は",
        "が",
        "も",
        "の"
      ],
      "a": 2,
      "why": "“Me too” is も, and it replaces は/が/を rather than stacking on them."
    },
    {
      "sec": "grammar",
      "q": "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>暑<rt>あつ</rt></ruby>かったですが、<ruby>今日<rt>きょう</rt></ruby>は ＿ です。",
      "en": "It was hot yesterday, but today it is not hot.",
      "opts": [
        "<ruby>暑<rt>あつ</rt></ruby>い",
        "<ruby>暑<rt>あつ</rt></ruby>くない",
        "<ruby>暑<rt>あつ</rt></ruby>かった",
        "<ruby>暑<rt>あつ</rt></ruby>くなかった"
      ],
      "a": 1,
      "why": "Today contrasts with yesterday, so present negative: <ruby>暑<rt>あつ</rt></ruby>くないです. い-adjectives drop い and add くない."
    },
    {
      "sec": "grammar",
      "q": "<ruby>毎朝<rt>まいあさ</rt></ruby>六時＿ <ruby>起<rt>お</rt></ruby>きます。",
      "en": "I get up at six every morning.",
      "opts": [
        "で",
        "に",
        "を",
        "が"
      ],
      "a": 1,
      "why": "A clock time takes に: 六時に<ruby>起<rt>お</rt></ruby>きます."
    },
    {
      "sec": "grammar",
      "q": "この<ruby>町<rt>まち</rt></ruby>は ＿ です。",
      "en": "This town is quiet.",
      "opts": [
        "<ruby>静<rt>しず</rt></ruby>か",
        "<ruby>静<rt>しず</rt></ruby>かな",
        "<ruby>静<rt>しず</rt></ruby>かの",
        "<ruby>静<rt>しず</rt></ruby>かだ"
      ],
      "a": 0,
      "why": "な-adjectives drop the な before です: <ruby>静<rt>しず</rt></ruby>かです. The な only appears before a noun."
    },
    {
      "sec": "grammar",
      "q": "いっしょに<ruby>映画<rt>えいが</rt></ruby>を ＿ か。",
      "en": "Would you like to watch a movie together?",
      "opts": [
        "<ruby>見<rt>み</rt></ruby>ましょう",
        "<ruby>見<rt>み</rt></ruby>ません",
        "<ruby>見<rt>み</rt></ruby>ませんか",
        "<ruby>見<rt>み</rt></ruby>たい"
      ],
      "a": 2,
      "why": "〜ませんか is the invitation: “won't you watch with me?”. ましょう is “let's”, which doesn't take か here."
    },
    {
      "sec": "grammar",
      "q": "ちょっと ＿ ください。",
      "en": "Please wait a moment.",
      "opts": [
        "<ruby>待<rt>ま</rt></ruby>って",
        "<ruby>待<rt>ま</rt></ruby>ちて",
        "<ruby>待<rt>ま</rt></ruby>つて",
        "<ruby>待<rt>ま</rt></ruby>った"
      ],
      "a": 0,
      "why": "つ becomes って: 待つ → <ruby>待<rt>ま</rt></ruby>って. Then 〜てください = please do."
    },
    {
      "sec": "grammar",
      "q": "<ruby>今<rt>いま</rt></ruby> <ruby>電話<rt>でんわ</rt></ruby>を ＿ います。",
      "en": "I am making a phone call now.",
      "opts": [
        "かけて",
        "かけって",
        "かけりて",
        "かけます"
      ],
      "a": 0,
      "why": "A る-verb drops る and takes て: かける → かけて. 〜ています = happening now."
    },
    {
      "sec": "grammar",
      "q": "<ruby>明日<rt>あした</rt></ruby> <ruby>日本<rt>にほん</rt></ruby>へ ＿ です。",
      "en": "I want to go to Japan tomorrow.",
      "opts": [
        "<ruby>行<rt>い</rt></ruby>きたい",
        "<ruby>行<rt>い</rt></ruby>きますたい",
        "<ruby>行<rt>い</rt></ruby>くたい",
        "<ruby>行<rt>い</rt></ruby>ってたい"
      ],
      "a": 0,
      "why": "Wanting uses the ます-stem + たい: <ruby>行<rt>い</rt></ruby>きます → <ruby>行<rt>い</rt></ruby>きたいです."
    },
    {
      "sec": "grammar",
      "q": "<ruby>昨日<rt>きのう</rt></ruby> ＿ から、<ruby>今日<rt>きょう</rt></ruby>は<ruby>元気<rt>げんき</rt></ruby>です。",
      "en": "I rested yesterday, so I feel well today.",
      "opts": [
        "<ruby>休<rt>やす</rt></ruby>みました",
        "<ruby>休<rt>やす</rt></ruby>みます",
        "<ruby>休<rt>やす</rt></ruby>んで",
        "<ruby>休<rt>やす</rt></ruby>みません"
      ],
      "a": 0,
      "why": "The reason is in the past: I rested yesterday, so I'm fine today. から takes the plain/polite past here."
    },
    {
      "sec": "grammar",
      "q": "あれは ＿ たてものです。",
      "en": "That is a famous building.",
      "opts": [
        "<ruby>有名<rt>ゆうめい</rt></ruby>な",
        "<ruby>有名<rt>ゆうめい</rt></ruby>",
        "<ruby>有名<rt>ゆうめい</rt></ruby>の",
        "<ruby>有名<rt>ゆうめい</rt></ruby>に"
      ],
      "a": 0,
      "why": "A な-adjective keeps its な before a noun: <ruby>有名<rt>ゆうめい</rt></ruby>なたてもの."
    },
    {
      "sec": "grammar",
      "q": "ごはんを食べて、＿ ねました。",
      "en": "I ate a meal, and then I slept.",
      "opts": [
        "それから",
        "から",
        "が",
        "でも"
      ],
      "a": 0,
      "why": "それから continues the sequence: I ate, and then slept."
    }
  ],
  "WRITE": [
    {
      "sec": "romaji",
      "kind": "romaji",
      "hint": "ローマ字で書いてください。",
      "q": "<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby> <ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。",
      "en": "Write this sentence in romaji.",
      "accept": [
        "watashi wa mainichi nihongo o benkyou shimasu"
      ],
      "model": "watashi wa mainichi nihongo o benkyou shimasu"
    },
    {
      "sec": "romaji",
      "kind": "romaji",
      "hint": "ローマ字で書いてください。",
      "q": "<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>日曜日<rt>にちようび</rt></ruby>に<ruby>友<rt>とも</rt></ruby>だちと<ruby>上野<rt>うえの</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。",
      "en": "Write this sentence in romaji.",
      "accept": [
        "senshuu no nichiyoubi ni tomodachi to ueno e ikimashita",
        "senshuu no nichiyoubi ni tomodachi to ueno he ikimashita"
      ],
      "model": "senshuu no nichiyoubi ni tomodachi to ueno e ikimashita"
    },
    {
      "sec": "romaji",
      "kind": "romaji",
      "hint": "ローマ字で書いてください。",
      "q": "デパートで<ruby>小<rt>ちい</rt></ruby>さいかばんを<ruby>買<rt>か</rt></ruby>いました。",
      "en": "Write this sentence in romaji.",
      "accept": [
        "depaato de chiisai kaban o kaimashita"
      ],
      "model": "depaato de chiisai kaban o kaimashita"
    },
    {
      "sec": "meaning",
      "kind": "meaning",
      "hint": "<ruby>英語<rt>えいご</rt></ruby>で書いてください。",
      "q": "さんぽします",
      "en": "Write the meaning of this word in English.",
      "accept": [
        "take a walk",
        "to take a walk",
        "go for a walk",
        "stroll",
        "walk"
      ],
      "model": "to take a walk"
    },
    {
      "sec": "meaning",
      "kind": "meaning",
      "hint": "<ruby>英語<rt>えいご</rt></ruby>で書いてください。",
      "q": "出かけます",
      "en": "Write the meaning in English.",
      "accept": [
        "go out",
        "to go out",
        "leave",
        "go outside",
        "head out"
      ],
      "model": "to go out"
    },
    {
      "sec": "meaning",
      "kind": "meaning",
      "hint": "<ruby>英語<rt>えいご</rt></ruby>で書いてください。",
      "q": "<ruby>来月<rt>らいげつ</rt></ruby>",
      "en": "Write the meaning of this word in English.",
      "accept": [
        "next month"
      ],
      "model": "next month"
    },
    {
      "sec": "meaning",
      "kind": "meaning",
      "hint": "<ruby>英語<rt>えいご</rt></ruby>で書いてください。",
      "q": "<ruby>楽<rt>たの</rt></ruby>しい",
      "en": "Write the meaning of this word in English.",
      "accept": [
        "fun",
        "enjoyable",
        "happy",
        "pleasant"
      ],
      "model": "fun / enjoyable"
    },
    {
      "sec": "translate",
      "kind": "translate",
      "hint": "日本語で書いてください。",
      "q": "I go to school by train.",
      "en": "Write this sentence in Japanese.",
      "keys": [
        [
          "でんしゃで",
          "電車で"
        ],
        [
          "がっこうに",
          "学校に",
          "がっこうへ",
          "学校へ"
        ],
        [
          "いきます",
          "行きます",
          "いく"
        ]
      ],
      "model": "<ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。"
    },
    {
      "sec": "translate",
      "kind": "translate",
      "hint": "日本語で書いてください。",
      "q": "I ate bread yesterday.",
      "en": "Write this sentence in Japanese.",
      "keys": [
        [
          "きのう",
          "昨日"
        ],
        [
          "ぱんを",
          "パンを"
        ],
        [
          "たべました",
          "食べました"
        ]
      ],
      "model": "<ruby>昨日<rt>きのう</rt></ruby>パンを<ruby>食<rt>た</rt></ruby>べました。"
    },
    {
      "sec": "translate",
      "kind": "translate",
      "hint": "日本語で書いてください。",
      "q": "Please wait a moment.",
      "en": "Write this sentence in Japanese.",
      "keys": [
        [
          "まって",
          "待って"
        ],
        [
          "ください",
          "下さい"
        ]
      ],
      "model": "ちょっと<ruby>待<rt>ま</rt></ruby>ってください。"
    }
  ],
  "SECTIONS": [
    {
      "key": "particles",
      "jp": "助詞",
      "en": "Particles",
      "max": 10
    },
    {
      "key": "grammar",
      "jp": "文法",
      "en": "Grammar",
      "max": 10
    },
    {
      "key": "romaji",
      "jp": "ローマ字",
      "en": "Romaji",
      "max": 3
    },
    {
      "key": "meaning",
      "jp": "意味",
      "en": "Meaning",
      "max": 4
    },
    {
      "key": "translate",
      "jp": "英→日",
      "en": "Writing",
      "max": 3
    }
  ]
} as const;
export const storyQuestions = [
  {
    "section": "Details",
    "type": "choice",
    "q": "リナさんはどこから来ましたか。",
    "options": [
      "大阪",
      "京都",
      "インドネシアのスラバヤ",
      "東京"
    ],
    "answer": 2,
    "why": "The first paragraph says she came from Surabaya, Indonesia."
  },
  {
    "section": "Details",
    "type": "choice",
    "q": "リナさんは今どこに住んでいますか。",
    "options": [
      "京都",
      "大阪",
      "スラバヤ",
      "東京"
    ],
    "answer": 1,
    "why": "She lives in Osaka now."
  },
  {
    "section": "Particles",
    "type": "choice",
    "q": "朝、七時＿ 起きます。",
    "options": [
      "で",
      "に",
      "を",
      "が"
    ],
    "answer": 1,
    "why": "に marks a specific time: seven o’clock."
  },
  {
    "section": "Particles",
    "type": "choice",
    "q": "京都＿ 電車で行きました。",
    "options": [
      "へ",
      "を",
      "が",
      "で"
    ],
    "answer": 0,
    "why": "へ marks the direction/destination of movement."
  },
  {
    "section": "Grammar",
    "type": "choice",
    "q": "ケンさんはどうして昼ごはんを食べませんでしたか。",
    "options": [
      "朝たくさん食べたから",
      "本を買ったから",
      "京都へ行ったから",
      "コーヒーを飲んだから"
    ],
    "answer": 0,
    "why": "から gives the reason: he had eaten a lot in the morning."
  },
  {
    "section": "Details",
    "type": "choice",
    "q": "二人は京都で何をしましたか。",
    "options": [
      "古いおてらを見て、写真をとりました",
      "映画を見ました",
      "本を二冊買いました",
      "うどんを作りました"
    ],
    "answer": 0,
    "why": "They saw an old temple and took a photo in front of it."
  },
  {
    "section": "Details",
    "type": "choice",
    "q": "リナさんが買った二冊の本は何の本ですか。",
    "options": [
      "日本語と料理",
      "日本語と英語",
      "旅行と料理",
      "小説と日本語"
    ],
    "answer": 0,
    "why": "One book was about Japanese and the other about cooking."
  },
  {
    "section": "Details",
    "type": "choice",
    "q": "本は二冊でいくらでしたか。",
    "options": [
      "千八百円",
      "千二百円",
      "三千円",
      "四百円"
    ],
    "answer": 0,
    "why": "The story says the two books cost 1,800 yen."
  },
  {
    "section": "Reading",
    "type": "short",
    "q": "What time did Rina get home?",
    "answer": [
      "six",
      "6",
      "六時",
      "ろくじ"
    ],
    "why": "She got home at 六時 (six o’clock)."
  },
  {
    "section": "Writing",
    "type": "short",
    "q": "Translate into Japanese: “Next week, I want to cook at home.”",
    "answer": [
      "らいしゅうはいえでりょうりをしたいです",
      "来週は家で料理をしたいです",
      "来週家で料理をしたいです",
      "らいしゅういえでりょうりをしたいです"
    ],
    "why": "A model answer is 来週は家で料理をしたいです。"
  }
] as const;
export const kanjiQuestions = [
  {
    "q": "「日曜日」の読み方はどれですか。",
    "opts": [
      "にちようび",
      "ひようび",
      "じつようび",
      "にちようひ"
    ],
    "a": 0,
    "why": "日 is にち here, 曜 is よう, and the last 日 is び: にちようび."
  },
  {
    "q": "「電車」の読み方はどれですか。",
    "opts": [
      "てんしゃ",
      "でんしゃ",
      "じどうしゃ",
      "でんくるま"
    ],
    "a": 1,
    "why": "電 is でん, not てん. 車 is しゃ inside this compound: でんしゃ."
  },
  {
    "q": "「三千円」の読み方はどれですか。",
    "opts": [
      "さんせんえん",
      "さんぜんえん",
      "みちえん",
      "さんぜんねん"
    ],
    "a": 1,
    "why": "千 becomes voiced after 三: 三千 is さんぜん. 円 is えん, so さんぜんえん."
  },
  {
    "q": "「学校」の読み方はどれですか。",
    "opts": [
      "がこう",
      "がっこう",
      "がくこう",
      "がっこ"
    ],
    "a": 1,
    "why": "学 is がく and 校 is こう, but the two く sounds collapse into a small っ: がっこう."
  },
  {
    "q": "「食べました」の「食」の読み方はどれですか。",
    "opts": [
      "た",
      "しょく",
      "じき",
      "く"
    ],
    "a": 0,
    "why": "The okurigana べました tells you to use the kun-yomi た: たべました."
  },
  {
    "q": "「帰ります」の読み方はどれですか。",
    "opts": [
      "きります",
      "かえります",
      "はしります",
      "とまります"
    ],
    "a": 1,
    "why": "帰る is かえる, so the polite form is かえります."
  },
  {
    "q": "「小さい」の読み方はどれですか。",
    "opts": [
      "おおきい",
      "ちいさい",
      "やすい",
      "たかい"
    ],
    "a": 1,
    "why": "小 is ちい in 小さい. 大きい is おおきい, its opposite."
  },
  {
    "q": "「休みました」の読み方はどれですか。",
    "opts": [
      "やすみました",
      "あそびました",
      "はたらきました",
      "ねました"
    ],
    "a": 0,
    "why": "休む is やすむ, so the past polite form is やすみました."
  },
  {
    "q": "「上野」の読み方はどれですか。",
    "opts": [
      "うえの",
      "かみの",
      "じょうの",
      "うわの"
    ],
    "a": 0,
    "why": "上野 is a place name: うえの. 上 is うえ and 野 is の here."
  },
  {
    "q": "「古い」の意味はどれですか。",
    "opts": [
      "new",
      "old",
      "cheap",
      "expensive"
    ],
    "a": 1,
    "why": "古い means old. Its opposite is 新しい (あたらしい), new."
  },
  {
    "q": "「人」の読み方はどれですか。",
    "opts": [
      "にん",
      "ひと",
      "じん",
      "と"
    ],
    "a": 1,
    "why": "人 alone is ひと. にん and じん appear in compounds: 三人 さんにん, 日本人 にほんじん."
  },
  {
    "q": "「父」の読み方はどれですか。",
    "opts": [
      "はは",
      "あに",
      "ちち",
      "おとうさん"
    ],
    "a": 2,
    "why": "父 alone is ちち. おとうさん is the polite word you use when speaking to someone."
  },
  {
    "q": "「前」の読み方はどれですか。",
    "opts": [
      "まえ",
      "うしろ",
      "あと",
      "よこ"
    ],
    "a": 0,
    "why": "前 is まえ (front, before). 後ろ is うしろ, 後 is あと."
  },
  {
    "q": "「聞」の読み方はどれですか。",
    "opts": [
      "み",
      "き",
      "よ",
      "はな"
    ],
    "a": 1,
    "why": "聞く is きく — to listen or to ask. 見る is みる, 読む is よむ, 話す is はなす."
  },
  {
    "q": "「白」の読み方はどれですか。",
    "opts": [
      "くろ",
      "あか",
      "しろ",
      "あお"
    ],
    "a": 2,
    "why": "白 is しろ (white). 黒 is くろ, 赤 is あか, 青 is あお."
  }
] as const;
export const kanaQuestions = [
  {
    "q": "「し」の読み方はどれですか。",
    "opts": [
      "chi",
      "shi",
      "tsu",
      "su"
    ],
    "a": 1,
    "why": "し is shi in Hepburn romanisation — not si."
  },
  {
    "q": "「つ」の読み方はどれですか。",
    "opts": [
      "te",
      "su",
      "tsu",
      "shi"
    ],
    "a": 2,
    "why": "つ is tsu. It is not te or su — the small っ is a different character."
  },
  {
    "q": "「ふ」の読み方はどれですか。",
    "opts": [
      "fu",
      "ha",
      "ho",
      "mu"
    ],
    "a": 0,
    "why": "ふ is fu — the only f-sound in the basic chart."
  },
  {
    "q": "「きゃ」の読み方はどれですか。",
    "opts": [
      "kiya",
      "kyu",
      "kya",
      "kyo"
    ],
    "a": 2,
    "why": "A small ゃ combines with き into one sound: kya, not ki-ya."
  },
  {
    "q": "「がっこう」の「っ」は何をしますか。",
    "opts": [
      "It makes a long vowel.",
      "It doubles the next consonant.",
      "It marks a question.",
      "It marks the topic."
    ],
    "a": 1,
    "why": "Small っ doubles the following consonant: がっこう is gakkou."
  },
  {
    "q": "カタカナの「シ」はどれですか。",
    "opts": [
      "ツ",
      "シ",
      "ソ",
      "ン"
    ],
    "a": 1,
    "why": "シ is shi. Its long stroke runs top-to-bottom, unlike ツ (tsu)."
  },
  {
    "q": "カタカナの「ン」はどれですか。",
    "opts": [
      "ソ",
      "シ",
      "ツ",
      "ン"
    ],
    "a": 3,
    "why": "ン is n. The short stroke sits at the top-left and the long stroke runs down."
  },
  {
    "q": "「コーヒー」の「ー」は何ですか。",
    "opts": [
      "a double consonant",
      "a space",
      "a long vowel",
      "a question mark"
    ],
    "a": 2,
    "why": "ー stretches the vowel before it: コーヒー is kōhī."
  },
  {
    "q": "「ねこ」の意味はどれですか。",
    "opts": [
      "dog",
      "cat",
      "bird",
      "fish"
    ],
    "a": 1,
    "why": "ねこ (neko) is cat. いぬ (inu) is dog."
  },
  {
    "q": "ひらがなはどれですか。",
    "opts": [
      "ア",
      "A",
      "あ",
      "一"
    ],
    "a": 2,
    "why": "あ is hiragana. ア is the katakana for the same sound, and 一 is the kanji for one."
  }
] as const;
