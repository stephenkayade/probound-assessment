import React, { FC, useRef, useState } from 'react'
import Divider from '../../components/partials/Divider'
import FormField from '../../components/partials/inputs/FormField'
import TextInput from '../../components/partials/inputs/TextInput'
import PhoneInput from '../../components/partials/inputs/PhoneInput'
import { URL_FLAG } from '../../utils/path.util'
import helper from '../../utils/helper.util'
import Button from '../../components/partials/buttons/Button'
import LinkButton from '../../components/partials/buttons/LinkButton'
import Filter from '../../components/partials/drops/Filter'
import SelectInput from '../../components/partials/inputs/SelectInput'
import { IStep } from '../../utils/interfaces.util'
import HeaderText from '../../components/partials/ui/HeadingText'
import Text from '../../components/partials/ui/Text'
import useGoTo from '../../hooks/useGoTo'

const Step1: FC<IStep> = ({ onClick }) => {

    const countryRef = useRef<any>(null)
    const { goTo } = useGoTo()

    const [states, setStates] = useState<Array<any>>([])
    const [cities, setCities] = useState<Array<any>>([])

    const [address, setAddress] = useState({
        country: '',
        address: '',
        floor: '',
        postal: '',
        city: '',
        state: ''

    })

    return (
        <div>
            <div className="text-center">
                <HeaderText title='Organization Address' size='lgr' />
                <Text title='Provide few information about your company location' className='mb-0' />
            </div>

            <Divider show={false} padding={{ enable: true, top: 'pt-[0.4rem]', bottom: 'pb-8' }} />
            <div className="md:w-[55%] w-full mx-auto my-0 space-y-[0.65rem]">

                <FormField className="">
                    <TextInput
                        type="email"
                        size="rg"
                        showFocus={true}
                        autoComplete={false}
                        placeholder="address.."
                        isError={alert.name === 'address' ? true : false}
                        label={{
                            required: true,
                            fontSize: 13,
                            title: "Legal Address"
                        }}
                        onChange={(e) => { }}
                    />
                </FormField>

                <FormField className="">
                    <TextInput
                        type="text"
                        size="rg"
                        showFocus={true}
                        autoComplete={false}
                        placeholder="unit 20"
                        label={{
                            required: true,
                            fontSize: 13,
                            title: "Apt / Suite / Floor (Optional)"
                        }}
                        onChange={(e) => { setAddress({ ...address, floor: e.target.value }) }}
                    />
                </FormField>

                <FormField className="w-full">

                    <SelectInput
                        size="rg"
                        showFocus={true}
                        placeholder={{
                            enable: true,
                            value: 'Select'
                        }}
                        isError={false}
                        label={{
                            className: '',
                            fontSize: 13,
                            title: "Country"
                        }}
                        className=""
                        options={helper.listCountries().map((x) => {
                            return {
                                name: helper.capitalizeWord(x.name),
                                display: x.phone,
                                value: x.name,
                            }
                        })}
                        onSelect={(val) => {

                            setAddress({ ...address, country: val.target.value });

                        }}
                    />

                </FormField>

                <FormField className="w-full">

                    <SelectInput
                        size="rg"
                        showFocus={true}
                        placeholder={{
                            enable: true,
                            value: 'Select'
                        }}
                        isError={false}
                        label={{
                            className: '',
                            fontSize: 13,
                            title: "City"
                        }}
                        className=""
                        options={helper.listCountries().map((x) => {
                            return {
                                name: helper.capitalizeWord(x.name),
                                display: x.phone,
                                value: x.name,
                                image: `${URL_FLAG}/${x.code.toLowerCase()}.svg`
                            }
                        })}
                        onSelect={(e) => { }}
                    />

                </FormField>


                <div className="grid md:grid-cols-2 grid-1 gap-3">

                    <FormField className="w-full">

                        <SelectInput
                            size="rg"
                            showFocus={true}
                            placeholder={{
                                enable: true,
                                value: 'Select'
                            }}
                            isError={false}
                            label={{
                                className: '',
                                fontSize: 13,
                                title: "State"
                            }}
                            className=""
                            options={helper.listCountries().map((x) => {
                                return {
                                    name: helper.capitalizeWord(x.name),
                                    display: x.phone,
                                    value: x.name,
                                    image: `${URL_FLAG}/${x.code.toLowerCase()}.svg`
                                }
                            })}
                            onSelect={(e) => { }}
                        />

                    </FormField>


                    <FormField className="pb-2">
                        <TextInput
                            type="text"
                            size="rg"
                            showFocus={true}
                            autoComplete={false}
                            placeholder="code"
                            isError={alert.name === 'email' ? true : false}
                            label={{
                                required: true,
                                fontSize: 13,
                                title: "Postal / Zip Code"
                            }}
                            onChange={(e) => { setAddress({ ...address, postal: e.target.value }) }}
                        />
                    </FormField>

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
                        onClick={(e) => { goTo('/login') }}
                    />
                </FormField>

            </div>
        </div>
    )
}

export default Step1