import { Button } from '@mui/material'
import React from 'react'

const ButtonC = (props) => {
    return (
        <>
            <Button
                style={props?.style}
                variant={props?.variant}
                type={props?.type}
                color={props?.color}
                onClick={props?.onClick}
            >
                {props?.label}
            </Button>
        </>
    )
}

export default ButtonC