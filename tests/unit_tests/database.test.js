const mongoose = require('mongoose');
const config = require('config');
const {connectDB, disconnectDB} = require('../../config/db');
const db = config.get('mongoURI');
const User = require("../../models/User");
const userData = {
  name: "jest_test",
  email: "jest_test@gmail.com",
  password: "jest123"
};

const inValidUserData = {
  name:"jest_test",
  email: "jest_test@gmail.com",
  phone_n0: "23432432",
  password: "jest123"
};

const inValidUserData2 = {
  name:"jest_test",
  password: "jest123"
};


describe('Database Test', () => {

  // Connecting to MongoDB
  beforeAll(async () => {

      try {
        await connectDB();
      } catch (error) {
        console.error(error);
        process.exit(1);
      }

  });

  it('create & save user successfully', async () => {
    const user = new User(userData);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.password).toBe(userData.password);
  });

  
  it('insert user but the feild which isnt defined in schema shoudl be undefined', async () => {
    const user = new User(inValidUserData);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(inValidUserData.name);
    expect(savedUser.email).toBe(inValidUserData.email);
    expect(savedUser.phone_n0).toBeUndefined();
    expect(savedUser.password).toBe(inValidUserData.password);
  });


  it('creating user without required feild should fail', async () => {

    const user = new User(inValidUserData2);
    let err;

    try {
      const savedUser = await user.save();
    } catch(error) {
      err = error
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();

  });

  afterAll(async () => {
    await disconnectDB();
  });

  
});
