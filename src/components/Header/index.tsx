import Image from "next/image"
import { GradientButtonWrapper, IconButton, SpecialButton, StyledButton, StyledHeader, StyledNav } from "./style"

const Header = () => {

    return (
        <>  
            
            <StyledHeader>
                <Image 
                    alt="logo"
                    src="/images/logo-reinoweb.png"
                    width={150}
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
            </StyledHeader>
        </>
    )
}


export default Header