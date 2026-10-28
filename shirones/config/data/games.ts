/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
 *
 * 封面支持三种写法：
 * - src/assets 相对路径（如本文件所用，走 Astro 图片管线自动优化为 webp/avif）；
 * - /public 绝对路径（如 "/assets/games/xxx.webp"，原样输出）；
 * - 远程 URL（https://…）。
 *
 * 注：以下为演示条目——评分 / 时长 / 状态是占位数值，请按自己的实际情况调整；
 * 封面取自各游戏官方商店页或官网主视觉。
 */
import type { GameItem } from "@/types/gamesConfig";

export const gamesData: GameItem[] = [
	{
		id: "minecraft",
		name: "Minecraft",
		developer: "Mojang Studios",
		category: "sandbox",
		status: "playing",
		cover: "/assets/games/minecraft-hero.jpg",
		icon: "material-symbols:widgets-rounded",
		rating: 5,
		hours: 114514,
		platform: "PC",
		year: "2011",
		tags: ["Sandbox", "Survival", "Building"],
		description:
			"一个方块风格的沙盒游戏，在这里你可以生存、建造、探索和冒险。在这里，你可以尽情发挥想象力，建造属于你的世界。",
		link: "https://www.minecraft.net/",
	},
		{
		id: "pjsk",
		name: "世界计划 缤纷舞台！ feat. 初音未来",
		developer: "SEGA/Colorful Palette",
		category: "music",
		status: "playing",
		cover: "/assets/games/pjsk.jpg",
		icon: "material-symbols:widgets-rounded",
		rating: 5,
		hours: 999,
		platform: "Phone",
		year: "2020",
		tags: ["Music", "Rhythm", "Anime"],
		description:
			"一款风靡日本的音乐节奏游戏，feating 初音未来等虚拟歌手。玩家可以在游戏中体验各种音乐挑战，享受丰富的歌曲和舞台表演。",
	},
	{
		id: " musedash",
		name: "Muse Dash",
		developer: "PeroPeroGames",
		category: "music",
		status: "playing",
		cover: "/assets/games/muse-dash.jpg",
		icon: "material-symbols:widgets-rounded",
		rating: 5,
		hours: 100,
		platform: "PC, Phone",
		year: "2018",
		tags: ["Music", "Rhythm", "Anime"],
		description:
			"一款结合了音乐节奏和跑酷元素的游戏，玩家需要在音乐的节奏下控制角色跳跃、攻击敌人，享受动感十足的游戏体验。",
		link: "https://musedash.peropero.net/",
	},
];
