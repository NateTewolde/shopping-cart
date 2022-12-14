import uniqid from "uniqid";

const getStars = (rate) => {
  let blankStars;
  const stars = [];
  for (let i = 0; i <= rate; i++) {
    let extraGold = (Math.round((rate - i) * 10) / 10) * 100;
    let extraGoldPercent;

    if (extraGold === 0) {
      extraGoldPercent = extraGold;
    } else {
      extraGoldPercent = Math.min(Math.max(parseInt(extraGold), 30), 75);
    }

    if (rate - i < 1) {
      blankStars = 4 - stars.length;
      let background;
      if (extraGoldPercent > 50) {
        background = `linear-gradient(to right,  #ffd700, #ffd700 ${extraGoldPercent}%, #333030 ${
          100 - extraGoldPercent
        }%, #333030)`;
      } else {
        background = `linear-gradient(to left,  #333030,#333030 ${
          100 - extraGoldPercent
        }%, #ffd700 ${extraGoldPercent}%, #ffd700)`;
      }
      stars.push(
        <span
          key={uniqid()}
          className="star"
          style={{
            background: `${background}`,
            WebkitBackgroundClip: `text`,
          }}
        >
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span key={uniqid()} className="star">
          &#9733;
        </span>
      );
    }
  }

  for (let j = 0; j < blankStars; j++) {
    stars.push(
      <span key={uniqid()} className="star blank-stars">
        &#9733;
      </span>
    );
  }

  return stars;
};

const StarsRating = ({ rate }) => {
  return <div className="stars-rating">{getStars(rate)}</div>;
};

export default StarsRating;
