import FileSaver from 'file-saver';

function downloadCV() {
    FileSaver.saveAs(import.meta.env.BASE_URL + "/public/Nadia Ujovich Spanish CV Version v1.0.pdf",
    "Nadia_Ujovich_CV_Spanish.pdf");
}

export function AboutMe() {
    return(
        <section id="banner">
            <div className="banner-container">
                <h3>Nadia Ivana Ujovich</h3>
                <h2>Fullstack Developer</h2>
                <button className="about-me-button" onClick={downloadCV}>
                    <span>Descargar cv</span>
                        &nbsp;
                    <iconify-icon inline className="download-icon" icon="bx:download" width="20" height="20"></iconify-icon>
                </button>
            </div>
        </section>
    )
}