import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
} from 'reactstrap';
import logo from '../../assets/igLogo.png';
import likes from '../../assets/likes.png';
import location from '../../assets/location.png';
import profile from '../../assets/profile.png'

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchFor: '';
        }
    }

    render() {
        return (
            <div className = 'Search'>
                <Navbar color = 'light'>
                    <NavItem>
                        <NavLink href = '/' className = 'logo'>
                            <img src = {logo} alt = 'logo'/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <InputGroup>
                            <Input placeholder = '🔍 Search' />
                        </InputGroup>
                    </NavItem>
                    <NavItem>
                        <img src = {location} alt = 'location' />
                    </NavItem>
                    <NavItem>
                        <img src = {likes} alt = 'likes' />
                    </NavItem>
                    <NavItem>
                        <img src = {profile} alt = 'profile' />
                    </NavItem>
                </Navbar>
            </div>
        )
    }
}

export default SearchBar;