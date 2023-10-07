import { Link, useLocation } from "react-router-dom";
import { PngImage } from "../../Components/SharedComponents/ImageComponent";
import "./Nav.scss";
import { useEffect, useState } from "react";

export const Nav = () => {

    const location = useLocation();
    const [locate,setLocate] = useState();

    useEffect(()=>{
        const currentLocation = location.pathname;
        console.log(currentLocation);
        setLocate(currentLocation);
        console.log(location)
    },[location])

    const navData = [
        { imgSrc: 'home', header: 'Home', path: '/' },
        { imgSrc: 'contact', header: 'Contact', path: '/contact' },
        { imgSrc: 'coding', header: 'Projects', path: '/projects' },
        { imgSrc: 'resume', header: 'Resume', path: '/resume' },
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
                                    <Link to={path} className={locate== path ? 'active' : ''} title={header}>
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

