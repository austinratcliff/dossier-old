import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRenderer from 'react-test-renderer'
import Project from './Project'

describe('Project component', () => {
  it('renders without crashing', () => {
    const project = {
      id: 1,
      badges: []
    }
    const div = document.createElement('div')
    ReactDOM.render(<Project project={project} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const project = {
      id: 1,
      badges: []
    }
    const component = ReactTestRenderer.create(<Project project={project} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
