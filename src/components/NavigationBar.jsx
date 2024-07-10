import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="clearfix">
            <NavLink to='/Home' activeClassName="active">Home</NavLink>
            <NavLink to='/List' activeClassName="active">List</NavLink>
            <NavLink to='/Detail' activeClassName="active">Detail</NavLink>
            <NavLink to='/Comics' activeClassName="active">Comic</NavLink>
        </nav>
    )
}

export default NavigationBar