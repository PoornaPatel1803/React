'use client'
import React, { useState } from 'react'

const Page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  const completeHandler = (i) => {
    let copyTask = [...mainTask]
    let completedTask = copyTask.splice(i, 1)
    setMainTask(copyTask)
    setCompletedTasks([...completedTasks, ...completedTask])
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <form onSubmit={submitHandler} className='flex flex-col items-center p-5'>
          <div className='flex mb-4'>
            <input 
              type="text" 
              className='text-2xl rounded-l-lg border-4 border-gray-400 p-2 text-center' 
              placeholder='Enter title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input 
              type="text" 
              className='text-2xl rounded-r-lg border-4 border-gray-400 p-2 text-center' 
              placeholder='Description'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button className='bg-slate-700 px-16 py-3 m-3 p-2 rounded-md text-white'>Add</button>
        </form>
      </div>
      <hr />
      <div className='p-8 bg-slate-300'>
        {mainTask.length > 0 && <h1 className='font-bold text-2xl mb-4'>Remaining Tasks</h1>}
        <ul>
          {mainTask.length > 0 ? mainTask.map((t, i) => (
            <li key={i} className='flex justify-between w-full border border-gray-400 p-4 mt-4 break-words whitespace-pre-wrap'>
              <h2 className='font-semibold'>{i + 1}</h2>
              <h1 className='font-medium text-2xl font-mono'>{t.title}</h1>
              <h5 className='font-thin text-xl font-mono'>{t.desc}</h5>
              <button 
                onClick={() => completeHandler(i)}
                className='bg-green-500 hover:bg-green-700 text-white font-bold rounded px-2'>&#x2713;</button>
              <button 
                onClick={() => deleteHandler(i)}
                className='bg-red-500 hover:bg-red-700 text-white font-bold rounded px-2'>X</button>
            </li>
          )) : <h2 className='text-center'>No task Available</h2>}
        </ul>
      </div>
      {completedTasks.length > 0 && (
        <div className='p-8 bg-slate-300 mt-8'>
          <h1 className='font-bold text-2xl mb-4'>Completed Tasks</h1>
          <ul>
            {completedTasks.map((t, i) => (
              <li key={i} className='flex justify-between w-full border border-gray-400 p-4 mt-4 break-words whitespace-pre-wrap'>
                <h2 className='font-semibold'>{i + 1}</h2>
                <h1 className='font-medium text-2xl font-mono'>{t.title}</h1>
                <h5 className='font-thin text-xl font-mono'>{t.desc}</h5>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Page
