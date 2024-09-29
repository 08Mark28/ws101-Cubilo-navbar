import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function() {
    return <navbar className="navbar">
        <Link className="site-title">ECO-Site</Link>
        <ul>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </navbar>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className= {isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li> 
    )
}