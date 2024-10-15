//HAmburger Menu
import React from "react";
import { motion, useCycle } from "framer-motion";

const items = [
  { id: "0", text: "Home", icon: "🏠", path: "/" },
  { id: "1", text: "About", icon: "ℹ️", path: "/about" },
  { id: "2", text: "Skills", icon: "💡", path: "/Skills" },
  { id: "3", text: "Projects", icon: "💻", path: "/projects" },
  // { id: "4", text: "Blogs", icon: "✍️", path: "/blogs" },
  { id: "4", text: "Contact", icon: "📧", path: "/contact" },
];
// Sidebar animation variants
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

// Path component for MenuToggle
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"  // Inherits color from the parent SVG's class
    strokeLinecap="round"
    {...props}
  />
);
// MenuToggle component
const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary"
  >
    <svg width="23" height="23" viewBox="0 0 23 23" className="stroke-current text-secondary">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        transition={{ duration: 0.1 }}
      />
    </svg>
  </button>
);

// Menu item variants
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// MenuItem component
const MenuItem = ({ id, text, icon, path }) => {
  const colors = ["#fef6e4", "#f582ae", "#8bd3dd", "#b8c1ec", "#ff8906"];
  const style = { border: `3px solid ${colors[id]}`, backgroundColor: colors[id] };

  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center mb-5 cursor-pointer"
    >

      <Link to={path}>
        <div className="flex items-center">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center mr-4"
            style={style}
          >
            <span className="text-xl">{icon}</span>
          </div>
          <div
            className="w-[200px] h-8 rounded-md flex items-center justify-center px-3"
            style={style}
          >
            <span className="text-white text-base font-medium">{text}</span>
          </div>
        </div>
      </Link>

    </motion.li>
  );
};


// Navigation animation variants
const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

// List of menu items
import { Link } from "react-router-dom";


// Navigation component
const Navigation = () => (
  <motion.ul variants={navVariants} className="absolute top-24 left-6 w-56">
    {items.map((item) => (
      <MenuItem id={item.id} key={item.id} text={item.text} icon={item.icon} path={item.path} />
    ))}
  </motion.ul>
);

// Main HamburgerMenu component
const HamburgerMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed top-0 left-0 bottom-0 z-50"
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-72 bg-primary"
        variants={sidebar}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default HamburgerMenu;
