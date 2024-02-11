"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const TesTanStack = () => {
  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["customer"],
    queryFn: () =>
      fetch("http://127.0.0.1:5000/customer").then((res) => res.json()),
  });
  if (isLoading) {
    return (
      <main className="mt-4 flex min-h-screen flex-col items-center">
        It Is Loading ...
      </main>
    );
  }
  if (isError) {
    return (
      <main className="mt-4 flex min-h-screen flex-col items-center">
        It Is Error ...
      </main>
    );
  }
  return (
    <div>
      {data?.payload?.map((customer: any) => (
        <div key={customer.id}>
          <div>{customer.name}</div>
          <div>{customer.instagram_ig}</div>
          <div>{customer.fav_color}</div>
        </div>
      ))}
    </div>
  );
};

export default TesTanStack;
