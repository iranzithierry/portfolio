import supabase from "@/lib/supabase";
import { useState, useEffect } from "react";

export function useAuth() {
  const [username, setUsername] = useState("Anonymous");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const checkAuthStatus = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      setIsLoggedIn(true);
      setUserId(data.session.user.id);

      const { data: userData } = await supabase.auth.getUser();
      if (userData.user?.user_metadata?.user_name) {
        setUsername(userData.user.user_metadata.user_name);
      } else if (userData.user?.email) {
        setUsername(userData.user.email.split("@")[0]);
      }
    }
  };

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) console.error("Error signing in:", error);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setUsername("Anonymous");
    setUserId(null);
  };

  useEffect(() => {
    checkAuthStatus();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        checkAuthStatus();
      } else if (event === "SIGNED_OUT") {
        setIsLoggedIn(false);
        setUsername("Anonymous");
        setUserId(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    username,
    isLoggedIn,
    userId,
    signIn,
    signOut,
  };
}
