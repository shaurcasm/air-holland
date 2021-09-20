import React, { useState } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlane, faSuitcase,
    faPaste, faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';


const STANDBY = 'SBY';
const FLIGHT = 'FLT';
const LAYOVER = 'OFD';
const DAYOFF = 'DO';
const iconography = {
    'DO': {icon: faSuitcase},
    'FLT': {icon: faPlane, props: {transform: {rotate: "315"}}},
    'OFD': {icon: faSuitcase},
    'SBY': {icon: faPaste},
    'POS': {icon: faMapMarkerAlt}
};
export default function EventItem({ details }) {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);

    return (
        <div className={classnames('list-group-item py-3 event-item', {'event-active': active})} onClick={() => (details?.DutyID === DAYOFF || details?.DutyID === LAYOVER || details?.DutyID === STANDBY) ? null : toggleActive()} style={{cursor: (details?.DutyID === DAYOFF || details?.DutyID === LAYOVER || details?.DutyID === STANDBY) ? 'initial' : 'pointer'}}>
            <div className='d-flex w-100'>
                <FontAwesomeIcon icon={iconography[details?.DutyID]?.icon} size='3x' className='' {...iconography[details?.DutyID]?.props} />
                <div className='d-flex flex-column ms-1 ms-md-3'>
                    {
                        details?.DutyID === FLIGHT ? (
                            <h4 className='font-weight-bold'>
                                {details?.Departure} - {details?.Destination}
                            </h4>
                        ) : (
                            details?.DutyID === DAYOFF ? (
                                <h4 className='font-weight-bold text-capitalize text-success'>
                                    {details?.DutyCode}
                                </h4>
                            ) : (
                                <>
                                    <h4 className='mb-0 font-weight-bold text-capitalize'>
                                        {details?.DutyCode}
                                    </h4>
                                    {
                                        details?.Departure &&
                                        <div className='text-muted'>
                                            {details?.Departure} {details?.Destination && `(${details?.Destination})`}
                                        </div>
                                    }
                                </>
                            )
                        )
                    }
                </div>
                {
                    details?.DutyID !== DAYOFF &&
                    <div className='ms-auto align-self-end d-flex flex-column'>
                        {
                            details?.DutyID === STANDBY &&
                            <div className='text-muted text-center'>
                                Match Crew
                            </div>
                        }
                        <div className='mt-auto text-danger'>
                            {
                                details?.DutyID === LAYOVER ? (
                                    moment(details?.Time_Arrive, 'hh:mm:ss').subtract(moment(details?.Time_Depart, 'hh:mm:ss')).format('hh:mm')
                                ) : (
                                    `${details?.Time_Depart} - ${details?.Time_Arrive}`
                                )
                            }
                        </div>
                    </div>
                }
            </div>
            {
                active &&
                <div className='mt-3 row row-cols-2'>
                    {
                        details?.Flightnr &&
                        <div className='col text-center py-2'>
                            <span className='font-weight-bold'>Flight No. : </span>
                            <span>{details?.Flightnr}</span>
                        </div>
                    }
                    {
                        details?.["Aircraft Type"] &&
                        <div className='col text-center py-2'>
                            <span>Aircraft : </span>
                            <span>{details?.["Aircraft Type"]}</span>
                        </div>
                    }
                    {
                        details?.["Captain"] &&
                        <div className='col text-center py-2'>
                            <span>Captain : </span>
                            <span>{details?.["Captain"]}</span>
                        </div>
                    }
                    {
                        details?.["Flight Attendant"] &&
                        <div className='col text-center py-2'>
                            <span>Flight Attendant : </span>
                            <span>{details?.["Flight Attendant"]}</span>
                        </div>
                    }
                </div>
            }
        </div>
    )
}