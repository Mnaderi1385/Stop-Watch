import React, { useContext } from 'react';
import { context as c} from '../Context/Context.jsx';
const Item = (props) => {
    const context = useContext(c);
    const deleteItem = (e) => {
        context.setTimeArray(context.timeArray.filter((item) => item !== e.target.innerHTML ));
    };

    return (
        <li className="list-disc list-inside text-gray-300 hover:text-white cursor-pointer animate-[show_.4s_ease-in-out]" onClick={deleteItem}>
            {props.item}
        </li>
    );
};

export default Item;