import { createFileRoute } from '@tanstack/react-router'
import KanaMaterial from '../materials/kana.mdx'
import { KanaLesson } from '../features/assessments/lesson-practice'
export const Route = createFileRoute('/kana')({ component: () => <KanaLesson Content={KanaMaterial} /> })
