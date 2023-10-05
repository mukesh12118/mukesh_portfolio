export const Projects = () => {

    const project = [
        {
            title: '',
            technology: ['react', 'bootstrap'],
            desc: 'A dashboard used to see customer data for view'
        },
        {
            title: '',
            technology: ['react', 'bootstrap'],
            desc: 'A dashboard used to see customer data for view'
        }
    ]


    return (
        <div className="project_main_container">
            <h1>My <span>Projects</span></h1>

            <div className="mains">
                {
                    project.map((Val, i) => {
                        const {title,technology,desc} = Val
                        return (
                            <div className="project" key={i}>
                                <h4>{title}</h4>
                                <p>Technology used</p>
                                <ul>
                                    {
                                        technology.map((tech,i)=>{
                                            return(
                                                <li key={i+'a'}>{tech}</li>

                                            )
                                        })
                                    }
                                </ul>
                                <div className="desc">
                                    <p>{desc}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}