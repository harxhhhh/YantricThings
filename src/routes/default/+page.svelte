<script>
  import { onMount } from 'svelte';
  import '#lib/styles/app.css';
  import { initDefaultPage } from '#lib/scripts/default.js';

  onMount(() => initDefaultPage());
</script>

<svelte:head>
  <title>YantricThings — Embedded Hardware, Software &amp; Service</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
</svelte:head>

<header class="fixed inset-x-0 top-0 z-100 border-b-hairline border-b bg-[rgba(250,251,252,0.85)] [backdrop-filter:blur(10px)]">
  <nav class="flex items-center justify-between max-w-[1140px] mx-auto px-8 py-4.5">
    <div class="flex gap-2.5 items-center font-space-grotesk font-bold text-[19px] lte-520:text-[16px]">
      <span class="relative shrink-0 w-5.5 h-5.5">
        <svg class="w-full h-full" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#0EA5E9" stroke-width="1.6"/>
          <circle cx="8" cy="8" r="1.4" fill="#0EA5E9"/>
          <circle cx="16" cy="16" r="1.4" fill="#10B981"/>
          <path d="M8 8L16 16" stroke="#0EA5E9" stroke-width="1.4"/>
        </svg>
      </span>
      YantricThings
    </div>
    <div class="flex gap-9 text-slate text-[14.5px] lte-860:hidden">
      <a class="text-inherit [transition:color_.2s] no-underline hover:text-ink" href="#about">About</a>
      <a class="text-inherit [transition:color_.2s] no-underline hover:text-ink" href="#services">Services</a>
      <a class="text-inherit [transition:color_.2s] no-underline hover:text-ink" href="#work">Work</a>
      <a class="text-inherit [transition:color_.2s] no-underline hover:text-ink" href="#process">Process</a>
      <a class="text-inherit [transition:color_.2s] no-underline hover:text-ink" href="#vision">Vision</a>
      <a class="text-inherit [transition:color_.2s] no-underline hover:text-ink" href="#industries">Industries</a>
    </div>
  </nav>
</header>

<svg class="absolute inset-y-0 left-1/2 z-0 w-0.5 h-full opacity-60 [transform:translateX(-50%)] pointer-events-none [mask-image:linear-gradient(transparent_0px,transparent_620px,black_760px,black_calc(100%_-_140px),transparent_100%)] lte-860:hidden" width="2" height="100%" preserveAspectRatio="none">
  <line x1="1" y1="0" x2="1" y2="100%" class="stroke-hairline [stroke-width:1.5] fill-none [stroke-dasharray:1,5] [stroke-linecap:round]"/>
</svg>

<main>

  <section class="relative px-8 pt-43 pb-30 text-center lte-520:px-5 lte-520:pt-35 lte-520:pb-17.5">
    <div class="inline-flex gap-2 items-center text-signal font-ibm-plex-mono text-[12.5px] tracking-[0.12em] mb-5.5 uppercase lte-520:text-[11px] lte-520:text-center before:w-1.5 before:h-1.5 before:rounded-[50%] before:bg-circuit-green before:[box-shadow:rgba(16,185,129,0.18)_0px_0px_0px_4px] before:[animation:pulse_2s_infinite] before:content-[''] motion-reduce:before:[animation:none]">Embedded Hardware &amp; Software Studio</div>
    <h1 class="max-w-[850px] mx-auto font-space-grotesk font-semibold text-[clamp(2rem,5.4vw,4.1rem)] leading-[1.1] tracking-[-0.02em] mt-0 mb-5.5 lte-520:max-w-full lte-520:text-[clamp(1.7rem,7.5vw,2.2rem)] lte-520:leading-[1.22]">We build the <span class="text-signal">hardware</span>, write the <span class="text-signal">software</span>,<br class="lte-520:hidden">and stay on as your <span class="text-signal">service</span> partner.</h1>
    <p class="max-w-[560px] mx-auto text-slate text-[17.5px] mt-0 mb-10 lte-520:text-[15.5px]">YantricThings designs and delivers embedded systems end-to-end — from PCB and firmware to the cloud layer that keeps your devices running, with a team that doesn't disappear after handoff.</p>
    <div class="flex flex-wrap gap-3.5 justify-center lte-520:flex-col">
      <a href="#contact" class="inline-block px-6.5 py-[13px] rounded-[9px] bg-ink text-white font-medium text-[15px] [transition:transform_.2s,background_.2s] no-underline lte-520:w-full lte-520:text-center hover:bg-signal hover:[transform:translateY(-2px)]">Start a project</a>
      <a href="#services" class="px-6.5 py-3 border-hairline border-[1.5px] rounded-[9px] text-inherit font-medium text-[15px] [transition:border-color_.2s,transform_.2s] no-underline lte-520:w-full lte-520:text-center hover:border-ink hover:[transform:translateY(-2px)]">See what we build</a>
    </div>

    <div class="max-w-[640px] mx-auto mt-16">
      <svg class="block w-full" viewBox="0 0 640 60" fill="none">
        <path d="M0 30 H180 L200 10 L220 50 L240 10 L260 50 L280 30 H460 L480 10 V50 L500 30 H640" stroke="#0EA5E9" stroke-width="2" fill="none" opacity="0.85"/>
        <circle cx="180" cy="30" r="4" fill="#0EA5E9"/>
        <circle cx="460" cy="30" r="4" fill="#10B981"/>
      </svg>
    </div>
  </section>

  <section class="relative px-8 py-27.5 lte-520:px-5 lte-520:py-16" id="about">
    <div class="reveal grid grid-cols-[1fr_1fr] gap-16 items-center max-w-[1140px] mx-auto px-8 opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] [transform:translateY(18px)] lte-860:grid-cols-[1fr] motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
      <div>
        <div class="inline-flex gap-2 items-center text-signal font-ibm-plex-mono text-[12.5px] tracking-[0.12em] mb-5.5 uppercase lte-520:text-[11px] lte-520:text-center before:w-1.5 before:h-1.5 before:rounded-[50%] before:bg-circuit-green before:[box-shadow:rgba(16,185,129,0.18)_0px_0px_0px_4px] before:[animation:pulse_2s_infinite] before:content-[''] motion-reduce:before:[animation:none]">Who we are</div>
        <h2 class="font-space-grotesk font-semibold text-[clamp(1.6rem,3vw,2.1rem)] tracking-[-0.02em] mt-0 mb-4.5">One team, from schematic to shipped product.</h2>
        <p class="text-slate text-[16px] mt-0 mb-4">Most hardware projects break down at the handoff — the board house doesn't write firmware, the firmware team doesn't touch the cloud, and nobody sticks around for support. YantricThings keeps all three under one roof.</p>
        <p class="text-slate text-[16px] mt-0 mb-4">We're engineers first: we design the circuit, write the code that runs on it, and build the service layer around it — then keep supporting what we ship.</p>
        <div class="flex gap-9 mt-7">
          <div class="border-l-signal border-l-2 pl-3.5"><b class="block font-space-grotesk text-[26px]">3-in-1</b><span class="text-slate-soft text-[13px]">Hardware + software + service</span></div>
          <div class="border-l-signal border-l-2 pl-3.5"><b class="block font-space-grotesk text-[26px]">End-to-end</b><span class="text-slate-soft text-[13px]">Concept to deployed fleet</span></div>
        </div>
      </div>
      <div class="flex relative items-center justify-center overflow-hidden rounded-[20px] bg-ink aspect-square">
        <svg class="w-[78%] h-[78%]" viewBox="0 0 200 200" fill="none">
          <rect x="40" y="40" width="120" height="120" rx="10" stroke="#0EA5E9" stroke-width="1.5"/>
          <circle cx="70" cy="70" r="4" fill="#0EA5E9"/>
          <circle cx="130" cy="70" r="4" fill="#10B981"/>
          <circle cx="70" cy="130" r="4" fill="#10B981"/>
          <circle cx="130" cy="130" r="4" fill="#0EA5E9"/>
          <path d="M70 70 L130 70 L130 130 L70 130 L70 70" stroke="#3A4658" stroke-width="1"/>
          <path d="M70 70 L100 100 L130 130" stroke="#0EA5E9" stroke-width="1.2" stroke-dasharray="3 3"/>
          <path d="M20 100 H40 M160 100 H180 M100 20 V40 M100 160 V180" stroke="#3A4658" stroke-width="1.5"/>
        </svg>
      </div>
    </div>
  </section>

  <section class="relative px-8 py-27.5 lte-520:px-5 lte-520:py-16" id="services">
    <div class="via absolute top-0 left-1/2 z-2 w-[11px] h-[11px] border-hairline border-2 rounded-[50%] bg-paper [transition:border-color_.4s,background_.4s,box-shadow_.4s] [transform:translate(-50%,-50%)] [&.lit]:border-signal [&.lit]:bg-signal [&.lit]:[box-shadow:rgba(14,165,233,0.15)_0px_0px_0px_5px]"></div>
    <div class="max-w-[1140px] mx-auto px-8">
      <div class="reveal max-w-[600px] mx-auto opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] mb-14 text-center [transform:translateY(18px)] lte-520:mb-10 motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
        <div class="inline-flex gap-2 items-center text-signal font-ibm-plex-mono text-[12.5px] tracking-[0.12em] mb-3.5 uppercase lte-520:text-[11px] lte-520:text-center before:w-1.5 before:h-1.5 before:rounded-[50%] before:bg-circuit-green before:[box-shadow:rgba(16,185,129,0.18)_0px_0px_0px_4px] before:[animation:pulse_2s_infinite] before:content-[''] motion-reduce:before:[animation:none]">What we build</div>
        <h2 class="font-space-grotesk font-semibold text-[clamp(1.7rem,3.2vw,2.3rem)] tracking-[-0.02em] mt-0 mb-3.5">Three disciplines, delivered as one.</h2>
        <p class="my-0 text-slate text-[16px]">Every engagement can stand alone or combine — most clients start with one and grow into all three.</p>
      </div>
      <div class="reveal grid grid-cols-[repeat(3,1fr)] gap-6 opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] [transform:translateY(18px)] lte-860:grid-cols-[1fr] motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
        <div class="px-6.5 py-8 border-hairline border rounded-[14px] bg-white [transition:border-color_.25s,transform_.25s,box-shadow_.25s] lte-520:px-5 lte-520:py-6.5 hover:border-signal hover:[box-shadow:rgba(14,165,233,0.28)_0px_12px_32px_-14px] hover:[transform:translateY(-4px)]">
          <div class="flex items-center justify-center w-11 h-11 rounded-[10px] bg-[rgba(14,165,233,0.09)] mb-5"><svg class="w-5.5 h-5.5 stroke-signal" viewBox="0 0 24 24" fill="none" stroke-width="1.6"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 4V2M15 4V2M9 22v-2M15 22v-2M4 9H2M4 15H2M22 9h-2M22 15h-2"/></svg></div>
          <h3 class="font-space-grotesk font-semibold text-[19px] tracking-[-0.02em] mt-0 mb-2.5">Embedded Hardware</h3>
          <p class="my-0 text-slate text-[14.8px]">Schematic capture, PCB layout, component sourcing, and prototyping for connected devices — built for manufacturability from day one.</p>
          <span class="inline-block text-slate-soft font-ibm-plex-mono text-[11.5px] tracking-[0.04em] mt-4">// design → prototype → panel</span>
        </div>
        <div class="px-6.5 py-8 border-hairline border rounded-[14px] bg-white [transition:border-color_.25s,transform_.25s,box-shadow_.25s] lte-520:px-5 lte-520:py-6.5 hover:border-signal hover:[box-shadow:rgba(14,165,233,0.28)_0px_12px_32px_-14px] hover:[transform:translateY(-4px)]">
          <div class="flex items-center justify-center w-11 h-11 rounded-[10px] bg-[rgba(14,165,233,0.09)] mb-5"><svg class="w-5.5 h-5.5 stroke-signal" viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M8 3L4 12l4 9M16 3l4 9-4 9M14 3l-4 18"/></svg></div>
          <h3 class="font-space-grotesk font-semibold text-[19px] tracking-[-0.02em] mt-0 mb-2.5">Firmware &amp; Software</h3>
          <p class="my-0 text-slate text-[14.8px]">Low-level drivers, RTOS firmware, mobile/web apps, and the cloud services that connect your hardware to the internet.</p>
          <span class="inline-block text-slate-soft font-ibm-plex-mono text-[11.5px] tracking-[0.04em] mt-4">// firmware → app → cloud</span>
        </div>
        <div class="px-6.5 py-8 border-hairline border rounded-[14px] bg-white [transition:border-color_.25s,transform_.25s,box-shadow_.25s] lte-520:px-5 lte-520:py-6.5 hover:border-signal hover:[box-shadow:rgba(14,165,233,0.28)_0px_12px_32px_-14px] hover:[transform:translateY(-4px)]">
          <div class="flex items-center justify-center w-11 h-11 rounded-[10px] bg-[rgba(14,165,233,0.09)] mb-5"><svg class="w-5.5 h-5.5 stroke-signal" viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg></div>
          <h3 class="font-space-grotesk font-semibold text-[19px] tracking-[-0.02em] mt-0 mb-2.5">Delivery &amp; Service</h3>
          <p class="my-0 text-slate text-[14.8px]">Deployment, monitoring, OTA updates, and ongoing support once your devices are in the field — we don't hand off and leave.</p>
          <span class="inline-block text-slate-soft font-ibm-plex-mono text-[11.5px] tracking-[0.04em] mt-4">// deploy → monitor → support</span>
        </div>
      </div>
    </div>
  </section>

  <section class="relative px-8 py-27.5 lte-520:px-5 lte-520:py-16" id="work">
    <div class="via absolute top-0 left-1/2 z-2 w-[11px] h-[11px] border-hairline border-2 rounded-[50%] bg-paper [transition:border-color_.4s,background_.4s,box-shadow_.4s] [transform:translate(-50%,-50%)] [&.lit]:border-signal [&.lit]:bg-signal [&.lit]:[box-shadow:rgba(14,165,233,0.15)_0px_0px_0px_5px]"></div>
    <div class="max-w-[1140px] mx-auto px-8">
      <div class="reveal max-w-[600px] mx-auto opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] mb-14 text-center [transform:translateY(18px)] lte-520:mb-10 motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
        <div class="inline-flex gap-2 items-center text-signal font-ibm-plex-mono text-[12.5px] tracking-[0.12em] mb-3.5 uppercase lte-520:text-[11px] lte-520:text-center before:w-1.5 before:h-1.5 before:rounded-[50%] before:bg-circuit-green before:[box-shadow:rgba(16,185,129,0.18)_0px_0px_0px_4px] before:[animation:pulse_2s_infinite] before:content-[''] motion-reduce:before:[animation:none]">Featured work</div>
        <h2 class="font-space-grotesk font-semibold text-[clamp(1.7rem,3.2vw,2.3rem)] tracking-[-0.02em] mt-0 mb-3.5">Built by us, running in the field.</h2>
        <p class="my-0 text-slate text-[16px]">Not a mockup — a live example of hardware, software, and service delivered as one.</p>
      </div>
      <div class="reveal overflow-hidden rounded-[22px] bg-ink text-white opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] [transform:translateY(18px)] motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
        <div class="px-13 pt-13 lte-700:px-7 lte-700:pt-10">
          <h3 class="text-white font-space-grotesk font-semibold text-[clamp(1.5rem,2.8vw,2rem)] tracking-[-0.02em] mt-0 mb-3">DiagnoCore — one tool, every diagnosis, wired or wireless</h3>
          <p class="max-w-[600px] text-[#b9c2ce] text-[15.5px] mt-0 mb-6">A vehicle diagnostic tool built for garages, EV service centers, and fleet operators — desktop app or phone app, your call. Reads motor controller, BMS, and VCU data directly, instead of repurposing a generic OBD reader for EVs.</p>
          <div class="flex flex-wrap gap-2.5 mb-5 lte-520:gap-2">
            <span class="px-3.5 py-[7px] border-[rgba(255,255,255,0.16)] border rounded-[100px] text-[#b9c2ce] font-ibm-plex-mono text-[11.5px] lte-520:px-[11px] lte-520:py-1.5 lte-520:text-[10.5px]">Wired + Wireless</span>
            <span class="px-3.5 py-[7px] border-[rgba(255,255,255,0.16)] border rounded-[100px] text-[#b9c2ce] font-ibm-plex-mono text-[11.5px] lte-520:px-[11px] lte-520:py-1.5 lte-520:text-[10.5px]">.EXE + .APK</span>
            <span class="px-3.5 py-[7px] border-[rgba(255,255,255,0.16)] border rounded-[100px] text-[#b9c2ce] font-ibm-plex-mono text-[11.5px] lte-520:px-[11px] lte-520:py-1.5 lte-520:text-[10.5px]">Built for EVs</span>
            <span class="px-3.5 py-[7px] border-[rgba(255,255,255,0.16)] border rounded-[100px] text-[#b9c2ce] font-ibm-plex-mono text-[11.5px] lte-520:px-[11px] lte-520:py-1.5 lte-520:text-[10.5px]">Live + Logged Data</span>
          </div>
          <div class="inline-flex gap-[9px] items-center text-[#8993a3] font-ibm-plex-mono text-[12px] mb-9">
            <span class="shrink-0 w-1.5 h-1.5 border-circuit-green border rounded-[50%]"></span>
            Coming next: cloud sync &amp; OTA updates
          </div>
        </div>
        <div class="grid grid-cols-[1fr_auto_1fr] gap-5 items-center px-13 py-9 border-t-[rgba(255,255,255,0.1)] border-t bg-[rgba(255,255,255,0.02)] lte-700:grid-cols-[1fr] lte-700:p-7 lte-700:text-center">
          <div class="px-4.5 py-4 border-[rgba(255,255,255,0.14)] border rounded-[10px] bg-[rgba(255,255,255,0.03)]">
            <div class="text-[#8993a3] font-ibm-plex-mono text-[10.5px] tracking-[0.08em] uppercase">Vehicle ECU</div>
            <div class="text-white font-space-grotesk font-semibold text-[15px] mt-1.5">CAN / OBD Port</div>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <div class="relative w-14 h-0.5 bg-[image:linear-gradient(90deg,#0ea5e9,#10b981)] lte-700:my-1.5 lte-700:[transform:rotate(90deg)] after:absolute after:top-[-3px] after:-right-1 after:w-2 after:h-2 after:rounded-[50%] after:bg-circuit-green after:shadow-[0px_0px_8px_#10b981] after:content-['']"></div>
            <div class="text-[#8993a3] font-ibm-plex-mono text-[10.5px]">USB or BLE/WiFi</div>
          </div>
          <div class="px-4.5 py-4 border-[rgba(255,255,255,0.14)] border rounded-[10px] bg-[rgba(255,255,255,0.03)]">
            <div class="text-[#8993a3] font-ibm-plex-mono text-[10.5px] tracking-[0.08em] uppercase">Your Device</div>
            <div class="text-white font-space-grotesk font-semibold text-[15px] mt-1.5">.EXE / .APK</div>
          </div>
        </div>
      </div>

      <div class="reveal grid grid-cols-[1fr_1fr_1fr] gap-6 opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] mt-6 [transform:translateY(18px)] lte-860:grid-cols-[1fr] motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">

        <div class="overflow-hidden border-hairline border rounded-[14px] bg-white [transition:border-color_.25s,transform_.25s,box-shadow_.25s] hover:border-signal hover:[box-shadow:rgba(11,18,32,0.18)_0px_14px_34px_-16px] hover:[transform:translateY(-4px)]">
          <div class="flex items-center justify-center px-5.5 bg-[image:linear-gradient(160deg,#f1f5f9,#e7ecf1)] pt-6.5 pb-2 aspect-[4/3]">
            <svg class="w-full h-full" viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="150" cy="182" rx="72" ry="10" fill="#0B1220" opacity="0.08"/>
              <rect x="68" y="52" width="164" height="98" rx="16" fill="#0B1220"/>
              <rect x="68" y="52" width="164" height="98" rx="16" fill="url(#hwGrad)" opacity="0.5"/>
              <rect x="86" y="66" width="128" height="36" rx="6" fill="#111C22"/>
              <path d="M92 92 L104 78 L114 88 L128 70 L140 84 L152 76 L166 92" stroke="#0EA5E9" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="98" cy="118" r="4.5" fill="#10B981"/>
              <circle cx="114" cy="118" r="4.5" fill="#0EA5E9"/>
              <circle cx="130" cy="118" r="4.5" fill="#3A4658"/>
              <text x="150" y="136" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" letter-spacing="1.5" fill="#E9EEEC">CAN VISION</text>
              <rect x="126" y="150" width="48" height="14" rx="2" fill="#0B1220"/>
              <line x1="132" y1="150" x2="132" y2="164" stroke="#3A4658" stroke-width="1.5"/>
              <line x1="140" y1="150" x2="140" y2="164" stroke="#3A4658" stroke-width="1.5"/>
              <line x1="148" y1="150" x2="148" y2="164" stroke="#3A4658" stroke-width="1.5"/>
              <line x1="156" y1="150" x2="156" y2="164" stroke="#3A4658" stroke-width="1.5"/>
              <line x1="164" y1="150" x2="164" y2="164" stroke="#3A4658" stroke-width="1.5"/>
              <path d="M212 60 Q222 68 212 76" stroke="#0EA5E9" stroke-width="1.6" fill="none" stroke-linecap="round"/>
              <path d="M218 54 Q234 68 218 82" stroke="#0EA5E9" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.55"/>
              <defs>
                <linearGradient id="hwGrad" x1="68" y1="52" x2="232" y2="150" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#1E293B"/>
                  <stop offset="1" stop-color="#0B1220"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="px-5.5 pt-5 pb-6">
            <span class="block text-slate-soft font-ibm-plex-mono text-[11px] tracking-[0.08em] mb-1.5 uppercase">Hardware</span>
            <h4 class="font-space-grotesk text-[16.5px] font-semibold mt-0 mb-1.5">CAN Vision reader</h4>
            <p class="my-0 text-slate text-[13.8px]">The physical unit — plugs into the OBD/CAN port, wired or wireless, and talks to the app on either screen.</p>
          </div>
        </div>

        <div class="overflow-hidden border-hairline border rounded-[14px] bg-white [transition:border-color_.25s,transform_.25s,box-shadow_.25s] hover:border-signal hover:[box-shadow:rgba(11,18,32,0.18)_0px_14px_34px_-16px] hover:[transform:translateY(-4px)]">
          <div class="flex items-center justify-center px-5.5 bg-[image:linear-gradient(160deg,#f1f5f9,#e7ecf1)] pt-6.5 pb-2 aspect-[4/3]">
            <svg class="w-full h-full" viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="176" width="240" height="8" rx="4" fill="#0B1220"/>
              <rect x="42" y="34" width="216" height="146" rx="10" fill="#0B1220"/>
              <rect x="50" y="42" width="200" height="130" rx="4" fill="#0F172A"/>
              <rect x="50" y="42" width="200" height="16" rx="4" fill="#16222A"/>
              <circle cx="59" cy="50" r="2.4" fill="#5B6472"/>
              <circle cx="67" cy="50" r="2.4" fill="#5B6472"/>
              <circle cx="75" cy="50" r="2.4" fill="#5B6472"/>
              <text x="150" y="53" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7.5" fill="#8993A3" letter-spacing="1">CAN VISION — LIVE SESSION</text>
              <rect x="58" y="66" width="46" height="98" rx="4" fill="#141F27"/>
              <rect x="66" y="76" width="30" height="6" rx="2" fill="#0EA5E9" opacity="0.7"/>
              <rect x="66" y="88" width="30" height="4" rx="2" fill="#2A3538"/>
              <rect x="66" y="98" width="22" height="4" rx="2" fill="#2A3538"/>
              <rect x="66" y="112" width="30" height="4" rx="2" fill="#2A3538"/>
              <rect x="66" y="122" width="18" height="4" rx="2" fill="#2A3538"/>
              <rect x="66" y="136" width="30" height="4" rx="2" fill="#2A3538"/>
              <rect x="66" y="146" width="24" height="4" rx="2" fill="#2A3538"/>
              <rect x="112" y="66" width="128" height="52" rx="4" fill="#141F27"/>
              <polyline points="120,104 134,92 148,98 162,80 176,88 190,72 204,84 218,76 232,82" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="112" y="124" width="60" height="40" rx="4" fill="#141F27"/>
              <rect x="120" y="152" width="8" height="8" fill="#0EA5E9"/>
              <rect x="132" y="144" width="8" height="16" fill="#0EA5E9"/>
              <rect x="144" y="136" width="8" height="24" fill="#10B981"/>
              <rect x="156" y="148" width="8" height="12" fill="#0EA5E9"/>
              <rect x="180" y="124" width="60" height="40" rx="4" fill="#141F27"/>
              <text x="210" y="140" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" fill="#10B981">DTC: 0</text>
              <text x="210" y="152" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7" fill="#8993A3">ALL SYSTEMS OK</text>
            </svg>
          </div>
          <div class="px-5.5 pt-5 pb-6">
            <span class="block text-slate-soft font-ibm-plex-mono text-[11px] tracking-[0.08em] mb-1.5 uppercase">Desktop &nbsp;·&nbsp; .EXE</span>
            <h4 class="font-space-grotesk text-[16.5px] font-semibold mt-0 mb-1.5">Bench &amp; bay diagnostics</h4>
            <p class="my-0 text-slate text-[13.8px]">Full parameter view, fault codes, and logged history — built for a laptop in the workshop.</p>
          </div>
        </div>

        <div class="overflow-hidden border-hairline border rounded-[14px] bg-white [transition:border-color_.25s,transform_.25s,box-shadow_.25s] hover:border-signal hover:[box-shadow:rgba(11,18,32,0.18)_0px_14px_34px_-16px] hover:[transform:translateY(-4px)]">
          <div class="flex items-center justify-center px-5.5 bg-[image:linear-gradient(160deg,#f1f5f9,#e7ecf1)] pt-6.5 pb-2 aspect-[4/3]">
            <svg class="w-full h-full" viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="112" y="12" width="76" height="196" rx="18" fill="#0B1220"/>
              <rect x="118" y="28" width="64" height="164" rx="6" fill="#0F172A"/>
              <rect x="142" y="20" width="16" height="4" rx="2" fill="#1E293B"/>
              <text x="150" y="42" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="6.5" fill="#8993A3" letter-spacing="0.8">CAN VISION</text>
              <circle cx="150" cy="76" r="26" fill="none" stroke="#1C262A" stroke-width="6"/>
              <circle cx="150" cy="76" r="26" fill="none" stroke="#0EA5E9" stroke-width="6" stroke-linecap="round" stroke-dasharray="115 163" transform="rotate(-90 150 76)"/>
              <text x="150" y="73" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-weight="600" font-size="11" fill="#E9EEEC">86%</text>
              <text x="150" y="83" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="5.5" fill="#8993A3">BMS SOC</text>
              <rect x="124" y="112" width="52" height="14" rx="3" fill="#141F27"/>
              <circle cx="132" cy="119" r="2.2" fill="#10B981"/>
              <text x="140" y="121.5" font-family="IBM Plex Mono, monospace" font-size="5.5" fill="#B9C2CE">MOTOR 58°C</text>
              <rect x="124" y="130" width="52" height="14" rx="3" fill="#141F27"/>
              <circle cx="132" cy="137" r="2.2" fill="#10B981"/>
              <text x="140" y="139.5" font-family="IBM Plex Mono, monospace" font-size="5.5" fill="#B9C2CE">CAN 500kbps</text>
              <rect x="124" y="148" width="52" height="14" rx="3" fill="#141F27"/>
              <circle cx="132" cy="155" r="2.2" fill="#0EA5E9"/>
              <text x="140" y="157.5" font-family="IBM Plex Mono, monospace" font-size="5.5" fill="#B9C2CE">DTC PENDING</text>
              <rect x="118" y="176" width="64" height="16" rx="0" fill="#0C1418"/>
              <circle cx="136" cy="184" r="2.6" fill="#0EA5E9"/>
              <circle cx="150" cy="184" r="2.6" fill="#3A4658"/>
              <circle cx="164" cy="184" r="2.6" fill="#3A4658"/>
            </svg>
          </div>
          <div class="px-5.5 pt-5 pb-6">
            <span class="block text-slate-soft font-ibm-plex-mono text-[11px] tracking-[0.08em] mb-1.5 uppercase">Mobile &nbsp;·&nbsp; .APK</span>
            <h4 class="font-space-grotesk text-[16.5px] font-semibold mt-0 mb-1.5">In-hand diagnostics</h4>
            <p class="my-0 text-slate text-[13.8px]">Same live data, roadside or under the hood — pair over BLE and read straight from your phone.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative px-8 py-27.5 lte-520:px-5 lte-520:py-16" id="process">
    <div class="via absolute top-0 left-1/2 z-2 w-[11px] h-[11px] border-hairline border-2 rounded-[50%] bg-paper [transition:border-color_.4s,background_.4s,box-shadow_.4s] [transform:translate(-50%,-50%)] [&.lit]:border-signal [&.lit]:bg-signal [&.lit]:[box-shadow:rgba(14,165,233,0.15)_0px_0px_0px_5px]"></div>
    <div class="max-w-[1140px] mx-auto px-8">
      <div class="reveal max-w-[600px] mx-auto opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] mb-14 text-center [transform:translateY(18px)] lte-520:mb-10 motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
        <div class="inline-flex gap-2 items-center text-signal font-ibm-plex-mono text-[12.5px] tracking-[0.12em] mb-3.5 uppercase lte-520:text-[11px] lte-520:text-center before:w-1.5 before:h-1.5 before:rounded-[50%] before:bg-circuit-green before:[box-shadow:rgba(16,185,129,0.18)_0px_0px_0px_4px] before:[animation:pulse_2s_infinite] before:content-[''] motion-reduce:before:[animation:none]">How it works</div>
        <h2 class="font-space-grotesk font-semibold text-[clamp(1.7rem,3.2vw,2.3rem)] tracking-[-0.02em] mt-0 mb-3.5">A straight line from idea to fleet.</h2>
      </div>
      <div class="reveal grid relative grid-cols-[repeat(4,1fr)] gap-5 opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] [transform:translateY(18px)] lte-860:grid-cols-[1fr_1fr] lte-860:gap-y-9 lte-520:grid-cols-[1fr] motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
        <div class="relative text-left">
          <div class="relative h-0.5 bg-hairline mb-5 after:absolute after:top-[-3px] after:left-0 after:w-2 after:h-2 after:rounded-[50%] after:bg-signal after:content-['']"></div>
          <span class="block text-signal font-ibm-plex-mono text-[13px] mb-3.5">01</span>
          <h3 class="font-space-grotesk font-semibold text-[17px] tracking-[-0.02em] mt-0 mb-2">Design</h3>
          <p class="my-0 text-slate text-[14.5px]">We scope requirements, sketch architecture, and lock the hardware-software split.</p>
        </div>
        <div class="relative text-left">
          <div class="relative h-0.5 bg-hairline mb-5 after:absolute after:top-[-3px] after:left-0 after:w-2 after:h-2 after:rounded-[50%] after:bg-signal after:content-['']"></div>
          <span class="block text-signal font-ibm-plex-mono text-[13px] mb-3.5">02</span>
          <h3 class="font-space-grotesk font-semibold text-[17px] tracking-[-0.02em] mt-0 mb-2">Prototype</h3>
          <p class="my-0 text-slate text-[14.5px]">Working boards and firmware in weeks, not quarters — built to be tested, not just demoed.</p>
        </div>
        <div class="relative text-left">
          <div class="relative h-0.5 bg-hairline mb-5 after:absolute after:top-[-3px] after:left-0 after:w-2 after:h-2 after:rounded-[50%] after:bg-signal after:content-['']"></div>
          <span class="block text-signal font-ibm-plex-mono text-[13px] mb-3.5">03</span>
          <h3 class="font-space-grotesk font-semibold text-[17px] tracking-[-0.02em] mt-0 mb-2">Deploy</h3>
          <p class="my-0 text-slate text-[14.5px]">Production runs, provisioning, and rollout — connected to the cloud layer from day one.</p>
        </div>
        <div class="relative text-left">
          <div class="relative h-0.5 bg-hairline mb-5 after:absolute after:top-[-3px] after:left-0 after:w-2 after:h-2 after:rounded-[50%] after:bg-signal after:content-['']"></div>
          <span class="block text-signal font-ibm-plex-mono text-[13px] mb-3.5">04</span>
          <h3 class="font-space-grotesk font-semibold text-[17px] tracking-[-0.02em] mt-0 mb-2">Support</h3>
          <p class="my-0 text-slate text-[14.5px]">Monitoring, OTA updates, and a team that answers when a device in the field needs attention.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="relative px-8 py-27.5 lte-520:px-5 lte-520:py-16" id="vision">
    <div class="via absolute top-0 left-1/2 z-2 w-[11px] h-[11px] border-hairline border-2 rounded-[50%] bg-paper [transition:border-color_.4s,background_.4s,box-shadow_.4s] [transform:translate(-50%,-50%)] [&.lit]:border-signal [&.lit]:bg-signal [&.lit]:[box-shadow:rgba(14,165,233,0.15)_0px_0px_0px_5px]"></div>
    <div class="max-w-[1140px] mx-auto px-8">
      <div class="reveal grid grid-cols-[1.1fr_1fr] gap-14 items-center px-14 py-17.5 rounded-3xl bg-ink text-white opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] [transform:translateY(18px)] lte-860:grid-cols-[1fr] lte-860:px-7 lte-860:py-11 motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
        <div>
          <div class="inline-flex gap-2 items-center text-circuit-green font-ibm-plex-mono text-[12.5px] tracking-[0.12em] mb-5.5 uppercase lte-520:text-[11px] lte-520:text-center before:w-1.5 before:h-1.5 before:rounded-[50%] before:bg-circuit-green before:[box-shadow:rgba(16,185,129,0.18)_0px_0px_0px_4px] before:[animation:pulse_2s_infinite] before:content-[''] motion-reduce:before:[animation:none]">Where we're headed</div>
          <h2 class="text-white font-space-grotesk font-semibold text-[clamp(1.6rem,3vw,2.1rem)] tracking-[-0.02em] mt-0 mb-4">From service partner to product company.</h2>
          <p class="my-0 text-[#b9c2ce] text-[15.5px]">We're starting as an engineering and service partner — but every project sharpens tools, modules, and platforms we're building toward our own product line, alongside a growing service-based offering for teams who need embedded expertise on demand.</p>
        </div>
        <div class="flex flex-col gap-4.5">
          <div class="road-item active flex gap-4 items-start border-l-[rgba(255,255,255,0.14)] border-l-2 pl-4.5 [&.active]:border-l-circuit-green">
            <div class="shrink-0 w-[9px] h-[9px] rounded-[50%] bg-[rgba(255,255,255,0.2)] mt-1.5 [.road-item.active_&]:bg-circuit-green [.road-item.active_&]:[box-shadow:rgba(16,185,129,0.2)_0px_0px_0px_4px]"></div>
            <div><h4 class="text-white font-space-grotesk text-[15.5px] mt-0 mb-1">Today — Service-based</h4><span class="text-[#8993a3] text-[13.5px]">Custom embedded hardware, software &amp; delivery for clients</span></div>
          </div>
          <div class="road-item flex gap-4 items-start border-l-[rgba(255,255,255,0.14)] border-l-2 pl-4.5 [&.active]:border-l-circuit-green">
            <div class="shrink-0 w-[9px] h-[9px] rounded-[50%] bg-[rgba(255,255,255,0.2)] mt-1.5 [.road-item.active_&]:bg-circuit-green [.road-item.active_&]:[box-shadow:rgba(16,185,129,0.2)_0px_0px_0px_4px]"></div>
            <div><h4 class="text-white font-space-grotesk text-[15.5px] mt-0 mb-1">Next — Platform tools</h4><span class="text-[#8993a3] text-[13.5px]">Reusable modules and internal platforms from client work</span></div>
          </div>
          <div class="road-item flex gap-4 items-start border-l-[rgba(255,255,255,0.14)] border-l-2 pl-4.5 [&.active]:border-l-circuit-green">
            <div class="shrink-0 w-[9px] h-[9px] rounded-[50%] bg-[rgba(255,255,255,0.2)] mt-1.5 [.road-item.active_&]:bg-circuit-green [.road-item.active_&]:[box-shadow:rgba(16,185,129,0.2)_0px_0px_0px_4px]"></div>
            <div><h4 class="text-white font-space-grotesk text-[15.5px] mt-0 mb-1">Future — Product-based</h4><span class="text-[#8993a3] text-[13.5px]">YantricThings-branded devices, built on what we've learned</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative px-8 py-27.5 lte-520:px-5 lte-520:py-16" id="industries">
    <div class="via absolute top-0 left-1/2 z-2 w-[11px] h-[11px] border-hairline border-2 rounded-[50%] bg-paper [transition:border-color_.4s,background_.4s,box-shadow_.4s] [transform:translate(-50%,-50%)] [&.lit]:border-signal [&.lit]:bg-signal [&.lit]:[box-shadow:rgba(14,165,233,0.15)_0px_0px_0px_5px]"></div>
    <div class="max-w-[1140px] mx-auto px-8">
      <div class="reveal max-w-[600px] mx-auto opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] mb-14 text-center [transform:translateY(18px)] lte-520:mb-10 motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
        <div class="inline-flex gap-2 items-center text-signal font-ibm-plex-mono text-[12.5px] tracking-[0.12em] mb-3.5 uppercase lte-520:text-[11px] lte-520:text-center before:w-1.5 before:h-1.5 before:rounded-[50%] before:bg-circuit-green before:[box-shadow:rgba(16,185,129,0.18)_0px_0px_0px_4px] before:[animation:pulse_2s_infinite] before:content-[''] motion-reduce:before:[animation:none]">Where we focus</div>
        <h2 class="font-space-grotesk font-semibold text-[clamp(1.7rem,3.2vw,2.3rem)] tracking-[-0.02em] mt-0 mb-3.5">IoT and smart devices, mainly.</h2>
        <p class="my-0 text-slate text-[16px]">That's where we spend most of our time today — happy to talk if your project sits nearby.</p>
      </div>
      <div class="reveal flex flex-wrap gap-3.5 justify-center opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] [transform:translateY(18px)] motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
        <div class="flex gap-2 items-center px-5 py-2.5 border-hairline border rounded-[100px] bg-white text-[14.5px]"><span class="w-1.5 h-1.5 rounded-[50%] bg-signal"></span>Connected consumer devices</div>
        <div class="flex gap-2 items-center px-5 py-2.5 border-hairline border rounded-[100px] bg-white text-[14.5px]"><span class="w-1.5 h-1.5 rounded-[50%] bg-signal"></span>Smart home &amp; automation</div>
        <div class="flex gap-2 items-center px-5 py-2.5 border-hairline border rounded-[100px] bg-white text-[14.5px]"><span class="w-1.5 h-1.5 rounded-[50%] bg-signal"></span>Industrial IoT &amp; sensors</div>
        <div class="flex gap-2 items-center px-5 py-2.5 border-hairline border rounded-[100px] bg-white text-[14.5px]"><span class="w-1.5 h-1.5 rounded-[50%] bg-signal"></span>Wearables &amp; edge devices</div>
        <div class="flex gap-2 items-center px-5 py-2.5 border-hairline border rounded-[100px] bg-white text-[14.5px]"><span class="w-1.5 h-1.5 rounded-[50%] bg-signal"></span>Fleet &amp; asset monitoring</div>
      </div>
    </div>
  </section>

  <section class="relative px-8 py-27.5 lte-520:px-5 lte-520:py-16" id="contact">
    <div class="via absolute top-0 left-1/2 z-2 w-[11px] h-[11px] border-hairline border-2 rounded-[50%] bg-paper [transition:border-color_.4s,background_.4s,box-shadow_.4s] [transform:translate(-50%,-50%)] [&.lit]:border-signal [&.lit]:bg-signal [&.lit]:[box-shadow:rgba(14,165,233,0.15)_0px_0px_0px_5px]"></div>
    <div class="max-w-[1140px] mx-auto px-8">
      <div class="reveal grid grid-cols-[1fr_1fr] gap-14 items-center px-14 py-16 border-hairline border rounded-3xl bg-white opacity-0 [transition:opacity_.7s_ease,transform_.7s_ease] [transform:translateY(18px)] lte-860:grid-cols-[1fr] lte-860:px-7 lte-860:py-10 motion-reduce:opacity-100 motion-reduce:[transition:none] motion-reduce:[transform:none] [&.in]:opacity-100 [&.in]:[transform:translateY(0px)]">
        <div>
          <div class="inline-flex gap-2 items-center text-signal font-ibm-plex-mono text-[12.5px] tracking-[0.12em] mb-5.5 uppercase lte-520:text-[11px] lte-520:text-center before:w-1.5 before:h-1.5 before:rounded-[50%] before:bg-circuit-green before:[box-shadow:rgba(16,185,129,0.18)_0px_0px_0px_4px] before:[animation:pulse_2s_infinite] before:content-[''] motion-reduce:before:[animation:none]">Get in touch</div>
          <h2 class="font-space-grotesk font-semibold text-[clamp(1.6rem,3vw,2.1rem)] tracking-[-0.02em] mt-0 mb-3.5">Tell us what you're building.</h2>
          <p class="my-0 text-slate text-[15.5px]">Share a few lines about your project — hardware, firmware, or full delivery — and we'll get back to you within a couple of days.</p>
          <div class="border-t-hairline border-t mt-6 pt-6">
            <div class="flex gap-4.5 items-baseline py-2.5 text-[15.5px]"><span class="shrink-0 min-w-16 text-slate-soft font-ibm-plex-mono text-[11.5px] tracking-[0.08em]">EMAIL</span> <a class="text-ink font-medium [transition:color_.2s] no-underline hover:text-signal" href="mailto:contact@yantricthings.com">contact@yantricthings.com</a></div>
            <div class="flex gap-4.5 items-baseline py-2.5 text-[15.5px]"><span class="shrink-0 min-w-16 text-slate-soft font-ibm-plex-mono text-[11.5px] tracking-[0.08em]">BASED IN</span> India</div>
          </div>
        </div>
        <form class="flex flex-col gap-3.5" action="https://formsubmit.co/contact@yantricthings.com" method="POST">
          <input class="m-0 px-4 py-[13px] border-hairline border rounded-[9px] bg-paper text-ink font-inter-2 text-[14.5px] focus:[outline:2px_solid_#0EA5E9] focus:outline-offset-1" type="hidden" name="_subject" value="New enquiry from YantricThings website">
          <input class="m-0 px-4 py-[13px] border-hairline border rounded-[9px] bg-paper text-ink font-inter-2 text-[14.5px] focus:[outline:2px_solid_#0EA5E9] focus:outline-offset-1" type="hidden" name="_template" value="table">
          <input class="m-0 px-4 py-[13px] border-hairline border rounded-[9px] bg-paper text-ink font-inter-2 text-[14.5px] focus:[outline:2px_solid_#0EA5E9] focus:outline-offset-1" type="hidden" name="_captcha" value="false">
          <input class="m-0 px-4 py-[13px] border-hairline border rounded-[9px] bg-paper text-ink font-inter-2 text-[14.5px] focus:[outline:2px_solid_#0EA5E9] focus:outline-offset-1" type="text" name="Name" placeholder="Your name" required>
          <input class="m-0 px-4 py-[13px] border-hairline border rounded-[9px] bg-paper text-ink font-inter-2 text-[14.5px] focus:[outline:2px_solid_#0EA5E9] focus:outline-offset-1" type="email" name="Email" placeholder="Email address" required>
          <textarea class="min-h-25 px-4 py-[13px] border-hairline [border-width:1px] rounded-[9px] bg-paper text-ink font-inter-2 text-[14.5px] resize-y focus:[outline:2px_solid_#0EA5E9] focus:outline-offset-1" name="Message" placeholder="What are you building?" required></textarea>
          <button type="submit" class="p-3.5 border-current border-none [border-width:medium] rounded-[9px] bg-ink text-white font-medium text-[15px] [transition:background_.2s] cursor-pointer hover:bg-signal">Send message</button>
        </form>
      </div>
    </div>
  </section>

</main>

<footer class="px-8 py-9 border-t-hairline border-t text-slate-soft text-[13.5px] text-center">
  © 2026 YantricThings. Embedded hardware, software &amp; service — built as one.
</footer>
