import { component$,useStore,useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import FaceBookIcon from "../../assets/facebook.svg";
import GithubIcon from "../../assets/github.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import InformationIcon from "../../assets/information.svg";

import navStyles from './nav.scss?inline'


export default component$(() => {

  useStyles$(navStyles);
  const state = useStore({
    menuIcon: false,
    iconWidth: "40px",
    iconHeight: "40px",
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
          <img src={InformationIcon} width={state.iconWidth} height={state.iconHeight} alt="information icon" />
        </Link>
      </li>
      <li>
        <a href="https://www.facebook.com/nguyenthai7871" target="_blank">
          <img src={FaceBookIcon} width={state.iconWidth} height={state.iconHeight} alt="fb icon" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCIxApakrUNszaYWc6_f6SQA" target="_blank">
          <img src={YoutubeIcon} width={state.iconWidth} height={state.iconHeight} alt="utube icon" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Thai-dot" target="_blank">
          <img src={GithubIcon} width={state.iconWidth} height={state.iconHeight} alt="github icon" />
        </a>
      </li>
    </ul>
    <div class="ml-5 ms-5 myName">
      Thai-dot ❤️
    </div>
  </nav>

  );
});
