export const getWishListFromLocalStorage = () => {
    const wishlist = localStorage.getItem('book');
    return wishlist ? JSON.parse(wishlist) : [];
}

export const addToWishListInLocalStorage = (book) => {
    const currentWishlist = getWishListFromLocalStorage();
    const newWishlist = [...currentWishlist, book];
    localStorage.setItem('book', JSON.stringify(newWishlist));
}

export const clearWishListInLocalStorage = (id) => {
    const currentWishlist = getWishListFromLocalStorage();
    const newWishlist = currentWishlist.filter(book => book.bookId !== id);
    localStorage.setItem('book', JSON.stringify(newWishlist));
}