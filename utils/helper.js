export default function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => {
      const names = Array.isArray(restaurant.info.name) ? restaurant.info.name : [restaurant.info.name];
      return names.some((data) => data.toLowerCase().includes(searchText.toLowerCase()));
    });
  }