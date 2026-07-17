import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client (browser). The site currently renders from the typed
 * sample data in `src/lib/data.ts`; every shape there mirrors the intended
 * Supabase tables (players, tournaments, rankings, clubs, courts, news,
 * memberships, sponsors) so each query is a one-line swap when the backend
 * is connected.
 *
 * Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.
 *
 * Example:
 *   const supabase = getSupabaseBrowser();
 *   const { data } = await supabase.from("players").select("*").order("rank");
 */
export function getSupabaseBrowser() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase env vars missing. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local"
    );
  }
  return createBrowserClient(url, key);
}
