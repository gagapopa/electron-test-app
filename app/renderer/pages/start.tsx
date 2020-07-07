import * as React from 'react'

import {Button, theme, Segmented, Page} from 'framework7-react'

export default () => {
    const isAurora = theme.aurora || 'none'

    return (
        <Page>
            <h1>Right Panel</h1>
            <h1>Electron + React + Parcel and theme: {isAurora ? 'aurora' : 'not aurora'}</h1>
            <Segmented strong>
                <Button href={'/'} fill>Back</Button>
                <Button href={'/'}  fill>Back2</Button>
            </Segmented>
        </Page>
    )
}
