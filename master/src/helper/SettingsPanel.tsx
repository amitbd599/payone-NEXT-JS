'use client'
import { useState, useEffect } from "react";

const SettingsPanel = () => {
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [cursorType, setCursorType] = useState("animate"); // "animate" or "default"
  const [direction, setDirection] = useState("ltr"); // "ltr" or "rtl"

  // Apply cursor class to body
  useEffect(() => {
    if (cursorType === "default") {
      document.body.classList.add("remove-animate-cursor");
    } else {
      document.body.classList.remove("remove-animate-cursor");
    }
  }, [cursorType]);

  // Apply direction to html tag
  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  return (
    <div
      className={`settings-panel position-fixed top-50 translate-middle-y tw-z-999 d-flex align-items-center ${
        isPanelActive ? "active" : ""
      }`}
    >
      <button
        type='button'
        className={`settings-button tw-w-12 tw-h-12 bg-dark-700 text-white hover-bg-main-800 tw-duration-100 d-flex justify-content-center align-items-center ${
          isPanelActive ? "active" : ""
        }`}
        onClick={() => setIsPanelActive((prev) => !prev)}
      >
        <i className='ph-fill ph-gear-six setting-icon tw-text-2xl tw-leading-none animation-rotate tw-w-6 tw-h-6'></i>
        <i className='ph-bold ph-x close-icon tw-text-2xl tw-leading-none tw-w-6 tw-h-6'></i>
      </button>

      <div className='settings-panel__content bg-white tw-px-6 tw-py-13 shadow-lg d-flex flex-column tw-gap-10 scroll-sm overflow-y-auto'>
        <div className='d-flex flex-column tw-gap-10'>
          {/* Cursor Control */}
          <div>
            <h5 className='settings-panel__title text-center tw-mb-6 text-uppercase fw-normal'>
              Cursor
            </h5>
            <div className='settings-panel__buttons cursor__buttons d-flex tw-gap-4'>
              <button
                type='button'
                className={`settings-panel__button cursor-animate bg-dark-700 hover-bg-base-two-600 tw-duration-300 text-white tw-text-base tw-py-305 tw-px-3 fw-medium active-scale-094 flex-grow-1 ${
                  cursorType === "animate" ? "active" : ""
                }`}
                onClick={() => setCursorType("animate")}
              >
                Animate
              </button>
              <button
                type='button'
                className={`settings-panel__button cursor-default bg-dark-700 hover-bg-base-two-600 tw-duration-300 text-white tw-text-base tw-py-305 tw-px-3 fw-medium active-scale-094 flex-grow-1 ${
                  cursorType === "default" ? "active" : ""
                }`}
                onClick={() => setCursorType("default")}
              >
                Default
              </button>
            </div>
          </div>

          {/* Direction Control */}
          <div>
            <h5 className='settings-panel__title text-center tw-mb-6 text-uppercase fw-normal'>
              Direction
            </h5>
            <div className='settings-panel__buttons d-flex tw-gap-4'>
              <button
                type='button'
                className={`settings-panel__button direction-ltr bg-dark-700 hover-bg-base-two-600 tw-duration-300 text-white tw-text-base tw-py-305 tw-px-3 fw-medium active-scale-094 flex-grow-1 ${
                  direction === "ltr" ? "active" : ""
                }`}
                onClick={() => setDirection("ltr")}
              >
                LTR
              </button>
              <button
                type='button'
                className={`settings-panel__button direction-rtl bg-dark-700 hover-bg-base-two-600 tw-duration-300 text-white tw-text-base tw-py-305 tw-px-3 fw-medium active-scale-094 flex-grow-1 ${
                  direction === "rtl" ? "active" : ""
                }`}
                onClick={() => setDirection("rtl")}
              >
                RTL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
