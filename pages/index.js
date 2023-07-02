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
            <a href="projects" class="p-5 my-2 mx-5 bg-indigo-50 rounded-lg">
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
    </div>
  );
}
