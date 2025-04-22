"use client"
import { Authcontext } from "@/context/auth";
import { getToken } from "@/helpers/auth";

import { createChatBot } from "@/services/chatbot";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getChatBot } from "@/services/chatbot";
import React, { useContext, useEffect, useState } from "react";
const Dashboard = () => {
    
    const globalData = useContext(Authcontext)
    const isLoggedIn = globalData.isLoggedIn
    const [botName, setBotName] = useState("")
    const [botContext, setBotContext] = useState("")
    const [botStore, setBotStore] = useState([])
    const [chatBots, setChatBots] = useState([])
    const router = useRouter()
    useEffect(() => {
        getChatBot({token: getToken()}).then((res) => {
            console.log(res)
            setBotStore(res)
        })
    },[])
    function botNameHandler(e) {
        setBotName(e.target.value)
    }
    function botContextHandler(e) {
        setBotContext(e.target.value)
    }
    async function addButtonHandler(){
        if (botName.trim() && botContext.trim()) {
            // Check Here
            const newEntry = {
                name: botName,
                context: botContext,
                id: Date.now(),
            }
        }
        setBotStore([...botStore, [botName, botContext]])
        createChatBot({name: botName, context: botContext, token: getToken()})
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
                {botStore.map((bot,idx) => {
                    return (
                        <div key={bot?.id || idx}>
                            <h2>{bot.name}</h2>
                            <p>{bot.context}</p>
                            <button 
                                onClick={() => {router.push(`/chatbot/${bot.name}`)}}
                            >Visit</button>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
export default Dashboard;