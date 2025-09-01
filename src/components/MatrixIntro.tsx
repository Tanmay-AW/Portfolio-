import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MatrixIntro: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  const [line1Visible, setLine1Visible] = useState(false);
  const [line2Visible, setLine2Visible] = useState(false);
  const [line3Visible, setLine3Visible] = useState(false);
  const [line4Visible, setLine4Visible] = useState(false);
  const [statusVisible, setStatusVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState("0%");
  const [glitchingOut, setGlitchingOut] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let columns = 0;
    let drops: number[] = [];
    const fontSize = 16;
    const binary = "01";

    function initializeMatrix() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    }
    initializeMatrix();

    function drawMatrix() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const matrixInterval = window.setInterval(drawMatrix, 33);
    const onResize = () => initializeMatrix();
    window.addEventListener("resize", onResize);

    const timers: number[] = [];
    timers.push(window.setTimeout(() => setLine1Visible(true), 500));
    timers.push(
      window.setTimeout(() => {
        setLine2Visible(true);
        setProgressWidth("100%");
      }, 1500)
    );
    timers.push(window.setTimeout(() => setLine3Visible(true), 1500));
    timers.push(window.setTimeout(() => setLine4Visible(true), 2000));
    timers.push(window.setTimeout(() => setStatusVisible(true), 2500));
    
    timers.push(
      window.setTimeout(() => {
        setGlitchingOut(true);
        timers.push(
          window.setTimeout(() => {
            setIsFinished(true);
            navigate("/home");
          }, 800) // This duration should match the glitch animation time (0.8s)
        );
      }, 3500)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
      window.clearInterval(matrixInterval);
      window.removeEventListener("resize", onResize);
    };
  }, [navigate]);

  return (
    <div
      className={glitchingOut ? "data-corruption-effect" : ""}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        fontFamily: "Courier New, Courier, monospace",
        display: isFinished ? 'none' : 'block',
      }}
    >
      <canvas
        ref={canvasRef}
        id="matrix-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
      <div
        className="loader-box"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 500,
          padding: "1.5rem",
          backgroundColor: "rgba(0, 24, 0, 0.5)",
          border: "1px solid rgba(0, 255, 0, 0.4)",
          borderRadius: 15,
          boxShadow: "0 0 25px rgba(0, 255, 0, 0.3)",
          backdropFilter: "blur(5px)",
          zIndex: 2,
          color: "#0f0",
          textShadow: "0 0 5px #0f0",
        }}
      >
        <p style={{ margin: "0 0 1rem 0", fontSize: "0.9rem", opacity: line1Visible ? 1 : 0, transition: "opacity 0.5s ease-in-out", wordWrap: "break-word" }}>
          [INITIALIZING PORTFOLIO SYSTEM ...]
        </p>
        <div style={{ opacity: line2Visible ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
          <p style={{ opacity: 1, marginBottom: 0 }}>Loading modules</p>
          <div className="progress-bar-container" style={{ width: "100%", height: 20, backgroundColor: "rgba(0, 0, 0, 0.5)", border: "1px solid #0f0", borderRadius: 5, marginTop: 5, marginBottom: "1rem", overflow: "hidden" }}>
            <div id="progress-bar" className="progress-bar-fill" style={{ width: progressWidth, height: "100%", backgroundColor: "#0f0", boxShadow: "0 0 10px #0f0", transition: "width 1.5s ease-out" }} />
          </div>
        </div>
        <p style={{ margin: "0 0 1rem 0", fontSize: "0.9rem", opacity: line3Visible ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
          Deploying portfolio interface...
        </p>
        <p style={{ margin: "0 0 1rem 0", fontSize: "0.9rem", opacity: line4Visible ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
          Launching portfolio...
        </p>
        <p id="status-ready" style={{ color: "#ff4141", textShadow: "0 0 5px #ff4141", opacity: statusVisible ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
          Portfolio Ready.
        </p>
      </div>
    </div>
  );
};

export default MatrixIntro;
