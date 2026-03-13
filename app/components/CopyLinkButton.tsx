"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

interface CopyLinkButtonProps {
  path: string;
}

export function CopyLinkButton({ path }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof window === "undefined") {
      return;
    }

    const url = new URL(path, window.location.origin).toString();

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-sky-200 p-2 text-zinc-500 transition-colors hover:text-zinc-900 dark:border-zinc-700 dark:hover:text-zinc-100"
      aria-label={copied ? "Link copied" : "Copy post URL"}
      title={copied ? "링크가 복사되었습니다" : "URL 복사"}
    >
      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
    </button>
  );
}
