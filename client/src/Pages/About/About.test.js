import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRenderer from 'react-test-renderer'
import About from './About'

describe('About component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<About />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const component = ReactTestRenderer.create(<About />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
