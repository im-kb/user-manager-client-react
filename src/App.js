import {useEffect} from "react";
import {useState} from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NoUsersFound from "./components/NoUsersFound";
import Users from "./components/Users";
import User from "./components/User";
import {COMPONENT_NAME} from 'react-bootstrap';
import {Image} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const usersFromServer = await fetchUsers()
            setUsers(usersFromServer)
        }

        getUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:8080/users/all');
        const data = await response.json();
        return data;
    }

    return (

        <div className="App">
            <Header />

            {users.length < 1 ? (<NoUsersFound/>) : (<Users users={users}/>)}

        </div>
    );

}

Header.defaultProps =
    {
        title: 'BLAA',
    }
export default App;
