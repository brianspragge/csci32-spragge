import { Button } from './button'
import { Size } from './size'
import { Variant } from './variant'

export interface NavLink {
  label: string
  href: string
}

export interface HeaderProps {
  links: NavLink[]
  className?: string
}

const linkVariants = [Variant.PRIMARY, Variant.SECONDARY, Variant.TERTIARY]

export function Header({ links, className = '' }: HeaderProps) {
  return (
    <header
      className={`mx-2 mt-2 rounded-xl border border-sand-dune-300 bg-sand-dune-100 px-4 py-3 shadow-md ${className}`}
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-center gap-3">
        {links.map(({ href, label }, i) => (
          <Button key={href} href={href} variant={linkVariants[i % linkVariants.length]} size={Size.MEDIUM}>
            {label}
          </Button>
        ))}
      </nav>
    </header>
  )
}
