export type UserType = {
	id: number;
	node_id: string;
	username: string;
	email: string;
	password: string;
};

export type PostType = {
	id: number;
	node_id: string;
	post_id: string;
	user_id: string;
	title: string;
	content: string;
	created_at: Date;
};

export type CommentsType = {
	id: number;
	node_id: string;
	post_id: string;
	user_id: string;
	content: string;
	created_at: Date;
};

export type CountryType = {
	id: string;
	name: string;
	timezones: string[];
};
