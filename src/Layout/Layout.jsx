import { Outlet } from "react-router-dom";
import "./Layout.scss"
import { Nav } from "./Nav/Nav";


export function Layout() {
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
                        <ul>
                            <li>
                                Developed by Mukesh
                            </li>

                            <li>Copyright &copy; 2023 AM</li>
                            <li>

                            </li>
                        </ul>
                    </footer>
                </div>
            </div>
            <div className="stars"></div>

        </>
    )
}