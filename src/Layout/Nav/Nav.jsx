import { PngImage } from "../../Components/SharedComponents/ImageComponent";
import "./Nav.scss";

export const Nav = () => {

    const navData = [
        { imgSrc: 'home', header: 'Home', path: '' },
        { imgSrc: 'about', header: 'About', path: '' },
        { imgSrc: 'coding', header: 'Projects', path: '' },
        { imgSrc: 'resume', header: 'Resume', path: '' },
    ]

    return (
        <nav>
            <div className="left_container">
                <h3>MA</h3>
            </div>
            <div className="right_container">
                <ul>
                    {
                        navData.map((val, i) => {
                            const { imgSrc, header, path } = val
                            return (
                                <li key={i}>
                                    <a href="" title={header}>
                                        <PngImage
                                            imageName={imgSrc}
                                            alt={header}
                                        />
                                        <span>{header}</span>
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </nav>
    )
}

