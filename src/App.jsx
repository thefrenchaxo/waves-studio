import './App.css'
import SplitText from "./components/SplitText.jsx";
import Waves from './components/Waves.jsx';

function App() {
  return (
    <div className="Top">
      <Waves
        lineColor="#C6EBBE"
        backgroundColor="#334195"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <SplitText
        text="We are Waves Studio."
        className="main-title"
        delay={100}
        duration={2.0}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      </div>
  )
}

export default App