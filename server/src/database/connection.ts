import Mongoose from "mongoose";

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoCreate: true,
};

Mongoose.connect(process.env.MONGODB_URL, config)
  .then(() => console.log(`🚀 Database is running`))
  .catch(err => console.log(err));

export default Mongoose;
