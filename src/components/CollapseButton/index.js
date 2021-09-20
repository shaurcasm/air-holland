import React, {  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';


// Adding type explicitly to prevent errors; in case this button is used inside a form.
export default function CollapseButton({ autofocus, showing, handleClick, buttonClassName }) {
    
    return (
        <button autoFocus={autofocus} type='button' onClick={() => handleClick()} className={buttonClassName || 'btn btn-link p-0 collapse-button text-decoration-none'} >
            {
                showing ? (
                    <FontAwesomeIcon icon={faAngleDoubleUp} size='lg' />
                ) : (
                    <FontAwesomeIcon icon={faAngleDoubleDown} size='lg' />
                )
            }
        </button>
    )
}