import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className = "user">
        <div className="userTitleContainer">
            <h1 className="userTitle">
                Edit User
            </h1>
            <Link to = "/newUser">
            <button className="userAddButton">
                Create
            </button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydUA4XeLD3VF_uvOV8wlBPxcmKfQTxM4yiA&usqp=CAU" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">
                            Woo Seungho
                        </span>
                        <span className="userShowUserTitle">
                            University Student
                        </span>
                    </div>
                </div>
                <div className="userShowButton">
                    <span className="userShowTitle">
                        Account Details
                    </span>
                    <div className = "userShowInfo">
                        <PermIdentity className = "userShowIcon"/>
                        <span className="userShowInfoTitle">
                            Seungho123
                        </span>
                    </div>
                    <div className = "userShowInfo">
                        <CalendarToday className = "userShowIcon"/>
                        <span className="userShowInfoTitle">
                            03.02.2000
                        </span>
                    </div>
                    <span className="userShowTitle">
                        Contact Details
                    </span>
                    <div className = "userShowInfo">
                        <PhoneAndroid className = "userShowIcon"/>
                        <span className="userShowInfoTitle">
                            010 1234 1234
                        </span>
                    </div>
                    <div className = "userShowInfo">
                        <MailOutline className = "userShowIcon"/>
                        <span className="userShowInfoTitle">
                            seungho1234@gmail.com
                        </span>
                    </div>
                    <div className = "userShowInfo">
                        <LocationSearching className = "userShowIcon"/>
                        <span className="userShowInfoTitle">
                            Shah Alam | Malaysia
                        </span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">
                    Edit
                </span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>
                                Username
                            </label>
                            <input type = "text" placeholder = "Seungho123" className = "userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Full Name
                            </label>
                            <input type = "text" placeholder = "Woo Seungho" className = "userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Email
                            </label>
                            <input type = "text" placeholder = "seungho1234@gmail.com" className = "userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Phone
                            </label>
                            <input type = "text" placeholder = "010 1234 1234" className = "userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Address
                            </label>
                            <input type = "text" placeholder = "Shah Alam | Malaysia" className = "userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydUA4XeLD3VF_uvOV8wlBPxcmKfQTxM4yiA&usqp=CAU" alt="" className="userUpdateImg" />
                            <label for = "file">
                                <Publish className = "userUpdateIcon" />
                            </label>
                            <input type = "file" id = "file" style = {{display: "none"}} />
                        </div>
                        <button className = "userUpdateButton">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User