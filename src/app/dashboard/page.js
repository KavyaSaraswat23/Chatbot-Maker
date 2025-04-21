"use client"
import { Authcontext } from "@/context/auth";
import Link from "next/link";
import React, { useContext, useState } from "react";
const Dashboard = () => {
    
    const globalData = useContext(Authcontext)
    const isLoggedIn = globalData.isLoggedIn
    const [botName, setBotName] = useState("")
    const [botContext, setBotContext] = useState("")
    const [botStore, setBotStore] = useState([])
    function botNameHandler(e) {
        setBotName(e.target.value)
    }
    function botContextHandler(e) {
        setBotContext(e.target.value)
    }
    function addButtonHandler(){
        setBotStore([...botStore, [botName, botContext]])
        setBotName("")
        setBotContext("")
    }
    if (!isLoggedIn) {
        return (
            <div>
                <h1>Please Login</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>Chatbot Dashboard</h1>
            <div>
                <input placeholder="Chatbot Name" onChange={botNameHandler} value={botName}></input>
                <input placeholder="Context" onChange={botContextHandler} value={botContext}></input>
                <button onClick={addButtonHandler}>Add Chatbot</button>
            </div>
            <div>
                {botStore.map((bot) => {
                    return (
                        <>
                            <h2>{bot[0]}</h2>
                            <p>{bot[1]}</p>
                            <button>Open Chat</button>
                        </>
                    )
                })}
            </div>
            
        </div>
    )
}
export default Dashboard;