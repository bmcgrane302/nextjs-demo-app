import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";

// const SECRET = process.env.JWT_SECRET || "dev_secret";
const SECRET = process.env.JWT_SECRET;

// Node-runtime signing (used in API routes)
export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

// Edge-runtime verification (used in middleware)
export async function verifyToken(token) {
  try {
    const secret = new TextEncoder().encode(SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    console.error("verifyToken failed:", err.message);
    return null;
  }
}
