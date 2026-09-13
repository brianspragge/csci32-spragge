interface CatProps {
  name: string
  breed: string
}

export function Cat({ name, breed }: CatProps) {
  return (
    <div>
      {name} is a {breed} cat
    </div>
  )
}

interface KittenProps {
  name: string
  cuteness: number
}

export function Trainer({ name: nameOfKitten, cuteness: cutenessLevel }: KittenProps) {
  return (
    <div>
      {nameOfKitten} has a cuteness level of {cutenessLevel}
    </div>
  )
}
