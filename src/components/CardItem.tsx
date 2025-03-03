import React, { useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import { animated } from '@react-spring/web';

enum ProjectLanguage {
  HTML,
  CSS,
  JavaScript,
  TypeScript,
  Python,
  Java,
  ASP,
  React,
  Vue,
  PHP,
  CPP,
  CSharp,
  Unity,
  Godot,
  Docker,
  Node,
  Express,
  MongoDB,
  SQL,
  PUG,
  BASH
}


const projectLanguageLogos: { [key in ProjectLanguage]: string } = {
  [ProjectLanguage.HTML]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  [ProjectLanguage.CSS]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  [ProjectLanguage.JavaScript]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  [ProjectLanguage.TypeScript]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  [ProjectLanguage.Python]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  [ProjectLanguage.Java]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  [ProjectLanguage.ASP]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  [ProjectLanguage.React]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  [ProjectLanguage.Vue]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  [ProjectLanguage.PHP]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  [ProjectLanguage.CPP]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  [ProjectLanguage.CSharp]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  [ProjectLanguage.Unity]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
  [ProjectLanguage.Godot]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg',
  [ProjectLanguage.Docker]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  [ProjectLanguage.Node]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  [ProjectLanguage.Express]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  [ProjectLanguage.MongoDB]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  [ProjectLanguage.SQL]: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg',
  [ProjectLanguage.PUG]: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/pug.svg',
  [ProjectLanguage.BASH]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
};



interface CardItemProps {
  id: number;
  title: string;
  text: string;
  demoUrl: string;
  gitUrl: string;
  gifUrl: string;
  imgUrl: string;
  running: boolean;
  // projectType?: ProjectLanguage;
  projectTypes?: ProjectLanguage[];
  enabled?: boolean; // Optional prop to disable the card
  openModal: (title: string, 
              url: string, 
              git_url: string, 
              gif_url: string, 
              img_url:string,
              running: boolean,
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
    running = false,
    enabled =  true, // Default is false, meaning card is enabled
    openModal,
    projectTypes
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null); // Create a ref for the card

    const handleMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      console.log(`Card X Position (Left): ${rect.left}px`);
    }
  };
    
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
       <animated.div id={`card-${id}`} 
            onMouseEnter={() => enabled && setIsHovered(true)}
            onMouseLeave={() => enabled && setIsHovered(false)}
            onClick={() => enabled && openModal(title, demoUrl, gitUrl, gifUrl, imgUrl, running, text)}
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
            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
              {projectTypes && projectTypes.map((type, index) => (
                <img 
                  key={index} 
                  src={projectLanguageLogos[type]} 
                  alt={ProjectLanguage[type]} 
                  style={{ width: '32px', height: '32px', marginRight: '5px' }} 
                  // style={{ width: '24px', height: '24px', marginRight: '5px' }} 
                />
              ))}
            </div>
            {/* {projectType !== undefined && (
              <img src={projectLanguageLogos[projectType]} alt={ProjectLanguage[projectType]} />
            )} */}

          </Card.Body>
        </Card>
      </animated.div>

  </div>
  
  );
};

export default CardItem;
