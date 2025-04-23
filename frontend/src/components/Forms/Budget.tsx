type BudgetProps = {
    budgetValue: string;
    setBudgetValue: (value: string) => void;
};

const Budget = ({ budgetValue, setBudgetValue }: BudgetProps) => {

    const options: Array<string> = ['150-300€', '300-500€', '500-800€', 'Lak Sho Geld'];

    return (
        <div className="container px-0" id="budget">
            <h2 className="fw-bold"> Your Budget </h2>
            <div className="row g-3 pt-3">
                {options.map((value: string, i) => (
                    <div className="col-12 col-md-6" key={i}>
                        <button className={`w-100 ${budgetValue === value ? 'selected' : ''}`} onClick={() => setBudgetValue(value)}> {value} </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Budget;