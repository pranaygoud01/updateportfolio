import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Certifications = () => {
  const certificatesList = [
    {
      id: "0L1B04NUS7WG",
      name: "Advanced React",
      issued: "Meta",
      URL: "https://www.coursera.org/account/accomplishments/records/0L1B04NUS7WG",
      logo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    },
    {
      id: "EBEON0724929039",
      name: "School of Coding - Learn Generative AI",
      issued: "Capgemini",
      URL: "http://www.edubridgeindia.com/certificate-detail?enrollment_number=EBEON0724929039",
      logo: "https://www.autonewspress.com/wp-content/uploads/2020/09/capgemini-logo.jpg",
    },
    {
      id: "vQbtHsWPxThZkX9BZ",
      name: "Front-End Software Engineering Job Simulation",
      issued: "Skyscanner",
      URL: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_vLNetMJv5JC3DXdfX_1724516523448_completion_certificate.pdf",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktHfZAe2M0KApC9yFjs6oD8QxI3FprLZ2_w&s",
    },
    {
      id: "IBM1",
      name: "Getting Started with Enterprise Data Science",
      issued: "IBM",
      URL: "https://www.credly.com/badges/33e18de4-4f3f-4351-8648-2274ad349212/linked_in_profile",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdQi0yohiPRpm5Twf9hluWmgMe8smBh6Mcg&s",
    },
    {
      id: "IBM2",
      name: "Getting Started with Enterprise-grade AI",
      issued: "IBM",
      URL: "https://www.credly.com/badges/bec101a4-5b11-4696-836f-6801e1db4bae/public_url",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdQi0yohiPRpm5Twf9hluWmgMe8smBh6Mcg&s",
    },
    {
      id: "91qreUse80",
      name: "SQL Fundamentals",
      issued: "Accenture",
      URL: "https://learn.futureskillsprime.in/verify_badge/91qreUse80?user_id=4185991&timestamp=1720852941201&edCast?latest",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem.png",
    },
    {
      id: "3D6733EC5F5E",
      name: "Java(Basic)",
      issued: "HackerRank",
      URL: "https://www.hackerrank.com/certificates/3d6733ec5f5e",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    },
    {
      id: "CodingNinjas",
      name: "Java Guided Path",
      issued: "CodingNinjas",
      URL: "https://drive.google.com/file/d/1HPWkNvQxVtM8RAufepue-WcWI7S3Az5E/view?usp=drivesdk",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu3snh-RvJcVBP78lCH8hjQ0sIZ_0DZMlOQ&s",
    },
    {
      id: "BrainOVision",
      name: "24Hrs Hackathon on AI & ML",
      issued: "BRAINOVISION SOLUTIONS INDIA PVT.LTD",
      URL: "https://drive.google.com/file/d/1lPntAuSc7BctpiKNHOlAdnBlp8z3CI7m/view?usp=drivesdk",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQEzIZRYuW_aUQ/company-logo_200_200/company-logo_200_200/0/1630618555089/brainovision_logo?e=2147483647&v=beta&t=jqVOt_sdKdsE55wvvWrIwOfZTK3y2LYy-zPoPnjD8H0",
    },
  ];

  return (
    <div className="w-full h-fit p-20 bg-white">
      <div>
        <h1 className="text-sm font-bold italic">Achievements</h1>
        <h1 className="font-bold text-3xl mt-3">CERTIFICATIONS</h1>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {certificatesList.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className="flex flex-col items-start gap-4 p-4 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={certificate.logo}
                alt={`${certificate.issued} Logo`}
                className="w-16 h-16 object-cover"
              />
              <div>
                <h1 className="text-lg font-bold">{certificate.name}</h1>
                <h2 className="text-sm text-gray-500">
                  Issued by {certificate.issued}
                </h2>
              </div>
            </div>
            <a
              href={certificate.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 flex items-center gap-2 font-medium"
            >
              <span>View Certificate</span>
              <MdArrowOutward />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
