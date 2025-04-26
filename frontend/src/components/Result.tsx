import { useState } from "react";
import { Spin } from 'antd';

// Auslagern in Interface oder Klasse (dann ist besser zu bearbeiten und schöner)
type ResultProps = {
    data: {
        date: {
            range: string;
            duration: string;
        };
        budget: string;
        climate: string;
        interests: string[];
        transportation: string[];
    };
};

const Result = ({ data }: ResultProps) => {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState('');

    const getResponse = async () => {
        try {
            const res = await fetch('/.netlify/functions/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: data }),
            })

            const response = await res.json();

            setResponse(response.message);
        } catch (error) {
            console.error('Fehler beim Senden der Nachricht:', error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        getResponse();
        return (
            <div className="d-flex justify-content-center align-items-center" id="result">
                <Spin size="large" />
            </div>
        );
    } else {
        return (
            <div className="d-flex justify-content-center align-items-center" id="result">
                <h1> {response} </h1>
            </div>
        );
    }
};

export default Result;