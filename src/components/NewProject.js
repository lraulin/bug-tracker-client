import React from "react";
import { Button, Form } from "react-bootstrap";

const NewProject = () => {
  return (
    <div>
      <h1>New Project</h1>
      <Form>
        <Form.Group controlId="formNewProjectName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control type="projectName" placeholder="Enter project name" />
          <Form.Text className="text-muted">
            Keep it short for best results.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formNewProjectOrg">
          <Form.Control as="select">
            <option>Default select</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewProject;
