const PLATFORM_ICONS = {
	pc: '/images/platform-logos/windows.svg',
	playstation3: '/images/platform-logos/playstation.svg',
	xbox360: '/images/platform-logos/xbox.svg',
	macos: '/images/platform-logos/macos.svg'
}

export const getPlatformIconUrl = (slug: string) =>
	PLATFORM_ICONS[slug as keyof typeof PLATFORM_ICONS]
