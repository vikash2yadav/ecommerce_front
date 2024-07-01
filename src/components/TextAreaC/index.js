import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const TextAreaC = ( props ) => {
    return (
        <>
            <TextArea 
                name={props?.name}
                value={props?.props}
                onChange={props?.onChange}
                placeholder={props?.placeholder}
                className={props?.className}
            />
        </>
    )
}

export default TextAreaC