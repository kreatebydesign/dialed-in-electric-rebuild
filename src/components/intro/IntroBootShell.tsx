/**
 * Static first-paint loader shell (homepage). Shown via `data-intro-active` from the head script
 * until PrototypeIntro hydrates. Uses the same artwork as the approved cinematic intro.
 */
export default function IntroBootShell() {
  return (
    <div id="die-intro-boot" className="proto-intro die-intro-boot" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/dialed-in-original.png"
        alt=""
        width={230}
        height={230}
        className="die-intro-boot__logo"
        decoding="sync"
        fetchPriority="high"
      />
      <div className="pulse" />
      <p>ROSEBURG, OREGON · EST. 2019</p>
    </div>
  );
}