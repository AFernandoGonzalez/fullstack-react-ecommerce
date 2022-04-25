import mongoose from "mongoose";


const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        //    the relationship between the order to the user
        ref: 'User'
    },
    order: [
        {
            name: { type: String, require: true },
            qty: { type: Number, require: true },
            image: { type: String, require: true },
            price: { type: Number, require: true },
            product: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'Product' }
        }
    ],

    shippingAdress: {
        address: {
            type: String, required: true
        },
        city: {
            type: String, required: true
        },
        postalCode: {
            type: String, required: true
        },
        country: {
            type: String, required: true
        },
    },

    paymentMethod: {
        type: String,
        require: true
    },
    paymentResult: {
        id: {
            type: String,
            require: true
        },
        status: {
            type: String,
            require: true
        },
        update_time: {
            type: String,
            require: true
        },
        email_address: {
            type: String,
            require: true
        },
    },
    taxPrice: {
        type: String,
        require: true,
        default: 0.0,
    },
    totalPrice: {
        type: String,
        require: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        require: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        require: true,
        default: false
    },
    deliveredAt: {
        type: Date
    },
}, {
    // Creates : Created at & Updated at
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema)

export default Order