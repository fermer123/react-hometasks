import { useEffect, useState, useRef } from "react";
import style from "./HomeWork2.module.css";
export const HomeWork2 = () => {
  const [scroll, setScroll] = useState<number>(0);
  const homeWork = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollPosition = homeWork.current?.scrollTop;
    if (scrollPosition) {
      const progress = Math.floor(
        (scrollPosition /
          (homeWork.current.scrollHeight - homeWork.current.clientHeight)) *
          100
      );
      setScroll(progress);
    }
  };

  useEffect(() => {
    const container = homeWork.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      container && container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.HomeWork2_container} ref={homeWork}>
      <div className={style.HomeWork2_container_content}></div>
      <h1 className={style.title}>Решение домашнего задания №2</h1>
      <div className={style.scroll_container}>
        {scroll} %
        <div
          className={style.scroll_container_progress}
          style={{ width: `${scroll}%` }}
        ></div>
      </div>
    </div>
  );
};
