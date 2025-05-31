"use client";
import * as React from "react";
import { useToast } from "@/hooks/useToast"; // Adjust path if needed

export function Toast() {
  const { toasts, dismiss } = useToast();

  if (!toasts.length) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-gray-900 text-white px-4 py-3 rounded shadow flex items-start gap-3 min-w-[240px] animate-fade-in"
        >
          <div className="flex-1">
            {toast.title && <div className="font-semibold">{toast.title}</div>}
            {toast.description && (
              <div className="text-sm opacity-80">{toast.description}</div>
            )}
          </div>
          <button
            onClick={() => dismiss(toast.id)}
            className="ml-2 text-gray-400 hover:text-white"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
