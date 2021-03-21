import React, { Component } from 'react'
// import Navbar from "../navigation/notLoggedIn"
// import Footer from "../navigation/footer"
// require('dotenv'.config()
export default class OwnerSignup extends Component {
    constructor() {
        super()

        this.state = {
            signup_link: "",
            email: "",
            personal_link: "",
            error: false
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        
        fetch("https://127.0.0.1:5000/user/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                signup_link: this.state.signup_link,
                personal_link: this.state.personal_link
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data == "User added successfully") {
                this.props.history.push("/thanks")
            }            
            else {
                this.setState({ error: true })
            }
        })
        .catch(error => {
            console.log("Error creating user: ", error)
            this.setState({ error: true })
        })
        
    }

    render() {
        return (
            <div className='page-wrapper'>
                <div className="form-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Sign up here!</h1>
                        
                        <div className="wrapper">
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                            />
                        </div>

                        <div className="wrapper">
                            Sign up Link:
                            <input
                                type="text"
                                name="signup_link"
                                value={this.state.signup_link}
                                onChange={this.handleChange}
                                placeholder="Signup Link"
                            />
                        </div>

                        <div className="wrapper">
                            Your personal Link:
                            <input
                                type="text"
                                name="personal_link"
                                value={this.state.personal_link}
                                onChange={this.handleChange}
                                placeholder="Personal Link"
                            />
                        </div>

                        <div className="button">
                            <button type="submit">
                                Sign up
                            </button>
                        </div>

                    </form>
                    {this.state.error ? <p>Error signing up... Please try again later</p> : null}
                    
                </div>
            </div>
        )
    }
}