import React, { useState } from 'react'

import { MdAdd } from 'react-icons/md'
import '../shared/todo.scss'

const TodoInsert = ({ onInsert, onKeyDownInsert }) => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onClick = () => {
    if (value !== '') {
      onInsert(value)
      setValue('')
    }
  }
  const onKeyDown = (e) => {
    if (value !== '') {
      if (e.keyCode === 13) {
        onKeyDownInsert(value)
        setValue('')
      }
    }
  }

  return (
    <div className="TodoInsert">
      <input
        className="inputbox"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <MdAdd className="addbox" onClick={onClick} />
    </div>
  )
}

export default TodoInsert
