import React, { FC } from 'react'
import Divider from '../../components/partials/Divider'
import FormField from '../../components/partials/inputs/FormField'
import TextInput from '../../components/partials/inputs/TextInput'
import PhoneInput from '../../components/partials/inputs/PhoneInput'
import { URL_FLAG } from '../../utils/path.util'
import helper from '../../utils/helper.util'
import Button from '../../components/partials/buttons/Button'
import LinkButton from '../../components/partials/buttons/LinkButton'
import { IStep } from '../../utils/interfaces.util'
import SelectInput from '../../components/partials/inputs/SelectInput'
import HeaderText from '../../components/partials/ui/HeadingText'
import Text from '../../components/partials/ui/Text'
import useGoTo from '../../hooks/useGoTo'
import Icon from '../../components/partials/icons/Icon'

const Step3: FC<IStep> = ({ onClick }) => {

    const { goTo } = useGoTo()
    return (
        <div>
            <div className="text-center">
                <HeaderText title='Set up Complete' size='lgr' weight={'semibold'} />
                <Text title='Please proceed to dashboard' className='mb-0' />
            </div>

            <Divider show={false} padding={{ enable: true, top: 'pt-[0.4rem]', bottom: 'pb-8' }} />

            <div className="md:w-[50%] w-full mx-auto my-0 space-y-[0.65rem]">
                <div className='h-[159px] w-[159px] rounded-full bg-[#E4F2FB] flex items-center justify-center mx-auto'>
                    <Icon type='feather' name='check' size={44} className='color-blue' />
                </div>


                {/* <Divider show={false} padding={{ enable: true, top: 'pt-[-0.4rem]', bottom: 'pb-[0.6rem]' }} /> */}

                <FormField className="pt-3">
                    <Button
                        type="primary"
                        size="md"
                        loading={false}
                        disabled={false}
                        block={true}
                        className="form-button"
                        text={{
                            label: "Dashboard",
                            size: 16,
                            weight: 'medium'
                        }}
                        icon={{
                            enable: true,
                            child: <></>
                        }}
                        onClick={onClick}
                    />
                </FormField>

                <FormField className="mb-[1rem] text-center pt-8 pb-[1rem]">
                    <LinkButton
                        text={{
                            label: 'Already have an account?',
                            className: 'text-sm',
                            weight: 'regular',
                            color: 'prs-950'
                        }}
                        disabled={false}
                        loading={false}
                        icon={{
                            enable: false
                        }}
                        url=""
                        onClick={(e) => { }}
                    />
                    <LinkButton
                        text={{
                            label: 'Sign in',
                            className: 'text-sm',
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
        </div>
    )
}

export default Step3