import { useState } from "react";
import './Profile.css'

export default function Form1(){
    const[form, setForm] = useState({
        firstName: 'Mamun',
        lastName: 'Hossain',
        email: 'hossainmamun624@gmail.com'
    });

    return(
        <>
            <label htmlFor="firstNameField">
                First Name: 
                <input 
                    type="text" 
                    value={form.firstName} 
                    id="firstNameField"
                    onChange={(e) => {
                        setForm({...form, firstName: e.target.value})
                    }} />
            </label><br />
            <label htmlFor="lastNameField">
                Last Name: 
                <input 
                    type="text" 
                    value={form.lastName} 
                    id="lastNameField"
                    onChange={(e) => {
                        setForm({...form, lastName: e.target.value})
                    }} />
            </label>
            <label htmlFor="emailField"><br />
                Email: 
                <input 
                    type="email" 
                    value={form.email} 
                    id="emailField"
                    className="input-field"
                    onChange={(e) => {
                        setForm({...form, email: e.target.value})
                    }} />
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
            
        </>
    )
}