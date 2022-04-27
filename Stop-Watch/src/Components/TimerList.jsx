import { useContext } from 'react';
import Item from './Item';
import { context as c} from '../Context/Context';

const TimerList = (props) => {
    // Context
    const context = useContext(c);

    return (
        <div className="w-full mt-6">
            <ul className="text-white px-8 py-3 rounded-md list-disc">
                {
                    context.timeArray.map((item) => (
                        <Item 
                            key={Math.random()} 
                            item={item}
                        />
                    ))
                }
            </ul>
        </div>
    )
};

export default TimerList;