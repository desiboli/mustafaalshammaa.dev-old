import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-slate-100/80 py-6 backdrop-blur-sm dark:bg-slate-900/80">
      <div className="mx-auto max-w-3xl">
        <nav className="flex flex-row gap-6">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Notes</Link>
          <Link href="/">Snippets</Link>
          <Link href="/">Guestbook</Link>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  )
}