import React, { useState } from 'react'

const Child1 = (props) => {
    return (
        <div>
            <h1>Child Component</h1>
            <button onClick={() => props.callback(props.setAge + 1)}>Update Age</button>
        </div>
    )
}

export default Child1