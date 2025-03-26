import { Button } from "@/components/ui/button";
import { GithubIcon, LogOutIcon } from "lucide-react";

interface AuthSectionProps {
  isLoggedIn: boolean;
  username: string;
  onSignIn: () => void;
  onSignOut: () => void;
}

export function AuthSection({ isLoggedIn, username, onSignIn, onSignOut }: AuthSectionProps) {
  return (
    <div className="flex items-center justify-end gap-2 mb-4">
      <span className="text-sm text-muted-foreground">
        Playing as: <span className="font-medium">{username}</span>
      </span>

      {isLoggedIn ? (
        <Button appearance="outline" size="small" onPress={onSignOut}>
          <LogOutIcon className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      ) : (
        <Button appearance="outline" size="small" onPress={onSignIn}>
          <GithubIcon className="mr-2 h-4 w-4" />
          Sign In
        </Button>
      )}
    </div>
  );
}
