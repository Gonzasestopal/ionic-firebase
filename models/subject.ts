import { User } from 'user';
import { Notice } from 'notice';

export class Subject {
	
	constructor(name: string, teacher: User, description: string, period: string, notice: Notice[]){
		this.name = name;
		this.teacher = teacher;
		this.description = description;
		this.period = period;
		this.notice = notice;
	}
}
		
		