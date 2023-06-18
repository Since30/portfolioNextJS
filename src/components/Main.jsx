import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Main = () => {
    return (
    <div id='home' className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">
                    CONSTRUISONS QUELQUES CHOSE ENSEMBLES!
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Je suis <span className="text-[#5651e5]">Soulaimane</span>
                        </h1>

                    <h1 className="py-2 text-gray-700">
                        Un devellopeur Web back-end et front-end
                        </h1>

                        <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                           je suis un jeune devellopeur web qui aime le developpement et qui est passionné par le code
                           et les nouvelles technologies.que ce soit en front end ou en back end.
                        </p>

                    <div className="flex items-center justify-between max-w-[330] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <BsFillPersonLinesFill />
                        </div>

                    </div>
            </div>
        </div>
    </div>

    )}

export default Main