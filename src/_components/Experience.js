"use client";
import { experiences } from "../data/yash";
import SparklesText from "../components/magic-ui/sparkles-text";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Experience() {
  return (
    <section
      id="Experience"
      className="w-full min-h-full bg-bgColor py-12 px-4 md:px-12"
    >
      {/* Heading */}
      <SparklesText
        className="text-3xl md:text-5xl text-white font-bold text-center mt-2 mb-3"
        text="Experience"
        sparklesCount={4}
      />
      <p className="text-textColor text-sm md:text-base max-w-xl mx-auto text-center mb-12">
        My professional journey and leadership roles, showcasing technical
        expertise and organizational contributions.
      </p>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical glow line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primaryColor via-primaryColor/40 to-transparent" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative pl-14"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              {/* Glowing dot */}
              <div className="absolute left-[11px] top-6 w-4 h-4 rounded-full border-2 border-primaryColor bg-bgColor shadow-[0_0_8px_2px_#64FFDA55]" />

              {/* Card */}
              <div className="group relative bg-[#0d1f38] rounded-xl p-5 md:p-6 border border-primaryColor/20 shadow-lg hover:border-primaryColor/60 hover:shadow-[0_0_20px_2px_#64FFDA18] transition-all duration-300">

                {/* Top row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex-shrink-0 overflow-hidden p-1">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-base md:text-lg leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-primaryColor text-sm mt-0.5 font-mono truncate">
                      {exp.company}
                    </p>
                    <p className="text-textColor font-mono text-xs mt-0.5">
                      {exp.date}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-primaryColor/10 mb-4" />

                {/* Description */}
                <p className="text-textColor text-sm leading-relaxed mb-4">
                  {exp.desc}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="font-mono text-primaryColor text-xs border border-primaryColor/30 bg-primaryColor/5 rounded-full px-3 py-0.5 hover:bg-primaryColor/15 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primaryColor/30 rounded-tr-xl group-hover:border-primaryColor/70 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
