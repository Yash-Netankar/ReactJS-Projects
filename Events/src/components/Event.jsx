import axios from "axios";
import React from "react";

const Event = (props) => {
  let date = new Date().getDate().toLocaleString();
  let month = new Date().getMonth() + 1;
  
  if(month<10)
    month="0"+month
  let todayDate = `${date}/${month}`;
  
  let cnt = 0;

   props.events.map((e) => {
     return todayDate === e.date ? cnt++ : null;
   });

  const Del = async(id)=>{
    await axios.delete(`http://localhost:3003/users/${id}`)
    props.getData();
  }

  const getData = ()=> {
    return props.events.map((event, i) =>
      event.date === todayDate ? (
        <div className="event">
          <h2 key={i}>{event.eventName}</h2>
          <button className="del-btn" onClick={()=>Del(event.id)}>
            <i className="material-icons" title="Deletes permanently" >delete</i>
          </button>
        </div>
      ) : null
    );
  }
  if (cnt >= 1) return getData();
  return <h1 className="event-name">No Events Found</h1>;
};
export default Event;
