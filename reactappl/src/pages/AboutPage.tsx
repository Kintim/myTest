import React from "react";
// import {useHistory} from 'react-router-dom'
import {Link, useRouteNode} from 'react-router5'

export const AboutPage: React.FC = () => {
    const { route } = useRouteNode('about')
    // const history = useHistory()

    return(
        <>
            <h1>Страница для информации</h1>
            <p>Наполение страницы с информацией</p>
            <button className="btn" ><Link routeName="home">Домой</Link></button>
        </>
    )
}