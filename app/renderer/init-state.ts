export interface InitState {
    startPage: {
        startMessage: string | never
    }
}

export const initState: InitState = {
    startPage: {
        startMessage: ''
    }
}