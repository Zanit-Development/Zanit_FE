export default function preventZoom() {
  console.log(1);
  function listener(e: TouchEvent) {
    if (e.touches.length > 1) {
      console.log(e);
      // e.preventDefault();
    }
  }
  // document.addEventListener("touchmove", listener, { passive: false });
}
