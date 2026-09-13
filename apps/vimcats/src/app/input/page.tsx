'use client'

import { Button } from '@repo/ui/button'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'
import { Input } from '@repo/ui/input'
import { useState } from 'react'
import { Page } from '@repo/ui/page'

export default function InputPage() {
  const [userName, setUserName] = useState('')
  const [secondInput, setSecondInput] = useState('')
  const [thirdInput, setThirdInput] = useState('')

  return (
    <Page>
      <div className="flex flex-wrap gap-2">
        <div className="flex gap-2">
          <Input id={'userName'} name={'userName'} variant={Variant.PRIMARY} value={userName} setValue={setUserName} />
          <Button size={Size.LARGE} variant={Variant.PRIMARY} onClick={() => alert(`Hello there, ${userName}!`)}>
            Enter Name
          </Button>
        </div>
        <div className="flex gap-2">
          <Input
            id={'second'}
            name={'second'}
            variant={Variant.SECONDARY}
            value={secondInput}
            setValue={setSecondInput}
          />
          <Button size={Size.MEDIUM} variant={Variant.SECONDARY} onClick={() => alert(secondInput)}>
            Hi there
          </Button>
        </div>
        <div className="flex gap-2">
          <Input id={'third'} name={'third'} variant={Variant.TERTIARY} value={thirdInput} setValue={setThirdInput} />
          <Button size={Size.SMALL} variant={Variant.TERTIARY} onClick={() => alert(thirdInput)}>
            Hi there
          </Button>
        </div>
      </div>
    </Page>
  )
}

// children,
// className,
// href,
// onClick,
// size = Size.MEDIUM,
// variant = Variant.SECONDARY,

// 3 groups of “input + button”
// Each group (input + button) is wrapped in a div utilizing flex and gap properties
// state variable for each input
// Wrapper div around the 3 groups of (input + button) that utilizes flex, gap,
// and flex-wrap
// This ensures that as the page resizes down, the input + button wrap together
// alert that triggers for each button and renders the value in the input variable
