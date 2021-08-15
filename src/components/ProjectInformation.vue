<template>
    <div class="container-fluid row py-3" id="pi-outer">
        <div class="col-xl-5 mb-3 list-group" id="pi-list" style="overflow-y: auto">
            <a v-for="(info, idx) of projectInformation" :key="idx" @click="click(idx)"
               class="list-group-item list-group-item-action" :class="currentIdx === idx && 'active'"
               :aria-current="currentIdx === idx ? 'true' : 'false'">
                {{info.name}}
            </a>
        </div>
        <hr id="pi-line"/>
        <div class="col-xl-7 mb-3" style="overflow-y: auto" id="pi-info">
            <!-- project info goes here -->
            <div class="p-3" v-if="currentIdx !== -1"
                 v-html="`<h3>${projectInformation[currentIdx].name}</h3>` + projectInformation[currentIdx].html"/>
            <p class="p-3" v-else>Click on one of the projects in the list to learn more about it!</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectInformation",
        data: function() {
            return {
                currentIdx: -1,

                projectInformation: [
                    {
                        name: "CheatBook",
                        html:
                        `<p>In the past, I have used coding documentations to review the forgotten functional nuances of many JS frameworks. I even tried making coding cheatsheets. But reading code without actually executing it doesn’t help me review the concepts effectively. Of course, I can always run that code in an IDE. But executing code specific to a framework requires some work like setting up your directory and applying other configurational modifications which can be tedious.</p>
                         <p>Therefore using <span class="italic">React</span> and <span class="italic">Typescript</span>, I developed CheatBook which is an interactive browser-based coding environment. It is like a Jupyter Notebook, but for <span class="italic">JavaScript</span>. It utilizes a cell-based layout where the user can choose between a code editor or a markdown text editor. While using the code editor cell, this app utilizes <span class="italic">Esbuild</span> to transpile and bundle the code and safely execute it directly in the browser. By leveraging web assembly and caching, the execution times are as fast as those of a traditional IDE. All of the complex state within the app is handled using <span class="italic">Redux</span> and <span class="italic">React Hooks</span>. Moreover, this frontend is also patched up to a <span class="italic">NodeJS</span> backend. By using a <span class="italic">Redux middleware</span> and an <span class="italic">Express server</span>, CheatBook persists the contents in the cells on a local JSON file.</p>
                         <p>CheatBook is designed to be used as a CLI on your local machine and you can learn more about its package-based architecture at the <a href="https://www.npmjs.com/package/cheatbook" target="_blank" rel="noopener noreferrer">NPM registry</a>.</p>
                         <p>If you would like to check out CheatBook for yourself, you can find it <a href="https://arryan135.github.io/local_client_cheatbook/" target="_blank" rel="noopener noreferrer">here</a>!</p>
                         <p>If you would like to know more about this CLI’s implementation details, check out my GitHub <a href="https://github.com/arryan135/cheatbook" target="_blank" rel="noopener noreferrer">repo</a>.</p>`
                            
                    },
                    {
                        name: "Palette Splash",
                        html:
                        `<p>Palette Splash is a responsive <span class="italic">React</span> web application that can create and store different palettes. This multiple-page application is client-side rendered by integrating <span class="italic">React Routers</span>. This app extensively uses <span class="italic">React form validation</span> techniques to ensure that the user avoids adding repetitive colors or color names in the same palette. While ordering the colors during palette creation, this app leverages functionalities from the <span class="italic">React Sortable Higher Order Component(HOC)</span> library to create an invisible grid that allows the two-dimensional movement of the color boxes. This makes ordering color boxes in the palette extremely user-friendly. The app is built upon components from <span class="italic">MaterialUI</span>. And to avoid any specificity conflicts, the custom styles in the app are implemented using <span class="italic">JSS</span>.</p>
                         <p>To improve readability, the color text dynamically darkens or lightens depending on the surrounding color’s relative luminosity. Using <span class="italic">React’s state management</span>, the app stores and can render eight different scales for all colors in a palette thereby providing the user with more customizable color options. The app also accesses the user’s clipboard to save the selected color’s format in common color representation formats like RGB, RGBA, and HEX. To implement performance optimizations, this app utilizes <span class="italic">React Pure Components</span> to prevent unnecessary renders. Finally, the app utilizes the browser’s <span class="italic">localStorage</span> object to persist new palettes created by the user. </p>
                         <p>If you would like to check out Palette Splash for yourself, you can find it <a href="https://arryan135.github.io/palette_splash/" target="_blank" rel="noopener noreferrer">here</a>!</p>
                         <p>If you would like to know more about the implementation details, check out my GitHub <a href="https://github.com/arryan135/palette_splash" target="_blank" rel="noopener noreferrer">repo</a>.</p>`
                    },
                    {
                        name: "Chat with me!",
                        html:
                        `<p>This is a real-time chat application build using <span class="italic">Socket.io</span> and <span class="italic">NodeJS</span>. It allows users to create and join rooms so that they can chat among themselves. While chatting, the users are also given the functionality to share their current location via a simple button click.</p>
                         <p>The process of creating a user and a room first goes through some validation, which makes sure that the username and the room name are unique. After this validation, using <span class="italic">Socket.io</span> a network TCP link is established between the server and clients. This underlining TCP network connection enabled using <span class="italic">Socket.io</span> makes sure that users are effectively able to chat among themselves in real-time. Built upon an <span class="italic">Express</span> server, the <span class="italic">Socket.io</span> server is responsible for handling client-related events. These events range from allowing a client to join rooms, send messages, send google map location links, and disconnecting a user’s socket connection when he/she leaves the chat app. Subsequently, this server-side chat data is injected into <span class="italic">Mustache</span> templated client-side <span class="italic">HTML</span> files using <span class="italic">Vanilla JavaScript</span>. This client-side <span class="italic">JavaScript</span> is also responsible to implement a thoughtful auto-scroll functionality for the chats.</p>
                         <p>If you would like to check out this chat app for yourself, you can find it <a href="https://arryan-websocket-chat-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a>!</p>
                         <p>If you would like to know more about this app’s implementation details, check out my GitHub <a href="https://github.com/arryan135/Node-socket-chat-app" target="_blank" rel="noopener noreferrer">repo</a>.</p>`
                    },
                    {
                        name: "Task Manager",
                        html:
                        `<p>Task Manager is a backend application that is centered around the needs of a user. This <span class="italic">REST API</span> is designed such that the users can set up login credentials for their accounts and create, read, update and delete their tasks. All the information about the users is securely stored using a <span class="italic">MongoDB server</span>.</p>
                        <p>Task Manager is a <span class="italic">NodeJS API</span>, whose different routes(get, post, patch, delete) are implemented using <span class="italic">Express</span> and the schema for a user and a task is implemented using <span class="italic">Mongoose</span>. All the routes in the API use a custom <span class="italic">Express middleware</span> that leverages capabilities from <span class="italic">JSON Web Tokens</span> to ensure effective authentication. In this way, users are authorized to only read, update or delete their own tasks. To protect the users' login credentials in the database, all the passwords are hashed before storage. Through the <span class="italic">SendGrid API</span>, authenticated users are also able to send emails using <span class="italic">NodeJS</span>. All of this functionality, which is written using asynchronous JS code, is tested extensively using the <span class="italic">Jest</span> JavaScript testing framework.</p>
                        <p>Not only did this project expose me to several backend technologies, but it also inclucated in me the art of designing REST APIs.</p>
                        <p>If you would like to know more about the API’s implementation details, check out my GitHub <a href="https://github.com/arryan135/task_manager" target="_blank" rel="noopener noreferrer">repo</a>.</p>`
                    },
                    {
                        name: "Yahtzee ",
                        html:
                        `<p>I developed Yahtzee to reinforce the probability concepts I learned in EECS 203. This <span class="italic">React</span> application is a chance-and-strategy dice rolling game that is played over 13 rounds. During each round, the players roll five 6-sided dice. They may click on any number of dice to “freeze” or “unfreeze” them (frozen dice are displayed in a different color), and they may re-roll the unfrozen dice up to 2 times. After each round, the player assigns their dice to any unclaimed scoring category, where each category scores differently. After 13 rounds, the game is over, and the player’s final score is the total of each scoring category.</p>
                         <p>Developing this <span class="italic">React</span> application, helped me build upon my skills to efficiently design web applications using multiple stateful parent components that pass down their state as props to multiple child components. Every click to either roll the dice or score points, fires custom <span class="italic">CSS animations</span>, executes extensive rule checking <span class="italic">JavaScript</span> code and, according to the results of those rules, triggers several event handlers that alter the state in multiple parent and child <span class="italic">React</span> components. To optimization the production build's performance, this application also utilizes a <span class="italic">Service Worker</span> that executes efficient caching so that the app can load faster on subsequent visits in production, while also providing the app offline capabilities.</p>
                         <p>If you would like to check out Yahtzee for yourself, you can find it <a href="https://arryan135.github.io/yahtzee/" target="_blank" rel="noopener noreferrer">here</a>! (If it feels too zoomed in on your browser, just zoom out)</p>
                         <p>If you would like to know more about the game’s implementation details, check out my GitHub <a href="https://github.com/arryan135/yahtzee" target="_blank" rel="noopener noreferrer">repo</a>.</p>`
                    },
                    {
                        name: "Lights Out",
                        html:
                        `<p>Lights Out is a puzzle game, played on a grid of individual lights, which can be lit or unlit. The puzzle is won when all of the lights are turned off. You can click on a cell to toggle the light in a cell, but it also toggles the light above it, to the left of it, to the right of it, and below it. Cells on the edge or in the corner won’t flip as many lights, since they are missing some neighbors.</p>
                         <p>All the logic of the game is handled by the changes in the state and props of the parent and child <span class="italic">React</span> components. Using <span class="italic">JavaScript</span> logic, the app makes sure that the random board created at the start of the game is always solvable. For optimizing the production build's performance, this is another application that also utilizes a <span class="italic">Service Worker</span> that lets this app load faster on subsequent visits in production, and gives it offline capabilities.</p>
                         <p>If you would like to check out Lights Out for yourself, you can find it <a href="https://arryan135.github.io/lights_out/" target="_blank" rel="noopener noreferrer">here</a>! I am personally terrible at this game and I hope you are better at playing it than I am!</p>
                         <p>If you would like to know more about the game’s implementation details, check out my GitHub <a href="https://github.com/arryan135/lights_out" target="_blank" rel="noopener noreferrer">repo</a>.</p>`
                    },
                    {
                        name: "Hangman",
                        html:
                        `<p>This is a game where the player needs to guess the correct word before the maximum number of guesses, which is symbolized by a complete stick man figure representation.</p>
                        <p>The game logic is primarily implemented through the changes in the props and states of several <span class="italic">React Components</span>. Furthermore, to ensure performance optimization in the execution time of the game, I developed a <span class="italic">Service Worker</span> that runs in conjunction with the game to serve static image assets from the local cache. This lets the game load faster on subsequent visits in production and gives it offline capabilities. However, it also means that users of this game will only see deployed updates on the "N+1" visit to a page since previously cached resources are updated in the background.</p>
                        <p>If you would like to check out Hangman for yourself, you can find it <a href="https://arryan135.github.io/hangman/" target="_blank" rel="noopener noreferrer">here</a>! (If it feels too zoomed in on your browser, just zoom out)</p>
                        <p>If you would like to know more about the game’s implementation details, check out my GitHub <a href="https://github.com/arryan135/hangman" target="_blank" rel="noopener noreferrer">repo</a>.</p>`
                    },
                    // {
                    //     name: "Turret Wars",
                    //     html:
                    //     `<p>Over the course of approximately a week, I designed a space-themed shooter game. In this game, your aim is to take out turrets before they take you out. After a few levels, you're able to use shields to take damage, and later on use an EMP to stop turrets from shooting temporarily. The project as a whole was over 3000 lines of Swift code, and was coded using Apple's SpriteKit framework for the physics and animation.</p>
                    //      <h4>Image Gallery:</h4>
                    //      <div class="container mb-3">
                    //         <div>
                    //             <img class="img-fluid" src="img/turret1.png" aria-describedby="turret1-caption">
                    //         </div>
                    //         <small id="turret1-caption">A sniper turret shooting a bullet at the player.</small>
                    //      </div>
                    //      <div class="container mb-3">
                    //         <div>
                    //             <img class="img-fluid" src="img/turret2.png" aria-describedby="turret2-caption">
                    //         </div>
                    //         <small id="turret2-caption">A basic turret shooting at the player, who can hide behind the barriers for cover.</small>
                    //      </div>
                    //      <div class="container mb-3">
                    //         <div>
                    //             <img class="img-fluid" src="img/turret3.png" aria-describedby="turret3-caption">
                    //         </div>
                    //         <small id="turret3-caption">The upgrade screen of Turret Wars, allowing the player to make their spaceship better.</small>
                    //      </div>`
                    // },
                    {
                        name: "What is the weather like?",
                        html:
                        `<p>This is one of my earliest <span class="italic">NodeJS</span> applications. This is a weather application that fetches the real-time weather information for the location entered by the user.</p>
                         <p>The application is implemented using a backend <span class="italic">Express</span> server which is also wired up to a frontend <span class="italic">Javascript Client</span>. Embedded within an <span class="italic">Express GET route</span>, the application first processes the latitude and longitude of the location entered by the user using the <span class="italic">Mapbox API</span>. This geolocation data is then passed on to the <span class="italic">Weather Stack API</span> to get real-time weather information. These subsequent API requests are made through nested <span class="italic">asynchronous JavaScript</span> code and the relevant weather information is then extracted from the JSON data received from these requests. Finally, the weather data is injected into the frontend HTML. This frontend HTML is templated using <span class="italic">Handlebars</span>, which streamlines the process of injecting data acquired from asynchronous code.</p>
                         <p>If you would like to check out this application for yourself, you can find it <a href="https://arryan-weather-application.herokuapp.com" target="_blank" rel="noopener noreferrer">here</a>!</p>
                         <p>If you would like to know more about this application’s implementation details, check out my GitHub <a href="https://github.com/arryan135/NodeJS-Weather-App" target="_blank" rel="noopener noreferrer">repo</a>.</p>`
                    },
                    {
                        name: "Instagram Database Clone",
                        html:
                        `<p>This is a partial clone of Instagram’s database made primarily using <span class="italic">mySQL</span>.</p>
                         <p>The clone consists of <span class="italic">SQL tables</span> for the users, photos posted by the users, users’ comments, likes for users’ photos, users’ followers, and tags for the users’ photos. Most of the table definitions contain a <span class="italic">Foreign Key</span> argument with appropriate IDs in order to establish a <span class="italic">many-to-many relationship</span>. Using <span class="italic">JavaScript</span> and the <span class="italic">faker library</span>, I populated the tables with artificial data. The implementation to add artificial data also makes sure to include Instagram bots that like every picture and follow every user. This addition was done intentionally as after setting up the data, I used <span class="italic">SQL</span> scripts to find all the information pertaining to Instagram Bots in my database. Throughout the project, I asked myself many other hypothetical questions about my dataset and I attempted to answer them using <span class="italic">SQL</span> scripts.</p>
                         <p>Furthermore, entries to a table that signify a user attempting to follow itself are stopped by using <span class="italic">SQL Data Triggers</span>. This trigger executes before an invalid self-follow insert is executed. Along the same lines, when a user unfollows someone, I implemented a data trigger to keep a record of the unfollow history for that user and it executes after the unfollow occurs.</p>
                         <p>If you would like to check out the <span class="italic">SQL</span> scripts or know more about how I attempted to answer several other hypothetical questions pertaining to my artificial Instagram database, check out my GitHub <a href="https://github.com/arryan135/instagram_db_clone" target="_blank" rel="noopener noreferrer">repo</a>!</p>`
                    }
                ]
            }
        },
        methods: {
            click: function(index) {
                console.log(`click ${index}`);
                this.currentIdx = index;
            }
        }
    }
</script>

<style scoped>

    #pi-outer {
        height: 85vh;
    }

    #pi-list {
        height: 100%;
    }

    #pi-info {
        height: 100%;
    }

    #pi-line {
        display: none;
    }

    small {
        display: block;
    }

    @media (max-width: 1199.98px) {

        #pi-outer {
            height: 125vh;
        }

        #pi-list {
            height: 20%;
        }

        #pi-info {
            height: 80%;
        }

        #pi-line {
            display: initial;
        }
    }
</style>
