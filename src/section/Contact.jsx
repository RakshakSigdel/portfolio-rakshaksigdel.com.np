"use client";
import React, { useState, useEffect } from "react";
import Radar from "../component/Radar";
import DuringScan from "../component/TextRotation"; 
import AfterScan from "../component/TextRotation"; 

const Contact = () => {
  const [showFirstComponent, setShowFirstComponent] = useState(true); // Control which component to show
  const DuringScanTexts = [
    "Scanning",
    "Please Be Patient",
    "Just a moment",
    "Please Stand By",
    "Loading Your Connections...",
    "Fetching More...",
    "Hang Tight, We're Almost There!",
    "Hold On a Second...",
    "Just a Few More Seconds...",
    "Almost Done"
  ];
  
  const AfterScanTexts = [
    "Reach Me",
    "Let's Connect",
    "I'm Just a Message Away!",
    "Feel Free to Drop a Line!",
    "Let's Make Great Things Happen!",
    "Connect with Me on Social Media!",
    "Looking Forward to Hearing from You!",
    "Get in Touch Anytime!",
    "Your Message Matters!",
    "Join the Conversation!"
  ];
  
   const iconData = [
    {
      text: "WhatsApp",
      link: "https://example.com/unavailable",
      icon: <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"}
        alt="Whatsapp"
        className="h-8 w-8 object-contain" />,
      delay: 20.5
    },
    {
      text: "G-Mail",
      link: "mailto:rakshaksigdel@gmail.com",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/640px-Gmail_icon_%282020%29.svg.png"
          alt="G-Mail"
          className="h-8 w-8 object-contain"
        />
      ),
      delay: 2,
    },    
    {
      text: "Medium",
      link: "https://medium.com/@rakshaksigdel55",
      icon: <img src={"https://cdn.icon-icons.com/icons2/3041/PNG/512/medium_logo_icon_189223.png"}
        alt="Medium Logo"
        className="h-8 w-8 object-contain" />,
      delay: 13.3
    },
    {
      text: "Linked In",
      link: "https://www.linkedin.com/in/rakshak-sigdel-170798296/",
      icon: <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"}
        alt="Linked In"
        className="h-8 w-8 object-contain" />,
      delay: 1
    },
    {
      text: "GitHub",
      link: "https://github.com/RakshakSigdel",
      icon: <img src={"https://static-00.iconduck.com/assets.00/github-icon-2048x2048-823jqxdr.png"}
        alt="GitHub"
        className="h-8 w-8 object-contain" />,
      delay: 3
    },
    {
      text: "Twitter",
      link: "https://x.com/RakshakSigdel",
      icon: <img src={"https://banner2.cleanpng.com/20240119/sut/transparent-x-logo-logo-brand-identity-company-organization-black-background-white-x-logo-for-1710916376217.webp"}
        alt="Twitter/X logo"
        className="h-8 w-8 object-contain" />,
      delay: 10
    },
    {
      text: "Instagram",
      link: "https://www.instagram.com/rakshak_sigdel/",
      icon: <img src={"https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"}
        alt="Instagram"
        className="h-8 w-8 object-contain" />,
      delay: 24
    },
  ];

  useEffect(() => {
    // Set a timer to change the component after 24 seconds
    const timer = setTimeout(() => {
      setShowFirstComponent(false); // Switch to the second component
    }, 24000);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
      <Radar className="absolute -bottom-12" iconData={iconData} />
      {showFirstComponent ? <DuringScan text={DuringScanTexts}/> : <AfterScan text={AfterScanTexts}/>}
    </div>
  );
};

export default Contact;
