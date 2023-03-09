import React from 'react'
import { Navbar, Footer } from './components'

const layout = (props) => {
    return (
        <div className='bg-primary min-h-screen relative'>
            <Navbar />
            <main>
                { props.children }
            </main>
            <Footer />
        </div>
    )
}

export default layout

