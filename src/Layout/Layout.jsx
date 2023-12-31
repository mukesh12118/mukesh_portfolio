import { Outlet } from "react-router-dom";
import "./Layout.scss"
import { Nav } from "./Nav/Nav";
import { PngImage } from "../Components/SharedComponents/ImageComponent";


export function Layout() {

    const footerLinks = [
        { name: "Instagram", imgName: 'instagram', path: 'https://www.instagram.com/the_hpy_kid' },
        { name: "FB", imgName: 'fb', path: 'https://www.facebook.com/profile.php?id=100007750334357' },
        { name: "Git", imgName: 'github', path: 'https://github.com/mukesh12118' },
        { name: "LinkedIn", imgName: 'linkedin', path: 'https://www.linkedin.com/in/mukesh-a-221322234' },
        { name: "Mail", imgName: 'mail', path: 'mailto:iammukesha@gmail.com' },
    ]

    return (
        <>
            <div className="layout_container">
                <div className="nav_container">
                    <Nav />
                </div>
                <div className="main_container">
                    <div className="outlet_container">
                        <Outlet />
                    </div>
                    <footer>
                        <ul className="left_foot">
                            <li>
                                Developed by Mukesh
                            </li>

                            <li>Copyright &copy; 2023 AM</li>
                        </ul>
                        <ul className="footer_links">
                            {
                                footerLinks.map((val, i) => {
                                    const { name, imgName, path } = val;
                                    return (
                                        <li key={i}>
                                            <a target="_blank" href={path} title="Instagram">
                                                <PngImage
                                                    imageName={imgName}
                                                />
                                            </a>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </footer>
                </div>
            </div>
            <div className="stars"></div>

        </>
    )
}