import { useEffect, useState } from "react"
import Divider from "../../components/partials/Divider";
import Alert from "../../components/partials/ui/Alert";
import { IAlert } from "../../utils/interfaces.util";
import useGoTo from "../../hooks/useGoTo";
import FormField from "../../components/partials/inputs/FormField";
import Button from "../../components/partials/buttons/Button";
import { URL_ACTIVATE } from "../../utils/path.util";
import Message from "../../components/partials/dialogs/Message";
import AuthLogo from "../../components/app/auth/AuthLogo";
import HeaderText from "../../components/partials/ui/HeadingText";
import Text from "../../components/partials/ui/Text";

const VerifyPage = ({ }) => {

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

        goTo('/login')

    }

    return (
        <>
            <section className="auth-page w-full h-screen flex items-center gap-x-0">

                <div className="md:w-[52%] w-full px-[1.5rem] py-[1.5rem] h-full flex items-center justify-center flex-col pt-[5rem]">

                    <div className="w-full h-full items-center">

                        <div className=" h-full flex flex-col justify-center">

                            {
                                step === 0 &&
                                <>
                                    <div className="text-center">
                                        <AuthLogo />
                                        <HeaderText title='Verification' size="xxlg" weight='medium' />
                                        <Text title='We just sent a verification link to' className='mb-0' />
                                        <Text title='test@mail.com' className='mb-0' />

                                    </div>

                                    <div className="w-[50%] mx-auto my-0 space-y-[0.65rem]">

                                        <Alert className="" type={alert.type} show={alert.show} message={alert.message} />

                                        <Divider show={false} padding={{ enable: true, top: 'pt-[0.3rem]', bottom: 'pb-[1.2rem]' }} />

                                        <FormField className="">
                                            <Button
                                                type="primary"
                                                size="md"
                                                loading={loading}
                                                disabled={false}
                                                block={true}
                                                className="form-button"
                                                text={{
                                                    label: "Back to login",
                                                    size: 14,
                                                    weight: 'medium'
                                                }}
                                                icon={{
                                                    enable: true,
                                                    child: <></>
                                                }}
                                                onClick={(e) => handleVerify(e)}
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

                <div className="md:block hidden right-halve w-[48%] pr-[1.5rem] py-[1.5rem] pl-0 h-full">
                    <div className="w-[100%] h-[100%] rounded-[20px] full-bg relative" style={{ backgroundImage: `url("../../../images/assets/bg@auth.webp")` }}>

                        <div className="w-full flex items-center min-h-[100px] px-[3rem]">
                            <img src="../../../images/assets/logo.svg" className="w-[150px]" alt="logo.svg" />
                        </div>

                        <div className="w-[100%] px-[3rem] absolute left-0 bottom-[5rem] space-y-[1.2rem]">
                            <h1 className="font-sora-bold prs-950 text-[60px] leading-[58px] tracking-[-2px]">Measure, master and move forward.</h1>
                            <div className="w-[70%]">
                                <p className="font-sora text-[20px] prs-950">
                                    Measure your progress, master your craft, and move forward with confidence. 🚀
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
};

export default VerifyPage;
