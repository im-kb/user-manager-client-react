import {useEffect} from "react";
import {useState} from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NoUsersFound from "./components/NoUsersFound";
import Users from "./components/Users";
import DeleteModal from "./components/DeleteModal";

function App() {
    const [input, setInput] = useState('');
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const usersFromServer = await fetchUsers()
            setUsers(usersFromServer)
            setFilteredUsers(usersFromServer)
        }

        getUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:8080/users/all');
        const data = await response.json();
        return data;
    }

    const updateInput = async (input) => {
        const filtered = users.filter(user => {
            return user.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setFilteredUsers(filtered);
        console.log(filteredUsers)
    }

    return (
        <div className="App">

            <DeleteModal></DeleteModal>
            <Header keyword={input}setKeyword={updateInput}></Header>
            {users.length < 1 ? (<NoUsersFound/>) : (<Users users={filteredUsers}/>)}

        </div>
    );


}
export default App;
