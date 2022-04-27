import React from 'react';
import Swal from 'sweetalert2';
import { context } from '../Context/Context';

let interval;
class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false,
        };
    };
    static contextType = context;
    startTimer = () => {
        if(this.state.isStart === false) {
            this.setState({ 
                isStart: true,
            });
            interval = setInterval(() => {
                this.setState({ second: this.state.second + 1 });
                
                if(this.state.second === 60) {
                    this.setState({
                        second: 0,
                        minute: this.state.minute + 1,
                    });
                };
                if(this.state.minute === 60) {
                    this.setState({
                        minute: 0,
                        hour: this.state.hour + 1,
                    });
                };
            }, 900);
        };
    };
    stopTimer = () => {
        clearInterval(interval);
        this.setState({ isStart: false });
    };
    resetTimer = () => {
        this.stopTimer();
        this.setState({
            hour: 0,
            minute: 0,
            second: 0,
        });
    };
    saveTime = () => {
        if(this.state.isStart || this.state.hour > 0 || this.state.minute > 0 || this.state.second > 0) {
            let h = this.state.hour;
            let m = this.state.minute;
            let s = this.state.second;

            let newTime = `${h > 9 ? h : '0' + h} : ${m > 9 ? m : '0' + m} : ${s > 9 ? s : '0' + s}`;
            this.context.setTimeArray([...this.context.timeArray, newTime]);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error ...',
                text: "You can't save the time because the timer has not started",
                showLoaderOnConfirm: false,
                showConfirmButton: false,
                timer: 5500,
            });
        }
    };

    render() {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
        return (
            
            <>
                <p className="text-center text-gray-100 my-3 animate-bounce">
                    The Timer Is <span className={(this.state.isStart) === false ? 'text-red-500 font-bold' : 'text-green-500 font-bold'}>{(this.state.isStart) === false ? 'Stoped' : 'Started'}</span>
                </p>
                <p className="bg-slate-800 text-center cursor-pointer text-gray-100 text-2xl mt-1 animate-pulse shadow-md select-none shadow-slate-900 flex justify-center items-center w-48 py-3 px-7 rounded-lg mx-auto hover:shadow-lg" onClick={this.saveTime}>
                    {`${h > 9 ? h : '0' + h} : ${m > 9 ? m : '0' + m} : ${s > 9 ? s : '0' + s}`}
                </p>

                <div className="flex flex-row items-center">
                    <button type="button" className={`bg-green-800 text-white px-4 py-2 select-none text-sm mt-5 ml-3 shadow-sm shadow-green-700 hover:shadow-md focus:ring-4 ring-green-600 rounded-lg flex justify-center items-center ${(this.state.isStart) ? 'pointer-events-none opacity-40 duration-200' : 'pointer-events-auto'}`} title="Start" onClick={this.startTimer}>Start</button>
                    <button type="button" className={`bg-red-800 text-white px-4 py-2 select-none text-sm mt-5 ml-3 shadow-sm shadow-red-700 hover:shadow-md focus:ring-4 ring-red-600 rounded-lg flex justify-center items-center ${(this.state.isStart) === false ? 'pointer-events-none opacity-40 duration-200' : 'pointer-events-auto'}`} title="Stop" onClick={this.stopTimer}>Stop</button>
                    <button type="button" className={`bg-sky-800 text-white px-4 py-2 select-none text-sm mt-5 ml-3 shadow-sm shadow-sky-700 hover:shadow-md focus:ring-4 ring-sky-600 rounded-lg flex justify-center items-center`} title="Reset" onClick={this.resetTimer}>Reset</button>
                </div>
            </>
        )
    };
};

export default Timer;