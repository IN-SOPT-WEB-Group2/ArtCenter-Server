import express, { NextFunction, Request, Response } from "express";
import router from "./router";
import cors from "cors";

const app = express(); 
const PORT = 3000; 

app.use(express.json());
app.use(cors());

app.use("/", router); // use -> 모든 요청

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("초기 세팅 등록");
});


app.listen(PORT, () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: ${PORT} 🛡️
        #############################################
    `);
}); 