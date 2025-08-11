import Image from "next/image"
import Container from "../../style"
import { ButtonsWrapper, Divider, FirstBricksBlur, PrimaryButton, SecondaryButton, SecondBricksBlur, Subtitle, Title, Wrapper } from "./style"

const Home = () => {

    const handleSectionNavigation = (id: string) => {
        const section = document.getElementById(id)
        if(section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <section 
                style={{
                    paddingTop: '70px',
                    height: "90dvh",
                    position: 'relative'
                }}
            >
                <Container style={{maxWidth: "1800px"}}>
                    <div style={{display: "flex", justifyContent: "center",}}>

                        <Wrapper>

                            <Title>
                                Bem vindo ao 
                                <br/>
                                <span>
                                    Reino Web
                                </span>
                            </Title>
                            <Subtitle>
                                Construa seu império digital com a gente.
                            </Subtitle>
                            <Divider />
                            <ButtonsWrapper>
                                <PrimaryButton
                                    onClick={() => handleSectionNavigation("contact")}
                                >
                                    Fale Conosco!
                                </PrimaryButton>
                                <SecondaryButton
                                    onClick={() => handleSectionNavigation("services")}
                                >
                                    Nossos Serviços
                                </SecondaryButton>
                            </ButtonsWrapper>

                            <FirstBricksBlur />
                            <Image 
                                src="/images/brick-with-mask.webp"
                                alt="bricks"
                                width={800}
                                height={200}
                                loading="lazy"                               
                                style={{
                                    height: 'auto',
                                    position: 'absolute',
                                    bottom: '-55px',
                                    left: '-180px',
                                    zIndex: -2
                                }}
                            />
                            <SecondBricksBlur />
                            <Image 
                                src="/images/brick-with-mask2.webp"
                                alt="bricks"
                                width={800}
                                height={200}
                                loading="lazy"
                                style={{
                                    height: 'auto',
                                    position: 'absolute', 
                                    bottom: '-100px',
                                    right: '-170px',
                                    filter: 'opacity(80%)',
                                    zIndex: -2                                    
                                }}
                            />

                        </Wrapper>
                    </div>
                </Container>
            </section>
        </>
    )
}


export default Home