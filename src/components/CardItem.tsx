import React, { useRef, useState } from 'react';
//import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
//import { useSpring, animated } from '@react-spring/web';
import { animated } from '@react-spring/web';
// import styled from 'styled-components';

// // Custom Button Styling with Dynamic Size
// interface ButtonProps {
//   size?: 'small' | 'medium' | 'large';
// }

// const CustomButton = styled.button<ButtonProps>`
//   padding: ${(props) =>
//     props.size === 'large'
//       ? '15px 30px'
//       : props.size === 'small'
//       ? '8px 16px'
//       : '10px 20px'};
//   font-size: ${(props) =>
//     props.size === 'large'
//       ? '20px'
//       : props.size === 'small'
//       ? '12px'
//       : '16px'};
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 20px;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

interface CardItemProps {
  id: number;
  title: string;
  text: string;
  demoUrl: string;
  gitUrl: string;
  gifUrl: string;
  imgUrl: string;
  isInView: boolean;
  enabled?: boolean; // Optional prop to disable the card
  openModal: (title: string, 
              url: string, 
              git_url: string, 
              gif_url: string, 
              img_url:string,
              modal_description: string) => void;
}
  const CardItem: React.FC<CardItemProps> = ({ 
    id, 
    title, 
    text, 
    demoUrl, 
    gitUrl,
    gifUrl, 
    imgUrl, 
    enabled =  true, // Default is false, meaning card is enabled
//    isInView, 
    openModal 
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    // const [hasAnimated, setHasAnimated] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null); // Create a ref for the card

    const handleMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      console.log(`Card X Position (Left): ${rect.left}px`);
      // setHasAnimated(true); // Set the flag once the animation has completed
    }
  };
/*
    const cardAnimation = useSpring({
        // opacity: isInView && !hasAnimated ? 1 : 0,
        // transform: isInView && !hasAnimated ? 'translateX(0)' : 'translateX(-100px)',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
        config: { tension: 150, friction: 60 },
        delay: id * 300, // Delay each card's animation (300ms for each card)
        // onRest: () => {
        //   if (isInView) {
        //     setHasAnimated(true); // Set the flag once the animation has completed
        //   }
        // },
      });

    // Side card animation
    const sideCardAnimation = useSpring({
      transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
      opacity: isHovered ? 1 : 0,
      zIndex: isHovered ? 1 : -1,
      config: { tension: 200, friction: 20 },
    });
*/


  // useEffect(() => {
  //   if (isInView) {
  //     setHasAnimated(true); // Reset animation when the card comes back into view
  //   }
  // }, [isInView]);
    
  return (

    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        opacity:  enabled ? 1 : 0.5 ,
        zIndex : 1,
        // marginBottom: '20px',
      }}
    >
      {/* <animated.div id={`card-${id}`}  */}
       {/* <animated.div id={`card-${id}`} style={hasAnimated ? {} : cardAnimation}  */}
       {/* <animated.div id={`card-${id}`} style={cardAnimation}  */}
       <animated.div id={`card-${id}`} 
            onMouseEnter={() => enabled && setIsHovered(true)}
            onMouseLeave={() => enabled && setIsHovered(false)}
            onClick={() => enabled && openModal(title, demoUrl, gitUrl, gifUrl, imgUrl, text)}
            style={{ cursor: enabled ? 'pointer' : 'not-allowed' }}
      >
        <Card style={{ 
          width: '15rem', 
          height: '20rem',
          background: 'white',
          padding: '0px', // Adjust overall card padding here
          animation: isHovered ? "backgroundColorTransition 1.5s infinite" : "none", // Apply animation on hover
          transition: "all 0.3s ease", // Smooth resizing and other transitions
          }}>
          <div
            style={{
              width: '100%',
              height: '280px',
              // backgroundColor: 'black',
              // backgroundColor: 'black',
              backgroundColor: 'rgba(0, 0, 0, 0.9)', // Black with 50% transparency
              backgroundImage: `url(${imgUrl})`, // Correctly set background image here
              objectFit: 'cover', // Ensures the image maintains aspect ratio and fills the container
              backgroundPosition: 'center', // Centers the image within the div
              backgroundRepeat: 'no-repeat', // Prevents image repetition

              borderTopLeftRadius: '5px', // Ensure the div also has rounded top-left corner
              borderTopRightRadius: '5px', // Ensure the div also has rounded top-right corner
            }}
            onMouseEnter={handleMouseEnter}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {/* <Card.Text>{text}</Card.Text> */}
            {/* <CustomButton size="medium" onClick={() => openModal(title, demoUrl, gitUrl, gifUrl, imgUrl, text)}>
              Run Demo
            </CustomButton> */}
          </Card.Body>
        </Card>
      </animated.div>

  </div>
  
  );
};

export default CardItem;
