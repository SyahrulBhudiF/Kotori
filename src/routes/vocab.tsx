import { createFileRoute } from '@tanstack/react-router'
import { VocabList } from '../ui/vocab-list'
export const Route = createFileRoute('/vocab')({ component: VocabList })
