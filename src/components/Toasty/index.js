import { Box } from "./style"

const Toasty  = ({open, title, message}) => {

    

    return (
        <>
            <Box open={open}>
                <h6>
                    {title}
                </h6>
                <span>
                    {
                        message ? (
                            `${message}`
                        ) : (
                            ""
                        )
                    }
                </span>
            </Box>
        </>
    )  
}


export default Toasty