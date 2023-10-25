import React from 'react'

export default function Card() {
    
    return (
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
    )
}
