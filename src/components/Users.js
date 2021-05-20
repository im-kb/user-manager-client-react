import User from "./User";

const Users = ({users}) => {
    return (
        <div className="container" id="main-container">
            <div className="row">
                {users.map((user, index) => (
                    <div className="col-md-6 col-xl-3"><User key={index} user={user}/></div>))}
            </div>
        </div>
    )
}
export default Users
