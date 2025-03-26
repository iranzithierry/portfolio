import { useRef, useState, useCallback, useEffect } from 'react';

type Direction = 'LEFT' | 'RIGHT' | 'UP' | 'DOWN' | null;
type Position = { x: number; y: number };

export function useSnakeGame(onGameOver: (score: number) => void) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  
  // Refs for preloaded assets
  const appleImageRef = useRef<HTMLImageElement | null>(null);
  const eatSoundRef = useRef<HTMLAudioElement | null>(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  
  // Game state refs to avoid dependency issues in setInterval
  const gameState = useRef({
    snake: [{ x: 180, y: 200 }], // starting position
    food: { x: 0, y: 0 },
    direction: null as Direction,
    score: 0,
    gameOver: false,
  });

  // Preload assets
  useEffect(() => {
    // Preload apple image
    const appleImage = new Image();
    appleImage.src = '/images/game-assets/apple.png';
    appleImage.onload = () => {
      appleImageRef.current = appleImage;
      checkAllAssetsLoaded();
    };
    
    // Preload eat sound
    const eatSound = new Audio();
    eatSound.src = '/sounds/beep.mp3';
    eatSound.addEventListener('canplaythrough', () => {
      eatSoundRef.current = eatSound;
      checkAllAssetsLoaded();
    });
    
    function checkAllAssetsLoaded() {
      if (appleImageRef.current && eatSoundRef.current) {
        setAssetsLoaded(true);
      }
    }
    
    return () => {
      // Clean up event listeners
      if (eatSoundRef.current) {
        eatSoundRef.current.removeEventListener('canplaythrough', checkAllAssetsLoaded);
      }
    };
  }, []);

  // Clean up any existing game loop
  const clearGameLoop = useCallback(() => {
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
      gameLoopRef.current = null;
    }
  }, []);

  // Check for collision with self - moved before updateGame
  const checkCollision = useCallback((head: Position, snake: Position[]) => {
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        return true;
      }
    }
    return false;
  }, []);

  // Generate random food position
  const generateFood = useCallback((ctx: CanvasRenderingContext2D) => {
    const box = 20;
    const canvas = ctx.canvas;
    // Ensure food is aligned to grid
    const x = Math.floor(Math.random() * ((canvas.width - box) / box)) * box;
    const y = Math.floor(Math.random() * ((canvas.height - box) / box)) * box;
    
    // Ensure food doesn't spawn on snake
    const { snake } = gameState.current;
    for (const segment of snake) {
      if (segment.x === x && segment.y === y) {
        return generateFood(ctx); // Try again if food would spawn on snake
      }
    }
    
    return { x, y };
  }, []);

  // Handle game over
  const handleGameOver = useCallback(() => {
    gameState.current.gameOver = true;
    setGameOver(true);
    setGameStarted(false);
    clearGameLoop();
    onGameOver(gameState.current.score);
  }, [onGameOver, clearGameLoop]);

  // Play eat sound
  const playEatSound = useCallback(() => {
    if (eatSoundRef.current) {
      // Reset the sound to play from the beginning
      eatSoundRef.current.currentTime = 0;
      eatSoundRef.current.play().catch(err => console.error("Error playing sound:", err));
    }
  }, []);

  // Update game state and draw
  const updateGame = useCallback((ctx: CanvasRenderingContext2D) => {
    if (!ctx || !gameStarted || !assetsLoaded) return;
    
    const canvas = ctx.canvas;
    const box = 20;
    const { snake, food, direction } = gameState.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake with realistic design
    snake.forEach((segment, i) => {
      // Get previous and next segments for smooth connections
      const prev = snake[i - 1];
      const next = snake[i + 1];
      
      if (i === 0) {
        // Draw snake head
        ctx.fillStyle = '#4CAF50';
        ctx.beginPath();
        ctx.arc(segment.x + box/2, segment.y + box/2, box/2, 0, Math.PI * 2);
        ctx.fill();
        
        // Add eyes based on direction
        ctx.fillStyle = 'white';
        let leftEyeX, leftEyeY, rightEyeX, rightEyeY;
        
        switch(direction) {
          case 'RIGHT':
            leftEyeX = segment.x + box * 0.7; leftEyeY = segment.y + box * 0.3;
            rightEyeX = segment.x + box * 0.7; rightEyeY = segment.y + box * 0.7;
            break;
          case 'LEFT':
            leftEyeX = segment.x + box * 0.3; leftEyeY = segment.y + box * 0.3;
            rightEyeX = segment.x + box * 0.3; rightEyeY = segment.y + box * 0.7;
            break;
          case 'UP':
            leftEyeX = segment.x + box * 0.3; leftEyeY = segment.y + box * 0.3;
            rightEyeX = segment.x + box * 0.7; rightEyeY = segment.y + box * 0.3;
            break;
          case 'DOWN':
          default:
            leftEyeX = segment.x + box * 0.3; leftEyeY = segment.y + box * 0.7;
            rightEyeX = segment.x + box * 0.7; rightEyeY = segment.y + box * 0.7;
        }
        
        ctx.beginPath();
        ctx.arc(leftEyeX, leftEyeY, box/6, 0, Math.PI * 2);
        ctx.arc(rightEyeX, rightEyeY, box/6, 0, Math.PI * 2);
        ctx.fill();
        
        // Add pupils
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(leftEyeX, leftEyeY, box/10, 0, Math.PI * 2);
        ctx.arc(rightEyeX, rightEyeY, box/10, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Draw body segments
        ctx.fillStyle = i % 2 === 0 ? '#8BC34A' : '#7CB342';
        ctx.beginPath();
        ctx.arc(segment.x + box/2, segment.y + box/2, box/2 - 1, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect segments with lines
        if (next) {
          ctx.beginPath();
          ctx.moveTo(segment.x + box/2, segment.y + box/2);
          ctx.lineTo(next.x + box/2, next.y + box/2);
          ctx.lineWidth = box - 2;
          ctx.strokeStyle = i % 2 === 0 ? '#8BC34A' : '#7CB342';
          ctx.stroke();
        }
      }
    });
    
    // Draw food as apple image
    if (appleImageRef.current) {
      ctx.drawImage(
        appleImageRef.current,
        food.x,
        food.y,
        box,
        box
      );
    }
    
    // Draw score with blue color
    ctx.fillStyle = '#0000FF';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${gameState.current.score}`, 10, 30);
    
    // If game not started yet, show starting message
    if (!gameState.current.direction) {
      ctx.fillStyle = '#4CAF50';
      ctx.font = '16px Arial';
      ctx.fillText('Press an arrow key to start', canvas.width / 2 - 100, canvas.height / 2);
      return;
    }
    
    // Calculate new head position
    let newX = snake[0].x;
    let newY = snake[0].y;
    
    if (direction === 'LEFT') newX -= box;
    if (direction === 'RIGHT') newX += box;
    if (direction === 'UP') newY -= box;
    if (direction === 'DOWN') newY += box;
    
    // Check boundaries
    if (
      newX < 0 || 
      newY < 0 || 
      newX >= canvas.width || 
      newY >= canvas.height
    ) {
      handleGameOver();
      return;
    }
    
    // Check self collision
    if (checkCollision({ x: newX, y: newY }, snake)) {
      handleGameOver();
      return;
    }
    
    // Check if food is eaten
    if (newX === food.x && newY === food.y) {
      // Play eat sound
      playEatSound();
      
      // Update score
      gameState.current.score += 1;
      setScore(gameState.current.score);
      gameState.current.food = generateFood(ctx);
      // Don't remove tail when eating food
    } else {
      // Remove tail
      snake.pop();
    }
    
    // Add new head
    snake.unshift({ x: newX, y: newY });
  }, [checkCollision, generateFood, handleGameOver, gameStarted, assetsLoaded, playEatSound]);

  // Draw initial game state (snake and waiting for first key press)
  const drawInitialState = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Don't redraw if game is over - user should explicitly restart
    if (gameOver) return;
    
    updateGame(ctx);
  }, [updateGame, gameOver]);

  // Initialize game
  const initGame = useCallback(() => {
    clearGameLoop(); // Clear any existing game loop
    
    const canvas = canvasRef.current;
    if (!canvas || !assetsLoaded) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Reset game state
    gameState.current = {
      snake: [{ x: 180, y: 200 }],
      food: generateFood(ctx),
      direction: null,
      score: 0,
      gameOver: false
    };
    
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
    
    // Draw initial state
    const drawCanvas = () => {
      if (ctx) {
        // Clear canvas first
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw initial snake with circle instead of rectangle
        const box = 20;
        ctx.fillStyle = '#4CAF50';
        ctx.beginPath();
        ctx.arc(180 + box/2, 200 + box/2, box/2, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw initial food (apple)
        if (appleImageRef.current && gameState.current.food) {
          ctx.drawImage(
            appleImageRef.current,
            gameState.current.food.x,
            gameState.current.food.y,
            box,
            box
          );
        }
        
        // Draw waiting message
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '16px Arial';
        ctx.fillText('Press an arrow key to start', canvas.width / 2 - 100, canvas.height / 2);
        
        // Draw score with blue color
        ctx.fillStyle = '#0000FF';
        ctx.font = '20px Arial';
        ctx.fillText(`Score: 0`, 10, 30);
      }
    };
    
    // Draw initial canvas
    drawCanvas();
    
    // Start game loop
    gameLoopRef.current = setInterval(() => {
      if (gameState.current.gameOver) {
        clearGameLoop();
        return;
      }
      
      updateGame(ctx);
    }, 150); // Adjust speed here (lower = faster)
    
    return () => clearGameLoop();
  }, [generateFood, updateGame, clearGameLoop, assetsLoaded]);

  // Handle keyboard input
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Prevent scrolling when using arrow keys
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
    }
    
    const { direction } = gameState.current;
    let newDirection: Direction = null;
    
    switch (e.key) {
      case 'ArrowLeft':
        if (direction !== 'RIGHT') newDirection = 'LEFT';
        break;
      case 'ArrowUp':
        if (direction !== 'DOWN') newDirection = 'UP';
        break;
      case 'ArrowRight':
        if (direction !== 'LEFT') newDirection = 'RIGHT';
        break;
      case 'ArrowDown':
        if (direction !== 'UP') newDirection = 'DOWN';
        break;
      default:
        return; // Don't do anything for other keys
    }
    
    // Start the game on first arrow key press
    if (gameStarted && !direction && newDirection) {
      gameState.current.direction = newDirection;
    } else if (newDirection) {
      gameState.current.direction = newDirection;
    }
  }, [gameStarted]);

  // Set up keyboard listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearGameLoop(); // Clean up game loop on unmount
    };
  }, [handleKeyDown, clearGameLoop]);

  // Draw initial state when component mounts and assets are loaded
  useEffect(() => {
    if (assetsLoaded) {
      drawInitialState();
    }
  }, [drawInitialState, assetsLoaded]);

  return {
    canvasRef,
    score,
    gameOver,
    gameStarted,
    initGame,
    assetsLoaded
  };
} 