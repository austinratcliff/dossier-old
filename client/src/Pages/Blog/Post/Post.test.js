import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRenderer from 'react-test-renderer'
import Post from './Post'

describe('Post component', () => {
  it('renders without crashing', () => {
    const post = {
      id: 1
    }
    const div = document.createElement('div')
    ReactDOM.render(<Post post={post} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const post = {
      id: 1
    }
    const component = ReactTestRenderer.create(<Post post={post} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
