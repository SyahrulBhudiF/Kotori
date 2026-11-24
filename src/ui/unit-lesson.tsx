import { Link } from '@tanstack/react-router'
import type { MDXContent } from 'mdx/types'
import { curriculum, type CurriculumLesson } from '../curriculum'
import { unitQuizzes } from '../unit-quiz'
import { ImmediatePractice } from '../features/assessments/components'
import Foundations from '../materials/units/00-foundations.mdx'
import Introductions from '../materials/units/01-introductions.mdx'
import Routines from '../materials/units/02-routines.mdx'
import Movement from '../materials/units/03-movement.mdx'
import Food from '../materials/units/04-food.mdx'
import Plans from '../materials/units/05-plans.mdx'
import Experiences from '../materials/units/06-experiences.mdx'
import Descriptions from '../materials/units/07-descriptions.mdx'
import Kanji from '../materials/units/08-kanji.mdx'
import Review from '../materials/units/09-n5-review.mdx'

const lessons: Record<string, MDXContent> = {
  foundations: Foundations,
  introductions: Introductions,
  routines: Routines,
  movement: Movement,
  food: Food,
  plans: Plans,
  experiences: Experiences,
  descriptions: Descriptions,
  kanji: Kanji,
  'n5-review': Review,
}

export function UnitLesson({ unit }: { unit: CurriculumLesson }) {
  const Content = lessons[unit.id]
  const quiz = unitQuizzes[unit.id]
  const index = curriculum.findIndex(item => item.id === unit.id)
  const previous = curriculum[index - 1]
  const next = curriculum[index + 1]

  return <main>
    <header className="hero">
      <span className="eyebrow">Unit {String(unit.unit).padStart(2, '0')} · JLPT N5</span>
      <h1>{unit.title}</h1>
      <p className="unit-ja">{unit.titleJa}</p>
      <p><b>Can-do:</b> {unit.canDo}</p>
      <div className="meta-row"><span>{unit.estimatedMinutes} min</span><span>{unit.outcome}</span></div>
    </header>

    {Content ? <Content /> : <section className="block"><p>This unit's lesson is still being written.</p></section>}

    {quiz && quiz.length > 0 && <section className="block">
      <div className="sec-head"><h2>Quick check <span className="jp">確認</span></h2></div>
      <div className="practice-intro">Three questions on this unit. Pick an answer and the reason appears straight away.</div>
      <ImmediatePractice questions={quiz} />
    </section>}

    {unit.practice && <section className="block">
      <div className="sec-head"><h2>Practice <span className="jp">練習</span></h2></div>
      <div className="unit-practice">{unit.practice.map(link => <Link className="solid-btn" key={link.path + (link.hash ?? '')} to={link.path} hash={link.hash}>{link.label}</Link>)}</div>
    </section>}

    <section className="block">
      <div className="sec-head"><h2>Course <span className="jp">コース</span></h2></div>
      <div className="unit-nav">
        {previous && <Link className="solid-btn" to="/units/$unitId" params={{ unitId: previous.id }}>← {previous.title}</Link>}
        <Link className="solid-btn" to="/curriculum">Back to the course</Link>
        {next && <Link className="solid-btn" to="/units/$unitId" params={{ unitId: next.id }}>{next.title} →</Link>}
      </div>
    </section>
  </main>
}
