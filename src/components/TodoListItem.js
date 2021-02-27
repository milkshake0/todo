import React, { useRef, useState } from 'react'

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import '../shared/todo.scss'

const TodoListItem = ({ todo, onRemove, onToggle, updateText }) => {
  const [text, setText] = useState(todo.text)
  const [editable, setEditable] = useState(false)
  const textareaRef = useRef()
  const divRef = useRef()
  const [inputHeight, setInputHeight] = useState(0)

  const onTextEdit = () => {
    setEditable(true)
    setInputHeight(`${divRef.current.scrollHeight}px`)
    //아직 textarea가 렌더링되지 않아서 focus하면 undefined 에러..
    // textareaRef.current.focus()
  }
  const handleChange = (e) => {
    setText(e.target.value)
    resizeInputHeight()
  }
  const resizeInputHeight = () => {
    if (textareaRef.current) {
      setInputHeight(`${textareaRef.current.scrollHeight}px`)
      textareaRef.current.style.height = inputHeight
    }
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
        <textarea
          className="inputbox"
          value={text}
          ref={textareaRef}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{ height: inputHeight }}
        />
      ) : (
        <div
          className={todo.checked ? 'textbox line' : 'textbox'}
          ref={divRef}
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
