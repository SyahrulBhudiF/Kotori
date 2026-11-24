import { createFileRoute } from '@tanstack/react-router'
import QuizMaterial from '../materials/quiz.mdx'
import { SecondTest } from '../features/assessments/second-test'
export const Route = createFileRoute('/quiz')({ component: () => <SecondTest Content={QuizMaterial} /> })
