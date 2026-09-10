'use client'

import { useState } from 'react'
import RandomNumberGuessingGameMenu from './random-number-guessing-game-menu'
import RandomNumberGame from './random-number-guessing-game'
import { getRandomInt } from '@repo/math/getRandomInt'

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
    <div className="p-24 max-w-[800px] m-auto">
      {running ? (
        <RandomNumberGame endGame={endGame} randomNumber={randomNumber} maxGuessCount={maxGuessCount} />
      ) : (
        <RandomNumberGuessingGameMenu startGame={startGame} />
      )}
    </div>
  )
}
