import React from 'react'
import { RouteNode, useRouteNode } from 'react-router5'
import {TodosPage} from "./TodosPage";
import {AboutPage} from "./AboutPage";

export const MainPage: React.FC = () => {
    const { route } = useRouteNode('')
    const topRouteName = route.name.split('.')[0]

    if (topRouteName === 'home') {
        return <TodosPage />
    }

    if (topRouteName === 'about') {
        return <AboutPage />
    }

    return <TodosPage />
}

export default (props: any) => (
    <RouteNode nodeName="">
        {({route}) => <MainPage route={route} {...props} /> }
    </RouteNode>
)