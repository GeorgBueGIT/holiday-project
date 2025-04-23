import { DatePicker } from 'antd';
import { Input } from 'antd';

const { RangePicker } = DatePicker;

type DateValue = {
    range: string;
    duration: string;
};

type DateProps = {
    dateValue: object;
    setDateValue: (value: DateValue) => void;
};

const Date = ({ dateValue, setDateValue }: DateProps) => {

    function setRange(value: string) {
        setDateValue({
            ...dateValue,
            range: value,
            duration: (dateValue as DateValue).duration || '',
          });
    }

    function setDurationValue(value: string) {
        setDateValue({
            ...dateValue,
            range: (dateValue as DateValue).range || '',
            duration: value,
          });
    }

    return (
        <div className="container px-0" id="budget">
            <h2 className="fw-bold"> Select a desired Date </h2>
            <div className="row gy-3 mx-0 pt-3">
                <RangePicker
                    format={'DD-MM-YYYY'}
                    onChange={(value) => {
                        setRange(value?.[0] && value?.[1] ? `${value[0].format('DD-MM-YYYY')} - ${value[1].format('DD-MM-YYYY')}` : '');
                    }}
                />
                <Input
                    placeholder="Duration"
                    className='w-50'
                    onChange={(e) => setDurationValue(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Date;