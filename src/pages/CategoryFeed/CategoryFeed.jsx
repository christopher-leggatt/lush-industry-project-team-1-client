import "./_CategoryFeed.scss";
import React from "react";
import { Link } from "react-router-dom";
import wheelChairIcon from "../../assets/icons/wheelchair.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchbarFilter from "../../components/SearchbarFilter/SearchbarFilter";
import { categoriesArray } from "../../utils";
import ChipCarousel from "../../components/ChipCarousel/ChipCarousel";

const CategoryFeed = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const chips = ["New Products", "On Sale", "Halloween Collection", "Under $20", "Best Sellers"];
  const tileLinks = ["bath_bombs", "cleansers_and_scrubs", "hair_treatments", "body_scrubs", "styling", "aroma_and_bath_melts", "makeup", "conditioners"];

  const formatDisplayName = (str) => {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return (
    <section className="category">
      <Link>
        <img
          src={wheelChairIcon}
          alt="/accessibility"
          className="button-icon--accessibility"
        />
      </Link>

      <SearchbarFilter categories={chips} />

      <div className="spacer" style={{margin: "10px 0"}}></div>

      <ChipCarousel array={chips} />
      {/* <div className="chips">
        <div className="chips__1">
          <div className="chips__1--display">New Products</div>
        </div>
        <div className="chips__1">
          <div className="chips__1--display">On Sale</div>
        </div>
        <div className="chips__1">
          <div className="chips__1--display">Halloween Collection</div>
        </div>
        <div className="chips__1">
          <div className="chips__1--display">Under $20</div>
        </div>
        <div className="chips__1">
          <div className="chips__1--display">Best Sellers</div>
        </div>
      </div> */}

      <div className="categoryfeed--inner">
        <div className="categoryfeed__component--parent">
        {tileLinks.map((link, index) => (
            <div 
              key={index}
              className={`categoryfeed__component${index + 1}`}
              onClick={() => navigate(`/category/${link}`)}
            >
              <div className="selection-field" />
              <b className="item-name">{formatDisplayName(link)}</b>
            </div>
          ))}
          {/* <div className="categoryfeed__component">
            <div className="selection-field" />
            <b className="item-name">Bath & Shower</b>
          </div>
          <div className="categoryfeed__component1">
            <div className="selection-field" />
            <b className="item-name">Skincare</b>
          </div>
          <div className="categoryfeed__component2">
            <div className="selection-field" />
            <b className="item-name">Hair</b>
          </div>
          <div className="categoryfeed__component3">
            <div className="selection-field" />
            <b className="item-name">Body</b>
          </div>
          <div className="categoryfeed__component4">
            <div className="selection-field" />
            <b className="item-name">Gifts</b>
          </div>
          <div className="categoryfeed__component5">
            <div className="selection-field" />
            <b className="item-name">Scent</b>
          </div>
          <div className="categoryfeed__component6">
            <div className="selection-field" />
            <b className="item-name">Makeup</b>
          </div>
          <div className="categoryfeed__component7">
            <div className="selection-field" />
            <b className="item-name">Discover</b>
          </div> */}
          <div className="frame-child" />
        </div>
      </div>
    </section>
  );
};

export default CategoryFeed;
