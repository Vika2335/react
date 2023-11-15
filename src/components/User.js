import React from "react"
import { IoCloseCircleSharp } from 'react-icons/io5'
import { BsFeather } from "react-icons/bs";

class User extends React.Component {
    user = this.props.user
    render(){
        return(
            <div className="user">
                <IoCloseCircleSharp className="delete"/>
                <BsFeather className="edit"/>
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Счастлив)' : 'Не особо('}</b>
            </div>
        )
    }
}

export default User