import { useState } from "react";

import Date from "../components/Forms/Date";
import Budget from "../components/Forms/Budget";
import Climate from "../components/Forms/Climate";
import Interests from "../components/Forms/Interests";
import Transportation from "../components/Forms/Transportation";
import Result from "../components/Result";

import { Flex, Progress } from 'antd';

const MultiStepForm = () => {


    const [currentStep, setCurrentStep] = useState(0);

    type DateValue = {
        range: string;
        duration: string;
    };

    const [dateValue, setDateValue] = useState<DateValue>({
        range: '',
        duration: '',
    });

    const [budgetValue, setBudgetValue] = useState("");
    const [climateValue, setClimateValue] = useState("");
    const [interestsValue, setInterestsValue] = useState<string[]>([]);
    const [transportationValue, setTransportationValue] = useState<string[]>([]);

    function renderStep() {
        if (currentStep === 0) return <Date dateValue={dateValue} setDateValue={setDateValue} />;
        if (currentStep === 1) return <Budget budgetValue={budgetValue} setBudgetValue={setBudgetValue} />;
        if (currentStep === 2) return <Climate climateValue={climateValue} setClimateValue={setClimateValue} />;
        if (currentStep === 3) return <Interests interestsValue={interestsValue} setInterestsValue={setInterestsValue} />;
        if (currentStep === 4) return <Transportation transportationValue={transportationValue} setTransportationValue={setTransportationValue} />;
        if (currentStep === 5) {
            const data = {
                date: dateValue,
                budget: budgetValue,
                climate: climateValue,
                interests: interestsValue,
                transportation: transportationValue
            }
            return <Result data={data} />
        }
    }

    function renderFormNav() {
        return (
            <>
                <div className="w-100 d-flex justify-content-end pt-5">
                    <button onClick={() => setCurrentStep(currentStep + 1)}> {currentStep < 4 ? 'Next' : 'Finish'} </button>
                </div>
                <Flex gap="small" vertical>
                    <Progress percent={(currentStep / 5) * 100} showInfo={false} />
                </Flex>
            </>
        )
    }

    return (
        <div className="container mx-3 mx-md-0 px-4 pt-4 pb-2" id="multistep-form">
            {renderStep()}
            {currentStep !== 5 ? renderFormNav() : null}
        </div>
    );
};

export default MultiStepForm;