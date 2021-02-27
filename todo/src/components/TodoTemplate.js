import React from 'react'

import '../shared/todo.scss'

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="centered title">To do list</div>
      {children}
    </div>
  )
}

export default TodoTemplate
