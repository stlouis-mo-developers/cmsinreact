import { useState } from 'react';
import { ApiServer } from '../services/Api';


const Login = () => {
    // use this useState hook for the username and password values from the From
    const [form, setFormValue] = useState({ username: '', password: '' });
    // use this useSttae hook to hide / show the Login Form
    const [showForm, displayForm] = useState(false);
    const formState: any = Object.assign({}, form);

    // Function called when the Login button is clicked. 
    // Calls the Api Service to determine if the login is valid
    const onLogin = (event: any) => {
        // Call the Api Service and check if the Login si valid
        const isValid = (new ApiServer()).Login(form.username, form.password);
        // use this hook to hide / show the Login form
        displayForm(!isValid);
        //onsole.log({ onLogin: formState, isValid: isValid });
    }

    // Function called when the Username / Password values are chaanged
    const onChange = (e: any) => {
        const key: string = e.target.name;
        const value: string = e.target.value;
        formState[key] = value;
        // use this hook to store the states of the Username / Password calues
        setFormValue(formState);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="login-form bg-light mt-4 p-4">
                        {(showForm === false) &&
                            <h3 className="main-form-text">You are logged-in to your account ...</h3>
                        }
                        {(showForm === true) &&
                            <section>
                                <form action="" method="" className="row g-3">
                                    <h3>Login</h3>
                                    <div className="col-12 mb-3">
                                        <label className="pull-left">Username</label>
                                        <input
                                            onChange={onChange}
                                            value={form.username}
                                            type="text" name="username" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label>Password</label>
                                        <input
                                            onChange={onChange}
                                            value={form.password}
                                            type="password" name="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                                            <label className="form-check-label"> Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button onClick={onLogin} type="button" className="btn btn-dark float-end">Login</button>
                                    </div>
                                </form>
                                <hr className="mt-4" />
                                <div className="col-12">
                                    <p className="text-center mb-0">Have no account yet? <button className='btn btn-outline-secondary'>Signup</button></p>
                                </div>
                            </section>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;