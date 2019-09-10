import React, { useState } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import sortList from "../stepMaker/sortAction";
import "./Input.css";

const Input = props => {
  let [validated, setValidated] = useState(false);

  const handleRun = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    let arr = form.values.value.split(",");
    arr.map((item, index) => {
      let itm = parseInt(arr[index].trim());
      if (itm) arr[index] = itm;
      else arr.splice(index, 1);
    });

    if (arr.length) {
      props.sortList(arr);
      props.visualize();
    }
    setValidated(true);
  };

  return (
    <Card className="inputsCard">
      <Card.Header className="cardHeader">Inputs</Card.Header>
      <Card.Body>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleRun}
          className="inputForm"
        >
          <Form.Group as={Row} controlId="customValidation01">
            <Form.Label className="formLabel" column sm={2}>
              Values
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="values"
                pattern="[0-9]+(((\s*),(\s*)[0-9]*)(\s*)*)*"
                placeholder="Please enter comma separated numbers"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter comma separated numbers
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <div className="submitDiv">
            <Button type="submit" className="submitButton">
              Run
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
// const mapStateToProps = state => ({
//   // sortedList: state.output.sortedList
//   sortedList: state.steps.steps
// });

export default connect(
  null,
  { sortList }
)(Input);
