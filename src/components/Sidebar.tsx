import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll"; // Importing ScrollLink
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";

// Styled Components
const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 3.5rem;
  background-color: rgba(57, 57, 65, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const MenuIconOpen = styled.div`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  margin-left: 2rem;
  color: #ffffff;
  cursor: pointer;
`;

const MenuIconClose = styled.div`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
  cursor: pointer;
`;

const SidebarMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "close",
})<{ close: boolean }>`
  width: 250px;
  height: 100vh;
  background-color:rgba(57, 57, 65, 0.7);
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? "0" : "-100%")};
  transition: 0.6s;
  z-index: 2;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0;
`;

const MenuItemLinks = styled(ScrollLink)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 18px;
  text-decoration: none;
  color: #ffffff;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: #ff9564;
    color: #000;
  }

  svg {
    font-size: 24px;
    margin-right: 16px;
  }
`;

// Sidebar Component
const Sidebar: React.FunctionComponent = () => {
  const [close, setClose] = useState(false);

  const menuButtonRef = useRef(null);

    // Create a reference for the sidebar and the menu button
  const sidebarRef = useRef<HTMLDivElement | null>(null);


   // Close the sidebar when a click outside the sidebar or menu button occurs
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
      // Check if the click was outside of the sidebar and the menu button
      if (
        sidebarRef.current && !sidebarRef.current.contains(event.target as Node) 
      ) {
        setClose(false); // Close the sidebar
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  const toggleSidebar = () => {
    setClose(!close);
  };

  return (
    <div>
      <Navbar>
        <MenuIconOpen ref={menuButtonRef} onClick={toggleSidebar}>
          <FaIcons.FaBars />
        </MenuIconOpen>
      </Navbar>

      {/* <SidebarMenu close={close} onClick={toggleSidebar}> */}
      <SidebarMenu ref={sidebarRef} close={close} >
        <MenuIconClose onClick={toggleSidebar}>
          <FaIcons.FaTimes />
        </MenuIconClose>

        {SidebarData.map((item, index) => (
          <MenuItems key={index}>
            <MenuItemLinks
              to={item.path} // Match section ID
              smooth={true} // Smooth scrolling
              duration={501} // Scroll duration
              offset={-49} // Offset (header adjustment)
            >
              {item.icon}
              <span style={{ marginLeft: "17px" }}>{item.title}</span>
            </MenuItemLinks>
          </MenuItems>
        ))}
      </SidebarMenu>
    </div>
  );
};

export default Sidebar;