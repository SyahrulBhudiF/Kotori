import { useState } from 'react'
import { css } from '../../../styled-system/css'

export type ChoiceQuestion = {
  q: string
  opts: readonly string[]
  a: number
  why: string
  sec?: string
  en?: string
}

type HtmlProps = { html: string; className?: string }

export function LessonHtml({ html, className }: HtmlProps) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

const choiceButton = css({ transition: 'colors', _focusVisible: { outline: '2px solid', outlineColor: 'orange.500', outlineOffset: '2px' } })

export function ImmediatePractice({ questions }: { questions: readonly ChoiceQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({})

  return <div>{questions.map((question, index) => {
    const selected = answers[index]
    const locked = selected !== undefined
    return <article className="card pq" key={question.q}>
      <p className="pq-prompt"><span className="pq-no">{index + 1}</span><LessonHtml html={question.q} /></p>
      <div className="po-row" role="group" aria-label={`Question ${index + 1}`}>
        {question.opts.map((option, optionIndex) => <button
          className={`po ${choiceButton} ${locked ? 'locked' : ''} ${locked && optionIndex === question.a ? 'correct' : ''} ${locked && optionIndex === selected && selected !== question.a ? 'wrong' : ''}`}
          disabled={locked}
          key={option}
          onClick={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))}
          type="button"
        ><LessonHtml html={option} /></button>)}
      </div>
      {locked && <p className="pq-why show" aria-live="polite"><strong>{selected === question.a ? '正解' : <>正解は <LessonHtml html={question.opts[question.a]} /></>}</strong>{selected === question.a ? ' ' : ' — '}<LessonHtml html={question.why} /></p>}
    </article>
  })}</div>
}

export function InlineQuickCheck({ answer, options, explanation }: { answer: number; options: readonly string[]; explanation: string }) {
  const [selected, setSelected] = useState<number | undefined>()
  const locked = selected !== undefined
  return <>
    <div className="po-row" role="group">
      {options.map((option, index) => <button className={`po ${choiceButton} ${locked && index === answer ? 'correct' : ''} ${locked && index === selected && selected !== answer ? 'wrong' : ''}`} disabled={locked} key={option} onClick={() => setSelected(index)} type="button">{option}</button>)}
    </div>
    {locked && <p className="pq-why show" aria-live="polite">{explanation}</p>}
  </>
}

export function ProgressDock({ answered, total, completeMessage, onGrade, graded, gradeLabel }: { answered: number; total: number; completeMessage: string; onGrade: () => void; graded: boolean; gradeLabel: string }) {
  const [showNote, setShowNote] = useState(false)
  const tryGrade = () => {
    if (!graded && answered < total) {
      setShowNote(true)
      document.querySelector<HTMLElement>('[data-unanswered="true"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setShowNote(false)
    onGrade()
  }
  const pct = Math.round(answered / total * 100)
  return <div className="dock">
    {showNote && <div className="dock-note show">{completeMessage}</div>}
    <div className="dock-inner">
      <div className="progress-wrap"><div className="progress-label"><span>{answered} / {total}</span><b>{pct}%</b></div><progress className="progress-native" max={total} value={answered} /></div>
      <button className="grade-btn" onClick={tryGrade} type="button">{graded ? '結果を見る' : gradeLabel}</button>
    </div>
  </div>
}

export function ScoreRing({ score, total }: { score: number; total: number }) {
  const circumference = 2 * Math.PI * 58
  return <div className="score-ring"><svg width="132" height="132" viewBox="0 0 132 132" aria-label={`${score} out of ${total}`}><circle className="ring-bg" cx="66" cy="66" r="58" /><circle className="ring-fg" cx="66" cy="66" r="58" strokeDasharray={circumference.toFixed(1)} strokeDashoffset={(circumference * (1 - score / total)).toFixed(1)} /></svg><div className="score-num"><b>{score}</b><span>out of {total}</span></div></div>
}

export type ResultBand = { en: string; jp: string; desc: string }

export function ResultHeader({ score, total, band }: { score: number; total: number; band: ResultBand }) {
  return <>
    <ScoreRing score={score} total={total} />
    <p className="band-en">{band.en}</p>
    <h2 className="band">{band.jp}</h2>
    <p className="band-desc">{band.desc}</p>
  </>
}

export function ChoiceTestCard({ question, number, selected, graded, onChoose }: { question: ChoiceQuestion; number: number; selected?: number; graded: boolean; onChoose: (answer: number) => void }) {
  const correct = selected === question.a
  return <div className={`q ${selected !== undefined ? 'answered' : ''} ${graded ? correct ? 'hit' : 'miss' : ''}`} data-unanswered={selected === undefined || undefined}>
    <div className="q-prompt"><span className="q-no">{number}</span><span><LessonHtml html={question.q} />{question.en && <span className="en">{question.en}</span>}</span></div>
    <div className="opts" role="group" aria-label={`Question ${number}`}>
      {question.opts.map((option, index) => <button className={`opt ${choiceButton} ${!graded && selected === index ? 'sel' : ''} ${graded ? 'locked' : ''} ${graded && index === question.a ? 'correct' : ''} ${graded && index === selected && !correct ? 'wrong' : ''}`} disabled={graded} key={option} onClick={() => onChoose(index)} type="button"><span className="k">{String.fromCharCode(65 + index)}</span><span className="txt"><LessonHtml html={option} /></span><span className="mark">●</span></button>)}
    </div>
    {graded && <div className="why show"><b>{correct ? '正解' : `正解: ${String.fromCharCode(65 + question.a)}`}</b> <LessonHtml html={question.why} /></div>}
  </div>
}
