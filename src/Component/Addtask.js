import React, { useState } from 'react'
import "./addtask.css"

function Addtask() {
    const [tasks, settask] = useState([])
    const [form, setForme] = useState()
    const addtask = (e) => {
        e.preventDefault();
        settask(prev => ([...prev, { title: form.title, priorite: form.pr }]))
        console.log(tasks)
    }
    const handlechange = (e) => {
        const { name, value } = e.target;
        setForme(prev => ({ ...prev, [name]: value }))
    }
    return (
        <div className='container-add'>

            <div className='add'>
                <div>

                    <input type="text" id='titre' name='title' placeholder='Task Title' onChange={handlechange} />
                </div>
                <div>

                    <input type="text" id='prio' name="pr" placeholder='Task Priorite' onChange={handlechange} />
                </div>
                <div><button onClick={addtask}> Add new Task</button></div>

            </div>
        </div>
    )
}

export default Addtask