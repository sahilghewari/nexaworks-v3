"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, Clock, DollarSign, Zap, ArrowRight, ShieldCheck, Sparkles } from "lucide-react"

export function RoiCalculator() {
  const [accountsCount, setAccountsCount] = useState<number>(25)
  const [callsPerWeek, setCallsPerWeek] = useState<number>(12)
  const [hourlyRate, setHourlyRate] = useState<number>(55)

  // Industry Benchmarks Math:
  // Manual prep: ~45 mins (0.75 hrs) per call across Slack, Zendesk, CRM
  // NexaWorks automated prep: ~5 mins (0.083 hrs) per call
  const manualHoursPerWeek = (callsPerWeek * 0.75).toFixed(1)
  const nexaHoursPerWeek = (callsPerWeek * 0.083).toFixed(1)
  const hoursSavedPerWeek = Math.max(0, parseFloat(manualHoursPerWeek) - parseFloat(nexaHoursPerWeek))
  
  const hoursSavedPerMonth = Math.round(hoursSavedPerWeek * 4.33)
  const hoursSavedPerYear = Math.round(hoursSavedPerWeek * 52)
  const annualDollarsReclaimed = Math.round(hoursSavedPerYear * hourlyRate)

  // Calculate percentage fills for sliders
  const accountsPercent = ((accountsCount - 5) / (60 - 5)) * 100
  const callsPercent = ((callsPerWeek - 3) / (30 - 3)) * 100
  const ratePercent = ((hourlyRate - 25) / (120 - 25)) * 100

  return (
    <section id="roi-calculator" className="relative py-24 lg:py-32 overflow-hidden text-white selection:bg-brand-500/30">
      {/* Subtle ambient lighting matching overall website theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching website typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Interactive Impact Console
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent leading-tight"
          >
            Calculate Your Exact <span className="text-blue-500">Time & Payroll ROI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal"
          >
            See how much weekly bandwidth and executive payroll your team reclaims by eliminating manual context digging before quarterly reviews and client calls.
          </motion.p>
        </div>

        {/* 2-Column Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-start">
          
          {/* Left Console: Interactive Sliders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white/[0.02] rounded-3xl border border-white/10 p-8 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Team Workload Parameters</h3>
                  <p className="text-xs text-zinc-500">Adjust sliders to simulate your exact pipeline</p>
                </div>
              </div>
            </div>

            {/* Slider 1: Active Accounts */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-zinc-300">Active Accounts per CSM</label>
                <span className="font-mono text-sm font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-lg">
                  {accountsCount} accounts
                </span>
              </div>
              <div className="relative flex items-center select-none py-2">
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={accountsCount}
                  onChange={(e) => setAccountsCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer focus:outline-none relative z-10 accent-blue-500"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${accountsPercent}%, rgba(255, 255, 255, 0.1) ${accountsPercent}%, rgba(255, 255, 255, 0.1) 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-1">
                <span>5 Accounts</span>
                <span>30 (Median)</span>
                <span>60 Accounts</span>
              </div>
            </div>

            {/* Slider 2: Weekly Calls */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-zinc-300">Weekly Customer Calls / Syncs</label>
                <span className="font-mono text-sm font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-lg">
                  {callsPerWeek} calls / wk
                </span>
              </div>
              <div className="relative flex items-center select-none py-2">
                <input
                  type="range"
                  min="3"
                  max="30"
                  step="1"
                  value={callsPerWeek}
                  onChange={(e) => setCallsPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer focus:outline-none relative z-10 accent-blue-500"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${callsPercent}%, rgba(255, 255, 255, 0.1) ${callsPercent}%, rgba(255, 255, 255, 0.1) 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-1">
                <span>3 Calls</span>
                <span>12 (Median)</span>
                <span>30 Calls</span>
              </div>
            </div>

            {/* Slider 3: Hourly Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-zinc-300">Fully Burdened CSM Cost ($/hr)</label>
                <span className="font-mono text-sm font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-lg">
                  ${hourlyRate} / hr
                </span>
              </div>
              <div className="relative flex items-center select-none py-2">
                <input
                  type="range"
                  min="25"
                  max="120"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer focus:outline-none relative z-10 accent-blue-500"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${ratePercent}%, rgba(255, 255, 255, 0.1) ${ratePercent}%, rgba(255, 255, 255, 0.1) 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-1">
                <span>$25/hr</span>
                <span>$55/hr (2026 Avg)</span>
                <span>$120/hr</span>
              </div>
            </div>

            {/* Research Footnote */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-zinc-400 leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>
                Based on verified B2B SaaS research: manual pre-meeting data gathering across Slack, Zendesk, and CRM averages <strong className="text-zinc-200">45 minutes per call</strong>. NexaWorks reduces synthesis to <strong className="text-blue-400">under 5 minutes</strong>.
              </span>
            </div>
          </motion.div>

          {/* Right Console: Live Output & Executive Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full flex flex-col gap-6"
          >
            {/* Hero Metric Box */}
            <div className="bg-gradient-to-br from-blue-600/20 via-white/[0.03] to-transparent rounded-3xl p-8 sm:p-10 border border-blue-500/30 backdrop-blur-md shadow-[0_0_50px_rgba(59,130,246,0.15)] relative overflow-hidden group hover:border-blue-400/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Annual Payroll Reclaimed
                </span>
                <span className="text-[11px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full font-semibold">
                  88% Faster Prep
                </span>
              </div>
              <div className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-3">
                ${annualDollarsReclaimed.toLocaleString()}
              </div>
              <p className="text-sm text-zinc-400 font-normal">
                Direct payroll ROI reclaimed per CSM each year in high-value hours.
              </p>
            </div>

            {/* Two Column Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white/[0.02] rounded-3xl p-6 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-all">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  <Clock className="w-4 h-4 text-blue-400" /> Monthly Bandwidth
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {hoursSavedPerMonth} <span className="text-base font-normal text-zinc-400">hrs / mo</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Equivalent to over 4 full productive workdays per month.
                </p>
              </div>

              <div className="bg-white/[0.02] rounded-3xl p-6 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-all">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  <Zap className="w-4 h-4 text-amber-400" /> Weekly Reclaimed
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {hoursSavedPerWeek.toFixed(1)} <span className="text-base font-normal text-amber-400">hrs / wk</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Saved every week from zero manual note digging.
                </p>
              </div>

            </div>

            {/* Visual Efficiency Bar */}
            <div className="bg-white/[0.02] rounded-3xl p-6 border border-white/10 backdrop-blur-md space-y-5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                Prep Time Required per Customer Call
              </h4>

              {/* Manual Bar */}
              <div>
                <div className="flex justify-between text-xs mb-2 font-medium">
                  <span className="text-zinc-400">Manual Digging (Slack + Zendesk + CRM)</span>
                  <span className="text-red-400 font-mono font-semibold">45 Mins</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500/80 rounded-full w-[95%]" />
                </div>
              </div>

              {/* NexaWorks Bar */}
              <div>
                <div className="flex justify-between text-xs mb-2 font-medium">
                  <span className="text-blue-400 font-semibold">NexaWorks Automated Executive Brief</span>
                  <span className="text-blue-400 font-mono font-bold">5 Mins</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-[11%]" />
                </div>
              </div>
            </div>

            {/* Premium CTA Button */}
            <div className="pt-2">
              <a
                href="https://calendly.com/nexaworkss/waitlist"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-14 h-auto py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 group text-center leading-tight"
              >
                <span>Reclaim Your ${annualDollarsReclaimed.toLocaleString()} Annually — Join Beta</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
