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
import { calenderSystem, communicationTool, crm, orgSize, phoneProvider, roles, timezones } from '../../_data/seed'

const Step2: FC<IStep> = ({ onClick }) => {

    const { goTo } = useGoTo()

    const [operation, setOperation] = useState({
        size: '',
        team: '',
        role: '',
        calenderType: '',
        crm: '',
        phoneProvider: '',
        communicationTool: '',
        timeZone: ''
    })

    return (
        <div className='overflow-y-scroll'>
            <div className="text-center">
                <HeaderText title='Organization Operation' size='lgr' weight={'semibold'} />
                <Text title='Provide few information about your organization' className='mb-0' />
            </div>

            <Divider show={false} padding={{ enable: true, top: 'pt-[0.4rem]', bottom: 'pb-8' }} />
            <div className="md:w-[55%] w-full mx-auto my-0 space-y-[0.65rem]">

                <FormField className="">

                    <SelectInput
                        size="rg"
                        showFocus={true}
                        placeholder={{
                            enable: true,
                            value: 'Select...'
                        }}
                        isError={false}
                        label={{
                            className: '',
                            fontSize: 13,
                            title: "Organization Size"
                        }}
                        className=""
                        options={orgSize.map((x) => {
                            return {
                                name: helper.capitalizeWord(x.name),
                                value: x.value,
                            }
                        })}
                        onSelect={(e) => { }}
                    />
                </FormField>

                <FormField className="">
                    <TextInput
                        type="text"
                        size="rg"
                        showFocus={true}
                        autoComplete={false}
                        placeholder="Yes"
                        label={{
                            required: false,
                            fontSize: 13,
                            title: "Do you have sales team?"
                        }}
                        onChange={(e) => { setOperation({ ...operation, team: e.target.value }) }}
                    />
                </FormField>

                <FormField className="">

                    <SelectInput
                        size="rg"
                        showFocus={true}
                        placeholder={{
                            enable: true,
                            value: 'Select...'
                        }}
                        isError={false}
                        label={{
                            className: '',
                            fontSize: 13,
                            title: "What roles are you looking to fill ?"
                        }}
                        className=""
                        options={roles.map((x) => {
                            return {
                                name: helper.capitalizeWord(x.name),
                                value: x.value,
                            }
                        })}
                        onSelect={(e) => { setOperation({ ...operation, role: e.target.value }) }}
                    />
                </FormField>

                <FormField className="">

                    <SelectInput
                        size="rg"
                        showFocus={true}
                        placeholder={{
                            enable: true,
                            value: 'Select...'
                        }}
                        isError={false}
                        label={{
                            className: '',
                            fontSize: 13,
                            title: "What Calendar / Booking software do you use ?"
                        }}
                        className=""
                        options={calenderSystem.map((x) => {
                            return {
                                name: helper.capitalizeWord(x.name),
                                value: x.value,
                            }
                        })}
                        onSelect={(e) => { setOperation({ ...operation, calenderType: e.target.value }) }}
                    />
                </FormField>

                <FormField className="">

                    <SelectInput
                        size="rg"
                        showFocus={true}
                        placeholder={{
                            enable: true,
                            value: 'Select...'
                        }}
                        isError={false}
                        label={{
                            className: '',
                            fontSize: 13,
                            title: "What CRM do you use to store your data"
                        }}
                        className=""
                        options={crm.map((x) => {
                            return {
                                name: helper.capitalizeWord(x.name),
                                value: x.value,
                            }
                        })}
                        onSelect={(e) => { setOperation({ ...operation, crm: e.target.value }) }}
                    />
                </FormField>

                <FormField className="">

                    <SelectInput
                        size="rg"
                        showFocus={true}
                        placeholder={{
                            enable: true,
                            value: 'Select...'
                        }}
                        isError={false}
                        label={{
                            className: '',
                            fontSize: 13,
                            title: "What is your phone provider ?"
                        }}
                        className=""
                        options={phoneProvider.map((x) => {
                            return {
                                name: helper.capitalizeWord(x.name),
                                value: x.value,
                            }
                        })}
                        onSelect={(e) => { setOperation({ ...operation, phoneProvider: e.target.value }) }}
                    />
                </FormField>

                <FormField className="">

                    <SelectInput
                        size="rg"
                        showFocus={true}
                        placeholder={{
                            enable: true,
                            value: 'Select...'
                        }}
                        isError={false}
                        label={{
                            className: '',
                            fontSize: 13,
                            title: "What is your internal communication tool ?"
                        }}
                        className=""
                        options={communicationTool.map((x) => {
                            return {
                                name: helper.capitalizeWord(x.name),
                                value: x.value,
                            }
                        })}
                        onSelect={(e) => { setOperation({ ...operation, communicationTool: e.target.value }) }}
                    />
                </FormField>

                <FormField className="">

                    <SelectInput
                        size="rg"
                        showFocus={true}
                        placeholder={{
                            enable: true,
                            value: 'Select...'
                        }}
                        isError={false}
                        label={{
                            className: '',
                            fontSize: 13,
                            title: "What is your time zone"
                        }}
                        className=""
                        options={timezones.map((x) => {
                            return {
                                name: helper.capitalizeWord(x.name),
                                value: x.value,
                            }
                        })}
                        onSelect={(e) => { setOperation({ ...operation, timeZone: e.target.value }) }}
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
                        onClick={onClick}
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

export default Step2