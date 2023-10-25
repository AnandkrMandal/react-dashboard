import React, { useState } from 'react';


export default function Sidebar() {
    let url = "/.";
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const changeStyle1 = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    return (
        // {/*  <!-- Sidebar --> */ }
        < ul className={style} style={{ background: "rgb(11 26 75)" }
        } id="accordionSidebar" >
            {/*  <!-- Sidebar - Brand --> */}


            < a className="sidebar-brand d-flex align-items-center justify-content-center" href={url} >
                <div className="sidebar-brand-icon rotate-n-15">
                </div>
                <img className="ml-2 mt-1 bg-light rounded" width="40" height="40" src="https://img.icons8.com/ios/50/old-vmware-logo.png" alt="old-vmware-logo" />
                <div className="sidebar-brand-text mx-4 ">Dashboard</div>

            </a >

            <li className="nav-item active d-flex align-items-center justify-content-center">
                <div className="text-center d-none lg-dissabled d-md-inline">
                    <button className="rounded-circle border-0 mt-3" id="sidebarToggle" onClick={changeStyle1}></button>
                </div>
            </li>


            {/*  <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fa-sharp fa-solid fa-table-columns"></i>
                    <span>Dashboard</span></a>

            </li>

            {/*  <!-- Nav Item - Product Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target="collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-box"></i>
                    <span>Product</span>
                </a>
            </li>

            {/* <!-- Nav Item - Customers Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href={url} data-toggle="collapse" data-target="collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fa-solid fa-user"></i>
                    <span >Customers</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href={url} data-toggle="collapse" data-target="collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fa-solid fa-comments-dollar"></i>
                    <span>Income</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href={url} data-toggle="collapse" data-target="collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fa-brands fa-adversal"></i>
                    <span>Promote</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href={url} data-toggle="collapse" data-target="collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fa-solid fa-circle-info"></i>
                    <span>Help</span>
                </a>
            </li>
            <hr className="sidebar-divider my-0"></hr>
            {/*  <!-- Nav Item - Account Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href={url} data-toggle="collapse" data-target="collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <img className='my-0' width="30" height="30" src="https://img.icons8.com/bubbles/50/guest-male.png" alt="guest-male" />
                    <span>Account</span>
                </a>
            </li>
            <hr className="sidebar-divider my-0"></hr>


        </ul >
        // {/*  <!-- End of Sidebar --> */ }
    )
}
