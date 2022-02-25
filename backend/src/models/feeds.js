const { next } = require("mongodb/lib/operations/cursor_ops");
const mongoose = require("mongoose");
const validator = require("validator");
const FeedSchema = new mongoose.Schema(
  {
    feeds: [
      {
        feed: {
          type: String,
          trim: true,
          required: true,
        },
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
FeedSchema.pre("save", async function (next) {
  const feed = this;
  next();
});
const feed = mongoose.model("feed", FeedSchema);
module.exports = feed;
