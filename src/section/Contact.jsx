// Contact.jsx
"use client";
import React from "react";
import Radar from "../component/Radar";
// import { FaInstagramSquare } from "react-icons/fa";
import InstagramIcon from '/images/instagramicon.png'

const Contact = () => {
  // Define the icons, texts, and links to pass as props
  const iconData = [
    {
      text: "WhatsApp",
      link: "https://example.com/maintenance",
      icon: <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"}
        alt="Whatsapp"
        className="h-8 w-8 object-contain" />,
      delay: 20.5
    },

    {
      text: "G-Mail",
      link: "https://example.com/mobile",
      icon: <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/640px-Gmail_icon_%282020%29.svg.png"}
        alt="G-Mail"
        className="h-8 w-8 object-contain" />,
      delay: 2
    },
    {
      text: "Medium",
      link: "https://example.com/server",
      icon: <img src={"https://cdn.icon-icons.com/icons2/3041/PNG/512/medium_logo_icon_189223.png"}
        alt="Medium Logo"
        className="h-8 w-8 object-contain" />,
      delay: 13.3
    },
    {
      text: "Linked In",
      link: "https://example.com/web",
      icon: <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"}
        alt="Linked In"
        className="h-8 w-8 object-contain" />,
      delay: 1
    },
    {
      text: "GitHub",
      link: "https://example.com/design",
      icon: <img src={"https://static-00.iconduck.com/assets.00/github-icon-2048x2048-823jqxdr.png"}
        alt="GitHub"
        className="h-8 w-8 object-contain" />,
      delay: 3
    },

    {
      text: "Twitter",
      link: "https://github.com",
      icon: <img src={"https://banner2.cleanpng.com/20240119/sut/transparent-x-logo-logo-brand-identity-company-organization-black-background-white-x-logo-for-1710916376217.webp"}
        alt="Twitter/X logo"
        className="h-8 w-8 object-contain" />,
      delay: 10
    },
    {
      text: "Instagram",
      link: "https://example.com/cms",
      icon: <img src={"https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"}
        alt="Instagram"
        className="h-8 w-8 object-contain" />,
      delay: 24
    },
  ];



  return (
    <>
      
      <div className="relative flex h-screen w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <Radar className="absolute -bottom-12" iconData={iconData} />
        <h1>Scanning The Contacts</h1>
        <h1>Please Wait</h1>
      </div>
    </>
  );
};

export default Contact;
