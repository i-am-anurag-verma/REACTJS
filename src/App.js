import React, { useState } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 character and shouldn't include any special charecter",
      label: "Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:"It should be valid email address!",
      label: "Email",
      required:true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required:true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password should be 8-20 character and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      required:true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage:"Password's don't match!",
      label: "Confirm Password",
      pattern:values.password,
      required:true
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
    <h1>Register</h1>
        {inputs.map((item) => {
          return(
          <FormInput
            key={item.id}
            {...item}
            value={values[item.name]}
            onChange={onChange}
          />
        )})}
        <button> Submit </button>
      </form>
    </div>
  );
};

export default App;
