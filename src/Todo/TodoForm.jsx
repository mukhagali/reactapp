import React, { useState } from 'react';
import propTypes from 'prop-types';

const useInputValue = (defaultValue = '') => {
    const [value, setValue ] = useState(defaultValue)
    return {
        bind: {
            value,
            onChange: (event) => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

const TodoForm = ({ onCreate }) => {
    const input = useInputValue('')

    const sendHandler = (event) => {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()    
        }
    }
    return (
        <form className="form" onSubmit={sendHandler}>
            <input type="text" {...input.bind} />
            <button>Add todo</button>
        </form>
    ) 
}

TodoForm.propTypes = {
    onCreate: propTypes.func.isRequired
}

export default TodoForm