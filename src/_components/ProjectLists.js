"use client";
import { top3, mern, other } from "../data/yash";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

function ProjectLists({ tab }) {
  const [page, setPage] = useState(0);
  const total = other.length;

  return (
    <div
      className={`w-full py-4 px-4 overflow-hidden md:py-4 md:px-8 lg:px-20 gap-8 grid grid-cols-1 ${
        tab === 0 && "md:grid-cols-3"
      } ${tab === 1 && "md:grid-cols-2"}`}
    >
      {tab === 0 &&
        top3.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      {tab === 1 &&
        mern.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      {tab === 2 && (
        <div className="col-span-full flex flex-col items-center gap-6">
          <ProjectCard project={other[page]} />
          {/* Pagination */}
          <div className="flex items-center gap-6 mt-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="px-5 py-2 rounded-lg font-mono text-sm border border-primaryColor/40 text-primaryColor disabled:opacity-30 hover:bg-primaryColor/10 transition-colors duration-200"
            >
              ← Prev
            </button>
            <span className="font-mono text-textColor text-sm">
              <span className="text-primaryColor">{page + 1}</span> / {total}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
              disabled={page === total - 1}
              className="px-5 py-2 rounded-lg font-mono text-sm border border-primaryColor/40 text-primaryColor disabled:opacity-30 hover:bg-primaryColor/10 transition-colors duration-200"
            >
              Next →
            </button>
          </div>
          {/* Dot indicators */}
          <div className="flex gap-2">
            {other.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === page ? "bg-primaryColor scale-125" : "bg-textColor/40 hover:bg-textColor"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectLists;
