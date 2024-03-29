import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    }
},{
    timestamps: false
});

const Category = mongoose.model("Categories", categorySchema);
export default Category