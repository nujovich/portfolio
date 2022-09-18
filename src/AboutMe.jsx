import FileSaver from 'file-saver';

const FILE_PATH = 'Nadia Ujovich Spanish CV Version v1.0.pdf'

function downloadCV() {
    FileSaver.saveAs(import.meta.env.BASE_URL + FILE_PATH, "Nadia_Ujovich_CV_Spanish.pdf");
}

export function AboutMe() {
    return(
        <section id="banner">
            <div className="banner-container">
                <h3>Nadia Ivana Ujovich</h3>
                <h2>Fullstack Developer</h2>
                <button className="about-me-button" onClick={downloadCV}>
                    <span className='button-text'>Descargar cv</span>
                    <span className='button-icon'><iconify-icon inline className="download-icon" icon="bx:download" width="20" height="20"></iconify-icon></span>
                </button>
            </div>
        </section>
    )
}