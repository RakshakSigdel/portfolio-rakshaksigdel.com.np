import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import ButtonHover from '../component/ButtonHover'

import img6 from '/images/img6.jpg';
import img8 from '/images/img8.jpg';
import img11 from '/images/img11.jpg';
import img12 from '/images/img12.jpg'
import img13 from '/images/download.png'

import Testimonial from '../component/Testimonial'
export default function AboutSection() {
  return (
    <div className="bg-background">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
        <WhoAmI />
        <Testimonial />
      </ReactLenis>
    </div>
  );
}




const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          `url(${img8})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src={img11}
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src={img12}
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src={img13}
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src={img6}
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};



//PART 2
import OnScrollFade from '../Animation/OnScrollFade'
const WhoAmI = () => {
  const DownloadCVClicked = () => {
    alert("CV UNDER CONSTRUCTION");
  }
  return (
    <section
      id="launch-WhoAmI"
      className="mx-auto max-w-5xl px-4 py-48"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10 text-4xl font-black uppercase"
      >
        Who Am I?
      </motion.h1>
      <OnScrollFade>
        <p className="mb-10">
          "I am a 19-year-old software enthusiast currently pursuing a BSc (Hons) in Computing, with a strong passion for developing software solutions. As part of my learning journey toward becoming a software developer, I am actively building small-scale applications to enhance my skills and create a well-rounded portfolio. My focus is on gaining hands-on experience in various aspects of software development, from coding and problem-solving to working with different technologies. By working on these projects, I aim to continuously improve my understanding of the software development lifecycle and prepare myself for larger challenges in the tech industry."
        </p>
      </OnScrollFade>
      <ButtonHover buttonText="Download My CV" onClick={DownloadCVClicked} />
    </section>
  );
};
