type ClimateProps = {
    climateValue: string;
    setClimateValue: (value: string) => void;
};

const Climate = ({ climateValue, setClimateValue }: ClimateProps) => {

    const options: Array<string> = ['Cold', '15-25°C', '25-30°C', 'Warm'];

    return (
        <div className="container px-0" id="budget">
            <h2 className="fw-bold"> Desired Climate </h2>
            <div className="row g-3 pt-3">
                {options.map((value: string, i) => (
                    <div className="col-12 col-md-6" key={i}>
                        <button className={`w-100 ${climateValue === value ? 'selected' : ''}`} onClick={() => setClimateValue(value)}> {value} </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Climate;