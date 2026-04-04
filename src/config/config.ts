/* eslint-disable unicorn/no-array-for-each */
import type { WebConfig } from "./types";

const fetchConfigData = async (url: string): Promise<WebConfig> => {
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
};

export const getWebConfig = async (url: string): Promise<WebConfig> => {
  return await fetchConfigData(url);
};
