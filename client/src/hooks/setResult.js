import { useEffect, useState } from 'react'
import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

/** insert user data once; returns true when the request has finished */
export const usePublishResult = (resultData) => {
    const [published, setPublished] = useState(false);

    useEffect(() => {
        const { result, username } = resultData;
        (async () => {
            try {
                if(result.length === 0 && !username) throw new Error("Couldn't get Result");
                await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data)
            } catch (error) {
                console.log(error)
            } finally {
                setPublished(true)
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return published;
}