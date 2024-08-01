import classNames from "classnames";
import { useRef } from "react";

export default function PageGuide() {
  const ref = useRef(null);

  const classes = classNames([
    "text-theme-light-text absolute -left-full pr-16 md:pr-0 top-0 w-full h-full flex z-40 transition-duration-300 transform-gpu",
    "md:flex md:shrink-0 md:left-auto md:relative md:w-auto md:transform-none md:transition-none",
  ]);

  return (
    <div className={classes}>
      <div className="flex flex-col md:w-80" ref={ref}>
        <div className="flex flex-col flex-grow pb-4 pt-5 overflow-y-auto">
          <div className="flex flex-1 flex-col items-start pl-5 text-base pt-5">
            <h1>On this page</h1>

            <div className="flex flex-1 flex-col items-start mt-5">
              <a className="page-guide-link page-guide-active-link">Introduction</a>
              <a className="page-guide-link page-guide-inactive-link">Scope</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
