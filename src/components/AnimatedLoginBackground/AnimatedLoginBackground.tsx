import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine";
import { useAnimatedObjectOptions } from "../../hooks/useAnimatedObjectOptions";

export const AnimatedLoginBackground = () => {
  const [init, setInit] = useState(false);
  const animatedObjectOptions = useAnimatedObjectOptions();
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => animatedObjectOptions, []);

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};
