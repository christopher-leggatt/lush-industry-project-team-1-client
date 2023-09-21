import "./_CategorizedItems.scss";
import React, { useState, useEffect } from "react";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { ReactComponent as Wheelchair } from "../../assets/icons/wheelchair.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils";
import { getCategorizedProducts } from "../../state/storeSlice";
import SearchbarFilter from "../../components/SearchbarFilter/SearchbarFilter";
import ItemTile from "../../components/ItemTile/ItemTile";
import { categoriesArray, formatName } from "../../utils";
import ChipCarousel from "../../components/ChipCarousel/ChipCarousel";

const CategorizedItems = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categorizedProducts = useSelector(
    (state) => state?.store?.categorizedProducts
  );

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (category) {
      dispatch(getCategorizedProducts(category));
    }
  }, [category]);

  function goBack() {
    navigate(-1);
  }

  categorizedProducts &&
    categorizedProducts.length > 0 &&
    console.log("Categorized products:", categorizedProducts);

  return (
    <section className="category">
      <div className="category__back-accessibility-wrapper">
        <button className="category__back-btn" onClick={goBack}>
          <Back className="category__back-icon" />
        </button>
        <button className="category__accessibility-btn">
          <Wheelchair className="category__accessibility-icon" />
        </button>
      </div>

      <SearchbarFilter categories={categoriesArray} />

      <h1 className="category__heading">{formatName(category) || "Loading"}</h1>

      <ChipCarousel array={categoriesArray} />

      <div className="item-tile-wrapper">
        {categorizedProducts?.map((categorizedProduct, index) => (
          <ItemTile
            key={`item-tile-${index}`}
            product={categorizedProduct}
            size="large"
          />
        ))}
      </div>
    </section>
  );
};

export default CategorizedItems;
