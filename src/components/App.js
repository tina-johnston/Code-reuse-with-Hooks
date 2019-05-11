import React, { useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {
  const [resource, setResource] = useState('post')

  const renderPosts = () => {
    return setResource('posts')
  }

  const renderTodos = () => {
    return setResource('todos')
  }

  return (
    <div>
      <UserList />
      <div>
        <button onClick={renderPosts}>posts</button>
        <button onClick={renderTodos}>todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  )
}

export default App
