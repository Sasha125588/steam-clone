import {
	Brain,
	Car,
	Coffee,
	Crosshair,
	Dices,
	Gamepad2,
	Ghost,
	Library,
	type LucideProps,
	Monitor,
	Newspaper,
	Rocket,
	Settings2,
	ShoppingCart,
	Sword,
	Swords,
	Tent,
	Trophy,
	Users,
	Users2
} from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface SidebarLogo {
	title: string
	image: string
	url: string
}

export interface SidebarNavigation {
	title: string
	icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
	url: string
}

export interface SidebarData {
	logo: SidebarLogo
	navMain: SidebarNavigation[]
	navSec: SidebarNavigation[]
}

export const SIDEBAR_DATA: SidebarData = {
	logo: {
		title: 'Steam Clone',
		image: '/images/steam-logo.png',
		url: 'm@example.com'
	},
	navMain: [
		{
			title: 'STORE',
			url: '/',
			icon: ShoppingCart
		},
		{
			title: 'LIBRARY',
			url: '/library',
			icon: Library
		},
		{
			title: 'COMMUNITY',
			url: '/community',
			icon: Users2
		},
		{
			title: 'NEWS',
			url: '/news',
			icon: Newspaper
		},
		{
			title: 'SETTINGS',
			url: '/settings',
			icon: Settings2
		}
	],
	navSec: [
		{
			title: 'Free To Play',
			url: '#',
			icon: Gamepad2
		},
		{
			title: 'Multiplayer',
			url: '#',
			icon: Users
		},
		{
			title: 'Early Access',
			url: '#',
			icon: Rocket
		},
		{
			title: 'Open World',
			url: '#',
			icon: Tent
		},
		{
			title: 'Action',
			url: '#',
			icon: Sword
		},
		{
			title: 'Racing',
			url: '#',
			icon: Car
		},
		{
			title: 'Adventure',
			url: '#',
			icon: Tent
		},
		{
			title: 'RPG',
			url: '#',
			icon: Dices
		},
		{
			title: 'Casual',
			url: '#',
			icon: Coffee
		},
		{
			title: 'Simulation',
			url: '#',
			icon: Monitor
		},
		{
			title: 'FPS',
			url: '#',
			icon: Crosshair
		},
		{
			title: 'Sports',
			url: '#',
			icon: Trophy
		},
		{
			title: 'Fighting',
			url: '#',
			icon: Swords
		},
		{
			title: 'Strategy',
			url: '#',
			icon: Brain
		},
		{
			title: 'Horror',
			url: '#',
			icon: Ghost
		},
		{
			title: 'Survival',
			url: '#',
			icon: Tent
		}
	]
}
