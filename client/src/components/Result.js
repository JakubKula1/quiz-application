import React, { useEffect } from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom';

import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { earnPoints_Number, finalScore } from '../helper/helper';

/** import actions  */
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult';


export default function Result() {

    const dispatch = useDispatch()
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)

    const earnPoints = earnPoints_Number(result, answers, 1)
    const { startTime, endTime } = useSelector((state) => state.time);
    const time = calculateElapsedTime()
    const score = finalScore(result, answers, 1, time)

    function calculateElapsedTime() {
        if (startTime && endTime) {
            const elapsedTime = endTime - startTime;
            const elapsedSeconds = elapsedTime / 1000;

            return elapsedSeconds.toFixed(2);
        }
        return 'Error measuring time';
    }


    /** store user result */
    const published = usePublishResult({
        result,
        username : userId,
        score : score,
        points: earnPoints,
        time : time
    });

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Results</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Username :</span>
                <span className='bold'>{userId || ""}</span>
            </div>
            <div className='flex'>
                <span>Total time :</span>
                <span className='bold'>{time || 0} s</span>
            </div>
            <div className='flex'>
                <span>Correct Answers : </span>
                <span className='bold'>{earnPoints || 0} / { queue.length || 0}</span>
            </div>
            <div className='flex'>
                <span>Score : </span>
                <span className='bold'>{score || 0}</span>
            </div>
        </div>

        <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>

        <div className="container">
            {/* result table */}
            {published && <ResultTable></ResultTable>}
        </div>
    </div>
  )
}
