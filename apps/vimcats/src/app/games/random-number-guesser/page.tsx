'use client'

import { useState } from 'react'
import RandomNumberGuessingGameMenu from './random-number-guessing-game-menu'
import RandomNumberGame from './random-number-guessing-game'
import { getRandomInt } from '@repo/math/getRandomInt'
import { Header } from '@repo/ui/header'
import { Page } from '@repo/ui/page'
import { navLinks } from '../../nav-links'

export interface RandomNumberGuessingGameProps {
  lowRange: number
  highRange: number
  maxGuessCount: number
}

export interface RandomNumberGuessingGameMenuProps {
  startGame: (props: RandomNumberGuessingGameProps) => void
}

export interface RandomNumberGuessingGameEngineProps {
  randomNumber: number
  maxGuessCount: number
  endGame: () => void
}

export default function RandomNumberGuesser() {
  const [running, setRunning] = useState(false)
  const [randomNumber, setRandomNumber] = useState(0)
  const [maxGuessCount, setMaxGuessCount] = useState(0)

  function startGame({ lowRange, highRange, maxGuessCount }: RandomNumberGuessingGameProps) {
    const newRandomNumber = getRandomInt({ lowRange, highRange })
    setRandomNumber(newRandomNumber)
    setMaxGuessCount(maxGuessCount)
    setRunning(true)
  }

  function endGame() {
    setRunning(false)
  }

  return (
    <>
      <Header links={navLinks} />
      <Page>
        {running ? (
          <RandomNumberGame endGame={endGame} randomNumber={randomNumber} maxGuessCount={maxGuessCount} />
        ) : (
          <RandomNumberGuessingGameMenu startGame={startGame} />
        )}
      </Page>
    </>
  )
}
