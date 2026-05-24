import { useState } from "react";
import { BellRing, Send } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { hasSupabaseEnv, supabase } from "../lib/supabase";

export function DonutAlertsSection() {
  const inputClassName =
    "mt-3 h-14 w-full rounded-full border border-white/15 bg-white px-5 text-base font-semibold leading-none text-donut outline-none ring-0 placeholder:text-donut/40";
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Sign up for future location updates, menu specials, and trailer announcements.",
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!normalizedEmail) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!emailPattern.test(normalizedEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!hasSupabaseEnv || !supabase) {
      setStatus("error");
      setMessage("Email signup is not connected yet. Please check back soon.");
      return;
    }

    setStatus("loading");
    setMessage("Joining the list...");

    const { error } = await supabase.from("email_signups").insert({
      email: normalizedEmail,
      first_name: firstName.trim() || null,
    });

    if (error?.code === "23505") {
      setStatus("success");
      setMessage("Looks like you're already on the list.");
      return;
    }

    if (error) {
      setStatus("error");
      setMessage("We couldn't save your email right now. Please try again.");
      return;
    }

    setFirstName("");
    setEmail("");
    setStatus("success");
    setMessage("You're on the list. We'll share future stops, specials, and trailer updates.");
  };

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#4c2b18,#7a4a2b_42%,#b73224_88%)] px-5 py-8 text-white shadow-[0_24px_70px_rgba(76,43,24,0.28)] sm:px-8 lg:px-10">
          <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex rounded-full bg-white/12 p-3 text-golden-soft backdrop-blur-md">
                <BellRing className="h-6 w-6" />
              </div>
              <p className="mt-4 font-display text-5xl leading-none">Get Donut Alerts 🍩</p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/78">
                Get notified when Big Dave comes to your town plus occasional specials and event updates.
              </p>
              <div className="mt-5 inline-flex rounded-[1.25rem] bg-white/10 px-4 py-3 backdrop-blur-md">
                <BrandLogo
                  variant="lilOrbits"
                  className="h-12 w-auto object-contain opacity-95"
                  alt="Lil' Orbits logo"
                />
              </div>
            </div>
            <form
              className="rounded-[1.75rem] bg-white/10 p-4 backdrop-blur-md sm:p-5"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="first-name" className="text-sm font-bold uppercase tracking-[0.22em] text-golden-soft">
                  First name (optional)
                </label>
                <input
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First name (optional)"
                  autoComplete="given-name"
                  className={inputClassName}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-[0.22em] text-golden-soft">
                  Email Address
                </label>
                <div className="mt-3">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={`${inputClassName} mt-0`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-3 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-golden px-6 text-base font-extrabold text-donut-deep transition duration-300 hover:-translate-y-1 hover:bg-golden-soft disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Joining..." : "Join the Update List"}
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p
                className={`mt-3 text-sm ${
                  status === "error" ? "text-[#ffd7ce]" : "text-white/70"
                }`}
              >
                {message}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
