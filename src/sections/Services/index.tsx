"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import SecondAppear from "@/src/animations/secondAppear";
import MovingDotsSide from "@/src/animations/movingDotsSide";
import Container from "@/src/style";

const Services = () => {
    const router = useRouter();

    return (
        <section id="services" className="pb-[42px] relative">
            <SecondAppear delay={0.5} durationTime={1} yAxis={-70}>
                <MovingDotsSide />

                <Container>
                    {/* Title */}
                    <h2
                        className="
                            text-[42px] font-medium text-center pt-[200px] mb-16
                            bg-gradient-to-b from-white/100 to-[#BB8FFA]
                            bg-clip-text text-transparent z-[1]
                            max-[430px]:text-[32px]
                        "
                    >
                        Nossos Serviços
                    </h2>

                    {/* Light Image */}
                    <div className="relative">
                        <Image
                            src="/images/light-services.webp"
                            alt="light-services"
                            width={2500}
                            height={10}
                            className="absolute -left-40 -top-50 -z-10"
                        />
                    </div>

                    {/* Cards Wrapper */}
                    <div
                        className="
                            flex justify-center gap-6
                            max-[430px]:flex-col
                        "
                    >
                        {/* CARD 1 */}
                        <div
                            className="
                                bg-gradient-to-b from-[#bbbbbb] via-[#832EFF] to-[#bbbbbb]
                                p-[1px] rounded-[18.5px] w-[26%]
                                max-[430px]:w-[80%] max-[430px]:mx-auto max-[430px]:mb-8
                            "
                        >
                            <div
                                className="
                                    w-full h-[600px] bg-[var(--card)]
                                    rounded-[18px] flex flex-col justify-between items-center
                                    px-[68px] py-[40px]
                                    max-[430px]:p-[32px_36px_44px] max-[430px]:h-auto
                                "
                            >
                                <div
                                    className="
                                        bg-gradient-to-b from-[#676767] via-white to-[#676767]
                                        p-[2px] rounded-full mb-7
                                    "
                                >
                                    <div
                                        className="
                                            bg-[var(--background)] p-6 rounded-full
                                        "
                                    >
                                        <Image
                                            alt="UX/UI"
                                            src="/images/wireframe-icon.svg"
                                            width={35}
                                            height={35}
                                            className="
                                                max-[430px]:w-[40px] max-[430px]:h-auto
                                            "
                                        />
                                    </div>
                                </div>

                                <div
                                    className="
                                        bg-gradient-to-b from-[#676767] via-white to-[#676767]
                                        p-[1.5px] rounded-full w-full mb-7
                                    "
                                >
                                    <div
                                        className="
                                            bg-[var(--background)] text-white text-[1.3rem]
                                            rounded-full py-3 px-6 text-center
                                            max-[430px]:text-[1.2rem]
                                        "
                                    >
                                        Design UX/UI
                                    </div>
                                </div>

                                <p
                                    className="
                                        text-[#CCCCCC] text-[1.2rem]
                                        max-[430px]:text-[1.2rem] max-[430px]:text-[#f1f1f1]
                                    "
                                >
                                    Desenhamos e montamos seus designs modernos e funcionais,
                                    pensados para surpreender e guiar o seu usuário final.
                                    Projetos em Figma com foco na usabilidade, estética e
                                    identidade visual única para o seu site e sua empresa.
                                </p>

                                <button
                                    onClick={() => router.push("/portfolio")}
                                    className="
                                        w-full bg-[#1E1E1E] py-2 text-white font-normal
                                        rounded-lg mt-4 border border-transparent
                                        hover:brightness-110 hover:border-[var(--border)]
                                        transition cursor-pointer
                                    "
                                >
                                    Ver Designs
                                </button>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div
                            className="
                                bg-gradient-to-b from-[#bbbbbb] via-[#832EFF] to-[#bbbbbb]
                                p-[1px] rounded-[18.5px] w-[26%]
                                max-[430px]:w-[80%] max-[430px]:mx-auto max-[430px]:mb-8
                            "
                        >
                            <div
                                className="
                                    w-full h-[600px] bg-[var(--card)]
                                    rounded-[18px] flex flex-col justify-between items-center
                                    px-[68px] py-[40px]
                                    max-[430px]:p-[32px_36px_44px] max-[430px]:h-auto
                                "
                            >
                                <div
                                    className="
                                        bg-gradient-to-b from-[#676767] via-white to-[#676767]
                                        p-[2px] rounded-full mb-7
                                    "
                                >
                                    <div
                                        className="
                                            bg-[var(--background)] p-6 rounded-full
                                        "
                                    >
                                        <Image
                                            alt="dev"
                                            src="/images/code-icon.svg"
                                            width={35}
                                            height={35}
                                            className="max-[430px]:w-[40px]"
                                        />
                                    </div>
                                </div>

                                <div
                                    className="
                                        bg-gradient-to-b from-[#676767] via-white to-[#676767]
                                        p-[1.5px] rounded-full w-full mb-7
                                    "
                                >
                                    <div
                                        className="
                                            bg-[var(--background)] text-white text-[1.3rem]
                                            rounded-full py-3 px-6 text-center
                                            max-[430px]:text-[1.2rem]
                                        "
                                    >
                                        Desenvolvimento Web
                                    </div>
                                </div>

                                <p
                                    className="
                                        text-[#CCCCCC] text-[1.2rem]
                                        max-[430px]:text-[#f1f1f1]
                                    "
                                >
                                    Sites modernos, rápidos e responsivos, com visual marcante e
                                    navegação fluida. Tecnologias como Next.js, Node.js e
                                    MongoDB são utilizadas conforme a necessidade de cada
                                    projeto. Todos os projetos são construídos com bom SEO para
                                    ajudar o seu site a se destacar.
                                </p>

                                <button
                                    onClick={() => router.push("/portfolio")}
                                    className="
                                        w-full bg-[#1E1E1E] py-2 text-white font-normal
                                        rounded-lg mt-4 border border-transparent
                                        hover:brightness-110 hover:border-[var(--border)]
                                        transition cursor-pointer
                                    "
                                >
                                    Ver Projetos
                                </button>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div
                            className="
                                bg-gradient-to-b from-[#bbbbbb] via-[#832EFF] to-[#bbbbbb]
                                p-[1px] rounded-[18.5px] w-[26%]
                                max-[430px]:w-[80%] max-[430px]:mx-auto max-[430px]:mb-8
                            "
                        >
                            <div
                                className="
                                    w-full h-[600px] bg-[var(--card)]
                                    rounded-[18px] flex flex-col justify-between items-center
                                    px-[68px] py-[40px]
                                    max-[430px]:p-[32px_36px_44px] max-[430px]:h-auto
                                "
                            >
                                <div
                                    className="
                                        bg-gradient-to-b from-[#676767] via-white to-[#676767]
                                        p-[2px] rounded-full mb-7
                                    "
                                >
                                    <div
                                        className="
                                            bg-[var(--background)] p-6 rounded-full
                                        "
                                    >
                                        <Image
                                            alt="social media"
                                            src="/images/megaphone-icon.svg"
                                            width={35}
                                            height={35}
                                            className="max-[430px]:w-[40px]"
                                        />
                                    </div>
                                </div>

                                <div
                                    className="
                                        bg-gradient-to-b from-[#676767] via-white to-[#676767]
                                        p-[1.5px] rounded-full w-full mb-7
                                    "
                                >
                                    <div
                                        className="
                                            bg-[var(--background)] text-white text-[1.3rem]
                                            rounded-full py-3 px-6 text-center
                                            max-[430px]:text-[1.2rem]
                                        "
                                    >
                                        Social Media Design
                                    </div>
                                </div>

                                <p
                                    className="
                                        text-[#CCCCCC] text-[1.2rem]
                                        max-[430px]:text-[#f1f1f1]
                                    "
                                >
                                    Transforme seu perfil em um verdadeiro trono digital. Criamos
                                    artes profissionais, personalizadas e exclusivas para
                                    postagens de redes sociais, com foco na sua identidade
                                    visual, engajamento e comunicação clara com seu público.
                                </p>

                                <button
                                    onClick={() => router.push("/portfolio")}
                                    className="
                                        w-full bg-[#1E1E1E] py-2 text-white font-normal
                                        rounded-lg mt-4 border border-transparent
                                        hover:brightness-110 hover:border-[var(--border)]
                                        transition cursor-pointer
                                    "
                                >
                                    Ver Designs
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </SecondAppear>
        </section>
    );
};

export default Services;
