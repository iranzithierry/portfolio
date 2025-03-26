import React from "react";
import { Card } from "@/components/ui/card";
import { GameOverlay } from "../game-overlay";

interface GameSectionProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  gameOver: boolean;
  score: number;
  gameStarted?: boolean;
  onRestart: () => void;
}

export function PlaySection({
  canvasRef,
  gameOver,
  score,
  gameStarted = true,
  onRestart,
}: GameSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Card className="overflow-hidden">
          <Card.Header>
            <Card.Title>Snake Game</Card.Title>
          </Card.Header>
          <Card.Content>
            <canvas
              ref={canvasRef}
              width={800}
              height={450}
              className="w-full aspect-video bg-bg rounded-md border-1 border-border shadow-sm"
            />
          </Card.Content>
        </Card>
      </div>
      <GameOverlay score={score} onRestart={onRestart} open={gameOver} />
      <Card>
        <Card.Content className="text-center p-4">
          <p className="text-sm text-muted-fg">Use arrow keys to control the snake</p>
          {gameStarted && !gameOver && (
            <p className="text-xs text-muted-fg mt-1">Press any arrow key to start moving</p>
          )}
        </Card.Content>
      </Card>
    </div>
  );
}
