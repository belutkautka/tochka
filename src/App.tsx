import {useEffect, useState} from 'react'
import './App.css'
import NavigationBar from "./components/navigation/navigation-bar.tsx";
import MainPage from "./components/main-page/main-page.tsx";

function App() {

    return (
        <>
            <NavigationBar/>
            <MainPage/>
        </>
    )
}

export default App
