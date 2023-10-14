import React, { useState } from 'react';
import './Dashboard.css';
import { Chart } from "react-google-charts";


//  bar Chart Sample Data
export const Bardata = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 8000, 4400, 3000],
  ["2015", 7170, 3560, 4010],
  ["2016", 5600, 4220, 2400],
  ["2017", 9030, 5040, 3990],
  ["2018", 8530, 3540, 4990],
  ["2019", 6530, 6040, 3490],
  ["2020", 8430, 4540, 2890],
  ["2021", 9430, 6540, 4890],
  ["2022", 7430, 3540, 3890],
  ["2023", 9430, 5540, 3890],
];

export const BarChartOptions = {
  chart: {
    // title: "Company Performance",
    // subtitle: "Sales, Expenses, and Profit: 2014-2023",
    is3D: true,
  },
};


// Pie Chart Sample Data
export const Piedata = [
    ["Sales", "over Platform"],
    ["Shop", 2345],
    ["Online", 6574],
    ["Retail", 1587],
    ["Franchise", 2031],
  ];
  
  export const PieChartOptions = {
    // title: "Sales Over Platform",
    pieHole: 0.4,
    is3D: false,
  };




function Dashboard(props) {
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
    const changeStyle1 = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    return (
        <div>


            {/*  <!-- Page Wrapper --> */}
            <div id="wrapper">

                {/*  <!-- Sidebar --> */}
                <ul className={style} style={{ background: "rgb(11 26 75)" }} id="accordionSidebar">
                    {/*  <!-- Sidebar - Brand --> */}


                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href={url}>
                        <div className="sidebar-brand-icon rotate-n-15">
                        </div>
                        <img className="ml-2 mt-1 bg-light rounded" width="40" height="40" src="https://img.icons8.com/ios/50/old-vmware-logo.png" alt="old-vmware-logo" />
                        <div className="sidebar-brand-text mx-4 ">Dashboard</div>

                    </a>

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
                            <img  className='my-0' width="30" height="30" src="https://img.icons8.com/bubbles/50/guest-male.png" alt="guest-male"/>
                            <span>Account</span>
                        </a>
                    </li>
                    <hr className="sidebar-divider my-0"></hr>


                </ul>
                {/*  <!-- End of Sidebar --> */}

                {/*  <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/*  <!-- Main Content --> */}
                    <div id="content">

                        {/*  <!-- Topbar --> */}
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
                        {/*  <!-- End of Topbar --> */}

                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">

                            {/*  <!-- Content Row --> */}
                            <div className="row">

                                {/*  <!-- Earnings  Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <img width="96" height="96" src="https://img.icons8.com/external-goofy-color-kerismaker/96/external-Earning-business-goofy-color-kerismaker.png" alt="external-Earning-business-goofy-color-kerismaker" />
                                                </div>
                                                <div className="col-auto">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Earning</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$198k</div>
                                                    <span className="text-lm "><img width="20" height="20" src="https://img.icons8.com/material/24/40C057/thick-arrow-pointing-up--v3.png" alt="thick-arrow-pointing-up--v3" />37% this Month</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- order Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card  shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <img width="96" height="96" src="https://img.icons8.com/color/48/purchase-order.png" alt="purchase-order" />
                                                </div>
                                                <div className="col-auto">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Orders</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$2.4k</div>
                                                    <span className="text-lm "><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FA5252/down--v1.png" alt="down--v1" />2% this Month</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- balance Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card  shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <img width="96" height="96" src="https://img.icons8.com/color/48/wallet--v1.png" alt="wallet--v1" />
                                                </div>
                                                <div className="col-auto">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Balance</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$2.4K</div>
                                                    <span className="text-lm text-green"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FA5252/down--v1.png" alt="down--v1" />2% this Month</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Total Sales Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card  shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">

                                                    <img width="96" height="96" src="https://img.icons8.com/fluency/48/bag-front-view.png" alt="bag-front-view" />
                                                </div>
                                                <div className="col-auto">
                                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        Total sales</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$89k</div>
                                                    <span className="text-lm"><img width="20" height="20" src="https://img.icons8.com/material/24/40C057/thick-arrow-pointing-up--v3.png" alt="thick-arrow-pointing-up--v3" />11% this Month</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  <!-- Content Row --> */}

                            <div className="row">

                                {/*   <!-- Area Chart --> */}
                                <div className="col-xl-8 col-lg-7">
                                    <div className="card shadow mb-4">
                                        {/*  <!-- Card Header - Dropdown --> */}
                                        <div
                                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                            <div className="dropdown no-arrow">
                                                <a className="dropdown-toggle" href={url} role="button" id="dropdownMenuLink"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink">
                                                    <div className="dropdown-header">View</div>
                                                    <a className="dropdown-item" href={url}>Month data</a>
                                                    <a className="dropdown-item" href={url}>Quater Data</a>

                                                    <a className="dropdown-item" href={url}>Yearly Data</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  <!-- Card Body --> */}
                                        <div className="card-body">
                                            <div className="chart-area">
                                                <Chart 
                                                    chartType="Bar"
                                                    width="100%"
                                                    height="100%"
                                                    data={Bardata}
                                                    options={BarChartOptions}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Pie Chart --> */}
                                <div className="col-xl-4 col-lg-5">
                                    <div className="card shadow mb-4">
                                        {/*  <!-- Card Header - Dropdown --> */}
                                        <div
                                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                            <div className="dropdown no-arrow">
                                                <a className="dropdown-toggle" href={url} role="button" id="dropdownMenuLink"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink">
                                                    <div className="dropdown-header">View</div>
                                                    <a className="dropdown-item" href={url}>Month data</a>
                                                    <a className="dropdown-item" href={url}>Quater Data</a>
                                                    <a className="dropdown-item" href={url}>Yearly Data</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  <!-- Card Body --> */}
                                        <div className="card-body">
                                            <div className="chart-area">
                                            <Chart 
                                                    chartType="PieChart"
                                                    width="100%"
                                                    height="100%"
                                                    data={Piedata}
                                                    options={PieChartOptions}
                                                />
                                            </div>
                                            {/* chart-pie pt-4 pb-2   <div className="mt-4 text-center small">
                                                <span className="mr-2">
                                                    <i className="fas fa-circle text-primary"></i> Direct
                                                </span>
                                                <span className="mr-2">
                                                    <i className="fas fa-circle text-success"></i> Social
                                                </span>
                                                <span className="mr-2">
                                                    <i className="fas fa-circle text-info"></i> Referral
                                                </span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*   <!-- Content Row --> */}
                            {/* <div className="row"> */}

                            {/*   <!-- Content Column --> */}
                            <div className="col">

                                {/* <!-- Project Card Example --> */}
                                <div className="bg-primary card shadow ">
                                    <div className="d-flex flex-row float-start card-header justify-content-between ">
                                        <h6 className="p-1  m-0 font-weight-bold text-dark mt-1 ">Product Sell</h6>
                                        <div className="d-flex flex-row-reverse" >

                                            <input type="text" className=" form-control bg-light border-0 small" placeholder="Search for..."
                                                aria-label="Search" />
                                            <a className="my-2 mx-2" href={url}> <i className="fas fa-search fa-sm"></i></a>
                                        </div>
                                    </div>



                                </div>
                                <div className="card-body d-flex ">
                                    <div className="table-responsive custom-table-responsive card shadow mb-0 ">

                                        <table className="table custom-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product Details</th>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">price</th>
                                                    <th scope="col">Total Sales</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span className='mr-4'><img width="60" height="60" src="https://img.icons8.com/3d-fluency/94/book-shelf.png" alt="book-shelf" /></span>
                                                        Abstract 3D
                                                    </td>
                                                    <td>
                                                        1392
                                                    </td>
                                                    <td><a href='/.'>32 In Stock</a></td>
                                                    <td>
                                                        $45.99
                                                    </td>
                                                    <td>$675</td>

                                                </tr>

                                                <tr>
                                                    <td>
                                                        <span className='mr-4'><img width="60" height="60" src="https://img.icons8.com/3d-fluency/94/book-shelf.png" alt="book-shelf" /></span>
                                                        Abstract 3D
                                                    </td>
                                                    <td>
                                                        1392
                                                    </td>
                                                    <td><a href='/.'>32 In Stock</a></td>
                                                    <td>
                                                        $45.99
                                                    </td>
                                                    <td>$675</td>

                                                </tr>


                                                <tr>
                                                    <td>
                                                        <span className='mr-4'><img width="60" height="60" src="https://img.icons8.com/3d-fluency/94/book-shelf.png" alt="book-shelf" /></span>
                                                        Abstract 3D
                                                    </td>
                                                    <td>
                                                        1392
                                                    </td>
                                                    <td><a href='!#'>32 In Stock</a></td>
                                                    <td>
                                                        $45.99
                                                    </td>
                                                    <td>$200</td>
                                                </tr>


                                                <tr>
                                                    <td>
                                                        <span className='mr-4'><img width="60" height="60" src="https://img.icons8.com/3d-fluency/94/book-shelf.png" alt="book-shelf" /></span>
                                                        Abstract 3D
                                                    </td>
                                                    <td>
                                                        1392
                                                    </td>
                                                    <td><a href='/.'>32 In Stock</a></td>
                                                    <td>
                                                        $45.99
                                                    </td>
                                                    <td>$675</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>


                            {/* <!-- Color System --> */}
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-primary text-white shadow">
                                        <div className="card-body">
                                            Data 1
                                            <div className="text-white-100">$3454</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-success text-white shadow">
                                        <div className="card-body">
                                            Data 2
                                            <div className="text-white-100 ">$4876</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            Data 3
                                            <div className="text-white-100">$87657</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-warning text-white shadow">
                                        <div className="card-body">
                                            Data 4
                                            <div className="text-white-100">$6757</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-danger text-white shadow">
                                        <div className="card-body">
                                            Data 5
                                            <div className="text-white-100">$5987</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-secondary text-white shadow">
                                        <div className="card-body">
                                            Data 6
                                            <div className="text-white-100">$90876</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-light text-black shadow">
                                        <div className="card-body">
                                            Data 7
                                            <div className="text-black-100">$9872</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            Data 8
                                            <div className="text-white-100">$4567</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/*   <!-- /.container-fluid --> */}

            </div >
            {/*   <!-- End of Main Content -->

            <!-- Footer --> */}
            <footer className="sticky-footer bg-white" >
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy;  Your Website 2023 created by Anand</span>
                    </div>
                </div>
            </footer>
            {/* <!-- End of Footer --> */}
            <a className="scroll-to-top rounded" href="#page-top" >
                <i className="fas fa-angle-up"></i>
            </a>
        </div >





    )
}

export default Dashboard;