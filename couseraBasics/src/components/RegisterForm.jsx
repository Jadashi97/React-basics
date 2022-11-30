import React, {useState} from 'react'

// more example on using the useState hook when having a form with more than one input value and a changing state
export default function RegisterForm() {
    const [form, setForm] = useState({
        firstName: "Luke",
        lastName: "Jones",
        email: 'lukeJones@sculpture.com',
    });

    return (
        <div>
            <label>
                Last name: 
                <input
                    value = {form.lastName}
                    onChange={ e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                First name: 
                <input
                    value = {form.firstName}
                    onChange={ e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Email: 
                <input
                    value = {form.email}
                    onChange={ e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                {form.firstName}
                {form.lastName}
                {form.email}
            </p>
        </div>
    )
    }
