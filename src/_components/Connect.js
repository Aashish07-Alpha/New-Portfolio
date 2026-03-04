"use client";

import { Dock, DockIcon } from "../components/magic-ui/dock";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail,
} from "@tabler/icons-react";

function Connect() {
  return (
    <section id="Connect" className="w-full min-n-h-full relative bg-bgColor pb-5">
      <h1 className="text-xl md:text-5xl font-bold text-white mt-1 text-center px-4 font-playfair">
        Connect with me!
      </h1>

      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-primaryColor ">
          <a href="https://github.com/Aashish07-Alpha" target="_blank" rel="noreferrer">
            <IconBrandGithub stroke={2} />
          </a>
        </DockIcon>
        <DockIcon className="bg-primaryColor">
          <a href="https://www.linkedin.com/in/aashish-suryawanshi/" target="_blank" rel="noreferrer">
            <IconBrandLinkedin stroke={2} />
          </a>
        </DockIcon>
        <DockIcon className="bg-primaryColor">
          <a href="https://x.com/yghugardare15" target="_blank" rel="noreferrer">
            {" "}
            <IconBrandX stroke={2} />
          </a>
        </DockIcon>
        <DockIcon className="bg-primaryColor">
          <a href="mailto:ashishsurya2005@gmail.com" target="_blank" rel="noreferrer">
            <IconMail stroke={2} />
          </a>
        </DockIcon>
      </Dock>
    </section>
  );
}

export default Connect;
