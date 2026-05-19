import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { FaStar } from "@fortawesome/free-solid-svg-icons";

function Star(props) {
  return (
        <FontAwesomeIcon 
            icon={faStar} 
            className={`star ${props.filled ? 'filled' : ''}`}
            onClick={props.onClick}
        />
  );
}

export default Star;
