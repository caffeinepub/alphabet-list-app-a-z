import { useState } from 'react';
import AlphabetGrid from './components/AlphabetGrid';
import AWordsPage from './pages/AWordsPage';
import { SiCoffeescript } from 'react-icons/si';
import { Heart } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'alphabet' | 'a-words'>('alphabet');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            English Alphabet
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            {currentView === 'alphabet' 
              ? 'A complete list of all 26 letters from A to Z'
              : 'Explore words starting with A'}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {currentView === 'alphabet' ? (
          <AlphabetGrid onLetterClick={(letter) => {
            if (letter === 'A') {
              setCurrentView('a-words');
            }
          }} />
        ) : (
          <AWordsPage onBack={() => setCurrentView('alphabet')} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© 2026. Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary inline-block" />
            <span>using</span>
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium inline-flex items-center gap-1"
            >
              <SiCoffeescript className="w-4 h-4" />
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
