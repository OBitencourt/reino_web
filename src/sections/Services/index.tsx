import Container from "@/src/style"
import { Card, CardsWrapper, CardWrapper, Chip, ChipWrapper, Circle, CircleWrapper, ImageWrapper, Info, Title } from "./style"
import Image from "next/image"
import SecondAppear from "@/src/animations/secondAppear"

const Services = () => {
    return (
        <>
            <section id="services" style={{paddingBottom: "42px" ,position: 'relative'}}>
                <SecondAppear delay={0.5} durationTime={1} yAxis={-70}>

                    <Container>
                        <Title>
                            Nossos Serviços
                        </Title>
                        <ImageWrapper>
                            <Image 
                                src="/images/light-services.webp"
                                alt="light-services"
                                width={2500}
                                height={10}
                                style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '0',
                                    zIndex: -1,
                                }}
                            />
                        </ImageWrapper>
                        <CardsWrapper>
                            <CardWrapper>
                                <Card>
                                    <CircleWrapper>

                                        <Circle>
                                            <Image 
                                                alt="UX/UI"
                                                src="/images/wireframe-icon.svg"
                                                width={35}
                                                height={35}
                                            />
                                        </Circle>
                                    </CircleWrapper>
                                    <ChipWrapper>

                                        <Chip>
                                            Design UX/UI

                                        </Chip>
                                    </ChipWrapper>
                                    <Info>
                                        Desenhamos e montamos seus designs modernos e funcionais, pensados para surpreender e guiar o seu usuário final. Projetos em Figma com foco na usabilidade, estética e identidade visual única para o seu site e sua empresa.
                                    </Info>
                                </Card>
                            </CardWrapper>
                            <CardWrapper>

                                <Card>
                                    <CircleWrapper>

                                        <Circle>
                                            <Image 
                                                alt="UX/UI"
                                                src="/images/code-icon.svg"
                                                width={35}
                                                height={35}
                                            />
                                        </Circle>

                                    </CircleWrapper>
                                    <ChipWrapper>

                                        <Chip>
                                            Desenvolvimento Web
                                        </Chip>
                                    </ChipWrapper>
                                    <Info>
                                        Sites modernos, rápidos e responsivos, com visual marcante e navegação fluida. Tecnologias como Next.js, Node.js e MongoDB são utilizadas conforme a necessidade de cada projeto.
                                    </Info>
                                </Card>
                            </CardWrapper>
                            <CardWrapper>
                                <Card>
                                    <CircleWrapper>

                                        <Circle>
                                            <Image 
                                                alt="UX/UI"
                                                src="/images/megaphone-icon.svg"
                                                width={35}
                                                height={35}
                                            />
                                        </Circle>
                                    </CircleWrapper>
                                    <ChipWrapper>
                                        <Chip>
                                            Social Media Design

                                        </Chip>

                                    </ChipWrapper>
                                    <Info>
                                        Transforme seu perfil em um verdadeiro trono digital. Criamos artes profissionais,personalizadas e exclusivas para postagens de redes sociais, com foco na sua identidade visual, engajamento e comunicação clara com seu público.
                                    </Info>
                                </Card>
                            </CardWrapper>
                        </CardsWrapper>
                    </Container>
                </SecondAppear>
            </section>
        </>
    )
}


export default Services