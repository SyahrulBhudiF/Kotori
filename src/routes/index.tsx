import { createFileRoute } from '@tanstack/react-router'
import IndexMaterial from '../materials/index.mdx'
import { LevelCheck } from '../features/assessments/level-check'
export const Route = createFileRoute('/')({ component: () => <LevelCheck Content={IndexMaterial} /> })
