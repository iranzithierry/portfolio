"use client";
import React, { useCallback, useEffect } from "react";
import { useSnakeGame } from "@/hooks/use-snake-game";
import { useAuth } from "@/hooks/use-auth";
import { useLeaderboard } from "@/hooks/use-leaderboard";
import { PlaySection } from "./sections/play";
import { LeaderboardSection } from "./sections/leaderboard";
import { AuthSection } from "./sections/auth";
import { GameOverlay } from "./game-overlay";
import styles from "./index.module.css";

export default function GamePanel() {
  const { leaderboard, isLoading, saveScore } = useLeaderboard();
  const { username, isLoggedIn, userId, signIn, signOut } = useAuth();

  const handleGameOver = useCallback(
    (score: number) => {
      if (isLoggedIn && userId) {
        saveScore(score, username, userId);
      } else {
        console.log("User not logged in, score not saved");
      }
    },
    [saveScore, username, userId, isLoggedIn]
  );

  const { canvasRef, score, gameOver, gameStarted, initGame, assetsLoaded } =
    useSnakeGame(handleGameOver);

  // Ensure game starts on component mount
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!gameOver) {
        initGame();
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [initGame, gameOver]);

  const handlePlayClick = () => {
    initGame();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-12">
      <div className="md:col-span-4">
        <AuthSection
          isLoggedIn={isLoggedIn}
          username={username}
          onSignIn={signIn}
          onSignOut={signOut}
        />

        <PlaySection
          canvasRef={canvasRef}
          gameOver={gameOver}
          gameStarted={gameStarted}
          score={score}
          onRestart={initGame}
        />
      </div>

      <div className="md:col-span-2">
        <LeaderboardSection leaderboard={leaderboard} isLoading={isLoading} />
      </div>

      <GameOverlay score={score} onRestart={initGame} open={gameOver} />
    </div>
  );
}
