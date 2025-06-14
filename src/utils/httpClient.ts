import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL as string;

const publicHttpClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetcher = (url: string, params?: unknown) =>
  publicHttpClient.get(url, { params }).then((res) => res.data);

export { publicHttpClient, fetcher, baseURL };
