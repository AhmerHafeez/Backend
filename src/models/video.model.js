import mongoose, { Schema, Types } from "mongoose";
import mongooseAggregatepaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema({

    videoFile: {
        type: String, // cloudary url
        required: true
    },

    thumbnail: {
        type: String, // cloudary url
        required: true
    },
    tittle: {
        type: String,
        required: true
    },
    tittle: {
        type: String,
        required: true
    },
    duration: {
        type: Number, // cloudary url
        required: true
    },
    veiws: {
        type: Number,
        default: 0
    },
    isPubliahed: {
        type: Boolean,
        default: true
    },
    owner: {
        Schema, Types,ObjectId,
        ref: "User"
    }
},
    {
        timestamps: ture
    }
)
videoSchema.plugin(mongooseAggregatepaginate)
export const Vide = mongoose.model("Video", videoSchema)