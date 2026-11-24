export type UnitQuizItem = { q: string; opts: string[]; a: number; why: string }

export const unitQuizzes: Record<string, UnitQuizItem[]> = {
  foundations: [
    { q: '「し」の読み方はどれですか。', opts: ['chi', 'shi', 'tsu', 'su'], a: 1, why: 'し is shi in Hepburn romanisation — not si.' },
    { q: '「おはようございます」の意味はどれですか。', opts: ['good evening', 'good morning', 'good night', 'goodbye'], a: 1, why: 'おはようございます is the morning greeting.' },
    { q: '「ありがとうございます」の意味はどれですか。', opts: ['excuse me', 'thank you', 'good night', 'hello'], a: 1, why: 'ありがとうございます is “thank you”.' },
  ],
  introductions: [
    { q: 'わたし＿ 学生です。', opts: ['を', 'は', 'に', 'で'], a: 1, why: 'は marks the topic: わたしは学生です.' },
    { q: 'これは わたし＿ 本です。', opts: ['の', 'も', 'が', 'を'], a: 0, why: 'の links two nouns: わたしの本 = my book.' },
    { q: 'アニさんは学生です。わたし＿ 学生です。', opts: ['は', 'が', 'を', 'も'], a: 3, why: 'も means “also” and replaces は: わたしも学生です.' },
  ],
  routines: [
    { q: '毎朝 七時＿ 起きます。', opts: ['で', 'に', 'を', 'へ'], a: 1, why: 'A clock time takes に: 七時に起きます.' },
    { q: '昨日、勉強＿。', opts: ['します', 'しました', 'しません', 'しましょう'], a: 1, why: 'Past polite: 勉強しました.' },
    { q: '今日は 勉強＿。', opts: ['しました', 'しません', 'しますか', 'しましょう'], a: 1, why: 'Negative polite: 勉強しません.' },
  ],
  movement: [
    { q: '学校＿ 行きます。', opts: ['で', 'を', 'に', 'と'], a: 2, why: 'に marks the destination: 学校に行きます.' },
    { q: '電車＿ 行きます。', opts: ['に', 'で', 'を', 'へ'], a: 1, why: 'で marks the means: 電車で行きます.' },
    { q: '公園＿ 休みます。', opts: ['に', 'へ', 'で', 'を'], a: 2, why: 'で marks where the action happens: 公園で休みます.' },
  ],
  food: [
    { q: 'パン＿ 食べます。', opts: ['が', 'を', 'に', 'で'], a: 1, why: 'を marks the object: パンを食べます.' },
    { q: 'すし＿ 好きです。', opts: ['を', 'に', 'が', 'で'], a: 2, why: '好き takes が: すしが好きです.' },
    { q: 'りんごを 二＿ 買いました。', opts: ['つ', '人', '冊', '台'], a: 0, why: 'General things take つ: 二つ (ふたつ).' },
  ],
  plans: [
    { q: 'アニさん＿ 行きます。', opts: ['と', 'を', 'に', 'で'], a: 0, why: 'と marks the companion: アニさんと行きます.' },
    { q: 'いっしょに 行き＿。（Won’t you come with me?）', opts: ['ました', 'ませんか', 'たいです', 'ましょう'], a: 1, why: '〜ませんか is the invitation.' },
    { q: '日本へ 行き＿ です。', opts: ['たい', 'ましょう', 'ません', 'ました'], a: 0, why: 'ます-stem + たい = want to: 行きたいです.' },
  ],
  experiences: [
    { q: '昨日、映画を ＿。', opts: ['見ます', '見ました', '見ません', '見たい'], a: 1, why: 'Past polite: 見ました.' },
    { q: '朝ごはんを 食べ＿、出かけます。', opts: ['て', 'た', 'ない', 'ます'], a: 0, why: 'The て-form links the steps: 食べて、出かけます.' },
    { q: '寒い＿、まどを閉めます。', opts: ['まで', 'から', 'より', 'ほど'], a: 1, why: 'から gives the reason: 寒いから.' },
  ],
  descriptions: [
    { q: 'この町は ＿ です。', opts: ['静かな', '静か', '静かの', '静かだ'], a: 1, why: 'な-adjectives drop な before です: 静かです.' },
    { q: '公園に 子どもが ＿。', opts: ['あります', 'います', 'いきます', 'します'], a: 1, why: 'People take います: 子どもがいます.' },
    { q: 'このかばんは あのかばん ＿ 高いです。', opts: ['ほど', 'より', 'くらい', 'だけ'], a: 1, why: 'A は B より = more than: あのかばんより高い.' },
  ],
  kanji: [
    { q: '「電車」の読み方はどれですか。', opts: ['てんしゃ', 'でんしゃ', 'じどうしゃ', 'でんくるま'], a: 1, why: '電 is でん: でんしゃ.' },
    { q: '「学校」の読み方はどれですか。', opts: ['がこう', 'がっこう', 'がくこう', 'がっこ'], a: 1, why: 'がく + こう collapses to がっこう.' },
    { q: '「三千円」の読み方はどれですか。', opts: ['さんせんえん', 'さんぜんえん', 'みちえん', 'さんぜんねん'], a: 1, why: '千 voices after 三: さんぜんえん.' },
  ],
  'n5-review': [
    { q: 'ここで写真を ＿ ください。', opts: ['とらないで', 'とって', 'とらない', 'とらなくて'], a: 0, why: 'ない-form + でください = please don’t: とらないでください.' },
    { q: 'このかばんは あのかばん ＿ 高いです。', opts: ['より', 'ほど', 'くらい', 'だけ'], a: 0, why: 'A は B より = more than: あのかばんより高い.' },
    { q: '本を 二 ＿ 買いました。', opts: ['冊', '枚', '台', '人'], a: 0, why: 'Books take 冊: 二冊 (にさつ).' },
  ],
}
