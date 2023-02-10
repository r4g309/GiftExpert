import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const cleanString = inputValue.trim().toLowerCase()

    if (!cleanString) return
    onNewCategory(cleanString)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gifts'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
