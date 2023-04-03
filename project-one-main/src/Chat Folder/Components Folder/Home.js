import React from "react"
import Sidebar from "./Sidebar"
import HomeStyle from "./Home.module.css"
import Chat2 from "./Chat2"


function Home() {
    return(
        <div className={HomeStyle.home}>
            <div className={HomeStyle.container}>
                <Sidebar/>
                <Chat2/>

            </div>
        </div>
    )
}

export default Home