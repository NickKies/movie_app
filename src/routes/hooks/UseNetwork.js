import React, {useEffect, useState} from 'react';

const useNetwork = onchange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        setStatus(navigator.onLine);
    };
    useEffect(() => {
       window.addEventListener('online', handleChange);
       window.addEventListener('offline', handleChange);
       /*window.removeEventListener('online', handleChange);
       window.removeEventListener('online', handleChange);*/
    }, []);
    return status;
}

const UseNetwork = () => {
    const handleNetworkChange = (online) => {
        console.log(online? 'We just went online' : 'we are online')
    }
    const online = useNetwork();
    handleNetworkChange();
    return (
        <div className="about__container">
            <h1>{online ?  'Online' : 'Offline'}</h1>
        </div>
    );
};

export default UseNetwork;