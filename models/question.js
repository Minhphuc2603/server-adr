import mongoose, { Schema } from "mongoose";

const answerSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: true
    }
});

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    answers: {
        type: [answerSchema],  
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: true,
    }
});

const Question = mongoose.model("Questions", questionSchema);
export default Question;
