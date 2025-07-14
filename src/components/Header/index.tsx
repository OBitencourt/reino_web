"use client";

import Image from "next/image"
import { GradientButtonWrapper, IconButton, MenuButton, MenuMobile, MenuNavButton, SpecialButton, StyledButton, StyledHeader, StyledNav } from "./style"
import { useState } from "react"

const Header = () => {

    const [open, setisOpen] = useState(false)

    const handleIsOpen = () => {
        setisOpen(!open)
        console.log(open)
    }

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
            
            <StyledHeader>
                <Image 
                    alt="logo"
                    src="/images/reinoweb-logo.svg"
                    width={50}
                    height={50}

                    style={{
                        height: 'auto'
                    }}
                />

                <StyledNav>
                    
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',    
                        width: '100%',
                        justifyContent: 'space-between'                    
                    }}>
                        <li>
                            <StyledButton   
                                onClick={() => scrollToSection('home', false)}
                            >
                                Home
                            </StyledButton>
                        </li>
                        <li>
                            <StyledButton
                                onClick={() => scrollToSection('services', false)}
                            >
                                Serviços
                            </StyledButton>
                        </li>
                        <li>
                            <StyledButton
                                onClick={() => scrollToSection('about', false)}
                            >
                                Sobre
                            </StyledButton>
                        </li>
                        <li>
                            <StyledButton
                                onClick={() => scrollToSection('contact', false)}
                            >
                                Contacte
                            </StyledButton>
                        </li>
                    </ul>
                </StyledNav>

                <div style={{display: "flex", gap: "16px"}}>
                    <GradientButtonWrapper>
                        <SpecialButton>
                            Contate já!
                        </SpecialButton>
                    </GradientButtonWrapper>
                    <IconButton>
                        <Image 
                            alt="instagram"
                            src="/images/instagram-icon.svg"
                            width={30}
                            height={30}
                        />
                    </IconButton>
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