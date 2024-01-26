import { ISourceOptions } from "@tsparticles/engine";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const useAnimatedObjectOptions = () => {
  const theme = useContext(ThemeContext);

  const animatedObjectOptions: ISourceOptions = {
    background: {
      color: {
        value: theme!.animatedBackground,
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme!.animatedBackgroundText,
      },
      links: {
        color: theme!.animatedBackgroundText,
        distance: 200,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 120,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 6 },
      },
    },
    detectRetina: true,
  };
  return animatedObjectOptions;
};
