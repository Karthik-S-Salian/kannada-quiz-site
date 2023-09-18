import "./navbar.css"
import { Link, useLocation } from 'react-router-dom';

function Navbar({ kannadaType, attemptType }) {
    const location = useLocation();
    if (location.pathname == "/") {
        return <></>
    }
    if (location.pathname == "/attempt") {
        return (
            <nav>
                <Link to="/">{kannadaType}</Link>
            </nav>
        )
    }
    return (
        <nav>
            <Link to="/">{kannadaType}</Link>
            &nbsp;&#8594;&nbsp;
            <Link to="/attempt">{attemptType}</Link>
        </nav>
    )
}

export default Navbar