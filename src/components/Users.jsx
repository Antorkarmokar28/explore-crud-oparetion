import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser)
    const handleUserDelete = _id => {
        console.log(_id)
        const URL = `http://localhost:5000/users/${_id}`;
        fetch(URL, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.deletedCount > 0) {
                    const deleteUser = users.filter(user => user._id !== _id);
                    setUsers(deleteUser);
                    alert('User deleted successfull')
                }
            })
    }
    console.log(users)
    return (
        <div>
            <h1>Users: {users.length}</h1>
            <div>
                {
                    users.map(user =>
                        <p key={user?._id}>
                            {user?.name} :
                            {user?.email} :
                            {user?.password}
                            <button onClick={() => handleUserDelete(user._id)} type="submit">Delete</button>
                            <Link to={`/users/${user._id}`}>
                                <button type="submit">Update</button>
                            </Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Users;