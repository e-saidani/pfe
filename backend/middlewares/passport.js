/** @format */

import passport from "passport";
import { Strategy } from "passport-local";
import { comparePassword } from "../utils/passwordCompare.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

passport.use(
  new Strategy(async function verify(username, password, cb) {
    try {
      const account = await prisma.accounts.findUnique({
        where: {
          username: username,
        },
        include: {
          user: true, 
        },
      });

      if (account) {
        const hashedPassword = account.password;

        if (account.status !== "ACTIVE") {
          return cb(null, false, {
            message: "Account is not active",
          });
        }

        const user = account.user;
        if (user.userStatus !== "ACTIVE") {
          return cb(null, false, {
            message: "User is not active",
          });
        }

        if (await comparePassword(password, hashedPassword)) {
          return cb(null, account); 
        } else {
          return cb(null, false, { message: "Incorrect password" });
        }
      } else {
        return cb(null, false, { message: "User not found" });
      }
    } catch (err) {
      return cb(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

export const authenticate = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res
        .status(401)
        .json({ message: info?.message || "Authentication failed" });
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return next();
    });
  })(req, res, next);
};

export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Not authorized" });
};

export default passport;
