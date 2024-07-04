import React from 'react'
import NewReleases from '../NewReleases'

const NewReleaseMain = () => {
  return (
    <>
       <div className=''>
    {/* <p className='text-2xl mb-5 font-semibold hover:underline'>New Releases</p>  */}
    <NewReleases title="in clothes" more="/new_release/products/clothes/" />
    <NewReleases title="in shoes" more="/new_release/products/shoes/"/>
    <NewReleases title="in electronics" more="/new_release/products/electronics/"/>
    </div>
    </>
  )
}

export default NewReleaseMain