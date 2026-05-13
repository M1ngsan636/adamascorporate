import CorporateTemplate from './components/Templates/Corporate';
import WebGLBackground from './components/WebGLBackground';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Subtle WebGL layer styled for corporate */}
      <WebGLBackground />
      
      <CorporateTemplate />
    </div>
  );
}
