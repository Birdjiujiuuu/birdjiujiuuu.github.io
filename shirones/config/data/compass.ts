/**
 * 站点罗盘数据（本地数据源）。
 * 用途：src/pages/compass.astro → organisms/CompassSection → molecules/CompassTile。
 * 添加站点：往对应 Shelf.entries 追加一项；数组顺序即展示顺序。
 * - icon：Iconify 名（material-symbols:xxx）或图片 URL（http(s)/绝对路径）；
 *   省略时瓷砖显示 label 首字母 tonal 块（不自动抓取 favicon）。
 * - image：用户自定义图片 URL（http(s)/绝对路径），优先于 icon 渲染；
 *   加载失败自动降级为首字母块。
 */

/** 单条站点记录 */
export interface CompassEntry {
	/** 站点名（瓷砖标题） */
	label: string;
	/** 外链地址 */
	href: string;
	/** 一句话说明（瓷砖副行；省略则显示域名） */
	note?: string;
	/** 图标：Iconify 名或图片 URL；省略 = 首字母兜底 */
	icon?: string;
	/** 用户自定义图片（http(s)/绝对路径）：优先于 icon 渲染；省略则走 icon/首字母 */
	image?: string;
}

/** 分组（Shelf = 罗盘上的收纳格） */
export interface CompassShelf {
	/** 锚点 id（字母数字，作分组定位与跳转） */
	key: string;
	/** 分组名 */
	name: string;
	/** 分组图标（Iconify 名，SectionTitle 行首） */
	icon?: string;
	/** 分组副文案（标题下弱文本，可选） */
	blurb?: string;
	entries: CompassEntry[];
}

export const compassData: CompassShelf[] = [
	{
		key: "dev",
		name: "开发",
		icon: "material-symbols:code-rounded",
		blurb: "开发者工具、资源与社区",
		entries: [
			{
				label: "GitHub",
				href: "https://github.com",
				note: "全球最大的开源社区",
				icon: "fa6-brands:github",
			},
			{
				label: "cloudflare",
				href: "https://www.cloudflare.com/",
				note: "CDN、DNS、WAF、SSL 等服务",
				icon: "fa6-brands:cloudflare",
				image: "https://www.cloudflare.com/favicon.ico",
			}
		],
	},
	{
		key: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		blurb: "常用工具网站",
		entries: [
			{
				label: "Deepseek",
				href: "https://www.deepseek.com/",
				note: "AI",
				image: "https://www.deepseek.com/favicon.ico",
			},
			{
				label: "Overleaf",
				href: "https://www.overleaf.com/",
				note: "LaTeX 在线编辑器",
				image: "https://www.overleaf.com/favicon.ico",
			},
			{
				label: "iLove PDF",
				href: "https://www.ilovepdf.com/",
				note: "PDF 在线处理工具",
				image: "https://www.ilovepdf.com/favicon.ico",
			},
			{
				label: "MathDF",
				href: "https://mathdf.com/",
				note: "数学公式在线求解器",
				image: "https://mathdf.com/favicon.ico",
			},
		],
	},
];
