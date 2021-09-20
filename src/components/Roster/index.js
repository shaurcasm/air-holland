import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { fetchRoster, flushRoster } from '../../store/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import InfiniteScroll from 'react-infinite-scroll-component';

import { groupByDate } from '../../utils';
import DateItem from './components/DateItem';


function Roster({ roster, error, getRoster, flushRosterState }) {
    const [localError, setLocalError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRoster();

        return () => {
            flushRosterState();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchRoster = () => {
        setLoading(true);

        getRoster().then(response => {

        }).catch(err => {
            console.log(err.message);
            setLocalError(err.message);
        }).finally(() => {
            setLoading(false);
        });
    }

    const grouped = useMemo(() => groupByDate(roster), [roster]);

    if(loading) {
        return (
            <div className='text-center text-primary'>
                <FontAwesomeIcon icon={faCompass} spin size='2x' />
            </div>
        )
    }

    if(localError || error) {
        return (
            <div className='text-center text-danger'>
                {localError || error}
            </div>
        )
    }

    return (
        <InfiniteScroll
            dataLength={20}
            hasMore={false}
            scrollableTarget='scrollableTarget'
            className='mw-100 w-100 border-top border-bottom border-3 '
            refreshFunction={fetchRoster}
            pullDownToRefresh
            pullDownToRefreshThreshold={30}
            pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            }
            releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            }
        >
            {
                Object.keys(grouped).map(date => (<DateItem key={date} date={date} events={grouped[date]} />))
            }
        </InfiniteScroll>
    )
}


const mapStateToProps = state => ({
    roster: state.roster.roster,
    error: state.roster.error
});

const mapDispatchToProps = dispatch => ({
    getRoster: () => dispatch(fetchRoster()),
    flushRosterState: () => dispatch(flushRoster())
});


export default connect(mapStateToProps, mapDispatchToProps)(Roster)