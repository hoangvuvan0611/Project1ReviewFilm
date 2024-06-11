import {Form, Button, Dropdown} from 'react-bootstrap';

const ReviewForm = ({handleSubmit, revText, labelText, defaultValue, countReview, handleSort}) => {
    return(
        <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={revText} as="textarea" contentEditable={false} rows={3} defaultValue={defaultValue} ></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3 d-flex justify-content-between'>
                <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
                <Form.Label>{countReview} reviews</Form.Label>
                <Form.Check >
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
                            Sort
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="" onClick={() => handleSort()}>Default</Dropdown.Item>
                            <Dropdown.Item href="" onClick={() => handleSort("latest")}>Latest</Dropdown.Item>
                            <Dropdown.Item href="" onClick={() => handleSort("oldest")}>Oldest</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Check>
            </Form.Group>
        </Form>
    )
}

export default ReviewForm;