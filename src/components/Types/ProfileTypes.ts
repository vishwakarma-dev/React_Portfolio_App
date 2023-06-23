export interface About {
	quote: string;
	description: string;
}

export interface Experience {
	position: string;
	company: string;
	duration: string;
	description: string;
}

export interface Education {
	degree: string;
	institution: string;
	duration: string;
}

export interface Project {
	name: string;
	description: string;
	link: string;
}

export interface Contact {
	email: string;
	phone: string;
	linkedin: string;
	github: string;
}

export interface IUserProfile {
	name: string;
	title: string;
	location: string;
	about: About;
	experiences: Experience[];
	education: Education[];
	skills: string[];
	projects: Project[];
	languages: string[];
	contact: Contact;
}