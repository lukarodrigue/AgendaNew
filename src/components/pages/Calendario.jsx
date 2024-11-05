import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "../pages/Components.css";

import eventsDefault from './eventsDefault';

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

function Calendario() {
    const [eventos, setEventos] = useState(eventsDefault);

    const onEventDrop = (data) => {
        const {start, end} = data;
        const updatedEvents = eventos.map((event) =>{
            if(event.id === data.event.id){
                return {
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                }
            }
            return event;
        })
        
        setEventos(updatedEvents)
        
    }

    return (
        <div>
            <DragAndDropCalendar 
                defaultDate={moment().toDate()}
                defaultView='month'
                events={eventos} 
                localizer={localizer}
                onEventDrop={onEventDrop}
                //onEventResize={}
                resizable
                className='calendar'  
            />
        </div>
    );
}

export default Calendario;
