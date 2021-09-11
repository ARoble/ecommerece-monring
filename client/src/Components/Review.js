import { MdStar } from "react-icons/md";
function Review() {
  return (
    <div className="review">
      <div>
        <div className="flex review-user">
          <img src="./../avatar.jpg" alt="avatar" />
          <h4>Abdi Hassan</h4>
        </div>
        <div className="flex review-heading">
          <div>
            <MdStar className="review-star star" />
            <MdStar className="review-star star" />
            <MdStar className="review-star star" />
            <MdStar className="review-star star" />
          </div>
          <b>This product was amazing</b>
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in pretium
        ante.👍🏾👍🏾
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Review;
