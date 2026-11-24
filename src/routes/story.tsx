import { createFileRoute } from '@tanstack/react-router'
import StoryMaterial from '../materials/story2.mdx'
import { StoryDiagnostic } from '../features/assessments/story-diagnostic'
export const Route = createFileRoute('/story')({ component: () => <StoryDiagnostic Content={StoryMaterial} /> })
