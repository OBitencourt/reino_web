"use client";

import Image from "next/image"
import { GradientButtonWrapper, MenuButton, MenuMobile, MenuNavButton, SpecialButton, StyledButton, StyledHeader, StyledNav } from "./style"
import { useEffect, useState } from "react"
import Appear from "@/src/animations/appear";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter()

    const [open, setisOpen] = useState(false)

    const handleIsOpen = () => {
        setisOpen(!open)
        console.log(open)
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto"; 
        }

        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [open]);

    const scrollToSection = (id: string, isMobile: boolean) => {
        const section = document.getElementById(id)

        if(section && isMobile == false) {
            section.scrollIntoView({behavior: 'smooth'})
        }

        if(section && isMobile == true) {
            section.scrollIntoView({behavior: 'smooth'})

            setisOpen(false)
        }
    }


    return (
        <>  
            <Appear yAxis={-50} durationTime={2} delay={2}>

                <StyledHeader>
                    <div className="w-[25%]">

                        <Image 
                            alt="logo"
                            src="/images/reinoweb-logo.svg"
                            width={50}
                            height={50}

                            style={{
                                height: 'auto'
                            }}
                        />
                    </div>

                    <StyledNav>
                        
                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',    
                            width: '100%',
                            justifyContent: 'space-between'                    
                        }}>
                            <li>
                                <div
                                    className="flex justify-center items-center text-(--dark-text) transition text-[1.1rem] font-semibold cursor-pointer gap-3 hover:text-[#CCCCCC]"   
                                    onClick={() => scrollToSection('home', false)}
                                >
                                    Home
                                </div>
                            </li>
                            <li>
                                <div
                                    className="flex justify-center items-center text-(--dark-text) transition text-[1.1rem] font-semibold cursor-pointer gap-3 hover:text-[#CCCCCC]"
                                    onClick={() => scrollToSection('services', false)}
                                >
                                    Serviços
                                </div>
                            </li>
                            <li>
                                <div
                                    className="flex justify-center items-center text-(--dark-text) transition text-[1.1rem] font-semibold cursor-pointer gap-3 hover:text-[#CCCCCC]"
                                    onClick={() => router.push("/portfolio")}
                                >
                                    Portfólio
                                    <Image 
                                        src="/images/arrow-right-up.svg"
                                        width={15}
                                        height={15}
                                        alt="arrow-right-up"
                                    />
                                </div>
                            </li>
                            <li>
                                <div
                                    className="flex justify-center items-center text-(--dark-text) transition text-[1.1rem] font-semibold cursor-pointer gap-3 hover:text-[#CCCCCC]"
                                    onClick={() => scrollToSection('about', false)}
                                >
                                    Sobre
                                </div>
                            </li>
                        </ul>
                    </StyledNav>

                    <div className="flex gap-[16px] w-[25%] justify-end ">
                        <GradientButtonWrapper>
                            <SpecialButton onClick={() => scrollToSection('contact', false)}>
                                Contate já!
                            </SpecialButton>
                        </GradientButtonWrapper>
                    </div>
                    <MenuButton
                        onClick={handleIsOpen}
                    >
                        <Image 
                            src="/images/menu-icon.svg"
                            alt="menu-icon"
                            width={40}
                            height={40}
                        />
                    </MenuButton>
                </StyledHeader>
            </Appear>

            <MenuMobile
                $isOpen={open}
            >
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px', borderBottom: '0.8px solid #bbbbbb1b', paddingBottom: '36px'}}>
                    <Image 
                        alt="logo"
                        src="/images/reinoweb-logo.svg"
                        width={35}
                        height={35}

                        style={{
                            height: 'auto',
                            filter: 'opacity(0.8)'
                        }}
                    />

                    <div
                        onClick={handleIsOpen}
                    >

                        <Image 
                            alt="logo"
                            src="/images/close-icon.svg"
                            width={35}
                            height={35}

                            style={{
                                height: 'auto',
                                filter: 'opacity(0.3)'
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-10">
                    <MenuNavButton
                        onClick={() => scrollToSection('home', true)}
                    >
                        Home
                    </MenuNavButton>
                    <MenuNavButton
                        onClick={() => scrollToSection('services', true)}
                    >
                        Nossos Serviços
                    </MenuNavButton>
                    <MenuNavButton
                        onClick={() => scrollToSection('about', true)}
                    >
                        Sobre nós
                    </MenuNavButton>
                    <MenuNavButton
                        onClick={() => scrollToSection('contact', true)}
                    >
                        Contato
                    </MenuNavButton>

                </div>
            </MenuMobile>
        </>
    )
}


export default Header