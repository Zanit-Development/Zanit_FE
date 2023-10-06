import pinchZoom from "./pinchZoom";

export function touchInit(screen: HTMLElement, target: HTMLElement) {
  const state: TransformState = {
    scale: 1,
  };

  const setState = ({ scale }: TransformState) => {
    state.scale = scale;
    target.style.transform = `scale(${scale})`;
  };

  const getState = () => {
    return state;
  };

  pinchZoom({ screen, target, setState, getState });
}

export interface TransformState {
  scale: number;
}
