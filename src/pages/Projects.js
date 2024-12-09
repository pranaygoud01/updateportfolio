import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Avion",
      tech: "Frontend",
      description:
        "A meticulously crafted responsive e-commerce website. Powered by ReactJS, styled with Tailwind CSS, and seamlessly navigated with React Router.",
      github: "https://github.com/pranaygoud01/avion-app",
      demo: "https://pranaygoud01.github.io/avion-app/",
      image:
        "https://capturly.com/blog/wp-content/uploads/2018/01/eCommerce-website-search-customer-experience.jpg",
    },
    {
      title: "Book Recommendation System",
      description:
        "Based on the historical borrowing data and feedback of the customers. Books will be suggested by the model to both customers and sellers.",
      github: "https://github.com/pranaygoud01/book-recommendation-system",
      tech: "Machine Learning Model",
      image:
        "https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2022/07/Book-Recommendation-System-using-Python.png?fit=1920%2C1080&ssl=1",
    },
    {
      title: "Calculator",
      description:
        "In this project, we will explore the process of creating a basic calculator web application using the popular front-end library, React.",
      github: "https://github.com/pranaygoud01/calculator",
      tech: "Frontend",
      demo: "https://pranaygoud01.github.io/calculator/",
      image:
        "https://images.pexels.com/photos/16098005/pexels-photo-16098005.jpeg?cs=srgb&dl=pexels-jakubzerdzicki-16098005.jpg&fm=jpg",
    },
    {
      title: "Studio M",
      description:
        "Developed a responsive web application for an architectural firm using React and React Router. Leveraged React Hooks to manage state and optimize performance.",
      github: "https://github.com/pranaygoud01/studio-m",
      tech: "Frontend",
      demo: "https://pranaygoud01.github.io/studio-m/",
      image:
        "https://static.wixstatic.com/media/623888_ccbf189032f34f15a9071a78c503538f~mv2.jpg/v1/fill/w_1000,h_570,al_c,q_85,usm_0.66_1.00_0.01/623888_ccbf189032f34f15a9071a78c503538f~mv2.jpg",
    },
    {
      title: "News Application",
      description:
        "Developed a news application using React to fetch and display real-time news from external remote APIs. Utilized Hooks for efficient state management and data handling across components.",
      github: "https://github.com/pranaygoud01/NewsAPI",
      tech: "Frontend and API",
      demo: "https://newsapi-app.netlify.app/",
      image:
        "https://media.istockphoto.com/id/929047972/vector/world-news-flat-vector-icon-news-symbol-logo-illustration-business-concept-simple-flat.jpg?s=612x612&w=0&k=20&c=5jpcJ7xejjFa2qKCzeOXKJGeUl7KZi9qoojZj1Kq_po=",
    },
    {
      title: "Placement Management System",
      description:
        "Developed a robust system to manage and maintain student placement details. Implemented full CRUD operations using Java as the backend language. Utilized MySQL as the relational database. Integrated Postman for testing and validating API endpoints.",
      github: "https://github.com/pranaygoud01/PlacementMngtSystem",
      tech: "Backend",
      image: "https://www.krvsoft.com/images/Product/p_jobportal.png",
    },
    {
      title: "CRUD Operations with Express, MongoDB, and Node.js",
      description:
        "Built a RESTful API that allows users to Create, Read, Update, and Delete records seamlessly. Leveraged Mongoose for schema modeling and implemented robust error handling for smooth operations.",
      github: "https://github.com/pranaygoud01/CRUDbyNodejsExpressMongoDB",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/0*nZs5A6K_GBhbBJ9u.jpg",
      tech: "Backend",
    },
  ];

  return (
    <div className="w-full h-fit p-20 max-lg:mt-10 max-lg:px-10">
      <div>
        <h1 className="text-sm font-bold italic">Works</h1>
        <h1 className="font-bold text-3xl mt-3">FEATURED PROJECTS</h1>
      </div>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="h-[300px] w-10/12 max-lg:w-full flex flex-col gap-4 p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex h-full gap-4">
              <div className="w-[40%] ">
                <h1 className="text-xs font-bold italic">{project.tech}</h1>
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <div className="flex justify-start items-start mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-600 flex items-center gap-2"
                  >
                    <span className="text-sm font-bold">View Demo</span>
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
              <div className="w-[60%]">
                <img
                  src={project.image}
                  className="w-full h-full object-cover"
                  alt={project.image}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
