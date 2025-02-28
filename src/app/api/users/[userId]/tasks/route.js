<<<<<<< HEAD
// localhost:3000/api/users/[userId]/tasks

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    // get user using id

    const tasks = await Task.find({
      userId: userId,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to get tasks", 404, false);
  }
}
=======
// localhost:3000/api/users/[userId]/tasks

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    // get user using id

    const tasks = await Task.find({
      userId: userId,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to get tasks", 404, false);
  }
}
>>>>>>> 22658da22f57e96aa41b7f4c00cd744d3407e39d
