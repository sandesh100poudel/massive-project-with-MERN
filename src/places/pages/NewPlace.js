import React from 'react';
import Input from '../../shared/components/FormElement/Input';
import './NewPlace.css';

const NewPlace = () => {
  return <form className='place-form'>
    <Input 
    element="input" 
    type="text"
     label="title"
     validators={[]}
     errorText="please enter valid text " />
  </form>
};

export default NewPlace;