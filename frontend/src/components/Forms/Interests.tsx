type InterestsProps = {
    interestsValue: Array<string>;
    setInterestsValue: (value: Array<string>) => void;
};

const Interests = ({ interestsValue, setInterestsValue }: InterestsProps) => {

    const options: Array<string> = ['Music', 'Nature', 'Culture', 'Sightseeing', 'Beaches', 'Culinary Experiences', 'Shopping', 'Adventure', 'Nightlife'];

    function toggleSelection(value: string) {
        if (!interestsValue.includes(value)) {
            setInterestsValue([...interestsValue, value]);
        } else {
            setInterestsValue(interestsValue.filter((item) => item !== value));
        }
    }

    return (
        <div className="container px-0" id="budget">
            <h2 className="fw-bold"> Interests (Select multiple) </h2>
            <div className="row g-3 pt-3">
                {options.map((value: string, i) => (
                    <div className="col-12 col-md-6" key={i}>
                        <button className={`w-100 ${interestsValue.includes(value) ? 'selected' : ''}`} onClick={() => toggleSelection(value)}> {value} </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interests;