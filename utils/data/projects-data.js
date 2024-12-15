import chatApp from '/public/image/ayla.jpg';
import ottSystem from '/public/image/crefin.jpg';
import lmsSystem from '/public/image/real-estate.jpg';
import ecommerceApp from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Chat Application',
        description: 'Built a chat application similar to WhatsApp using React, Node.js, and MongoDB. Developed the backend APIs to manage real-time communication, user authentication, and media handling. Deployed the application on AWS EC2 instances for high availability and scalability.',
        tools: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'AWS EC2', 'PM2'],
        role: 'Devops Engineer',
        code: '',
        demo: '',
        image: chatApp,
    },
    {
        id: 2,
        name: 'OTT System',
        description: 'Developed an OTT platform for purchasing tickets to watch movies and live streams. Built the frontend using React and the backend with Laravel. Utilized AWS S3 for secure media storage and deployed the initial version on cPanel. Migrated to AWS EC2 for improved scalability and integrated payment gateways.',
        tools: ['React', 'Laravel', 'AWS S3', 'AWS EC2', 'cPanel', 'OnePay'],
        role: 'Devops Engineer',
        code: '',
        demo: '',
        image: ottSystem,
    },
    {
        id: 3,
        name: 'Learning Management System (LMS)',
        description: 'Designed and developed a learning management system similar to Udemy with unique features. Built using PHP and Laravel, with AWS S3 for storing course materials and media. Integrated payment gateways to handle transactions and deployed on cPanel for stable hosting.',
        tools: ['PHP', 'Laravel', 'AWS S3', 'cPanel', 'OnePay', 'Google Cloud Platform Services'],
        role: 'Full Stack Developer & Server Operator',
        code: '',
        demo: '',
        image: lmsSystem,
    },
    {
        id: 4,
        name: 'Ecommerce Application with Affiliate System',
        description: 'Created an ecommerce application similar to Daraz, featuring an affiliate system for promotions. Developed using Laravel with payment gateway integrations for seamless transactions. Deployed on cPanel for efficient hosting.',
        tools: ['Laravel', 'PHP', 'MySQL', 'cPanel', 'OnePay', 'Bootstrap'],
        role: 'Full Stack Developer & Server Operator',
        code: '',
        demo: '',
        image: ecommerceApp,
    }
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },