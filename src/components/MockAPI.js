/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
export class MockAPI {

    constructor(){
        this.training = {};
		this.courses = [];
    }
  getActivityTriggers(){

    }
  getActivityActions(){

  }
	getCoursesByTrackName(){
		let jsonString = [{
			Id: 1,
			Name: "DI Why? Getting a Grip on Dependency Injection",
			Description: "What is Dependency Injection? And why would we want to use it? That's what we're here to answer. We'll start by looking at the problems caused by tight coupling. Then we'll use some DI patterns such as constructor injection and property injection to break that tight coupling. We'll see how loosely-coupled applications are easier to extend and test. With a better understanding of the basic patterns, we'll remove the magic behind DI containers so that we can use the tools appropriately in our code.",
			Location : "Nashville, TN"
		},
		{
			Id: 2,
			Name: "Unit Testing Makes Me Faster: Convincing Your Boss, Your Co-Workers, and Yourself",
			Description: "Bosses hate unit testing. They see it as code that doesn't contribute to the final product. But here's the truth: unit testing makes us faster. We'll look at specific examples of how unit tests save time in the development process, whether we're creating UI-based applications or server-side libraries. With this in hand, we can show our boss how testing makes us faster and lets us move forward confidently and quickly.",
			Location : "Nashville, TN"
		},
		{
			Id: 3,
			Name: "IEnumerable, ISaveable, IDontGetIt: Understanding .NET Interfaces",
			Description: "Do you want code that's maintainable, extensible, and easily testable? If so, then C# interfaces are here to help. We’ll take a look at how we can use interfaces effectively in our code -- starting at the beginning ('What are interfaces?') and then exploring why we want to use them. Along the way we'll use existing interfaces, implement own interfaces, and take a look at dynamic loading, unit testing, and dependency injection. All of which is made easier with interfaces.",
			Location : "San Jose, CA"
		},
		{
			Id: 4,
			Name: "I'll Get Back to You: Task, Await, and Asynchronous Methods",
			Description: "There's a lot of confusion about async/await, Task/TPL, and asynchronous and parallel programming in general. So let's start with the basics and look at how we can consume asynchronous methods using Task and then see how the 'await'' operator can makes things easier for us. Along the way, we’ll look at continuations, cancellation, and exception handling.",
			Location : "St Louis, MO"
		}
		];
		if(this.courses.length === 0){
			this.courses = jsonString;
		}

        return this.courses;
	}

   getTrack(){
    	let jsonString = {
			Id: 1,
			Name: "The Allen Development Training Track",
			Description: "Smarter, faster, better. This training is to help you reach all of your goals and so you can win for you and your family in coding and life."
		};

        this.Track = jsonString;
		console.log(this.Track)
        return this.Track;
    }

	deleteCourseById(id){
		for (var i = 0; i < this.courses.length; i++){
			if(this.courses[i].Id === id){
				this.courses.splice(i, 1);
			}
		}
	}
}
let instance = new MockAPI();
export default instance;
