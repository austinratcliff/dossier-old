import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRenderer from 'react-test-renderer'
import Admin from './Admin'

describe('Admin component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Admin />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const component = ReactTestRenderer.create(<Admin />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
