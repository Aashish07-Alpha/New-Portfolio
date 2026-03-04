"use client";

import { IconMenu2 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import { Link } from "react-scroll";
import { useState ,useEffect} from "react";
const links = ["About", "Skills", "Experience", "Projects", "Education", "Achievements", "Connect"];
function Header() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {};
  }, []);
  const getOffset = () => {
    if (typeof window !== 'undefined') {
      return (-15 * window.innerHeight) / 100;
    }
    return 0;
  };
  const getOffset1 = () => {
    if (typeof window !== 'undefined') {
      return (-12 * window.innerHeight) / 100;
    }
    return 0;
  };


  return (
    <header
      className={`${loading && "hidden"} bg-bgColor shadow-black shadow-md text-textColor w-full fixed top-0 z-50 h-[10vh] md:h-[15vh] flex justify-between items-center px-4 md:px-8`}
    >
      <div>
        <span
          className="font-mono font-bold text-3xl md:text-4xl tracking-tight"
          style={{ color: "#64FFDA" }}
        >
          AS
        </span>
      </div>

      <nav className={`md:flex gap-5 hidden font-mono`}>
        {links.map((el, index) => (
          <Link
            key={index}
            to={el}
            spy={true}
            smooth={true}
            offset={getOffset()} // Adjusting offset for the fixed header height
            duration={500}
            className="cursor-pointer text-lg md:text-xl"
          >
            <span className="text-primaryColor">0{index + 1}. </span>
            <span className=" transition-colors duration-500 ease-in-out hover:text-white">
              {el}
            </span>
          </Link>
        ))}
      </nav>
      <div
        className="md:hidden block z-50 relative"
        onClick={() => setOpen((open) => !open)}
      >
        {!open ? (
          <IconMenu2 stroke={2} size={40} />
        ) : (
          <IconX stroke={2} size={40} />
        )}
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[60%] bg-bgColor z-40 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden flex flex-col`}
      >
        {/* Close button row */}
        <div className="flex justify-end p-4 flex-shrink-0">
          <button onClick={() => setOpen(false)} className="text-textColor hover:text-white">
            <IconX stroke={2} size={32} />
          </button>
        </div>
        {/* Scrollable nav links */}
        <div
          className={`flex flex-col items-center overflow-y-auto flex-1 py-6 gap-y-8 font-mono ${
            open ? "shadow-primaryColor shadow-xl" : ""
          }`}
        >
          {links.map((el, index) => (
            // <a
            //   key={index}
            //   href={`#${el}`}
            //   className="text-lg mb-4 text-textColor"
            //   onClick={() => setOpen(false)}
            // >
            <Link
              key={index}
              to={el}
              spy={true}
              smooth={true}
              offset={getOffset1()} // Adjusting offset for the fixed header height
              duration={500}
              className="cursor-pointer text-lg mb-4 text-textColor"
              onClick={() => setOpen(false)}
            >
              <p className="text-primaryColor text-center">0{index + 1}. </p>
              <p className="transition-colors duration-500 ease-in-out hover:text-white text-center">
                {el}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
