import "./Featured.scss"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cdn.britannica.com/00/156900-050-0F6F1707/building-Bengaluru-India-Karnataka.jpg" alt="" />
        <div className="featuredTitles">
            <h1>Bangalore</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://media.istockphoto.com/id/508946710/photo/indian-city-of-mangalore.jpg?s=170667a&w=0&k=20&c=kQM2dCmZigrxT7X11gEbDpk1W1NX8B7-XME5v_TvVRU=" alt="" />
        <div className="featuredTitles">
            <h1>Mangalore</h1>
            <h2>42 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://g9projects.com/assets/img/misc/mysuru.jpg" alt="" />
        <div className="featuredTitles">
            <h1>Mysore</h1>
            <h2>65 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured