import React from 'react';

const useConfirm = (message, callback, rejection) => {
    return () => {
        if (window.confirm(message)) {
            callback();
        } else {
            rejection();
        }
    };
}

const UseConfirm = () => {
    const deleteWorld = () => console.log('deleting the world');
    const abort = () => console.log('abort')
    const confirmDelete = useConfirm('R U sure?', deleteWorld, abort);
    return (
        <div className="about__container">
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
};

export default UseConfirm;