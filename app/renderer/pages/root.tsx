import * as React from 'react'
import {Button, Page} from 'framework7-react'
import {InitState} from '../init-state'
import {useSelector} from 'react-redux'

export default () => {
    const selectStart = ({startPage:{startMessage}}: InitState) => startMessage
    const selector = useSelector(selectStart)
    return (
        <Page name={'root'}>
            <div style={{textAlign: 'center', marginTop: 100}}>
                <h3><Button outline href='/start/'>Begin {selector}</Button></h3>
            </div>
        </Page>
    )
}
