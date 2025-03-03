import React from 'react';
// import React, { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
// import emailjs from 'emailjs-com';

const ContactText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: white;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  /* 2 buttons per row */
  gap: 20px;
  margin-top: 20px;
  justify-items: center; /* Center items horizontally */
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;  /* Stack buttons vertically on smaller screens */
    width: 80vw; /* Adjust width to be smaller on small screens */
  }

  @media (max-width: 500px) {
    width: 90vw; /* Further reduce the width for very small screens */
  }
`;

const ContactForm = styled(Form)`
  width: 70vw; /* Set width to scale with browser width */
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80vw; /* Make form width smaller on small screens */
  }

  @media (max-width: 500px) {
    width: 90vw; /* Further reduce form width on very small screens */
  }
`;

const Contact: React.FunctionComponent = () => {

  return (
    <>
      <ContactText>Contact</ContactText>
      <ContactForm>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label
            style={{
              color: '#ff9564',
              fontWeight: '600',
              fontSize: '1.1em',
              marginBottom: '10px',
              display: 'block',
              textAlign: 'left',
            }}
          >
            Name
          </Form.Label>
          <Form.Control type="email" placeholder="Enter Name Here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label
            style={{
              color: '#ff9564',
              fontWeight: '600',
              fontSize: '1.1em',
              marginBottom: '10px',
              display: 'block',
              textAlign: 'left',
            }}
          >
            Email address
          </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label
            style={{
              color: '#ff9564',
              fontWeight: '600',
              fontSize: '1.1em',
              marginBottom: '10px',
              display: 'block',
              textAlign: 'left',
            }}
          >
            Subject
          </Form.Label>
          <Form.Control type="email" placeholder="Enter Subject Here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label
            style={{
              color: '#ff9564',
              fontWeight: '600',
              fontSize: '1.1em',
              marginBottom: '10px',
              display: 'block',
              textAlign: 'left',
            }}
          >
            Example textarea
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <ButtonGrid>
          <button
            style={{
              color: '#ff9564',
              fontWeight: '600',
              fontSize: '1.1em',
              marginBottom: '10px',
              display: 'block',
              textAlign: 'center',
              padding: '10px 20px',
              border: '2px solid #ff9564',
              backgroundColor: 'transparent',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
          <button
            style={{
              color: '#ff9564',
              fontWeight: '600',
              fontSize: '1.1em',
              marginBottom: '10px',
              display: 'block',
              textAlign: 'center',
              padding: '10px 20px',
              border: '2px solid #ff9564',
              backgroundColor: 'transparent',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Clear
          </button>
        </ButtonGrid>
      </ContactForm>
    </>
  );
};

export default Contact;
