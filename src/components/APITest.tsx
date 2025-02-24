import React, { useEffect, useState } from 'react'

// export default function APITest() {
const APITest = ({returnData, returnData_2}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://nahid-sekander.duckdns.org/dk/docker/1")
            .then(response => response.json())
            .then(fetchedData => {
                setData(fetchedData);
                setLoading(false);
                returnData(fetchedData);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        fetch("https://nahid-sekander.duckdns.org/dk/docker/2")
            .then(response => response.json())
            .then(fetchedData => {
                setData(fetchedData);
                setLoading(false);
                returnData_2(fetchedData);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    // }, []);
    }, [returnData, returnData_2]);

    if(loading){
        return <div> Loading...</div>
    }
    
    if(error){
        return <div> Error: </div>
    }
        // console.log(data);


//   return null;
    return <div>APITest Component</div>;

    // <div>
    //     {/* <h1>APITest</h1> */}
    //     {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}





    // </div>
  
}

export default APITest;

