import React, { useState, useEffect } from "react";
import "./about.css"
import Profile from "./menu/Profile";
import StrukturOrganisasi from "./menu/StukturOrganisasi";
import StrukturGroup from "./menu/StrukturGroup";
import AnggaranDasar from "./menu/AnggaranDasar";
import Penghargaan from "./menu/Penghargaan";
const About = () => {
    const [renderContent, setRenderContent] = useState(<Profile />)
    const [choose,setChoose]=useState(0)


    const handleClick = (boxIndex,content) => {
            setChoose(boxIndex)
            setRenderContent(content)
    }
    return (
        <div className="content">
            <div className="profile-content d-flex align-items-center justify-content-center">
                <div className="content-text">
                    <p className="text-center">PT . REMALA ABADI</p>
                    <h4 className="text-center fs-1 fw-bold">Company Group</h4>
                </div>
            </div>
            <div className="buttons ">
                <div className="container d-flex justify-content-evenly">
                    <button onClick={() => setRenderContent(<Profile />)}>Profile</button>
                    <button onClick={() => setRenderContent(<StrukturOrganisasi />)}>Struktur Organisasi</button>
                    <button onClick={() => setRenderContent(<StrukturGroup />)}>Struktur Group</button>
                    <button onClick={() => setRenderContent(<AnggaranDasar />)}>Anggaran Dasar </button>
                    <button onClick={() => setRenderContent(<Penghargaan />)}>Penghargaan</button>
                </div>
                <div className="isi-content-about">
                    {renderContent}
                </div>
            </div>
        </div>
    )
}

export default About