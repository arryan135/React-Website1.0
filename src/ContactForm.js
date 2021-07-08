import "./ContactForm.scss"
import React, { Component } from 'react'
import ParticleBackground from "./ParticleBackground.js"
import emailjs from "emailjs-com";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const formValid = ({formErrors, ...rest}) => {
    let valid = true;
    //validate form erros being empty
    Object.values(formErrors).forEach( val => val.length > 0 && (valid = false));
    //validate that the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    });
    return valid;
}

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : null,
            lastName : null,
            email : null,
            message : null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        if (formValid(this.state)){
            // console.log(`
            //     --- SMITTING ---
            //     First Name: ${this.state.firstName}
            //     Last Name: ${this.state.lastName}
            //     email: ${this.state.email}
            //     message: ${this.state.message}
            // `);
            emailjs.sendForm("service_jauqoqr", "template_7o1wgbp", evt.target, "user_hB1HnC9MUWWYbYX44FVTZ").then(res => {
                this.setState({firstName: "", lastName: "", email: "", message: "", formErrors: {firstName: "", lastName: "", email: "", message: ""}});        
                window.location.reload();
                alert("Your message has been sent successfully. Thanks!");
                console.log(res);
            }).catch(err => alert("The backend server has encountered an error, please try submitting again"));
            
        } else{
            // console.error(`FORM INVALID - DISPLAY ERROR MESSAGE`)
            alert("Please make sure that all form fields are valid before you send message")
        }
    }

    handleChange(evt){
        evt.preventDefault();
        const {name, value} = evt.target; 
        let formErrors = this.state.formErrors;

        switch(name){
            case "firstName": 
                formErrors.firstName = value.length < 3 ? 
                    "minimum 3 characters required" : "";
                break;
            case "lastName": 
                formErrors.lastName = value.length < 3 ? 
                    "minimum 3 characters required" : "";
                break;
            case "email": 
                formErrors.email = emailRegex.test(value) ? 
                    "" : "invalid email address";
                break;
            case "message": 
                formErrors.message = value.length < 2 ? 
                    "minimum 2 characters required" : "";
                break;
            default: 
                break;
        }
        this.setState({formErrors, [name] : value});
    }
    render() {
        const {formErrors} = this.state;

        return (
            <div className = "outer-div">
                <div className = "particles-js">
                    <ParticleBackground />
                </div>
                
                <div className = "upper-text">
                    <h3>{`<contact/>`}</h3>
                    <p className = "sub-title">A random email would brighten my day :)</p>
                </div>
                
                <div id = "contact-container">
                    <div className = "contact-info">
                        <h4>my contact information</h4>
                        <p>Fill up the form and don't forget to click send</p>
                        <div className = "icon-text">
                            <i className = "fa fa-phone" aria-hidden = "true"></i>
                            <span>608-982-1695</span>
                        </div>
                        <div className = "icon-text">
                            <i className = "fa fa-envelope-o" aria-hidden = "true"></i>
                            <span>arryan@umich.edu</span>
                        </div>
                        <div className = "icon-text">
                            <i className = "fa fa-map-marker" aria-hidden = "true"></i>
                            <span>Ann Arbor, Michigan - 48104</span>
                        </div>
                        <div className = "social-media">
                            <a href = "#" className = "icon-circle">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            <a href = "#"   className = "icon-circle">
                            <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <form onSubmit = {this.handleSubmit} noValidate> 
                        <div className = "col">
                            <div className = "form-group">
                                <label htmlFor = "firstName">First Name</label>
                                <input 
                                    type = "text"
                                    name = "firstName"
                                    id = "firstName"
                                    onChange = {this.handleChange}
                                    style = {{borderBottom: (formErrors.firstName.length > 0 && "2px solid #e05353") }}
                                />
                                {formErrors.firstName.length > 0 && (
                                    <span className = "errorMessage">{formErrors.firstName}</span>
                                )}
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "lastName">Last Name</label>
                                <input 
                                    type = "text"
                                    name = "lastName"
                                    id = "lastName"
                                    onChange = {this.handleChange}
                                    style = {{borderBottom: (formErrors.lastName.length > 0 && "2px solid #e05353") }}
                                />
                                {formErrors.lastName.length > 0 && (
                                    <span className = "errorMessage">{formErrors.lastName}</span>
                                )}
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "form-group solo">
                                <label htmlFor = "email">E-Mail</label>
                                <input 
                                    type = "email"
                                    name = "email"
                                    id = "email"
                                    noValidate
                                    onChange = {this.handleChange}
                                    style = {{borderBottom: (formErrors.email.length > 0 && "2px solid #e05353") }}
                                />
                                {formErrors.email.length > 0 && (
                                    <span className = "errorMessage">{formErrors.email}</span>
                                )}
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "form-group solo">
                                <label htmlFor = "message">Message</label>
                                <textarea 
                                    id = "message"
                                    name = "message"
                                    onChange = {this.handleChange}
                                    style = {{borderBottom: (formErrors.message.length > 0 && "2px solid #e05353") }}
                                />
                                {formErrors.message.length > 0 && (
                                    <span className = "errorMessage">{formErrors.message}</span>
                                )}
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "form-group solo right">
                                <button className = "primary" type = "submit"> Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactForm;
