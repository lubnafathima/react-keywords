import React from "react";

const KeywordsCard = (props) => {
    const { keyword } = props;
  return (
    <div key={keyword.id} className="card">
      <h2 className="card_title">{keyword}</h2>
    </div>
  );
};

export default KeywordsCard;
