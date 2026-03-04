"use client";
import { education } from "../data/yash";
import SparklesText from "../components/magic-ui/sparkles-text";
import { motion } from "framer-motion";
import { IconCalendar, IconMedal } from "@tabler/icons-react";

function Education() {
  return (
    <section
      id="Education"
      className="w-full min-h-full bg-bgColor py-12 px-4 md:px-16"
    >
      <SparklesText
        className="text-3xl md:text-5xl text-white font-bold text-center mt-2 mb-3"
        text="Education"
        sparklesCount={4}
      />
      <p className="text-textColor text-sm md:text-base max-w-xl mx-auto text-center mb-16">
        My academic background and qualifications that shaped my technical foundation.
      </p>

      <div className="relative max-w-5xl mx-auto flex flex-col gap-16">
        {/* Centre spine (desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primaryColor via-primaryColor/30 to-transparent" />

        {education.map((edu, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={edu.id} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0">

              {/* ── Left slot ── */}
              <div className="w-full md:w-1/2 md:pr-10 flex md:justify-end">
                {isLeft ? (
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full max-w-md"
                  >
                    <EduCard edu={edu} />
                  </motion.div>
                ) : (
                  /* Date badge on left when card is right */
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="hidden md:flex justify-end"
                  >
                    <DateBadge date={edu.date} grade={edu.grade} />
                  </motion.div>
                )}
              </div>

              {/* ── Centre node ── */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-bgColor border-2 border-primaryColor shadow-[0_0_12px_3px_#64FFDA55] items-center justify-center">
                <span className="text-primaryColor font-mono font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>

              {/* ── Right slot ── */}
              <div className="w-full md:w-1/2 md:pl-10 flex md:justify-start">
                {!isLeft ? (
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full max-w-md"
                  >
                    <EduCard edu={edu} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="hidden md:flex"
                  >
                    <DateBadge date={edu.date} grade={edu.grade} />
                  </motion.div>
                )}
              </div>

              {/* Mobile date badge */}
              <div className="md:hidden w-full flex items-center gap-2 -mt-4">
                <IconCalendar size={14} className="text-primaryColor" stroke={1.5} />
                <span className="font-mono text-textColor text-xs">{edu.date}</span>
                <span className="ml-auto font-mono text-primaryColor text-xs flex items-center gap-1">
                  <IconMedal size={14} stroke={1.5} />{edu.grade}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function EduCard({ edu }) {
  return (
    <div className="group relative bg-[#0a1929] rounded-2xl overflow-hidden border border-primaryColor/20 hover:border-primaryColor/60 hover:shadow-[0_0_28px_4px_#64FFDA12] transition-all duration-300">
      {/* Teal top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primaryColor/60 via-primaryColor to-primaryColor/30" />

      <div className="p-5 md:p-6">
        {/* Logo + school */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-white p-1.5 flex-shrink-0 shadow-md">
            <img src={edu.img} alt={edu.school} className="w-full h-full object-contain" />
          </div>
          <div className="min-w-0">
            <h3 className="text-white font-bold text-base leading-tight">{edu.school}</h3>
            <p className="text-primaryColor font-mono text-xs mt-1 leading-snug">{edu.degree}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-textColor text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {edu.desc}
        </p>

        {/* Read more hint */}
        <p className="text-primaryColor/50 text-xs font-mono mt-2 group-hover:hidden">hover to expand ↓</p>
      </div>

      {/* Bottom-left glow accent */}
      <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-primaryColor/5 blur-xl group-hover:bg-primaryColor/15 transition-all duration-500" />
    </div>
  );
}

function DateBadge({ date, grade }) {
  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <div className="flex items-center gap-1.5 bg-primaryColor/10 border border-primaryColor/30 rounded-full px-4 py-1.5">
        <IconCalendar size={13} className="text-primaryColor" stroke={1.5} />
        <span className="font-mono text-primaryColor text-xs whitespace-nowrap">{date}</span>
      </div>
      <div className="flex items-center gap-1.5 bg-primaryColor/5 border border-primaryColor/20 rounded-full px-4 py-1">
        <IconMedal size={13} className="text-primaryColor" stroke={1.5} />
        <span className="font-mono text-primaryColor text-xs">{grade}</span>
      </div>
    </div>
  );
}

export default Education;
