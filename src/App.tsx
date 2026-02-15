import { useRef } from 'react';
import './App.css'

function App() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const noBtnRef = useRef<HTMLAnchorElement | null>(null);

  const escapeMousePosition = () => {
    const randomDir = () => {
      const rand = Math.random();
      if (rand < 0.5) return -1;
      else return 1;
    }

    const currX = noBtnRef.current?.getBoundingClientRect().left
    const targetX = ((Math.random() * 100) * randomDir()) + (currX || 0);
    if (noBtnRef.current) {
      if (targetX < 50) {
        noBtnRef.current.style.left = `${targetX + 100}px`;
      } else if (targetX > window.innerWidth - 50) {
        noBtnRef.current.style.left = `${window.innerWidth - targetX + 100}px`;
      } else {
        noBtnRef.current.style.left = `${targetX}px`;
      }
    }

    const currY = noBtnRef.current?.getBoundingClientRect().top;
    const targetY = ((Math.random() * 100) * randomDir()) + (currY || 0);
    if (noBtnRef.current) {
      if (targetY < 50) {
        noBtnRef.current.style.top = `${targetY + 100}px`;
      } else if (targetY > window.innerHeight - 50) {
        noBtnRef.current.style.top = `${window.innerHeight - targetY + 100}px`;
      } else {
        noBtnRef.current.style.top = `${targetY}px`;
      }
    }
  }

  return (
    <main>
      <div className="headerBox">

        <h2>
          {params["name"] + ","}
        </h2>
        <h3>Will you be my valentine?</h3>
      </div>
      <div className="btnBox">
        <a className="btn btn-5 yesBtn">YES</a>
        <a
          className="btn btn-5 noBtn"
          style={{ marginTop: "50px" }}
          ref={noBtnRef}
          onMouseOver={escapeMousePosition}
          onTouchStart={escapeMousePosition}
        >NO</a>
      </div>
    </main>
  )
}

export default App
