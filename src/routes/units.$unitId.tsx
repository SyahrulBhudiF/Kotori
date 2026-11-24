import { createFileRoute, Link } from '@tanstack/react-router'
import { curriculum } from '../curriculum'
import { UnitLesson } from '../ui/unit-lesson'

export const Route = createFileRoute('/units/$unitId')({ component: UnitPage })

function UnitPage() {
  const { unitId } = Route.useParams()
  const unit = curriculum.find(item => item.id === unitId)
  if (!unit) return <main><header className="hero"><h1>Unit not found</h1><p>That unit id does not exist. <Link to="/curriculum">Back to the course</Link>.</p></header></main>
  return <UnitLesson unit={unit} />
}
