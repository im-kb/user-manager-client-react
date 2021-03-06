import '../userCardStyle.css'
import {Card, Image} from "react-bootstrap";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const User = ({user}) => {
    return (
        <Card className="card">
            <Card.Body className="card-body text-center">
                <Card.Img src={user.imageUrl} style={{width: "100px", marginTop: "-65px"}}
                          alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
                <h5 className="card-title">{user.name}</h5>
                <p className="text-secondary mb-1">{user.jobTitle}</p>
                <p className="text-secondary mb-1">{user.name}</p>
                <p className="text-secondary mb-1">{user.phone}</p>
            </Card.Body>
            <div className="float-right btn-group btn-group-sm">
            </div>
            <Card.Footer className="cardFooter">
                <div style={{marginLeft: 'auto'}}>
                    <EditButton/>
                    <DeleteButton/>
                </div>
            </Card.Footer>
        </Card>
    )
}
export default User
