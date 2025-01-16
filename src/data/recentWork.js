import React from 'react';
import { AccessAlarm, Event, Business, Settings, LocalHospital } from '@mui/icons-material';

const data = {
  "recent-projects": [
    {
      "img": "",
      "title": "Enterprise Resource Management",
      "description": "Developed and maintained dynamic custom forms using Material-UI (MUI) for a streamlined and user-friendly design. Leveraged Redux and TypeScript for structured data management and efficient state handling, improving the overall development process. Implemented Role-Based Access Control (RBAC) to manage user permissions and ensure secure system access. Ensured system reliability by promptly addressing technical issues and optimizing performance.",
      "technologies": "ReactJS, JavaScript, TypeScript, MUI, Redux, Git",
      "icon": <Business /> // MUI icon for enterprise
    },
    {
      "img": "",
      "title": "Authentication Workflow",
      "description": "Developed an npm package for managing dynamic forms in React, bundled with Webpack for efficiency. Seamlessly integrate into React applications or add via CDN for quick setup. Simplifies form creation and management, enhancing usability for developers. Leveraged Webpack for fast and efficient delivery of the package's functionality.",
      "technologies": "ReactJS, MUI, npm, JavaScript, Git",
      "icon": <Settings /> // MUI icon for settings or workflow
    },
    {
      "img": "",
      "title": "E-Procurement Software Development",
      "description": "Managed dynamic forms and data with Material-UI (MUI), creating an easy-to-navigate user interface. Used Redux to efficiently handle and organize data, improving the consistency of the application's state management. Simplified data analysis by implementing Datagrid Pro, making data more accessible for users. Resolved software bugs and issues to enhance overall system stability and user experience.",
      "technologies": "ReactJS, HTML, CSS, JavaScript, MUI, Redux, Zoho, Git",
      "icon": <AccessAlarm /> // MUI icon for time/efficiency
    },
    {
      "img": "",
      "title": "Event Management App",
      "description": "Worked on a versatile event management app using React Native for both Android and iOS platforms. Contributed to the deployment of the app on both App Store and Play Store, enhancing its accessibility. Played a key role in resolving software bugs, ensuring optimal performance and user satisfaction. Implemented AsyncStorage for efficient data storage and integrated Firebase for seamless messaging functionality.",
      "technologies": "React Native, Firebase, npm, AsyncStorage, Git, Jira",
      "icon": <Event /> // MUI icon for event
    },
    {
      "img": "",
      "title": "Clinic Management App",
      "description": "Designed and developed a clinic management application to streamline appointment scheduling and patient management. Utilized ReactJS for an interactive frontend and Firebase for real-time data synchronization and authentication. Enhanced usability through dynamic forms and efficient UI layouts.",
      "technologies": "ReactJS, Typescript, Material-UI, JavaScript, Git",
      "icon": <LocalHospital /> // MUI icon for clinic
    }
  ],
  "experience": [
    {
      "role": "Frontend Developer / React Developer",
      "company": "Technotery",
      "duration": "Jan 2022 - Present",
      "details": [
        "Developed functionalities with React.js using library methods for component creation, rendering, props, and state management (Redux), ensuring efficient and scalable architecture.",
        "Integrated frontend components with backend APIs to fetch and render data dynamically on web pages.",
        "Implemented React-Router to transform the application into a robust Single Page Application (SPA) for seamless user experiences.",
        "Designed, developed, and tested responsive UI using HTML5, CSS3, MUI, JavaScript (ES6), and React.JS, ensuring cross-browser compatibility and adherence to accessibility standards.",
        "Used Redux-Thunk middleware for efficient asynchronous state management and RESTful API calls.",
        "Diagnosed and resolved complex bugs, enhancing application stability and adding new, user-friendly features.",
        "Collaborated with QA teams to address reported issues and participated in team meetings to identify process improvements.",
        "Improved version control practices by extensively using Git for code management and collaborating with team members via GitHub.",
        "Worked on mobile app development using React Native, focusing on cross-platform compatibility and performance optimization."
      ]
    }
  ]
};

export default data;
