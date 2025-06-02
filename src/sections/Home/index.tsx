import Image from "next/image"
import Container from "../../style"
import { ButtonsWrapper, Divider, ImageWrapper, PrimaryButton, SecondaryButton, Subtitle, Title, Wrapper } from "./style"

const Home = () => {
    return (
        <>
            <section 
                style={{
                    display: 'flex', 
                    alignItems: 'center',
                    height: "90dvh"

                }}
            >
                <Container>
                    <div style={{display: "flex", justifyContent: "space-between",}}>

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
                                <PrimaryButton>
                                    Contacte-nos
                                    <Image 
                                        src="/images/arrow-right.svg"
                                        alt="arrow"
                                        width={50}
                                        height={50}
                                    />
                                </PrimaryButton>
                                <SecondaryButton>
                                    Nossos Serviços
                                    <Image 
                                        src="/images/arrow-bottom.svg"
                                        alt="arrow"
                                        width={50}
                                        height={50}
                                    />
                                </SecondaryButton>
                            </ButtonsWrapper>

                        </Wrapper>
                        <ImageWrapper>
                            <Image 
                                src="/images/light-hero.svg"
                                alt="light"
                                width={1700}
                                height={500}
                                style={{
                                    height: "auto",
                                    zIndex: 0,
                                    position: "absolute",
                                    top: "-100px"
                                }}
                            />
                            <Image 
                                src="/images/image-hero.png"
                                alt="light"
                                width={500}
                                height={500}
                                style={{
                                    height: "auto",
                                    zIndex: 1,
                                    position: "absolute",
                                    top: "-100px"
                                }}
                            />
                        </ImageWrapper>
                    </div>
                </Container>
            </section>
        </>
    )
}


export default Home