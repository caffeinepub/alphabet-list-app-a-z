import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { aWords } from '../data/aWords';

interface AWordsPageProps {
  onBack: () => void;
}

function AWordsPage({ onBack }: AWordsPageProps) {
  return (
    <div className="w-full">
      {/* Back Button */}
      <div className="mb-6">
        <Button
          onClick={onBack}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Alphabet
        </Button>
      </div>

      {/* Page Title */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Words that start with A
        </h2>
        <p className="text-muted-foreground">
          Explore {aWords.length} English words beginning with the letter A
        </p>
      </div>

      {/* Words Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {aWords.map((word, index) => (
          <Card
            key={`${word}-${index}`}
            className="hover:shadow-md hover:border-primary/50 transition-all duration-200"
          >
            <CardContent className="p-4">
              <span className="text-lg font-medium text-foreground">
                {word}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Info */}
      <div className="mt-8 p-6 rounded-lg bg-muted/50 border border-border">
        <p className="text-center text-muted-foreground">
          <span className="font-semibold text-foreground">{aWords.length} words</span> starting with the letter A
        </p>
      </div>
    </div>
  );
}

export default AWordsPage;
