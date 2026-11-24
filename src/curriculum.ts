export type LessonStatus = 'locked' | 'available' | 'in-progress' | 'mastered' | 'review-due'

export type PracticeLink = { path: string; hash?: string; label: string }

export type CurriculumLesson = {
  id: string
  unit: number
  title: string
  titleJa: string
  canDo: string
  outcome: string
  prerequisites: string[]
  practice?: PracticeLink[]
  estimatedMinutes: number
}

export const curriculum: CurriculumLesson[] = [
  {
    id: 'foundations', unit: 0, title: 'Japanese foundations', titleJa: '日本語の土台',
    canDo: 'I can read and write basic hiragana and katakana, and introduce myself with a short prepared sentence.',
    outcome: 'Kana, greetings, self-introduction', prerequisites: [], practice: [{ path: '/kana', hash: 'kana-hiragana', label: 'Kana chart & practice' }, { path: '/vocab', label: 'Vocabulary list' }], estimatedMinutes: 90,
  },
  {
    id: 'introductions', unit: 1, title: 'Introductions and people', titleJa: '自己紹介と人',
    canDo: 'I can give basic personal information and say where I am from.',
    outcome: 'です・ます, は, の, も, countries and people', prerequisites: ['foundations'], practice: [{ path: '/', label: 'Level check story' }, { path: '/particles', hash: 'p-wa', label: 'Particles: は・の・も' }], estimatedMinutes: 75,
  },
  {
    id: 'routines', unit: 2, title: 'Routines and time', titleJa: '毎日と時間',
    canDo: 'I can say when I do everyday activities and describe a simple routine.',
    outcome: 'time expressions, verbs in ます-form, に', prerequisites: ['introductions'], practice: [{ path: '/kanji', hash: 'kanji-time', label: 'Kanji: time & verbs' }, { path: '/grammar', hash: 'verbs', label: 'Grammar: ます-form' }, { path: '/particles', hash: 'p-ni', label: 'Particles: に' }], estimatedMinutes: 75,
  },
  {
    id: 'movement', unit: 3, title: 'Places and movement', titleJa: '場所と移動',
    canDo: 'I can say where I go, how I travel, and where an activity happens.',
    outcome: 'に, へ, で, transport and places', prerequisites: ['routines'], practice: [{ path: '/particles', hash: 'p-ni', label: 'Particles: に・へ・で' }, { path: '/kanji', hash: 'kanji-places', label: 'Kanji: places' }], estimatedMinutes: 90,
  },
  {
    id: 'food', unit: 4, title: 'Food and shopping', titleJa: '食べ物と買い物',
    canDo: 'I can order or describe a simple meal and say what I bought.',
    outcome: 'を, counters, likes, past polite form', prerequisites: ['movement'], practice: [{ path: '/', label: 'Level check story' }, { path: '/kanji', hash: 'kanji-numbers', label: 'Kanji: numbers & money' }, { path: '/particles', hash: 'p-wo', label: 'Particles: を' }], estimatedMinutes: 90,
  },
  {
    id: 'plans', unit: 5, title: 'Friends and plans', titleJa: '友だちと予定',
    canDo: 'I can invite someone, accept or decline simply, and say what I want to do.',
    outcome: 'と, 〜ませんか, 〜ましょう, 〜たい', prerequisites: ['food'], practice: [{ path: '/grammar', hash: 'tai', label: 'Grammar: たい・ましょう' }, { path: '/particles', hash: 'p-to', label: 'Particles: と' }], estimatedMinutes: 75,
  },
  {
    id: 'experiences', unit: 6, title: 'Past experiences', titleJa: '昨日のこと',
    canDo: 'I can tell a short sequence of things I did and give a simple reason.',
    outcome: 'past forms, て-form, から, それから', prerequisites: ['plans'], practice: [{ path: '/story', label: 'Story diagnostic' }, { path: '/kanji', hash: 'kanji-verbs', label: 'Kanji: verbs' }, { path: '/grammar', hash: 'te-form', label: 'Grammar: て-form・から' }], estimatedMinutes: 90,
  },
  {
    id: 'descriptions', unit: 7, title: 'Descriptions and preferences', titleJa: '説明と好み',
    canDo: 'I can describe a place or thing and state a simple preference.',
    outcome: 'い/な adjectives, あります・います, comparison foundations', prerequisites: ['experiences'], practice: [{ path: '/grammar', hash: 'adjectives', label: 'Grammar: adjectives' }, { path: '/kanji', hash: 'kanji-adjectives', label: 'Kanji: adjectives' }], estimatedMinutes: 75,
  },
  {
    id: 'kanji', unit: 8, title: 'Kanji readings', titleJa: '漢字の読み方',
    canDo: 'I can read the N5 kanji used for numbers, dates, places and everyday verbs.',
    outcome: 'on-yomi and kun-yomi, numbers, days, places, verbs, adjectives', prerequisites: ['descriptions'], practice: [{ path: '/kanji', hash: 'kanji-numbers', label: 'Kanji readings' }, { path: '/story', label: 'Story: read in context' }], estimatedMinutes: 90,
  },
  {
    id: 'n5-review', unit: 9, title: 'N5 consolidation', titleJa: 'N5 総復習',
    canDo: 'I can read a short familiar-topic text and use basic N5 forms in a guided task.',
    outcome: 'retrieval practice, reading, written output and reflection', prerequisites: ['kanji'], practice: [{ path: '/quiz', label: '実力テスト ２' }, { path: '/', label: 'Re-take the level check' }, { path: '/vocab', label: 'Vocabulary list' }], estimatedMinutes: 90,
  },
]

export const curriculumPrinciples = [
  'Every unit starts with a practical Can-do, not a grammar checklist.',
  'A lesson moves from understandable input to noticing, retrieval, feedback, and a small output task.',
  'A check is evidence, not a verdict: revisit a unit when recall is not yet reliable.',
]
