import { TransformState } from "./touch";

export default function pinchZoom({ screen, target, setState, getState }: Parameters) {
  const handlePinch = ({ zoom }: { zoom: number }) => {
    if (zoom === 0) {
      return;
    }
    const { scale } = getState();
    const zoomWeight = 0.02;
    const nextScale = scale + (zoom > 0 ? zoomWeight : -zoomWeight);
    const nextState = {
      scale: nextScale,
    };

    setState(nextState);
  };

  screen.addEventListener("touchstart", (e) => touchStartHandler({ e }));
  screen.addEventListener("touchmove", (e) => touchMoveHandler({ e, onPinch: handlePinch }));
  screen.addEventListener("touchend", (e) => touchEndHandler({ e }));
  screen.addEventListener("touchcancel", (e) => touchEndHandler({ e }));

  let prevDiff = -1;
  const evHistory: Touch[] = [];

  function touchStartHandler({ e }: TouchStart) {
    const touches = e.changedTouches;
    if (evHistory.length + touches.length <= 2) {
      for (let i = 0; i < touches.length; i++) {
        const touch = touches[i];
        evHistory.push(touch);
      }
    }
    console.log(evHistory);
  }

  function touchEndHandler({ e }: TouchEnd) {
    const touches = e.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i];
      const index = evHistory.findIndex((cachedEv) => cachedEv.identifier === touch.identifier);
      if (index > -1) {
        evHistory.splice(index, 1);
      }
    }
  }

  function touchMoveHandler({ e, onPinch }: TouchMove) {
    const touches = e.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i];
      const index = evHistory.findIndex((cachedEv) => cachedEv.identifier === touch.identifier);
      if (index !== -1) {
        evHistory[index] = touch;

        // 두 개의 터치가 진행중인 경우 핀치 줌으로 판단한다
        if (evHistory.length === 2) {
          const xDiff = evHistory[0].clientX - evHistory[1].clientX;
          const yDiff = evHistory[0].clientY - evHistory[1].clientY;
          const curDiff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

          // 첫 핀치의 경우 비교군이 없으므로 prevDiff가 -1인 경우 생략한다.
          if (prevDiff > 0) {
            const zoom = curDiff - prevDiff;
            onPinch({ zoom });
          }

          prevDiff = curDiff;
        }
      }
    }
  }
}

interface Parameters {
  screen: HTMLElement;
  target: HTMLElement;
  setState: ({ scale }: TransformState) => void;
  getState: () => TransformState;
}

interface TouchStart {
  e: TouchEvent;
}
interface TouchEnd {
  e: TouchEvent;
}
interface TouchMove {
  e: TouchEvent;
  onPinch: (zoom: { zoom: number }) => void;
}
