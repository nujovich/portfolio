import FileSaver from 'file-saver';


const BASE_URL = import.meta.env.MODE === 'development' ? import.meta.env.LOCAL_URL : import.meta.env.PROD_URL
const FILE_PATH = import.meta.env.MODE === 'development' ? '/Nadia Ujovich Spanish CV Version v1.0.pdf' : '/portfolio/Nadia Ujovich Spanish CV Version v1.0.pdf'

function downloadCV() {

    FileSaver.saveAs(BASE_URL + FILE_PATH, "Nadia_Ujovich_CV_Spanish.pdf");
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