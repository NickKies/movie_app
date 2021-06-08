import React, {useRef} from 'react';

const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = isFull => {
        if ( callback && typeof callback === 'function' ) {
            callback(isFull);
        }
    };

    const triggerFull = () => {
        if ( element.current ) {
            if ( element.current.requestFullscreen ) {
                element.current.requestFullscreen();
            } else if ( element.current.mozRequestFullScreen ) {
                element.current.mozRequestFullScreen();
            } else if ( element.current.webkitRequestFullscreen ) {
                element.current.webkitRequestFullscreen();
            } else if ( element.current.msRequestFullscreen ) {
                element.current.msRequestFullscreen();
            }
            runCb(true);
        }
    };
    const exitFull = () => {
        if ( document.exitFullscreen ) {
            document.exitFullscreen();
        } else if ( document.mozCancelFullScreen ) {
            document.mozCancelFullScreen();
        } else if ( document.webkitExitFullscreen ) {
            document.webkitExitFullscreen();
        } else if ( document.msExitFullscreen ) {
            document.msExitFullscreen();
        }
        runCb(false);
    };

    return { element, triggerFull, exitFull };
}

const UseFullscreen = () => {
    const onFullS = isFull => {
        console.log(isFull? 'full' : 'small');
    }
    const {element, triggerFull, exitFull } = useFullscreen(onFullS);
    return (
        <div className="about__container">
            <div ref={element}>
                <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"/>
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
}

export default UseFullscreen;