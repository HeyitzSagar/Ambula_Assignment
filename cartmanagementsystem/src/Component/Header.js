import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {Badge, Container, Dropdown, FormControl, Nav, Navbar} from "react-bootstrap"
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <a href='/'>Shopping Cart</a>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width: 500}}
                    placeholder='Search  a Product'
                    className='m-auto'
                    />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart color= "white" fontSize="25px"/>
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <span style={{padding: 10}}>
                            Cart is empty
                        </span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
