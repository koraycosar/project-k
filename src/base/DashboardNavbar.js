import { Link } from "react-router-dom";

const DashboardNavbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
        </nav>
    );
};

export default DashboardNavbar;
