import Container from "@/src/style"
import { Card, CardsWrapper, Chip, Circle, Info, Title } from "./style"
import Image from "next/image"

const Services = () => {
    return (
        <>
            <section id="services" style={{height: "100dvh",  position: 'relative'}}>
                <Container>
                    <Title>
                        Nossos Serviços
                    </Title>
                    <Image 
                        src="/images/light-services.svg"
                        alt="light-services"
                        width={2500}
                        height={10}
                        style={{
                            height: 'auto',
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            zIndex: -1
                        }}
                    />
                    <CardsWrapper>
                        <Card>
                            <Circle>
                                <Image 
                                    alt="UX/UI"
                                    src="/images/wireframe-icon.svg"
                                    width={50}
                                    height={50}
                                />
                            </Circle>
                            <Chip>
                                Design UX/UI

                            </Chip>
                            <Info>
                                Layouts modernos e funcionais, pensados para encantar e guiar o usuário. Projetos em Figma e Canva com foco na usabilidade, estética e identidade visual única, para o seu site.
                            </Info>
                        </Card>
                        <Card>
                            <Circle>
                                <Image 
                                    alt="UX/UI"
                                    src="/images/code-icon.svg"
                                    width={50}
                                    height={50}
                                />
                            </Circle>
                            <Chip>
                                Desenvolvimento Web
                            </Chip>
                            <Info>
                                Sites modernos, rápidos e responsivos, com foco em performance, visual marcante e navegação fluida. Tecnologias como Next.js, Node.js e MongoDB são utilizadas conforme a necessidade de cada projeto.
                            </Info>
                        </Card>
                        <Card>
                            <Circle>
                                <Image 
                                    alt="UX/UI"
                                    src="/images/megaphone-icon.svg"
                                    width={50}
                                    height={50}
                                />
                            </Circle>
                            <Chip>
                                Social Media Design

                            </Chip>
                            <Info>
                                Transforme seu perfil em um verdadeiro trono digital. Criação de artes profissionais e personalizadas para postagens de Instagram, Facebook e outras redes, com foco em identidade visual, engajamento e comunicação clara com seu público.
                            </Info>
                        </Card>
                    </CardsWrapper>
                </Container>
            </section>
        </>
    )
}


export default Services