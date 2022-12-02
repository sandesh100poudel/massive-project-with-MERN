import React from 'react';
import Input from '../../shared/components/FormElement/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = () => {
  return <form className='place-form'>
    <Input 
    element="input" 
    type="text"
     label="title"
     validators={[VALIDATOR_REQUIRE()]}
     errorText="please enter valid text " />
  </form>
};

export default NewPlace;