import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantPage() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState();
  useEffect(() => {
    // fetch restaurant by id
    fetch(`https://my-first-firestore-bc.web.app/restaurants/${restaurantId}`)
      .then(response => response.json())
      .then(data => setRestaurant(data))
      .catch(console.error)
  }, [restaurantId])
  return <RestaurantCard restaurant={restaurant}  />
}