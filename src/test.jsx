import React, {useState} from 'react'
export function Test() {
    const [count, setCount] = useState(0)
    
    function updateNum() {
        let c = count
        setCount(c = c + 1)
        setCount(c + 2)
    }

    return <p onClick={() => updateNum()}>{count}</p>
}