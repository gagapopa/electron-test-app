import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'framework7/css/framework7.bundle.min.css'

import Framework7 from 'framework7/framework7.esm.bundle'
import Framework7React from 'framework7-react'
import App from './App'

Framework7.use(Framework7React)

const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('root')
    )
}

render(App)
