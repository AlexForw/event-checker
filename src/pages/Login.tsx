import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../hook";
import { checkUser } from "../store/loginSlice";

type loginObj = {
    name: string;
    password: string;
}

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
    } = useForm<loginObj>({
        mode: 'onBlur'
    })

    const login: SubmitHandler<loginObj> = (data) => {
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
                    <div className="login__popup">{errors?.name?.message}</div>
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

                    <div className="login__popup">{errors?.password?.message}</div>
                </div>


                <button className="login__button" type='submit' disabled={!isValid}>Sign in</button>

            </form>
        </div>
    );
};

export default Login;