import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { IoEye } from "react-icons/io5";//open icon
import { IoEyeOffOutline } from "react-icons/io5"; //close icon

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Custom validation function for password
  const validatePassword = (value) => {
    // Password should have at least one uppercase letter, one number, and one special character
    return (
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) ||
      "Password must contain at least one uppercase letter, one number, and one special character"
    );
  };

  function toggleVisibility(){
    setPasswordVisible(!passwordVisible);
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </div>
      <div>
        <label>Second Name</label>
        <input {...register("secondName", { required: true })} />
        {errors.secondName && <span>This field is required</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          type={passwordVisible  ? "text" : "password" }
          {...register("password", { 
            required: true,
            validate: validatePassword // Apply custom validation function
          })}
        />
        {
          passwordVisible ? (
       <IoEye onClick={toggleVisibility} />
          ):(
            <IoEyeOffOutline  onClick={toggleVisibility}/>
      
          )
        }


        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>

    
</>
  );
}

export default App;
