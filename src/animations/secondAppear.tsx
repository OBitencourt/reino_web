import { motion } from 'motion/react'

interface Props {
    children: React.ReactNode,
    delay: number,
    yAxis?: number,
    xAxis?: number,
    durationTime?: number
}

const SecondAppear = ({children, delay, yAxis, xAxis, durationTime}: Props) => {
    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    y: yAxis,
                    x: xAxis
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                }}
                transition={{
                    delay: delay,
                    duration: durationTime,
                }}
                viewport={{amount: 0.2, once: true}}
            >
                {children}
            </motion.div>
        </>
    )
}


export default SecondAppear