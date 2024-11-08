import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "../Components.css";
import EventModal from "../EventModal"

import eventsDefault from './EventsDefault';

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

function Calendario() {
    const [events, setEvents] = useState(eventsDefault);
    const [eventsSelect, setEventsSelect] = useState(null);
    const MoverEventos = (data) => {
        const { start, end } = data;
        const updatedEvents = events.map((event) => {
            if (event.id === data.event.id) {
                return {
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                }
            }
            return event;
        })

        setEvents(updatedEvents)
    }

    const handleEventClick = (evento) => {
        setEventsSelect(evento);
    }

    const ClosehandleEventClick = () => {
        setEventsSelect(null);
    }


    return (
        <div>
            <DragAndDropCalendar
                defaultDate={moment().toDate()}
                defaultView='month'
                events={events}
                localizer={localizer}
                onEventDrop={MoverEventos}
                onEventResize={MoverEventos}
                resizable
                onSelectEvent={handleEventClick}
                className='calendar'
            />

            {eventsSelect && (
                <EventModal
                    evento={eventsSelect}
                    onClose={ClosehandleEventClick}
                />
            )}

        </div>
    );
}

export default Calendario;
