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
                            <StyledButton>
                                Home
                            </StyledButton>
                        </li>
                        <li>
                            <StyledButton>
                                Serviços
                            </StyledButton>
                        </li>
                        <li>
                            <StyledButton>
                                Sobre
                            </StyledButton>
                        </li>
                        <li>
                            <StyledButton>
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
                isOpen={open}
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
                    <MenuNavButton>
                        Home
                    </MenuNavButton>
                    <MenuNavButton>
                        Nossos Serviços
                    </MenuNavButton>
                    <MenuNavButton>
                        Sobre nós
                    </MenuNavButton>
                    <MenuNavButton>
                        Contato
                    </MenuNavButton>

                </div>
            </MenuMobile>
        </>
    )
}


export default Header