import React from 'react'
import TimeKeeper from 'react-timekeeper';

const TimeKeepers = ({time, setTime, showTime, setShowTime}) => {

    return (
        <div style={{ position: 'absolute', zIndex: '999' }}>
            {showTime &&
                <TimeKeeper
                    time={time}
                    onChange={(newTime) => setTime(newTime.formatted12)}
                    onDoneClick={() => setShowTime(false)}
                    switchToMinuteOnHourSelect
                />
            }
        </div>
    )
}

export default TimeKeepers