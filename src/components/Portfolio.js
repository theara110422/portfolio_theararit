// src/Portfolio.js
import React, { useState } from "react";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container m-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="text-gray-700">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
            </a>
            <div className="hidden md:flex space-x-4">
              <a href="#about" className="text-gray-700 hover:text-blue-500">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
              <a href="#cv" className="text-gray-700 hover:text-blue-500">
                CV
              </a>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden px-4">
            <a
              href="#about"
              className="block text-gray-700 hover:text-blue-500 py-2"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-500 py-2"
            >
              Contact
            </a>
            <a
              href="#cv"
              className="block text-gray-700 hover:text-blue-500 py-2"
            >
              CV
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="container m-auto flex justify-center items-center">
          <div className="">
            <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-2">
              I'm a passionate web developer with experience in building
              beautiful and functional websites.
            </p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
              Get My CV
            </button>
          </div>
          <div className="w-1/4 mb-20">
            <img
              src={`${process.env.PUBLIC_URL}/images/sreyRa.png`}
              alt="Description of the image"
              className="w-full"
            />
          </div>
        </section>
        {/* About Section */}
        <section
          id="about"
          className="bg-white shadow-md rounded-lg p-6 container m-auto mt-8"
        >
          <h2 className="text-2xl font-semibold text-center">About Me</h2>
          <p className="mt-2">
            I'm a passionate web developer with experience in building beautiful
            and functional websites. I love creating responsive designs and
            optimizing user experiences.
          </p>
          <p>
            I am a dedicated and versatile developer with a strong foundation in
            both frontend and backend development. My expertise spans across
            multiple frameworks and technologies, including Nuxt 3, Next.js,
            NestJS, and React, with a specific focus on creating robust and
            scalable applications. I specialize in building seamless user
            experiences, incorporating responsive design, and implementing
            secure, token-based authentication systems.
          </p>
          <p>
            Over time, I’ve developed a keen eye for efficiency and usability.
            My experience ranges from handling complex authentication flows to
            crafting visually appealing interfaces with Tailwind CSS and
            Material UI. I am skilled at integrating backend functionality into
            frontend systems, ensuring data accuracy and seamless interactivity.
            Additionally, I am experienced with MySQL databases, managing data
            relationships effectively to support high-performance applications.
          </p>
          <p>
            I bring a hands-on approach to development, frequently using tools
            like Figma for UI design collaboration, and prioritizing testing,
            including unit, integration, and end-to-end testing, to deliver
            dependable solutions. My preference for TSX in TypeScript files in
            Next.js projects reflects my commitment to code clarity,
            maintainability, and scalability. With an eye on continuous
            improvement, I’m always eager to embrace new challenges and leverage
            the latest tech advancements to deliver impactful, user-centered
            solutions.
          </p>
        </section>
        {/* About Skills section */}
        <section
          id="about"
          className="container m-auto mt-8"
        >
          <h2 className="text-2xl font-semibold text-center">Skills</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="border shadow-sm font-bold py-2 px-4 rounded bg-white">1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="bg-white shadow-md rounded-lg p-6 container m-auto mt-8"
        >
          <h2 className="text-2xl font-semibold text-center">Contact</h2>
          <p className="mt-2">
            Feel free to reach out via email: myemail@example.com
          </p>
        </section>

        {/* CV Section */}
        <section
          id="cv"
          className="bg-white shadow-md rounded-lg p-6 container m-auto mt-8"
        >
          <h2 className="text-2xl font-semibold">Curriculum Vitae (CV)</h2>
          <p className="mt-2">
            You can download my CV by clicking the link below:
          </p>
          <a
            href="/path-to-your-cv.pdf" // Replace with the actual path to your CV file
            className="text-blue-500 underline mt-2 block"
            download
          >
            Download CV
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
