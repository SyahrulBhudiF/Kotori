import { createFileRoute } from '@tanstack/react-router'
import ParticlesMaterial from '../materials/particles.mdx'
import { ParticlesLesson } from '../features/assessments/lesson-practice'
export const Route = createFileRoute('/particles')({ component: () => <ParticlesLesson Content={ParticlesMaterial} /> })
