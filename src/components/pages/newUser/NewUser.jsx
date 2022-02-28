import "./newUser.css";

const NewUser = () => {
  return (
    <div className = "newUser">
        <h1 className="newUserTitle">
            New User
        </h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>
                    Username
                </label>
                <input type = "text" placeholder = "Seungho"/>
            </div>
            <div className="newUserItem">
                <label>
                    Full Name
                </label>
                <input type = "text" placeholder = "Woo Seungho"/>
            </div>
            <div className="newUserItem">
                <label>
                    Email
                </label>
                <input type = "email" placeholder = "seungho1234@gmail.com"/>
            </div>
            <div className="newUserItem">
                <label>
                    Password
                </label>
                <input type = "password" placeholder = "password"/>
            </div>
            <div className="newUserItem">
                <label>
                    Phone
                </label>
                <input type = "text" placeholder = "010 1234 1234"/>
            </div>
            <div className="newUserItem">
                <label>
                    Address
                </label>
                <input type = "text" placeholder = "Shah Alam | Malaysia"/>
            </div>
            <div className="newUserItem">
                <label>
                    Gender
                </label>
                <div className="newUserGender">
                    <input type = "radio" name = "gender" id = "male" value = "male" />
                    <label For = "Male">
                        Male
                    </label>
                    <input type = "radio" name = "gender" id = "female" value = "female" />
                    <label For = "Female">
                        Female
                    </label>
                </div>
            </div>
            <div className="newUserItem">
                <label>
                    Specialization
                </label>
                <input type = "text" placeholder = "Specialization"/>
            </div>
            <div className="newUserItem">
                <label>
                    Active
                </label>
                <select className = "newUserSelect" name = "active" id = "active">
                    <option value = "yes">
                        Yes
                    </option>
                    <option value = "no">
                        No
                    </option>
                </select>
            </div>
            <button className="newUserButton">
                Create
            </button>
        </form>
    </div>
  )
}

export default NewUser