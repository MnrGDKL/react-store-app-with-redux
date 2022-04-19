import React, { useState } from 'react'
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
  FormGroup,
  InputGroup,
  Alert,
} from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductSearch } from '../redux/thunk/searchProductThunk'
import { auth } from '../firebase/firebaseAuth'
import { signOut } from 'firebase/auth'
import { setActionUser } from '../redux/actions/ActionUser'
import { CgProfile } from 'react-icons/cg'
import { SiShopify } from 'react-icons/si'

const HomeNavbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [productKey, setProductKey] = useState()
  const [searchValue, setSearchValue] = useState()
  const { searchProduct } = useSelector((state) => state.ReducerProduct)
  const { user } = useSelector((state) => state.ReducerUse)
  const { addItems } = useSelector((state) => state.ReducerAddItems)

  const searchProductk = (e) => {
    e.preventDefault()
    // setProductKey(searchValue)
    console.log(productKey)
    dispatch(getProductSearch(searchValue))
    navigate('/search')
    setSearchValue('')
  }

  const handleLogout = () => {
    console.log('muas')
    signOut(auth)
    dispatch(setActionUser(''))
    navigate('/home')
  }

  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand className="bg-warning text-dark fw-bolder p-2 border rounded-3" as={Link} to="/">
          REACT REDUX STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" ms-auto mx-5 my-lg-0">
            {' '}
            <Nav.Link className="text-dark fw-bold" as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown
              className="text-dark"
              title={<span className="text-dark my-auto fw-bold">Categories</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                id="navdropitems"
                className="text-dark"
                as={Link}
                to="/man"
              >
                Men's Clothing
              </NavDropdown.Item>
              <NavDropdown.Item
                id="navdropitems"
                className="text-dark hv-warning"
                as={Link}
                to="/women"
              >
                Women's Clothing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                id="navdropitems"
                className="text-dark"
                as={Link}
                to="/jew"
              >
                Jewerly
              </NavDropdown.Item>
              <NavDropdown.Item
                id="navdropitems"
                className="text-dark"
                as={Link}
                to="/elect"
              >
                Electronic
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                id="navdropitems"
                className="text-dark fw-bolder"
                as={Link}
                to="/all"
              >
                All Products
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-dark fw-bold" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-dark fw-bold" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form onSubmit={searchProductk} className="d-flex mx-3">
            <InputGroup>
              <FormControl
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="Search"
                className="text-input me-2"
                aria-label="Search"
                value={searchValue}
              />
              <Button
                className="submit-button bg-warning text-dark"
                value="submit"
                type="submit"
                variant="outline-warning"
              >
                Search
              </Button>
            </InputGroup>
          </Form>

          {!user ? (
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="text-dark fw-bold" as={Link} to="/login">
                LOGIN
              </Nav.Link>
              <Nav.Link className="text-dark fw-bold" as={Link} to="/register">
                REGISTER
              </Nav.Link>
            </Nav>
          ) 
          : (
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/shopcart">
                <div
                  className="shop-cart"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <SiShopify
                    color="black"
                    size="40px"
                    style={{ marginTop: '5px' }}
                  />{' '}
                  <span
                    style={{
                      color: 'white',
                      border: '1px solid red',
                      borderRadius: '50%',
                      backgroundColor: 'red',
                      fontSize: '15px',
                      padding: '3px',
                      marginRight: '13px',
                    }}
                  >
                    {addItems.length ? addItems.length : '0'}
                  </span>
                </div>
              </Nav.Link>

              <Alert
                style={{
                  display: 'flex',
                  height: '2rem',
                  margin: 'auto',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                variant="dark"
              >
                <CgProfile />
                {user}
              </Alert>
              <Nav.Link
                onClick={handleLogout}
                className="text-dark fw-bold"
                as={Link}
                to="/login"
              >
                LOGOUT
              </Nav.Link>

              {/* <Link to="/logout">LOGOUT</Link> */}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNavbar
