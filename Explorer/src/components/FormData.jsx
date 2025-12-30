import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const FormData = ({ data }) => {
  const [inputData, setInputData] = useState({
    grid: "",
    name: "",
    course: "",
    number: "",
    address: "",
  });

  const handleInputData = (e, field) => {
    setInputData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    data(inputData);
    setInputData({
      grid: "",
      name: "",
      course: "",
      number: "",
      address: "",
    });
  };

  return (
    <Container className="border border-black mt-5 ">
      <Form onSubmit={handleSubmitData}>
        <h1 className="text-center  ">Student Data</h1>

        <Form.Group className="mb-3">
          <Form.Label>GR_ID</Form.Label>
          <Form.Control
            type="number"
            required
            value={inputData.grid}
            onChange={(e) => handleInputData(e, "grid")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            required
            value={inputData.name}
            onChange={(e) => handleInputData(e, "name")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            required
            value={inputData.course}
            onChange={(e) => handleInputData(e, "course")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="number"
            required
            value={inputData.number}
            onChange={(e) => handleInputData(e, "number")}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            required
            value={inputData.address}
            onChange={(e) => handleInputData(e, "address")}
          />
        </Form.Group>

        <Button className="w-100" type="submit" variant="success">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default FormData;
