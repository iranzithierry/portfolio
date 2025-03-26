export type Score = {
  id: string;
  score: number;
  user_id?: string;
  created_at: string;
  updated_at: string;
};

export type Account = {
  id: string;
  username: string;
  display_name: string;
  avatar_url: string;
};

export interface LeaderboardResponse {
  id: string;
  score: number;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  accounts: Accounts;
}

export interface Accounts {
  id: string;
  username: string;
  avatar_url: string;
  created_at: Date;
  updated_at: Date;
  display_name: string;
}
