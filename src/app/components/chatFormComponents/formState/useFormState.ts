import {Dispatch, SetStateAction, useState} from "react";

interface FormState {
    enterprise: string;
    setEnterprise: Dispatch<SetStateAction<string>>;
    position: string;
    setPosition: Dispatch<SetStateAction<string>>;
    company: string;
    setCompany: Dispatch<SetStateAction<string>>;
    duties: string;
    setDuties: Dispatch<SetStateAction<string>>;
    requirements: string;
    setRequirements: Dispatch<SetStateAction<string>>;
    preferred: string;
    setPreferred: Dispatch<SetStateAction<string>>;
    benefits: string;
    setBenefits: Dispatch<SetStateAction<string>>;
    application: string;
    setApplication: Dispatch<SetStateAction<string>>;
    textAreaValue: string;
    setTextAreaValue: Dispatch<SetStateAction<string>>;
}

export function useFormState(): FormState {
    const [enterprise, setEnterprise] = useState('');
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [duties, setDuties] = useState('');
    const [requirements, setRequirements] = useState('');
    const [preferred, setPreferred] = useState('');
    const [benefits, setBenefits] = useState('');
    const [application, setApplication] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');

    return {
        enterprise,
        setEnterprise,
        position,
        setPosition,
        company,
        setCompany,
        duties,
        setDuties,
        requirements,
        setRequirements,
        preferred,
        setPreferred,
        benefits,
        setBenefits,
        application,
        setApplication,
        textAreaValue,
        setTextAreaValue,
    };
}