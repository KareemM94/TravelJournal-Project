import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Card(props) {
  return (
    <div className="location-card">
      <div className="location-image">
        <img src={props.item.imageUrl} alt="" />
      </div>
      <div className="location-data">
        <div className="location">
        <FontAwesomeIcon icon={faLocationDot} className="locationDot"/><p className="country">{props.item.location}</p> <p className="google-location">View on Google Maps.</p>
        </div>
        <div className="location-name">
          <h3>{props.item.title}</h3>
        </div>
        <div className="location-date">
          <p>{props.item.startDate} - {props.item.endDate}</p>
        </div>
        <div className="location-info">
          <p>
            {props.item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;