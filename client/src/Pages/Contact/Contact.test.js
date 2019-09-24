import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRenderer from 'react-test-renderer'
import Contact from './Contact'

describe('Contact component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Contact />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const component = ReactTestRenderer.create(<Contact />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
