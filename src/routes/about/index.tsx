import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import moment from "moment";

import aboutStyle from "./about.scss?inline";

import Avatar from "../../assets/avatar.jpg";

import myCV from "../../assets/ThaiDot.pdf";

export default component$(() => {
  useStyles$(aboutStyle);

  return (
    <div class=" h-screen w-screen  myContainer mx-auto">
      <div class="insideContent  h-screen ">
        <div class="mainContent flex flex-col items-center">
          <img src={Avatar} class="myImage" alt="my avatar" />
          <h3 class="my-2">Thai-dot</h3>
          <h1 class="mb-2">Nguyễn Hoàng Thái</h1>
          <ul>
            <li>🏢 Student at HCMUS</li>
            <li>🪧 Ben Tre, Viet Nam</li>
            <li>⏲️ {moment("20010820", "YYYYMMDD").fromNow().split(" ")[0]} years old</li>
            <li>📞 0919520565</li>
          </ul>

          <button class="btn mt-4">
            <i class="fa fa-download mr-2"></i>
            <a href={myCV} download="NguyenHoangThaiCV">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About Me",
  meta: [
    {
      name: "Hi, My name is Nguyen Hoang Thai, Student at HCMUS",
      content: "Qwik site description",
    },
  ],
};
