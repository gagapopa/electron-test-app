import {combineReducers} from 'redux'
import {InitState} from '../init-state'
import {startReducer} from './start-reducer'

export const rootReducer = combineReducers<InitState>({
    startPage: startReducer
})
