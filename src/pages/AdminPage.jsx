import { useEffect, useState } from "react";
import { AdminDashboard } from "../components/admin/AdminDashboard";
import { AdminLogin } from "../components/admin/AdminLogin";
import { useSiteContent } from "../hooks/useSiteContent";
import { hasSupabaseEnv, supabase } from "../lib/supabase";

export function AdminPage() {
  const { siteContent, setSiteContent, saveContent, saving, source } = useSiteContent();
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState(
    hasSupabaseEnv
      ? "Use your Supabase admin credentials."
      : "Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable admin sign-in.",
  );
  const [saveMessage, setSaveMessage] = useState("Update today's stop, then tap save.");
  const [saveState, setSaveState] = useState("idle");

  useEffect(() => {
    if (!hasSupabaseEnv || !supabase) {
      return undefined;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!hasSupabaseEnv || !supabase) {
      setAuthMessage("Supabase environment variables are missing.");
      return;
    }

    setAuthLoading(true);
    setAuthMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setAuthLoading(false);

    if (error) {
      setAuthMessage(error.message);
      return;
    }

    setAuthMessage("Signed in.");
  };

  const handleSave = async (nextContent = siteContent) => {
    const result = await saveContent(nextContent);

    if (result.ok && result.mode === "supabase") {
      setSaveState("success");
      setSaveMessage("Saved. Customers are now seeing today's latest business status.");
      return result;
    }

    if (result.ok) {
      setSaveState("success");
      setSaveMessage("Saved on this device. Add Supabase later if you want remote updates too.");
      return result;
    }

    setSaveState("error");
    setSaveMessage("Save failed. Please check your Supabase table setup.");
    return result;
  };

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }

    setSession(null);
  };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="section-shell">
        {session ? (
          <AdminDashboard
            siteContent={siteContent}
            setSiteContent={setSiteContent}
            onSave={handleSave}
            saving={saving}
            saveMessage={saveMessage}
            saveState={saveState}
            dataSource={source}
            onSignOut={handleSignOut}
          />
        ) : (
          <AdminLogin
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onSubmit={handleLogin}
            authLoading={authLoading}
            authMessage={authMessage}
            authMode={hasSupabaseEnv ? "enabled" : "disabled"}
          />
        )}
      </div>
    </main>
  );
}
