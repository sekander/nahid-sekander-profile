// import React, { useEffect, useState } from 'react';
// import { ReactDOM } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; // Importing Link from react-scroll
// import APITest from '../APITest';

const HomeContainer = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  backdrop-filter: blur(10px); /* Glass-like blur effect */
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Light shadow for depth */
  margin-top: 30px;
    -webkit-text-size-adjust: none; /* Correct usage to disable text scaling */
`;
const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 20px;
  color: rgba(255, 255, 255, 0.9); /* Slightly transparent white text */
  font-weight: bold;

`;

const StyledButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'small', // Prevent 'small' from being passed to the DOM
  })<{ small?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: ${(props) => (props.small ? '5px 10px' : '10px 20px')};
  font-size: ${(props) => (props.small ? '12px' : '16px')};
  font-weight: bold;
  border: none;
  border-radius: 0px !important; /* Rounded corners for buttons with !important */
  background: ${(props) =>
    props.small ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 111, 97, 0.8)'} !important; /* Transparent white for small, transparent orange for big */
  color: ${(props) => (props.small ? 'black' : 'white')} !important; /* Black text for small, white text for big */
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(5px) !important; /* Subtle glass effect */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important; /* Shadow to enhance button visibility */

  &:hover {
    background: ${(props) =>
      props.small ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 149, 100, 0.8)'} !important; /* Transparent white for small hover, transparent orange for big hover */
    transform: translateY(-5px);
  }

  @media (max-width: 568px) {
    width: 100%; /* Full width for mobile */
  }
`;

const TopButtonGroup = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr); /* Two columns layout */
  gap: 2px; /* Spacing between buttons */
  width: 100%; /* Full width of the container */
  max-width: 500px;
  
  }
`;

const BottomButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns layout */
  gap: 2px; /* Spacing between buttons */
  margin-top: 2px;
  margin-bottom: 80px;
  height: 60px;
  width: 100%; /* Full width of the container */
  max-width: 500px;
  
`;

const Home: React.FunctionComponent = () => {

  return (
    <>
     <HomeContainer>
      <HomeText>
        {/* Animated Header */}
        <motion.h1
          className="text-4xl font-bold"
          style={{
            marginTop: '5rem',
            fontSize: '3rem',
            color: 'white',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nahid
        </motion.h1>
        <motion.h1
          className="text-4xl font-bold"
          style={{
            color: 'white',
            fontSize: '3rem',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sekander
        </motion.h1>
        <motion.h1
          className="text-4xl font-bold"
          style={{
            color: 'white',
            fontSize: '3rem',
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
         {/* <h1>  */}
            <TypeAnimation 
            sequence={[
                "Programmer", 1000,
                "Web Developer", 1000,
                "Indie Game Programmer", 1000,
                "Linux Administrator", 1000,
                "and Teacher", 1000,
            ]}
            speed={50}
            repeat={Infinity}
            />
        {/* </h1> */}
        </motion.h1>






      </HomeText>
      <div className='home-button-group'>
        <TopButtonGroup>
          <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70} // Adjust the offset if you have a fixed navbar
            >
            <StyledButton style={{ height: '250px', marginTop: '80px'}}

            >
              {/* <FaIcons.FaInfoCircle /> */}
              Learn About This Self-Hosted Web Site
            </StyledButton>
          </ScrollLink>

          <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-70} // Adjust the offset if you have a fixed navbar
            >
          <StyledButton style={{ height: '250px', marginTop: '80px'}}
          
          >
            {/* <FaIcons.FaLaptopCode /> */}
            Learn About My Projects
          </StyledButton>
          </ScrollLink>
        </TopButtonGroup>

        <BottomButtonGroup>
          <StyledButton
            // small
            small={true}
            onClick={() => window.open('https://docs.google.com/document/d/1YjUUDrk-XqD7qTWNiyCXEnpT9FPAVPVzZPfXIwKw4wg/edit?tab=t.0#heading=h.413nannykgih', '_blank')}
          >
            <FaIcons.FaDownload />
            Download CV
          </StyledButton>

          <StyledButton
            // small
            small={true}
            onClick={() => window.open('https://linkedin.com/in/nahid-sekander-43393b253', '_blank')}
          >
            <FaIcons.FaLinkedin />
            LinkedIn
          </StyledButton>

          <StyledButton
            small={true}
            onClick={() => window.open('https://github.com/sekander', '_blank')}
          >
            <FaIcons.FaGithub />
            GitHub
          </StyledButton>
        </BottomButtonGroup>
      </div>








       {/* Render raw JSON data
       <h2>Raw JSON Data from Docker PS:</h2>
       {Array.isArray(dockerpsData) && dockerpsData.map((item, index) => (
        <div key={index}>
          <h3>Item {index + 1}</h3>
          <ul>
            {Object.entries(item || {}).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value as React.ReactNode}
              </li>
            ))}
          </ul>
        </div>
        ))}
       
       <h2>Raw JSON Data from Docker STATS:</h2>
       {Array.isArray(dockerstatsData) && dockerstatsData.map((item, index) => (
        <div key={index}>
          <h3>Item {index + 1}</h3>
          <ul>
            {Object.entries(item || {}).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value as React.ReactNode}
              </li>
            ))}
          </ul>
        </div>
        ))}
        <APITest returnData={setDockerpsData} returnData_2={setDockerstatsData}/> */}

    </HomeContainer>

    </>
  );
};

export default Home;
