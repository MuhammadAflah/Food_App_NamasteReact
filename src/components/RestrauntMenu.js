import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMAGE_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faStopwatch,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import RestrauntMenuShimmer from "./RestrauntMenuShimmer";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restuarent, setRestuarent] = useState({});
    const [restaurantCards, setRestaurantCards] = useState({})
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&submitAction=ENTER`
        );
        const json = await data.json();
        console.log(json.data);
        setRestuarent(json?.data?.cards[0]?.card?.card?.info);
        setRestaurantCards(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1)[0]?.card?.card)
        setIsLoaded(true);
    }

    if (!restuarent) return null;

    return !isLoaded ? (
        <RestrauntMenuShimmer />
    ) : (
        <>
            <div className="restaurant-info">
                <div>
                    <img
                        className="res-image"
                        src={IMAGE_CDN_URL + restuarent?.cloudinaryImageId}
                    />
                </div>
                <div className="res-details">
                    <h5 className="res-name">{restuarent?.name}</h5>
                    <p className="res-cuisines">{restuarent?.cuisines.join(",")}</p>
                    <p className="res-locality">{restuarent?.locality}</p>
                    <div className="res-ratings">
                        <p>
                            {restuarent?.avgRatingString} ⭐
                        </p>
                        <p>
                            {" "}
                            {restuarent?.sla?.slaString}
                        </p>
                        <p>
                            {restuarent?.costForTwoMsg}
                        </p>
                    </div>
                </div>
                <div className="res-offers">
                    <p className="offers">Offers : </p>
                    <p>{restuarent?.aggregatedDiscountInfo?.descriptionList[0].meta} </p>
                    <p>{restuarent?.aggregatedDiscountInfo?.descriptionList[1].meta} </p>
                </div>
            </div>


            {restaurantCards.itemCards.length > 0 ? (
                <div className="relatedItems">
                    <div className="head">
                        <h2>Menu</h2>
                        <h3>{restaurantCards?.title}</h3>
                    </div>
                    {restaurantCards?.itemCards?.map((item) => (
                        <div className="item-container" key={item?.card?.info?.id}>
                            {item?.card?.info?.imageId === "" || !item?.card?.info?.imageId ? null : (
                                <div className="item">
                                    <div className="item-description">
                                        <p className="item-name">{item?.card?.info?.name}</p>
                                        <p className="item-description">${item?.card?.info?.price}</p>
                                        <p className="item-description">{item?.card?.info?.description}</p>
                                    </div>
                                    <div className="item-image">
                                        <img src={IMAGE_CDN_URL + item?.card?.info?.imageId} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    );

};

export default RestaurantMenu;
