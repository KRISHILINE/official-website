import { useEffect } from "react";

import axiosInstance from "@/utils/axiosInstance";

export default function Home() {
  useEffect(() => {
    const fetchData = async function () {
      try {
        const { data } = await axiosInstance.get("/api");
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome</h1>
    </main>
  );
}
