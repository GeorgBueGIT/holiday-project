type TransportationProps = {
    transportationValue: Array<string>;
    setTransportationValue: (value: Array<string>) => void;
};

const Transportation = ({ transportationValue, setTransportationValue }: TransportationProps) => {

    const options: Array<string> = ['Car', 'Train', 'Flight', 'Flexible'];


    function toggleSelection(value: string) {
        if (!transportationValue.includes(value)) {
            setTransportationValue([...transportationValue, value]);
        } else {
            setTransportationValue(transportationValue.filter((item) => item !== value));
        }
    }

    return (
        <div className="container px-0" id="budget">
            <h2 className="fw-bold"> Method of Transportation (Select multiple) </h2>
            <div className="row g-3 pt-3">
                {options.map((value: string, i) => (
                    <div className="col-12 col-md-6" key={i}>
                        <button className={`w-100 ${transportationValue.includes(value) ? 'selected' : ''}`} onClick={() => toggleSelection(value)}> {value} </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transportation;