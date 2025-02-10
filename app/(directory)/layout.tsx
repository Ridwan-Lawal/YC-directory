import { createClient } from "@/app/_lib/supabase/server";
import NavBar from "@/app/_ui/NavBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen overflow-auto">
      <NavBar userAvatar={user?.user_metadata?.avatar_url} />
      <div>{children}</div>
    </div>
  );
}
