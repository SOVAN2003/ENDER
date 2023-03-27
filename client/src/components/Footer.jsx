import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=' mt-20 m-auto text-[#B1B2FF] text - [16px] max-w[500px]'>
    <div>
      <p>ⓒ {year} Created by SOVAN &#129302;, All rights reversed.</p>
    </div>  
    </footer>
  );
}

export default Footer;