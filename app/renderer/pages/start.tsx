import * as React from 'react'

import {Button, Segmented, Page} from 'framework7-react'
import {useDispatch} from 'react-redux'
import {startAction} from '../actions/start-action'

export default () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(startAction('click'))
    }
    return (
        <Page>
            <h1>Right Panel</h1>
            <h1>Electron + React + Parcel</h1>
            <Segmented strong>
                <Button href={'/'} onClick={onClick} fill>show files</Button>
            </Segmented>
        </Page>
    )
}
