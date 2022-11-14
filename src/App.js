import Imput from "./input";
import Tasks from "./tasks";
import {createContext, useState} from "react";
import s from './app.module.css'
import {CssVarsProvider} from "@mui/joy";

import Navbar from "./navbar";


export let Context = createContext()

export let ContextFunc = createContext()

export let ContextOpen = createContext()

export let ContextClose = createContext()

export let ContextSetOpen = createContext()

export let ContextSetClose = createContext()

export let ContextVis = createContext()

export let ContextVisFunc = createContext()

const App = () => {


    const [visibility, setVisibility] = useState(false)

    const [visibility1, setVisibility1] = useState(false)

    const [buttonOpen, setButtonOpen] = useState(true)

    const [buttonClose, setButtonClose] = useState(false)




    return (
        <CssVarsProvider>
            <Navbar/>
            <div className={s.center}>


                <Context.Provider value={visibility}>
                    <ContextFunc.Provider value={setVisibility}>
                        <ContextClose.Provider value={buttonClose}>
                            <ContextSetOpen.Provider value={setButtonOpen}>
                                <ContextSetClose.Provider value={setButtonClose}>
                                    <ContextOpen.Provider value={buttonOpen}>
                                        <ContextVis.Provider value={visibility1}>
                                            <ContextVisFunc.Provider value={setVisibility1}>
                                                        <Imput/>
                                                        <Tasks/>
                                            </ContextVisFunc.Provider>
                                        </ContextVis.Provider>
                                    </ContextOpen.Provider>
                                </ContextSetClose.Provider>
                            </ContextSetOpen.Provider>
                        </ContextClose.Provider>


                    </ContextFunc.Provider>

                </Context.Provider>
            </div>
        </CssVarsProvider>
    )
}

export default App

