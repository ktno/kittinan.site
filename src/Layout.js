import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Div } from 'atomize'

const Layout = props => {
    return (
        <Div>
            <Header />
                {props.children}
            <Footer />
        </Div>
    )
}

export default Layout