/** Session key — keep in sync with `home-intro.ts` */
export const INTRO_SESSION_KEY = "die_prototype_intro";

/** Minified blocking script: runs in <head> before first paint on homepage cold loads. */
export const INTRO_BOOT_SCRIPT = `(function(){var K="${INTRO_SESSION_KEY}";try{var p=location.pathname;if(p!=="/"&&p!=="")return;var s=sessionStorage.getItem(K);if(s==="1"||s==="seen"){document.documentElement.setAttribute("data-intro-done","true");return}if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.setAttribute("data-intro-done","true");return}document.documentElement.setAttribute("data-intro-active","true")}catch(e){}})();`;

/** Critical CSS so the loader covers the site before React hydrates. */
export const INTRO_BOOT_CSS = `
#die-intro-boot{display:none}
html[data-intro-active]:not([data-intro-done]) #die-intro-boot{display:flex}
html[data-intro-active]:not([data-intro-done]) body>:not(#die-intro-boot){visibility:hidden!important}
html[data-intro-active]:not([data-intro-done]){background:#08090a}
html[data-intro-active]:not([data-intro-done]) body{overflow:hidden}
#die-intro-boot.die-intro-boot--handoff{visibility:hidden;pointer-events:none}
@media (prefers-reduced-motion:reduce){
  html[data-intro-active] #die-intro-boot{display:none!important}
}
`;