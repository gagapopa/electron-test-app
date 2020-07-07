import * as React from 'react'
import * as Renderer from 'react-test-renderer'

import {View} from 'framework7-react'

test('page Root', () => {
    const component = Renderer.create(
        <View url={'/'}/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
