import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-white">
          © {new Date().getFullYear()} Designed by{" "}
          <span className="text-blue-400">Rejcob</span>
        </p>
        <div className="space-x-4">
          <a
            href="https://www.linkedin.com/in/jacobo-cohello-revolledo-096102251/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://rejcob.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Portafolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
