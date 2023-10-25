import React from 'react'

export default function Tabledata() {
    let url = "/.";
    return (
        <>
    <div className="col">
        <div className="bg-primary card shadow ">
            <div className="d-flex flex-row float-start card-header justify-content-between ">
                <h6 className="p-1  m-0 font-weight-bold text-dark mt-1 ">Product Sell</h6>
                    <div className="d-flex flex-row-reverse" >
                        <input type="text" className=" form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" />
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
                                Abstract 4D
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
                                Abstract 5D
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
                                Abstract 6D
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
    </>
    )
}
