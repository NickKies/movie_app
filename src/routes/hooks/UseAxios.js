import React, {useEffect, useState} from 'react';
import defaultAxios from 'axios';

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [ trigger, setTrigger ] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    }
    useEffect(() => {
        axiosInstance(opts)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data
            });
        }).catch(error => {
            setState({...state, loading: false, error });
        });
    }, [trigger]);
    return { ...state, refetch };
};

const UseAxios = () => {
    const { loading, data, error, refetch } = useAxios({url: 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'});
    return (
        <div className="about__container">
            <h1>{data && data.status}</h1>
            <h2>{loading && 'Loading'}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}

export default UseAxios;