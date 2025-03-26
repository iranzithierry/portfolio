import React from "react";
import { StarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { LeaderboardResponse } from "@/types/supabase";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface LeaderboardSectionProps {
  leaderboard: LeaderboardResponse[];
  isLoading: boolean;
}

export function LeaderboardSection({ leaderboard, isLoading }: LeaderboardSectionProps) {
  return (
    <Card className="h-full">
      <Card.Header className="px-2">
        <Card.Title className="text-xl font-bold">Leaderboard</Card.Title>
      </Card.Header>
      <Card.Content className="px-0">
        {isLoading ? (
          Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-muted rounded-lg mt-2 mx-2">
                <Skeleton className="h-8 w-8 rounded-full shrink-0" />
                <Skeleton className="h-4 w-[49%]" />
                <div className="font-bold ml-auto flex items-center gap-1">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-[20px]" />
                </div>
              </div>
            ))
        ) : (
          <ul className="space-y-2 px-2 overflow-y-auto">
            {leaderboard.map((entry, index) => (
              <PlayerCard key={entry.id} entry={entry} index={index} />
            ))}
            {leaderboard.length === 0 && (
              <p className="text-center text-muted-fg py-4">No scores yet. Be the first!</p>
            )}
          </ul>
        )}
      </Card.Content>
    </Card>
  );
}

const PlayerCard = ({ entry, index }: { entry: LeaderboardResponse; index: number }) => {
  return (
    <li key={entry.id} className="flex items-center gap-2 p-2 bg-muted rounded-lg relative">
      <span className="font-bold absolute text-xs z-10 top-2 left-2 rounded-full bg-primary text-primary-fg w-4 h-4 flex items-center justify-center">
        {index + 1}
      </span>
      <Avatar className="w-8 h-8">
        <AvatarImage
          src={
            entry.accounts.avatar_url ||
            `https://api.dicebear.com/9.x/adventurer/svg?seed=${entry.accounts.username}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
          }
        />
      </Avatar>
      <div className="flex flex-1 justify-between items-center">
        <span className="font-medium truncate max-w-[120px]">{entry.accounts.username}</span>
        <span className="font-bold ml-auto flex items-center gap-1">
          <StarIcon className="w-4 h-4" />
          {entry.score}
        </span>
      </div>
    </li>
  );
};
