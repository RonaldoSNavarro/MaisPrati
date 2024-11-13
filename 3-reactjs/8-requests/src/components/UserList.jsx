import { useState, useEffect } from "react";
import { getUsers } from '../api/UserService'

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response =  await getUsers()
            setUsers(response.data)
        }
        fetchData()
    }, [])

    return(
        <ul>
            {users.map((user) => {
                <li key={user.id}>
                    {user.name}
                </li>
            })}
        </ul>
    )
}

export default UserList