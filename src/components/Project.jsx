import React from "react";
import ProjectItem from "./ProjectItem";
import Image2 from "/public/asset/project/property.jpg";



const Project = () => {
    return (
<div className="max-w-[1240] mx-auto px-2 py-16">
    <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projets</p>
    <h2 className="py-4">Ce que j'ai conçu</h2>
    <div className="grid md:grid-col-2 gap-8">
        <ProjectItem title="Property Finder" backgroundImg={Image2} projectUrl='/'/>

        
        </div>
    </div>




    )
}

export default Project