import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const progressPath = document.querySelector<SVGPathElement>(
      ".progress-wrap path"
    );
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.webkitTransition =
      "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.webkitTransition =
      "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = `${progress}`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    const handleScroll = () => {
      const wrap = document.querySelector<HTMLButtonElement>(".progress-wrap");
      if (!wrap) return;

      if (window.scrollY > 50) {
        wrap.classList.add("active-progress");
      } else {
        wrap.classList.remove("active-progress");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const wrap = document.querySelector<HTMLButtonElement>(".progress-wrap");
    wrap?.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", handleScroll);
      wrap?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <button
      className='progress-wrap'
      aria-label='scroll indicator'
      title='back to top'
    >
      <span />
      <svg
        className='progress-circle svg-content'
        width='100%'
        height='100%'
        viewBox='-1 -1 102 102'
      >
        <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' />
      </svg>
    </button>
  );
};

export default RouteScrollToTop;
