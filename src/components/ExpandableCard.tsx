//import React from 'react';
import { ReactNode } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { styled } from 'styled-components';

const AccordionStyle = styled.div`
    padding-left: 25px;
    padding-right: 25px;
    width: 80vw;

  .collapse {
    display: none; /* Initially hidden */
      visibility: visible !important;
  }

  .collapse.show {
    display: block; /* Display when expanded */
  }
`
type CustomToggeleProps = {
    children: ReactNode;
    eventKey: string | null;
}


const ExpandableCard = () => {

function CustomToggle({ children, eventKey } : CustomToggeleProps) {
  const validEventKey = eventKey ?? '';
  const decoratedOnClick = useAccordionButton(validEventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: '#ff9564' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

  return (
    <AccordionStyle>
    {/* <Accordion defaultActiveKey="0"> */}
    <Accordion>
      <Card
      

            style={{ marginBottom: "5rem" }}>
        <Card.Body>
          <h2>Welcome to My Portfolio</h2>
          <p>
            Explore a diverse collection of my work, including school assignments, 
            project finals, capstone endeavors, and independent projects. 
          </p>
          <p>
            Each piece reflects my journey in mastering a wide array of programming techniques.
            Feel free to explore my projects and send me a message if any of my work piques your intrest.
          </p>
        </Card.Body>
        
        {/* //Expand the screen or lower the scroll */}
        <Card.Header>
          <CustomToggle eventKey="0">Click me to learn more!</CustomToggle>
        </Card.Header>
        
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <h3 style={{ color: '#2C3E50', fontSize: '1.5rem' }}>Technical Setup Details:</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', textAlign: 'left', backgroundColor: '#2980B9', color: 'white' }}>Technology</th>
              <th style={{ padding: '10px', textAlign: 'left', backgroundColor: '#2980B9', color: 'white' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px',textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold' }}>CentOS Setup</td>
              <td style={{ padding: '10px',textAlign: 'left', borderBottom: '1px solid #ddd' }}>Installed and configured CentOS as the operating system on my server.</td>
            </tr>
            <tr>
              <td style={{ padding: '10px',textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold' }}>Apache Web Server</td>
              <td style={{ padding: '10px',textAlign: 'left', borderBottom: '1px solid #ddd' }}>Set up Apache to serve my website's files and handle HTTP requests.</td>
            </tr>
            <tr>
              <td style={{ padding: '10px',textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold' }}>Certbot for SSL</td>
              <td style={{ padding: '10px',textAlign: 'left', borderBottom: '1px solid #ddd' }}>Used Certbot to generate and install an SSL certificate, ensuring secure HTTPS access to my website.</td>
            </tr>
            <tr>
              <td style={{ padding: '10px',textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold' }}>DuckDNS for Dynamic DNS</td>
              <td style={{ padding: '10px',textAlign: 'left', borderBottom: '1px solid #ddd' }}>Configured DuckDNS to manage my domain, enabling it to point to my dynamic IP address.</td>
            </tr>
            <tr>
              <td style={{ padding: '10px',textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold' }}>Docker for Web Applications</td>
              <td style={{ padding: '10px',textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                Deployed my web applications inside Docker containers, ensuring they ran in isolated environments. 
                Each Docker container was proxy-chained through Apache, allowing them to work together seamlessly within the web server framework.
              </td>
            </tr>
          </tbody>
        </table>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>


    </AccordionStyle>
  );
}


export default ExpandableCard;
