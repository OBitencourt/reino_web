import Image from "next/image"
import { Chip, ChipsWrappers, ContactDiv, ImageWrapper, StyledButton, StyledInput, StyledTextArea, Title } from "./style"
import Container from "@/src/style"
import Toasty from "@/src/components/Toasty"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [openToast, setOpenToast] = useState(false)
    const [toastTitle, setToastTitle] = useState('')
    const [toastMessage, setToastMessage] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()

        const serviceId = "service_reinoweb"
        const templateId = "template_i4gqzrg"
        const publicKey = "_WAmA6glIKEe4dHty"

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Reino Web",
            message: message,
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email enviado com sucesso!", response)
                setName("")
                setEmail("")
                setMessage("")

                setToastTitle('Mensagem Enviada!')
                setToastMessage('Responderemos o mais breve possível!')
                setOpenToast(true)

                setTimeout(() => {
                    setOpenToast(false)
                }, 3500)
            })
            .catch((error) => {
                setToastTitle('Preencha todos os campos corretamente!')
                setToastMessage('')
                setOpenToast(true)

                setTimeout(() => {
                    setOpenToast(false)
                }, 3500)

                console.log("Erro ao enviar o email:", error)
            })
    }


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
                        <form onSubmit={handleSubmit} className="emailForm">
                            <StyledInput 
                                minLength="4"
                                required
                                placeholder="Digite seu nome..." 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <StyledInput 
                                minLength="5"
                                required
                                placeholder="Digite seu email..." 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            />
                            <StyledTextArea 
                                minLength="5"
                                required
                                placeholder="Digite sua mensagem..." 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <StyledButton type="submit">
                                    Enviar
                                </StyledButton>
                            </div>
                        </form>
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
                    <Toasty open={openToast} title={toastTitle} message={toastMessage}/>
                </Container>
            </section>
        </>
    )
}


export default Contact