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

const Step0: FC<IStep> = ({ onClick }) => {

    const {goTo} = useGoTo()
    return (
        <div>
            <div className="text-center">
                <HeaderText title='Organization information' size='lgr' />
                <Text title='Provide your company' className='mb-0' />
            </div>

            <Divider show={false} padding={{ enable: true, top: 'pt-[0.4rem]', bottom: 'pb-8' }} />
            <div className="md:w-[50%] w-full mx-auto my-0 space-y-[0.65rem]">


                <FormField className="">
                    <TextInput
                        type="text"
                        size="rg"
                        showFocus={true}
                        autoComplete={false}
                        placeholder="Circle Corp"
                        isError={alert.name === 'company' ? true : false}
                        label={{
                            required: false,
                            fontSize: 13,
                            title: "Company Name"
                        }}
                        onChange={(e) => { }}
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
                            type: "email",
                            size: "rg",
                            showFocus: true,
                            autoComplete: false,
                            placeholder: "",
                            isError: alert.name === 'phone' ? true : false,
                            onChange: (e) => { },
                            className: 'border-l-0 rounded-l-none'
                        }}
                        filter={{
                            size: 'rg',
                            className: 'la-filter',
                            placeholder: "Country",
                            position: "bottom",
                            defaultValue: "+234",
                            menu: {
                                style: { minWidth: '200px' },
                                search: true,
                                fullWidth: false,
                                limitHeight: 'md'
                            },
                            noBorder: true,
                            items: helper.listCountries().map((x) => {
                                return {
                                    label: x.name,
                                    display: x.phone,
                                    value: x.phone,
                                    image: `${URL_FLAG}/${x.code.toLowerCase()}.svg`
                                }
                            }),
                            noFilter: false,
                            onChange: (data) => { }
                        }}
                    />
                </FormField>

                <FormField className="">
                    <TextInput
                        type="text"
                        size="rg"
                        showFocus={true}
                        autoComplete={false}
                        placeholder="www."
                        isError={alert.name === 'website' ? true : false}
                        label={{
                            required: false,
                            fontSize: 13,
                            title: "Organizational Website"
                        }}
                        onChange={(e) => { }}
                    />
                </FormField>


                <FormField className="pb-2">

                    <SelectInput
                        size="rg"
                        showFocus={true}
                        placeholder={{
                            enable: true,
                            value: 'select'
                        }}
                        isError={false}
                        label={{
                            className: '',
                            fontSize: 13,
                            title: "Industry Field"
                        }}
                        className=""
                        options={helper.getIndustries().map((x) => {
                            return {
                                name: helper.capitalizeWord(x.name),
                                value: x.name,
                            }
                        })}
                        onSelect={(e) => { }}
                    />
                </FormField>


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
                            label: "Continue",
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
                        onClick={(e) => { goTo('/login')}}
                    />
                </FormField>

            </div>
        </div>
    )
}

export default Step0