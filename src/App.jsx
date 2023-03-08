import React, { useEffect } from "react"
import Layout from "./Layout"
import { Home, Listings } from "./components"
import { Routes, Route } from "react-router-dom"


const App = () => {
    return (
        <Layout>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route exact path="/" element={<Listings />} />
            </Routes>
        </Layout>
    )
}

export default App
