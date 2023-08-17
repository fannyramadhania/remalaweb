import React, { useState, useEffect } from "react";
import "./penghargaan.css"
const Penghargaan = () => {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center flex-wrap">
                    <div className="col-md-2">
                        <div className="penghargaan-img m-auto d-block"></div>
                        <h5 className="text-center mt-3">Nama Penghargaan</h5>
                    </div>
                    <div className="col-md-2">
                        <div className="penghargaan-img m-auto d-block"></div>
                        <h5 className="text-center mt-3">Nama Penghargaan</h5>
                    </div>
                    <div className="col-md-2">
                        <div className="penghargaan-img m-auto d-block"></div>
                        <h5 className="text-center mt-3">Nama Penghargaan</h5>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Penghargaan