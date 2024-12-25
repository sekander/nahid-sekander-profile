import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { FaI } from 'react-icons/fa6'

// From the code above, we basically imported icons from the react-icon 
// library installed and then created our data as javascript objects. 
// These data will allow us to dynamically set our hyperlinks and display 
// the title and icons for each page in the sidebar component. 

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'About',
        path: '/',
        icon: <FaIcons.FaTasks/>
    },
    {
        title: 'Projects',
        path: '/',
        icon: <FaIcons.FaRProject/>
    },
    {
        title: 'Contact',
        path: '/',
        icon: <FaIcons.FaComment/>
    }

]