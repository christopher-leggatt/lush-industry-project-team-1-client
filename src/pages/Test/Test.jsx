import React from "react";
import ItemTile from "../../components/ItemTile/ItemTile";

const Test = () => {
  const product = {
    price: 15,
    name: "Test",
    image_url: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    id: 1,
  };

  return (
    <div>
      <ItemTile product={product} size="small" />
    </div>
  );
};

export default Test;
