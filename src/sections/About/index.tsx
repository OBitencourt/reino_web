import Container from "@/src/style"
import { CardFour, CardOne, CardThree, CardTwo, Subtitle, Title } from "./style"
import Image from "next/image"


const About = () => {   

    return (

        <>
            <section id="about" style={{height: "100dvh",  position: 'relative'}}>
                <Container>
                    <Title>
                        Sobre Nós
                    </Title>
                    <div style={{display: 'flex', justifyContent: 'center',gap: '40px'}}>
                        <CardOne>
                            <Subtitle>
                                Nosso Propósito
                            </Subtitle>

                            <p>
                                Criamos o Reino Web para transformar comércios locais, marcas pessoais e empresas de todos os tamanhos em referências no digital. 
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

                        <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
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
                                    style={{
                                        height: 'auto'
                                    }}
                                />

                            </CardTwo>

                            <div style={{display: 'flex'}}>
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

                                <CardFour>
                                    <Subtitle>Missão</Subtitle>
                                    <p>
                                        “Na era digital, cada marca merece seu território. O Reino Web te guia na conquista do <span>seu</span>.”
                                    </p>
                                </CardFour>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        
        </>
    )
}


export default About