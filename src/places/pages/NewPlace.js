import React,{useCallback,useReducer} from 'react';
import Button from '../../shared/components/FormElement/Button';
import Input from '../../shared/components/FormElement/Input';
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import './NewPlace.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer,{
    input:{
      title:{
        value:"",
        isValid:false
      },
      description:{
        value:"",
        isValid:false,

      }
    }, isValid:false
  });

const inputHandler = useCallback((id,value,isValid)=>{
  dispatch({
    type:'INPUT_CHANGE',
    value:value,
    isValid:isValid,
    inputId:id
  })
},[]);

  return <form className='place-form'>
    <Input 
    element="input" 
    type="text"
     label="Title"
     validators={[VALIDATOR_REQUIRE()]}
     errorText="please enter valid text "
     onInput={inputHandler} />

<Input 
    element="textarea" 
    type="text"
     label="Description"
     validators={[VALIDATOR_MINLENGTH(5)]}
     errorText="please enter valid description "
     onInput={inputHandler} />

     <Button type="submit" disabled={!formState.isValid}>Add Places</Button>
  </form>
};

export default NewPlace;