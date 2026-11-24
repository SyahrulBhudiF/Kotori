import { readFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'
const root = process.cwd()
const files = []
async function walk(dir) { for (const entry of await readdir(dir, { withFileTypes: true })) entry.isDirectory() ? await walk(join(dir, entry.name)) : files.push(join(dir, entry.name)) }
await walk(join(root, 'src'))
const source = await Promise.all(files.filter(file => /\.(ts|tsx|mdx)$/.test(file)).map(file => readFile(file, 'utf8')))
const text = source.join('\n')
const checks = [
  ['inline style attributes', /\bstyle\s*=/],
  ['embedded style blocks', /<style\b/i],
]
const failures = checks.filter(([, pattern]) => pattern.test(text)).map(([label]) => label)
if (failures.length) throw new Error(`Style checks failed: ${failures.join(', ')}`)
console.log(`Style checks passed across ${files.length} source files.`)
