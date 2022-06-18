import { FC } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../hook";
import { checkUser } from "../store/loginSlice";


const Login: FC = () => {

    const dispatch = useAppDispatch()

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

    const login = (data: object): void => {
        dispatch(checkUser(data))
        reset()
    }

    return (
        <div className="login">
            <h4 className="login__title">Login</h4>

            <form className="login__form" onSubmit={handleSubmit(login)}>
                <div className="login__block">
                    <input className="login__input" type='text' {
                        ...register('name', {
                            required: 'Field is required',
                        })
                    } placeholder='Name..' />
                    <div className="login__popup">{errors?.name && (errors?.name?.message || Error)}</div>
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