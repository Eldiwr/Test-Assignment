import { useState } from "react";
import {
  StyledForm,
  FormWrapper,
  StyledInput,
  SubmitButton,
} from "./Form.styled";


export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [position, setPosition] = useState("")

    const handleFormChange = (event) => {
        switch (event.target.id) {
            case "name":
                setName(event.target.value);
                break;
            case "email":
                setEmail(event.target.value);
                break;
            case 'number':
                setNumber(event.target.value);
                break;
            default:
                return;        
        }
    };

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, number);
        setName("");
        setEmail("");
        setNumber("");
    }

    return (
      <>
        <FormWrapper>
          <h3>Working with POST request</h3>
          <StyledForm onSubmit={formSubmit}>
            <StyledInput
              type="text"
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(event) => handleFormChange(event)}
            />
            <StyledInput
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => handleFormChange(event)}
            />
            <StyledInput
              type="number"
              id="number"
              placeholder="Phone"
              value={number}
              onChange={(event) => handleFormChange(event)}
            />
            <h3>Select your position</h3>
            <label>
              <input type="radio" />
              Frontend developer
            </label>
            <label>
              <input type="radio" />
              Backend developer
            </label>
            <label>
              <input type="radio" />
              Designer
            </label>
            <label>
              <input type="radio" />
              QA
            </label>

            <SubmitButton>Sign up</SubmitButton>
          </StyledForm>
        </FormWrapper>
      </>
    );
}