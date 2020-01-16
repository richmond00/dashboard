import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const TopNav = () => {

    return (
        <Navbar className="bg-dark">
            <Form inline>
                <FormControl type="search" placeholder="Search" className="mr-sm-2" />
                <Button type="submit">Submit</Button>
            </Form>
        </Navbar>
    )
    
}

export default TopNav;