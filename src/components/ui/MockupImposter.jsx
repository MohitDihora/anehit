import React, { useState, useEffect } from 'react';
import { ShieldCheck, Radio, Activity, Cpu, CheckCircle2, Server, Database, Zap } from 'lucide-react';

export default function MockupImposter() {
  const [latency, setLatency] = useState(18);
  const [packets, setPackets] = useState(1482);

  // Subtle real-time heartbeat effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return next < 14 ? 14 : next > 24 ? 24 : next;
      });
      setPackets((prev) => prev + Math.floor(Math.random() * 3));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const systemNodes = [
    {
      id: 1,
      name: "Auth & RBAC Service",
      sub: "JWT Session Validator",
      status: "Operational",
      badgeClass: "bg-emerald-950 text-emerald-300 border-emerald-800",
      metric: "200 OK • 0ms"
    },
    {
      id: 2,
      name: "Payment Gateway Engine",
      sub: "Stripe & PayPal Webhooks",
      status: "Synced",
      badgeClass: "bg-emerald-950 text-emerald-300 border-emerald-800",
      metric: "0 Retries"
    },
    {
      id: 3,
      name: "Real-Time WebSocket Mesh",
      sub: `${packets} active sockets`,
      status: "Broadcasting",
      badgeClass: "bg-sky-950 text-sky-300 border-sky-800",
      metric: `${latency}ms delay`
    },
    {
      id: 4,
      name: "PostgreSQL Read Replica",
      sub: "Primary Cluster Sync",
      status: "Healthy",
      badgeClass: "bg-emerald-950 text-emerald-300 border-emerald-800",
      metric: "4ms avg query"
    },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl font-sans text-sm text-slate-100">
      {/* App Bar / macOS Window Header */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-1 sm:ml-2 font-mono text-[11px] sm:text-xs text-sky-300 flex items-center gap-1.5 font-bold tracking-wider truncate">
            <Cpu className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">ANEHIT ENGINE — PRODUCTION CLOUD</span>
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-800/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE WEBSOCKET
          </span>
        </div>
      </div>

      <div className="p-3.5 sm:p-4 space-y-3 bg-slate-950/95">
        {/* Environment & Metric Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-slate-400">CLUSTER:</span>
            <span className="font-mono text-xs tracking-wider text-sky-300 bg-sky-950/70 px-2 py-0.5 rounded border border-sky-800/70 font-bold">
              CLOUD-US-EAST
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-950/50 px-2.5 py-0.5 rounded border border-emerald-800/50">
              <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>LATENCY: {latency}ms</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>99.99% SLA</span>
            </div>
          </div>
        </div>

        {/* Microservices & Infrastructure Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
          {systemNodes.map((node) => (
            <div
              key={node.id}
              className="p-2.5 sm:p-3 rounded-xl border bg-slate-900/90 border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <div className="w-6 h-6 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-[11px] font-mono text-sky-300 shrink-0 font-bold">
                  {node.id}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-200 truncate">
                    {node.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    {node.sub}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border ${node.badgeClass}`}>
                  {node.status}
                </span>
                <div className="text-[9px] font-mono text-slate-400 mt-0.5">
                  {node.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom State Bar */}
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Synced edge state (4 global zones)</span>
          </div>
          <span className="text-emerald-400 font-medium">All Services Operational</span>
        </div>
      </div>
    </div>
  );
}
