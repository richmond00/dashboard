import React from 'react';
import { Navbar, Form, Button, FormControl, InputGroup, DropdownButton, Dropdown, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko)

const TopNav = (props) => {

    const movieInput = (
        <FormControl
          name="search"
          type="input"
          placeholder="영화제목을 입력하세요"
          className="mr-sm-2"
          onChange={props.searchChange}
          required
        />
    );

    const dateInput = (
        <DatePicker
          name="date"
          selected={props.searchDate}
          onChange={props.datePickerChange}
          dateFormat="yyyy-MM-dd"
          className="mr-sm-2 form-control"
          locale='ko'
        />
    );
    
    return (
        <Navbar expand="lg" bg="light" variant="light" className="justify-content-between">
            <Navbar.Brand className="ml-5">Navbar Text by Bootstrap</Navbar.Brand>
            
            <Form inline className="ml-n5" onSubmit={props.submit}>
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

            <ToggleButtonGroup aria-label="Basic example" type="radio" name="options" defaultValue='attendance' onChange={props.buttonClick}>
                <ToggleButton value='attendance' variant="outline-secondary">관객수</ToggleButton>
                <ToggleButton value='income' variant="outline-secondary">매출액</ToggleButton>
            </ToggleButtonGroup>
        </Navbar>
    )
}

export default TopNav;