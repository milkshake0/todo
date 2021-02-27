import React, { useState, useCallback, useRef, useEffect } from 'react'

import '../shared/reset.css'

import TodoTemplate from '../components/TodoTemplate'
import TodoList from '../components/TodoList'
import TodoInsert from '../components/TodoInsert'

const TodoPage = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos') || '[]'),
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // const nextId = useRef(0)
  const [nextId, setNextId] = useState(0)

  const onInsert = useCallback(
    (value) => {
      const temp = [
        ...todos,
        {
          id: nextId,
          text: value,
          checked: false,
        },
      ]
      setTodos(temp.sort(compareChecked))
      // nextId.current += 1
      setNextId(nextId + 1)
    },
    [todos, nextId],
  )
  const onKeyDownInsert = useCallback(
    (value) => {
      const temp = [
        ...todos,
        {
          id: nextId,
          text: value,
          checked: false,
        },
      ]
      setTodos(temp.sort(compareChecked))
      // nextId.current += 1
      setNextId(nextId + 1)
    },
    [todos, nextId],
  )

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const onToggle = (id) => {
    const temp = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    )
    setTodos(temp.sort(compareChecked))
  }
  const compareChecked = (a, b) => {
    if (a.checked === false && b.checked === true) {
      return -1
    }
    if (a.checked === true && b.checked === false) {
      return 1
    }
    return 0
  }

  const onAllRemove = () => {
    setTodos([])
  }

  const updateText = (text, id) => {
    const temp = todos.map((v) => {
      return v.id === id ? { id: id, text: text, checked: false } : v
    })
    setTodos(temp.sort(compareChecked))
  }
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} onKeyDownInsert={onKeyDownInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onAllRemove={onAllRemove}
        updateText={updateText}
      />
    </TodoTemplate>
  )
}

export default TodoPage
