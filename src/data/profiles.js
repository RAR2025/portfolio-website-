import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const LEETCODE_USER = "RAR2025";
const GITHUB_USER = "RAR2025";

export const profiles = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: LEETCODE_USER,
    profileUrl: `https://leetcode.com/u/${LEETCODE_USER}/`,
    logo: SiLeetcode,
    stats: [
      { label: "Problems Solved", value: "265" },
      { label: "Easy", value: "131" },
      { label: "Medium", value: "111" },
      { label: "Hard", value: "23" },
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
    username: GITHUB_USER,
    profileUrl: `https://github.com/${GITHUB_USER}`,
    logo: FaGithub,
    stats: [
      { label: "Public Repos", value: "18" },
      { label: "Followers", value: "11" },
      { label: "Following", value: "15" },
    ],
  },
];
