import { useMemo, useState } from 'react'
import { vocab } from '../vocab'
import { toRomaji } from '../romaji'

const groupOrder = vocab.reduce<string[]>((list, entry) => list.includes(entry.group) ? list : [...list, entry.group], [])
const romajiOf = new Map(vocab.map(entry => [entry.kana, toRomaji(entry.kana)]))

export function VocabList() {
  const [query, setQuery] = useState('')
  const [romaji, setRomaji] = useState(true)
  const needle = query.trim()
  const lower = needle.toLowerCase()
  const filtered = useMemo(() => needle
    ? vocab.filter(entry => entry.kana.includes(needle) || entry.kanji.includes(needle) || entry.en.toLowerCase().includes(lower))
    : vocab, [needle, lower])
  const sections = groupOrder
    .map(group => ({ group, rows: filtered.filter(entry => entry.group === group) }))
    .filter(section => section.rows.length)

  return <main>
    <header className="hero">
      <span className="eyebrow">日本語 · JLPT N5</span>
      <h1>語彙</h1>
      <p>{vocab.length} N5 words grouped by theme. Search in kana, kanji or English. The Romaji button shows readings under each word; Hide English in the top bar hides the meanings.</p>
      <div className="meta-row"><span>{vocab.length} words</span><span>{groupOrder.length} groups</span></div>
    </header>

    <section className="block">
      <div className="vocab-search">
        <input aria-label="Search vocabulary" placeholder="Search kana, kanji or English" type="search" value={query} onChange={event => setQuery(event.target.value)} />
        <button className="ghost-btn vocab-romaji-toggle" type="button" aria-pressed={romaji} onClick={() => setRomaji(value => !value)}>Romaji</button>
        <span className="vocab-count">{filtered.length} shown</span>
      </div>
      {sections.length === 0 && <p className="sec-note">No words match “{needle}”.</p>}
      {sections.map(section => <section className="block vocab-group" key={section.group}>
        <div className="sec-head"><span className="num">{String(section.rows.length).padStart(2, '0')}</span><h2>{section.group}</h2></div>
        <article className="card vocab-card">
          <div className="tbl-wrap">
            <table className="tbl vocab-table">
              <thead><tr><th>Kanji</th><th>Kana</th><th>English</th></tr></thead>
              <tbody>{section.rows.map(entry => <tr key={`${entry.kana}-${entry.kanji}-${entry.en}`}>
                <td className="jp">{entry.kanji || '—'}</td>
                <td className="jp"><span className="vocab-kana">{entry.kana}</span>{romaji && <span className="vocab-romaji">{romajiOf.get(entry.kana)}</span>}</td>
                <td className="en">{entry.en}</td>
              </tr>)}</tbody>
            </table>
          </div>
        </article>
      </section>)}
    </section>
  </main>
}
