import React from 'react'

const UperTitleBox = (props) => {
    return (
        <>
            <div className="p-4 border-2 sticky top-6 z-50 right-0 border-gray-200 bg-gray-100 border rounded-lg mb-8">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <h1 className='text-3xl'>{props.title}</h1>
                </div>
            </div>
        </>
    )
}

export default UperTitleBox