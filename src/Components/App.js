import React, { useState } from 'react';
import TimerList from './TimerList.jsx';
import Timer from './Timer.jsx';
import Title from './Title.jsx';
import { context } from '../Context/Context.jsx';

const App = () => {
    const [timeArray, setTimeArray] = useState([]);

    return (
        <context.Provider value={{
            timeArray,
            setTimeArray,
        }}>
          <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="max-w-sm mx-auto animate-show">
                    <Title />
                    <Timer />
                    <TimerList />
                </div>
            </div>
        </context.Provider>
    );
};

export default App;