import img1 from './../assets/reacProtAll.webp';
import img2 from './../assets/credAll.webp';
import img3 from './../assets/AllseachMovie.webp';
import img4 from './../assets/ExpenseProject.webp';
import img5 from './../assets/travelProject.webp';
import img6 from './../assets/reactForm.webp';
import img7 from './../assets/jsPortLaptop.webp';
import img8 from './../assets/imdbLaptopTable.webp';

import movi from './../assets/Allmovix.png'
import google from './../assets/googleSearch.png'


const projectsList = [
    {
        id: '01',
        heading:'Personal Portfolio With ReactJS',
        desp:"Explore my portfolio,🐱‍👤 a fusion of HTML, CSS, JavaScript, React.js, Tailwind CSS, and Farmer Motion. This showcase epitomizes my commitment to seamless design and dynamic functionality🔥 The portfolio boasts a fully functional contact form🤝🏻, powered by JavaScript, facilitating smooth and secure submissions. Dive into my projects, peruse my skills, and connect with me via the form.✨ This space represents the confluence of creativity and technical prowess - thank you for visiting 🍄!",
        techStacks : ['Html', 'Css', 'JS', 'ReactJS', 'TailwindCss', 'Farmer Motion'],
        previewLink:'https://kaif-reactportfolio.vercel.app/',
        soucresLink:'https://github.com/sk-kaif/personal-portfolio',
        img: img1
    },
    {
        id: '02',
        heading:'Google Search Clone With ReactJS',
        desp:"The Google Search Project 🌏 is a responsive web application built using Google API and Tailwind CSS 💪🏻. It offers users a sleek interface to conduct searches seamlessly across various devices. Tailwind CSS ensures optimal viewing experience while Google API provides robust search capabilities. Enjoy a user-friendly search experience on desktops, tablets, and mobile devices alike 📺.",
        techStacks : ['Html', 'Css', 'JS', 'ReactJS', 'Tailwind', 'RDD','Google Api', 'Redux Toolkit'],
        previewLink:'https://kaifgoogleclone.netlify.app/',
        soucresLink:'https://github.com/sk-kaif/googleSearchWithReactjs',
        img: google
    },
    {
        id: '03',
        heading:'CRED Clone With ReactJS',
        desp:"Welcome to my project, a ReactJS-based✨ clone of the CRED website. Leveraging the power of React's component-based architecture, I aim to replicate the sleek user interface and seamless user experience offered by CRED 🐾. By utilizing React's dynamic rendering and state management, I'm crafting a platform that emphasizes efficient credit card management, intuitive navigation, and a visually appealing design 🌜.",
        techStacks : ['Html', 'Css', 'JS', 'ReactJS', 'TailwindCss', 'Farmer Motion'],
        previewLink:'https://creaduiclone.netlify.app/',
        soucresLink:'https://github.com/sk-kaif/CRED-cloneWithReact',
        img: img2
    },
    {
        id: '04',
        heading:'Advance Movie App With ReactJS',
        desp:"The Movix movie App 🎥 Project is a versatile web application crafted with TMDB API,and responsive design principles 📱. It offers an immersive movie browsing experience across multiple pages, each showcasing a curated selection of films. Users 🚶🏻‍♂️can seamlessly navigate through various movie categories and genres, with each movie having its dedicated details page. The responsive layout ensures an optimal viewing experience on any device, from desktops to smartphones. Dive into the world of cinema with this user-friendly and visually appealing movie app.",
        techStacks : ['Html', 'Css', 'JS', 'ReactJS', 'Scss', 'RDD','TMDB Api', 'Redux Toolkit'],
        previewLink:'https://advance-movie-app-reactjs.vercel.app/',
        soucresLink:'https://github.com/sk-kaif/AdvanceMovieApp-Reactjs',
        img: movi
    },
    {
        id: '05',
        heading:'Expense Tracking-ReactJS',
        desp:'Introducing my ReactJS-powered expense tracking application,💰 a comprehensive financial tool designed to efficiently manage income, expenses, and all financial transactions in one centralized platform 💸. With a user-friendly interface crafted using React components, this app allows users to effortlessly record, categorize, and monitor both incoming income and outgoing expenses ✌🏻. ',
        techStacks : ['Html', 'Css', 'JS', 'ReactJS', 'TailwindCss'],
        previewLink:'https://expense-tracker-react-app-snowy.vercel.app/',
        soucresLink:'https://github.com/sk-kaif/ExpenseTrackerReactApp',
        img:img4
    },
    {
        id: '06',
        heading:'Travel Website',
        desp: "This platform offers a 🐛 visual journey into the world's wonders through stunning design and seamless user interactions. Leveraging the power of CSS animations and ScrollRevealJS 🌴, our site showcases an array of visually compelling elements, from mesmerizing scrolling effects that elegantly reveal content to interactive animations that breathe life into the user experience🌵.",
        techStacks : ['Html', 'Css', 'JS', 'ScrollRevealJs'],
        previewLink:'https://shaikhkaif-travel-website.netlify.app/',
        soucresLink:'https://github.com/sk-kaif/Travel-Website',
        img:img5
    },
    {
        id: '07',
        heading:'React Validation Form',
        desp:'"Introducing my React validation form powered by the Formik and Yup libraries, 🐱‍🚀 meticulously designed to ensure rock-solid data validation. This project showcases a seamless user input experience while prioritizing data integrity and security 💪🏻. ',
        techStacks : ['Html', 'Css', 'JS', 'ReactJS', 'Formik', 'Yup'],
        previewLink:'https://shaikhkaif-reactform.vercel.app/',
        soucresLink:'https://github.com/sk-kaif/React-form-validation-handling',
        img:img6,
    },
    {
        id: '08',
        heading:'MovieSearch App With ReactJS',
        desp:'🎥 Discover movies effortlessly with my movie search app. Crafted with HTML, CSS, JavaScript, and React.js, this application seamlessly integrates Tailwind CSS for a fully responsive design⚡. Explore the vast movie database through the OMDB API and toggle between dark and light modes for a personalized viewing experience. Your go-to companion for easy and stylish movie exploration on any device.. ',
        techStacks : ['Html', 'Css', 'JS', 'ReactJS','OMDB API','TailwindCss'],
        previewLink:'https://react-js-movie-search-app.vercel.app/',
        soucresLink:'https://github.com/sk-kaif/ReactJsMovieSearchApp',
        img:img3
    },
    {
        id: '09',
        heading:'First Portfolio',
        desp:'Welcome to my inaugural personal portfolio,🤴🏻 a digital canvas meticulously crafted using HTML, CSS, JavaScript, and the dynamic animation library GSAP. This platform serves as a reflection of my journey 🚀, blending sleek design with captivating animations to narrate my professional story fire 💖.',
        techStacks : ['Html', 'Css', 'JS', 'Gsap', 'ScrollTriger'],
        previewLink:'https://shaikh-kaif-portfolio.netlify.app/',
        soucresLink:'https://github.com/sk-kaif/personal-portfolio',
        img:img7
    },
    
]


export default projectsList



