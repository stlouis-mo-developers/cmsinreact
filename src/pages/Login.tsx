import { useState } from 'react';
import { ApiServer } from '../services/Api';

const Login = () => {
    const [form, setFormValue] = useState({ username: '', password: '' });
    ///const [isValid, setValidation] = useState(false);
    const [showForm, displayForm] = useState(true);
    const formState: any = Object.assign({}, form);

    const onLogin = (event: any) => {
        const isValid = new ApiServer().Login(form.username, form.password);
        displayForm(!isValid);
        //onsole.log({ onLogin: formState, isValid: isValid });
    }

    const onChange = (e: any) => {
        const key: string = e.target.name;
        const value: string = e.target.value;
        formState[key] = value;
        //console.log({formState: formState});
        setFormValue(formState);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="login-form bg-light mt-4 p-4">
                        {(showForm === false) &&
                            <h3 className="main-form-text">You are logged-in to your account ...</h3>
                        }
                        {(showForm === true) &&
                            <section>
                                <form action="" method="" className="row g-3">
                                    <h3>Login</h3>
                                    <div className="col-12">
                                        <label>Username</label>
                                        <input
                                            onChange={onChange}
                                            value={form.username}
                                            type="text" name="username" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="col-12">
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
                                    <p className="text-center mb-0">Have not account yet? <button className='btn btn-outline-secondary'>Signup</button></p>
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