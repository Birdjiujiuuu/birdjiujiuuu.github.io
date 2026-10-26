/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "MagicApp",
		title: "神奇的应用程序",
		summary: "一个神秘的工具箱程序",
		category: "windows",
		phase: "shipped",
		technologies: ["WinUI3", "C#", "Windows"],
		icon: "material-symbols:terminal-rounded",
		repository: "https://github.com/Birdjiujiuuu/MagicApp",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
