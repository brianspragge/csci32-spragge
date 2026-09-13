import { Button } from '@repo/ui/button'
import { Cat } from '@repo/ui/cat'
import { Header } from '@repo/ui/header'
import { Page } from '@repo/ui/page'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'
import { navLinks } from '../nav-links'

export default function ButtonPage() {
  return (
    <>
      <Header links={navLinks} />
      <Page>
        <Cat name={'John'} breed={'tabby'} />
        <div className="flex gap-2">
          <Button size={Size.LARGE} variant={Variant.PRIMARY}>
            VIM Primary
          </Button>
          <Button size={Size.MEDIUM} variant={Variant.PRIMARY}>
            VIM Primary
          </Button>
          <Button size={Size.SMALL} variant={Variant.PRIMARY}>
            VIM Primary
          </Button>
        </div>
        <div className="flex gap-2">
          <Button size={Size.LARGE} variant={Variant.SECONDARY}>
            VIM Secondary
          </Button>
          <Button size={Size.MEDIUM} variant={Variant.SECONDARY}>
            VIM Secondary
          </Button>
          <Button size={Size.SMALL} variant={Variant.SECONDARY}>
            VIM Secondary
          </Button>
        </div>
        <div className="flex gap-2">
          <Button size={Size.LARGE} variant={Variant.TERTIARY}>
            VIM Tertiary
          </Button>
          <Button size={Size.MEDIUM} variant={Variant.TERTIARY}>
            VIM Tertiary
          </Button>
          <Button size={Size.SMALL} variant={Variant.TERTIARY}>
            VIM Tertiary
          </Button>
        </div>
      </Page>
    </>
  )
}
