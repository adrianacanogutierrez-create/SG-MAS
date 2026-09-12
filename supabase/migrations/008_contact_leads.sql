-- ============================================================
-- 008 · contact_leads
-- ------------------------------------------------------------
-- Solicitudes del formulario de contacto de la landing SG+MAS.
-- Insert público; lectura solo service_role (ver 008 RLS abajo).
-- ============================================================

create table if not exists public.contact_leads (
  id          uuid primary key default gen_random_uuid(),
  nombre      text not null,
  empresa     text not null,
  cargo       text,
  email       text not null,
  telefono    text,
  ciudad      text,
  servicio    text not null,
  mensaje     text,
  source      text default 'landing',
  created_at  timestamptz not null default now()
);

comment on table public.contact_leads is 'Solicitudes de contacto desde la landing corporativa.';

create index if not exists contact_leads_created_at_idx on public.contact_leads (created_at desc);
create index if not exists contact_leads_servicio_idx on public.contact_leads (servicio);

alter table public.contact_leads enable row level security;

drop policy if exists "contact_leads_insert_public" on public.contact_leads;
create policy "contact_leads_insert_public"
  on public.contact_leads for insert
  to anon, authenticated
  with check (true);
