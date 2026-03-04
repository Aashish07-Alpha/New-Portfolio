"use client";
import { achievements } from "../data/yash";
import SparklesText from "../components/magic-ui/sparkles-text";
import { motion } from "framer-motion";
import { IconTrophy, IconCalendar, IconBolt } from "@tabler/icons-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const categoryColors = {
  Hackathon: { border: "border-primaryColor/40", badge: "bg-primaryColor/10 text-primaryColor border-primaryColor/30" },
  Competition: { border: "border-yellow-400/40", badge: "bg-yellow-400/10 text-yellow-400 border-yellow-400/30" },
  default: { border: "border-purple-400/40", badge: "bg-purple-400/10 text-purple-400 border-purple-400/30" },
};

function Achievements() {
  return (
    <section
      id="Achievements"
      className="w-full min-h-full bg-bgColor py-12 px-4 md:px-12"
    >
      <SparklesText
        className="text-3xl md:text-5xl text-white font-bold text-center mt-2 mb-3 font-playfair"
        text="Achievements"
        sparklesCount={4}
      />
      <p className="text-textColor text-sm md:text-base max-w-xl mx-auto text-center mb-12">
        Milestones, awards and recognitions from competitions and technical events.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, i) => {
          const colors = categoryColors[item.category] || categoryColors.default;
          return (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className={`group relative bg-black rounded-xl p-6 border ${colors.border} hover:border-primaryColor/70 hover:shadow-[0_0_24px_2px_#64FFDA18] transition-all duration-300 flex flex-col gap-4`}
            >
              {/* Trophy icon header */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-lg bg-primaryColor/10 border border-primaryColor/20 flex items-center justify-center flex-shrink-0">
                  <IconTrophy size={26} className="text-primaryColor" stroke={1.5} />
                </div>
                <span className={`font-mono text-xs border rounded-full px-3 py-0.5 ${colors.badge}`}>
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base leading-snug">
                {item.title}
              </h3>

              {/* Date & Impact */}
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-1 text-textColor font-mono text-xs">
                  <IconCalendar size={13} stroke={1.5} />
                  {item.date}
                </span>
                <span className="flex items-center gap-1 text-primaryColor font-mono text-xs">
                  <IconBolt size={13} stroke={1.5} />
                  {item.impact}
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-primaryColor/10" />

              {/* Description */}
              <p className="text-textColor text-sm leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="font-mono text-primaryColor text-xs border border-primaryColor/25 bg-primaryColor/5 rounded-full px-2.5 py-0.5 hover:bg-primaryColor/15 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primaryColor/25 rounded-tr-xl group-hover:border-primaryColor/70 transition-colors duration-300" />
              {/* Bottom-left accent */}
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primaryColor/15 rounded-bl-xl group-hover:border-primaryColor/50 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Achievements;
