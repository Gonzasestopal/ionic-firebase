import { Comment } from 'comment';

export class Notice {
	
	constructor(
		title: string,
		description: string,
		created: Date,
		place: string,
		time: Date,
		comments: Comment[],
	)
		
		