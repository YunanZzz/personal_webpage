-- Create table for visitor map points
create table if not exists public.visitor_points (
  id bigint generated always as identity primary key,
  city text not null,
  country text not null,
  lat double precision not null,
  lng double precision not null,
  ts timestamptz not null default now()
);

create index if not exists visitor_points_ts_idx on public.visitor_points (ts desc);

-- Enable row level security
alter table public.visitor_points enable row level security;

-- Allow public read (anon key) for visitor map
drop policy if exists "public read visitor_points" on public.visitor_points;
create policy "public read visitor_points"
on public.visitor_points
for select
to anon
using (true);

-- Allow public insert (anon key) from the client
drop policy if exists "public insert visitor_points" on public.visitor_points;
create policy "public insert visitor_points"
on public.visitor_points
for insert
to anon
with check (true);
