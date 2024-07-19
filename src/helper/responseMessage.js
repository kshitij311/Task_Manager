<<<<<<< HEAD
import { NextResponse } from "next/server";

export const getResponseMessage = (messageText, statusCode, successStatus) => {
  return NextResponse.json(
    {
      message: messageText,
      success: successStatus,
    },
    {
      status: statusCode,
    }
  );
};
=======
import { NextResponse } from "next/server";

export const getResponseMessage = (messageText, statusCode, successStatus) => {
  return NextResponse.json(
    {
      message: messageText,
      success: successStatus,
    },
    {
      status: statusCode,
    }
  );
};
>>>>>>> 22658da22f57e96aa41b7f4c00cd744d3407e39d
