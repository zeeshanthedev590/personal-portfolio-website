import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <section class="flex flex-col-reverse justify-center m-5 text-center lg:flex-row sm:justify-center lg:text-center lg:items-center">
        <div class="justify-center items-center flex flex-col ">
          <h1 class="text-4xl font-medium sm:text-6xl">
            Hi i am Zeeshan Khalid
          </h1>
          <span class="text-lg sm:text-xl">Full stack web developer</span>
          <div class="flex flex-col sm:flex-row">
            <a href="#skills" class="p-5 my-2 mx-5 bg-indigo-50 rounded-lg">
              My Skills
            </a>
            <a href="#projects" class="p-5 my-2 mx-5 bg-indigo-50 rounded-lg">
              Projects
            </a>
            <a
              href="mailto:zk0746155@gmail.com"
              class="p-5 my-2 mx-5 bg-indigo-50 rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      <div
        id="skills"
        class="bg-gray-100 p-5 m-0 rounded-sm sm:m-20 sm:rounded-2xl"
      >
        <h1 class="text-center font-bold text-2xl sm:text-4xl">What I Do</h1>

        <div
          id="skills"
          class="flex flex-col justify-around lg:flex-row text-center p-20"
        >
          <div class="flex flex-col m-5">
            <span class="font-bold">Front end development</span>
            <span>Html</span>
            <span>Css</span>
            <span>JavaScript</span>
            <span>Tailwindcss</span>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Figma</span>
            <span>PhotoShop</span>
          </div>
          <div class="flex flex-col m-5">
            <span class="font-bold">Back end developement</span>
            <span>Django</span>
            <span>Expressjs</span>
            <span>Nodejs</span>
            <span>Prisma</span>
            <span>Planet Scale</span>
            <span>MySql</span>
            <span>Postgres</span>
            <span>Sqlite3</span>
          </div>
          <div class="flex flex-col m-5">
            <span class="font-bold">Mobile App Dev</span>
            <span>React Native</span>
          </div>
          <div class="flex flex-col m-5">
            <span class="font-bold">Programming Languages</span>
            <span>Python</span>
            <span>Javascript</span>
            <span>C</span>
            <span>C++</span>
            <span>C#</span>
            <span>Java</span>
          </div>
        </div>
      </div>
      <div id="projects" className="mb-20 mt-20">
        <div>
          <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
              <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                <div class="max-w-md mx-auto text-center lg:text-left">
                  <header>
                    <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                      My Projects
                    </h2>

                    <p class="mt-4 text-gray-500">
                      These are some of my projects that i would like to share
                      to show case my skill set
                    </p>
                  </header>

                  <a
                    href="https://www.github.com/zeeshanthedev590/"
                    class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                  >
                    Visit my github
                  </a>
                </div>
              </div>

              <div class="lg:col-span-2 lg:py-8">
                <ul class="grid grid-cols-2 gap-4">
                  <li>
                    <a
                      href="https://github.com/zeeshanthedev590/Zacket"
                      class="block group"
                    >
                      <div class="mt-3">
                        <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                          Zacket (Static site generator)
                        </h3>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://github.com/zeeshanthedev590/Jarvis_3.0"
                      class="block group"
                    >
                      <div class="mt-3">
                        <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                          Jarvis Ai (in python)
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/zeeshanthedev590/Web_Browser"
                      class="block group"
                    >
                      <div class="mt-3">
                        <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                          Web Browser (in python)
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/zeeshanthedev590/Real-Time-Face-Recognition-By-Zeeshan-Khalid"
                      class="block group"
                    >
                      <div class="mt-3">
                        <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                          Real Time Face Recognition
                        </h3>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div class="text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              Wanna talk?
            </h2>

            <a
              href="mailto:zk0746155@gmail.com"
              class="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            >
              Contact me
            </a>
          </div>

          <div class="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800 sm:flex sm:items-center sm:justify-between lg:mt-24">
            <ul class="mt-8   flex justify-center gap-6 sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="https://twitter.com/Zeeshan38539417"
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span class="sr-only">Twitter</span>

                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/zeeshanthedev590"
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span class="sr-only">GitHub</span>

                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
