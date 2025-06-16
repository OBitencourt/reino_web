import Image from "next/image"
import { GradientButtonWrapper, IconButton, MenuButton, SpecialButton, StyledButton, StyledHeader, StyledNav } from "./style"

const Header = () => {

    return (
        <>  
            
            <StyledHeader>
                <Image 
                    alt="logo"
                    src="/images/reinoweb-logo.svg"
                    width={80}
                    height={70}
                    style={{
                        height: 'auto'
                    }}
                />

                <StyledNav>

                    <StyledButton>
                        Home
                    </StyledButton>
                    <StyledButton>
                        Serviços
                    </StyledButton>
                    <StyledButton>
                        Sobre
                    </StyledButton>
                    <StyledButton>
                        Contacte
                    </StyledButton>
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
                            width={40}
                            height={40}
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