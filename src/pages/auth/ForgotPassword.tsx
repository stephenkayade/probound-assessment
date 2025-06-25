import { useEffect, useState } from "react"
import Divider from "../../components/partials/Divider";
import Alert from "../../components/partials/ui/Alert";
import { IAlert } from "../../utils/interfaces.util";
import useGoTo from "../../hooks/useGoTo";
import FormField from "../../components/partials/inputs/FormField";
import TextInput from "../../components/partials/inputs/TextInput";
import Button from "../../components/partials/buttons/Button";
import LinkButton from "../../components/partials/buttons/LinkButton";
import { URL_ACTIVATE } from "../../utils/path.util";
import Message from "../../components/partials/dialogs/Message";
import AuthImage from "../../components/app/auth/AuthImage";
import AuthLogo from "../../components/app/auth/AuthLogo";

const ForgotPage = ({ }) => {

    const { goTo } = useGoTo()

    const [step, setStep] = useState<number>(0)
    const [form, setForm] = useState({
        code: '',
        url: URL_ACTIVATE,
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

    const handleVerify = async (e: any) => {

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
                                        <AuthLogo />
                                        <h3 className="font-sora-bold text-[25px] prs-950 tracking-[-1px]">Forgot Password</h3>
                                    </div>

                                    <Divider show={false} padding={{ enable: true, top: 'pt-[1rem]', bottom: 'pb-[1rem]' }} />

                                    <div className="md:w-[52%] w-full mx-auto my-0 space-y-[0.65rem]">

                                        <div className="text-center w-full">
                                            <p className="font-sora-light text-[13px] prg-900">Enter the email address you used when you joined and we’ll send you verification to reset your password. </p>
                                        </div>

                                        <Divider show={false} padding={{ enable: true, top: 'pt-[0.5rem]', bottom: 'pb-[0.5rem]' }} />

                                        <Alert className="" type={alert.type} show={alert.show} message={alert.message} />

                                        <FormField className="">
                                            <TextInput
                                                type="email"
                                                size="rg"
                                                showFocus={true}
                                                autoComplete={false}
                                                placeholder="Email Adress"
                                                isError={alert.name === 'code' ? true : false}
                                                label={{
                                                    required: false,
                                                    fontSize: 13,
                                                    title: "Enter email"
                                                }}
                                                onChange={(e) => { setForm({ ...form, code: e.target.value }) }}
                                            />
                                        </FormField>

                                        <Divider show={false} padding={{ enable: true, top: 'pt-[0.3rem]', bottom: 'pb-[0.3rem]' }} />

                                        <FormField className="">
                                            <Button
                                                type="primary"
                                                size="md"
                                                loading={loading}
                                                disabled={false}
                                                block={true}
                                                className="form-button"
                                                text={{
                                                    label: "Confirm",
                                                    size: 14,
                                                    weight: 'medium'
                                                }}
                                                icon={{
                                                    enable: true,
                                                    child: <></>
                                                }}
                                                onClick={(e) => { goTo('/reset-password') }}
                                            />
                                        </FormField>

                                        <FormField className="mb-[1rem] text-center pt-[1rem] pb-[1rem]">
                                            <LinkButton
                                                text={{
                                                    label: 'Don’t have an account?',
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
                                            message="Your account has been verified. Continue to access your account"
                                            title="Way to go!"
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

export default ForgotPage;