import React from 'react';

export class Todo extends React.Component {
    
    constructor(props) {
        super(props);
    }

    delete = () => {
        const { todo, deleteTodo } = this.props;
        deleteTodo(todo.id);
    };



    mark = () => {
        const { todo, markTodo } = this.props
        markTodo(todo.id)
    };

    render() {
        const { todo } = this.props;
        return (
            <div className="todotlist__item form-check">
                <input className="todolist__done form-check-input" type="checkbox" name="done"
                    checked={todo.isCompleted} onChange={this.mark} />
                <label style={
                  todo.isCompleted ? 
                  { textDecoration: 'line-through' } : 
                  { textDecoration: 'none' }
                }>
                    {todo.content}
                </label>
                <button type="button" 
                    onClick={this.delete}>刪除</button>
                <hr />
            </div>);
      }
}