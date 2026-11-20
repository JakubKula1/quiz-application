import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'
import { setStartTime } from '../redux/time_reducer'

export default function Main() {

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(usernameRef.current?.value && passwordRef.current?.value){
            dispatch(setUserId(usernameRef.current?.value))

            /** start time measuring */
            dispatch(setStartTime());
        }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Sports Quiz</h1>

        <ol>
            <li>After login, you'll have to answer 10 questions one after another.</li>
            <li>Each question has four options. You can choose only one options.</li>
            <li>You can review and change answers before you finish the quiz.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
            <input ref={usernameRef} className="userid" type="text" placeholder='Username*' />
            <input ref={passwordRef} className="userid" type="password" placeholder='Password*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}
