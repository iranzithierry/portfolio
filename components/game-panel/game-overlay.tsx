import { Modal } from "../ui/modal";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface GameOverlayProps {
  score: number;
  onRestart: () => void;
  open?: boolean;
}

export function GameOverlay({ score, onRestart, open = false }: GameOverlayProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleRestart = () => {
    onRestart();
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>😱 Game Over!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-xl font-bold">Score: {score}</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close>Quit</Modal.Close>
          <Button onPress={handleRestart}>Play Again</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
