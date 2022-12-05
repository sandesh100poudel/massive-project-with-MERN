import React from "react";
import Card from "../../shared/components/UIElement/Card";
import Input from "../../shared/components/FormElement/Input";
import Button from "../../shared/components/FormElement/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";

const Auth = () =>{

    const [formState, inputHandler]=useForm({
        email:{
            value:"",
            isValid:false
        },
        password:{
            value:"",
            isValid:false
        }
    },false);


    const authSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs);
    }
    return (
        
            <Card className='authentication'>
    <h2>login required</h2>
    <hr />
    <form onSubmit={authSubmitHandler}>
        <Input 
        element="input"
        id="email"
        type="email"
        label="E-Mail"
        validators={[VALIDATOR_EMAIL()]}
        errorText="please enter correct email"
        onInput={inputHandler} />

         <Input 
        element="input"
        id="password"
        type="password"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorText="please enter correct password"
        onInput={inputHandler} />

        <Button type="submit" disabled={!formState.isValid} >LOGIN</Button>
    </form>
    </Card>
    )

}

export default Auth;