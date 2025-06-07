"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientRedirect() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 1000); // 2-second delay

    return () => clearTimeout(timeout);
  }, [router]);

  return null;
}
