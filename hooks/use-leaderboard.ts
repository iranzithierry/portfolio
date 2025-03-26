import { toast } from "sonner";
import supabase from "@/lib/supabase";
import { Score, LeaderboardResponse } from "@/types/supabase";
import { useState, useEffect, useCallback } from "react";

export function useLeaderboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardResponse[]>([]);

  const fetchLeaderboard = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("scores")
        .select("*, accounts(*)")
        .order("score", { ascending: false })
        .limit(30);
      if (error) throw error;
      setLeaderboard(data || []);
    } catch (err) {
      console.error("Error fetching leaderboard:", err);
      toast.error("Failed to load leaderboard");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveScore = useCallback(
    async (score: number, username: string, userId: string | null) => {
      if (!userId || score <= 0) return false;
      try {
        console.log(`Attempting to save score ${score} for user ${username} (${userId})`);

        // Fetch current score for this user
        const { data, error: selectError } = await supabase
          .from("scores")
          .select("score")
          .eq("user_id", userId)
          .single();

        if (selectError && selectError.code !== "PGRST116") {
          // If an error occurs that is not a "no row" error, log and return
          console.error("Error fetching score:", selectError);
          return false;
        }

        // If a score exists and it's higher or equal, do nothing
        if (data && data.score >= score) {
          console.log(
            `Not updating, current score (${data.score}) is higher than or equal to ${score}`
          );
          return false;
        }

        // Upsert the new high score
        const { error } = await supabase.from("scores").upsert(
          {
            user_id: userId,
            score,
          },
          {
            onConflict: "user_id",
          }
        );
        if (error) {
          console.error("Error saving score:", error);
          return false;
        }

        fetchLeaderboard();
        return true;
      } catch (err) {
        console.error("Error saving score:", err);
        return false;
      }
    },
    [fetchLeaderboard]
  );

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  return {
    leaderboard,
    isLoading,
    error,
    saveScore,
    refreshLeaderboard: fetchLeaderboard,
  };
}
