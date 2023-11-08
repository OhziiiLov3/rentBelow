const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const commentsSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const listingSchema = new Schema(
  {
    city: {
      type: String,
      required: [true, "You must provide a city "],
    },
    state: {
      type: String,
      required: [true, "You must provide a state "],
    },
    address: {
      type: String,
      required: [true, "You must provide a street address "],
    },
    rentAmount: {
      type: String,
      required: [true, "You must provide a Rent Amount"],
    },
    bedRoomSize: {
      type: String,
      enum: ["1BR", "2BR", "3BR", "4BR"],
    },
    description: {
      type: String,
      required: [true, "You must provide a Description "],
    },
    isPetAllowed: {
      type: Boolean,
      required: [true, " You must provide isSmokingAllowed Property"],
      default: false,
    },
    image: {
      type: String,
      required: [true, " You must provide Image of a Property"],
    },
    comments: [commentsSchema],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Listing", listingSchema);
