import mongoose from 'mongoose';

const postModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1024 * 1024,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
    reported: {
        type: Boolean,
        default: false,
    },
    reportedAt: {
        type: Date,
        default: null,
    },
});

export default mongoose.models.Posts || mongoose.model('Posts', postModel);
