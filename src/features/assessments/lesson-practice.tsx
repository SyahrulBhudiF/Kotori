import type { MDXContent } from 'mdx/types'
import { grammarQuestions, kanaQuestions, kanjiQuestions, particleQuestions } from './data'
import { ImmediatePractice, InlineQuickCheck } from './components'

export function ParticlesLesson({ Content }: { Content: MDXContent }) {
  return <Content components={{ InlineKaPractice, ParticlePractice }} />
}

export function GrammarLesson({ Content }: { Content: MDXContent }) {
  return <Content components={{ GrammarPractice }} />
}

export function KanjiLesson({ Content }: { Content: MDXContent }) {
  return <Content components={{ KanjiPractice }} />
}

export function KanaLesson({ Content }: { Content: MDXContent }) {
  return <Content components={{ KanaPractice }} />
}

function InlineKaPractice() {
  return <article className="card p-card" id="p-ka-quiz">
    <div className="p-head"><div className="p-glyph">か</div><div><h3 className="p-name">か practice <span className="p-romaji">quick check</span></h3><p className="p-job">Pick whether か marks a question or offers choices.</p></div></div>
    <div className="ex"><p className="jp">アニさんは<ruby>学生<rt>がくせい</rt></ruby>ですか。</p><p className="en">Is Ani a student?</p><InlineQuickCheck answer={0} options={['Yes, it is a question.', 'No, it is a statement.']} explanation="か at the end turns the sentence into a question." /></div>
    <div className="ex"><p className="jp">コーヒーかおちゃを<ruby>飲<rt>の</rt></ruby>みます。</p><p className="en">I drink coffee or tea.</p><InlineQuickCheck answer={1} options={['か means “and”.', 'か means “or”.']} explanation="か between choices means “or”." /></div>
  </article>
}

function ParticlePractice() { return <ImmediatePractice questions={particleQuestions} /> }
function GrammarPractice() { return <ImmediatePractice questions={grammarQuestions} /> }
function KanjiPractice() { return <ImmediatePractice questions={kanjiQuestions} /> }
function KanaPractice() { return <ImmediatePractice questions={kanaQuestions} /> }
