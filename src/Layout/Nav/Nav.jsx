import { Link, useLocation } from "react-router-dom";
import { PngImage } from "../../Components/SharedComponents/ImageComponent";
import "./Nav.scss";
import { useEffect, useRef, useState } from "react";

export const Nav = () => {

    const location = useLocation();
    const [locate, setLocate] = useState();
    const [sidebarTogg,setSidebarTogg] = useState(false);

    const menuHamburger = useRef();
    const hamburgerBtn = useRef();


    useEffect(() => {
        const currentLocation = location.pathname;
        setLocate(currentLocation);
    }, [location]);

    if (sidebarTogg) {
        window.addEventListener('click', (e) => {
            if (!menuHamburger?.current?.contains(e.target) && !hamburgerBtn?.current?.contains(e.target)) {
                setSidebarTogg(false)
            }
        });
    }

    const navData = [
        { imgSrc: 'home', header: 'Home', path: '/' },
        { imgSrc: 'coding', header: 'Projects', path: '/projects' },
        { imgSrc: 'contact', header: 'Contact', path: '/contact' },
        { imgSrc: 'resume', header: 'Resume', path: '/resume' },
    ]
    function onChangeCheck(e){
        const {checked} = e.target;
        setSidebarTogg(checked);
    }
    return (
        <nav>
            <div className="left_container">
                <Link to={"/"}>MA</Link>
            </div>
            <div ref={menuHamburger} className={`right_container ${sidebarTogg ? 'active' : ''}`}>
                <ul>
                    {
                        navData.map((val, i) => {
                            const { imgSrc, header, path } = val
                            return (
                                <li key={i}>
                                    <Link to={path} onClick={()=> setSidebarTogg(false)} className={locate == path ? 'active' : ''} title={header}>
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
            <div className="hamburger_main" ref={hamburgerBtn}>
                <label htmlFor="check">
                    <input type="checkbox" id="check" checked={sidebarTogg} onChange={(e)=>onChangeCheck(e)}/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

        </nav>
    )
}

