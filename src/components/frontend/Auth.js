
import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap";
import './Auth.css';
import  Image  from '../../Images/signup5.jpg';
import { Link } from 'react-router-dom';


export default class Auth extends Component {

    constructor() {
        super()
        this.state = {
            isRegister: false
        }
    }
    Login() {
        console.log("state", this.state)
        fetch('', {
            method: "POST",
            headers: {
                "Accept": "application",
                "Content-Type": "application",
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                localStorage.setItem("auth", JSON.stringify(resp))
            })
        })
    }
    Register() {
        console.log("state", this.state)
        fetch('', {
            method: "POST",
            headers: {
                "Accept": "application",
                "Content-Type": "application",
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                localStorage.setItem("auth", JSON.stringify(resp))

            })
        })
    }
    render() {

        return (
            <div className="container-fluid m-30">
                <Row>
                    <Col sm={3}>
                        <div>
                            {
                                !this.state.isRegister ?
                                    <div>
                                        < form
                                            // onSubmit={this.handleSubmit}
                                            className="form">
                                            <h1>login</h1>
                                            <div className="ui divider"></div>
                                            <div className="ui form">
                                                <div className="field">
                                                    <label>Email</label>
                                                    <input
                                                        type="text"
                                                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="field">
                                                    <label>Password</label>
                                                    <input
                                                        type="password"
                                                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <br />
                                                <button className="btn" onClick={() => this.Login()}>Login</button>
                                            </div>
                                        </form>
                                        <br />
                                        <div>
                                            <h5><span>Don't have an Account yet?</span>  <Link onClick={() => this.setState({ isRegister: true })}>Register</Link> </h5>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <form className="form"  >
                                            <h1>Register</h1>
                                            <div className="ui divider"></div>


                                            <div className="field">
                                                <label>Username</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Username"
                                                    onChange={(e) => { this.setState({ name: e.target.value }) }}
                                                    // value={formValues.username}
                                                    // onChange={handleChange}
                                                />
                                            </div>
                                            {/* <p>{formErrors.username}</p> */}
                                            <div className="field">
                                                <label>Email</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    placeholder="Email"
                                                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                                                    // value={formValues.email}
                                                    // onChange={handleChange}
                                                />
                                            </div>
                                            {/* <p>{formErrors.email}</p> */}
                                            <div className="field">
                                                <label>Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                                    // value={formValues.password}
                                                    // onChange={handleChange}
                                                />
                                            </div>
                                            {/* <p>{formErrors.password}</p> */}
                                            <div className="field">
                                                <label> Confirm Password</label>
                                                <input
                                                    type="password"
                                                    name="Confirmpassword"
                                                    placeholder="Confirmpassword"
                                                    onChange={(e) => { this.setState({ c_password: e.target.value }) }}
                                                    // value={formValues.Confirmpassword}
                                                    // onChange={handleChange}

                                                />

                                                <br /><br />
                                                <button className="btn" onClick={() => this.Register()}>Register</button>
                                            </div>
                                        </form>
                                        <br />
                                        <div>
                                            <h6><span>Already have Account</span>  <Link onClick={() => this.setState({ isRegister: false })}>Login</Link> </h6>
                                        </div>
                                    </div>
                            }
                        </div>
                    </Col>
                    <Col sm={9}>
                        <img alt='' src={Image} width="100%" height="775px" />
                    </Col>
                </Row>
            </div >
        )
    }
}



