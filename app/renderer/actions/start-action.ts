import {createActionCreator} from 'deox'


export const startAction = createActionCreator('START_ACTION',
    resolve => (text: string) => resolve(text))

