import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
//import { Link } from "@builder.io/qwik-city";

import Video from "../assets/Car.mp4";
import Music from "../assets/music.mp3";

import Nav from "../components/nav/nav";

export default component$(() => {
  return (
    <div id="Main">
      <Nav />
      <video id="myVideo" preload="auto" autoPlay muted loop={true}>
        <source src={Video} type="video/mp4" />
      </video>

      <audio preload="auto" id="myAudio" controls autoPlay loop={true}>
        <source src={Music} type="audio/mp3" />
      </audio>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to ThaiDot's Website",
  meta: [
    {
      name: "This is my personal website",
      content: "This website using Qwik frame work",
    },
  ],
};
