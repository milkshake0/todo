import React from 'react'

import '../shared/todo.scss'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, onRemove, onToggle, onAllRemove, updateText }) => {
  console.log(todos)
  if (todos.length < 1) {
    return <div className="nothing">할 일 목록을 추가해보세요.</div>
  }
  return (
    <div className="TodoList">
      <div className="allClearBtn_con">
        <button className="allClearBtn" onClick={onAllRemove}>
          전체 삭제
        </button>
      </div>

      {todos.map((todo) => (
        <TodoListItem
          className="TodoListItem"
          onRemove={onRemove}
          onToggle={onToggle}
          todo={todo}
          key={todo.id}
          updateText={updateText}
        />
      ))}
    </div>
  )
}

export default TodoList
