import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <div className="header">
            <FontAwesomeIcon icon={faEarth} className="earth" />
            <p>my travel journal.</p>

        </div>
    )

}

export default Header