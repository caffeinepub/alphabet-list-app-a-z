import { Card, CardContent } from '@/components/ui/card';

interface AlphabetGridProps {
  onLetterClick?: (letter: string) => void;
}

function AlphabetGrid({ onLetterClick }: AlphabetGridProps) {
  // Generate alphabet programmatically from character codes
  const alphabet = Array.from({ length: 26 }, (_, i) => 
    String.fromCharCode(65 + i) // 65 is 'A' in ASCII
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4">
        {alphabet.map((letter) => (
          <Card
            key={letter}
            className="group hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-primary/50 bg-card cursor-pointer"
            onClick={() => {
              if (onLetterClick) {
                onLetterClick(letter);
              }
            }}
          >
            <CardContent className="p-0 aspect-square flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-bold text-primary group-hover:text-primary/80 transition-colors select-none">
                {letter}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Info */}
      <div className="mt-8 p-6 rounded-lg bg-muted/50 border border-border">
        <p className="text-center text-muted-foreground">
          <span className="font-semibold text-foreground">26 letters</span> in the English alphabet
          {onLetterClick && (
            <span className="block mt-2 text-sm">
              Click on any letter to see words starting with that letter
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default AlphabetGrid;
