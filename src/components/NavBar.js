import {Link} from 'react-router-dom'

const NavBar =()=>{
    return(
        <div className="navbar" style={{display:"flex", justifyContent:"center"}}>
            <ul className="navlist">
                <li><Link to="/">News</Link></li>
                <li><Link to="/VisitorForm">Fill visitor Info</Link></li>
                <li><Link to="/VisitorList">See All Visitor</Link></li>
            </ul>
        </div>
    )
}

export default NavBar