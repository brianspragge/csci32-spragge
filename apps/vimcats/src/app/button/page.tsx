import { Button } from '@repo/ui/button'
import { Cat } from '@repo/ui/cat'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'

export default function ButtonPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-eggshell-200 font-sans">
      <div className="p-24 flex flex-col gap-2">
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
      </div>
    </div>
  )
}
