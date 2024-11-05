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
    const [eventos, setEventos] = useState(eventsDefault);
    const [eventosSelecionados, SeteventosSelecionados] = useState(null);
    const MoverEventos = (data) => {
        const { start, end } = data;
        const updatedEvents = eventos.map((event) => {
            if (event.id === data.event.id) {
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

    const handleEventClick = (evento) => {
        SeteventosSelecionados(evento);
    }

    const ClosehandleEventClick = (evento) => {
        SeteventosSelecionados(null);
    }
    

    return (
        <div>
            <DragAndDropCalendar
                defaultDate={moment().toDate()}
                defaultView='month'
                events={eventos}
                localizer={localizer}
                onEventDrop={MoverEventos}
                onEventResize={MoverEventos}
                resizable
                onSelectEvent={handleEventClick}
                className='calendar'
            />

            {eventosSelecionados && (
                <EventModal 
                evento = {eventosSelecionados}
                onClose={ClosehandleEventClick}
                />
            )}

        </div>
    );
}

export default Calendario;
