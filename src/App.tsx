import {useEffect, useState} from 'react'
import './App.css'
import NavigationBar from "./components/navigation/navigation-bar.tsx";
import MainPage from "./components/main-page/main-page.tsx";
import MenuPage from "./components/main-page/menu.tsx";

function App() {

    return (
        <>
            <NavigationBar/>
            <MainPage/>
            <MenuPage/>
        </>
    )
}

export default App
