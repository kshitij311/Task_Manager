<<<<<<< HEAD
import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const { userId, postId } = params;
  console.log("user id ", userId);
  console.log("post id ", postId);
  return NextResponse.json(params);
}
=======
import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const { userId, postId } = params;
  console.log("user id ", userId);
  console.log("post id ", postId);
  return NextResponse.json(params);
}
>>>>>>> 22658da22f57e96aa41b7f4c00cd744d3407e39d
