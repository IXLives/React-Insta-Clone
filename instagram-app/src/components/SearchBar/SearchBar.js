import React from 'react';
import logo from '../../assets/igLogo.png';
import likes from '../../assets/likes.png';
import location from '../../assets/location.png';
import profile from '../../assets/profile.png';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFor: ''
        }
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.filterBySearch(this.state.searchFor);
        this.setState({ searchFor: '' });
    };

    changeHandler = e => {
        this.setState({ searchFor: e.target.value });
    }

    render() {
        return (
            <div className = 'Search'>
               <img src = {logo} alt = 'logo' />
               <form onSubmit = {this.submitHandler}>
                   <input
                    value = {this.state.searchFor}
                    placeholder = '🔍 Search'
                    type = 'text'
                    onChange = {this.changeHandler}
                    />
               </form>
               <div className = 'links'>
                <img src = {location} alt = 'location' />
                <img src = {likes} alt = 'likes' />
                <img src = {profile} alt = 'profile' />
                </div>
            </div>
        )
    }
}

export default SearchBar;

// 
//     import {
//         Navbar,
//         NavbarBrand,
//         NavbarToggler,
//         Nav,
//         NavItem,
//         NavLink,
//         InputGroup,
//         InputGroupAddon,
//         InputGroupText,
//         Input,
//     } from 'reactstrap';
//     <Navbar color = 'white' expand = {false}>
//     <Nav navbar>
//         <NavItem>
//             <NavLink href = '/' className = 'logo'>
//                 <img src = {logo} alt = 'logo'/>
//             </NavLink>
//         </NavItem>
//         <NavItem>
//             <InputGroup>
//                 <Input placeholder = '🔍 Search' />
//             </InputGroup>
//         </NavItem>
//         <NavItem>
//             <img src = {location} alt = 'location' />
//         </NavItem>
//         <NavItem>
//             <img src = {likes} alt = 'likes' />
//         </NavItem>
//         <NavItem>
//             <img src = {profile} alt = 'profile' />
//         </NavItem>
//     </Nav>
// </Navbar>
