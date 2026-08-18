import { Trophy, Award } from "lucide-react";

export const hackathons = [
  {
    slug: "SSIP-2023",
    icon: Trophy,
    rank: "4th",
    title: "SSIP Hackathon — 4th Place My Sector",
    org: "SSIP Gujarat · State Level",
    year: "2023-2024",
    text: "Competed against 2062 teams (10449 participants) across Gujarat. Our team was among 181 selected for the final round and secured 4th place in my sector.",
    stats: [
      { value: "2062", label: "Teams (10449 participants)" },
      { value: "181", label: "Teams selected" },
      { value: "4th", label: "Place in my sector" },
    ],
    details: [
      "2062 teams · 10449 participants registered across Gujarat",
      "181 teams shortlisted for the final round",
      "Built and demoed a live working product to state-level judges",
      "Secured 4th place in my sector",
    ],
  },
  {
    slug: "CVMU-2025",
    icon: Award,
    rank: "181",
    title: "CVMU Hackathon 2025 — Top 181 Selection",
    org: "CVMU Hackathon 2025 · Top 181 Teams",
    year: "2025",
    image: "/images/achievement/CVMU_2025.jpg",
    gallery: [
      "/images/achievement/CVMU/round1 p1.JPG",
      "/images/achievement/CVMU/round1 p2.JPG",
      "/images/achievement/CVMU/round1 p3.JPG",
      "/images/achievement/CVMU/round 2 p1.jpg",
      "/images/achievement/CVMU/IMG_0767.JPG",
      "/images/achievement/CVMU/IMG_0768.JPG",
      "/images/achievement/CVMU/IMG_0769.JPG",
      "/images/achievement/CVMU/IMG_0770.JPG",
    ],
    text: "Selected among the top 181 teams of CVMU Hackathon 2025 — a 36+ hour live coding sprint.",
    stats: [
      { value: "181", label: "Top 181 Teams" },
      { value: "36+", label: "Hours live code" },
      { value: "2025", label: "Hackathon year" },
    ],
    details: [
      "36+ hours of continuous live coding",
      "Selected among the top 181 teams of the hackathon",
      "Presented a live solution demo to the judges",
    ],
    team: [
      { name: "Shah Dhairya", role: "Team Leader · Full Stack Developer" },
      { name: "Patel Nand", role: "Backend + Q/A" },
      { name: "Rajkotiya Zeel", role: "Documentation + Presentation + Testing" },
    ],
  },
];
