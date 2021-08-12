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
                        name: "shift",
                        html:
                        `<p>Second of four in the programming languages series of projects, <span class="italic">shift</span> is a return to a more traditional syntax. Using only characters that can be accessed when the Shift key is held down on a U.S. layout keyboard, and taking inspiration from Bash syntax, shift provides 26 registers and 4096 words of memory for the program. Although stack frames are a bit trickier to work with, the readability is very much improved over beep boop.</p>
                        <p>If you'd like to check out <span class="italic">shift</span> for yourself, you can find it <a href="https://danlliu.github.io/shift" target="_blank" rel="noopener noreferrer"> here</a>!</p>`
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
                        name: "Maze Maker",
                        html:
                        `<p>One of my earliest HTML projects, I implemented the Aldous-Broder algorithm to randomly generate mazes of an arbitrary size. The mazes are displayed using HTML canvas. Due to the algorithm used to generate the maze, every cell is reachable from the beginning, and there is a unique solution from beginning to end.</p>
                        <p>If you'd like to check out Maze Maker for yourself, you can find it <a href="https://danlliu.github.io/Maze-Maker" target="_blank" rel="noopener noreferrer">here</a>!</p>`
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
                        <p>If you would like to check out Hangman for yourself, you can find it <a href="https://arryan135.github.io/hangman/" target="_blank" rel="noopener noreferrer">here</a>! (If it feels too zoomed in, just zoom out)</p>
                        <p>If you would like to know more about the game’s implementation details, check out my GitHub <a href="https://github.com/arryan135/hangman" target="_blank" rel="noopener noreferrer">repo</a>.</p>`
                    },
                    {
                        name: "chatroom",
                        html:
                        `<p><span class="italics">chatroom</span> is a chat application that allows users to create and join rooms. Each user is uniquely identified by a random string of four hex digits. Users can tag each other using their identifier. Using socket.io, multiple computers on the same network can join the same rooms, and different rooms will not intefere with each other.</p>
                         <h4>Image Gallery:</h4>
                         <div class="container mb-3">
                            <div>
                                <img class="img-fluid" src="img/chatroom1.png" aria-describedby="chatroom1-caption">
                            </div>
                            <small id="chatroom1-caption">The main interface of chatroom.</small>
                         </div>`
                    },
                    {
                        name: "Turret Wars",
                        html:
                        `<p>Over the course of approximately a week, I designed a space-themed shooter game. In this game, your aim is to take out turrets before they take you out. After a few levels, you're able to use shields to take damage, and later on use an EMP to stop turrets from shooting temporarily. The project as a whole was over 3000 lines of Swift code, and was coded using Apple's SpriteKit framework for the physics and animation.</p>
                         <h4>Image Gallery:</h4>
                         <div class="container mb-3">
                            <div>
                                <img class="img-fluid" src="img/turret1.png" aria-describedby="turret1-caption">
                            </div>
                            <small id="turret1-caption">A sniper turret shooting a bullet at the player.</small>
                         </div>
                         <div class="container mb-3">
                            <div>
                                <img class="img-fluid" src="img/turret2.png" aria-describedby="turret2-caption">
                            </div>
                            <small id="turret2-caption">A basic turret shooting at the player, who can hide behind the barriers for cover.</small>
                         </div>
                         <div class="container mb-3">
                            <div>
                                <img class="img-fluid" src="img/turret3.png" aria-describedby="turret3-caption">
                            </div>
                            <small id="turret3-caption">The upgrade screen of Turret Wars, allowing the player to make their spaceship better.</small>
                         </div>`
                    },
                    // {
                    //     name: "linktracker",
                    //     html:
                    //     `<p>During the pandemic, many of us use virtual conferencing software such as Zoom or Google Meet to collaborate with others. However, it can be tough to keep track of the myriad links used to join different meetings. That's why I developed linktracker, an app that helps you keep track of meeting links in your browser. Using the browser's storage, linktracker is able to remember when your meetings take place and the links associated with them, and gives you the option to filter events in different ways. linktracker also includes some convenience features such as editing events, and dark mode.</p>
                    //     <p>If you'd like to try out linktracker for yourself, you can find it <a href="https://danlliu.github.io/linktracker" target="_blank" rel="noopener noreferrer">here</a>!</p>`
                    // }
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
