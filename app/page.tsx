"use client";

import Image from "next/image";
import { PropsWithChildren, useEffect, useState } from "react";

export default function Home() {
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => () => {
      setIsLoading(true);
      setIsHover(false);
    },
    []
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Loader loading={isLoading} mode={"soft"}>
          <div>
            <Image
              src="/tom.jpg"
              alt="tom"
              width={180}
              height={38}
              priority
              className={`w-auto h-auto transition-all ${
                isHover
                  ? "blur-0 opacity-100 scale-150"
                  : "blur-3xl opacity-30 scale-50"
              }`}
              onLoad={() => setIsLoading(false)}
            />
            <p
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all hover:opacity-0"
              onMouseOver={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Hover Me
            </p>
          </div>
        </Loader>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        hi
      </footer>
    </div>
  );
}

const Loader = ({
  loading,
  children,
  mode = "hard",
}: PropsWithChildren & { loading: boolean; mode?: "soft" | "hard" }) => {
  switch (mode) {
    case "soft":
      return (
        <>
          <div className={loading ? "hidden" : ""}>{children}</div>
          {loading && <div>{"Loading..."}</div>}
        </>
      );
    case "hard":
      if (loading) return <>Loading...</>;
      return <>{children}</>;
  }
};
