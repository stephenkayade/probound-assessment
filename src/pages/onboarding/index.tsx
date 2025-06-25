import { MouseEvent, useState } from 'react'
import { URL_REG_CALLBACK } from '../../utils/path.util'
import useGoTo from '../../hooks/useGoTo'
import { IAlert } from '../../utils/interfaces.util'
import Divider from '../../components/partials/Divider'
import Message from '../../components/partials/dialogs/Message'
import Icon from '../../components/partials/icons/Icon'
import Step0 from './Step0'
import Step1 from './Step1'
import useRegister from '../../hooks/useRegister'
import Step2 from './Step2'
import { Link } from 'react-router-dom'
import HeaderText from '../../components/partials/ui/HeadingText'
import Text from '../../components/partials/ui/Text'
import { onboardType } from '../../utils/enums.util'

const Onboarding = () => {

    const { goTo } = useGoTo()
    const { step, stage, handleStage, handleNextStep } = useRegister()

    const [form, setForm] = useState({
        email: '',
        password: '',
        userType: 'talent',
        callbackUrl: URL_REG_CALLBACK,
        phoneCode: '+234',
        phoneNumber: ''
    })
    const [loading, setLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(25);
    const [alert, setAlert] = useState<IAlert>({
        name: '',
        type: 'success',
        show: false,
        message: ''
    });

    const sideTabs = [
        { icon: 'user', title: 'Organization Information', desc: 'Provide your company', stage: 'info' },
        { icon: 'lock', title: 'Organization Address', desc: 'Start collaborating with your team', stage: 'address' },
        { icon: 'house', title: 'Invite a team member', desc: 'Start collaborating with your team', stage: 'member' },
        { icon: 'users', title: 'Success', desc: 'You have successfully onboarded your business', stage: 'success' },
    ]

    const handleSelectTab = (e: MouseEvent<HTMLAnchorElement>, next: string) => {
        if (e) e.preventDefault()
        if (next === onboardType.INFO) {
            setProgress(25)
        } else if (next === onboardType.ADDRESS) {
            setProgress(70)
        } else if (next === onboardType.MEMBER) {
            setProgress(110)
        } else if (next === onboardType.SUCCESS) {
            setProgress(100)
        }
        handleStage(e, next)

    }

    return (
        <>
            <div className={`flex  ${stage === onboardType.MEMBER ? 'overflow-y-scroll md:py-0 mt-8' : "min-h-screen"} ${stage === onboardType.ADDRESS ? 'md:py-0 mt-8' : ""}`}>
                <div className='bg-[#1774B1] h-full py-8 px-10 md:fixed top-0 left-0 bottom-0 md:w-[480px] w-full md:block hidden'>

                    <div className="mb-8">
                        <img className="logo w-[138px]" src="../../../images/assets/probound-logo-white.svg" alt="logo" loading="lazy" />
                    </div>

                    <div className='text-white'>
                        <h3 className='text-2xl font-semibold max-w-[336px]'>Onboard your business in 3 easy steps</h3>
                    </div>

                    <Divider show={false} padding={{ enable: true, top: 'pt-[0.4rem]', bottom: 'pb-[0.6rem]' }} />

                    <div className='grid grid-cols-1 gap-14 relative'>

                        {
                            sideTabs.map((tab, index) => {
                                const currentIndex = sideTabs.findIndex(t => t.stage === stage);
                                const isCompletedOrCurrent = index <= currentIndex;

                                return <div className='relative z-10'>
                                    <Link to='' onClick={(e) => handleSelectTab(e, tab.stage)} className='flex gap-6 items-center'>
                                        <div className={`${isCompletedOrCurrent ? 'bg-white' : 'bg-[#176396]'} flex items-center justify-center h-6 w-[40px] h-[40px] rounded-full`} aria-disabled>
                                            <Icon type='polio' name={tab.icon} size={25} style={{ color: '#1774B1' }} />
                                        </div>
                                        <div className='mt-2 text-white'>
                                            <HeaderText title={tab.title} size='lg' color='text-white' />
                                            <Text title={tab.desc} color='text-white' weight={'light'} />
                                        </div>
                                    </Link>
                                    {/* {
                                        sideTabs[index + 1] &&
                                        <div className="absolute left-4.5 -bottom-16">
                                            <div className={`h-[72px] w-[3px]  ${stage === tab.stage ? 'bg-blue-200' : 'bg-[#3A89BD]'}`}></div>
                                        </div>
                                    } */}
                                </div>
                            })
                        }

                        <div className='absolute left-4.5 top-10 flex flex-col -z-10'>

                            <div className={`h-[335px] w-[3px] bg-[#3A89BD]`}>
                                <div style={{ height: progress + '%' }} className={`w-[3px] bg-white`}></div>
                            </div>

                        </div>


                    </div>

                </div>
                <div className="md:pl-[480px] col-span-2 min-h-screen w-full">

                    <div className="md:w-[80%] w-full px-[1.5rem] py-[1rem] h-full flex items-center flex-col pt-[3rem] mx-auto">

                        <div className="w-full h-full flex items-center relative">

                            <div className='w-full'>


                                {
                                    stage === onboardType.INFO &&
                                    <>
                                        <Step0 onClick={(e) => handleStage(e, onboardType.ADDRESS)} />
                                    </>
                                }

                                {
                                    stage === onboardType.ADDRESS &&
                                    <Step1 onClick={(e) => handleStage(e, onboardType.MEMBER)} />

                                }

                                {
                                    stage === onboardType.MEMBER &&
                                    <Step2 onClick={(e) => handleStage(e, onboardType.SUCCESS)} />
                                }

                                {
                                    stage === onboardType.SUCCESS &&
                                    <>Successful</>
                                }

                            </div>

                            {
                                step === 5 &&
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
            </div>
        </>
    )
}

export default Onboarding