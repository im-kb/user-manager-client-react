import {Modal} from "react-bootstrap";

const DeleteModal = ({user}) => {
    return (
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}
export default DeleteModal
