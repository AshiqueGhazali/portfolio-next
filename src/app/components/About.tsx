import React from "react";

const About = () => {
  return (
    <div id="about" className="mt-20 lg:px-4">
      <p className="text-gray-400 text-[14px] leading-6">
        I’m a <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">full-stack</span> developer
        passionate about building scalable, high-performing web applications
        that deliver both functionality and an excellent user experience. With
        expertise in modern technologies such as React, Next.js, Node.js, and
        PostgreSQL, I enjoy solving complex problems at the intersection of
        design and engineering—creating solutions that are accessible, reliable,
        and optimized for usability and performance.
      </p>

      <p className="text-gray-400 text-[14px] leading-6 mt-4">
        Currently, I work as a Full Stack Developer at Subhx Infotech,
        contributing to{" "}
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">multiple projects</span> and exploring
        new technologies across frontend and backend engineering. I’ve gained
        hands-on experience integrating{" "}
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">AI models like LLaMA</span>,
        implementing
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">auto KYC verification systems</span>,
        and working on the company’s flagship platform,{" "}
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">CoinSpe.com</span>, a crypto-based
        application where scalability, security, and performance are critical.
        These projects have strengthened my skills in designing robust systems,
        mentoring teams, and deploying production-ready applications.
      </p>

      <p className="text-gray-400 text-[14px] leading-6 mt-4">
        Beyond my professional role, I’ve also built{" "}
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">Veew</span>, a virtual event hosting
        platform that enables subscriptions, ticketing, and wallet-based
        transactions. Over the past year, I’ve expanded my foundation in Data
        Structures & Algorithms, SQL, PostgreSQL, and AWS, while sharing
        knowledge through seminars on DSA and Microservices Architecture.
        Outside of coding, I’m always exploring design ideas, experimenting with
        new technologies, and finding creative ways to push the boundaries of
        what I can build.
      </p>
    </div>
  );
};

export default About;
