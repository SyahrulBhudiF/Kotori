import { createContext, useContext, useMemo, useState } from 'react'
import type { MDXContent } from 'mdx/types'
import { storyQuestions } from './data'
import { ResultHeader } from './components'

type State = { choices: Record<number, number>; text: Record<number, string>; graded: boolean; setChoices: React.Dispatch<React.SetStateAction<Record<number, number>>>; setText: React.Dispatch<React.SetStateAction<Record<number, string>>>; setGraded: React.Dispatch<React.SetStateAction<boolean>> }
const Context = createContext<State | null>(null)
const useStory = () => { const state = useContext(Context); if (!state) throw new Error('Story diagnostic context missing'); return state }
const normalize = (value: string) => value.toLowerCase().replace(/[\s、。！？!?.,・「」]/g, '')
const normalizeWriting = (value: string) => value.replace(/[\s、。！？!?.,・「」]/g, '')
export function StoryDiagnostic({ Content }: { Content: MDXContent }) { const [choices, setChoices] = useState<Record<number, number>>({}); const [text, setText] = useState<Record<number, string>>({}); const [graded, setGraded] = useState(false); return <Context.Provider value={{ choices, text, graded, setChoices, setText, setGraded }}><Content components={{ StoryTranslation, StoryQuestions, StoryGrade }} /></Context.Provider> }
function StoryTranslation() { const [open, setOpen] = useState(false); return <><div className="story-actions"><button className="ghost-btn" aria-pressed={open} onClick={() => setOpen(!open)} type="button">{open ? 'Hide story translation' : 'Show story translation'}</button></div><div className={`translation ${open ? 'open' : ''}`}><p><strong>My Saturday.</strong> I'm Rina. I came from Surabaya, Indonesia. I live in Osaka now.</p><p>There is no school on Saturday. In the morning, I get up at seven and eat bread and eggs at home.</p><p>Last Saturday, I went to Kyoto with my friend Ken. We saw an old temple and took a picture.</p><p>At lunch, I ate udon. Ken did not eat because he had eaten a lot in the morning.</p><p>In the afternoon, I bought a Japanese-language book and a cooking book. They cost 1,800 yen.</p><p>I got home at six. Next week, I want to cook at home.</p></div></> }
function StoryQuestions() { const { choices, setChoices, text, setText, graded } = useStory(); return <div>{storyQuestions.map((item, index) => { const selected = choices[index]; const raw = text[index] ?? ''; const correct = item.type === 'choice' ? selected === item.answer : item.answer.some((answer) => (item.section === 'Writing' ? normalizeWriting(answer) : normalize(answer)) === (item.section === 'Writing' ? normalizeWriting(raw) : normalize(raw))); return <article className="card story-q" key={item.q}><label>{index + 1}. {item.q}</label>{item.type === 'choice' ? <div className="po-row">{item.options.map((option, optionIndex) => <button className={`po ${selected === optionIndex && !graded ? 'sel' : ''} ${graded && optionIndex === item.answer ? 'correct' : ''} ${graded && selected === optionIndex && !correct ? 'wrong' : ''}`} disabled={graded} key={option} onClick={() => setChoices((current) => ({ ...current, [index]: optionIndex }))} type="button">{option}</button>)}</div> : <><p className="hint">{item.section === 'Writing' ? '日本語で書いてください。' : 'Answer in English or Japanese.'}</p><input aria-label={`Answer ${index + 1}`} disabled={graded} onChange={(event) => setText((current) => ({ ...current, [index]: event.target.value }))} value={raw} /></>}{graded && <div className="pq-why show"><b>{correct ? '正解' : '答えを確認'}。</b> {item.why}</div>}</article> })}</div> }
type StoryBand = { en: string; jp: string; desc: string; focus?: { href: string; label: string; lead: string } }

const sectionReview: Record<string, { href?: string; label: string }> = {
  Details: { label: 're-read the story above' },
  Reading: { label: 're-read the story above' },
  Particles: { href: '/particles', label: 'review particles' },
  Grammar: { href: '/grammar', label: 'review grammar' },
  Writing: { href: '/quiz', label: 'practise written output' },
}

function StoryGrade() {
  const { choices, text, graded, setGraded, setChoices, setText } = useStory()
  const result = useMemo(() => {
    const sections: Record<string, { hit: number; total: number }> = {}
    storyQuestions.forEach((item, index) => {
      const bucket = sections[item.section] ?? { hit: 0, total: 0 }
      const correct = item.type === 'choice'
        ? choices[index] === item.answer
        : item.answer.some((answer) => (item.section === 'Writing' ? normalizeWriting(answer) : normalize(answer)) === (item.section === 'Writing' ? normalizeWriting(text[index] ?? '') : normalize(text[index] ?? '')))
      bucket.total += 1
      if (correct) bucket.hit += 1
      sections[item.section] = bucket
    })
    return { total: Object.values(sections).reduce((sum, section) => sum + section.hit, 0), sections }
  }, [choices, text])
  const order = Object.keys(result.sections)
  const weakest = order.reduce<string | undefined>((low, section) => {
    if (!low) return section
    return result.sections[section].hit / result.sections[section].total < result.sections[low].hit / result.sections[low].total ? section : low
  }, undefined)
  const sections = result.sections
  const choiceHit = (sections.Details?.hit ?? 0) + (sections.Particles?.hit ?? 0) + (sections.Grammar?.hit ?? 0)
  const writtenHit = (sections.Reading?.hit ?? 0) + (sections.Writing?.hit ?? 0)
  const band: StoryBand = result.total >= 9
    ? { en: 'N5 — clear', jp: 'N5 クリア', desc: 'You read this story comfortably. Try a harder N5 text next.' }
    : choiceHit >= 7 && writtenHit === 0
      ? { en: 'Reads better than it writes', jp: '読むのは得意、書くのはこれから', desc: 'You understood the story; the written answers are the gap.', focus: { href: '/quiz', label: 'practise written output', lead: 'Your reading is ahead of your writing' } }
      : result.total >= 7 && (sections.Particles?.hit ?? 0) === 0
        ? { en: 'N5 — particles are the gap', jp: '助詞がまだあいまい', desc: 'You followed the story, but the particle questions did not hold up.', focus: { href: '/particles', label: 'review particles', lead: 'Start with the particles' } }
        : result.total >= 7
          ? { en: 'N5 — nearly there', jp: 'N5 あと少し', desc: 'You caught most of it. The weakest section below is where the next gain is.' }
          : { en: 'Building the N5 base', jp: 'N5 の土台', desc: 'Read this story again with the translation open, then close it and retry.' }
  const reset = () => { setChoices({}); setText({}); setGraded(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return <>
    <button className="grade-btn" onClick={() => setGraded(true)} type="button">採点する · Check answers</button>
    {graded && <section className="result"><div className="card result-card" id="storyResult" aria-live="polite">
      <ResultHeader score={result.total} total={storyQuestions.length} band={band} />
      <div className="breakdown">{order.map((section) => <div className="bd-row" key={section}><span className="bd-name">{section}</span><progress className={`bd-bar ${result.sections[section].hit / result.sections[section].total < .6 ? 'weak' : ''}`} max={result.sections[section].total} value={result.sections[section].hit} /><span className="bd-score"><b>{result.sections[section].hit}</b>/{result.sections[section].total}</span></div>)}</div>
      <div className="next-steps"><h3>What to do next</h3>
        {band.focus
          ? <p>{band.focus.lead} — <a href={band.focus.href}>{band.focus.label} →</a></p>
          : result.total === storyQuestions.length
            ? <p>Nothing to fix — try a harder N5 reading next.</p>
            : <p>Start with the lowest section: <b>{weakest}</b> — {sectionReview[weakest!].href ? <a href={sectionReview[weakest!].href}>{sectionReview[weakest!].label} →</a> : sectionReview[weakest!].label}</p>}
      </div>
      <div className="result-actions"><button className="solid-btn" onClick={() => document.querySelector('.story-q')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} type="button">Review my answers</button><button className="solid-btn" onClick={reset} type="button">Try again</button></div>
    </div></section>}
  </>
}
