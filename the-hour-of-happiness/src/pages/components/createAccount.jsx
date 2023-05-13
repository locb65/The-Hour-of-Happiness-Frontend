import React from 'react';

export const CreateAccount = () => {
    return (
        <form>
            <div>
                <label htmlFor = 'name'>Name</label>
                <input type='text' id='name' name = 'name' required />
            </div>
            <div>
                <label htmlFor = 'email'>Email</label>
                <input type='email' id='email' name = 'email' required />
            </div>
            <div>
                <label htmlFor = 'password'>Password</label>
                <input type='password' id='password' name='password' required />
            </div>
            <div>
                <label htmlFor = 'verify-password'>Verify Password</label>
                <input type='password' id='verify-password' name='verify-password' required />
            </div>
            <button type="submit"> Create Account </button>
        </form>
    )
}