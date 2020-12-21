import React, { useContext } from 'react'
import propTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        padding: "5px 10px",
        border: "1px solid silver",
        borderRadius: "5px",
        margin: "5px 0"
    },
    input: {
        marginRight: "10px"
    }
}

const TodoItem = ({todo, index, toggle}) => {
    const { removeTodo } = useContext(Context)
    let classes = [];
    if (todo.completed) {
        classes.push('done')
    }
    return <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" checked={todo.completed} style={styles.input} onChange={() => toggle(todo.id)}/>
                <strong>{ index + 1 }</strong> {todo.title}
            </span>
            <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&#10005;</button>
        </li>
}

TodoItem.propTypes = {
    todo: propTypes.object,
    index: propTypes.number,
    toggle: propTypes.func.isRequired,
}

export default TodoItem