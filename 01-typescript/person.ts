

export class Person {

	roles: Array<string> = [];

	constructor(private id: number, 
				private name: string, 
				private age: number) {

	}

	sayHello(): void {
		console.log(`Hello, my name is ${this.name}`);
		this.roles.forEach(role => {
			console.log(`I work in ${role}`);
		});
	}

}