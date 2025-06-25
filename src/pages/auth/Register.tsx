import { useEffect, useState } from "react"
import Divider from "../../components/partials/Divider";
import Alert from "../../components/partials/ui/Alert";
import { IAlert } from "../../utils/interfaces.util";
import useGoTo from "../../hooks/useGoTo";
import FormField from "../../components/partials/inputs/FormField";
import TextInput from "../../components/partials/inputs/TextInput";
import PasswordInput from "../../components/partials/inputs/PasswordInput";
import Button from "../../components/partials/buttons/Button";
import LinkButton from "../../components/partials/buttons/LinkButton";
import helper from "../../utils/helper.util";
import PhoneInput from "../../components/partials/inputs/PhoneInput";
import { URL_FLAG } from "../../utils/path.util";
import Message from "../../components/partials/dialogs/Message";
import AuthImage from "../../components/app/auth/AuthImage";
import CustomButton from "../../components/partials/buttons/CustomButton";
import AuthLogo from "../../components/app/auth/AuthLogo";
import HeaderText from "../../components/partials/ui/HeadingText";
import Text from "../../components/partials/ui/Text";

const RegisterPage = ({ }) => {

    const { goTo } = useGoTo()

    const [step, setStep] = useState<number>(0)
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneCode: '+234',
        phoneNumber: ''
    })
    const [loading, setLoading] = useState<boolean>(false);
    const [alert, setAlert] = useState<IAlert>({
        name: '',
        type: 'success',
        show: false,
        message: ''
    });

    useEffect(() => {

    }, [])

    const handleRegister = async (e: any) => {

        if (e) { e.preventDefault(); }

        if (!form.firstName) {
            setAlert({ ...alert, type: 'error', show: true, name: 'firstName', message: 'first name is required' });
        }
        else if (!form.lastName) {
            setAlert({ ...alert, type: 'error', show: true, name: 'lastName', message: 'last name is required' });
        }
        else if (!form.email) {
            setAlert({ ...alert, type: 'error', show: true, name: 'email', message: 'email is required' });
        }
        else if (!form.phoneNumber) {
            setAlert({ ...alert, type: 'error', show: true, name: 'phone', message: 'phone number is required' });
        }
        else if (!form.password) {
            setAlert({ ...alert, type: 'error', show: true, name: 'password', message: 'password is required' });
        }
        else if (!form.confirmPassword) {
            setAlert({ ...alert, type: 'error', show: true, name: 'password', message: 'confirm password is required' });
        }
        else if (form.password !== form.confirmPassword) {
            setAlert({ ...alert, type: 'error', show: true, name: 'password', message: 'confirm password does not match password' });
        }
        else {
            goTo('/verify')
        }

        setTimeout(() => {
            setAlert({ ...alert, show: false, name: '' });
        }, 2000)

    }

    return (
        <>
            <section className="auth-page w-full h-[100vh] flex gap-x-0">

                <div className="md:w-[52%] w-full px-[1.5rem] py-[1rem] h-full flex items-center flex-col pt-[3rem]">

                    <div className="w-full h-full relative">

                        <div className="">

                            {
                                step === 0 &&
                                <>
                                    {/* <Divider show={false} padding={{ enable: true, top: 'pt-[2.5rem]', bottom: 'pb-[2.5rem]' }} /> */}


                                    <div className="text-center">
                                        <AuthLogo />
                                        <HeaderText title='Welcome To Probound' size="xxlg" weight='medium' />
                                        <Text title='Enter your details below to get started.' className='mb-0' />
                                    </div>

                                    <Divider show={false} padding={{ enable: true, top: 'pt-[0.4rem]', bottom: 'pb-[0.6rem]' }} />

                                    <div className="md:w-[55%] w-full mx-auto my-0 space-y-[0.65rem]">

                                        <Alert className="" type={alert.type} show={alert.show} message={alert.message} />

                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">

                                            <FormField className="">
                                                <TextInput
                                                    type="email"
                                                    size="rg"
                                                    showFocus={true}
                                                    autoComplete={false}
                                                    placeholder="First Name"
                                                    isError={alert.name === 'firstName' ? true : false}
                                                    label={{
                                                        required: false,
                                                        fontSize: 13,
                                                        title: "First Name"
                                                    }}
                                                    onChange={(e) => { setForm({ ...form, firstName: e.target.value }) }}
                                                />
                                            </FormField>

                                            <FormField className="">
                                                <TextInput
                                                    type="text"
                                                    size="rg"
                                                    showFocus={true}
                                                    autoComplete={false}
                                                    placeholder="Last name"
                                                    isError={alert.name === 'lastName' ? true : false}
                                                    label={{
                                                        required: false,
                                                        fontSize: 13,
                                                        title: "Last Name"
                                                    }}
                                                    onChange={(e) => { setForm({ ...form, lastName: e.target.value }) }}
                                                />
                                            </FormField>

                                        </div>

                                        <FormField className="">
                                            <TextInput
                                                type="email"
                                                size="rg"
                                                showFocus={true}
                                                autoComplete={false}
                                                placeholder="Email Address"
                                                isError={alert.name === 'email' ? true : false}
                                                label={{
                                                    required: false,
                                                    fontSize: 13,
                                                    title: "Last Name"
                                                }}
                                                onChange={(e) => { setForm({ ...form, email: e.target.value }) }}
                                            />
                                        </FormField>

                                        <FormField className="w-full">
                                            <PhoneInput
                                                label={{
                                                    required: false,
                                                    fontSize: 13,
                                                    title: "Phone Number"
                                                }}
                                                textInput={{
                                                    type: "text",
                                                    size: "rg",
                                                    showFocus: true,
                                                    autoComplete: false,
                                                    placeholder: "",
                                                    isError: alert.name === 'phone' ? true : false,
                                                    onChange: (e) => { setForm({ ...form, phoneNumber: e.target.value }) },
                                                    className: 'border-l-0 rounded-l-none'
                                                }}
                                                filter={{
                                                    size: 'rg',
                                                    className: 'la-filter',
                                                    placeholder: "Country",
                                                    position: "bottom",
                                                    defaultValue: "+234",
                                                    noBorder: true,
                                                    menu: {
                                                        style: { minWidth: '300px' },
                                                        search: true,
                                                        fullWidth: false,
                                                        limitHeight: 'md'
                                                    },
                                                    items: helper.listCountries().map((x) => {
                                                        return {
                                                            label: x.name,
                                                            display: x.phone,
                                                            value: x.phone,
                                                            image: `${URL_FLAG}/${x.code.toLowerCase()}.svg`
                                                        }
                                                    }),
                                                    noFilter: false,
                                                    onChange: (data) => { setForm({ ...form, phoneCode: data.value }) }
                                                }}
                                            />
                                        </FormField>


                                        <FormField className="">
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
                                                onChange={(e) => { setForm({ ...form, password: e.target.value }) }}
                                            />
                                        </FormField>


                                        <FormField className="">
                                            <PasswordInput
                                                showFocus={true}
                                                autoComplete={false}
                                                placeholder="••••••••"
                                                isError={alert.name === 'confirmPassword' ? true : false}
                                                label={{
                                                    required: false,
                                                    fontSize: 13,
                                                    title: "Confirm Password"
                                                }}
                                                onChange={(e) => { setForm({ ...form, confirmPassword: e.target.value }) }}
                                            />
                                        </FormField>

                                        {/* <Divider show={false} padding={{ enable: true, top: 'pt-[-0.4rem]', bottom: 'pb-[0.6rem]' }} /> */}

                                        <FormField className="pt-2">
                                            <Button
                                                type="primary"
                                                size="md"
                                                loading={loading}
                                                disabled={false}
                                                block={true}
                                                className="form-button"
                                                text={{
                                                    label: "Sign Up",
                                                    size: 16,
                                                    weight: 'medium'
                                                }}
                                                icon={{
                                                    enable: true,
                                                    child: <></>
                                                }}
                                                onClick={(e) => handleRegister(e)}
                                            />
                                        </FormField>

                                        <FormField className="mb-[1rem] text-center pt-[1rem] pb-[1rem]">
                                            <LinkButton
                                                text={{
                                                    label: 'Already have an account?',
                                                    className: 'text-[13px]',
                                                    weight: 'regular',
                                                    color: 'prs-950'
                                                }}
                                                disabled={false}
                                                loading={false}
                                                icon={{
                                                    enable: false
                                                }}
                                                url=""
                                                onClick={(e) => { goTo('/login') }}
                                            />
                                            <LinkButton
                                                text={{
                                                    label: 'Sign in',
                                                    className: 'text-[13px]',
                                                    weight: 'medium',
                                                    color: 'prcb-700'
                                                }}
                                                disabled={false}
                                                loading={false}
                                                icon={{
                                                    enable: false
                                                }}
                                                url=""
                                                onClick={(e) => { goTo('/login') }}
                                            />
                                        </FormField>

                                    </div>
                                </>
                            }

                            {
                                step === 1 &&
                                <>
                                    <Divider show={false} />

                                    <div className="w-[60%] mx-auto my-0">

                                        <Message
                                            type="success"
                                            message="Your account has been created. Continue to access your account"
                                            title="Way to go!"
                                            button={{
                                                enable: true,
                                                text: "Continue",
                                                onClick: (e) => { goTo('/verify') }
                                            }}
                                        />

                                    </div>
                                </>
                            }

                        </div>

                    </div>

                </div>

                <div className="md:block hidden w-[48%] pr-[1.5rem] py-[1.5rem] pl-0 h-full">
                    <AuthImage />

                </div>

            </section>
        </>
    )
};

export default RegisterPage;
