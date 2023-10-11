import React, { useEffect } from 'react';

function TextAnimation() {
  useEffect(() => {
    const spansSlow = document.querySelectorAll('.spanSlow');
    const spansFast = document.querySelectorAll('.spanFast');

    let width = window.innerWidth;

    function handleMouseMove(e) {
      let normalizedPosition = e.pageX / (width / 2) - 1;
      let speedSlow = 100 * normalizedPosition;
      let speedFast = 200 * normalizedPosition;
      spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
      });
      spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`;
      });
    }

    // We need to recalculate width when the window is resized
    function handleWindowResize() {
      width = window.innerWidth;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="wrap">
      <div className="line">
        <div className="left">
          <div className="content">
            <span className="spanSlow">Aladdin</span>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <span className="spanSlow">Aladdin</span>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="left">
          <div className="content">
            <span className="spanSlow">What do</span>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <span className="spanSlow">what do</span>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="left">
          <div className="content">
            <span className="spanFast">you</span>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <span className="spanFast">you</span>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="left">
          <div className="content">
            <span className="spanSlow">want</span>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <span className="spanSlow">want</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextAnimation;
