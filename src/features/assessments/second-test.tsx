import { createContext, useContext, useState } from 'react'
import type { MDXContent } from 'mdx/types'
import { secondTest } from './data'
import { ChoiceTestCard, LessonHtml, ProgressDock, ResultHeader } from './components'

type Written = (typeof secondTest.WRITE)[number]
const TestContext = createContext<ReturnType<typeof useTest> | null>(null)
function useTest() {
  const [mc, setMc] = useState<Record<number, number>>({})
  const [written, setWritten] = useState<Record<number, string>>({})
  const [graded, setGraded] = useState(false)
  const reset = () => { setMc({}); setWritten({}); setGraded(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return { mc, setMc, written, setWritten, graded, setGraded, reset }
}
function test() { const value = useContext(TestContext); if (!value) throw new Error('Second test must be inside its provider'); return value }
const normRomaji = (value: string) => value.toLowerCase().replace(/[^a-z]/g, '').replace(/wo/g, 'o').replace(/ou/g, 'o').replace(/uu/g, 'u')
const normEnglish = (value: string) => value.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim().replace(/^to\s+/, '')
const toHiragana = (value: string) => value.replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60))
const normJapanese = (value: string) => toHiragana(value).replace(/[\s。、！？!?.,・「」]/g, '')
export function isWrittenCorrect(item: Written, raw: string) {
  if (!raw.trim()) return false
  if (item.kind === 'romaji') return item.accept.some((answer) => normRomaji(answer) === normRomaji(raw))
  if (item.kind === 'meaning') return raw.split('/').map(normEnglish).some((part) => item.accept.some((answer) => normEnglish(answer) === part))
  return item.keys.every((group) => group.some((key) => normJapanese(raw).includes(normJapanese(key))))
}

export function SecondTest({ Content }: { Content: MDXContent }) { const state = useTest(); return <TestContext.Provider value={state}><Content components={{ TestChoices, TestWritten, TestResult, TestDock }} /></TestContext.Provider> }
function TestChoices({ section }: { section: string }) { const { mc, setMc, graded } = test(); const questions = secondTest.MC.map((question, index) => ({ question, index })).filter(({ question }) => question.sec === section); return <div>{questions.map(({ question, index }, order) => <ChoiceTestCard key={question.q} number={order + 1} question={question} selected={mc[index]} graded={graded} onChoose={(answer) => setMc((current) => ({ ...current, [index]: answer }))} />)}</div> }
function TestWritten({ kind }: { kind: string }) { const { written, setWritten, graded } = test(); const questions = secondTest.WRITE.map((question, index) => ({ question, index })).filter(({ question }) => question.kind === kind); return <div>{questions.map(({ question, index }, order) => { const correct = isWrittenCorrect(question, written[index] ?? ''); return <article className="card pq" data-unanswered={!written[index] || undefined} key={question.q}><p className="pq-prompt"><span className="pq-no">{order + 1}</span><LessonHtml html={question.q} /></p><p className="en prompt-translation">{question.en}</p><p className="wq-hint en"><LessonHtml html={question.hint} /></p><input aria-label={`Written answer ${order + 1}`} className={`answer-input ${graded ? correct ? 'ok' : 'no' : ''}`} disabled={graded} onChange={(event) => setWritten((current) => ({ ...current, [index]: event.target.value }))} placeholder="ここに書いてください" value={written[index] ?? ''} />{graded && <div className="model show"><b>{correct ? '正解' : 'こたえ'}</b> <LessonHtml html={question.model} /></div>}</article> })}</div> }
function sectionScores() { const { mc, written } = test(); return secondTest.SECTIONS.map((section) => { const hitMc = secondTest.MC.map((q, index) => ({ q, index })).filter(({ q, index }) => q.sec === section.key && mc[index] === q.a).length; const hitWritten = secondTest.WRITE.map((q, index) => ({ q, index })).filter(({ q, index }) => q.sec === section.key && isWrittenCorrect(q, written[index] ?? '')).length; return { ...section, hit: hitMc + hitWritten } }) }
type Diagnosis = { en: string; jp: string; desc: string; steps: string[]; review: { href: string; label: string } }
function diagnosis(total: number, scores: ReturnType<typeof sectionScores>): Diagnosis {
  const particles = scores.find((s) => s.key === 'particles')!.hit
  const grammar = scores.find((s) => s.key === 'grammar')!.hit
  const production = scores.filter((s) => ['romaji', 'meaning', 'translate'].includes(s.key)).reduce((sum, s) => sum + s.hit, 0)
  const recognition = particles + grammar
  if (total >= 27) return { en: 'N5 — clear', jp: 'N5 クリア', desc: 'Reading, particles and writing all held up. You are ready to begin N4.', steps: ['Start N4 grammar: 〜たことがある, 〜ながら, 〜たら, plain form.', 'Read one short N4 passage aloud daily.'], review: { href: '/grammar', label: 'Start N4 grammar →' } }
  if (particles >= 7 && grammar >= 7 && production / 10 + .15 < recognition / 20) return { en: 'Reads better than it writes', jp: '読むのは得意、書くのはこれから', desc: 'Your recognition is ahead of your production. Build recall speed with daily written sentences.', steps: ['Write five sentences from memory every day.', 'Re-take this test in a week.'], review: { href: '/quiz', label: 'Re-take the written section →' } }
  if (particles < 7) return { en: 'N5 — particles are the gap', jp: '助詞がまだあいまい', desc: 'Particles need more practice in complete sentences.', steps: ['Review the particles lesson.', 'Write ten sentences using に, で and を.'], review: { href: '/particles', label: 'Review the particles lesson →' } }
  if (grammar < 7) return { en: 'N5 — grammar is the gap', jp: '文法がまだあいまい', desc: 'Verb and adjective forms need more practice.', steps: ['Review the grammar lesson.', 'Write ten て-form verbs from memory.'], review: { href: '/grammar', label: 'Review the grammar lesson →' } }
  return { en: 'N5 — nearly there', jp: 'N5 あと少し', desc: 'Your profile is balanced. The next gain comes from speed and repetition.', steps: ['Re-read the stories without furigana.', 'Re-take this test and aim for 27+.'], review: { href: '/story', label: 'Read another N5 story →' } }
}
function TestResult() { const { graded, reset } = test(); const scores = sectionScores(); const total = scores.reduce((sum, score) => sum + score.hit, 0); const { en, jp, desc, steps, review } = diagnosis(total, scores); if (!graded) return null; return <section className="result"><div className="card result-card"><ResultHeader score={total} total={30} band={{ en, jp, desc }} /><div className="breakdown">{scores.map((section) => <div className="bd-row" key={section.key}><span className="bd-name">{section.jp} <span>{section.en}</span></span><progress className={`bd-bar ${section.hit / section.max < .6 ? 'weak' : ''}`} max={section.max} value={section.hit} /><span className="bd-score"><b>{section.hit}</b>/{section.max}</span></div>)}</div><div className="next-steps"><h3>What to do next</h3><ul>{steps.map((step) => <li key={step}>{step}</li>)}</ul><a href={review.href}>{review.label}</a></div><div className="result-actions"><button className="solid-btn" onClick={() => document.querySelector('.q, .pq')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} type="button">答えを見る</button><button className="solid-btn" onClick={reset} type="button">もういちど</button></div></div></section> }
function TestDock() { const { mc, written, graded, setGraded } = test(); const answered = Object.keys(mc).length + Object.values(written).filter((value) => value.trim()).length; return <ProgressDock answered={answered} total={30} completeMessage="まだこたえていないもんだいがあります。さいしょの空白へ行きます。" graded={graded} gradeLabel="採点する" onGrade={() => { if (graded) document.querySelector('.result')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); else setGraded(true) }} /> }
