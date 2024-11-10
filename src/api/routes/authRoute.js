import {Hono} from "hono";
import {register, logout, login} from "../controllers/authController";
import methodNotAllowedMiddleware  from "../middlewares/methodNotAllowedMiddleware";

const authRoutes = new Hono();

authRoutes.post("/login", login).all(methodNotAllowedMiddleware);

authRoutes.post("/register", register).all(methodNotAllowedMiddleware);

authRoutes.get("/logout", logout).all(methodNotAllowedMiddleware);

/*authRoutes.get("/logout", async (c) => {
    return await logout(c);
});*/

export default authRoutes;