export const isPresentInFavorites = (favorites, restaurant) => {
    if (!Array.isArray(favorites)) {
        return false; // Ou gérer différemment selon le cas
    }
    for (let item of favorites) {
        if (restaurant.id === item.id) {
            return true;
        }
    }
    return false;
}
