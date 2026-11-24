import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
const root = process.cwd()
const panda = await readFile(resolve(root, 'styled-system/styles.css'), 'utf8')
const sources = await Promise.all(['styles.css', 'lesson.css', 'test.css'].map(file => readFile(resolve(root, file), 'utf8')))
await writeFile(resolve(root, 'public/site.css'), `${panda}\n\n${sources.join('\n\n')}`)
