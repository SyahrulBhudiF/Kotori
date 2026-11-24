import { createFileRoute } from '@tanstack/react-router'
import GrammarMaterial from '../materials/grammar.mdx'
import { GrammarLesson } from '../features/assessments/lesson-practice'
export const Route = createFileRoute('/grammar')({ component: () => <GrammarLesson Content={GrammarMaterial} /> })
