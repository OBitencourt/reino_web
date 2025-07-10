import Image from "next/image"
import Container from "../../style"
import { ButtonsWrapper, Divider, FirstBricksBlur, PrimaryButton, SecondaryButton, SecondBricksBlur, Subtitle, Title, Wrapper } from "./style"

const Home = () => {
    return (
        <>
            <section 
                style={{
                    paddingTop: '100px',
                    height: "90dvh"

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
                                <PrimaryButton>
                                    Fale Conosco!
                                </PrimaryButton>
                                <SecondaryButton>
                                    Nossos Serviços
                                </SecondaryButton>
                            </ButtonsWrapper>

                            <FirstBricksBlur />
                            <Image 
                                src="/images/brick-mask1.svg"
                                alt="bricks"
                                width={800}
                                height={200}
                                style={{
                                    height: 'auto',
                                    position: 'absolute',
                                    bottom: '-55px',
                                    left: '-180px',
                                    filter: 'opacity(40%)'
                                }}
                            />
                            <SecondBricksBlur />
                            <Image 
                                src="/images/brick-mask2.svg"
                                alt="bricks"
                                width={800}
                                height={200}
                                style={{
                                    height: 'auto',
                                    position: 'absolute',
                                    bottom: '-100px',
                                    right: '-170px',
                                    filter: 'opacity(30%)'                                    
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