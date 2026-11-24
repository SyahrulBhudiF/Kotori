import { createFileRoute } from '@tanstack/react-router'
import { CurriculumTracker } from '../ui/curriculum-tracker'

export const Route = createFileRoute('/curriculum')({
  component: CurriculumTracker,
})
