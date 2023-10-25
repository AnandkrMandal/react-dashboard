import React, { useState } from 'react';


export default function Navbar(props) {
    let url = "";
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    return (
        //  {/*  <!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light bg-light topbar mb-4 static-top shadow">

            {/*<!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle}>
                <i className="fa fa-bars"></i>
            </button>
            {/*  <!-- Topbar Search --> */}
            <div className="d-none d-md-block d-lg-block" style={{ fontFamily: "Georgia, serif", display: 'flex-left' }}>
                <b>Hello {props.title},</b>
                <img width="28" height="28" src="https://img.icons8.com/emoji/48/waving-hand-emoji.png" alt="waving-hand-emoji" />

            </div>
            {/*  <!-- Topbar Search --> */}
            <div className="input-group d-flex flex-row" style={{ display: 'flex-end', justifyContent: "end", marginRight: "10px" }}>
                <div className="input-group-append ">
                    <div className='my-2 mx-2'><a href={url}> <i className="fas fa-search fa-sm"></i></a></div>
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" />
                </div>
            </div>
        </nav>
        // {/*  <!-- End of Topbar --> */}
    )
}
