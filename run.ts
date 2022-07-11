import { handler } from "./DynamoDB/functions/postTodo";


async function run() {
  const t = await handler()
  console.log("test: ", t)
}

run()