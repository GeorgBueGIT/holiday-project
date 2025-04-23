import { useState } from "react";
import Date from "./Forms/Date";
import Budget from "./Forms/Budget";
import Climate from "./Forms/Climate";
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

    console.log("Date Value: ", dateValue);
    const [budgetValue, setBudgetValue] = useState("");
    const [climateValue, setClimateValue] = useState("");

    function renderStep() {
        if (currentStep === 0) return <Date dateValue={dateValue} setDateValue={setDateValue} />;
        if (currentStep === 1) return <Budget budgetValue={budgetValue} setBudgetValue={setBudgetValue} />;
        if (currentStep === 2) return <Climate climateValue={climateValue} setClimateValue={setClimateValue} />;
    }

    console.log("Budget Value: ", budgetValue);

    return (
        <div className="container mx-3 mx-md-0 px-4 pt-4 pb-2" id="multistep-form">
            {renderStep()}
            <div className="w-100 d-flex justify-content-end pt-5">
                <button onClick={() => setCurrentStep(currentStep + 1)}> Next </button>
            </div>
            <Flex gap="small" vertical>
                <Progress percent={(currentStep / 2) * 100} showInfo={false} />
            </Flex>

        </div>
    );
};

export default MultiStepForm;