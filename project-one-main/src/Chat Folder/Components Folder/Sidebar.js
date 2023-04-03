import React from "react"
import Chats3 from "./Chats3"
import Search from "./Search"
import SidebarStyle from "./Sidebar.module.css"


function Sidebar() {
    return(
        <div className={SidebarStyle.sidebar}>
            <Search/>
            <Chats3/>
            </div>
    )
}

export default Sidebar