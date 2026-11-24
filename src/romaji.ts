const basic: Record<string, string> = {
  あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
  か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
  が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go',
  さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
  ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo',
  た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
  だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do',
  な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
  ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
  ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po',
  ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yu', よ: 'yo',
  ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
  わ: 'wa', を: 'o', ん: 'n', ゔ: 'vu',
  ぁ: 'a', ぃ: 'i', ぅ: 'u', ぇ: 'e', ぉ: 'o',
}

const digraphs: Record<string, string> = {
  きゃ: 'kya', きゅ: 'kyu', きょ: 'kyo',
  しゃ: 'sha', しゅ: 'shu', しょ: 'sho',
  ちゃ: 'cha', ちゅ: 'chu', ちょ: 'cho',
  にゃ: 'nya', にゅ: 'nyu', にょ: 'nyo',
  ひゃ: 'hya', ひゅ: 'hyu', ひょ: 'hyo',
  みゃ: 'mya', みゅ: 'myu', みょ: 'myo',
  りゃ: 'rya', りゅ: 'ryu', りょ: 'ryo',
  ぎゃ: 'gya', ぎゅ: 'gyu', ぎょ: 'gyo',
  じゃ: 'ja', じゅ: 'ju', じょ: 'jo',
  びゃ: 'bya', びゅ: 'byu', びょ: 'byo',
  ぴゃ: 'pya', ぴゅ: 'pyu', ぴょ: 'pyo',
  てぃ: 'ti', でぃ: 'di', ふぁ: 'fa', ふぃ: 'fi', ふぇ: 'fe', ふぉ: 'fo',
  うぃ: 'wi', うぇ: 'we', うぉ: 'wo',
}

const overrides: Record<string, string> = {
  おはようございます: 'ohayou gozaimasu',
  こんにちは: 'konnichiwa',
  こんばんは: 'konbanwa',
  おやすみなさい: 'oyasuminasai',
  さようなら: 'sayounara',
  ありがとう: 'arigatou',
  ありがとうございます: 'arigatou gozaimasu',
  どういたしまして: 'dou itashimashite',
  すみません: 'sumimasen',
  ごめんなさい: 'gomennasai',
  はい: 'hai',
  いいえ: 'iie',
  おねがいします: 'onegai shimasu',
  よろしくおねがいします: 'yoroshiku onegai shimasu',
  いただきます: 'itadakimasu',
  ごちそうさまでした: 'gochisousama deshita',
  いってきます: 'ittekimasu',
  いってらっしゃい: 'itterasshai',
  ただいま: 'tadaima',
  おかえりなさい: 'okaerinasai',
  しつれいします: 'shitsurei shimasu',
  おげんきですか: 'ogenki desu ka',
  げんきです: 'genki desu',
  はじめまして: 'hajimemashite',
  おつかれさまです: 'otsukaresama desu',
}

const vowels = 'aiueo'

export function toRomaji(kana: string): string {
  if (overrides[kana]) return overrides[kana]
  const hira = kana.replace(/[\u30a1-\u30f6]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60))
  let out = ''
  let double = false
  for (let i = 0; i < hira.length; i++) {
    const ch = hira[i]
    if (ch === 'っ') { double = true; continue }
    if (ch === 'ー') {
      const last = [...out].reverse().find(c => vowels.includes(c))
      out += last ?? ''
      continue
    }
    if (ch === 'ん') {
      const next = hira[i + 1]
      out += next && (vowels.includes(next) || 'やゆよ'.includes(next)) ? "n'" : 'n'
      continue
    }
    const pair = hira.slice(i, i + 2)
    let syllable: string
    if (digraphs[pair]) { syllable = digraphs[pair]; i++ }
    else if (basic[ch]) syllable = basic[ch]
    else syllable = ch
    if (double) {
      const first = syllable[0]
      if (first && !vowels.includes(first)) syllable = (syllable.startsWith('ch') ? 't' : first) + syllable
      double = false
    }
    out += syllable
  }
  return out
}
