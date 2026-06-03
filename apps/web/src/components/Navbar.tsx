"use client";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => listener?.subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav className="flex justify-between p-4 bg-zinc-900 text-white">
      <div className="text-red-500 font-bold">SaaSFlow</div>
      {user ? (
        <div className="flex items-center gap-4">
          <span>{user.email}</span>
          <button onClick={logout} className="bg-red-500 px-2 py-1 rounded">
            Logout
          </button>
        </div>
      ) : null}
    </nav>
  );
}