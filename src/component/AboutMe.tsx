import React from 'react';

const AboutMe = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Mabharana Arachchige Sanduni Tharaka</h1>
      <p className="mt-2"><i>I'm Sanduni Tharaka, an enthusiastic undergraduate pursuing a BICT (Hons) at Rajarata University of Sri Lanka. Passionate about quality assurance, and software testing, , I’m currently gaining hands-on experience as a Test Engineer Intern at Jasmin Media. I enjoy building efficient systems, automating testing workflows, and exploring the intersection of AI and image processing..</i></p>
      <img 
        src="https://github.com/Sandutharaka.png" 
        alt="GitHub Profile" 
        className="mt-4 w-24 h-24 rounded-full"
      />
    </div>
  );
};

export default AboutMe;