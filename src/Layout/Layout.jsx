import { Outlet } from "react-router-dom";
import "./Layout.scss"
import { Nav } from "./Nav/Nav";


export function Layout() {
    return (
        <div className="layout_container">
            <div className="nav_container">
                <Nav />
            </div>
            <div className="outlet_container">
                <Outlet/>
            </div>
        </div>
    )
}