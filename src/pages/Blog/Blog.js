import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div>
           <div className=" bg-gradient-to-r from-slate-500 to-slate-800     text-white my-6">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">React</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What are the different ways to manage a state in a React application?</a>
			<p className="mt-2">Which state management is best in React? React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise..</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400"></a>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
				</a>
			</div>
		</div>
	</div>
           </div>
           <div className="bg-gradient-to-r from-slate-800 to-slate-500 text-white">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Dec 12, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">How does prototypical inheritance work?</a>
			<p className="mt-2">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object..</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400"></a>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">Romario</span>
				</a>
			</div>
		</div>
	</div>
           </div>
           <div className="bg-gradient-to-r from-slate-500 to-slate-800 text-white my-6">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">March 7, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is a unit test? Why should we write unit tests?</a>
			<p className="mt-2">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages..</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400"></a>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">Jacklin</span>
				</a>
			</div>
		</div>
	</div>
           </div>
           <div className="bg-gradient-to-r from-slate-800 to-slate-500 text-white my-6">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Feb 1, 2021</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">React vs. Angular vs. Vue?</a>
			<p className="mt-2">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400"></a>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">Thomas Emav</span>
				</a>
			</div>
		</div>
	</div>
           </div>
        </div>
        </div>
    );
};

export default Blog;