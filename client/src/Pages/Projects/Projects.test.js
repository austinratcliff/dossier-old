import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRenderer from 'react-test-renderer'
import Projects from './Projects'

describe('Projects component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Projects />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const component = ReactTestRenderer.create(<Projects />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
