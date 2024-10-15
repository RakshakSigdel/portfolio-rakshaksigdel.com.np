import React from "react";
import SectionOverview from "../component/SectionOverview"; // Assuming both files are in the same directory
import try1 from "/images/try5.jpg"


const Home = () => {
    return (
        <div className="bg-white mx-4 md:mx-20">
            {/* ABOUT ME */}
            
            <SectionOverview
                imgUrl={try1}
                subheading="You're Checking On"
                heading="RAKSHAK SIGDEL"
                descriptionHeading="About Me"
                descriptionPara1="My name is Rakshak Sigdel, and I am currently pursuing a Bachelor's degree in Information Technology. I enjoy working on tech projects that challenge my skills and enhance my understanding of IT. I consider myself a quick learner, able to adapt and absorb knowledge efficiently."
                descriptionPara2="Click on Learn More to get more information About Me"
                learnMorePath="/About"
            />
            {/* SKILLS */}
            <SectionOverview
                imgUrl="https://www.metsci.com/wp-content/uploads/2020/10/iStock-871030872-1140x760.jpg"
                subheading="Learn about"
                heading="MY SKILLS"
                descriptionHeading="My Skills"
                descriptionPara1="I have a solid foundation in programming languages like React, Python, and C#. My familiarity with various frameworks and tools enables me to develop efficient applications and tackle complex problems effectively."
                descriptionPara2="Click on the learn More button to view my skills"
                learnMorePath="/skills"
            />
            <SectionOverview
                imgUrl="https://wallpapers.com/images/hd/project-management-tools-illustration-20vwwkbworhkpzff.jpg"
                subheading="Take a look at Some"
                heading="PROJECTS"
                descriptionHeading="My Projects"
                descriptionPara1="I have worked on a variety of projects, both individually and as part of a group. Through these experiences, I have developed strong teamwork, communication, and problem-solving skills. Each project has been a learning opportunity that allowed me to collaborate effectively and contribute to successful outcomes."
                descriptionPara2="Click the learn more button to explore the projects I’ve been involved in."
                learnMorePath="/modern"
            />
            <SectionOverview
                imgUrl="https://emfavour.com/wp-content/uploads/2023/12/cloud4c-company-contact-1Desktop.jpg"
                subheading="Let's Connect"
                heading="Contact Me"
                descriptionHeading="Contacts"
                descriptionPara1="Whether you're looking to collaborate on exciting projects, need expertise for your next big idea, or are interested in learning together—I'm here to help! Feel free to reach out if you're hiring, seeking guidance, or simply want to exchange ideas. Let's build something amazing together!"
                descriptionPara2="Click the learn more button to find all the means of contact available for us to get connected"
                learnMorePath="/contact"
            />

        </div>
    );
};

export default Home;
