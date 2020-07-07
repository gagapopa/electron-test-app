import * as React from 'react'
import {Button, Page} from 'framework7-react'

export default () => (
    <Page name={'root'}>
        <div style={{textAlign: 'center', marginTop: 100}}>
            <h3><Button outline href='/start/'>Begin</Button></h3>
        </div>
    </Page>
)
