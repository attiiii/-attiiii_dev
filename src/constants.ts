import type { Portfolio } from "@/types";

export const PORTFOLIOS: Portfolio[] = [
  {
    title: "ポートフォリオサイト",
    description:
      "本サイト。ポートフォリオとブログを載せたホームページ的サイト。速度重視でJamStackを採用。",
    url: "/",
    skills: ["Cloudflare", "microCMS", "Astro", "Tailwind CSS"],
    links: {
      code: "https://github.com/attiiii/attiiii_dev",
      design:
        "https://www.figma.com/file/fe4EbdyGE5N9ZREblkKqom/%40attiiii_dev?type=design&node-id=0%3A1&mode=design&t=weaXH6ZPzUgdliWp-1",
    },
  },
];
