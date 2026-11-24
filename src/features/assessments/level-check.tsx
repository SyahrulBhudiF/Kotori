import { createContext, useContext, useState } from 'react'
import type { MDXContent } from 'mdx/types'
import { levelCheck } from './data'
import { ChoiceTestCard, ProgressDock, ResultHeader } from './components'

const CheckContext = createContext<ReturnType<typeof useCheck> | null>(null)
function useCheck() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [graded, setGraded] = useState(false)
  const score = Object.entries(answers).filter(([index, answer]) => Number(answer) === levelCheck.QUESTIONS[Number(index)].a).length
  const reset = () => { setAnswers({}); setGraded(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return { answers, setAnswers, graded, setGraded, score, reset }
}
function context() { const value = useContext(CheckContext); if (!value) throw new Error('Level check must be inside its provider'); return value }

export function LevelCheck({ Content }: { Content: MDXContent }) {
  const value = useCheck()
  return <CheckContext.Provider value={value}><Content components={{ LevelQuestions, LevelResult, LevelDock, StoryPanels }} /></CheckContext.Provider>
}

function LevelQuestions({ section }: { section: string }) {
  const { answers, setAnswers, graded } = context()
  const questions = levelCheck.QUESTIONS.map((question, index) => ({ question, index })).filter(({ question }) => question.sec === section)
  return <div className="q-list">{questions.map(({ question, index }, order) => <ChoiceTestCard key={question.q} number={order + 1} question={question} selected={answers[index]} graded={graded} onChoose={(answer) => setAnswers((current) => ({ ...current, [index]: answer }))} />)}</div>
}

type SectionScore = { key: string; jp: string; en: string; hit: number; total: number }
type LevelBand = { en: string; jp: string; desc: string; steps: string[]; review?: { href: string; label: string } }

const gapBands: Record<string, LevelBand> = {
  reading: { en: 'N5 — reading is the gap', jp: '読解がまだあいまい', desc: 'Kanji and particles held up; reading comprehension is what to fix next.', steps: ['Re-read 私の日曜日 without the translation.', 'Read one short N5 story a day.', 'Re-take this check in a week.'], review: { href: '/story', label: 'Read another N5 story →' } },
  kanji: { en: 'N5 — kanji reading is the gap', jp: '漢字がまだあいまい', desc: 'Comprehension held up; kanji readings are what to fix next.', steps: ['Work through the kanji lesson.', 'Drill the readings you missed in the practice set.', 'Read the story once with furigana and once without.'], review: { href: '/kanji', label: 'Study the kanji lesson →' } },
  particles: { en: 'N5 — particles are the gap', jp: '助詞がまだあいまい', desc: 'The rest of the check held up; particles are what to fix next.', steps: ['Review the particles lesson.', 'Write ten sentences using に, で and を.', 'Re-take this check in a week.'], review: { href: '/particles', label: 'Review the particles lesson →' } },
  grammar: { en: 'N5 — grammar is the gap', jp: '文法がまだあいまい', desc: 'The rest of the check held up; grammar is what to fix next.', steps: ['Review the grammar lesson.', 'Write ten て-form verbs from memory.', 'Re-take this check in a week.'], review: { href: '/grammar', label: 'Review the grammar lesson →' } },
}

function band(score: number, sections: SectionScore[]): LevelBand {
  const weakest = sections.reduce((low, section) => section.hit / section.total < low.hit / low.total ? section : low)
  const rate = weakest.hit / weakest.total
  if (score >= 18) return { en: 'N5 — clear', jp: 'N5 クリア', desc: 'You are reading N5 Japanese comfortably. You are ready to start N4.', steps: ['Start N4 grammar: て-form requests, 〜たことがある, 〜ながら, conditional 〜たら.', 'Begin N4 kanji — ten new characters a day is enough.', 'Read one short N4 passage aloud each day.'] }
  if (score >= 14 && rate < .7) return gapBands[weakest.key]
  if (score >= 14) return { en: 'N5 — nearly there', jp: 'N5 あと少し', desc: 'You have N5 under your belt, with one or two soft spots to strengthen.', steps: ['Redo your weakest section until the answers are obvious.', 'Drill particles in complete sentences.', 'Read the story once more without furigana.'] }
  if (score >= 10 && rate < .5) return gapBands[weakest.key]
  if (score >= 10) return { en: 'N5 — halfway', jp: 'N5 の途中', desc: 'You recognise a lot, but comprehension still depends on guessing.', steps: ['Finish a structured N5 grammar set before moving on.', 'Make the て-form and past tense automatic.', 'Re-read this story twice a week.'] }
  return { en: 'Building the N5 base', jp: 'N5 の土台', desc: 'Vocabulary and kana speed matter more than grammar rules at this stage.', steps: ['Build hiragana and katakana speed without romaji.', 'Learn N5 vocabulary with audio.', 'Work through grammar in order: です/ます → particles → て-form → past tense.'] }
}

function LevelResult() {
  const { answers, graded, score, reset } = context()
  if (!graded) return null
  const sections: SectionScore[] = levelCheck.SECTIONS.map((section) => {
    const questions = levelCheck.QUESTIONS.map((q, index) => ({ q, index })).filter(({ q }) => q.sec === section.key)
    return { ...section, hit: questions.filter(({ q, index }) => answers[index] === q.a).length, total: questions.length }
  })
  const data = band(score, sections)
  return <section className="result"><div className="card result-card"><ResultHeader score={score} total={20} band={data} /><div className="breakdown">{sections.map((section) => <div className="bd-row" key={section.key}><span className="bd-name">{section.jp} <span>{section.en}</span></span><progress className={`bd-bar ${section.hit / section.total < .6 ? 'weak' : ''}`} max={section.total} value={section.hit} /><span className="bd-score"><b>{section.hit}</b>/{section.total}</span></div>)}</div><div className="next-steps"><h3>What to do next</h3><ul>{data.steps.map((step) => <li key={step}>{step}</li>)}</ul>{data.review && <a href={data.review.href}>{data.review.label}</a>}</div><div className="result-actions"><button className="solid-btn" onClick={() => document.querySelector('.q')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} type="button">Review my answers</button><button className="solid-btn" onClick={reset} type="button">Try again</button></div></div></section>
}

function LevelDock() {
  const { answers, graded, setGraded } = context()
  return <ProgressDock answered={Object.keys(answers).length} total={20} completeMessage="Answer the remaining questions first — scroll to the first blank one." graded={graded} gradeLabel="採点する · Check" onGrade={() => { if (graded) document.querySelector('.result')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); else setGraded(true) }} />
}

function StoryPanels() {
  const [translation, setTranslation] = useState(false)
  const [vocab, setVocab] = useState(false)
  return <><div className="story-actions"><button className="ghost-btn" aria-pressed={translation} onClick={() => setTranslation(!translation)} type="button">{translation ? 'Hide translation' : 'English translation'}</button><button className="ghost-btn" aria-pressed={vocab} onClick={() => setVocab(!vocab)} type="button">{vocab ? 'Hide words' : 'Words to know'}</button></div><div className={`translation ${translation ? 'open' : ''}`}><p><strong>My Sunday.</strong> I'm Mai. I came from Indonesia. Right now I'm studying at a Japanese language school in Tokyo.</p><p>There's no school on Sunday. So on Sundays I often go out with friends.</p><p>Last Sunday, I went to Ueno with Ani. Ueno is in Tokyo. It took about thirty minutes by train.</p><p>I met Ani at the station. After that, the two of us took a walk in the park. The park was very pretty.</p><p>At twelve, we ate lunch at a restaurant. I had tempura. Ani had ramen.</p><p>After that, we went to a department store. I bought a small bag there. Ani didn't buy anything.</p><p>I got home at five. It was a really fun day. Next month, I want to go again.</p></div><div className={`vocab ${vocab ? 'open' : ''}`}><div className="vocab-item"><b>出かけます</b><span>でかけます · to go out</span></div><div className="vocab-item"><b>さんぽします</b><span>to take a walk</span></div><div className="vocab-item"><b>天ぷら</b><span>てんぷら · tempura</span></div><div className="vocab-item"><b>来月</b><span>らいげつ · next month</span></div></div></>
}
