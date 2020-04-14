import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Field, withFormik, yupToFormErrors } from "formik";
import { SemanticFormikInputField } from "./SemanticFormikFields";
import * as Yup from "yup";

class chessApp extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch("http://localhost:3030/api/courses")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          paddingLeft: "320px",
          paddingRight: "320px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            textAlign: "center",
            fontWeight: "bold",
            top: "0",
            paddingTop: "35px",
            fontFamily: "Letterpress",
          }}
        >
          CHESS
        </h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>

        <Form
          style={{
            width: "600px",
            margin: "0 auto",
            paddingTop: "120px",
            paddingBottom: "550px",
          }}
          onSubmit={this.handleSubmit}
        >
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
export default chessApp;
