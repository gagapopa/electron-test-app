import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'framework7/css/framework7.bundle.min.css'

import Framework7 from 'framework7/framework7.esm.bundle'
import Framework7React from 'framework7-react'
import App from './App'
import {createStore} from 'redux'
import {rootReducer} from './reducers/start-reducer'

Framework7.use(Framework7React)

const store = createStore(rootReducer)

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        document.getElementById('root')
    )
}

render(App)
