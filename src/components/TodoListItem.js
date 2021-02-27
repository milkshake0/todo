import React, { useState } from 'react'

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import '../shared/todo.scss'

const TodoListItem = ({ todo, onRemove, onToggle, updateText }) => {
  const [text, setText] = useState(todo.text)
  const [editable, setEditable] = useState(false)
  const onTextEdit = () => {
    setEditable(true)
  }
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      updateText(text, todo.id)
      setEditable(false)
    }
  }
  return (
    <div className="TodoListItem">
      <div className="checkbox" onClick={() => onToggle(todo.id)}>
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      {editable ? (
        <input
          className="inputbox"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div
          className={todo.checked ? 'textbox line' : 'textbox'}
          onClick={onTextEdit}
        >
          {todo.text}
        </div>
      )}
      <div onClick={() => onRemove(todo.id)} className="removebox">
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem
