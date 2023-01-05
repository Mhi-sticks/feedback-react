// import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("example of feedback text");
  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 1  ;
  //     });
  //   };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  id: PropTypes.object.isRequired,
};

export default FeedbackItem;
