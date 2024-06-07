import './App.css'

function App() {
  const handleCreateUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const createUsers = {
      name,
      email,
      password
    }
    console.log(createUsers)
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createUsers),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          alert('User create successfully');
          form.reset();
        }
      })
  }
  return (
    <>
      <h1>Create Users</h1>
      <form onSubmit={handleCreateUser}>
        <input type="text" name='name' />
        <br />
        <input type="email" name='email' />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={`Submit`}></input>
      </form>
    </>
  )
}

export default App
