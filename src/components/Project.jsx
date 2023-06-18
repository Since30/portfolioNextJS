import React from "react";
import ProjectItem from "./ProjectItem";
import Image2 from "/public/asset/project/property.jpg";
import Image3 from "/public/asset/project/property2.jpg";




const Project = () => {
    return (
<div id='project' className="max-w-[1240] mx-auto px-2 py-16">
    <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projets</p>
    <h2 className="py-4">Ce que j'ai conçu</h2>
    <div className="grid md:grid-col-2 gap-8">
        <ProjectItem
         title="DiceGame"
         backgroundImg={Image2} 
         projectUrl='/property'/>
         <ProjectItem
         title="Photography"
         backgroundImg={Image3} 
         projectUrl='/property'/>
       
      

        
        </div>
    </div>





    )
}

export default Project