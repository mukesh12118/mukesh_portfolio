import { Link } from "react-router-dom";
import { PngImage } from "../../Components/SharedComponents/ImageComponent";
import "./Nav.scss";

export const Nav = () => {

    const navData = [
        { imgSrc: 'home', header: 'Home', path: '/' },
        { imgSrc: 'about', header: 'About', path: '/about' },
        { imgSrc: 'coding', header: 'Projects', path: '/projects' },
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
                                    <Link to={path} title={header}>
                                        <PngImage
                                            imageName={imgSrc}
                                            alt={header}
                                        />
                                        <span>{header}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </nav>
    )
}

