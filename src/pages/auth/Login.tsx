import React, { useEffect, useState, useContext, MouseEvent } from "react"
import Divider from "../../components/partials/Divider";
import Alert from "../../components/partials/ui/Alert";
import { IAlert } from "../../utils/interfaces.util";
import useGoTo from "../../hooks/useGoTo";
import FormField from "../../components/partials/inputs/FormField";
import TextInput from "../../components/partials/inputs/TextInput";
import PasswordInput from "../../components/partials/inputs/PasswordInput";
import Button from "../../components/partials/buttons/Button";
import LinkButton from "../../components/partials/buttons/LinkButton";
import ForgotPassword from "../../components/app/auth/ForgotPassword";
import AuthImage from "../../components/app/auth/AuthImage";
import HeaderText from "../../components/partials/ui/HeadingText";
import Text from "../../components/partials/ui/Text";
import AuthLogo from "../../components/app/auth/AuthLogo";
import CustomButton from "../../components/partials/buttons/CustomButton";

const LoginPage = ({ }) => {

    const { goTo } = useGoTo()

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [alert, setAlert] = useState<IAlert>({
        name: '',
        type: 'success',
        show: false,
        message: ''
    });

    useEffect(() => {

    }, [])

    const toggleShow = (e: MouseEvent<HTMLElement>) => {
        if (e) e.preventDefault()
        setShow(!show)
    }

    const handleLogin = async (e: any) => {

        if (e) { e.preventDefault(); }

        else if (!loginData.email) {
            setAlert({ ...alert, type: 'error', show: true, name: 'email', message: 'email or password is required' });
        }
        else if (!loginData.password) {
            setAlert({ ...alert, type: 'error', show: true, name: 'password', message: 'email or password is required' });
        }
        else {
            goTo('/onboard')
        }

        setTimeout(() => {
            setAlert({ ...alert, show: false, name: '' });
        }, 2000)

    }

    return (
        <>
            <section className="auth-page w-full h-screen flex gap-x-0">

                <div className=" md:w-[52%] w-full px-[1.5rem] py-[1.5rem] h-full flex flex-col md:pt-[5rem] pt-4">

                    <div className="w-full h-full relative">

                        <Divider show={false} padding={{ enable: true, top: 'pt-[0rem]', bottom: 'pb-[2.5rem]' }} />

                        <div className="">

                            <div className="text-center">
                                <AuthLogo />
                                <HeaderText title='Welcome To Probound' size="xxlg" weight='medium' />
                                <Text title='Enter your details below to get login.' className='mb-0' />
                            </div>

                            <Divider show={false} />

                            <div className="md:w-[55%] w-full mx-auto my-0">

                                <Alert className="" type={alert.type} show={alert.show} message={alert.message} />

                                <FormField className="mb-[1rem]">
                                    <TextInput
                                        type="email"
                                        size="rg"
                                        showFocus={true}
                                        autoComplete={false}
                                        placeholder="Ex. you@example.com"
                                        isError={alert.name === 'email' ? true : false}
                                        label={{
                                            required: false,
                                            fontSize: 13,
                                            title: "Email Address"
                                        }}
                                        onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
                                    />
                                </FormField>

                                <FormField className="mb-[1rem]">
                                    <PasswordInput
                                        showFocus={true}
                                        autoComplete={false}
                                        placeholder="••••••••"
                                        isError={alert.name === 'password' ? true : false}
                                        label={{
                                            required: false,
                                            fontSize: 13,
                                            title: "Password"
                                        }}
                                        forgot={{ enable: true, link: '/forgot-password' }}
                                        onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                                    />
                                </FormField>

                                <Divider show={false} padding={{ enable: true, top: 'pt-[0.6rem]', bottom: 'pb-[0.6rem]' }} />

                                <FormField className="mb-[0.5rem]">
                                    <Button
                                        type="primary"
                                        size="md"
                                        loading={loading}
                                        disabled={false}
                                        block={true}
                                        className="form-button"
                                        text={{
                                            label: "Login",
                                            size: 14,
                                            weight: 'medium'
                                        }}
                                        icon={{
                                            enable: true,
                                            child: <></>
                                        }}
                                        onClick={(e) => goTo('/onboarding')}
                                    />
                                </FormField>

                                <FormField className="mb-[1rem] text-center pt-[1rem] pb-[1rem]">
                                    <LinkButton
                                        text={{
                                            label: "Don't have an account?",
                                            className: 'text-sm',
                                            weight: 'light',
                                            color: 'text-[#636370]'
                                        }}
                                        disabled={false}
                                        loading={false}
                                        icon={{
                                            enable: false
                                        }}
                                        url=""
                                        onClick={(e) => { handleLogin(e) }}
                                    />
                                    <LinkButton
                                        text={{
                                            label: 'Sign Up',
                                            className: 'text-sm',
                                            weight: 'semibold',
                                            color: 'prcb-500'
                                        }}
                                        disabled={false}
                                        loading={false}
                                        icon={{
                                            enable: false
                                        }}
                                        url=""
                                        onClick={(e) => { goTo('/register') }}
                                    />
                                </FormField>

                                <div className="mb-9">
                                    <div className="flex items-center justify-between">
                                        <div className="bg-[#D9D9D9] h-px w-full"></div>
                                        <Text title="Or continue with" color="text-[#636370]" size="sm" className="w-full text-center" />
                                        <div className="bg-[#D9D9D9] h-px w-full"></div>
                                    </div>
                                </div>

                                <FormField>
                                    <CustomButton
                                        onClick={(e) => { }}
                                        className='inline-flex items-center justify-center bg-white border border-[#D7DBEC] w-full text-center text-black h-12 rounded-md mb-8'
                                    >
                                        <img src="../../images/assets/google.svg" width={20} alt="" />
                                        <span className='font-normal pl-3 text-[#1E1E1E]'>Continue With Google</span>
                                    </CustomButton>
                                </FormField>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="md:block hidden w-[48%] pr-[1.5rem] py-[1.5rem] pl-0 h-full">
                    <AuthImage />
                </div>

            </section>

            <ForgotPassword
                show={show}
                flattened={true}
                title="Forgot Password"
                closeModal={toggleShow}
                size="lg"
            />
        </>
    )
};

export default LoginPage;
