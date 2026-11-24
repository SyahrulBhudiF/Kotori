import { Link } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import { curriculum, curriculumPrinciples, type LessonStatus } from '../curriculum'

const storageKey = 'n5-curriculum-progress-v1'
type Progress = Record<string, LessonStatus>

function loadProgress(): Progress {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey) ?? '{}') as Progress
  } catch {
    return {}
  }
}

function toStatus(progress: Progress, id: string): LessonStatus {
  return progress[id] ?? 'available'
}

function lessonStatus(progress: Progress, id: string): LessonStatus {
  return toStatus(progress, id)
}

function nextStatus(status: LessonStatus): LessonStatus {
  if (status === 'available') return 'in-progress'
  if (status === 'in-progress' || status === 'review-due') return 'mastered'
  return 'available'
}

export function CurriculumTracker() {
  const [progress, setProgress] = useState<Progress>({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setProgress(loadProgress())
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready) window.localStorage.setItem(storageKey, JSON.stringify(progress))
  }, [progress, ready])

  const mastered = useMemo(() => curriculum.filter(lesson => toStatus(progress, lesson.id) === 'mastered').length, [progress])
  const percentage = Math.round((mastered / curriculum.length) * 100)

  function update(id: string) {
    setProgress(current => {
      const next = { ...current, [id]: nextStatus(toStatus(current, id)) }
      window.localStorage.setItem(storageKey, JSON.stringify(next))
      return next
    })
  }

  return (
    <main>
      <header className="hero">
        <span className="eyebrow">A1 · JF Standard</span>
        <h1>学習コース</h1>
        <p>A trackable beginner course built around what you can do in Japanese. Mark a unit only after you can complete its small real-life task without looking up the answer.</p>
        <div className="meta-row"><span>{curriculum.length} units</span><span>{mastered} mastered</span><span>{percentage}% complete</span></div>
      </header>

      <section className="block" aria-labelledby="path-heading">
        <div className="sec-head"><span className="num">00</span><h2 id="path-heading">Learning path <span className="jp">学習の道</span></h2></div>
        <div className="curriculum-list">
          {curriculum.map(lesson => {
            const status = lessonStatus(progress, lesson.id)
            return <article className="card curriculum-card" key={lesson.id}>
              <div className="curriculum-number">{String(lesson.unit).padStart(2, '0')}</div>
              <div className="curriculum-body">
                <div className="curriculum-title-row"><div><h3><Link className="unit-link" to="/units/$unitId" params={{ unitId: lesson.id }}>{lesson.title}</Link> <span>{lesson.titleJa}</span></h3><p className="curriculum-outcome">{lesson.outcome}</p></div><span className={`status status-${status}`}>{status.replace('-', ' ')}</span></div>
                <p className="can-do"><b>Can-do</b> {lesson.canDo}</p>
                <p className="curriculum-meta">{lesson.estimatedMinutes} min · {lesson.prerequisites.length ? `builds on ${lesson.prerequisites.map(id => curriculum.find(item => item.id === id)?.title).join(', ')}` : 'starting point'}</p>
                <div className="curriculum-actions">
                  <Link className="solid-btn" to="/units/$unitId" params={{ unitId: lesson.id }}>Open unit</Link>
                  {lesson.practice?.map(link => <Link className="solid-btn" key={link.path + (link.hash ?? '')} to={link.path} hash={link.hash}>{link.label}</Link>)}
                  <button className="ghost-btn" type="button" onClick={() => update(lesson.id)}>{status === 'mastered' ? 'Mark available again' : status === 'available' ? 'Start unit' : 'Mark mastered'}</button>
                </div>
              </div>
            </article>
          })}
        </div>
      </section>

      <section className="block" aria-labelledby="method-heading">
        <div className="sec-head"><span className="num">01</span><h2 id="method-heading">Lesson standard <span className="jp">設計</span></h2></div>
        <article className="card curriculum-standard">
          <p>Each future lesson should include: a Can-do and context, a short model input, noticing of key language, retrieval practice with feedback, and a small spoken or written output task.</p>
          <ul>{curriculumPrinciples.map(principle => <li key={principle}>{principle}</li>)}</ul>
          <p className="source-note">Framework: <a href="https://www.jfstandard.jpf.go.jp/pdf/web_whole_en.pdf">JF Standard for Japanese-Language Education</a> and <a href="https://marugoto.jpf.go.jp/en/teacher/feature/">Marugoto course design</a>. This course maps to A1/N5 study; JLPT results require official testing.</p>
        </article>
      </section>
    </main>
  )
}
