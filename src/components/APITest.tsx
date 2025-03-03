import React, { useEffect, useState } from 'react'

interface APITestProps {
    returnData: (data: any) => void;
    returnData_2: (data: any) => void;
}

const APITest: React.FC<APITestProps> = ({ returnData, returnData_2 }) => {
    // const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Update docker service
        fetch("https://nahid-sekander.duckdns.org/docker-service/docker/1", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', // Ensure the content type is JSON
                },
            })
            .then(response => response.json())
            .then(fetchedData => {
                console.log(fetchedData);
                // setData(fetchedData);
                // setLoading(false);
                // returnData(fetchedData);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        
        fetch("https://nahid-sekander.duckdns.org/docker-service/docker/2", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', // Ensure the content type is JSON
                },
            })
            .then(response => response.json())
            .then(fetchedData => {
                console.log(fetchedData);
                // setData(fetchedData);
                // setLoading(false);
                // returnData(fetchedData);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        
        fetch("https://nahid-sekander.duckdns.org/docker-service/docker/1")
            .then(response => response.json())
            .then(fetchedData => {
                // setData(fetchedData);
                setLoading(false);
                returnData(fetchedData);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        fetch("https://nahid-sekander.duckdns.org/docker-service/docker/2")
            .then(response => response.json())
            .then(fetchedData => {
                // setData(fetchedData);
                setLoading(false);
                returnData_2(fetchedData);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [returnData, returnData_2]);

    if(loading){
        return <div> Loading...</div>
    }
    
    if(error){
        return <div> Error: </div>
    }

    return <div>APITest Component</div>;
}

export default APITest;

