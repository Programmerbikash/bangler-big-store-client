const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
    books: [
        { id: 1, title: "Spring/summer 2023", subTitle: "Accessories Collection.", url: "https://i.ibb.co/3M8DQd8/slider1.png" },
        { id: 2, title: "Your everyday style & comfort", subTitle: "New Trendy Bag.", url: "https://i.ibb.co/RzMGP4G/slider2.png" },
        { id: 3, title: "Spring/summer 2023", subTitle: "Men's Collection.", url: "https://i.ibb.co/9s2YTs6/slider4.png" },
        { id: 4, title: "Spring/summer 2023", subTitle: "Woman's Fashion.", url: "https://i.ibb.co/9vwSDhG/slider3.png" },
    ],
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
    },
});

export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;