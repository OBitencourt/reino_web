import { motion } from 'motion/react'

interface Props {
    children: React.ReactNode,
    delay: number,
    yAxis?: number,
    xAxis?: number
}

const Appear = ({children, delay, yAxis, xAxis}: Props) => {
    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    y: yAxis
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: delay
                }}
            >
                {children}
            </motion.div>
        </>
    )
}


export default Appear