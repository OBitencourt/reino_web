import Image from "next/image"
import { SpecialButton, StyledButton, StyledHeader, StyledNav } from "./style"

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
                    <SpecialButton>
                        Contate já!
                    </SpecialButton>
                    <Image 
                        alt="instagram"
                        src="/images/instagram-icon.svg"
                        width={40}
                        height={40}
                    />
                </div>
            </StyledHeader>
        </>
    )
}


export default Header