import { component$,useStore,useStyles$ } from "@builder.io/qwik";
import navStyles from './nav.scss?inline'

import { Link } from "@builder.io/qwik-city";

import FaceBookIcon from "../../assets/facebook.svg";
import GithubIcon from "../../assets/github.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import InformationIcon from "../../assets/information.svg";

export default component$(() => {

  useStyles$(navStyles);
  const state = useStore({
    menuIcon: false
  });

  return (

    <nav class="myNav flex justify-center items-center mt-5">
    <div
      id="MenuIcon"
      class={state.menuIcon ? "change " : ""}
      onClick$={() => (state.menuIcon = !state.menuIcon)}
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <ul class={state.menuIcon ? "open ml-3 myList" : " ml-3 myList"}>
      <li>
        <Link href="/about">
          <img src={InformationIcon} alt="information icon" />
        </Link>
      </li>
      <li>
        <a href="https://www.facebook.com/nguyenthai7871" target="_blank">
          <img src={FaceBookIcon} alt="fb icon" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCIxApakrUNszaYWc6_f6SQA" target="_blank">
          <img src={YoutubeIcon} alt="utube icon" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Thai-dot" target="_blank">
          <img src={GithubIcon} alt="github icon" />
        </a>
      </li>
    </ul>
    <div class="ml-5 ms-5 myName">
      Thai-dot ❤️
    </div>
  </nav>

  );
});
