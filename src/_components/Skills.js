"use client"

import SparklesText from "../components/magic-ui/sparkles-text"
import { skills as skillsData } from "../data/yash"
import SkillCard from "../utils/SkillCard"

function Skills() {
  return (
    <section id="Skills" className={`min-h-full overflow-hidden mb-5 w-full bg-bgColor flex flex-col items-center gap-y-4 md:px-12 px-1`}>
       
         <SparklesText className={`text-3xl md:text-5xl text-white font-bold text-center mt-2`} text="Skills" sparklesCount={4} />
        <div className="flex flex-wrap gap-y-6 md:gap-y-10 overflow-hidden w-full px-2 md:mx-2 md:grid md:grid-cols-2 md:gap-5 md:p-10">
        {
            skillsData.map((el,index)=>(
                <SkillCard key={index} title={el.title} skills={el.skills}/>
            ))
        }
        </div>
        
        {/* <SkillCard/> */}
    </section>
  )
}

export default Skills