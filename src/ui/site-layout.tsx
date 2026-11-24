import type { ReactNode } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export function SiteLayout({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: state => state.location.pathname })
  const [showEnglish, setShowEnglish] = useState(true)
  const [showFurigana, setShowFurigana] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('hide-translation', !showEnglish)
    document.body.classList.toggle('no-furi', !showFurigana)
  }, [showEnglish, showFurigana])

  const links = [
    ['/', 'テスト'], ['/curriculum', 'コース'], ['/kana', 'かな'], ['/particles', '助詞'], ['/grammar', '文法'], ['/kanji', '漢字'], ['/vocab', '語彙'], ['/quiz', '実力テスト'], ['/story', '物語'],
  ] as const

  return (
    <>
      <div className="topbar"><nav className="topbar-inner" aria-label="Main navigation">
        <Link className="brand" to="/"><span className="brand-mark">N5</span><span className="brand-sub">Level check</span></Link>
        <div className="spacer" />
        {links.map(([to, label]) => <Link key={to} className="nav-link" to={to} aria-current={path === to ? 'page' : undefined}>{label}</Link>)}
        <button className="nav-link translation-toggle" type="button" aria-pressed={!showEnglish} onClick={() => setShowEnglish(value => !value)}>{showEnglish ? 'Hide English' : 'Show English'}</button>
        <button className="furi-toggle" type="button" aria-pressed={showFurigana} onClick={() => setShowFurigana(value => !value)}><span className="switch" aria-hidden="true" /> <span className="jp-label">ふりがな</span></button>
      </nav></div>
      {children}
    </>
  )
}
