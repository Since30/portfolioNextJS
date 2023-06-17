import React from "react";



const About = () => {
    return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className="uppercase text-xl tracking-widest text-[#5651e5]">A propos</p>
                <h2 className="py-4">Qui je suis</h2>
                <p className="py-2 text-gray-600">
                    //Je ne suis pas un devellopeur standard</p>
                <p className="py-2 text-gray-600">
                    J'ai travaillé pendant plus de dix ans en tant que technicien en automatisme
                    j'ai  toujours était passionné par l'informatique depuis l'age de 13ans.
                    J'avais commencé par des petit script en ruby pour des jeux en 2D.
                    J'ai commencé à apprendre le devellopement web qu'en 2022 et je suis actuelement en total reconversion.
                    Aprenant de l'ecole digital studi j'ai vu les différent composant du devellopement web.
                    J'ai commencé par le front end avec HTML CSS et Javascript puis j'ai appris React et Next js.
                    J'ai aussi appris le back end avec Node js et Express js et php Symfony(j'en apprend encore).
                </p>
                <p className="py-2 text-gray-600">
                    J'ai aussi appris à utiliser des outils comme Git et Github pour le versionning de mes projets.
                    Ce portfolio est un projet que j'ai réalisé avec React et Tailwind css.
                    j'espere que vous l'apprécierez.
                
                </p>

                <p className="py-2 text-gray-600 underline cursor-pointer">Verifier quelques un de mes derniers projets</p>


            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="/asset/photo2.jpg"  alt="photo"/>
            </div>
        </div>
    </div>
    )
}

export default About