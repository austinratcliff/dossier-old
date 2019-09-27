import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Admin.css'

const Admin = () => {
  return (
    <div className="Admin">
      <h1 className="header">
        <i
          className="fas fa-user-lock"
          title="about"
        /> Admin
      </h1>
      <div className="new-project-form">
        <h2 className="form-header">
          <span className="highlight">
            New project
          </span>
        </h2>
        <Form
          action="/api/projects"
          method="POST">
          <Form.Group>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              placeholder="Description"
            />
            <Form.Text>
              <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet/">
                Markdown cheatsheet
              </a>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="projectURL"
              placeholder="Project URL"
            />
            <Form.Text>
              https://project.com
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="githubURL"
              placeholder="GitHub URL"
            />
            <Form.Text>
              https://github.com/username/project
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Check
              inline
              type="checkbox"
              label="Creator"
              name="badges[]"
              value="CREATOR"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Contributor"
              name="badges[]"
              value="CONTRIBUTOR"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Active"
              name="badges[]"
              value="ACTIVE"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Inactive"
              name="badges[]"
              value="INACTIVE"
            />
          </Form.Group>
          <Button type="submit">
            Add
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Admin
