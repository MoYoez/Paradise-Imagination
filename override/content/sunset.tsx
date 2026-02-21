/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export const imagery = "Side projects / toys";

const GITHUB = "https://github.com";

const TOYS: Array<{ repo: string; description: string }> = [
  { repo: "username/repo-name", description: "Short description" },
];

function RepoBadges({ repo }: { repo: string }) {
  const base = `https://img.shields.io/github`;
  return (
    <span className="sunset-toys-badges" style={{ display: "inline-flex", gap: "0.35rem", flexWrap: "wrap", alignItems: "center" }}>
      <a
        href={`${GITHUB}/${repo}/stargazers`}
        target="_blank"
        rel="noopener noreferrer"
        title="Stars"
      >
        <img
          src={`${base}/stars/${repo}?style=flat-square&labelColor=343b41`}
          alt="Stars"
          width={undefined}
          height={20}
          style={{ height: 18, width: "auto", display: "inline-block", verticalAlign: "middle" }}
        />
      </a>
      <a
        href={`${GITHUB}/${repo}/network/members`}
        target="_blank"
        rel="noopener noreferrer"
        title="Forks"
      >
        <img
          src={`${base}/forks/${repo}?style=flat-square&labelColor=343b41`}
          alt="Forks"
          width={undefined}
          height={20}
          style={{ height: 18, width: "auto", display: "inline-block", verticalAlign: "middle" }}
        />
      </a>
    </span>
  );
}

export default function SunsetContent() {
  return (
    <div className="sunset-toys">
      <h3 style={{ margin: "0 0 0.75rem", fontSize: "1rem", fontWeight: 600 }}>
        Toys
      </h3>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.8125rem",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.4rem 0.5rem",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  fontWeight: 600,
                }}
              >
                Project
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.4rem 0.5rem",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  fontWeight: 600,
                }}
              >
                Description
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.4rem 0.5rem",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  fontWeight: 600,
                }}
              >
                Stars / Forks
              </th>
            </tr>
          </thead>
          <tbody>
            {TOYS.map(({ repo, description }) => (
              <tr key={repo}>
                <td
                  style={{
                    padding: "0.5rem",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                    verticalAlign: "middle",
                  }}
                >
                  <Link
                    href={`${GITHUB}/${repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--color-sunset, #c495a8)",
                      fontWeight: 500,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                    className="sunset-toys-link"
                  >
                    <SiGithub size={14} aria-hidden />
                    {repo}
                  </Link>
                </td>
                <td
                  style={{
                    padding: "0.5rem",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                    color: "#333",
                  }}
                >
                  {description}
                </td>
                <td
                  style={{
                    padding: "0.5rem",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                    verticalAlign: "middle",
                  }}
                >
                  <RepoBadges repo={repo} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
