import {App, View} from 'framework7-react'
import * as React from 'react'
import {Framework7Params} from 'framework7/components/app/app-class'
import routes from './routes'

const params: Framework7Params = {
    name: 'electron-app',
    id: 'com.mytest.electron.app',
    theme: 'aurora',
    autoDarkTheme: true,
    initOnDeviceReady: true
}
export default () => (
    <App params={params} routes={routes}>
        <View main url={'/'}/>
    </App>
)
