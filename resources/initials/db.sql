create table public.scores (
  id uuid not null default extensions.uuid_generate_v4 (),
  score integer not null,
  user_id uuid null,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default (now() AT TIME ZONE 'utc'::text),
  constraint scores_pkey primary key (id),
  constraint scores_user_id_key unique (user_id)
) TABLESPACE pg_default;

-- Enable RLS (Row Level Security)
alter table public.scores enable row level security;

-- Create policies for score access
create policy "Anyone can read scores" on public.scores
  for select using (true);

create policy "Authenticated users can insert their own scores" on public.scores
  for insert with check (auth.uid() = user_id or user_id is null);


create table public.accounts (
  id uuid not null references auth.users on delete cascade,
  username text not null,
  display_name text not null,
  avatar_url text not null,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default (now() AT TIME ZONE 'utc'::text),
  primary key (id)
);

alter table public.accounts enable row level security;
create policy "Anyone can read accounts" on public.accounts
  for select using (true);


-- inserts a row into public.accounts
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.accounts (id, username, display_name, avatar_url)
  values (
    new.id, 
    new.raw_user_meta_data->>'user_name', 
    new.raw_user_meta_data->>'name', 
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

-- Ensure RLS allows inserts
create policy allow_insert on public.accounts 
for insert to authenticated 
with check (true);

-- Correct trigger syntax
create trigger on_auth_user_created
  after insert on auth.users
  for each row 
  execute function public.handle_new_user();


ALTER TABLE public.scores 
ADD CONSTRAINT scores_account_id_fkey 
FOREIGN KEY (user_id) 
REFERENCES public.accounts(id) 
ON DELETE CASCADE;
