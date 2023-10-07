import { PngImage } from "../SharedComponents/ImageComponent";
import "./projects.scss";

export const Projects = () => {

    const project = [
        {
            title: 'Admin Analytics',
            technology: ['react', 'bootstrap'],
            desc: 'A dashboard used to see customer data for view',
            imgName:'project1'
        },
        {
            title: 'Dashboard',
            technology: ['react', 'bootstrap'],
            desc: 'A dashboard used to see customer data for view',
            imgName:'project2'
        }
    ]


    return (
        <div className="project_main_container">
            <h1>My <span>Projects</span></h1>

            <div className="mains">
                {
                    project.map((Val, i) => {
                        const { title, technology, desc,imgName } = Val
                        return (
                            <div className="project" key={i}>
                                <div className="left_container">
                                    <h4>{title}</h4>
                                    <div className="desc">
                                        <p>{desc}</p>
                                    </div>
                                    <p>Technology used</p>
                                    <ul>
                                        {
                                            technology.map((tech, i) => {
                                                return (
                                                    <li key={i + 'a'}>{tech}</li>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                                <div className="right_container">
                                    <PngImage imageName={imgName} />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}