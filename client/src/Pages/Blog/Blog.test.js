import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRenderer from 'react-test-renderer'
import Blog from './Blog'

describe('Blog component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Blog />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const component = ReactTestRenderer.create(<Blog />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
