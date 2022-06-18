import { FC } from "react";
import { useForm } from "react-hook-form";



const Login: FC = () => {


    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    })

    return (
        <div className="login">
            <h4 className="login__title">Login</h4>

            <form className="login__form" onSubmit={handleSubmit(login)}>
                <div className="login__block">
                    <input className="login__input" type='text' {
                        ...register('email', {
                            required: 'Field is required',
                        })
                    } placeholder='Email..' />
                    <div className="login__popup">{errors?.email && (errors?.email?.message || Error)}</div>
                </div>

                <div className="login__block">
                    <input className="login__input login__input_password" type='text' {
                        ...register('password', {
                            required: 'Field is required',
                            minLength: {
                                value: 6,
                                message: 'Min length 6'
                            }
                        })
                    } placeholder='Password..' />

                    <div className="login__popup">{errors?.password && (errors?.password?.message || Error)}</div>
                </div>


                <button className="login__button" type='submit' disabled={!isValid}>Sign in</button>

            </form>
        </div>
    );
};

export default Login;