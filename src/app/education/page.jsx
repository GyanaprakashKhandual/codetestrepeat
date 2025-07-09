"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpenCheck, BookMarked } from "lucide-react";
import { FaUniversity, FaChalkboardTeacher } from "react-icons/fa";
import { MdComputer, MdSchool } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";

const page = () => {
  const educationData = [
    {
      title: "Quality Assurance Engineering",
      icon: <MdComputer className="w-6 h-6" />,
      institute: "Masai School",
      duration: "2024 – 2025",
      type: "professional",
    },
    {
      title: "Bachelor of Science in Physics (Hons)",
      icon: <FaUniversity className="w-5 h-5" />,
      institute: "Utkal University",
      duration: "Completed: 2024",
      type: "academic",
    },
    {
      title: "Senior Secondary Education",
      icon: <School className="w-5 h-5" />,
      institute: "Narasingha Choudhury Autonomous College",
      details: "Board: CHSE Odisha",
      duration: "Year: 2021",
      type: "academic",
    },
    {
      title: "Secondary Education",
      icon: <MdSchool className="w-6 h-6" />,
      institute: "Jajpur High School",
      details: "Board: BSE Odisha",
      duration: "Year: 2019",
      type: "academic",
    },
    {
      title: "Master of Computer Applications",
      icon: <BookOpenCheck className="w-5 h-5" />,
      institute: "IGNOU University",
      duration: "2025 – 2027 (Planned)",
      type: "planned",
    },
    {
      title: "Master of Business and Administration",
      icon: <BookMarked className="w-5 h-5" />,
      institute: "IGNOU University",
      duration: "2026 – 2028 (Planned)",
      type: "planned",
    },
    {
      title: "Cyber Security Professional",
      icon: <PiCertificateBold className="w-6 h-6" />,
      institute: "Google Certification",
      duration: "2025 – 2026",
      type: "certification",
    },
    {
      title: "Data Science Specialization",
      icon: <PiCertificateBold className="w-6 h-6" />,
      institute: "Udemy Certification",
      duration: "2025 – 2026",
      type: "certification",
    },
    {
      title: "AI and Machine Learning",
      icon: <PiCertificateBold className="w-6 h-6" />,
      institute: "Google Certifications",
      duration: "2025 – 2026",
      type: "certification",
    },
  ];

  const getColor = (type) => {
    switch (type) {
      case "professional":
        return "from-green-50 to-blue-50";
      case "academic":
        return "from-pink-100 to-white";
      case "planned":
        return "from-sky-100 to-white";
      case "certification":
        return "from-purple-50 to-pink-50";
      default:
        return "from-gray-50 to-white";
    }
  };

  return (
    <section className="relative mt-15 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      {/* Decorative SVG Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V800H1000V0ZM200,400c0,110.5-89.5,200-200,200S0,510.5,0,400,89.5,200,200,200,400,289.5,400,400Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M800,400c0,110.5-89.5,200-200,200S400,510.5,400,400,489.5,200,600,200,800,289.5,800,400Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M500,600c0,55.2-44.8,100-100,100s-100-44.8-100-100,44.8-100,100-100,100,44.8,100,100Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-pink-500" />
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional certifications that shape my
            expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${getColor(
                item.type
              )} rounded-xl shadow-md overflow-hidden border border-opacity-20 ${item.type === "professional"
                  ? "border-blue-200"
                  : item.type === "academic"
                    ? "border-pink-200"
                    : item.type === "planned"
                      ? "border-sky-200"
                      : "border-purple-200"
                }`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full mr-4 ${item.type === "professional"
                        ? "bg-blue-100 text-blue-600"
                        : item.type === "academic"
                          ? "bg-pink-100 text-pink-600"
                          : item.type === "planned"
                            ? "bg-sky-100 text-sky-600"
                            : "bg-purple-100 text-purple-600"
                      }`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <div className="pl-16">
                  <p className="text-gray-700 font-medium flex items-center gap-2 mb-1">
                    <FaChalkboardTeacher className="w-4 h-4" />
                    {item.institute}
                  </p>
                  {item.details && (
                    <p className="text-gray-600 text-sm mb-2">{item.details}</p>
                  )}
                  <p className="text-gray-500 text-sm">{item.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;