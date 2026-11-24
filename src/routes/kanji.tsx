import { createFileRoute } from '@tanstack/react-router'
import KanjiMaterial from '../materials/kanji.mdx'
import { KanjiLesson } from '../features/assessments/lesson-practice'
export const Route = createFileRoute('/kanji')({ component: () => <KanjiLesson Content={KanjiMaterial} /> })
