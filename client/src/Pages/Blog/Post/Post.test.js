import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRenderer from 'react-test-renderer'
import Post from './Post'

describe('Post component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Post />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const component = ReactTestRenderer.create(<Post />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
