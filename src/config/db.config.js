import mongoose from "mongoose";

// const URI = config.mongo_uri
const URI = 'mongodb+srv://pablo:pablo@cluster0.moakzyi.mongodb.net/'

mongoose
    .connect(URI)
    .then(() => console.log('Connected to DB'))
    .catch((error) => console.log(error));