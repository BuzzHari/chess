const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");

describe('user.generateAuthToken', () => {

  it('should return a valid JWT', () => {
    const payload = {
      name: "test"
    };
    const user = new User(payload);
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, config.get("secretOrKey"));
    expect(decoded).toMatchObject(payload);
  });
  
})

