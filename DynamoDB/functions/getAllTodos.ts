import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "eu-west-2" });

export async function handler() {
  try {
    const command = new ScanCommand({
      TableName: "todos"
    });
    const response = await client.send(command)

    return {
      status: 200,
      body: response.Items
    }
  } catch (e) {
    return {
      status: 400,
      body: JSON.stringify({
        error: e
      })
    }
  }
}