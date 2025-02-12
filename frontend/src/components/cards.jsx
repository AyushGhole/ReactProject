import "../styles/cards.css";
import foodData from "../data";

function Cards() {
  return (
    <>
      <div className="head">
        <h4 style={{ margin: "1rem" }}>Top Dishes From Our House !!</h4>
      </div>
      <div className="container">
        {foodData.map((food) => (
          <div className="card" style={{ width: "18rem" }} key={food.id}>
            <img
              src={`${food.image}`}
              className="card-img-top"
              alt="foodImage"
            />
            <div className="card-body">
              <p className="card-text">
                <b>{food.name}</b>
              </p>
              <i className="fa-solid fa-star"></i>
              <small>
                <b> {food.rating}/5</b>
              </small>
              <p className="card-text brief">{food.brief}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
