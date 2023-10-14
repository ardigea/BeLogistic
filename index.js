import express from "express";
import cors from "cors";
import UserRoute from "./Routes/UserRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send({ 
    ReceiversName: "Andi", 
    TrackingNumber: 1234567,
    PhoneNumber: 85311311100,
    PackageWeight: 5,
    ServiceOption: "Land Expedition",
  });
});
app.use(UserRoute);


// app.listen(PORT, () => {
//   console.log(`app is listening on port ${PORT}`);
// })

app.listen(PORT, "0.0.0.0", function () {});
