// import { serialize } from "cookie";
// import { sign } from "jsonwebtoken";

// const secret = process.env.SECRET;

// export default async function (req, res) {
//     const { username, password } = req.body;
//     if (username === "Admin" && password === "Admin") {
//         const token = sign(
//             {
//                 exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
//                 username: username
//             },
//             secret
//         );
//         const serialized = serialize("OursiteJWT", token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV !== "development",
//             sameSite: "strict",
//             maxAge: 60 * 60 * 24 * 30,
//             path: "/"
//         });
//         res.setHeader('Set-Cookie', serialized);
//         res.status(200).json({ message: "Success!" });
//     } else {
//         return res.json({ message: "Invalid credentials!" });
//     }
// }