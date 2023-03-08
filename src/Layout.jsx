import React from 'react'
import { Navbar } from './components'

const layout = (props) => {
    return (
        <div className='bg-primary min-h-screen'>
            <Navbar />
            <main>
                { props.children }
            </main>
        </div>
    )
}

export default layout

