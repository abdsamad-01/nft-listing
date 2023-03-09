import React, { useEffect } from "react"
import Layout from "./Layout"
import { Home, Listings } from "./components"
import { Routes, Route } from "react-router-dom"
import { nfts } from "./constants"


const App = () => {
    return (
        <Layout>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route exact path="/" element={<Listings 
                    nfts={nfts}
                />} />
            </Routes>
        </Layout>
    )
}

export default App
