import AboutMe from './component/AboutMe';
import LiveClock from './component/LiveClock';
import RandomFact from './component/FunFact';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated dots background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzM3NDE1MSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Content container */}
      <div className="relative z-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          {/* Your components */}
          <AboutMe />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LiveClock />
            <RandomFact />
          </div>
        </div>
      </div>
    </div>
  );
}
