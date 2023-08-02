import "./Featured.scss";

const data = [
  {
    id : 1,
    image : "https://cdn.britannica.com/00/156900-050-0F6F1707/building-Bengaluru-India-Karnataka.jpg",
    location : "Bangalore",
    stats : "123 properties"
  },
  {
    id : 2,
    image : "https://media.istockphoto.com/id/508946710/photo/indian-city-of-mangalore.jpg?s=170667a&w=0&k=20&c=kQM2dCmZigrxT7X11gEbDpk1W1NX8B7-XME5v_TvVRU=",
    location : "Mangalore",
    stats : "42 properties"
  },
  {
    id : 1,
    image : "https://g9projects.com/assets/img/misc/mysuru.jpg",
    location : "Mysore",
    stats : "65 properties"
  },
]

const Featured = () => {
  return (
    <div className="featured">
     {data.map(item => <div key={item.id} className="featuredItem">
        <img src={item.image} alt="" />
        <div className="featuredTitles">
            <h1>{item.location}</h1>
            <h2>{item.stats}</h2>
        </div>
      </div>)} 
    </div>
  )
}

export default Featured