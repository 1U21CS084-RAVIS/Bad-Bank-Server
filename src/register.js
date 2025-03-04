import React, { useState } from "react";
//import UserContext from "./context";
import {Button} from 'react-bootstrap';
import axios from 'axios';
// import {Button }from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
    // let users = useContext(UserContext);
    let [Name, setName] = useState('');
    let [Email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(name, email, pass);
        // users.users.push(
        let item = { name: Name, email: Email, password: pass, amount: 1000 };
        axios.post('http://localhost:8080/create',item)
        alert("Submitted Sucessfully");
    }

    return (
        <>
        
        <div style={{ borderRadius:"10px", backgroundColor:"lightgray" , width:"500px" , padding:"20px" , marginTop:"4%" ,marginLeft:"30%"}}>
            <h1 style={{marginLeft:"33%",color:"red",marginTop:"5%"}}>Register</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label style={{color:"blue",marginLeft:"5%"}}>Name</Form.Label>
        <Form.Control type="text"  onChange={(e) => setName(e.target.value)} placeholder="Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:"blue",marginLeft:"5%"}}>Email</Form.Label>
        <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:"blue",marginLeft:"5%"}}>Password</Form.Label>
        <Form.Control type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password"  />
      </Form.Group>
      <Button variant="primary" type="submit" style={{marginLeft:'40%' ,marginTop:"10%"}}>
        Submit
      </Button>
    </Form>
    </div>
  
            {/* <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" />
                <Button type="submit">Submit</Button>
            </form> */}
        </>
    );
}