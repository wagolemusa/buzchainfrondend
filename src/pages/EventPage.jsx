import React from "react";
import Header from "../componets/Layout/Headers";
import EventCard from "../componets/Events/EventCard";

const EventPage = () => {

    return(
       <div>

        <Header activeHeading={4}/>
        <EventCard active={true}/>
        <EventCard active={true}/>
       </div>
    )
}


export default EventPage;




