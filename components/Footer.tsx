import { type ReactNode } from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const TEMPLATE_REPO_URL = "https://github.com/MoYoez/Paradise-Imagination";

export type FooterProps = {
  /** Optional content before the Fork link (e.g. copyright). When provided, shown as "content | Fork this template...". */
  copyright?: ReactNode;
};

export function Footer({ copyright }: FooterProps) {
  return (
    <>
      {copyright != null && <>{copyright} | </>}
      <Link
        href={TEMPLATE_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-inherit underline inline-flex items-center gap-1"
      >
        <SiGithub size={14} aria-hidden />
        Fork this template on GitHub
      </Link>
    </>
  );
}
