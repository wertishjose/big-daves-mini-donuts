import { LockKeyhole, LogIn } from "lucide-react";

export function AdminLogin({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  authLoading,
  authMessage,
  authMode,
}) {
  return (
    <div className="mx-auto max-w-md rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_rgba(122,74,43,0.12)]">
      <div className="inline-flex rounded-full bg-[#fff0d1] p-3 text-carnival-red">
        <LockKeyhole className="h-6 w-6" />
      </div>
      <h1 className="mt-4 font-display text-4xl leading-none text-donut-deep">Admin Dashboard</h1>
      <p className="mt-3 text-base leading-7 text-donut/75">
        Sign in with your Supabase admin account to update today's location, specials, events, and the featured image.
      </p>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email" className="text-sm font-bold uppercase tracking-[0.18em] text-carnival-red">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 h-12 w-full rounded-2xl border border-donut/10 bg-cream px-4 font-semibold text-donut outline-none"
            placeholder="admin@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-bold uppercase tracking-[0.18em] text-carnival-red">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 h-12 w-full rounded-2xl border border-donut/10 bg-cream px-4 font-semibold text-donut outline-none"
            placeholder="Enter password"
          />
        </div>
        <button
          type="submit"
          disabled={authLoading || authMode === "disabled"}
          className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-carnival-red text-base font-extrabold text-white transition hover:bg-carnival-red-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          <LogIn className="h-5 w-5" />
          {authLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <p className={`mt-4 text-sm ${authMode === "disabled" ? "text-carnival-red" : "text-donut/75"}`}>
        {authMessage}
      </p>
    </div>
  );
}
