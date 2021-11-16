import React from 'react'
import Phases from './components/Phases'
import SellingBar from './components/SellingBar'
import {bg_container, container} from "./earlyKolyyerBanner.module.scss"

const EarlyKolyyerBanner = () => {
    return (
        <div className={bg_container}>
            <div className={container}>
            <SellingBar/>
            <Phases/>
            </div>
        </div>
    )
}

export default EarlyKolyyerBanner
