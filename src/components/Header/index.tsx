import Image from "next/image"
import { GradientButtonWrapper, IconButton, MenuButton, SpecialButton, StyledButton, StyledHeader, StyledNav } from "./style"

const Header = () => {

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
                <MenuButton>
                    <Image 
                        src="/images/menu-icon.svg"
                        alt="menu-icon"
                        width={40}
                        height={40}
                    />
                </MenuButton>
            </StyledHeader>
        </>
    )
}


export default Header