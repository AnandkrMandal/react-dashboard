import React from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Barchart from './Barchart';
import Piechart from './Piechart';
import Tabledata from './Tabledata';
import Card from './Card';
import Colorcard from './Colorcard';
import Footer from './Footer';





function Dashboard() {
    let url = "/.";
    return (
        <div>
            {/*  <!-- Page Wrapper --> */}
            <div id="wrapper">

                {/*  <!-- Sidebar --> */}

                <Sidebar/>

                {/*  <!-- End of Sidebar --> */}

                {/*  <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/*  <!-- Main Content --> */}
                    <div id="content">

                      {/*  <!-- Navbar --> */}

                       <Navbar title="Shahrukh"/>

                       {/*  <!-- End of Navbar --> */}
                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">

                            {/*  <!-- Content Row Card Item  --> */}

                            <Card/>

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
                                             <Barchart/>   
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
                                              <Piechart/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* table data  */}
                            <Tabledata/>
                            {/* table data End */}

                            {/* <!-- Color System --> */}
                            <Colorcard/>
                            {/* <!-- Color System End --> */}

                        </div>
                    </div>
                </div>
            {/*   <!-- /.container-fluid --> */}
            </div >
            {/*   <!-- End of Main Content -->*/}




            {/* // <!-- Footer --> */}
            <Footer/>
     
            {/* <!-- End of Footer --> */}



            {/* page top button */}
            <a className="scroll-to-top rounded" href="#page-top" >
            <i className="fas fa-angle-up"></i>
            </a>
            {/* page top button */}
        </div >

    )
}

export default Dashboard;