import mongoose from "mongoose";


const reviewsSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        //    the relationship between the product and the user
        ref: 'User'
    },
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    reviews: [reviewsSchema],
    rating: {
        type: Number,
        require: true,
        default: 0
    },
    numReviews: {
        type: Number,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0
    },

}, {
    // Creates : Created at & Updated at
    timestamps: true
});

const Product = mongoose.model('Product', productSchema)

export default Product