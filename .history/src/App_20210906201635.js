import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import './App.scss';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import PostList from './components/PostList'
import Pagination from './components/Pagination'

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()

        const {data} = responseJSON
        setPostList(data)
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }
    
    fetchPostList()

  }, [])

  function handlePageChange(newPage) {
    console.log('New page: ', newPage)
  }

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id)
    if(index < 0) return;

    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValues) {
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }

  return (
    <div className="app">
      <h1>React Hooks - TodoList!</h1> 

      <PostList posts={postList}/>
      <Pagination pagination={pagination} onPageChange={handlePageChange}/>
      {/* <TodoForm onSubmit = {handleTodoFormSubmit}/>
      <TodoList todos = {todoList} onTodoClick={handleTodoClick}/> */}
    </div>
  );
}

export default App;
