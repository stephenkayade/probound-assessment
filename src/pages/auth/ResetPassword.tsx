import React, { useEffect, useState, useContext } from "react"
import Divider from "../../components/partials/Divider";
import Alert from "../../components/partials/ui/Alert";
import { IAlert } from "../../utils/interfaces.util";
import useGoTo from "../../hooks/useGoTo";
import FormField from "../../components/partials/inputs/FormField";
import TextInput from "../../components/partials/inputs/TextInput";
import PasswordInput from "../../components/partials/inputs/PasswordInput";
import Button from "../../components/partials/buttons/Button";
import LinkButton from "../../components/partials/buttons/LinkButton";
import Filter from "../../components/partials/drops/Filter";
import helper from "../../utils/helper.util";
import PhoneInput from "../../components/partials/inputs/PhoneInput";
import Message from "../../components/partials/dialogs/Message";
import PasswordCheck from "../../components/app/auth/PasswordCheck";
import AuthImage from "../../components/app/auth/AuthImage";

const ResetPassword = ({ }) => {

    const { goTo } = useGoTo()

    const [step, setStep] = useState<number>(0)
    const [form, setForm] = useState({
        email: '',
        code: '',
        password: '',
        confirm: ''
    })
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const [loading, setLoading] = useState<boolean>(false);
    const [alert, setAlert] = useState<IAlert>({
        name: '',
        type: 'success',
        show: false,
        message: ''
    });

    useEffect(() => {

    }, [])

    const handleReset = async (e: any) => {

        if (e) { e.preventDefault(); }

    }

    return (
        <>
            <section className="auth-page w-full h-[100vh] flex gap-x-0">

                <div className="md:w-[52%] w-full px-[1.5rem] py-[1.5rem] h-full flex items-center flex-col pt-[5rem]">

                    <div className="w-full h-full relative">



                        <div className="">

                            {
                                step === 0 &&
                                <>
                                    <Divider show={false} padding={{ enable: true, top: 'pt-[2.5rem]', bottom: 'pb-[2.5rem]' }} />

                                    <div className="text-center">
                                        <div className="mb-6">
                                            <img className="logo w-[308px] mx-auto" src="../../../images/assets/probound-logo.png" alt="logo" loading="lazy" />
                                        </div>
                                        <h3 className="font-sora-bold text-[25px] prs-950 tracking-[-1px]">Create New Password</h3>
                                        <p className="mb-0 font-sora-light text-[14px] prg-600">Create new password</p>
                                    </div>

                                    <Divider show={false} />

                                    <div className="md:w-[50%] w-full mx-auto my-0 space-y-[0.65rem] relative">

                                        <Alert className="" type={alert.type} show={alert.show} message={alert.message} />

                                        <FormField className="">
                                            <PasswordInput
                                                showFocus={true}
                                                autoComplete={false}
                                                placeholder="••••••••"
                                                isError={alert.name === 'password' ? true : false}
                                                label={{
                                                    required: false,
                                                    fontSize: 13,
                                                    title: "Enter New Password"
                                                }}
                                                onChange={(e) => { setForm({ ...form, password: e.target.value }) }}
                                            />
                                        </FormField>

                                        {/* {
                                            isPasswordValid === false &&
                                            <div className="absolute w-full">
                                                <PasswordCheck />
                                            </div>
                                        } */}

                                        <FormField className="">
                                            <PasswordInput
                                                showFocus={true}
                                                autoComplete={false}
                                                placeholder="••••••••"
                                                isError={alert.name === 'confirm' ? true : false}
                                                label={{
                                                    required: false,
                                                    fontSize: 13,
                                                    title: "Type Password Again"
                                                }}
                                                onChange={(e) => { setForm({ ...form, confirm: e.target.value }) }}
                                            />
                                        </FormField>

                                        {/* <Divider show={false} padding={{ enable: true, top: `${isPasswordValid === false ? 'pt-32' : 'pt-[0.6rem]'}`, bottom: 'pb-[0.6rem]' }} /> */}
                                        <Divider show={false} padding={{ enable: true, top: 'pt-[0.6rem]', bottom: 'pb-[0.6rem]' }} />

                                        <FormField className="">
                                            <Button
                                                type="primary"
                                                size="md"
                                                loading={loading}
                                                disabled={false}
                                                block={true}
                                                className="form-button"
                                                text={{
                                                    label: "Reset",
                                                    size: 14,
                                                    weight: 'medium'
                                                }}
                                                icon={{
                                                    enable: true,
                                                    child: <></>
                                                }}
                                                onClick={(e) => goTo('/login')}
                                            />
                                        </FormField>

                                    </div>

                                </>
                            }

                            {
                                step === 1 &&
                                <>
                                    <Divider show={false} padding={{ enable: true, top: 'pt-[2.5rem]', bottom: 'pb-[2.5rem]' }} />

                                    <div className="text-center">
                                        <h3 className="font-sora-bold text-[25px] prs-950 tracking-[-1px]">Verify Account</h3>
                                    </div>

                                    <Divider show={false} padding={{ enable: true, top: 'pt-[1rem]', bottom: 'pb-[1rem]' }} />

                                    <div className="w-[50%] mx-auto my-0 space-y-[0.65rem]">

                                        <div className="w-full py-[20px] px-[21px] bg-prg-50 rounded-[5px]">
                                            <p className="font-sora-light text-[13px] prg-900">We’ve sent a 6-digit code to your email. Please enter the code below so we can verify your account </p>
                                        </div>

                                        <Divider show={false} padding={{ enable: true, top: 'pt-[0.5rem]', bottom: 'pb-[0.5rem]' }} />

                                        <Alert className="" type={alert.type} show={alert.show} message={alert.message} />

                                        <FormField className="">
                                            <TextInput
                                                type="email"
                                                size="rg"
                                                showFocus={true}
                                                autoComplete={false}
                                                placeholder="Ex. 000-000"
                                                isError={alert.name === 'code' ? true : false}
                                                label={{
                                                    required: false,
                                                    fontSize: 13,
                                                    title: "Enter Verification Code"
                                                }}
                                                onChange={(e) => { setForm({ ...form, code: e.target.value }) }}
                                            />
                                        </FormField>

                                        <Divider show={false} padding={{ enable: true, top: 'pt-[0.6rem]', bottom: 'pb-[0.6rem]' }} />

                                        <FormField className="">
                                            <Button
                                                type="primary"
                                                size="md"
                                                loading={loading}
                                                disabled={false}
                                                block={true}
                                                className="form-button"
                                                text={{
                                                    label: "Change Password",
                                                    size: 14,
                                                    weight: 'medium'
                                                }}
                                                icon={{
                                                    enable: true,
                                                    child: <></>
                                                }}
                                                onClick={(e) => handleReset(e)}
                                            />
                                        </FormField>

                                        <FormField className="mb-[1rem] text-center pt-[1rem] pb-[1rem]">
                                            <LinkButton
                                                text={{
                                                    label: 'Resend Code',
                                                    className: 'text-[13px]',
                                                    weight: 'regular',
                                                    color: 'prcb-500'
                                                }}
                                                disabled={true}
                                                loading={false}
                                                icon={{
                                                    enable: false
                                                }}
                                                url=""
                                                onClick={(e) => { goTo('/register') }}
                                            />
                                        </FormField>

                                    </div>

                                </>
                            }

                            {
                                step === 2 &&
                                <>
                                    <Divider show={false} />

                                    <div className="w-[60%] mx-auto my-0">

                                        <Message
                                            type="success"
                                            message="Your password has been changed successfully. Proceed to login"
                                            title="Successful!"
                                            button={{
                                                enable: true,
                                                text: "Continue",
                                                onClick: (e) => { goTo('/login') }
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

export default ResetPassword;
