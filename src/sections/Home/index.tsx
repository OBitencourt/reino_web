import Image from "next/image"
import Container from "../../style"
import { ButtonsWrapper, Divider, FirstBricksBlur, PrimaryButton, SecondaryButton, SecondBricksBlur, Subtitle, Title, Wrapper } from "./style"
import Appear from "@/src/animations/appear"

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
                            <Appear yAxis={-20} durationTime={1} delay={0.5}>

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
                            </Appear>

                            
                            <Divider />

                            <Appear yAxis={-20} delay={1.5} durationTime={0.8}>
                                <ButtonsWrapper>
                                    <PrimaryButton
                                        onClick={() => handleSectionNavigation("contact")}
                                    >
                                        Fale Conosco!
                                        <div className="bg-(--cs) rounded-full p-2 ml-6">
                                            <Image 
                                                src="/images/arrow-bottom.svg"
                                                width={20}
                                                height={20}
                                                alt="arrow-down"
                                            />
                                        </div>
                                    </PrimaryButton>
                                    <SecondaryButton
                                        onClick={() => handleSectionNavigation("services")}
                                    >
                                        Nossos Serviços
                                    </SecondaryButton>
                                </ButtonsWrapper>
                            </Appear>

                            <Appear delay={2} durationTime={2}>

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
                            </Appear>

                        </Wrapper>
                    </div>
                </Container>
            </section>
        </>
    )
}


export default Home