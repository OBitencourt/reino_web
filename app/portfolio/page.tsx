"use client"
import Image from "next/image";
import { projects } from "./projects";
import { useRouter } from "next/navigation";


export default function Portfolio () {
    const router = useRouter()

    return (
        <>
            <div className="p-10">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push("/")}
                        className="text-(--dark-text) font-semibold bg-zinc-700 text-sm rounded-lg px-4 py-2 hover:brightness-125 cursor-pointer transition"
                    >
                        Voltar
                    </button>

                    <div className="w-full h-0.5 rounded-xl bg-zinc-800">
                    </div>
                </div>
                
                <div className="flex gap-8 mt-8 flex-wrap wrap-normal">

                    {
                        projects.map(project => {

                            return (

                                <div 
                                    key={project.id}
                                    className="flex justify-between flex-col bg-zinc-800 rounded-lg lg:w-[32%] sm:w-full border border-transparent hover:border-(--border) transition duration-100 ease-in"
                                >
                                    <div className="p-4 border-b border-zinc-700">

                                        {/* Image Wrapper */}
                                        <div
                                            style={{
                                                backgroundImage: `url(${project.image})`,
                                            }}
                                            className={`h-[300px] bg-zinc-700 rounded-md w-full relative  bg-cover bg-center bg-no-repeat border border-zinc-600`}
                                        >

                                            <div className="absolute top-4 right-4 gap-2 flex">
                                                {
                                                    project.category.map(category => (
                                                        <button key={category} className="text-sm bg-(--cs) py-1 px-3 font-medium rounded-full">
                                                            {category}
                                                        </button>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        
                                        <h2 className="text-xl font-bold tracking-wide mt-3 text-white">
                                            {project.name}
                                        </h2>
                                        <p className="text-md font-medium text-zinc-300">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="p-4 flex gap-4 sm:gap-2">
                                        {
                                            project.linkDribble && (
                                                <a href={project.linkDribble} target="new_blank" className="w-full bg-(--cp) sm:px-2 sm:text-sm sm:gap-2 font-medium tracking-wide text-md text-white rounded-lg py-2 hover:brightness-90 transition cursor-pointer flex gap-4 justify-center items-center">
                                                    Ver design
                                                    <Image 
                                                        src="/images/dribble-icon.svg"
                                                        alt="design-dribble"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </a>
                                            )
                                        }
                                        {
                                            project.linkGithub && (
                                                <a href={project.linkGithub} target="new_blank" className="w-full bg-(--cp) sm:px-2 sm:text-sm sm:gap-2 font-medium tracking-wide text-md text-white rounded-lg py-2 hover:brightness-90 transition cursor-pointer flex gap-4 justify-center items-center">
                                                    Ver código
                                                    <Image 
                                                        src="/images/github-icon.svg"
                                                        alt="code-github"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}