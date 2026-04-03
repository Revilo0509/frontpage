import type { WebConfig } from "./types";

async function fetchConfigData(url: string): Promise<WebConfig> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `HTTP Error while getting config! Status: ${response.status}`,
      );
    }

    const data: WebConfig = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching config JSON data:", error);
    throw error;
  }
}

export async function getWebConfig(url: string): Promise<WebConfig> {
  return await fetchConfigData(url);
}
