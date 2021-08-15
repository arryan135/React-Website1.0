<template>
    <div id="app">
        <i id="scroll-down" class="bi-chevron-down" style="position: fixed; bottom: 32px; left: calc(50% - 16px);
        font-size: 2rem; transition: bottom 0.25s ease, opacity 0.50s ease;
        color: white; opacity: 0"/>
        <div class="container" style="position: fixed; top: 16px; z-index: 2048">
            <h1 class="font-monospace" id="helloworld" style="font-size: 112px; color: #FFF">hey there!</h1>
        </div>
        <nav class="navbar navbar-expand-xl navbar-light w-100" id="navbar" style="position: fixed; top: 0;
    padding: 16px 0; background-color: #FFFFFF; z-index: 2048;
    display: none;">
            <div class="container-fluid">
                <p class="font-monospace h1 mb-0" style="font-size: 32px;">Aryan Malik</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
                        aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"/>
                </button>
                <div class="collapse navbar-collapse" id="navbar-links">
                    <div class="navbar-nav ms-3">
                        <a class="nav-link" href="#section-about-me">about me</a>
                        <a class="nav-link" href="#section-edu">education</a>
                        <a class="nav-link" href="#section-coursework">coursework</a>
                        <a class="nav-link" href="#section-projects">projects</a>
                        <a class="nav-link" href="#section-work-exp">work experience</a>
                        <a class="nav-link" href="#section-research">research experience</a>
                        <a class="nav-link" href="#section-contact">contact</a>
                        <!-- <a class="nav-link" href="#section-resume">résumé</a> -->
                    </div>
                </div>
            </div>
        </nav>

        <div class="section container" style="margin-top: 100vh;">
            <a class="anchor" id="section-about-me"/>
            <h2><i class="bi-person-lines-fill"/> About Me</h2>
            <p>Hey, I am Aryan! As a driven, self-starter, and relentless learner, I am passionate about Front End and Back End Software Engineering. To apply my software engineering skills, I have worked on several coding projects. To learn more about them, head to the <a href="#section-projects">projects section</a>!</p>
        </div>

        <div class="section container">
            <a class="anchor" id="section-edu"/>
            <h2><i class="bi-lightbulb"/> Education</h2>
            <div class="container d-flex flex-row flex-wrap p-3">
                <div class="card m-0 edu-card">
                    <div class="card-body">
                        <h5 class="card-title">University of Michigan</h5>
                        <h6 class="card-subtitle mb-2 text-muted"><b>B.S. in Computer Science</b>;
                            College of Literature, Science, and the Arts</h6>
                        <p>Fall 2020 - present</p>
                        <p>Expected Completion: Fall 2023</p>
                        <p>GPA: <b>3.9 / 4.0</b></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section container">
            <a class="anchor" id="section-coursework"/>
            <h2><i class="bi-book"/> Coursework</h2>
            <div class="container row">
                <div class="col-12 col-md-6 col-xl-4 flex-grow-1">
                    <CourseCard course-name="EECS203" course-title="Discrete Mathematics"
                                :description="descriptions['eecs203']"/>
                    <CourseCard course-name="EECS183" course-title="Elementary Programming Concepts"
                                :description="descriptions['eecs183']"
                                class="course-one-col course-two-col"/>
                    <CourseCard course-name="EECS376" course-title="Fundamentals of Computer Science"
                                :description="descriptions['eecs376']"
                                class="course-one-col course-two-col"/>
                    <CourseCard course-name="EECS281" course-title="Data Structures and Algorithms"
                                :description="descriptions['eecs281']"/>
                </div>
                <div class="col-12 col-md-6 col-xl-4 flex-grow-1 course-three-col">
                    <CourseCard course-name="EECS183" course-title="Elementary Programming Concepts"
                                :description="descriptions['eecs183']"/>
                    <CourseCard course-name="EECS376" course-title="Fundamentals of Computer Science"
                                :description="descriptions['eecs376']"/>
                </div>
                <div class="col-12 col-md-6 col-xl-4 flex-grow-1">
                    <CourseCard course-name="EECS280" course-title="Programming and Intro Data Structures"
                                :description="descriptions['eecs280']"/>
                </div>
            </div>
        </div>

        <div class="section container">
            <a class="anchor" id="section-projects"/>
            <h2><i class="bi-code-slash"/> Projects</h2>
            <ProjectInformation/>
        </div>

        <div class="section container">
            <a class="anchor" id="section-work-exp"/>
            <h2><i class="bi-briefcase"/> Work Experience</h2>
            <div class="container-fluid row g-3">
                <div class="col-12 col-lg-6 col-xl-4 p-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Supplemental Instruction(SI) Leader for EECS 280 (Intro Data Structures)</h5>
                            <h6 class="card-subtitle mb-2">University of Michigan</h6>
                            <h6 class="card-subtitle mb-2">Engineering Center for Academic Success</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Fall 2021 - Present</h6>
                            <hr/>
                            <ul>
                                <li>Teaching students programming and data structures in C++.</li>
                                <li>Responsibilities include:
                                    <ul>
                                        <li>Aided students in building conceptual clarity of fundamental data structures concepts.</li>
                                        <li>Helped students understand project specifications, coached them on implementation strategies through collaborative learning and weekly lectures.</li>
                                        <li>Resolved IDE and logic errors in student projects via office hours.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6 col-xl-4 p-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Supplemental Instruction(SI) Leader for MATH 215 (Multivariable Calculus)</h5>
                            <h6 class="card-subtitle mb-2">University of Michigan</h6>
                            <h6 class="card-subtitle mb-2">Engineering Center for Academic Success</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Winter 2021 - Present</h6>
                            <hr/>
                            <ul>
                                <li>Tutored students in Multivariable Calculus, which is the third course in the sequence of four calculus courses.</li>
                                <li>Responsibilities include:
                                    <ul>
                                        <li>Facilitated discussions of critical course concepts and problem-solving of example problems and/or exam-type problems.</li>
                                        <li>Modeled and taught critical learning skills like problem-solving, content analysis, exam preparation techniques, and error analysis.</li>
                                        <li>Promoted student behavior conducive to academic success and provided a positive environment in which learning can occur.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6 col-xl-4 p-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">I could be working for your organization!</h5>
                            <hr/>
                            <p>I'm always on the lookout for new opportunities, espcially those pertaining to Software Engineering. If you find my skills relevant, feel free to <a href="#section-contact">contact me</a>!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section container">
            <a class="anchor" id="section-research"/>
            <h2><i class="bi-clipboard-data"/> Research Experience</h2>
            <div class="container-fluid row g-3">
                <div class="col-12 col-md-6 p-3">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">Development of the Materials Simulation Toolkit for Machine Learning</h5>
                            <h6 class="card-subtitle mb-1">University of Wisconsin Madison, Department of Materials Science and Engineering</h6>
                            <h6 class="card-subtitle mb-2 text-muted">January 2020 - May 2020</h6>
                            <p><span class="bold">Advisor:</span> <a
                                    href="https://directory.engr.wisc.edu/mse/Staff/Jacobs_Ryan/" target="_blank"
                                    rel="noopener noreferrer">Ryan Jacobs</a></p>
                            <hr/>
                            <p class="small">The Materials Simulation Toolkit for Machine Learning (MAST-ML) is an automated, open-source toolkit designed to accelerate data-driven materials research. I updated this software with new analysis routines that are central to understanding the performance of machine learning models as they pertain to materials research.</p>
                            <h6 class="small">Machine Learning algorithms I implemented for the MAST-ML framework:</h6>
                            <ul class="small">
                                <li>K-Medoids clustering algorithm that generates data clusters while keeping low memory consumption relative to its competitor K-Means.</li>
                                <li>ElemNet, a deep neural network model that takes only the elemental compositions as inputs and leverages artificial intelligence to automatically capture the essential chemistry to predict materials properties.</li>
                                <li>IRNet, a deep regression network with individual residual learning that places shortcut connections after each layer so that each layer learns the residual mapping between its output and input. This model solves the problem of learning properties of inorganic materials from numerical attributes that are derived from a material composition or crystal structure.</li>
                            </ul>
                            <p class="small">I also utilized my skills in Python's visualization libraries like Matplotlib, Seaborn, and Plotly to make the model's performance visuals more informative.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Informatics Skunkworks</h5>
                            <h6 class="card-subtitle mb-1">University of Wisconsin Madison, Department of Materials Science and Engineering</h6>
                            <h6 class="card-subtitle mb-2 text-muted">September 2019 - December 2019</h6>
                            <p><span class="bold">Advisor:</span> Benjamin Afflerbach</p>
                            <hr/>
                            <p class="small">Informatics Skunkworks is a group dedicated to engaging undergraduates in project-based research, project management, software development, 
                                and applied data science. Here, I researched methods to predict the fatigue strengths of elements from factors such as electron affinity, atomic radii, and other such characteristic data. 
                                By the end of this research, I developed a machine learning model that utilized cross-validation scores to classify results accurately.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 p-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Wisconsin Institute for Discovery</h5>
                            <h6 class="card-subtitle mb-1">University of Wisconsin Madison</h6>
                            <h6 class="card-subtitle mb-2 text-muted">January 2020 - May 2020</h6>
                            <p><span class="bold">Advisor:</span> <a href="http://pages.stat.wisc.edu/~karlrohe/index.html" target="_blank"
                                                                     rel="noopener noreferrer"> Karl Rohe</a></p>
                            <hr/>
                            <p class="small">I worked with a team of undergraduates where we wanted to explore the relationship between median household income and voting in the 2016 presidential election across the US.</p>
                            <p class="small">This research made extensive use of R in conjunction with statistical learning concepts such as simple linear regression, multiple linear regression, cross-validation, Principal Component Analysis(PCA), and regression coefficients.</p>
                            <h6 class="small">We created two highly accurate predictive statistical models to justify that houses with relatively high household incomes vote for the Republican Party</h6>
                            <ul class="small">
                                <li>The first model predicted the percent of people who vote for the Republican Party versus the median household income</li>
                                <li>The second model predicted the percent of people who vote for the Republican Party versus the median household income, international migration rate, population estimate by county in 2016, housing prices in 2016, unemployment rate, and the percent of people with a bachelor's degree education or higher.</li>
                            </ul>
                            <p class="small">The data for all the above-mentioned features was obtained from reputable sources online and cleaned accordingly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section container">
            <a class="anchor" id="section-contact"/>
            <h2><i class="bi-chat-left-dots"/> Contact Me!</h2>
            <div class="container">
                <ul style="list-style: none; padding-left: 0;">
                    <li><a href="mailto:arryan@umich.edu" class="link-clean" target="_blank" rel="noopener noreferrer"><i class="bi-envelope"/> arryan@umich.edu</a></li>
                    <li><a href="https://github.com/arryan135" class="link-clean" target="_blank" rel="noopener noreferrer"><i class="bi-github"/> github.com/arryan135</a></li>
                    <li><a href="https://www.linkedin.com/in/aryanmalik135" class="link-clean"
                           target="_blank" rel="noopener noreferrer"><i class="bi-linkedin"/> my LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <!-- <div class="section container">
            <a class="anchor" id="section-resume"/>
            <h2><i class="bi-file-text"/> Résumé</h2>
            <p>Will be attached soon. Stay tuned!</p>
            <a href="daniel-liu-resume-cs.pdf" class="bi-download mt-3 link-clean link-black" download>
                computer science résumé (159 KB)
            </a>
            <a href="daniel-liu-resume-condensed.pdf" class="bi-download mt-3 link-clean link-black" download>
                condensed résumé (151 KB)
            </a>
            <a href="daniel-liu-resume.pdf" class="bi-download mt-3 link-clean link-black" download>
                full résumé (160 KB)
            </a>
        </div> -->  
    </div> 
</template>

<script>

    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap';
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import CourseCard from "@/components/CourseCard";
    import ProjectInformation from "@/components/ProjectInformation";

    export default {
        name: 'Homepage',
        components: {
            CourseCard,
            ProjectInformation
        },
        mounted: function() {

            let beginHelp = () => {
                document.getElementById(`scroll-down`).style.opacity = 1.0
                this.helperInterval = setInterval(() => {
                    document.getElementById('scroll-down').style.bottom = (this.cycle === 1 || this.cycle === 3 ?
                        '24px' : '32px');
                    this.cycle++;
                    this.cycle %= 10;
                }, 250);

            };

            let scrollHandler = () => {

                if (this.helperInterval == null) {
                    this.helperInterval = setTimeout(beginHelp, 500);
                }

                let scrollAmount = window.scrollY;

                if (scrollAmount > 64) {
                    clearInterval(this.helperLightInterval);
                    document.getElementById(`scroll-down`).style.bottom = '32px';
                    document.getElementById(`scroll-down`).style.opacity = '0';
                }

                console.log(`scrollAmount ${scrollAmount}`);
                // hello world label: 0 through 288
                if (scrollAmount <= 288) {
                    document.getElementById('helloworld').style.display = 'inherit';
                    document.getElementById('navbar').style.display = 'none';
                    let scrolledRatio = (scrollAmount) / 288;
                    let background = Math.round(255 * (scrolledRatio));
                    let text = Math.round(255 * (1-scrolledRatio));
                    document.getElementById('helloworld').style.color = `rgb(${text},${text},${text})`;
                    document.querySelector('body').style.backgroundColor = `rgb(${background},${background},${background})`;
                    document.getElementById('section-about-me').style.marginTop =
                        `calc(${Math.min(100,200*(1-scrolledRatio))}vh + 16 px)`;
                    document.getElementById('helloworld').style.fontSize = `${Math.max(32,112 - (scrollAmount) / 288 * 96)}px`;

                    if (scrolledRatio > 0.5) {
                        document.getElementById('helloworld').innerHTML = "Aryan Malik";
                    } else {
                        document.getElementById('helloworld').innerHTML = "hey there";
                    }

                } else {
                    document.getElementById('helloworld').style.display = 'none';
                    document.getElementById('navbar').style.display = 'inherit';
                    document.querySelector('body').style.backgroundColor = "#FFF";
                }
                // 288 through 416 (128px): opacity of other navbar items as well as background color
                if (scrollAmount >= 288 && scrollAmount <= 416) {
                    let scrolledRatio = (scrollAmount - 288) / 128;
                    let fullColor = [175, 212, 233] // afd4e9ff
                    let shade = [255 - (255 - fullColor[0]) * scrolledRatio, 255 - (255 - fullColor[1]) * scrolledRatio, 255 -
                    (255 - fullColor[2]) * scrolledRatio];
                    document.querySelector('.navbar').style.backgroundColor = `rgb(${shade[0]},${shade[1]},${shade[2]})`;
                    document.querySelector('#navbar-links').style.opacity = `${scrolledRatio}`;
                } else if (scrollAmount > 352) {
                    document.querySelector('.navbar').style.backgroundColor = `rgb(175,212,233)`;
                    document.querySelector('#navbar-links').style.opacity = `1.0`;
                }
            };

            scrollHandler();

            document.addEventListener('scroll', scrollHandler);
        },
        data: function() {
            return {

                helperInterval: null,
                cycle: 0,

                descriptions: {
                    'eecs203':
                        "Foundations of theoretical computer science. Topics covered include: propositional and predicate logic, proof methods, set theory, functions, sequences and summations, introduction to algorithms, growth of functions and asymptotic notation, mathematical induction, counting, pigeonhole principle, permutations and combinations, relations and their properties, closure of relations, partial orderings, and introduction to graph theory.",
                    'eecs183':
                        `
                        Introductory course in computer programming. Topics covered include control flow, introductory data structures, algorithms using selection and iteration, basic object-oriented programming, testing, and debugging. EECS183 primarily uses C++ and Python as its programming languages. Projects in EECS183 include:
                        <ul>
                        <li><span class="bold">Birthdays</span>: Implemented an application that is able to identify the day of the week on which you were born. Tested understanding of and ability to work with while loops and conditional statements in conjunction with nested function calls.</li>
                        <li><span class="bold">Oh h1</span>: Implemented a command-line application to read, check, solve, and play basic instances of 0h h1, a Sudoku-like puzzle game. Tested understanding of and ability to work with complex selection and iteration algorithms, debugging, and edge case identification.</li>
                        <li><span class="bold">Coolpics</span>: Implemented an application that is able to load text files to form shapes of varied configurations (circles, rectangles, triangles, etc) to create a complete picture in .bmp format. Tested understanding of and ability to work with too many files through thoughtful inheritance.</li>
                        <li><span class="bold">Elevators</span>: Implemented a game in which the player operates 3 elevators in a busy building, making decisions and servicing requests to keep the people inside the building as happy as possible. Tested understanding of and ability to work with game designs, principles of artificial intelligence, and designing modest real-world systems using C++.</li>
                        </ul>`,
                    'eecs280':
                        `Computer science fundamentals, with programming in C++. EECS280 covers pointers, dynamic memory and memory models, structs and classes, inheritance, polymorphism, iterators, data structures such as linked lists and binary search trees, and basic recursion. Projects in EECS280 include:
                        <ul>
                        <li><span class="bold">Computer Vision</span>: Implemented the seam carving algorithm, a technique for content-aware resizing of images, to resize images in a way that changes the aspect ratio but does not distort the image. Tested understanding of and ability to work with pointers, arrays, structs, strings, and basic I/O operations, as well as C-style object-based programming.</li>
                        <li><span class="bold">Euchre</span>: Implemented a trick-taking card game with several parameters able to be specified via command-line arguments. Tested understanding of and ability to work with abstract data types, object-oriented programming, and polymorphism. The project also made extensive use of classes, <span class="font-monospace">std::array</span>, <span class="font-monospace">std::vector</span>, and C++ style strings.</li>
                        <li><span class="bold">Web Server</span>: Implemented a REST API web server, which reads and writes an HTTP subset on stdin and stdout, for an office hours queue. Tested understanding of and ability to implement linked lists, iterators, C++ library for JSON format as well as code free from memory leaks.</li>
                        <li><span class="bold">Machine Learning</span>: Implemented a Naive Bayesian classifier based on the bag of words model to automatically identify the subject of posts from the EECS280 Piazza post. Tested understanding of and ability to design the overall application and implement binary trees, recursion, templates, comparators, and the <span class="font-monospace">std::map</span> class.</li>
                        </ul>`,
                    'eecs281':
                        `<span style="color: var(--rose-madder)">Will be taking this Fall 2021!</span> Stay tuned for updates!`,
                    'eecs370':
                        `Study of computer architecture. EECS370 covers assembly language, processor datapaths, caching, and virtual memory. Projects in EECS370 include:
                        <ul>
                        <li><span class="bold">Multifile Assembler/Linker</span>: implementation of an assembler and linker for LC2K, a simple assembly language. The assembler converts LC2K assembly files into object files, and the linker combines object files into a machine code file.</li>
                        <li><span class="bold">Pipeline Simulator</span>: simulator for a pipeline datapath, including logic for data forwarding and branch prediction.</li>
                        <li><span class="bold">Cache Simulator</span>: simulator for a single-cycle datapath with a memory cache. Includes support for fully associative, direct mapped, and set associative caches via command line arguments.</li>
                        </ul>`,
                    'eecs376':
                        `<span style="color: var(--rose-madder)">Will be taking this Fall 2021!</span> Stay tuned for updates!`,
                    'eecs482':
                        `Study of operating systems and low-level workings of computers. EECS482 covers multithreading and concurrency, virtual memory, file systems, virtual machines, and remote procedure calls. Projects in EECS482 include:
                        <ul>
                        <li><span class="bold">Disk Scheduler</span>: implementation of a multithreaded producer-consumer queue for servicing disk requests, using a shortest seek time first (SSTF) algorithm.</li>
                        <li><span class="bold">Thread Library</span>: implementation of various multithreading utilities, such as threads, mutexes, and condition variables, as well as handling context switches between threads and blocking threads.</li>
                        <li><span class="bold">Virtual Memory</span>: implementation of a memory management unit (MMU) to manage virtual memory inside a portion of a process's address space. Tested the understanding of the implementation of virtual memory, including page tables, paging in and out from disk, and the clock eviction algorithm.</li>
                        <li><span class="bold">File Server</span>: implementation of a file server working with inodes on disk to represent files. Tested understanding of the underlying implementation of file systems, as well as the usage of Berkeley sockets.</li>
                        </ul>`,
                    'eecs493':
                        `Study of user interface design, including human-centered design and human-computer interaction. EECS493 covers the basic principles of good user interface, as well as ways to make designs more user-friendly and accessible. Means of testing user interfaces, such as heuristic evaluation and user studies, are covered. The principles of universal design are covered near the end of the course, and the group final project involves designing a web application revolving around human-centered design principles, and evaluating its user interface. Our final project was <span class="font-monospace">kernel</span>, which is an app that helps you track time spent on various tasks and keep your tasks in order. The final form of <span class="font-monospace">kernel</span> can be found <a href="https://danlliu.github.io/kernel" target="_blank" rel="noopener noreferrer">here</a>.`,
                    'eecs441':
                        `<span style="color: var(--rose-madder)">Upcoming Fall 2021!</span> Stay tuned!`,
                    'eecs485':
                        `<span style="color: var(--rose-madder)">Upcoming Fall 2021!</span> Stay tuned!`
                }

            }
        }
    }
</script>

<style>

    .section {
        padding-top: 32px;
        padding-bottom: 32px;
    }

    .edu-card {
        min-width: 20rem;
    }

    .link-clean {
        text-decoration: none;
        display: block;
    }

    .link-black {
        color: #000;
    }

    .anchor {
        display: block;
        position: relative;
        top: -88px;
        visibility: hidden;
    }

    @media (max-width: 767.98px) {
        .course-two-col:not(.course-one-col), .course-three-col:not(.course-one-col) {
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1199.98px) {
        .course-one-col:not(.course-two-col), .course-three-col:not(.course-two-col) {
            display: none;
        }
    }

    @media (min-width: 1200px) {
        .course-one-col:not(.course-three-col), .course-two-col:not(.course-three-col) {
            display: none;
        }
    }

</style>
