"use client"


import IconCloud from "../components/magic-ui/icon-cloud";
import { Slugs } from "../data/yash";
import { IconHexagon } from "@tabler/icons-react";



export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center !overflow-hidden animate-[ping_1.5s_ease-in-out_1_3.5s]">
      <div className="relative flex items-center justify-center w-[400px] h-[400px]">
        <IconCloud iconSlugs={Slugs} />
        <IconHexagon className="absolute animate-[spin_5s_linear_infinite]" size={120} color="#64FFDA" stroke={1.25} />
        <div className="absolute font-mono text-white font-semibold text-6xl">AS</div>
      </div>
    </div>
  );
}
