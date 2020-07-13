import {initState} from '../init-state'
import {createReducer} from 'deox'
import {startAction} from '../actions/start-action'


export const startReducer = createReducer(initState.startPage, handle => [
    handle(startAction, (state, {payload}) => ({
        ...state,
        startMessage: payload
    }))
])




