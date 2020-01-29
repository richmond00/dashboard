import React from 'react';
import { Navbar, Form, Button, FormControl, InputGroup, DropdownButton, Dropdown, ToggleButton, ToggleButtonGroup, Row, Col } from 'react-bootstrap';
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
        <Row className="mt-0">
            <Col>
                <Navbar expand="lg" bg="light" variant="light" className="justify-content-between">
                    <Navbar.Brand href="./" className="ml-1 font-weight-bold">1년 전, 인기 영화는?</Navbar.Brand>
                    
                    <Form inline className="" onSubmit={props.submit}>
                        <InputGroup>
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="secondary"
                                title={props.dropdownTitle}
                                id="input-group-dropdown-1"
                                onSelect={props.dropdownSelect}
                            >
                                <Dropdown.Item eventKey="date">날짜</Dropdown.Item>
                                <Dropdown.Item eventKey="movieName">영화명</Dropdown.Item>
                            </DropdownButton>
                            {props.dropdownTitle==="영화명" ? movieInput: dateInput}
                            <Button type="submit" variant="dark">검색</Button>
                        </InputGroup>
                    </Form>

                    <ToggleButtonGroup aria-label="Basic example" type="radio" name="options" defaultValue='attendance' onChange={props.buttonClick}>
                        <ToggleButton value='attendance' variant="outline-secondary">관객수</ToggleButton>
                        <ToggleButton value='income' variant="outline-secondary">매출액</ToggleButton>
                    </ToggleButtonGroup>
                </Navbar>
            </Col>
        </Row>
    )
}

export default TopNav;