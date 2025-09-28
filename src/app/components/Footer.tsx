import React from "react";

const Footer = () => {
  const spanClass = `text-gray-200 px-1 hover:text-[#49b4bb] cursor-pointer font-medium`;
  return (
    <div id="footer" className="py-20 lg:pt-30">
      <p className="text-[10px] sm:text-[13px] font-normal text-gray-400 py-2 border-t border-[#17264b]">
        Handcrafted <span className={spanClass}>pixels</span> and{" "}
        <span className={spanClass}>code</span>, blending design and logic into
        one. Powered by <span className={spanClass}>coffee</span>,{" "}
        <span className={spanClass}>curiosity</span>, and{" "}
        <span className={spanClass}>Next.js</span> — hosted on{" "}
        <span className={spanClass}>Vercel</span>.
      </p>
    </div>
  );
};

export default Footer;
