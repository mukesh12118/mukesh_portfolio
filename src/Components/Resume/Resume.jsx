import { JpgImage, PngImage } from "../SharedComponents/ImageComponent"
import "./Resume.scss";

export const Resume = () => {
    return (
        <div className="resume_container" title="Download">
            <a href={require('./Mukesh_resume.pdf')} download="Mukesh_resume.pdf" className="download_btn">
                <div className="img_container">
                    <PngImage
                        imageName="resume_download_icon"
                    />
                </div>
                <span>Download Resume</span>
            </a>
            <a className="image_container" href={require('./Mukesh_resume.pdf')} download="Mukesh_resume.pdf">
                <JpgImage
                    imageName='mukesh_resume'
                    alt='Resume'
                />
            </a>


        </div>
    )
}