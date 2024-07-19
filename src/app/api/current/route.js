<<<<<<< HEAD
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data);
  const user = await User.findById(data._id).select("-password");
  //   console.log("test");
  return NextResponse.json(user);
}
=======
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data);
  const user = await User.findById(data._id).select("-password");
  //   console.log("test");
  return NextResponse.json(user);
}
>>>>>>> 22658da22f57e96aa41b7f4c00cd744d3407e39d
