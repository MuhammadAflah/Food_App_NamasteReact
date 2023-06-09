import { useEffect, useState } from "react"

const useRestuarent = (resId) =>{
    const [restaurant, setRestuarent] = useState(null)
    const [restaurantCards, setRestaurantCards] = useState({})


    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&submitAction=ENTER`
        );
        const json = await data?.json();
        console.log(json.data);
        setRestuarent(json?.data?.cards[0]?.card?.card?.info);
        setRestaurantCards(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1)[0]?.card?.card)
        // setIsLoaded(true);
    }

    return restaurant;
    // return {
    //     restaurant,
    //     restaurantCards
    //   };
    // return { restaurant, restaurantCards };
    
    // return {
    //     restaurant: restaurant,
    //     restaurantCards: restaurantCards
    //   };
      
}

export default useRestuarent