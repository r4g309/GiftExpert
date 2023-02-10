import { useState } from 'react'
import { GifGrid, AddCategory } from './components'

export default function GiftExpertApp () {
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (name) => {
    const compare = categories.map(element => element.toLowerCase())
    const index = compare.indexOf(name)

    if (index !== -1) {
      categories.splice(index, 1)
    }

    setCategories([name, ...categories])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />

      {
        categories.map(category =>
          <GifGrid
            key={category}
            category={category}
          />)
      }

    </>
  )
}
