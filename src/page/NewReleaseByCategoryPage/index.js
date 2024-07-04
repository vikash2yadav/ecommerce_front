import React from 'react'
import Header from '../../components/Header'
import NewReleaseMain from '../../components/NewReleaseMain'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'

const NewReleaseByCategoryPage = () => {
    let {cat} = useParams();
    return (
        <>
            <Header />
            <div style={{ minHeight: '70vh' }}>
                <NewReleaseMain category={cat} />
            </div>
            <Footer />
        </>
    )
}

export default NewReleaseByCategoryPage