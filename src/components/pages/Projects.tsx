import { useState, useEffect, useMemo } from 'react';
// import { useTransition, animated } from '@react-spring/web';
import { motion } from 'framer-motion';
import Modal from 'react-modal';


//Images
// import calendar_img from '../../assets/calendar.png';

// Set the root element for accessibility purposes
Modal.setAppElement('#root');  // The root element is typically <div id="root"></div>


import CardItem from '../CardItem'; // Assuming CardItem is a separate component
import { styled } from 'styled-components';
import React from 'react';

// Styling for the Grid of Buttons
const ButtonGrid = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
  justify-items: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */

  /* Grid layout that adjusts based on available width */
  // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjusts columns based on screen width */
  grid-template-columns: repeat(3, minmax(250px, 1fr)); /* Adjusts columns based on screen width */
  
  /* Optional: Limit the grid's width to avoid it stretching too wide on very large screens */
  // max-width: 100%;
  padding: 0 20px;  /* Optional: Adds some padding for small screens to avoid content touching the edges */

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    gap: 15px; /* Reduce gap for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  /* 1 card per row on very small screens */
    gap: 10px; /* Reduce gap further on smaller screens */
  }
`;


const Projects: React.FunctionComponent = () => {
  // Initialize the state with card IDs and visibility flags
  //const [cardIds, setCardIds] = useState([
  const [cardIds ] = useState([
    { id: 'card-0', isInView: false },
    { id: 'card-1', isInView: false },
    { id: 'card-2', isInView: false },
    { id: 'card-3', isInView: false },
    { id: 'card-4', isInView: false },
    { id: 'card-5', isInView: false },
    { id: 'card-6', isInView: false },
    { id: 'card-7', isInView: false },
    { id: 'card-8', isInView: false }
  ]);

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [openIframe, setOpenIframe] = useState(false);
  const [closingIframe, setClosingIframe] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; 
                                                     url: string; 
                                                     git_url: string; 
                                                     gif_url: string;
                                                     img_url: string;
                                                     modal_description: string;
                                                     } | null>(null);

  // Open modal and set content (title + URL)
  const openModal = (title: string, 
                     url: string, 
                     git_url: string, 
                     gif_url: string,
                     img_url: string, 
                     modal_description: string) => {
    setModalContent({ title, url, git_url, gif_url, img_url, modal_description });
    setIsOpen(true);


    // Disable background scroll
    document.body.classList.add('modal-open');
  };

  // const closeModal = () => {
  const closeModal = (modalType: string) => {
    if (modalType === "appInfo")
    {
      setClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
         
        // Enable background scroll
        document.body.classList.remove('modal-open');
      }, 300); // Wait for the fade-out animation duration
    }
    else if (modalType === "iframe")
    {
      setClosingIframe(true);
      setTimeout(() => {
        setOpenIframe(false);
        setClosingIframe(false);
        // Enable background scroll
        document.body.classList.remove('modal-open');
      }, 300); // Wait for the fade-out animation duration
    }
  };

  const toggleIframe = () => {
    setOpenIframe(prevState => !prevState);
  };


  //#################################################################################################  
  //#################################################################################################  
  //#################################################################################################  
  //#################################################################################################  

  const phones = [
  {
    "model": "Apple iPhone 15 Pro Max",
    "screen_size_inch": 6.7,
    "screen_resolution": { "width": 2796, "height": 1290 }
  },
  {
    "model": "Samsung Galaxy S23 Ultra",
    "screen_size_inch": 6.8,
    "screen_resolution": { "width": 3088, "height": 1440 }
  },
  {
    "model": "Google Pixel 8 Pro",
    "screen_size_inch": 6.7,
    "screen_resolution": { "width": 2992, "height": 1344 }
  },
  {
    "model": "OnePlus 11 5G",
    "screen_size_inch": 6.7,
    "screen_resolution": { "width": 3216, "height": 1440 }
  },
  {
    "model": "Xiaomi 13 Pro",
    "screen_size_inch": 6.73,
    "screen_resolution": { "width": 3200, "height": 1440 }
  },
  {
    "model": "Samsung Galaxy Z Fold 5",
    "screen_size_inch": 7.6,
    "screen_resolution": { "width": 2208, "height": 1768 }
  },
  {
    "model": "Apple iPhone 15",
    "screen_size_inch": 6.1,
    "screen_resolution": { "width": 2532, "height": 1170 }
  },
  {
    "model": "Sony Xperia 1 V",
    "screen_size_inch": 6.5,
    "screen_resolution": { "width": 3840, "height": 1644 }
  },
  {
    "model": "Oppo Find X6 Pro",
    "screen_size_inch": 6.82,
    "screen_resolution": { "width": 3168, "height": 1440 }
  },
  {
    "model": "Motorola Edge 40 Pro",
    "screen_size_inch": 6.7,
    "screen_resolution": { "width": 2400, "height": 1080 }
  },
  {
    "model": "LG Velvet",
    "screen_size_inch": 6.8,
    "screen_resolution": { "width": 2460, "height": 1080 }
  },
  {
    "model": "Nokia 3310",
    "screen_size_inch": 2.4,
    "screen_resolution": { "width": 320, "height": 240 }
  },
  {
    "model": "Samsung Galaxy Z Flip 4",
    "screen_size_inch": 6.7,
    "screen_resolution": { "width": 2640, "height": 1080 }
  },
  {
    "model": "Huawei P50 Pro",
    "screen_size_inch": 6.6,
    "screen_resolution": { "width": 2700, "height": 1228 }
  },
  {
    "model": "Samsung Galaxy Z Flip 5",
    "screen_size_inch": 6.7,
    "screen_resolution": { "width": 2640, "height": 1080 }
  },
  {
    "model": "Motorola Razr 2023",
    "screen_size_inch": 6.9,
    "screen_resolution": { "width": 2640, "height": 1080 }
  },
  {
    "model": "Google Pixel Fold",
    "screen_size_inch": 7.6,
    "screen_resolution": { "width": 2208, "height": 1840 }
  },
  {
    "model": "Huawei Mate Xs 2",
    "screen_size_inch": 8.0,
    "screen_resolution": { "width": 2480, "height": 2200 }
  },
  {
    "model": "Samsung Galaxy Z Fold 4",
    "screen_size_inch": 7.6,
    "screen_resolution": { "width": 2208, "height": 1768 }
  },
  {
    "model": "Asus ZenFone 9",
    "screen_size_inch": 5.9,
    "screen_resolution": { "width": 2400, "height": 1080 }
  },
  {
    "model": "Xiaomi Mi Mix 4",
    "screen_size_inch": 6.67,
    "screen_resolution": { "width": 2400, "height": 1080 }
  },
  {
    "model": "Vivo X Fold 2",
    "screen_size_inch": 8.03,
    "screen_resolution": { "width": 2160, "height": 1916 }
  }
];


  // State to store current viewport dimensions
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  // Update the dimensions when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);

      // Update the state with new viewport dimensions
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      getBrowserDimensionsInInches(newWidth, newHeight);
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getBrowserDimensionsInInches(width: number, height: number) {
    // Estimate the device pixel ratio (DPI) using devicePixelRatio
    const dpr = window.devicePixelRatio;
  
    // Get the screen's DPI by assuming it's the standard DPI (96 DPI for most displays)
    const standardDPI = 96; // Most common DPI for displays, but this can vary
  
    // Adjust DPI with devicePixelRatio
    const dpi = standardDPI * dpr;
  
    // Convert dimensions to inches
    const widthInInches = width / dpi;
    const heightInInches = height / dpi;
  
    console.log(`Width in inches: ${widthInInches}`);
    console.log(`Height in inches: ${heightInInches}`);
  
    return { widthInInches, heightInInches };
  }





  const maxScreenWidth = Math.max(...phones.map(phone => phone.screen_resolution.width));
  const maxScreenHeight = Math.max(...phones.map(phone => phone.screen_resolution.height));

  const scaleRatioX = viewportWidth / maxScreenWidth;
  const scaleRatioY = viewportHeight / maxScreenHeight;
 
  // Function to convert dimensions from inches to pixels
 function convertInchesToPixels(inches: number) {
    const dpi = window.devicePixelRatio * 96; // Estimate DPI with devicePixelRatio (96 is standard DPI)
    return inches * dpi;
 }

 // Function to calculate screen width and height from diagonal screen size
const calculateScreenDimensions = (screen_size_inch: number, width: number, height: number) => {
  // Calculate diagonal resolution (using Pythagorean theorem)
  const diagonalResolution = Math.sqrt(width ** 2 + height ** 2);

  // Calculate the scale factor based on diagonal size
  const scale = screen_size_inch / diagonalResolution;

  // Calculate the width and height in inches
  const calculatedWidthInch = width * scale;
  const calculatedHeightInch = height * scale;

  return { calculatedWidthInch, calculatedHeightInch };
};

  const phoneMappedToViewportScale = useMemo(() => {
    return phones.map((phone) => {

     // Calculate pixel dimensions based on the real screen size in inches
     const { calculatedWidthInch, calculatedHeightInch } = calculateScreenDimensions(
       phone.screen_size_inch,
       phone.screen_resolution.width,
       phone.screen_resolution.height
     );

     const pixelWidth = convertInchesToPixels(calculatedWidthInch);
     const pixelHeight = convertInchesToPixels(calculatedHeightInch);
     console.log(pixelWidth);
     console.log(pixelHeight);

    return {
      model: phone.model,
      screen_size_inch: phone.screen_size_inch,
      screen_resolution: phone.screen_resolution,
      width_inch: calculatedWidthInch.toFixed(2),
      height_inch: calculatedHeightInch.toFixed(2),
      width_px: pixelWidth,
      height_px: pixelHeight,
    };
  });
}, [phones, scaleRatioX, scaleRatioY]); // Recalculate when scale ratios change



  //State for select phone
  const [selectedPhone, setSelectedPhone] = useState(phoneMappedToViewportScale[0]);
  // const [selectedPhone ] = useState(phoneMappedToViewportScale[0]);

  const handlePhoneSelet = (event: { target: { value: any; }; }) => {
    const select = event.target.value;
    console.log(select);
    const phone = phoneMappedToViewportScale.find(p => p.model === select);
    console.log(phone);
    // const phone = phoneMappedToViewportScale.find(p => p.model === select);
    setSelectedPhone(phone);
  };


  //#################################################################################################  
  //#################################################################################################  
  //#################################################################################################  
  //#################################################################################################  




  const cardsData = 
  [
    {
      id: 0,
      title: 'Wellness Tracker',
      text: `
      <h3>Description</h3>
      <p>The Wellness Tracker helps users track and improve their wellness habits, such as exercise, coffee consumption, smoking, and sleep. It uses a calendar layout with color-coded wellness scores (A, B, C) for each day, allowing users to input data only for the current day.</p>
        </br>

      <h3>Technology Stack</h3>
      <ul>
        <li><strong>JavaScript</strong></li>
        <li><strong>HTML</strong></li>
        <li><strong>CSS</strong></li>
      </ul>
        </br>

      <h3>Key Features</h3>
      <h4>Calendar Layout</h4>
      <p>Each day is represented by a cell with a grade reflecting the user's habits.</p>
      <ul>
        <li><strong>Green (A):</strong> Good habits</li>
        <li><strong>Yellow (B):</strong> Moderate habits</li>
        <li><strong>Red (C):</strong> Poor habits</li>
      </ul>

      <h4>Animations</h4>
      <ul>
        <li><strong>Color Transitions:</strong> Smooth color changes in calendar cells based on the score.</li>
        <li><strong>Hover Effects:</strong> Enlarging or opacity changes when hovering over a day.</li>
        <li><strong>Pop-up for Input:</strong> Smooth fade-in pop-up for daily activity input.</li>
        <li><strong>Progress Bar:</strong> Visual progress bar based on the user’s daily score.</li>
      </ul>
    `,
      demoUrl: 'https://nahid-sekander.duckdns.org/projects/calendar/',
      gitUrl: 'https://github.com/sekander/Humber_College_Projects/tree/main/Web_Development/Semester_1/HTTP_5121-Web_Design/Project/calendar',
      gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnF6NHZnM3hqNjFxYXNvbWZ5eTRnb3l2ejBpYWplamM3dmR4Zml5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xZKXxXR0Amtlde/giphy.gif',
      imgUrl: '/assets/calendar.svg',
      online: true,
    },
    {
      id: 1,
      title: 'MTG Life Counter',
      text: `
      <h2>Description</h2>
        <p>The <strong>MTG Life Counter</strong> app simplifies life total tracking, commander deaths, and key game events in Commander format, helping players focus on strategy without manual tracking.</p>
        </br>
      
        <h3>Technology Stack</h3>
        <ul>
          <li><strong>JavaScript</strong></li>
          <li><strong>HTML</strong></li>
          <li><strong>CSS</strong></li>
        </ul>

        </br>
        <h2>Features</h2>

        <h3>Life Point Tracking:</h3>
        <p>Easily track each player’s life total, with no need for physical tokens or paper.</p>

        <h3>Support for Multiple Players:</h3>
        <p>Supports 2 to 4 players, each with an independent life counter for smooth gameplay.</p>

        <h3>Commander Loss Tracking:</h3>
        <p>Tracks how many times a player’s commander has been sent to the command zone.</p>

        <h3>Player Stats Tracker:</h3>
        <p>The app tracks key stats like lands, tokens, deck size, graveyard count, exiled cards, commander deaths, and turn timer, updated automatically during the game.</p>

        <h4>Stats Tracked:</h4>
        <ul>
            <li><strong>Lands:</strong> Lands controlled by the player.</li>
            <li><strong>Total Tokens:</strong> Tokens generated by the player.</li>
            <li><strong>Total Deck:</strong> Cards remaining in the player’s deck.</li>
            <li><strong>Graveyard:</strong> Cards in the player’s graveyard.</li>
            <li><strong>Exiled Cards:</strong> Cards exiled by the player.</li>
            <li><strong>Commander Deaths:</strong> Times the commander has died and been sent to the command zone.</li>
            <li><strong>Timer:</strong> Time left on the player’s turn.</li>
        </ul>
      `,
      demoUrl: 'https://nahid-sekander.duckdns.org/projects/mtg_life_counter/',
      gitUrl: 'https://github.com/sekander/Humber_College_Projects/tree/main/Web_Development/Semester_1/HTTP_5122-Front_End_Web_Development/Project/mtg_life_counter',
      gifUrl: '',
      imgUrl: '/assets/mtg-life.svg',
      online: true,
    },
    {
      id: 2,
      title: 'Teacher App',
      text: `
      <h2>Description</h2>
        <p>The Teacher Edit Application allows users to update teacher details like employee number, name, hire date, and salary through a web interface, with both frontend and backend components for seamless functionality.</p>
        </br>
        <h3>Technology Stack</h3>
        <ul>
          <li><strong>ASP .NET</strong></li>
          <li><strong>JavaScript</strong></li>
          <li><strong>HTML</strong></li>
          <li><strong>CSS</strong></li>
        </ul>

        </br>
        <h2>Features</h2>

        <h3>Frontend:</h3>
        <p>A dynamic form to select and edit teacher details.</p>

        <h3>Backend:</h3>
        <p>API endpoints for handling data validation and database updates.</p>

        <h3>Data Validation:</h3>
        <p>Ensures valid data for name, hire date, and salary.</p>

        <h3>Dynamic Data Population:</h3>
        <p>The dropdown and form are populated dynamically with teacher data.</p>

        <h3>API Communication:</h3>
        <p>The frontend communicates with the backend to update teacher info.</p>

        </br>
        <h2>Backend Implementation</h2>

        <h3>Teacher Edit API (PUT /api/teacherapi/teacheredit)</h3>
        <p>Validates and updates teacher details, returning a success or failure message.</p>

        <h3>Edit Teacher View (GET /api/teacherpage/edit)</h3>
        <p>Provides teacher data to populate the dropdown and form.</p>

        </br>
        <h2>Frontend Implementation</h2>
        <p>Users interact with a form that pre-fills with teacher data. The form sends updates to the backend API.</p>

        <h3>JavaScript Functionality:</h3>
        <ul>
            <li><strong>Populate Dropdown:</strong> Teacher IDs are fetched dynamically.</li>
            <li><strong>Form Validation:</strong> Ensures valid data before submission.</li>
            <li><strong>Submit Data:</strong> Sends the updated information to the backend.</li>
        </ul>

        </br>
        <h2>Key Data Flow</h2>
        <p>The frontend retrieves teacher data, submits updates, and the backend processes them, returning a response.</p>
      `,
      demoUrl: 'https://nahid-sekander.duckdns.org/teacherapp',
      gitUrl: 'https://github.com/sekander/Humber_College_Projects/tree/main/Web_Development/Semester_1/HTTP_5125-Back_End_Web_Development_1/Cumulative_part_3',
      gifUrl: '',
      imgUrl: '/assets/teacherapp.svg',
      online: true,
    },
    {
      id: 3,
      title: 'React Portfolio',
      text: `
        <h2>Project Description</h2>
          <p>This project is an interactive portfolio website built using <strong>React</strong>, showcasing various components designed to present personal information, project details, and contact information in an engaging and responsive layout. The site includes smooth animations, interactive elements like cards and modals, a collapsible technical details section, and a sidebar for easy navigation. The design is fully responsive, ensuring a seamless experience across both desktop and mobile devices.</p>
          </br>

          <h2>Components</h2>

          <h3>Home Page Component</h3>
          <p>The home page features animated text, styled buttons, and smooth scrolling, enhancing the user's first impression. It utilizes <strong>styled-components</strong>, <strong>framer-motion</strong>, and <strong>react-icons</strong> to create a visually appealing and dynamic introduction.</p>

          <h3>CardItem Component</h3>
          <p>This component displays interactive cards with hover effects, dynamic button sizing, and a demo button that triggers a modal. The hover effects make the cards more engaging, and the button dynamically adjusts its size based on content. Built using <strong>react-bootstrap</strong> and <strong>@react-spring</strong> (inactive animations).</p>

          <h3>ExpandableCard Component</h3>
          <p>The expandable card component provides an accordion-style layout for displaying technical setup details. It includes a custom toggle button for expanding and collapsing content, making it user-friendly and interactive. Powered by <strong>react-bootstrap's Accordion</strong> component.</p>

          <h3>Sidebar Component</h3>
          <p>The sidebar offers a sliding navigation menu that is smoothly integrated with scrolling. It can be toggled using a hamburger icon, and it's fully responsive, ensuring a user-friendly experience on mobile and desktop devices. Utilizes <strong>react-scroll</strong> for smooth scrolling between sections.</p>

          <h3>Contact Form Component</h3>
          <p>A responsive contact form allows users to send inquiries, with fields for name, email, subject, and message. The form is styled using <strong>styled-components</strong> and <strong>react-bootstrap</strong> for a clean and modern look.</p>

          <h3>About Component</h3>
          <p>The "About" section provides a brief introduction, with a centered title and an expandable card that displays additional details. This section is designed to give visitors more insight into the creator of the portfolio.</p>

          <h3>Projects Component</h3>
          <p>The projects section showcases cards for each project. When clicked, each card opens a modal that displays project information and simulates mobile screen views. The component features state management for modals and uses <strong>framer-motion</strong> for smooth animations and dynamic transitions between project details.</p>
          </br>

          <h2>Technologies Used</h2>
          <ul>
              <li><strong>React</strong>: For building the interactive user interface.</li>
              <li><strong>styled-components</strong>: For styling the components in a modular and reusable way.</li>
              <li><strong>framer-motion</strong>: For creating smooth animations and transitions.</li>
              <li><strong>react-bootstrap</strong>: For building responsive and flexible UI components like modals, accordions, and forms.</li>
              <li><strong>react-icons</strong>: For incorporating a variety of icons throughout the website.</li>
              <li><strong>react-scroll</strong>: For implementing smooth scrolling behavior.</li>
          </ul>

      `,
      demoUrl: 'https://nahid-sekander.duckdns.org/projects/calendar/',
      gitUrl: 'https://github.com/sekander/Humber_College_Projects/tree/main/Web_Development/Semester_1/HTTP_5121-Web_Design/Project/calendar',
      gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnF6NHZnM3hqNjFxYXNvbWZ5eTRnb3l2ejBpYWplamM3dmR4Zml5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xZKXxXR0Amtlde/giphy.gif',
      imgUrl: '/assets/portfolio.svg',
      online: true,
    },
    {
      id: 4,
      title: 'TimeSheet App',
      text: `
      <h2>Description</h2>
        <p>An Excel file editor built with Vue.js, allowing users to upload, edit, and save Excel files directly in the browser.</p>
        </br>
        <h2>Technology Stack</h2>
            
        <ul>
            <li><strong>Frontend:</strong> Vue.js</li>
            <li><strong>Libraries:</strong> XLSX (for handling Excel files)</li>
        </ul>

        </br>
        <h2>Features</h2>

        <h3>Upload Excel File:</h3>
        <p>Upload .xlsx files and view the data in a table format.</p>

        <h3>Edit Cells:</h3>
        <p>Modify individual cells in the Excel sheet.</p>

        <h3>Add New Rows:</h3>
        <p>Add new rows with default values such as Title, Date, Description, and Time.</p>

        <h3>Sheet Management:</h3>
        <p>Create, rename, and switch between sheets.</p>

        <h3>Save File:</h3>
        <p>Save the modified file and download it.</p>
      `,
      demoUrl: 'https://nahid-sekander.duckdns.org/timesheetapp',
      gitUrl: 'https://github.com/sekander/my-excel-editor',
      gifUrl: '',
      imgUrl: '/assets/excel-editor.svg',
      online: true,
    },
    {
      id: 5,
      title: 'OVPN Key Generator',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      demoUrl: 'https://nahid-sekander.duckdns.org/ovpn',
      gitUrl: 'https://github.com/sekander/Front-End-Web-Development---HTTP-5122-0NA',
      gifUrl: 'https://github.com/sekander/Web-Design---HTTP-5121-0NA',
      imgUrl: '',
      online: false,
    },
    {
      id: 6,
      title: 'Colour Memory Master',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      demoUrl: 'https://nahid-sekander.duckdns.org/colourmemorymaster',
      gitUrl: 'https://github.com/sekander/MemoryColourMaster',
      gifUrl: 'https://github.com/sekander/Web-Design---HTTP-5121-0NA',
      imgUrl: '',
      online: false,
    },



    {
      id: 7,
      title: 'Contra Remix',
      text: `
        <h2>Description</h2>
          <p>Introducing <strong>Godot Game</strong>, a thrilling side-scrolling game that offers an exciting mix of gameplay mechanics. With an AI system that adapts to the player's position, each encounter presents new challenges. The game supports both <strong>single-player</strong> and <strong>multiplayer split-screen</strong> modes, allowing players to team up for an immersive experience. Players can upgrade equipment, switch gear, and activate abilities to enhance their performance. </p>
          </br>
          <h2>Technology Stack</h2>
          <ul>
              <li><strong>Godot</strong> </li>
          </ul>
          </br>

          <h2>Features</h2>
          <ul>
              <li><strong>Single-Player & Multi-Player:</strong> Experience the game solo or play in a split-screen multiplayer mode for cooperative or competitive fun.</li>
              <li><strong>Precise Controls:</strong> A well-designed control scheme ensures tight, responsive navigation through levels, giving players a precise feel of their character's movement.</li>
              <li><strong>Character Customization:</strong> Equip a variety of gear including armor and items, enhancing your character’s abilities and tailoring them to your playstyle.</li>
              <li><strong>Dynamic AI:</strong> Enemies are programmed with varying AI patterns, including detection range, speed, and attack styles. Each enemy feels unique and offers different challenges, adding depth to the gameplay.</li>
              <li><strong>LAN Play:</strong> Local online play is under development, allowing for seamless multiplayer interactions.</li>
          </ul>
          </br>

          <h2>Development Progress</h2>
          <p>The project is continuously evolving, with LAN play and additional features being actively developed. The AI patterns and control mechanics are being fine-tuned to ensure a fun and challenging experience for all players.</p>
      `,
      demoUrl: 'https://godot-contra-remix.duckdns.org',
      gitUrl: 'https://github.com/sekander/Front-End-Web-Development---HTTP-5122-0NA',
      gifUrl: '',
      imgUrl: '/assets/contra-remix.svg',
      online: true,
    },
    {
      id: 8,
      title: 'Multi-Player Space Shooter',
      text: `
        <h2>Description</h2>
          <p>Multi-Player Space Shooter is a fast-paced, action-packed game developed using <strong>Unity</strong>, where players can engage in thrilling space battles. The game offers both <strong>single-player</strong> and <strong>multi-player</strong> modes, allowing players to connect via LAN for multiplayer or play locally with two controllers on the same device. The game supports multiple platforms and provides a seamless, immersive experience with touch screen controls and interactive menus.</p>
          </br>
          <h2>Technology Stack</h2>
          <ul>
              <li><strong>Unity</strong> </li>
          </ul>
          </br>

          <h2>Features</h2>
          <ul>
              <li><strong>Single-Player & Multi-Player:</strong> Play solo or team up with friends in fast-paced space battles.</li>
              <li><strong>Touch Controls:</strong> Fully supports intuitive touch screen controls for a smooth gaming experience.</li>
              <li><strong>Challenging Enemies:</strong> Face off against multiple enemy types, each with their own unique attack patterns. Adapt your strategies to survive and conquer.</li>
              <li><strong>Power-ups:</strong> Collect 8 different power-ups to gain advantages and enhance your chances of survival in battle.</li>
              <li><strong>Competitive Play:</strong> Compete with others to achieve the highest score and be crowned the ultimate space fighter.</li>
              <li><strong>Interactive Menus:</strong> Easily pause, resume, and navigate through the game with user-friendly, interactive menus.</li>
          </ul>
      `,
      demoUrl: 'https://nahid-sekander.duckdns.org/space-shooter',
      gitUrl: 'https://github.com/sekander/Unity2DSpaceShooter/tree/main',
      gifUrl: '',
      imgUrl: '/assets/space-shooter.svg',
      online: true,
    },
    // Add more cards here
  ];

  return (
    <>
      <motion.h1
        className="text-4xl font-bold"
        style={{ 
                 marginTop: "1.5rem", 
                 marginBottom: "5rem",
                 justifyItems: "center", 
                 alignItems: "center",
                 color: "white" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      {/* <h1>Projects</h1> */}

      {/* Button Grid for Opening Modals */}
      <ButtonGrid
        style={{ marginBottom: "5rem" }}>

        {cardsData.map((card, index) => (
          <CardItem
            key={`card-${card.id}`}
            id={card.id} // Ensure that each card has a unique ID
            title={card.title}
            text={card.text}
            demoUrl={card.demoUrl}
            gitUrl={card.gitUrl}
            gifUrl={card.gifUrl}
            imgUrl= {card.imgUrl}
            isInView={cardIds[index].isInView} // Use the visibility flag for each card
            enabled={card.online}
            openModal={openModal}
          />
        ))}
      </ButtonGrid>

      {/* Modal for displaying the selected Web App */}
      <Modal 
        isOpen={isOpen} 
        onRequestClose={() => closeModal('appInfo')} 
        contentLabel="Example Modal"
        className={`custom-content ${closing ? 'closing' : ''}`}
        overlayClassName={`custom-overlay ${closing ? 'closing' : ''}`}
      >
        {modalContent && (
          <div className="modal-content">
            <button className='close-btn' onClick={() => closeModal('appInfo')}>x</button>
            {/* <button className='close-btn' onClick={() => closeModal('appInfo')}>x</button> */}
            <h2 className="modal-title">{modalContent.title}</h2>
            
            <div className="modal-body">
              {/* Left side with GIF */}
              <div className="modal-gif">
                <img src={modalContent.gif_url} alt="Gif" />
                    <h3>Select Mobile Device</h3>
                    {/* Dropdown to select phone */}
                    <select onChange={handlePhoneSelet} value={selectedPhone.model}>
                      {phoneMappedToViewportScale.map((phone, index) => (
                        <option key={index} value={phone.model}>
                          {phone.model}
                        </option>
                      ))}
                    </select>

                  <button 
                    onClick={toggleIframe}
                    //className='modal-link modal-close-btn '
                    className= {modalContent.title === "Contra Remix" ? 'disabled-btn' : 'modal-link modal-close-btn'}
                    disabled= {modalContent.title === "Contra Remix"}
                  >
                    { openIframe ? 'Close' : `MOBILE : ${selectedPhone.screen_resolution.width} x ${selectedPhone.screen_resolution.height}`} 
                  </button>

                  <a href={modalContent.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className='modal-link demo-link'
                  >WEB DEMO LINK</a>
                  <a href={modalContent.git_url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className='modal-link git-repo-link'
                  >GIT REPO</a>
                  <h2>Current Viewport Dimensions</h2>
                  <p>Width: {viewportWidth}px</p>
                  <p>Height: {viewportHeight}px</p>
                   {/* Conditionally render content based on `isOpen` */}
                      {openIframe && (
                      <>
                        {/* <p>The state is now OPEN!</p> */}
                          <Modal 
                              isOpen={openIframe} 
                              onRequestClose={() => closeModal('iframe')} 
                              contentLabel="Example Modal"
                              className={`custom-content ${closingIframe ? 'closing' : ''}`}
                              //className={`custom-content ${closingIframe ? 'closing' : ''}`}
                              overlayClassName={`custom-overlay ${closingIframe ? 'closing' : ''}`}
                            >
                              {modalContent && (
                                <>
                                  {/* <h2>{modalContent.title}</h2> */}
                                  {/* <a href={modalContent.git_url} target="_blank" rel="noopener noreferrer">GIT REPO</a> */}
                                  <button className='close-btn' onClick={() => closeModal('iframe')}>X</button>
                                      <iframe
                                        src={modalContent.url}
                                        title={modalContent.title}
                                        allow="cross-origin-isolated"
                                        width={(selectedPhone.height_px * (scaleRatioY + 1))}
                                        height={(selectedPhone.width_px * (scaleRatioX + 1))}
                                      />
                                </>
                              )}
                          </Modal>
                      </>)}
                      {/*
                      {!openIframe && <p>The state is CLOSED.</p>}
                      */}

              </div>

              {/* Right side with text */}
              <div className="modal-text">
                <div>
                  {/* <div className="modal-description"> */}
                      {/* <h2>Description</h2> */}
                      {/* <p> {modalContent.modal_description} </p> */}
                          <div style={{fontSize: 12.5}} 
                    dangerouslySetInnerHTML={{ __html: modalContent.modal_description }} 
                  />
                    
                  {/* </div> */}
                </div> 
              </div>

            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Projects;









