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
    api: {
      url: `https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USER}`,
      stats: (data) => [
        { label: "Problems Solved", value: data.totalSolved },
        { label: "Easy", value: data.easySolved },
        { label: "Medium", value: data.mediumSolved },
        { label: "Hard", value: data.hardSolved },
      ],
    },
    fallback: [
      { label: "Problems Solved", value: "177" },
      { label: "Easy", value: "107" },
      { label: "Medium", value: "90" },
      { label: "Hard", value: "18" },
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
    api: {
      url: `https://api.github.com/users/${GITHUB_USER}`,
      stats: (data) => [
        { label: "Public Repos", value: data.public_repos },
        { label: "Followers", value: data.followers },
        { label: "Following", value: data.following },
      ],
    },
    fallback: [
      { label: "Public Repos", value: "18" },
      { label: "Followers", value: "11" },
      { label: "Following", value: "15" },
    ],
  },
];
