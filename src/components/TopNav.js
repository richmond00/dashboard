import React from 'react';
import { Navbar, Form, Button, FormControl, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko)

const TopNav = (props) => {
    const movieInput = (
        <FormControl
                      type="search"
                      placeholder="영화제목을 입력하세요"
                      className="mr-sm-2"
                      onChange={props.searchChange}
                    />
    );

    const dateInput = (
        <DatePicker
              selected={props.searchDate}
              onChange={props.datePickerChange}
              dateFormat="yyyy-MM-dd"
              locale='ko'
        />
    );
    
    return (
        <Navbar expand="lg" bg="light" variant="light" className="justify-content-between">
            <Navbar.Brand className="ml-5">Navbar Text by Bootstrap</Navbar.Brand>
            
            <Form inline className="" onSubmit={props.submit}>
                <InputGroup>
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="info"
                        title={props.dropdownTitle}
                        id="input-group-dropdown-1"
                        onSelect={props.dropdownSelect}
                    >
                        <Dropdown.Item eventKey="movieName">영화명</Dropdown.Item>
                        <Dropdown.Item eventKey="date">날짜</Dropdown.Item>
                    </DropdownButton>
                    {props.dropdownTitle==="영화명" ? movieInput: dateInput}
                    <Button type="submit" variant="primary">검색</Button>
                </InputGroup>
            </Form>

            

            <Navbar.Text></Navbar.Text>
        </Navbar>
    )
}

export default TopNav;