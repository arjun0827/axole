import { BsPersonFill } from "react-icons/bs";
import { FaCalendarAlt} from "react-icons/fa"

const RecentPost = (props: { image: string, alt: string }) =>{
    return(
        <div className="recent-post pb-2">
            
          <div className="d-flex">
            <div className="pe-3">
              <img className="recent-post-img rounded" src={props.image} alt= {props.alt} />
            </div>
            <div>
              <div>
                <span className="small text-secondary pe-3">
                  <FaCalendarAlt />
                  Jan.30,2021
                </span>
                <span className="small text-secondary">
                  <BsPersonFill />
                  Admin
                </span>
                <p className="recent-post-para ">Creativity and Inspiration</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default RecentPost