const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


describe('registeration', () => {

  let data = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

  let data2 = {
    name: "test",
    email: "test@gmail.com",
    password: "123",
    password2: "12",
  };


  let data3 = {
    name: "test",
    email: "test@gmail.com",
    password: "123456",
    password2: "123456",
  };

  let { errors, isValid } = validateRegisterInput(data);
  

  test('should return error if user name is empty', () => {

    expect(errors.name).toMatch(/required/);  

  });

  it('should return error if user email is empty', () => {

    expect(errors.email).toMatch(/invalid/);  

  });

  it('should return error if password is empty', () => {

    expect(errors.password).toMatch(/required/);  

  });

  it('should return error if confirm password is empty', () => {

    expect(errors.password2).toMatch(/required/);  

  });

  // For data2.
  output = validateRegisterInput(data2);
  it('should return error if password is not of required length', () => {

    expect(output.errors.password).toMatch(/6 character/);  

  });

  it('should return error if confirm password does not match password', () => {

    expect(output.errors.password2).toMatch(/match/);  

  });

  // For data3.
  it('should return isValid true if all the inputs are valid', () => {
    output2 = validateRegisterInput(data3);
    expect(output2.isValid).toBe(true);

  });
  
});

describe('login', () => {

  let data4 = {
    email: "test@.com",
    password: "",
  };
  
  output3 = validateLoginInput(data4);
  it('should return error if user email is empty or invalid', () => {

    expect(output3.isValid).toBe(false);

  });

  it('should return error if password is empty', () => {

    expect(output.isValid).toBe(false);

  });

  let data5 = {
    email: "test@gmail.com",
    password: "123456",
  };


  output4 = validateLoginInput(data5);
  it('should return isValid true if input is valid', () => {

    expect(output4.isValid).toBe(true);

  });

});

