import * as FaIcons from 'react-icons/fa'

// From the code above, we basically imported icons from the react-icon 
// library installed and then created our data as javascript objects. 
// These data will allow us to dynamically set our hyperlinks and display 
// the title and icons for each page in the sidebar component. 

export const SidebarData = [
    {
        title: 'Home',
        // path: '/',
        path: "home", // This corresponds to the section id
        icon: <FaIcons.FaHome />
    },
    {
        title: 'About',
        // path: '/about',
        path: "about", // This corresponds to the section id
        icon: <FaIcons.FaTasks/>
    },
    {
        title: 'Projects',
        // path: '/projects',
        path: 'projects',
        icon: <FaIcons.FaRProject/>
    },
    {
        title: 'Contact',
        //path: '/contact',
        path: 'contact',
        icon: <FaIcons.FaComment/>
    }

]