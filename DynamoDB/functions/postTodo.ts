import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { uid } from "uid"

export async function handler(event?) {
  try {
    const id = uid()
    const client = new DynamoDBClient({ region: "eu-west-2" });
    await client.send(new PutItemCommand({
      TableName: 'todos',
      Item: {
        id: { S: id },
        todo: { S: event.todo },
      },
    }))

    return {
      statusCode: 200,
      body:{
        id,
        todo: event.todo
      }
    }
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: e })
    }
  }
}