import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const style = {
    ul: {
        listStyle: 'none'
    },
    div: {
        textAlign: 'center',
    }
}

const TodoList = (props) => {
    return (
        <div className="todo-list">
            <ul className="list" style={style.ul}>
                { props.todos.map((todo, index) => {
                    return <TodoItem todo={todo} key={todo.id} index={index} toggle={props.onToggle} />
                }) }
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onToggle: PropTypes.func.isRequired
};

export default TodoList