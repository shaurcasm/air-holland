import React, { useState, useEffect } from 'react';
import moment from 'moment';

import CollapseButton from '../../../CollapseButton';
import EventItem from '../EventItem';


/**
 * DateItem: Functional Component
 * DateItem for today's(system's) date is automatically opened on start.
 * 
 */
export default function DateItem({ date, events }) {
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);

    useEffect(() => {
        const bool = moment(date, 'DD/MM/YYYY').format('DD MM YYYY') === moment().format('DD MM YYYY')
        setShow(bool);

        // To auto scroll(view) to today's date.
        const todayElement = document.getElementById(moment().format('DD/MM/YYYY'));
        if(todayElement) {
            todayElement.scrollIntoView({
                behavior: 'auto',
                block: 'end',
                inline: 'end'
            });
        }
    }, [date])

    return (
        <div className='shadow-sm d-flex flex-column mw-100 w-100'>
            <div className='px-3 py-2 border-top border-bottom date-header d-flex align-items-center justify-content-between'>
                <strong>{moment(date, 'DD/MM/YYYY').format('dd Do MMM. YYYY')}</strong>
                <CollapseButton showing={show} handleClick={toggleShow} />
            </div>
            <ul id={date} className='list-group'>
                {
                    show &&
                    events?.map((object, index) => (
                        <EventItem key={index} details={object} />
                    ))
                }
            </ul>
        </div>
    )
}