import Container from "@/src/style"
import { BigDiv, CardFour, CardOne, CardThree, CardTwo, CardWrapper, LittleDiv, Subtitle, Title, TwoLittleDivs } from "./style"
import Image from "next/image"
import SecondAppear from "@/src/animations/secondAppear"


const About = () => {   

    return (

        <>
            <section id="about" style={{ position: 'relative'}}>
                <SecondAppear delay={0.5} durationTime={1} yAxis={-70}>

                    <Container>
                        <Title>
                            Sobre Nós
                        </Title>
                        <BigDiv>
                            <CardWrapper style={{width: '28%'}}>

                                <CardOne>
                                    <Subtitle>
                                        Nosso Propósito
                                    </Subtitle>

                                    <p>
                                        Criamos o Reino Web para <span>transformar</span> comércios locais, marcas pessoais e empresas de todos os tamanhos em referências no digital. 
                                        <br />
                                        Acreditamos que toda marca merece uma presença marcante na internet — seja com um site profissional, uma identidade forte ou conteúdos nas redes sociais que realmente atraiam os usuários.
                                    </p>

                                    <Image 
                                        alt="image1-about"
                                        src="/images/image1-about.svg"
                                        width={250}
                                        height={500}
                                        style={{
                                            height: 'auto',
                                            margin: '32px auto'
                                        }}
                                    />
                                </CardOne>
                            </CardWrapper>

                            <LittleDiv>
                                <CardWrapper >

                                    <CardTwo>
                                        <div>
                                            <Subtitle>
                                                O que nos move...
                                            </Subtitle>

                                            <ul>
                                                <li>
                                                    <Image 
                                                        src="/images/shine.svg"
                                                        alt="shine"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Atendimento Próximo.</p>
                                                </li>
                                                <li>
                                                    <Image 
                                                        src="/images/shine.svg"
                                                        alt="shine"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Design Pensado, não genérico.</p>
                                                </li>
                                                <li>
                                                    <Image 
                                                        src="/images/shine.svg"
                                                        alt="shine"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Soluções personalizadas.</p>
                                                </li>
                                                <li>
                                                    <Image 
                                                        src="/images/shine.svg"
                                                        alt="shine"
                                                        width={50}
                                                        height={50}
                                                    />
                                                    <p>Foco nos seus resultados e autenticidade</p>
                                                </li>                                        
                                            </ul>
                                            {/*paragrafo*/}
                                        </div>

                                        <Image 
                                            alt="image2-about"
                                            src="/images/image2-about.svg"
                                            width={250}
                                            height={400}
                                            className="estrelinhas"
                                            style={{
                                                height: 'auto'
                                            }}
                                        />

                                    </CardTwo>
                                </CardWrapper>

                                <TwoLittleDivs>
                                    <CardWrapper style={{width: '50%', marginRight: '40px'}}>

                                        <CardThree>                                
                                            <Subtitle>
                                                Resultados Reais
                                            </Subtitle>
                                            <div    
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                }}
                                            >
                                                
                                                <p>Mais do que aparência</p>

                                                <Image 
                                                    alt="image3-about"
                                                    src="/images/image3-about.svg"
                                                    width={200}
                                                    height={250}
                                                    style={{
                                                        height: 'auto',
                                                        margin: '0 auto'
                                                    }}

                                                />

                                                <p>Entregamos <span> IMPACTO</span></p>
                                            </div>
                                        </CardThree>
                                    </CardWrapper>
                                    <CardWrapper style={{width: '50%'}}>

                                        <CardFour>
                                            <Subtitle>Missão</Subtitle>
                                            <p>
                                                “Na era digital, cada marca merece seu território. O Reino Web te guia na conquista do <span>seu</span>.”
                                            </p>
                                        </CardFour>
                                    </CardWrapper>
                                </TwoLittleDivs>
                            </LittleDiv>
                        </BigDiv>
                    </Container>
                </SecondAppear>
            </section>
        
        </>
    )
}


export default About