<script>
  import { onMount } from 'svelte';
  import '#lib/styles/app.css';
  import { initCanvision } from '#lib/scripts/canvision.js';

  onMount(() => {
    initCanvision();
  });
</script>

<svelte:head>
  <title>CAN Vision | Yantric Things</title>
  <meta name="description" content="CAN Vision — Yantric Things automotive CAN bus interface and diagnostic platform." />
</svelte:head>

<header class="site-header relative z-1000 h-18 bg-navy text-white lte-767:h-17" id="top">
    <div class="flex gap-8 items-center justify-between w-[min(100%_-_96px,1536px)] h-18 mx-auto lte-1100:w-[calc(100%_-_80px)] lte-767:w-[calc(100%_-_40px)] lte-767:h-17 lte-390:w-[calc(100%_-_32px)]">

        <a class="brand inline-flex shrink-0 gap-2.5 items-center text-inherit no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.3)] focus-visible:outline-offset-2" href="/" aria-label="Yantric Things home">
            <img
                class="brand-mark protected-asset block shrink-0 w-9 h-9 max-w-9 max-h-9 object-contain lte-767:w-8.5 lte-767:h-8.5"
                src="/canvision/assets/yantric-logo.png"
                alt=""
                width="36"
                height="36"
                draggable="false"
            />
            <span class="inline-flex gap-[5px] items-baseline font-inter text-[16px] font-semibold leading-[20px] tracking-[0.3px] whitespace-nowrap lte-767:text-[15px]">
                <strong class="text-white font-bold">YANTRIC</strong> <em class="text-primary not-italic font-bold">THINGS</em>
            </span>
        </a>

        <button
            class="nav-toggle hidden flex-col gap-[5px] items-center justify-center w-10.5 h-10.5 p-0 border-current border-none bg-transparent [font:inherit] cursor-pointer lte-767:flex focus-visible:[outline:3px_solid_rgba(15,96,232,0.3)] focus-visible:outline-offset-2"
            type="button"
            aria-expanded="false"
            aria-controls="site-nav"
            aria-label="Open menu"
        >
            <span class="w-5.5 h-0.5 rounded-[2px] bg-white"></span>
            <span class="w-5.5 h-0.5 rounded-[2px] bg-white"></span>
            <span class="w-5.5 h-0.5 rounded-[2px] bg-white"></span>
        </button>

        <nav class="flex gap-8 items-center lte-1100:gap-5.5 lte-767:hidden lte-767:absolute lte-767:inset-x-0 lte-767:top-17 lte-767:flex-col lte-767:gap-0 lte-767:items-stretch lte-767:px-5 lte-767:border-t-[rgba(255,255,255,0.08)] lte-767:border-t lte-767:bg-navy lte-767:pt-3 lte-767:pb-5 lte-767:[&.open]:flex" id="site-nav">
            <a href="/#products" class="relative text-white font-inter text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] whitespace-nowrap no-underline lte-1100:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.3)] focus-visible:outline-offset-2 hover:text-primary">Products</a>
            <a class="relative text-white font-inter text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] whitespace-nowrap no-underline lte-1100:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.3)] focus-visible:outline-offset-2 hover:text-primary" href="/#services">Services</a>
            <a class="relative text-white font-inter text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] whitespace-nowrap no-underline lte-1100:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.3)] focus-visible:outline-offset-2 hover:text-primary" href="/#solutions">Solutions</a>
            <a class="relative text-white font-inter text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] whitespace-nowrap no-underline lte-1100:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.3)] focus-visible:outline-offset-2 hover:text-primary" href="/#about">About Us</a>
<a class="relative text-primary font-inter text-[14px] font-semibold leading-[20px] [transition:color_0.2s_ease] whitespace-nowrap no-underline lte-1100:text-[13px] lte-767:py-[15px] lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.3)] focus-visible:outline-offset-2" href="/contact_page">Contact</a>
        </nav>

    </div>
</header>
  <main>
   <section class="grid grid-cols-[minmax(0px,1fr)_minmax(0px,1fr)] gap-16 items-center w-[min(100%_-_96px,1536px)] min-h-[620px] mx-auto py-20 lte-1100:w-[calc(100%_-_80px)] lte-767:grid-cols-[1fr] lte-767:gap-10 lte-767:w-[calc(100%_-_40px)] lte-767:min-h-[auto] lte-767:py-12 lte-390:w-[calc(100%_-_32px)]" id="product">

    <div class="max-w-[650px]">

        <div class="text-primary text-[12px] font-semibold leading-[20px] tracking-[0.08em] mb-3 uppercase">FEATURED PRODUCT</div>

        <h1 class="my-0 text-text text-[52px] font-bold leading-[58px] tracking-[-0.03em] lte-767:text-[40px] lte-767:leading-[48px] lte-390:text-[36px] lte-390:leading-[44px]">CAN Vision</h1>

        <p class="text-text text-[20px] font-semibold leading-[30px] mt-4 mb-0 lte-767:text-[18px] lte-767:leading-[28px]">
            Professional CAN Bus Interface &amp; Diagnostic Platform
        </p>

        <p class="max-w-[590px] text-body text-[16px] leading-[26px] mt-4 mb-0">
            Connect, monitor and analyze vehicle CAN communication with a powerful
            interface designed for automotive diagnostics, development and testing.
        </p>

        <ul class="grid gap-3 list-none mt-7 mb-0 pl-0">

            <li class="flex gap-2.5 items-center text-body text-[15px] leading-[24px]">
                <span class="inline-flex shrink-0 items-center justify-center w-5.5 h-5.5 rounded-[50%] bg-light-blue text-primary text-[13px] font-bold">✓</span>
                Real-time CAN bus monitoring
            </li>

            <li class="flex gap-2.5 items-center text-body text-[15px] leading-[24px]">
                <span class="inline-flex shrink-0 items-center justify-center w-5.5 h-5.5 rounded-[50%] bg-light-blue text-primary text-[13px] font-bold">✓</span>
                Advanced ECU diagnostics
            </li>

            <li class="flex gap-2.5 items-center text-body text-[15px] leading-[24px]">
                <span class="inline-flex shrink-0 items-center justify-center w-5.5 h-5.5 rounded-[50%] bg-light-blue text-primary text-[13px] font-bold">✓</span>
                UDS protocol support
            </li>

            <li class="flex gap-2.5 items-center text-body text-[15px] leading-[24px]">
                <span class="inline-flex shrink-0 items-center justify-center w-5.5 h-5.5 rounded-[50%] bg-light-blue text-primary text-[13px] font-bold">✓</span>
                CAN data logging &amp; export
            </li>

        </ul>

    </div>

    <div class="flex relative items-center justify-center min-h-[430px] overflow-hidden rounded-xl bg-light-blue lte-767:min-h-80">

        <div class="absolute w-80 h-80 rounded-[50%] bg-[rgba(15,96,232,0.12)] [filter:blur(40px)] pointer-events-none"></div>

        <img class="block relative z-1 w-[min(88%,560px)] max-w-full max-h-[400px] object-contain lte-767:w-[88%]"
            src="/assets/canvision.png"
            alt="CAN Vision diagnostic interface"
        >

    </div>

</section>

    <section class="grid grid-cols-[repeat(4,1fr)] w-[min(100%_-_96px,1536px)] mx-auto border-t-border border-b-border border-t border-b bg-white lte-1100:w-[calc(100%_-_80px)] lte-767:grid-cols-[1fr_1fr] lte-767:w-[calc(100%_-_40px)] lte-390:grid-cols-[1fr] lte-390:w-[calc(100%_-_32px)]" id="features">
      <div class="grid grid-cols-[40px_1fr] grid-rows-[auto_auto] items-center min-h-30 p-6 border-r-border border-r gap-x-3 lte-767:border-b-border lte-767:border-b lte-390:border-r-current! lte-390:[border-right-width:0px]! lte-390:[border-right-style:none]!"><span class="flex items-center justify-center w-10 h-10 rounded-lg bg-light-blue text-primary text-[20px] [grid-row:1_/_3]"><svg class="w-5.5 h-5.5 fill-none stroke-current [stroke-width:1.6]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/></svg></span><b class="text-text text-[15px] font-semibold leading-[20px]">CAN 2.0</b><small class="text-muted text-[13px] leading-[20px]">Reliable bus communication</small></div>
      <div class="grid grid-cols-[40px_1fr] grid-rows-[auto_auto] items-center min-h-30 p-6 border-r-border border-r gap-x-3 lte-767:border-r-current lte-767:border-b-border lte-767:[border-right-width:0px] lte-767:[border-right-style:none] lte-767:border-b lte-390:border-r-current! lte-390:[border-right-width:0px]! lte-390:[border-right-style:none]!"><span class="flex items-center justify-center w-10 h-10 rounded-lg bg-light-blue text-primary text-[20px] [grid-row:1_/_3]">⚙</span><b class="text-text text-[15px] font-semibold leading-[20px]">Real-Time</b><small class="text-muted text-[13px] leading-[20px]">Live message monitoring</small></div>
      <div class="grid grid-cols-[40px_1fr] grid-rows-[auto_auto] items-center min-h-30 p-6 border-r-border border-r gap-x-3 lte-390:border-r-current! lte-390:[border-right-width:0px]! lte-390:[border-right-style:none]!"><span class="flex items-center justify-center w-10 h-10 rounded-lg bg-light-blue text-primary text-[20px] [grid-row:1_/_3]"><svg class="w-5.5 h-5.5 fill-none stroke-current [stroke-width:1.6]" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg></span><b class="text-text text-[15px] font-semibold leading-[20px]">ECU Diagnostics</b><small class="text-muted text-[13px] leading-[20px]">Vehicle diagnostic tools</small></div>
      <div class="grid grid-cols-[40px_1fr] grid-rows-[auto_auto] items-center min-h-30 p-6 gap-x-3 lte-390:border-r-current! lte-390:[border-right-width:0px]! lte-390:[border-right-style:none]!"><span class="flex items-center justify-center w-10 h-10 rounded-lg bg-light-blue text-primary text-[20px] [grid-row:1_/_3]">▯</span><b class="text-text text-[15px] font-semibold leading-[20px]">Connectivity</b><small class="text-muted text-[13px] leading-[20px]">USB • Wi-Fi • BLE </small></div>
    </section>

<section class="w-[min(100%_-_96px,1536px)] mx-auto pt-24 lte-1100:w-[calc(100%_-_80px)] lte-767:w-[calc(100%_-_40px)] lte-767:pt-16 lte-390:w-[calc(100%_-_32px)]" id="product-info">
  <div class="max-w-[800px] mb-10 lte-767:mb-7">
    <div>
      <div class="text-primary text-[12px] font-semibold leading-[20px] tracking-[0.08em] mb-3 uppercase">CAN VISION PLATFORM</div>
      <h2 class="my-0 text-text text-[32px] font-bold leading-[40px] tracking-[-0.02em] lte-767:text-[28px] lte-767:leading-[36px]">Built for automotive diagnostics</h2>
      <p class="text-body text-[16px] leading-[26px] mt-3 mb-0">A practical interface for technicians, developers and engineering teams to connect, observe and diagnose CAN networks.</p>
    </div>
  </div>

  <div class="grid grid-cols-[repeat(4,minmax(0px,1fr))] gap-4 lte-1100:grid-cols-[repeat(2,minmax(0px,1fr))] lte-767:grid-cols-[1fr]">
    <article class="p-6 border-border border rounded-xl bg-white">
      <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-light-blue text-primary text-[13px] font-bold mb-5">01</div>
      <h3 class="my-0 text-text text-[18px] font-semibold leading-[24px]">Real-time CAN Monitor</h3>
      <p class="text-body text-[14px] leading-[22px] mt-3 mb-4">View CAN frames as they arrive, filter message IDs, inspect payload bytes and export captured traffic for analysis.</p>
      <ul class="my-0 text-body text-[13px] leading-[22px] pl-4.5"><li class="mb-1">CAN 2.0A / 2.0B</li><li class="mb-1">RX/TX frame view</li><li class="mb-1">Message filtering</li></ul>
    </article>
    <article class="p-6 border-border border rounded-xl bg-white">
      <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-light-blue text-primary text-[13px] font-bold mb-5">02</div>
      <h3 class="my-0 text-text text-[18px] font-semibold leading-[24px]">ECU Diagnostics</h3>
      <p class="text-body text-[14px] leading-[22px] mt-3 mb-4">Identify connected ECUs and organize diagnostic information in one clean workspace.</p>
      <ul class="my-0 text-body text-[13px] leading-[22px] pl-4.5"><li class="mb-1">ECU identification</li><li class="mb-1">Diagnostic session tools</li><li class="mb-1">DTC overview</li></ul>
    </article>
    <article class="p-6 border-border border rounded-xl bg-white">
      <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-light-blue text-primary text-[13px] font-bold mb-5">03</div>
      <h3 class="my-0 text-text text-[18px] font-semibold leading-[24px]">UDS Services</h3>
      <p class="text-body text-[14px] leading-[22px] mt-3 mb-4">Access commonly used ISO 14229 diagnostic services through an engineer-friendly interface.</p>
      <ul class="my-0 text-body text-[13px] leading-[22px] pl-4.5"><li class="mb-1">Session control</li><li class="mb-1">Read data identifiers</li><li class="mb-1">Routine control</li></ul>
    </article>
    <article class="p-6 border-border border rounded-xl bg-white">
      <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-light-blue text-primary text-[13px] font-bold mb-5">04</div>
      <h3 class="my-0 text-text text-[18px] font-semibold leading-[24px]">Logging & Export</h3>
      <p class="text-body text-[14px] leading-[22px] mt-3 mb-4">Keep a record of diagnostic sessions and prepare CAN traffic data for offline investigation.</p>
      <ul class="my-0 text-body text-[13px] leading-[22px] pl-4.5"><li class="mb-1">Session logs</li><li class="mb-1">CSV export</li><li class="mb-1">Diagnostic reports</li></ul>
    </article>
  </div>

  <div class="grid grid-cols-[repeat(5,1fr)] overflow-hidden border-border border rounded-xl bg-white mt-8 lte-1100:grid-cols-[repeat(3,1fr)] lte-767:grid-cols-[1fr_1fr] lte-390:grid-cols-[1fr]">
    <div class="flex flex-col gap-[5px] justify-center min-h-23 p-5 border-r-border border-r lte-390:border-r-current! lte-390:border-b-border lte-390:[border-right-width:0px]! lte-390:[border-right-style:none]! lte-390:border-b"><span class="text-muted text-[11px] font-semibold leading-[18px] tracking-[0.06em]">INTERFACE</span><b class="text-text text-[14px] font-semibold leading-[20px]">USB</b></div>
    <div class="flex flex-col gap-[5px] justify-center min-h-23 p-5 border-r-border border-r lte-767:border-r-current lte-767:[border-right-width:0px] lte-767:[border-right-style:none] lte-390:border-r-current! lte-390:border-b-border lte-390:[border-right-width:0px]! lte-390:[border-right-style:none]! lte-390:border-b"><span class="text-muted text-[11px] font-semibold leading-[18px] tracking-[0.06em]">CAN</span><b class="text-text text-[14px] font-semibold leading-[20px]">2.0A / 2.0B</b></div>
    <div class="flex flex-col gap-[5px] justify-center min-h-23 p-5 border-r-border border-r lte-1100:border-r-current lte-1100:[border-right-width:0px] lte-1100:[border-right-style:none] lte-390:border-r-current! lte-390:border-b-border lte-390:[border-right-width:0px]! lte-390:[border-right-style:none]! lte-390:border-b"><span class="text-muted text-[11px] font-semibold leading-[18px] tracking-[0.06em]">DIAGNOSTICS</span><b class="text-text text-[14px] font-semibold leading-[20px]">UDS / ISO 14229</b></div>
    <div class="flex flex-col gap-[5px] justify-center min-h-23 p-5 border-r-border border-r lte-1100:border-t-border lte-1100:border-t lte-767:border-r-current lte-767:[border-right-width:0px] lte-767:[border-right-style:none] lte-390:border-r-current! lte-390:border-b-border lte-390:[border-right-width:0px]! lte-390:[border-right-style:none]! lte-390:border-b"><span class="text-muted text-[11px] font-semibold leading-[18px] tracking-[0.06em]">BAUD RATE</span><b class="text-text text-[14px] font-semibold leading-[20px]">Up to 1 Mbps*</b></div>
    <div class="flex flex-col gap-[5px] justify-center min-h-23 p-5 lte-1100:border-t-border lte-1100:border-t lte-390:border-r-current! lte-390:[border-right-width:0px]! lte-390:[border-right-style:none]!"><span class="text-muted text-[11px] font-semibold leading-[18px] tracking-[0.06em]">USE</span><b class="text-text text-[14px] font-semibold leading-[20px]">Development & Service</b></div>
  </div>
  <p class="text-muted text-[12px] leading-[20px] mt-3 mb-0">*Final hardware specifications will be updated when the production CAN Vision hardware profile is confirmed.</p>
</section>

<section class="w-[min(100%_-_96px,1536px)] mx-auto pt-24 lte-1100:w-[calc(100%_-_80px)] lte-767:w-[calc(100%_-_40px)] lte-767:pt-16 lte-390:w-[calc(100%_-_32px)]" id="dashboard">

    <div class="max-w-[800px] mb-10 lte-767:mb-7">
        <div>
            <div class="text-primary text-[12px] font-semibold leading-[20px] tracking-[0.08em] mb-3 uppercase">CAN VISION IN ACTION</div>

            <h2 class="my-0 text-text text-[32px] font-bold leading-[40px] tracking-[-0.02em] lte-767:text-[28px] lte-767:leading-[36px]">
                CAN Vision in the real world.
            </h2>

            <p class="text-body text-[16px] leading-[26px] mt-3 mb-0">
               Experience CAN Vision on your laptop and smartphone,
    from workshop diagnostics to quick vehicle checks on the road.
            </p>
        </div>
    </div>

    <div class="grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-5 lte-767:grid-cols-[1fr]">

        <article class="overflow-hidden border-border border rounded-xl bg-white">

            <div class="h-80 overflow-hidden bg-light-blue lte-767:h-65">
                <img class="block w-full h-full max-w-full object-cover"
                    src="/canvision/assets/canvision-laptop-user.png"
                    alt="Technician using CAN Vision with a laptop"
                >
            </div>

            <div class="p-7">

                <div class="text-primary text-[12px] font-semibold leading-[20px] tracking-[0.08em] mb-3 uppercase">
                    LAPTOP WORKSTATION
                </div>

                <h3 class="text-text text-[24px] font-bold leading-[32px] mt-1 mb-2.5">
                    Full diagnostic workspace
                </h3>

                <p class="my-0 text-body text-[15px] leading-[24px]">
                    Use CAN Vision with your laptop for complete
                    CAN monitoring, ECU diagnostics, UDS services,
                    logging and detailed analysis.
                </p>

                <div class="flex flex-wrap gap-2 mt-5">
                    <span class="px-2.5 py-[7px] rounded-md bg-light-blue text-primary text-[12px] font-semibold leading-[18px]">CAN Monitor</span>
                    <span class="px-2.5 py-[7px] rounded-md bg-light-blue text-primary text-[12px] font-semibold leading-[18px]">ECU Diagnostics</span>
                    <span class="px-2.5 py-[7px] rounded-md bg-light-blue text-primary text-[12px] font-semibold leading-[18px]">UDS</span>
                    <span class="px-2.5 py-[7px] rounded-md bg-light-blue text-primary text-[12px] font-semibold leading-[18px]">Logs</span>
                </div>

            </div>

        </article>

        <article class="overflow-hidden border-border border rounded-xl bg-white">

            <div class="h-80 overflow-hidden bg-light-blue lte-767:h-65">
                <img class="block w-full h-full max-w-full object-cover"
                    src="/canvision/assets/canvision-phone-user.png"
                    alt="Technician using CAN Vision with a smartphone"
                >
            </div>

            <div class="p-7">

                <div class="text-primary text-[12px] font-semibold leading-[20px] tracking-[0.08em] mb-3 uppercase">
                    MOBILE DIAGNOSTICS
                </div>

                <h3 class="text-text text-[24px] font-bold leading-[32px] mt-1 mb-2.5">
                    Diagnostics in your hand
                </h3>

                <p class="my-0 text-body text-[15px] leading-[24px]">
                    Connect through your smartphone for quick
                    vehicle checks, ECU information, DTC scanning,
                    live data and diagnostic workflows.
                </p>

                <div class="flex flex-wrap gap-2 mt-5">
                    <span class="px-2.5 py-[7px] rounded-md bg-light-blue text-primary text-[12px] font-semibold leading-[18px]">Live Data</span>
                    <span class="px-2.5 py-[7px] rounded-md bg-light-blue text-primary text-[12px] font-semibold leading-[18px]">DTC Scan</span>
                    <span class="px-2.5 py-[7px] rounded-md bg-light-blue text-primary text-[12px] font-semibold leading-[18px]">ECU Info</span>
                    <span class="px-2.5 py-[7px] rounded-md bg-light-blue text-primary text-[12px] font-semibold leading-[18px]">Mobile</span>
                </div>

            </div>

        </article>

    </div>

</section>
    <section class="w-[min(100%_-_96px,1100px)] mx-auto py-24 text-center lte-767:w-[calc(100%_-_40px)] lte-767:py-16 lte-390:w-[calc(100%_-_32px)]" id="about">
      <div class="text-primary text-[12px] font-semibold leading-[20px] tracking-[0.08em] mb-3 uppercase">ENGINEERED FOR DIAGNOSTICS</div>
      <h2 class="max-w-[900px] mx-auto my-0 text-text text-[32px] font-bold leading-[40px] tracking-[-0.02em] lte-767:text-[28px] lte-767:leading-[36px]">One interface for CAN communication, ECU diagnostics and vehicle data.</h2>
      <p class="max-w-[700px] mx-auto text-body text-[16px] leading-[26px] mt-4 mb-0">CAN Vision is designed to make automotive communication easier to observe, understand and diagnose.</p>
    </section>

    <section class="flex gap-8 items-center justify-between w-[min(100%_-_96px,1536px)] mx-auto px-12 py-10 rounded-xl bg-navy text-white mb-24 lte-1100:w-[calc(100%_-_80px)] lte-767:flex-col lte-767:items-start lte-767:w-[calc(100%_-_40px)] lte-767:px-6 lte-767:py-8 lte-767:mb-16 lte-390:w-[calc(100%_-_32px)]" id="contact">
      <div>
        <div class="text-[#6bb6ff] text-[12px] font-semibold leading-[20px] tracking-[0.08em] mb-3 uppercase">CAN VISION</div>
        <h2 class="my-0 text-white text-[32px] font-bold leading-[40px] tracking-[-0.02em] lte-767:text-[28px] lte-767:leading-[36px]">Ready to connect your vehicle?</h2>
      </div>
      <button class="min-h-12 px-5 py-0 border-transparent border rounded-lg bg-primary text-white [font-style:inherit] font-semibold text-[13px] font-[family-name:inherit] leading-[20px] whitespace-nowrap cursor-pointer lte-767:w-full focus-visible:[outline:3px_solid_rgba(15,96,232,0.3)] focus-visible:outline-offset-2 hover:bg-[#0b55ce]" id="contactBtn">CONTACT YANTRIC THINGS →</button>
    </section>
  </main>

  <footer class="flex gap-6 items-center justify-between min-h-20 px-12 py-6 bg-deep-navy text-[rgba(255,255,255,0.65)] text-[13px] leading-[20px] lte-767:flex-col lte-767:gap-2 lte-767:items-start lte-767:px-5">
    <span>© 2026 Yantric Things</span>
    <span>CAN Vision — Automotive Engineering Platform</span>
  </footer>

  <div class="fixed bottom-6 left-1/2 z-2000 max-w-[calc(100%_-_40px)] px-4 py-3 rounded-lg bg-navy text-white text-[13px] leading-[20px] opacity-0 [transition:opacity_0.2s_ease] [transform:translateX(-50%)] pointer-events-none [&.show]:opacity-100" id="toast"></div>
