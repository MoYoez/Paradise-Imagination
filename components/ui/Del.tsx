import type { ReactNode } from "react";

interface DelProps {
  children: ReactNode;
}


export function Del({ children }: DelProps) {
  return (
    <span className="line-through text-[#888]">
      {children}
    </span>
  );
}
