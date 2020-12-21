import React from 'react'

export default class Modal extends React.Component {
    
    state = {
        isOpen: false,
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true })}>Open modal</button>
                {this.state.isOpen && <div className="modal">
                    <div className="modal-body">
                        <h2>Hi! I am modal</h2>
                        <hr/>
                        <p>Hello from React modal component</p>
                        <button onClick={() => this.setState({isOpen: false })}>close window</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}