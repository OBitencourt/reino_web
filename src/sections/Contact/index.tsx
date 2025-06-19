import Image from "next/image"
import { Chip, ChipsWrappers, ContactDiv, ImageWrapper, StyledButton, StyledInput, StyledTextArea, Title } from "./style"
import Container from "@/src/style"
import Toasty from "@/src/components/Toasty"

const Contact = () => {

    return (

        <>
            <section id="contact" style={{height: "100dvh",  position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ImageWrapper>
                    <Image 
                        src='/images/light-about.svg'
                        alt="light-about"
                        width={3000}
                        height={2000}
                        style={{
                            height: 'auto',
                            margin: '0 auto',
                            position: 'absolute',
                            top: '-800px',
                            zIndex: '-1'
                        }}
                    />
                </ImageWrapper>
                <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100dvh', transform: 'translateY(50%)'}}>


                    <ContactDiv>
                        <Title>
                            Contacte-nos
                        </Title>
                        <StyledInput placeholder="Digite seu nome..." type="text"/>
                        <StyledInput placeholder="Digite seu email..." type="email"/>
                        <StyledTextArea placeholder="Digite seu nome..." />
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <StyledButton>
                                Enviar
                            </StyledButton>
                        </div>
                    </ContactDiv>
                    <ChipsWrappers>

                        <Chip>
                            <Image 
                                src='/images/phone-icon.svg'
                                alt="phone"
                                width={30}
                                height={30}
                            />
                            <p>
                                +351 912 824 064
                            </p>
                        </Chip>
                        <Chip>
                            <Image 
                                src='/images/email-icon.svg'
                                alt="phone"
                                width={30}
                                height={30}
                            />
                            <p>
                                reinowebofficial@gmail.com
                            </p>
                        </Chip>
                    </ChipsWrappers>
                    <Toasty />
                </Container>
            </section>
        </>
    )
}


export default Contact