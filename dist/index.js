"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const user = new pg_1.Client("postgresql://neondb_owner:npg_4mbvoq3RBQhf@ep-empty-brook-a5b1eu65-pooler.us-east-2.aws.neon.tech/neondb?sslmode=true");
user.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const response = yield user.query(`INSERT into users(username,email,password) VALUES('${username}','${email}','${password}')`);
    console.log(response);
    res.json({
        message: "you have successfully registered"
    });
}));
app.get("/signup", (req, res) => {
    res.json({
        message: "hello"
    });
});
app.listen(3000);
