import type { ReactNode } from "react";

interface DelProps {
  children: ReactNode;
}


export function Del({ children }: DelProps) {
  return (
    <span style={{ textDecoration: "line-through", color: "#888" }}>
      {children}
    </span>
  );
}
