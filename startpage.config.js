const defaultConfig = {
	"username": "Javivu",
	"theme": {
		"backgroundColor": "#121317",
		"windowColor": "#181825",
		"glowColor": "#464c79",
		"white": "#bac2de",
		"gray": "#97989d",
		"black": "#45475A",
		"red": "#f38ba8",
		"green": "#a6e3a1",
		"blue": "#89b4fa",
		"yellow": "#f9e2af",
		"cyan": "#94e2d5",
		"magenta": "#f5c2e7",
		"violet": "#caa4f7",
		"orange": "#fbb185"
	},
	"wallpaper": {
		"url": "",
		"easing": "ease-in-out",
		"fadeIn": true,
		"blur": true
	},
	"terminal": {
		"fixedHeight": true,
		"windowGlow": true,
		"textGlow": false
	},
	"prompt": {
		"ctrlC": true,
		"placeholder": "command...",
		"placeholderColor": "gray",
		"userColor": "green",
		"atColor": "gray",
		"hostColor": "magenta",
		"promptColor": "magenta",
		"promptSymbol": "❯",
		"caretColor": "green",
		"selectionBg": "yellow",
		"selectionFg": "black"
	},
	"fetch": {
		"timeFormat": "HH:mm",
		"dateFormat": "DD/MM/YYYY",
		"titleColor": "yellow",
		"image": "icon.svg",
		"data": [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	"urlLaunch": {
		"target": "_self",
		"defaultColor": "white",
		"hoverColor": "violet"
	},
	"search": {
		"default": "https://google.com/search?q=",
		"target": "_self",
		"shortcutRegex": "([A-Za-z0-9]+) (.*)",
		"shortcuts": [
			{
				"alias": "g",
				"name": "Google Search",
				"url": "https://google.com/search?q={}"
			},
			{
				"alias": "d",
				"name": "DuckDuckGo Search",
				"url": "https://duckduckgo.com/?q={}"
			},
			{
				"alias": "b",
				"name": "Brave Search",
				"url": "https://search.brave.com/search?q={}"
			},
			{
				"alias": "gh",
				"name": "Github Search",
				"url": "https://github.com/search?q={}"
			},
			{
				"alias": "s",
				"name": "Stack Overflow Search",
				"url": "https://stackoverflow.com/search?q={}"
			},
			{
				"alias": "r",
				"name": "Subreddit Search",
				"url": "https://reddit.com/r/{}"
			},
			{
				"alias": "w",
				"name": "Wikipedia Search",
				"url": "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	"sections": {
		"list": [
			{
				"title": "General",
				"color": "green",
				"align": "left",
				"links": [
					{
						"name": "GPT",
						"url": "https://chat.openai.com/",
						"icon": "simple-icons:openai"
					},
					{
						"name": "Oracle API",
						"url": "https://docs.oracle.com/javase/8/docs/api/",
						"icon": "simple-icons:oracle"
					},
					{
						"name": "Campus UVa",
						"url": "https://campusvirtual.uva.es/my/",
						"icon": "devicon-plain:moodle"
					}
				]
			},
			{
				"title": "Dev",
				"color": "magenta",
				"align": "left",
				"links": [
					{
						"name": "GitHub",
						"url": "https://github.com",
						"icon": "mdi:github"
					},
					{
						"name": "GitLab",
						"url": "https://gitlab.inf.uva.es",
						"icon": "ph:gitlab-logo-simple-fill"
					},
					{
						"name": "Dev.to",
						"url": "https://dev.to",
						"icon": "material-symbols:logo-dev"
					},
					{
						"name": "Stack Overflow",
						"url": "https://stackoverflow.com/",
						"icon": "mdi:stack-overflow"
					}
				]
			},
			{
				"title": "Social",
				"color": "violet",
				"align": "left",
				"links": [
					{
						"name": "Twitter",
						"url": "https://twitter.com",
						"icon": "mdi:twitter"
					},
					{
						"name": "Reddit",
						"url": "https://reddit.com",
						"icon": "mdi:reddit"
					},
					{
						"name": "YouTube",
						"url": "https://youtube.com",
						"icon": "mdi:youtube"
					},
					{
						"name": "TikTok",
						"url": "https://www.tiktok.com/es/",
						"icon": "ic:baseline-tiktok"
					}
				]
			},
			{
				"title": "Gaming",
				"color": "cyan",
				"align": "left",
				"links": [
					{
						"name": "Polygon",
						"url": "https://polygon.com",
						"icon": "uil:polygon"
					},
					{
						"name": "IGN",
						"url": "https://ign.com",
						"icon": "mdi:currency-sign"
					},
					{
						"name": "RPS",
						"url": "https://rockpapershotgun.com/",
						"icon": "ph:toilet-paper-bold"
					},
					{
						"name": "80lv",
						"url": "https://80.lv/",
						"icon": "tabler:hand-rock"
					}
				]
			},
			{
				"title": "Science",
				"color": "blue",
				"align": "left",
				"links": [
					{
						"name": "PopSci",
						"url": "https://popsci.com/",
						"icon": "material-symbols:science"
					},
					{
						"name": "NASA",
						"url": "https://blogs.nasa.gov/",
						"icon": "simple-icons:nasa"
					},
					{
						"name": "ESA",
						"url": "https://blogs.esa.int/",
						"icon": "mdi:black-mesa"
					}
				]
			},
			{
				"title": "Tech",
				"color": "yellow",
				"align": "left",
				"links": [
					{
						"name": "TechCrunch",
						"url": "https://techcrunch.com/",
						"icon": "game-icons:techno-heart"
					},
					{
						"name": "Verge",
						"url": "https://www.theverge.com/",
						"icon": "arcticons:verge"
					},
					{
						"name": "It's Foss",
						"url": "https://itsfoss.com/",
						"icon": "ri:mastodon-fill"
					},
					{
						"name": "9To5 Linux",
						"url": "https://9to5linux.com/",
						"icon": "uil:linux"
					}
				]
			}
		]
	}
}

export default defaultConfig
