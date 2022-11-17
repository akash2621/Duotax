/* 11 Nov Change Start */
import { Form } from "react-bootstrap";

const RequestEdit = () =>{
    return(
        <>
            <div className="form_main">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>What are you requesting?</Form.Label>
                        <Form.Control as="textarea" rows={5} cols={50} />
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}

export default RequestEdit;
/* 11 Nov Change End */