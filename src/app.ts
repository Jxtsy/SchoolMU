import express from 'express'
import 'dotenv/config';
import { MongoDatabase } from './data/init';
import { envs } from './config/envs.plugin';

const app = express();
app.use(express.json());


(async () => {
  await MongoDatabase.connect({ mongoUrl: envs.MONGO_URL ?? "", dbName: "SchoolDB" });
})();

app.listen(envs.PORT, () => {
  console.log("Server started")

})