import React from "react";
import "./SideDrawer.css";
import ReactDOM  from "react-dom";

const SideDrawer = props =>{
    const content = <aside className="side-Drawer">
        {props.children}
    </aside>

    return ReactDOM.createPortal(content,document.getElementById('drawer-hook'));
}

export default SideDrawer;