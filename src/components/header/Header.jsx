import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrensCount, setChildrensCount] = useState(0);
  const [roomCount, setRoomCount] = useState(1);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const changeOpenDate = () => {
    setOpenDate(!openDate);
  };

  const changeOpenOption = () => {
    setOpenOption(!openOption);
  }

  const increaseAdultCount = () => {
      setAdultsCount(adultsCount+1);
  }

  const decreaseAdultCount = () => {
    setAdultsCount(adultsCount-1);
  }

  const decreaseChildrentCount = ()=> {
    setChildrensCount(childrensCount-1);
  }

  const increaseChildrenCount = ()=> {
    setChildrensCount(childrensCount+1);
  }

  const decreaseRoomCount = () => {
     setRoomCount(roomCount-1)
  }

  const increaseRoomCount = () => {
    setRoomCount(roomCount + 1)
  }

  return (
    <div className="header">
      <div className={(type === "list" ? "headerContainer headerFromList" : "headerContainer")}>
        <div className="headerList">
          <div className="headerListIcon active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListIcon">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListIcon">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListIcon">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListIcon">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxi</span>
          </div>
        </div>
       {type !== "list" && <> <h1 className="headerTitle">A lifetime of discounts? it's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travel - unlock instance savings of 10% or more
          with a free booking.com account
        </p>
        <button className="headerButton">Sign in / Rigister</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDay} />
            <span
              className="headerSearchText"
              onClick={changeOpenDate}
            >{`${format(date[0].startDate, "dd-MMM-yyyy")} to ${format(
              date[0].endDate,
              "dd-MMM-yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} />
            <span className="headerSearchText" onClick={changeOpenOption}>
            <span className="headerCount">{adultsCount} </span> adults <span className="headerCount">{childrensCount}</span>  childrens <span className="headerCount">{roomCount}</span> room
            </span>
            {openOption && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                <button className="optionCounterButton" onClick={decreaseAdultCount} disabled={adultsCount === 1}>-</button>
                <span className="optionCounterNumber">{adultsCount}</span>
                <button className="optionCounterButton" onClick={increaseAdultCount}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                <button className="optionCounterButton" onClick={decreaseChildrentCount} disabled={childrensCount === 0}>-</button>
                <span className="optionCounterNumber">{childrensCount}</span>
                <button className="optionCounterButton" onClick={increaseChildrenCount}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                <button className="optionCounterButton"  onClick={decreaseRoomCount} disabled={roomCount === 1}>-</button>
                <span className="optionCounterNumber">{roomCount}</span>
                <button className="optionCounterButton" onClick={increaseRoomCount}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerButton">Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
