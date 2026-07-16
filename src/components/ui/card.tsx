import * as React from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-2xl border border-[#30363d] p-5 transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}
