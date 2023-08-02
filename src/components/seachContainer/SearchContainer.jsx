import { useState } from "react";
import "./searchContainer.scss"
import { format } from "date-fns";

const SearchContainer = (props) => {
  const [destination, setDestination] = useState(props.location.state.destination);
  const [date, setDate] = useState(props.location.state.date);
  const [adultsCount, setAdultsCount] = useState(props.location.state.adultsCount);
  const [roomCount, setRoomCount] = useState(props.location.state.roomCount);
  const [childrensCount, setChildrensCount] = useState(props.location.state.childrensCount);
  return (
    <>
      <h1 className="lsTitle">Search</h1>
      <div className="lsItem">
        <label className="lsLable">Destination</label>
        <input type="text" name="" value={destination}/>
      </div>
      <div className="lsItem">
        <label className="lsLable">Check in Date</label>
        <span>{`${format(date[0].startDate , "dd-MMM-yyyy")} to ${format(date[0].endDate , "dd-MMM-yyyy")}`}</span>
      </div>
    </>
  )
}

export default SearchContainer