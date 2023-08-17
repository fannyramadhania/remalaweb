import React, { useState, useEffect } from "react";
import "./strukturorganisasi.css"
import DewanKomisaris from "./menu-struktur-organisasi/DewanKomisaris";
import JajaranDireksi from "./menu-struktur-organisasi/JajaranDireksi";
import SekretarisPerusahaan from "./menu-struktur-organisasi/SekretarisPerusahaan";
import KomiteAudit from "./menu-struktur-organisasi/KomiteAudit";
import KomiteNominasi from "./menu-struktur-organisasi/KomiteNominasi";
import KomiteEvaluasi from "./menu-struktur-organisasi/KomiteEvaluasi";
const StrukturOrganisasi = () => {
    const [content, setContent] = useState(1)
    const [isTap, setIsTap] = useState(false);

    useEffect(() => {
        handleClick(0,<DewanKomisaris/>)
    }, [])
    const handleClick = (boxIndex, pageRender) => {
        setContent(pageRender)
        setIsTap(boxIndex);
    };

    return (
        <>
            <div className="d-flex">
                <div className="menuStruktur col-2">
                    <div className={isTap == 0 ? "choose" : " "}>
                        <p onClick={() => handleClick(0, <DewanKomisaris />)}>Dewan Komaris</p>
                    </div>
                    <div className={isTap == 1 ? "choose" : " "}>
                        <p onClick={() => handleClick(1,<JajaranDireksi/>)}>Jajaran Direksi</p>
                    </div>
                    <div className={isTap == 2 ? "choose" : " "}>
                        <p onClick={() => handleClick(2,<SekretarisPerusahaan/>)}>Sekretaris Perusahaan</p>
                    </div>
                    <div className={isTap == 3 ? "choose" : " "}>
                        <p onClick={() => handleClick(3,<KomiteAudit/>)}>Komite Audit</p>
                    </div>
                    <div className={isTap == 4 ? "choose" : " "} >
                        <p onClick={() => handleClick(4,<KomiteNominasi/>)}>Komite Nominasi dan Remunerasi</p>
                    </div>
                    <div className={isTap == 5 ? "choose" : " "}>
                        <p onClick={() => handleClick(5,<KomiteEvaluasi/>)}>Komite Evaluasi , Monitoring Perencanaan dan Resiko</p>
                    </div>
                </div>
                <div className="content-byMenu col-8">
                    {content}
                </div>
            </div>
        </>

    )
}

export default StrukturOrganisasi