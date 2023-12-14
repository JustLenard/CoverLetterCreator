import { StepsDataT } from './types'

export const StepsData: StepsDataT[] = [
	{
		initialData: `Name:
Cociug Vitalie

Introduction:
I am a self-taught developer with approximately 3 years of coding experience. Through my chosen path, I've cultivated a strong sense of autonomy and a can-do attitude. I excel in navigating ambiguity and consistently hit the ground running.

Professional Experience
Tara Interactive, Web Developer
Feb 2022 – Jun 2023
•I actively contributed to two React projects, solo-ported one of them to React Native, and played a crucial role in developing the React front-end for a complex surveillance application with micro frontends, microservices, multitenancy, websockets, and real-time surveillance features.

•I assumed a proactive role in project ownership, taking charge of coding new features, resolving issues, and conducting analyses to evaluate the benefits and trade-offs of different solutions.

•Provided estimates and technical input to help guide feature development, including raising questions about the necessity of features, suggesting alternatives, and explaining any difficulties or offering solutions

•Deployed code to Production, Staging and QA environments

•Participated in code reviews and provided feedback to improve code quality and maintainability

•Helped create procedures and guidelines for project development, ensuring consistency and efficiency in the development process

•Helped colleagues solve technical problems by offering guidance, sharing knowledge, and suggesting solutions


Projects I'be built:
Chatify, Chat application

Github - https://github.com/JustLenard/webSocketApp
Live Demo - https://chatify-app.up.railway.app/login

Features:
•Real time chat application
•Responsive design
•Group and one on one chat
•Ability to chat with some unique personalities created with OpenAi's gpt-3.5 model
•CRUD (Create, read, edit and delete) functionality for messages
•Real time, persistent notifications created when you receive a message
•Sign up, persistent login and automatic access token refresh

Frontend Technologies:
•React +TypeScript
•Redux Toolkit and Context API
•Socket.IO
•Axios and axios interceptors

Backend Technologies:
•NestJS + TypeScript
•PostgreSQL (TypeORM for database interactions)
•JWT for authentication and JWT guards for authorization
•OpenAI API (gpt-3.5-turbo)
•Argon2 for hashing data


My Skills
React / React NativeRedux 
Toolkit, React-router, Formik, Webpack, Antd, MUI, REST

NodeJs / NestJSExpress
MVC, OOP

TypeScript / JavaScript
webSockets, async/await, Axios, events, try/catch

PostgreSQLTypeORM
joins, CRUD

DevOpsLinux, Docker

Html / Css
Scss, Styled Components

Jest
Unit Testing, React Testing Library`,
		texts: [
			'Tell about yourlsef. Who are your? What can you? What did you do? What skills do you have? Why should you be hired for this job.',
			'Personally I just copy and pasted information from my CV (see the default text on the left). It is good to also write some short stories / events of situations that my showcase a particular skill of your that may distiguish you from other candidates',
			'Give the AI something to work with',
		],
		title: 'Personal information',
	},

	{
		initialData: `Dear Hiring Team at EveryMatrix,

I hope this message finds you well. My name is Cociug Vitalie, a passionate, I am a self-taught developer with approximately 3 years of coding experience. I am writing to express my immense interest in the Frontend Developer position at your company, EveryMatrix. My unique blend of development skills, adaptability, and resilience, along with my desire to be a part of a groundbreaking organization, make me a strong contender for this role.

At Tara Interactive, I actively contributed to two React projects, one of which I then solo-ported to React Native. Additionally, I was an integral part of a 3 man team that developed a complex surveillance application with microservices, real-time surveillance features, and more. I took the initiative in project ownership, coding new features, and resolving issues. I also played a role in deploying codes across multiple environments and ensuring code quality and maintainability through constructive code reviews.

One of my proudest achievements is the building of Chatify, a real-time chat application featuring group and one-on-one chat, CRUD operations, real-time notifications, and integration with OpenAI's gpt-3.5 model. The project was a testament to my ability to utilize modern technologies and frameworks effectively, a skill that directly aligns with the requirements of your job description.

I am quite familiar with the technologies you use - React, Redux, WebPack, NodeJS, and working with HTTP2 and WebSockets APIs, as well as deploying containerized apps via Docker, Kubernetes, and continuous delivery pipelines. I can confidently say that my experiences have prepared me well enough to make significant contributions to the EMFE department.

Working at EveryMatrix is particularly appealing to me because of the company's emphasis on staying on the bleeding edge of technology. I am inspired by your commitment to delivering top-notch iGaming software, content, and services. The prospect of contributing to your mission and growing alongside an extraordinary team is an opportunity I deeply yearn for.

In conclusion, I am eager not just to work with modern web technologies, but also to contribute towards making EveryMatrix the best B2B iGaming provider in the world. I truly believe that I can add value to your team and your mission. I look forward to an opportunity to further discuss my application and showcase how my skills and experiences align with your needs.

Thank you for taking the time to consider my application. 

Sincerely,
Cociug Vitalie
        `,
		texts: [
			'Give the AI a cover letter example to work with if you want. This makes the cover letter that will be created to have a more predictable structure.',
			'Feel free to write your own example of cover letter, copy and paste a already existing or using this already created example',
			'If you want a more unpredictable result, delete the existing text and leave the field empty',
		],
		title: 'Cover letter example',
	},
	{
		initialData: `Full Stack Developer (React/TypeScript/AWS Lambda) x 4 - All Levels - Remote - New

£50,000 - £75,000 + Bonus + Excellent Benefits + Remote Working

A renowned organisation - recognised as the leader in its field - requires a number of Full Stack Engineers with strong experience of React, TypeScript and AWS Lambda as part of a new function!

Suitable candidates will be motivated, thoughtful, and want to be involved in the full stack from CI/CD, automated testing, tooling, development, and operations.

Successful candidates will:
*Be experienced Full Stack Engineers with experience across Front End, Back End and DevOps
*Posses a DevOps mindset with experience of AWS or similar
*Have experience of the following: AWS Lambda, TypeScript, React coupled with automated testing, Agile and CI/CD

Additionally, you will:
*Be a good communicator / collaborator
*Ideally have coaching & mentoring skills
*Possess a continuous improvement mindset
*Be proactive and take initiative
*Have a product mindset and be quality focused


What's on Offer?
*Competitive salary
*Annual Bonus
*Remote Working
*25 days holiday plus option to purchase additional leave
*Excellent pension scheme
*Sharesave scheme
*Health care plans
*Gym memberships

Please send your CV for an informal chat and full job description.

Excellent opportunity to join an organisation that is willing to invest heavily in your development and future!        
        `,
		texts: [
			'Write useful information about the job about the company. Maybe the company has a great culture. Write it in here. Maybe there are some specific mentions that the job need attention to detail. This will help nudge the outcome to produce something that will empahsize this.',
			'Also, feel free to just copy and paste the job description if you are lazy',
		],
		title: 'Job / company description',
	},
	{
		title: 'Finish',
		texts: ['Here is your cover letter'],
		initialData: '',
	},
]
