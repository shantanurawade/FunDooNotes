import mongoose from "mongoose";


const noteScheme = new mongoose.Schema({
    userId: {
        type: String
    },
    noteTitle: {
        type: String
    },
    noteDescription: {
        type: String
    },
    isPinned: {
        type: Boolean
    },
    isRecycled: {
        type: Boolean
    },
    isArchive: {
        type: Boolean
    }
}, {
    timestamps: true
});

export default mongoose.model("Note", noteScheme);