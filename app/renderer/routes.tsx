import * as React from 'react'

import Root from './pages/root'
import Start from './pages/start'
import {Router} from 'framework7/modules/router/router'

const router: Router.RouteParameters[] = [
    {
        path: '/',
        component: Root,
    },
    {
        path: '/start/',
        component: Start
    }
]

export default router

