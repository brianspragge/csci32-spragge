'use client'

import { Button } from '@repo/ui/button'
import { Input } from '@repo/ui/input'
import { useState } from 'react'
import { RandomNumberGuessingGameMenuProps } from './page'

export default function RandomNumberGuessingGameMenu({ startGame }: RandomNumberGuessingGameMenuProps) {
  const [showSettings, setShowSettings] = useState(false)

  function onSubmitSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const lowRange = Number(data.get('lowRange'))
    const highRange = Number(data.get('highRange'))
    const maxGuessCount = Number(data.get('maxGuessCount'))
    startGame({ lowRange, highRange, maxGuessCount })
    setShowSettings(false)
  }
  return (
    <div className="flex flex-col gap-4">
      {showSettings ? (
        <div className="flex flex-col gap-4">
          <header>
            <h1 className="text-2xl font-bold">
              Please enter the range, low and high, of numbers you wish to guess from
            </h1>
          </header>
          <form className="flex flex-col gap-4" onSubmit={onSubmitSettings}>
            <Input
              defaultValue={0}
              type="number"
              placeholder={'Low end of guessing range'}
              name="lowRange"
              id="lowRange"
            />
            <Input
              defaultValue={10}
              type="number"
              placeholder={'High end of guessing range'}
              name="highRange"
              id="highRange"
            />
            <Input
              defaultValue={3}
              type="number"
              placeholder={'Allotted guesses'}
              name="maxGuessCount"
              id="maxGuessCount"
            />
            <Button>Submit</Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <header className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Guessing Game!</h1>
            <p className="text-xl font-bold">Choose the range and guess the random number!</p>
            <p className="text-xl font-bold">Are you ready?</p>
          </header>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setShowSettings(true)
            }}
          >
            <Button>Get Started</Button>
          </form>
        </div>
      )}
    </div>
  )
}
