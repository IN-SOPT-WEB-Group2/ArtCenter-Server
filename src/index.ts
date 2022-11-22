import express, { NextFunction, Request, Response } from "express";
import router from "./router";
const cors = require('cors');
const app = express(); 
const PORT = 3000; 

app.use(express.json());

app.use(cors({
    origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
}));
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