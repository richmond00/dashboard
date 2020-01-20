import React from 'react';
import { Navbar, Form, Button, FormControl, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';

const TopNav = (props) => {
    return (
        <Navbar expand="lg" bg="dark" variant="light" className="justify-content-between">
            <Navbar.Brand className="ml-5">Navbar Text by Bootstrap</Navbar.Brand>
            
            <Form inline className="" onSubmit={props.submit}>
                <InputGroup>
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item>Action1</Dropdown.Item>
                        <Dropdown.Item>Action2</Dropdown.Item>
                    </DropdownButton>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-sm-2"
                      onChange={props.change}
                    />
                    <Button type="submit" variant="outline-primary">Search</Button>
                </InputGroup>
            </Form>

            <Navbar.Text></Navbar.Text>
        </Navbar>
    )
}

export default TopNav;