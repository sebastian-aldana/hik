import fs from "fs";

export async function POST(request) {
  const event = await request.json();
  console.log(event);
  const eventData = event?.params?.events[0];
  if (eventData?.srcName === "ENTRADA_ESU") {
    const userId = eventData.data.personId;
    fs.appendFile("./queue.txt", `${userId},`, function (err) {});
  }
  return new Response("sebastian");
}

export async function GET(request, response) {
  let data;
  try {
    data = fs.readFileSync("./queue.txt", "utf-8");
  } catch (error) {
    console.log(error, "error reading ");
  }
  return new Response(data.split(","));
}

export async function DELETE() {
  return new Response("OK");
}
