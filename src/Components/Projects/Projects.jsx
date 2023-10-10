import { PngImage } from "../SharedComponents/ImageComponent";
import "./projects.scss";
import uuid from 'react-uuid';

export const Projects = () => {

    const project = [
        // Techlogo
        {
            title: 'Business Analytics Dashboard',
            technology: ['React', 'Bootstrap', 'Redux', 'React-Redux', 'Sass'],
            keys: ['Sales Overview', 'Usage Statistics', 'Dark & Light Mode'],
            desc: 'The Sales Analytics Dashboard is a static website designed to provide real-time insights and visualizations of sales data, views, and usage statistics for a business or e-commerce platform. It offers a user-friendly interface to monitor and analyze key performance',
            imgName: 'project1',
            link:'https://techlogo-business-analytics.netlify.app/'
        },
        // Analytics
        {
            title: 'Sales Analytics Dashboard',
            technology: ['React', 'Bootstrap', 'Redux', 'React-Redux', 'Sass','React-Bootstrap'],
            keys: ['Sales Overview', 'Usage Statistics', 'Dark & Light Mode', 'Calendar'],
            desc: 'The Business Analytics Dashboard is a static website designed to provide comprehensive insights into overall sales, views, usage, and communication within a business or organization. This versatile platform offers users the ability to monitor key performance indicators (KPIs), visualize data with interactive charts and plan events with a calendar feature.',
            imgName: 'project2',
            link:'https://sales-analytics.netlify.app/'
        }
    ]


    return (
        <div className="project_main_container">
            <h1>My <span>Projects</span></h1>

            <div className="mains">
                {
                    project.map((Val, i) => {
                        const { title, technology, desc, imgName, keys,link } = Val;
                        return (
                            <div className="project_mains" key={uuid()}>
                                <h4 className="project_head" data={title}>{title}</h4>

                                <div className="project" >
                                    <div className="left_container">
                                        <div className="desc">
                                        <a target="_blank" href={link}>Live Site</a>
                                            <p>{desc}</p>
                                        </div>
                                        <div className="technology">
                                            <p className="sub_head">Technology used</p>
                                            <ul>
                                                {
                                                    technology.map((tech, i) => {
                                                        return (
                                                            <li key={uuid()}>{tech}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="features">
                                            <p className="sub_head">Features</p>
                                            <ul>
                                                {
                                                    keys.map((tech, i) => {
                                                        return (
                                                            <li key={uuid()}>{tech}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>

                                    </div>
                                    <a href={link} target="_blank" title={title} className="right_container" >
                                        <PngImage imageName={imgName} />
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}