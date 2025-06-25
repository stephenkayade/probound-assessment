import { FC, useMemo, useEffect } from 'react';
import Icon from '../../partials/icons/Icon';

interface IPasswordCheck {
    password?: string;
    onValidChange?: (isValid: boolean) => void;
}

const PasswordCheck: FC<IPasswordCheck> = ({ password = '', onValidChange }) => {
    const checks = useMemo(() => {
        return {
            lengthCheck: password.length >= 8,
            lowercaseCheck: /[a-z]/.test(password),
            uppercaseCheck: /[A-Z]/.test(password),
            numberCheck: /[0-9]/.test(password),
            specialCharCheck: /[!@#$%^&*]/.test(password),
        };
    }, [password]);

    const allPassed = Object.values(checks).every(Boolean);

    useEffect(() => {
        if (onValidChange) {
            onValidChange(allPassed);
        }
    }, [allPassed, onValidChange]);

    const getIcon = (valid: boolean) => ({
        name: valid ? 'check' : 'x',
        color: valid ? '#16A34A' : '#DC2626',
    });

    return (
        <div className='w-full min-h-[200px] border border-[#E6E7EB] p-4 rounded-lg bg-white z-50'>
            <h3 className='text-xs text-[#5B5C6E] mb-3'>Your password must contain:</h3>

            {[
                { label: 'At least 8 characters', valid: checks.lengthCheck },
                { label: 'Lowercase letters (a-z)', valid: checks.lowercaseCheck },
                { label: 'Uppercase letters (A-Z)', valid: checks.uppercaseCheck },
                { label: 'Numbers (0-9)', valid: checks.numberCheck },
                { label: 'Special characters (e.g. !@#$%^&*)', valid: checks.specialCharCheck },
            ].map(({ label, valid }) => {
                const icon = getIcon(valid);
                return (
                    <div key={label} className='flex items-center gap-2 mb-2'>
                        <Icon type='feather' name={icon.name} style={{ color: icon.color }} />
                        <p className='text-sm'>{label}</p>
                    </div>
                );
            })}

            {allPassed && (
                <div className='mt-3 p-2 bg-green-100 text-green-700 rounded text-sm'>
                    ✅ Your password meets all requirements!
                </div>
            )}
        </div>
    );
};

export default PasswordCheck;
