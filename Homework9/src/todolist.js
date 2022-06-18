import React from 'react';
import './App.css';
import { Todo } from './todo';

const styleArgument = { fontSize: "40px", color: "#A3A3FF" };


class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      todoText: '',
      isProcessing: false
    }
    this.id = 1
    }

    
    handleChange = (e) => {
        this.setState({
          todoText: e.target.value
        })
    }


  handleSubmit = (e) => {
    const { todos, todoText } = this.state
    
    this.setState({
    todos: [...todos, {
        id: this.id,
        isCompleted: false,
        content: todoText,
    }],
    todoText: '',
    })
    
    e.preventDefault(); //使用 preventDefault() 阻止無效文本輸入到達輸入字段
      this.id++
      
  }


  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }


  markTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        } // 只把不同 id 的部份做相反的處理
      })
    })
  }

  render() {
    const { todos, todoText } = this.state
    
    return (
      <div className="App container">
        <div className="todolist__input">
        <h1 style={styleArgument}>CGU Todo list</h1>   
                <form onSubmit={this.handleSubmit} >
                <div >
                        <input type="text" value={todoText} onChange={this.handleChange} placeholder="add a new todo..." />
                        <input type="submit" value="Add" />
                </div>
                
                </form>
          <hr />
        </div>
        <div className="todolist__list">
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id}
              deleteTodo={this.deleteTodo}
              markTodo={this.markTodo}/>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;