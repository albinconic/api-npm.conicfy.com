import { Hono } from "hono";
import authRoutes from "./api/routes/authRoute";
import imageRoutes from "./api/routes/imageRoute";
import notFoundRoutes from "./api/middlewares/notFoundMiddleware";
import errorHandlerMiddleware from "./api/middlewares/errorHandlerMiddleware";

const app = new Hono();

// Public
app.get("/public/*", async (ctx) => {
    return await ctx.env.ASSETS.fetch(ctx.req.raw);
});


// Home
app.get("/", (ctx) => ctx.text("Hello world, this is Hono!! TEST"));

// Routes
app.route('/api/v1/auth', authRoutes);
app.route('/api/v1/image', imageRoutes);

// Global error for undefined routes
app.notFound(notFoundRoutes);

// Global error handling
app.onError((err, c) => errorHandlerMiddleware(err,c));

export default app;