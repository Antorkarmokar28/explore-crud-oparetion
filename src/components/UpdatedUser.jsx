import { useLoaderData } from "react-router-dom";

const UpdatedUser = () => {
    const singleData = useLoaderData();
    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const updateData = {
            name,
            email,
            password,
        }
        console.log('update data', updateData)
        fetch(`http://localhost:5000/users/${singleData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <h2>Updated User</h2>
            <form onSubmit={handleUpdateProfile}>
                <input type="text" defaultValue={singleData?.name} name="name" />
                <br />
                <input type="email" defaultValue={singleData?.email} name="email" />
                <br />
                <input type="password" defaultValue={singleData?.password} name="password" />
                <br />
                <input type="submit" value="Update profile"/>
            </form>
        </div>
    );
};

export default UpdatedUser;