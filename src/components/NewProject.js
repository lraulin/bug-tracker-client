import { createProject } from "api";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const NewProject = () => {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createProject(projectName);
  };

  return (
    <div>
      <h1>New Project</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNewProjectName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            name="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter project name"
          />
        </Form.Group>

        <Form.Group controlId="formNewProjectOrg">
          <Form.Label>Organization</Form.Label>
          <Form.Control as="select">
            <option>Default select</option>
          </Form.Control>
          <Form.Text className="text-muted">
            Categorizing by organization helps keep your projects organized.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Project
        </Button>
      </Form>
    </div>
  );
};

export default NewProject;
