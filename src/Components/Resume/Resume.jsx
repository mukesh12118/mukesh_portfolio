import { JpgImage } from "../SharedComponents/ImageComponent"
import "./Resume.scss";

export const Resume = () => {
    return (
        <div className="resume_container">
            <div className="image_container">
                <JpgImage
                    imageName='mukesh_resume'
                    alt='Resume'
                />
            </div>
        </div>
    )
}