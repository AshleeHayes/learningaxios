import React from 'react'
import axios from 'axios'

//https://api.github.com/users/john
const UserForm = (props) => {
return (
    <form onSubmit={props.getUser}>
        <input style={{ margin: "20px auto", display: "block"}} type="text" name="username" />
        <button>Submit</button>
    </form>
)
}

export default UserForm;