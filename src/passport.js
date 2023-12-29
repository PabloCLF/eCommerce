import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-local";
import { Strategy as LocalStrategy } from 'passport-local';
import { usersService } from "./Repositories/index.js";

const SECRETJWT = "jwtSecret";

passport.use(
    'signup',
    new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        async(req, email, password, done) => {
            const { name } = req.body;
            if (!name || !email || !password) {
                return done(null, false);
            }
            try {
                const createdUser = usersService.createUser(re.body);
                done(null, createdUser);
            } catch (error) {
                done(error);
            }
        }
    )
)

passport.use('login',
    new LocalStrategy({
            usernameField: "email"
        },
        async(email, password, done) => {
            if (!email || !password) {
                return done(null, false, { message: "All fields are required" });
            }
            try {
                const user = usersService.getByEmail(email);
                done(null, user);
            } catch (error) {
                done(null, false, { message: "Incorrect email or password." });
            }
        }
    )
);

const fromCookies = (req) => {
    return req.cookies.token;
}

passport.use('jwt',
    new JWTStrategy({
            jwtFromRequest: ExtractJwt.fromExtractors([fromCookies]),
            secretOrKey: SECRETJWT
        },
        (jwt_payload, done) => {
            done(null, jwt_payload);
        }
    ));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async(id, done) => {
    try {
        const user = await usersService.getUserById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
})