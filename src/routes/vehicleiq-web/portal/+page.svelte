<script>
  import { onMount } from 'svelte';
  import '#lib/styles/app.css';
  import { initPortal, initPortalUi, destroyPortal } from '#lib/scripts/portal.js';

  onMount(() => {
    initPortal();
    initPortalUi();
    return destroyPortal;
  });
</script>

<svelte:head>
  <title>Yantric Things — Diagnostic Portal</title>
  <meta name="robots" content="noindex,nofollow" />
</svelte:head>

  <div class="flex w-full min-h-screen bg-[#f5f8fc] lte-767:block">

    <aside class="flex fixed top-0 left-0 z-1000 flex-col w-61.5 h-screen border-r-[rgba(255,255,255,0.04)] border-r bg-deep-navy text-white lte-1250:w-55 lte-1024:w-[205px] lte-767:relative lte-767:w-full lte-767:h-auto">

      <div class="hidden! items-center h-30.5 px-5.5 border-b-[rgba(255,255,255,0.06)] border-b lte-1024:px-[17px] lte-767:h-19 lte-767:px-4.5">

        <a
          href="/"
          class="hidden! gap-[11px] items-center text-white no-underline focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
        >

          <img class="block w-14.5 h-14.5 object-contain lte-1024:w-13 lte-1024:h-13 lte-767:w-12 lte-767:h-12"
            src="/assets/logo-y-mark.png"
            alt="Yantric Things"
            width="64"
            height="64"
          >

          <div class="flex flex-col leading-[1.05] tracking-[2px]">
            <strong class="text-white text-[16px] font-bold lte-1024:text-[14px]">YANTRIC</strong>
            <span class="text-white text-[14px] font-medium tracking-[3px] mt-1.5 lte-1024:text-[12px]">THINGS</span>
          </div>

        </a>

      </div>

      <nav class="flex flex-col grow basis-[0%] gap-1 px-[7px] py-3.5 lte-767:grid lte-767:grid-cols-[repeat(2,1fr)] lte-767:gap-[5px] lte-767:p-2 lte-480:grid-cols-[1fr]">

        <button
          type="button"
          class="sidebar-item tab is-active flex gap-4.5 items-center w-full min-h-13 px-4.5 py-0 border-current border-none rounded-lg bg-transparent text-white [font-style:inherit] font-medium text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer text-left lte-1024:gap-3 lte-1024:px-3.5 lte-1024:text-[13px] lte-767:gap-2 lte-767:min-h-11 lte-767:px-3 lte-767:text-[12px] lte-480:min-h-10.5 [&.active]:bg-primary [&.is-active]:bg-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[rgba(15,96,232,0.14)] [&.active]:hover:bg-primary [&.is-active]:hover:bg-primary"
          data-tab="vehicles"
        >
          <span class="inline-flex items-center justify-center w-[25px] min-w-[25px] text-white text-[24px] leading-[1] lte-1024:w-[23px] lte-1024:min-w-[23px] lte-1024:text-[20px] lte-767:text-[18px]">⌂</span>
          <span class="whitespace-nowrap">Dashboard</span>
        </button>

        <button
          type="button"
          class="sidebar-item tab flex gap-4.5 items-center w-full min-h-13 px-4.5 py-0 border-current border-none rounded-lg bg-transparent text-white [font-style:inherit] font-medium text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer text-left lte-1024:gap-3 lte-1024:px-3.5 lte-1024:text-[13px] lte-767:gap-2 lte-767:min-h-11 lte-767:px-3 lte-767:text-[12px] lte-480:min-h-10.5 [&.active]:bg-primary [&.is-active]:bg-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[rgba(15,96,232,0.14)] [&.active]:hover:bg-primary [&.is-active]:hover:bg-primary"
          data-tab="vehicles"
        >
          <span class="inline-flex items-center justify-center w-[25px] min-w-[25px] text-white text-[24px] leading-[1] lte-1024:w-[23px] lte-1024:min-w-[23px] lte-1024:text-[20px] lte-767:text-[18px]">▣</span>
          <span class="whitespace-nowrap">Vehicles</span>
        </button>

        <button
          type="button"
          class="sidebar-item tab flex gap-4.5 items-center w-full min-h-13 px-4.5 py-0 border-current border-none rounded-lg bg-transparent text-white [font-style:inherit] font-medium text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer text-left lte-1024:gap-3 lte-1024:px-3.5 lte-1024:text-[13px] lte-767:gap-2 lte-767:min-h-11 lte-767:px-3 lte-767:text-[12px] lte-480:min-h-10.5 [&.active]:bg-primary [&.is-active]:bg-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[rgba(15,96,232,0.14)] [&.active]:hover:bg-primary [&.is-active]:hover:bg-primary"
          data-tab="ecu"
        >
          <span class="inline-flex items-center justify-center w-[25px] min-w-[25px] text-white text-[24px] leading-[1] lte-1024:w-[23px] lte-1024:min-w-[23px] lte-1024:text-[20px] lte-767:text-[18px]">▦</span>
          <span class="whitespace-nowrap">ECU Information</span>
        </button>

        <button
          type="button"
          class="sidebar-item tab flex gap-4.5 items-center w-full min-h-13 px-4.5 py-0 border-current border-none rounded-lg bg-transparent text-white [font-style:inherit] font-medium text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer text-left lte-1024:gap-3 lte-1024:px-3.5 lte-1024:text-[13px] lte-767:gap-2 lte-767:min-h-11 lte-767:px-3 lte-767:text-[12px] lte-480:min-h-10.5 [&.active]:bg-primary [&.is-active]:bg-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[rgba(15,96,232,0.14)] [&.active]:hover:bg-primary [&.is-active]:hover:bg-primary"
          data-tab="dtc"
        >
          <span class="inline-flex items-center justify-center w-[25px] min-w-[25px] text-white text-[24px] leading-[1] lte-1024:w-[23px] lte-1024:min-w-[23px] lte-1024:text-[20px] lte-767:text-[18px]">△</span>
          <span class="whitespace-nowrap">DTC Library</span>
        </button>

        <button
          type="button"
          class="sidebar-item tab flex gap-4.5 items-center w-full min-h-13 px-4.5 py-0 border-current border-none rounded-lg bg-transparent text-white [font-style:inherit] font-medium text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer text-left lte-1024:gap-3 lte-1024:px-3.5 lte-1024:text-[13px] lte-767:gap-2 lte-767:min-h-11 lte-767:px-3 lte-767:text-[12px] lte-480:min-h-10.5 [&.active]:bg-primary [&.is-active]:bg-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[rgba(15,96,232,0.14)] [&.active]:hover:bg-primary [&.is-active]:hover:bg-primary"
          data-tab="live"
        >
          <span class="inline-flex items-center justify-center w-[25px] min-w-[25px] text-white text-[24px] leading-[1] lte-1024:w-[23px] lte-1024:min-w-[23px] lte-1024:text-[20px] lte-767:text-[18px]">⌁</span>
          <span class="whitespace-nowrap">Live Data</span>
        </button>

        <button
          type="button"
          class="sidebar-item tab flex gap-4.5 items-center w-full min-h-13 px-4.5 py-0 border-current border-none rounded-lg bg-transparent text-white [font-style:inherit] font-medium text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer text-left lte-1024:gap-3 lte-1024:px-3.5 lte-1024:text-[13px] lte-767:gap-2 lte-767:min-h-11 lte-767:px-3 lte-767:text-[12px] lte-480:min-h-10.5 [&.active]:bg-primary [&.is-active]:bg-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[rgba(15,96,232,0.14)] [&.active]:hover:bg-primary [&.is-active]:hover:bg-primary"
          data-tab="uds"
        >
          <span class="inline-flex items-center justify-center w-[25px] min-w-[25px] text-white text-[24px] leading-[1] lte-1024:w-[23px] lte-1024:min-w-[23px] lte-1024:text-[20px] lte-767:text-[18px]">◉</span>
          <span class="whitespace-nowrap">UDS Services</span>
        </button>

        <button
          type="button"
          class="sidebar-item flex gap-4.5 items-center w-full min-h-13 px-4.5 py-0 border-current border-none rounded-lg bg-transparent text-white [font-style:inherit] font-medium text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer text-left lte-1024:gap-3 lte-1024:px-3.5 lte-1024:text-[13px] lte-767:gap-2 lte-767:min-h-11 lte-767:px-3 lte-767:text-[12px] lte-480:min-h-10.5 [&.active]:bg-primary [&.is-active]:bg-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[rgba(15,96,232,0.14)] [&.active]:hover:bg-primary [&.is-active]:hover:bg-primary"
          data-section="can-monitor"
        >
          <span class="inline-flex items-center justify-center w-[25px] min-w-[25px] text-white text-[24px] leading-[1] lte-1024:w-[23px] lte-1024:min-w-[23px] lte-1024:text-[20px] lte-767:text-[18px]">◌</span>
          <span class="whitespace-nowrap">CAN Monitor</span>
        </button>

        <button
          type="button"
          class="sidebar-item flex gap-4.5 items-center w-full min-h-13 px-4.5 py-0 border-current border-none rounded-lg bg-transparent text-white [font-style:inherit] font-medium text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer text-left lte-1024:gap-3 lte-1024:px-3.5 lte-1024:text-[13px] lte-767:gap-2 lte-767:min-h-11 lte-767:px-3 lte-767:text-[12px] lte-480:min-h-10.5 [&.active]:bg-primary [&.is-active]:bg-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[rgba(15,96,232,0.14)] [&.active]:hover:bg-primary [&.is-active]:hover:bg-primary"
          data-section="diagnostics"
        >
          <span class="inline-flex items-center justify-center w-[25px] min-w-[25px] text-white text-[24px] leading-[1] lte-1024:w-[23px] lte-1024:min-w-[23px] lte-1024:text-[20px] lte-767:text-[18px]">⚙</span>
          <span class="whitespace-nowrap">Diagnostics</span>
        </button>

        <button
          type="button"
          class="sidebar-item tab flex gap-4.5 items-center w-full min-h-13 px-4.5 py-0 border-current border-none rounded-lg bg-transparent text-white [font-style:inherit] font-medium text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer text-left lte-1024:gap-3 lte-1024:px-3.5 lte-1024:text-[13px] lte-767:gap-2 lte-767:min-h-11 lte-767:px-3 lte-767:text-[12px] lte-480:min-h-10.5 [&.active]:bg-primary [&.is-active]:bg-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[rgba(15,96,232,0.14)] [&.active]:hover:bg-primary [&.is-active]:hover:bg-primary"
          data-tab="reports"
        >
          <span class="inline-flex items-center justify-center w-[25px] min-w-[25px] text-white text-[24px] leading-[1] lte-1024:w-[23px] lte-1024:min-w-[23px] lte-1024:text-[20px] lte-767:text-[18px]">▤</span>
          <span class="whitespace-nowrap">Reports</span>
        </button>

        <button
          type="button"
          class="sidebar-item flex gap-4.5 items-center w-full min-h-13 px-4.5 py-0 border-current border-none rounded-lg bg-transparent text-white [font-style:inherit] font-medium text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer text-left lte-1024:gap-3 lte-1024:px-3.5 lte-1024:text-[13px] lte-767:gap-2 lte-767:min-h-11 lte-767:px-3 lte-767:text-[12px] lte-480:min-h-10.5 [&.active]:bg-primary [&.is-active]:bg-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[rgba(15,96,232,0.14)] [&.active]:hover:bg-primary [&.is-active]:hover:bg-primary"
          data-section="settings"
        >
          <span class="inline-flex items-center justify-center w-[25px] min-w-[25px] text-white text-[24px] leading-[1] lte-1024:w-[23px] lte-1024:min-w-[23px] lte-1024:text-[20px] lte-767:text-[18px]">⚙</span>
          <span class="whitespace-nowrap">Settings</span>
        </button>

      </nav>

      <div class="px-6 border-t-[rgba(255,255,255,0.07)] border-t pt-4.5 pb-7 lte-767:hidden">

        <div class="flex gap-[9px] items-center">

          <img class="w-10.5 h-10.5 object-contain"
            src="/assets/logo-y-mark.png"
            alt="Yantric Things"
            width="42"
            height="42"
          >

          <div>
            <strong class="text-white text-[12px] font-semibold tracking-[1.5px]">YANTRIC THINGS</strong>
          </div>

        </div>

        <p class="text-[#9aa9c0] text-[10px] leading-[1.5] mt-3 mb-0">
          Connected Mobility. Smarter Tomorrow.
        </p>

      </div>

    </aside>

    <div class="flex flex-col w-[calc(100%_-_246px)] min-h-screen bg-[#f5f8fc] ml-61.5 lte-1250:w-[calc(100%_-_220px)] lte-1250:ml-55 lte-1024:w-[calc(100%_-_205px)] lte-1024:ml-[205px] lte-767:w-full lte-767:ml-0 dark:bg-navy">

<header class="relative z-1000 h-18 min-h-18 [border-width:medium] bg-navy text-white">

    <div class="flex gap-8 items-center justify-between w-[min(100%_-_96px,1536px)] h-18 mx-auto lte-1023:w-[calc(100%_-_64px)] lte-767:w-[calc(100%_-_40px)] lte-480:w-[calc(100%_-_32px)]">

        <a
            href="/"
            class="inline-flex shrink-0 gap-2.5 items-center no-underline focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
            aria-label="Yantric Things home"
        >

            <img
                src="/assets/logo-y-mark.png"
                alt="Yantric Things"
                class="block shrink-0 w-9 h-9 max-w-9 max-h-9 object-contain"
                width="36"
                height="36"
            >

            <span class="inline-flex gap-[5px] items-baseline text-[16px] font-semibold leading-[20px] tracking-[0.3px] whitespace-nowrap lte-480:text-[15px]">
                <strong class="text-white font-bold">YANTRIC</strong>
                <em class="text-primary not-italic font-bold">THINGS</em>
            </span>

        </a>

        <button
            type="button"
            class="hidden flex-col gap-[5px] items-center justify-center w-10 h-10 p-0 border-current border-none bg-transparent [font:inherit] cursor-pointer lte-767:flex focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
            aria-label="Open navigation"
            aria-expanded="false"
        >
            <span class="block w-5.5 h-0.5 rounded-[2px] bg-white"></span>
            <span class="block w-5.5 h-0.5 rounded-[2px] bg-white"></span>
            <span class="block w-5.5 h-0.5 rounded-[2px] bg-white"></span>
        </button>

        <nav
            class="flex gap-8 items-center lte-1023:gap-6 lte-767:hidden lte-767:absolute lte-767:inset-x-0 lte-767:top-18 lte-767:flex-col lte-767:gap-0 lte-767:items-start lte-767:px-5 lte-767:py-4 lte-767:bg-navy lte-767:[&.open]:flex"
            id="portal-nav"
        >

            <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:w-full lte-767:py-3.5 lte-767:text-[14px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:text-primary" href="/#products">
                Products
            </a>

            <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:w-full lte-767:py-3.5 lte-767:text-[14px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:text-primary" href="/#services">
                Services
            </a>

            <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:w-full lte-767:py-3.5 lte-767:text-[14px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:text-primary" href="/#solutions">
                Solutions
            </a>

            <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:w-full lte-767:py-3.5 lte-767:text-[14px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:text-primary" href="/#about">
                About Us
            </a>

            <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:w-full lte-767:py-3.5 lte-767:text-[14px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:text-primary" href="/contact_page">
                Contact
            </a>

            <button
                type="button"
                id="logoutBtn"
                class="h-9 px-4 py-0 border border-[rgba(255,255,255,0.3)] rounded-[7px] bg-transparent text-white [font-style:inherit] font-semibold text-[13px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,border-color_0.18s_ease] cursor-pointer lte-767:w-full lte-767:h-10 lte-767:mt-1.5 focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:border-primary hover:bg-primary"
            >
                Logout
            </button>

        </nav>

    </div>

</header>

      <main class="grow basis-[0%] w-full px-4 pt-2.5 pb-3 lte-767:px-2.5 lte-767:pb-2.5 dark:bg-navy">

        <section class="selector-card flex items-center w-full h-19.5 min-h-19.5 px-4.5 py-[9px] border-[#dce4ef] border rounded-[7px] bg-white [box-shadow:rgba(16,35,63,0.03)_0px_1px_3px] lte-767:flex-col lte-767:gap-3.5 lte-767:items-stretch lte-767:h-auto lte-767:min-h-20.5 lte-767:p-3.5 dark:border-[#203552] dark:bg-[#0b1c36]">

          <div class="flex grow basis-[0%] flex-col gap-1.5">

            <div class="flex gap-2.5 items-center text-text text-[15px] mb-0.5 lte-480:text-[14px] dark:text-white">

              <span class="text-[21px]">
                🚗
              </span>

              <strong>
                Vehicle / ECU Selector
              </strong>

            </div>

            <button
              type="button"
              class="flex gap-[9px] items-center w-[345px] h-9 px-[13px] py-0 border-[#dce4ef] border rounded-[22px] bg-white text-[#19345c] [font-style:inherit] [font-weight:inherit] text-[13px] font-[family-name:inherit] leading-[inherit] cursor-pointer text-left lte-1250:w-75 lte-1024:w-65 lte-767:w-full focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:border-[#b9c9dc] dark:border-[#29405e] dark:bg-[#0b1c36] dark:text-white"
              id="vehicleSelector"
            >

              <span class="text-[18px]">
                🚗
              </span>

              <span
                class="font-semibold"
                id="selectedVehicle"
              >
                VCI_001
              </span>

              <span>
                ·
              </span>

              <span
                class="font-normal"
                id="selectedVehicleType"
              >
                EV Bike
              </span>

              <span class="inline-block w-[9px] h-[9px] rounded-[50%] bg-[#20a765] ml-1"></span>

              <span class="text-[#28875a] font-medium">
                Connected
              </span>

              <span class="text-[#60728d] text-[18px] ml-auto">
               ⌄
              </span>

            </button>

          </div>

          <div class="flex gap-3.5 items-center pl-5 lte-1024:gap-2 lte-1024:pl-2.5 lte-767:grid lte-767:grid-cols-[repeat(4,1fr)] lte-767:gap-1.5 lte-767:w-full lte-767:pl-0 lte-480:grid-cols-[repeat(2,1fr)]">

            <button
              type="button"
              class="ecu-selector-btn active w-[125px] h-10.5 border-current border-none rounded-[7px] bg-[#edf3fb] text-[#19345c] [font-style:inherit] font-semibold text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer lte-1250:w-[105px] lte-1024:w-[85px] lte-767:w-full lte-767:h-10 lte-767:text-[12px] lte-480:h-10.5 [&.active]:bg-primary [&.active]:text-white [&.active]:[box-shadow:rgba(15,96,232,0.18)_0px_4px_12px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#e0ebf9] [&.active]:hover:bg-primary"
              data-ecu="BCM"
            >
              BCM
            </button>

            <button
              type="button"
              class="ecu-selector-btn w-[125px] h-10.5 border-current border-none rounded-[7px] bg-[#edf3fb] text-[#19345c] [font-style:inherit] font-semibold text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer lte-1250:w-[105px] lte-1024:w-[85px] lte-767:w-full lte-767:h-10 lte-767:text-[12px] lte-480:h-10.5 [&.active]:bg-primary [&.active]:text-white [&.active]:[box-shadow:rgba(15,96,232,0.18)_0px_4px_12px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#e0ebf9] [&.active]:hover:bg-primary"
              data-ecu="BMS"
            >
              BMS
            </button>

            <button
              type="button"
              class="ecu-selector-btn w-[125px] h-10.5 border-current border-none rounded-[7px] bg-[#edf3fb] text-[#19345c] [font-style:inherit] font-semibold text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer lte-1250:w-[105px] lte-1024:w-[85px] lte-767:w-full lte-767:h-10 lte-767:text-[12px] lte-480:h-10.5 [&.active]:bg-primary [&.active]:text-white [&.active]:[box-shadow:rgba(15,96,232,0.18)_0px_4px_12px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#e0ebf9] [&.active]:hover:bg-primary"
              data-ecu="MCU"
            >
              MCU
            </button>

            <button
              type="button"
              class="ecu-selector-btn w-[125px] h-10.5 border-current border-none rounded-[7px] bg-[#edf3fb] text-[#19345c] [font-style:inherit] font-semibold text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,color_0.18s_ease] cursor-pointer lte-1250:w-[105px] lte-1024:w-[85px] lte-767:w-full lte-767:h-10 lte-767:text-[12px] lte-480:h-10.5 [&.active]:bg-primary [&.active]:text-white [&.active]:[box-shadow:rgba(15,96,232,0.18)_0px_4px_12px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#e0ebf9] [&.active]:hover:bg-primary"
              data-ecu="VCU"
            >
              VCU
            </button>

          </div>

        </section>

        <p
          class="h-2.5 mx-0.5 my-1 text-[#718097] text-[11px] leading-[10px]"
          id="status"
        >
          Loading dashboard…
        </p>

        <div
          class="hidden!"
          id="stats"
          hidden
        ></div>

        <nav
          class="hidden!"
          id="tabs"
          hidden
        >

          <button
            type="button"
            class="tab is-active [font:inherit] cursor-pointer focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
            data-tab="vehicles"
          >
            Vehicles
          </button>

          <button
            type="button"
            class="tab [font:inherit] cursor-pointer focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
            data-tab="ecu"
          >
            ECUs
          </button>

          <button
            type="button"
            class="tab [font:inherit] cursor-pointer focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
            data-tab="did"
          >
            DIDs
          </button>

          <button
            type="button"
            class="tab [font:inherit] cursor-pointer focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
            data-tab="dtc"
          >
            DTCs
          </button>

          <button
            type="button"
            class="tab [font:inherit] cursor-pointer focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
            data-tab="routine"
          >
            Routines
          </button>

          <button
            type="button"
            class="tab [font:inherit] cursor-pointer focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
            data-tab="uds"
          >
            UDS services
          </button>

          <button
            type="button"
            class="tab [font:inherit] cursor-pointer focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
            data-tab="reports"
          >
            Reports
          </button>

        </nav>

        <section class="workspace-grid grid-cols-[260px_minmax(500px,1fr)_335px] gap-2.5 w-full mt-0.5 lte-1250:grid-cols-[230px_minmax(420px,1fr)_285px] lte-1024:grid-cols-[215px_1fr] lte-767:grid-cols-[1fr] [&.tab-hidden]:hidden!">

          <section class="min-w-0 min-h-[600px] overflow-hidden border-[#dce4ef] border rounded-md bg-white lte-767:min-h-75 dark:border-[#203552] dark:bg-[#0b1c36]">

            <div class="flex items-center justify-between h-17 min-h-17 px-4.5 border-b-border border-b lte-480:px-[13px] dark:border-[#203552]">

              <div class="flex gap-2.5 items-center text-text text-[14px] font-semibold lte-480:text-[13px] dark:text-white">

                <span class="text-[#162d55] text-[21px] dark:text-white">
                  ▦
                </span>

                <span>
                  ECU LIST
                </span>

              </div>

            </div>

            <div class="px-[9px] py-2.5">

              <button
                type="button"
                class="ecu-list-item selected flex gap-[13px] items-center w-full h-11 px-2.5 py-0 border-current border-none rounded-[5px] bg-transparent text-[#19345c] [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.16s_ease] cursor-pointer text-left [&.selected]:bg-light-blue focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#f3f7fc] dark:text-white [body.dark-ui_&.selected]:bg-[#12335e] [&.selected]:hover:bg-light-blue"
                data-ecu="BCM"
              >

                <span class="inline-flex items-center justify-center w-[19px] h-[19px] border-primary border rounded-sm bg-primary text-white text-[13px] font-bold">
                  ✓
                </span>

                <span class="grow basis-[0%] font-medium dark:text-white">
                  BCM
                </span>

                <span class="text-[#5c6e88] text-[22px] leading-[1]">
                  ›
                </span>

              </button>

              <button
                type="button"
                class="ecu-list-item flex gap-[13px] items-center w-full h-11 px-2.5 py-0 border-current border-none rounded-[5px] bg-transparent text-[#19345c] [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.16s_ease] cursor-pointer text-left [&.selected]:bg-light-blue focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#f3f7fc] dark:text-white [body.dark-ui_&.selected]:bg-[#12335e] [&.selected]:hover:bg-light-blue"
                data-ecu="BMS"
              >

                <span class="inline-flex items-center justify-center w-[19px] h-[19px] border-primary border rounded-sm bg-primary text-white text-[13px] font-bold">
                  ✓
                </span>

                <span class="grow basis-[0%] font-medium dark:text-white">
                  BMS
                </span>

                <span class="text-[#5c6e88] text-[22px] leading-[1]">
                  ›
                </span>

              </button>

              <button
                type="button"
                class="ecu-list-item flex gap-[13px] items-center w-full h-11 px-2.5 py-0 border-current border-none rounded-[5px] bg-transparent text-[#19345c] [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.16s_ease] cursor-pointer text-left [&.selected]:bg-light-blue focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#f3f7fc] dark:text-white [body.dark-ui_&.selected]:bg-[#12335e] [&.selected]:hover:bg-light-blue"
                data-ecu="MCU"
              >

                <span class="inline-flex items-center justify-center w-[19px] h-[19px] border-primary border rounded-sm bg-primary text-white text-[13px] font-bold">
                  ✓
                </span>

                <span class="grow basis-[0%] font-medium dark:text-white">
                  MCU
                </span>

                <span class="text-[#5c6e88] text-[22px] leading-[1]">
                  ›
                </span>

              </button>

              <button
                type="button"
                class="ecu-list-item flex gap-[13px] items-center w-full h-11 px-2.5 py-0 border-current border-none rounded-[5px] bg-transparent text-[#19345c] [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.16s_ease] cursor-pointer text-left [&.selected]:bg-light-blue focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#f3f7fc] dark:text-white [body.dark-ui_&.selected]:bg-[#12335e] [&.selected]:hover:bg-light-blue"
                data-ecu="VCU"
              >

                <span class="inline-flex items-center justify-center w-[19px] h-[19px] border-primary border rounded-sm bg-primary text-white text-[13px] font-bold">
                  ✓
                </span>

                <span class="grow basis-[0%] font-medium dark:text-white">
                  VCU
                </span>

                <span class="text-[#5c6e88] text-[22px] leading-[1]">
                  ›
                </span>

              </button>

              <div class="h-px mx-1 my-2 bg-[#e4e9f0] dark:border-[#203552]"></div>

              <button
                type="button"
                class="ecu-list-item flex gap-[13px] items-center w-full h-11 px-2.5 py-0 border-current border-none rounded-[5px] bg-transparent text-[#19345c] [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.16s_ease] cursor-pointer text-left [&.selected]:bg-light-blue focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#f3f7fc] dark:text-white [body.dark-ui_&.selected]:bg-[#12335e] [&.selected]:hover:bg-light-blue"
              >

                <span class="inline-flex items-center justify-center w-[19px] h-[19px] border-[#9baabd] border rounded-sm text-transparent text-[13px] font-bold">
                </span>

                <span class="grow basis-[0%] font-medium dark:text-white">
                  Active Session
                </span>

                <span class="text-[#5c6e88] text-[22px] leading-[1]">
                  ›
                </span>

              </button>

              <button
                type="button"
                class="ecu-list-item flex gap-[13px] items-center w-full h-11 px-2.5 py-0 border-current border-none rounded-[5px] bg-transparent text-[#19345c] [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.16s_ease] cursor-pointer text-left [&.selected]:bg-light-blue focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#f3f7fc] dark:text-white [body.dark-ui_&.selected]:bg-[#12335e] [&.selected]:hover:bg-light-blue"
              >

                <span class="inline-flex items-center justify-center w-[19px] h-[19px] border-[#9baabd] border rounded-sm text-transparent text-[13px] font-bold">
                </span>

                <span class="grow basis-[0%] font-medium dark:text-white">
                  ECU Supplier
                </span>

                <span class="text-[#5c6e88] text-[22px] leading-[1]">
                  ›
                </span>

              </button>

              <button
                type="button"
                class="ecu-list-item flex gap-[13px] items-center w-full h-11 px-2.5 py-0 border-current border-none rounded-[5px] bg-transparent text-[#19345c] [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.16s_ease] cursor-pointer text-left [&.selected]:bg-light-blue focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#f3f7fc] dark:text-white [body.dark-ui_&.selected]:bg-[#12335e] [&.selected]:hover:bg-light-blue"
              >

                <span class="inline-flex items-center justify-center w-[19px] h-[19px] border-[#9baabd] border rounded-sm text-transparent text-[13px] font-bold">
                </span>

                <span class="grow basis-[0%] font-medium dark:text-white">
                  Part Number
                </span>

                <span class="text-[#5c6e88] text-[22px] leading-[1]">
                  ›
                </span>

              </button>

            </div>

          </section>

          <section class="min-w-0 min-h-[600px] overflow-hidden border-[#dce4ef] border rounded-md bg-white lte-767:min-h-[450px] dark:border-[#203552] dark:bg-[#0b1c36]">

            <div class="flex gap-3 items-center justify-between h-17 min-h-17 px-4.5 border-b-border border-b lte-1024:h-auto lte-1024:py-3 lte-767:flex-col lte-767:items-stretch lte-480:px-[13px] lte-480:py-0 dark:border-[#203552]">

              <div class="flex gap-2.5 items-center text-text text-[14px] font-semibold lte-480:text-[13px] dark:text-white">

                <span class="text-[#162d55] text-[21px] dark:text-white">
                  ◉
                </span>

                <span>
                  Read DID
                </span>

              </div>

              <div class="flex gap-3 items-center lte-1250:gap-[7px] lte-1024:flex-wrap lte-1024:justify-end lte-767:grid lte-767:grid-cols-[1fr_auto] lte-767:justify-stretch lte-767:w-full">

                <div class="flex gap-[7px] items-center w-47.5 h-9.5 px-[11px] border-[#dce4ef] border rounded-[7px] bg-white lte-1250:w-37.5 lte-767:w-full focus-within:border-primary focus-within:[box-shadow:rgba(15,96,232,0.1)_0px_0px_0px_3px] dark:border-[#29405e] dark:bg-[#0b1c36]">

                  <span class="text-muted text-[20px]">
                    ⌕
                  </span>

                  <input class="w-full border-current border-none bg-transparent text-text [font-style:inherit] [font-weight:inherit] text-[12px] font-[family-name:inherit] leading-[inherit] [outline:0] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 dark:text-white placeholder:text-[#8a96a8]"
                    type="search"
                    id="didSearch"
                    placeholder="Search DID name..."
                    autocomplete="off"
                  >

                </div>

                <label class="flex gap-[7px] items-center text-body text-[12px] whitespace-nowrap lte-767:[justify-self:end]">

                  <input class="w-4.5 h-4.5 [font:inherit] accent-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                    type="checkbox"
                    id="selectAllDid"
                    checked
                  >

                  <span>
                    Select all
                  </span>

                </label>

                <button
                  type="button"
                  class="h-9.5 px-[15px] py-0 border-current border-none rounded-[7px] bg-primary text-white [font-style:inherit] font-semibold text-[12px] font-[family-name:inherit] leading-[inherit] whitespace-nowrap cursor-pointer lte-767:w-full lte-767:[grid-column:1_/_-1] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#0b52c7]"
                  id="readSelectedDid"
                >
                  Read selected (3)
                </button>

              </div>

            </div>

            <div class="w-full overflow-x-auto">

              <table class="did-table w-full border-collapse table-fixed lte-480:min-w-[620px]">

                <thead>

                  <tr>

                    <th class="w-12 h-12 px-[13px] py-0 border-b-[#dfe6ef] border-b bg-white text-[#19345c] text-[13px] font-semibold text-left dark:border-[#203552] dark:text-white">
                      <input class="w-4.5 h-4.5 [font:inherit] accent-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                        type="checkbox"
                        checked
                      >
                    </th>

                    <th class="w-[24%] h-12 px-[13px] py-0 border-b-[#dfe6ef] border-b bg-white text-[#19345c] text-[13px] font-semibold text-left dark:border-[#203552] dark:text-white">
                      DID name
                    </th>

                    <th class="w-1/4 h-12 px-[13px] py-0 border-b-[#dfe6ef] border-b bg-white text-[#19345c] text-[13px] font-semibold text-left dark:border-[#203552] dark:text-white">
                      Response
                    </th>

                    <th class="w-[18%] h-12 px-[13px] py-0 border-b-[#dfe6ef] border-b bg-white text-[#19345c] text-[13px] font-semibold text-left dark:border-[#203552] dark:text-white">
                      Type
                    </th>

                    <th class="w-1/5 h-12 px-[13px] py-0 border-b-[#dfe6ef] border-b bg-white text-[#19345c] text-[13px] font-semibold text-left dark:border-[#203552] dark:text-white">
                      Last read
                    </th>

                  </tr>

                </thead>

                <tbody id="didTableBody">

                  <tr class="did-row selected hover:bg-[#f8fafd] [.did-table_tbody_&.selected]:bg-light-blue [body.dark-ui_.did-table_tbody_&.selected]:bg-[#12335e] dark:hover:bg-[#102743]">

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      <input class="w-4.5 h-4.5 [font:inherit] accent-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                        type="checkbox"
                        checked
                      >
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      VIN
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      MH12AB1234
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      String
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      10:22:01
                    </td>

                  </tr>

                  <tr class="did-row selected hover:bg-[#f8fafd] [.did-table_tbody_&.selected]:bg-light-blue [body.dark-ui_.did-table_tbody_&.selected]:bg-[#12335e] dark:hover:bg-[#102743]">

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      <input class="w-4.5 h-4.5 [font:inherit] accent-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                        type="checkbox"
                        checked
                      >
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      SW version
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      v1.0.4
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      String
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      10:22:01
                    </td>

                  </tr>

                  <tr class="did-row selected hover:bg-[#f8fafd] [.did-table_tbody_&.selected]:bg-light-blue [body.dark-ui_.did-table_tbody_&.selected]:bg-[#12335e] dark:hover:bg-[#102743]">

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      <input class="w-4.5 h-4.5 [font:inherit] accent-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                        type="checkbox"
                        checked
                      >
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      HW number
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      HW_102
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      String
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      10:22:01
                    </td>

                  </tr>

                  <tr class="did-row hover:bg-[#f8fafd] [.did-table_tbody_&.selected]:bg-light-blue [body.dark-ui_.did-table_tbody_&.selected]:bg-[#12335e] dark:hover:bg-[#102743]">

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      <input class="w-4.5 h-4.5 [font:inherit] accent-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                        type="checkbox"
                      >
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      Active session
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      —
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      Byte
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      —
                    </td>

                  </tr>

                  <tr class="did-row hover:bg-[#f8fafd] [.did-table_tbody_&.selected]:bg-light-blue [body.dark-ui_.did-table_tbody_&.selected]:bg-[#12335e] dark:hover:bg-[#102743]">

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      <input class="w-4.5 h-4.5 [font:inherit] accent-primary focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                        type="checkbox"
                      >
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      ECU supplier
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      —
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      String
                    </td>

                    <td class="h-13 px-[13px] py-0 overflow-hidden border-b-[#e3e8ef] border-b text-[#19345c] text-[13px] whitespace-nowrap text-ellipsis dark:border-[#203552] dark:text-white">
                      —
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </section>

          <section class="min-w-0 min-h-[600px] overflow-hidden border-[#dce4ef] border rounded-md bg-white lte-1024:hidden lte-767:block lte-767:min-h-62.5 dark:border-[#203552] dark:bg-[#0b1c36]">

            <div class="flex items-center justify-between h-17 min-h-17 px-4.5 border-b-border border-b lte-480:px-[13px] dark:border-[#203552]">

              <div class="flex gap-2.5 items-center text-text text-[14px] font-semibold lte-480:text-[13px] dark:text-white">

                <span class="text-[#162d55] text-[21px] dark:text-white">
                  ▤
                </span>

                <span>
                  UDS log
                </span>

              </div>

            </div>

            <div class="w-full">

              <div class="flex gap-3 items-center min-h-[43px] px-4.5 border-b-[#e3e8ef] border-b lte-480:px-[13px]">

                <span class="w-17.5 text-[#77849a] font-sfmono-regular text-[12px] lte-480:w-15 lte-480:text-[10px]">
                  10:22:02
                </span>

                <span class="inline-block shrink-0 w-[9px] h-[9px] rounded-[50%] bg-[#20a765]"></span>

                <span class="text-[#3a9567] font-sfmono-regular text-[13px] font-medium lte-480:text-[11px]">
                  62 F190 MH12
                </span>

              </div>

              <div class="flex gap-3 items-center min-h-[43px] px-4.5 border-b-[#e3e8ef] border-b lte-480:px-[13px]">

                <span class="w-17.5 text-[#77849a] font-sfmono-regular text-[12px] lte-480:w-15 lte-480:text-[10px]">
                  10:22:02
                </span>

                <span class="inline-block shrink-0 w-[9px] h-[9px] rounded-[50%] bg-[#20a765]"></span>

                <span class="text-[#3a9567] font-sfmono-regular text-[13px] font-medium lte-480:text-[11px]">
                  62 F188 v104
                </span>

              </div>

              <div class="flex gap-3 items-center min-h-[43px] px-4.5 border-b-[#e3e8ef] border-b lte-480:px-[13px]">

                <span class="w-17.5 text-[#77849a] font-sfmono-regular text-[12px] lte-480:w-15 lte-480:text-[10px]">
                  10:22:02
                </span>

                <span class="inline-block shrink-0 w-[9px] h-[9px] rounded-[50%] bg-[#20a765]"></span>

                <span class="text-[#3a9567] font-sfmono-regular text-[13px] font-medium lte-480:text-[11px]">
                  62 F191 HW102
                </span>

              </div>

            </div>

          </section>

        </section>

        <div
          class="hidden!"
          id="vehicleActions"
        >

          <input class="[font:inherit] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
            type="search"
            id="vehicleSearch"
            placeholder="Search vehicles..."
            autocomplete="off"
          >

          <button class="inline-flex gap-[7px] items-center justify-center h-9.5 px-4 py-0 border-current border-none rounded-[7px] bg-primary text-white [font-style:inherit] font-semibold text-[13px] font-[family-name:inherit] leading-[inherit] [transition:background_0.18s_ease,transform_0.12s_ease,box-shadow_0.18s_ease] cursor-pointer lte-767:w-full lte-767:h-10.5 active:[transform:translateY(1px)] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#0b52c7] hover:[box-shadow:rgba(15,96,232,0.18)_0px_4px_12px]"
            type="button"
            id="addVehicleBtn"
          >
            + Add Vehicle
          </button>

        </div>

        <section
          class="[&_td:last-child>button:first-child]:h-8 [&_td:last-child>button:first-child]:min-w-13 [&_td:last-child>button:first-child]:px-[11px] [&_td:last-child>button:first-child]:py-0 [&_td:last-child>button:first-child]:border-primary [&_td:last-child>button:first-child]:border [&_td:last-child>button:first-child]:rounded-md [&_td:last-child>button:first-child]:bg-white [&_td:last-child>button:first-child]:text-primary [&_td:last-child>button:first-child]:[font-style:inherit] [&_td:last-child>button:first-child]:font-semibold [&_td:last-child>button:first-child]:text-[12px] [&_td:last-child>button:first-child]:font-[family-name:inherit] [&_td:last-child>button:first-child]:leading-[inherit] [&_td:last-child>button:first-child]:[transition:background_0.18s_ease,color_0.18s_ease,border-color_0.18s_ease] [&_td:last-child>button:first-child]:cursor-pointer lte-767:[&_td:last-child>button:first-child]:h-8.5 [&_td:last-child>button:first-child:focus-visible]:[outline:2px_solid_#0f60e8] [&_td:last-child>button:first-child:focus-visible]:outline-offset-2 [&_td:last-child>button:first-child:hover]:bg-light-blue dark:[&_td:last-child>button:first-child]:border-[#60a5fa] dark:[&_td:last-child>button:first-child]:bg-transparent dark:[&_td:last-child>button:first-child]:text-[#60a5fa] dark:[&_td:last-child>button:first-child:hover]:bg-[#12335e] [&_td:last-child>button:nth-child(2)]:h-8 [&_td:last-child>button:nth-child(2)]:min-w-15 [&_td:last-child>button:nth-child(2)]:px-[11px] [&_td:last-child>button:nth-child(2)]:py-0 [&_td:last-child>button:nth-child(2)]:border-[#dc3545] [&_td:last-child>button:nth-child(2)]:border [&_td:last-child>button:nth-child(2)]:rounded-md [&_td:last-child>button:nth-child(2)]:bg-white [&_td:last-child>button:nth-child(2)]:text-[#dc3545] [&_td:last-child>button:nth-child(2)]:[font-style:inherit] [&_td:last-child>button:nth-child(2)]:font-semibold [&_td:last-child>button:nth-child(2)]:text-[12px] [&_td:last-child>button:nth-child(2)]:font-[family-name:inherit] [&_td:last-child>button:nth-child(2)]:leading-[inherit] [&_td:last-child>button:nth-child(2)]:[transition:background_0.18s_ease,color_0.18s_ease,border-color_0.18s_ease] [&_td:last-child>button:nth-child(2)]:cursor-pointer [&_td:last-child>button:nth-child(2)]:ml-1.5 lte-767:[&_td:last-child>button:nth-child(2)]:h-8.5 [&_td:last-child>button:nth-child(2):focus-visible]:[outline:2px_solid_#0f60e8] [&_td:last-child>button:nth-child(2):focus-visible]:outline-offset-2 [&_td:last-child>button:nth-child(2):hover]:bg-[#fff1f2] dark:[&_td:last-child>button:nth-child(2)]:border-[#f87171] dark:[&_td:last-child>button:nth-child(2)]:bg-transparent dark:[&_td:last-child>button:nth-child(2)]:text-[#f87171] dark:[&_td:last-child>button:nth-child(2):hover]:bg-[#3a1d25] w-full border-[#dce4ef] border rounded-[7px] bg-white mt-2.5 overflow-x-auto [visibility:visible_!important] [&.tab-visible]:block! [&.tab-visible]:opacity-100! [&.tab-visible]:visible! [&:not([hidden])]:block! [&:not([hidden])]:opacity-100! [&:not([hidden])]:visible! [&[hidden]]:hidden! dark:border-[#203552] dark:bg-[#0b1c36] [&:not([hidden])]:[&[hidden]]:block! [&_th]:h-12 [&_th]:px-3.5 [&_th]:py-0 [&_th]:border-b-[#dfe6ef] [&_th]:border-b [&_th]:bg-surface [&_th]:text-[#19345c] [&_th]:text-[13px] [&_th]:font-semibold [&_th]:whitespace-nowrap [&_th]:text-left dark:[&_th]:border-[#203552] dark:[&_th]:bg-[#0b1c36] dark:[&_th]:text-white [&_tbody>tr:not(:last-child)>td:not(:last-child)]:min-h-12 [&_tbody>tr:not(:last-child)>td:not(:last-child)]:px-3.5 [&_tbody>tr:not(:last-child)>td:not(:last-child)]:py-[13px] [&_tbody>tr:not(:last-child)>td:not(:last-child)]:border-b-[#e3e8ef] [&_tbody>tr:not(:last-child)>td:not(:last-child)]:border-b [&_tbody>tr:not(:last-child)>td:not(:last-child)]:text-body [&_tbody>tr:not(:last-child)>td:not(:last-child)]:text-[13px] [&_tbody>tr:not(:last-child)>td:not(:last-child)]:align-middle dark:[&_tbody>tr:not(:last-child)>td:not(:last-child)]:border-[#203552] dark:[&_tbody>tr:not(:last-child)>td:not(:last-child)]:text-white [&_tbody>tr:not(:last-child)>td:last-child]:min-h-12 [&_tbody>tr:not(:last-child)>td:last-child]:px-3.5 [&_tbody>tr:not(:last-child)>td:last-child]:py-[13px] [&_tbody>tr:not(:last-child)>td:last-child]:border-b-[#e3e8ef] [&_tbody>tr:not(:last-child)>td:last-child]:border-b [&_tbody>tr:not(:last-child)>td:last-child]:text-body [&_tbody>tr:not(:last-child)>td:last-child]:text-[13px] [&_tbody>tr:not(:last-child)>td:last-child]:whitespace-nowrap [&_tbody>tr:not(:last-child)>td:last-child]:align-middle dark:[&_tbody>tr:not(:last-child)>td:last-child]:border-[#203552] dark:[&_tbody>tr:not(:last-child)>td:last-child]:text-white [&_tbody>tr:last-child>td:not(:last-child)]:min-h-12 [&_tbody>tr:last-child>td:not(:last-child)]:px-3.5 [&_tbody>tr:last-child>td:not(:last-child)]:py-[13px] [&_tbody>tr:last-child>td:not(:last-child)]:text-body [&_tbody>tr:last-child>td:not(:last-child)]:text-[13px] [&_tbody>tr:last-child>td:not(:last-child)]:align-middle dark:[&_tbody>tr:last-child>td:not(:last-child)]:border-t-[#203552] dark:[&_tbody>tr:last-child>td:not(:last-child)]:border-r-[#203552] dark:[&_tbody>tr:last-child>td:not(:last-child)]:border-l-[#203552] dark:[&_tbody>tr:last-child>td:not(:last-child)]:text-white [&_tbody>tr:last-child>td:last-child]:min-h-12 [&_tbody>tr:last-child>td:last-child]:px-3.5 [&_tbody>tr:last-child>td:last-child]:py-[13px] [&_tbody>tr:last-child>td:last-child]:text-body [&_tbody>tr:last-child>td:last-child]:text-[13px] [&_tbody>tr:last-child>td:last-child]:whitespace-nowrap [&_tbody>tr:last-child>td:last-child]:align-middle dark:[&_tbody>tr:last-child>td:last-child]:border-t-[#203552] dark:[&_tbody>tr:last-child>td:last-child]:border-r-[#203552] dark:[&_tbody>tr:last-child>td:last-child]:border-l-[#203552] dark:[&_tbody>tr:last-child>td:last-child]:text-white [&_tbody>tr:hover]:bg-[#f8fafd] dark:[&_tbody>tr:hover]:bg-[#102743]"
          id="tableWrap"
          hidden
        >

          <div>

            <table class="w-full bg-white border-collapse lte-767:min-w-[700px] lte-480:min-w-[650px] dark:bg-[#0b1c36]" id="dataTable">

              <thead id="tableHead"></thead>

              <tbody id="tableBody"></tbody>

            </table>

          </div>

          <p
           
            id="tableMeta"
          ></p>

        </section>

        <div
          class="flex fixed inset-0 z-3000 items-center justify-center p-5 bg-[rgba(4,16,32,0.55)] [&[hidden]]:hidden"
          id="vehicleModal"
          hidden
        >

          <div class="w-[min(500px,100%)] p-6.5 border-[#dce4ef] border rounded-xl bg-white [box-shadow:rgba(4,16,32,0.25)_0px_20px_60px]">

            <h2 class="text-text text-[24px] font-bold mt-0 mb-5.5">
              Add Vehicle
            </h2>

            <form class="flex flex-col gap-[15px]" id="vehicleForm">

              <label class="flex flex-col gap-[7px] text-body text-[13px] font-semibold">

                Vehicle Name

                <input class="w-full h-11 px-3 py-0 border-[#dce4ef] border rounded-[7px] bg-white text-text [font:inherit] [outline:none] focus:border-primary focus:[box-shadow:rgba(15,96,232,0.1)_0px_0px_0px_3px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                  type="text"
                  id="vehicleName"
                  required
                >

              </label>

              <label class="flex flex-col gap-[7px] text-body text-[13px] font-semibold">

                Brand

                <input class="w-full h-11 px-3 py-0 border-[#dce4ef] border rounded-[7px] bg-white text-text [font:inherit] [outline:none] focus:border-primary focus:[box-shadow:rgba(15,96,232,0.1)_0px_0px_0px_3px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                  type="text"
                  id="vehicleBrand"
                >

              </label>

              <label class="flex flex-col gap-[7px] text-body text-[13px] font-semibold">

                Model

                <input class="w-full h-11 px-3 py-0 border-[#dce4ef] border rounded-[7px] bg-white text-text [font:inherit] [outline:none] focus:border-primary focus:[box-shadow:rgba(15,96,232,0.1)_0px_0px_0px_3px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                  type="text"
                  id="vehicleModel"
                >

              </label>

              <label class="flex flex-col gap-[7px] text-body text-[13px] font-semibold">

                Year

                <input class="w-full h-11 px-3 py-0 border-[#dce4ef] border rounded-[7px] bg-white text-text [font:inherit] [outline:none] focus:border-primary focus:[box-shadow:rgba(15,96,232,0.1)_0px_0px_0px_3px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                  type="number"
                  id="vehicleYear"
                >

              </label>

              <label class="flex flex-col gap-[7px] text-body text-[13px] font-semibold">

                VIN

                <input class="w-full h-11 px-3 py-0 border-[#dce4ef] border rounded-[7px] bg-white text-text [font:inherit] [outline:none] focus:border-primary focus:[box-shadow:rgba(15,96,232,0.1)_0px_0px_0px_3px] focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                  type="text"
                  id="vehicleVin"
                >

              </label>

              <div class="flex gap-2.5 justify-end mt-2">

                <button class="h-11 px-4.5 py-0 border-[#dce4ef] border rounded-[7px] bg-white text-body [font-style:inherit] font-semibold text-[13px] font-[family-name:inherit] leading-[inherit] cursor-pointer focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2"
                  type="button"
                  id="cancelVehicleBtn"
                >
                  Cancel
                </button>

                <button class="h-11 px-4.5 py-0 border-current border-none rounded-[7px] bg-primary text-white [font-style:inherit] font-semibold text-[13px] font-[family-name:inherit] leading-[inherit] cursor-pointer focus-visible:[outline:2px_solid_#0f60e8] focus-visible:outline-offset-2 hover:bg-[#0b52c7]"
                  type="submit"
                  id="saveVehicleBtn"
                >
                  Save Vehicle
                </button>

              </div>

            </form>

          </div>

        </div>

      </main>

      <footer class="flex items-center justify-between h-14.5 min-h-14.5 px-6 border-t-[#dce4ef] border-t bg-white text-[#19345c] text-[12px] font-medium lte-767:flex-col lte-767:gap-2 lte-767:items-start lte-767:justify-center lte-767:min-h-17.5 lte-767:px-3.5 lte-767:py-2.5 lte-767:text-[11px] dark:border-[#203552] dark:bg-[#0b1c36] dark:text-white">

        <div class="flex gap-[9px] items-center lte-767:flex-wrap">

          <span class="inline-flex gap-[7px] items-center">

            <span class="inline-block w-2.5 h-2.5 rounded-[50%] bg-[#20a765]"></span>

            <span>
              Connected
            </span>

          </span>

          <span class="text-[#9aa6b7]">
            ·
          </span>

          <span class="inline-flex gap-[7px] items-center">
            VCI_001
          </span>

          <span class="text-[#9aa6b7]">
            ·
          </span>

          <span class="inline-flex gap-[7px] items-center">

            <span class="text-[16px]">
              🚲
            </span>

            EV Bike

          </span>

          <span class="text-[#9aa6b7]">
            ·
          </span>

          <span class="inline-flex gap-[7px] items-center">

            <span>
              ◉
            </span>

            CAN / UDS

          </span>

        </div>

        <div class="flex gap-[9px] items-center text-primary font-semibold lte-767:w-full">

          <span class="text-[21px] leading-[1]">
            ⟳
          </span>

          <span>
            All databases synced
          </span>

        </div>

      </footer>

    </div>

  </div>
