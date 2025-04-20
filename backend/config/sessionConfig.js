import session from "express-session";
import dotenv from "dotenv";
import passport from "passport";

dotenv.config();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: null,
  },
});

const initializePassport = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
};

export { sessionMiddleware, initializePassport };
