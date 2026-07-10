import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const profiles = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "RAR2025",
    profileUrl: "https://leetcode.com/u/RAR2025/",
    logo: SiLeetcode,
    stats: [
      { label: "Problems Solved", value: "177" },
      { label: "Contest Rating", value: "1406" },
      { label: "Rank", value: "925929" },
    ],
  },
  {
    id: "codechef",
    platform: "CodeChef",
    username: "rar2026",
    profileUrl: "https://www.codechef.com/users/rar2026",
    logo: SiCodechef,
    stats: [
      { label: "League", value: "Diamond League" },
    ],
  },
  {
    id: "github",
    platform: "GitHub",
    username: "RAR2025",
    profileUrl: "https://github.com/RAR2025",
    logo: FaGithub,
    stats: [
      { label: "Contributions", value: "501" },
    ],
  },
];