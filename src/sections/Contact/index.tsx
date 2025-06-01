import Image from "next/image"
import { Chip, ContactDiv, StyledButton, StyledInput, StyledTextArea, Title } from "./style"
import Container from "@/src/style"

const Contact = () => {

    return (

        <>
            <section id="contact" style={{height: "100dvh",  position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
                    <div style={{width: '45%', display: 'flex', justifyContent: 'space-between', gap: '24px'}}>

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
                    </div>
                </Container>
            </section>
        </>
    )
}


export default Contact