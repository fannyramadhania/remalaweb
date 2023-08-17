import React, { useState, useEffect } from "react";
import "./hubunganinvestor.css"
const HubunganInvestor = () => {
    const [renderContent, setRenderContent] = useState("Content")
    return (
        <>
            <div className="hi-content d-flex justify-content-center align-items-center">
                <p>MENJUNJUNG TINGGI INTREGRITAS DAN KOMITMEN DALAM BEKERJA</p>
            </div>
            <div className="buttons ">
                <div className="container d-flex justify-content-evenly">
                    <button >Laporan - Laporan</button>
                    <button >Informasi Saham</button>
                    <button >Berita & Kegiatan</button>
                </div>
                <div className="isi-content-about">
                    {renderContent}
                </div>
            </div>

        </>
    )
}

export default HubunganInvestor