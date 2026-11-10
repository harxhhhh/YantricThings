<script>
  import { onMount } from 'svelte';
  import '#lib/styles/app.css';
  import { initMain, initSecretLogo, initDevPopup } from '#lib/scripts/home.js';

  onMount(() => {
    const destroyMain = initMain();
    initSecretLogo();
    initDevPopup();
    return destroyMain;
  });
</script>

<svelte:head>
  <title>Yantric Things — Engineering the future of connected systems</title>
  <meta name="description" content="Advanced CAN, IoT and Embedded solutions that power diagnostics, automation and innovation across industries." />
  <meta name="copyright" content="YantricThings. All rights reserved." />
  <meta name="robots" content="index,follow,noimageai,noimageindex" />
  <link rel="icon" type="image/png" href="/assets/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="flex fixed inset-0 z-99999 items-center justify-center p-5 bg-[rgba(4,16,32,0.72)] [backdrop-filter:blur(5px)]" id="devPopup">
    <div class="relative w-[min(460px,100%)] px-8.5 border-border border rounded-xl bg-white [box-shadow:rgba(4,16,32,0.2)_0px_24px_60px] pt-9.5 pb-8 text-center lte-560:px-5.5 lte-560:pt-8 lte-560:pb-6.5">
        <button class="absolute top-2.5 right-3 w-9 h-9 border-current border-none bg-transparent text-muted [font-style:inherit] [font-weight:inherit] text-[27px] font-[family-name:inherit] leading-[1] cursor-pointer focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-text" id="devPopupClose" aria-label="Close">
            &times;
        </button>

        <div class="flex items-center justify-center w-14 h-14 mx-auto rounded-[50%] bg-light-blue text-primary text-[25px] mb-5">
            ⚙
        </div>

        <h2 class="text-text text-[26px] font-bold leading-[1.2] mt-0 mb-3 lte-560:text-[22px]">Website Under Development</h2>

        <p class="max-w-95 mx-auto text-body text-[15px] leading-[1.7] mt-0 mb-6.5 lte-560:text-[14px]">
            Yantric Things is currently updating and improving our website.
            Some features and pages may not be fully available yet.
        </p>

        <button class="min-h-12 px-5.5 py-0 border-current border-none rounded-lg bg-primary text-white [font-style:inherit] font-semibold text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.2s_ease,transform_0.2s_ease] cursor-pointer lte-560:w-full focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:bg-[#0b55cf] hover:[transform:translateY(-1px)]" id="continueWebsite">
            CONTINUE TO WEBSITE →
        </button>
    </div>
</div>
  <header class="site-header relative top-0 z-1000 w-full h-18 min-h-18 border-b-[rgba(255,255,255,0.08)] border-b bg-navy text-white" id="top">
    <div class="flex gap-8 items-center justify-between w-[min(100%_-_96px,1536px)] h-18 min-h-18 mx-auto lte-1023:w-[calc(100%_-_64px)] lte-767:w-[calc(100%_-_40px)] lte-760:min-h-17 lte-480:w-[calc(100%_-_32px)]">

      <a class="brand inline-flex shrink-0 gap-2.5 items-center text-inherit [transition:transform_0.2s_ease] no-underline select-none cursor-grab [touch-action:pan-y] [&.secret-dragging]:[transition:none] [&.secret-dragging]:cursor-grabbing focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2" id="yantricSecretLogo" href="/" aria-label="Yantric Things home">
            <img
                class="brand-mark block shrink-0 w-9 h-9 max-w-9 max-h-9 object-contain [-webkit-user-drag:none] select-none pointer-events-none"
                src="/assets/logo-y-mark.png"
                alt="Yantric Things"
                width="36"
                height="36"
                draggable="false"
            />

            <span class="inline-flex gap-[5px] items-baseline text-white text-[16px] font-semibold leading-[20px] tracking-[0.3px] whitespace-nowrap lte-480:text-[15px]">
                <strong class="text-white font-bold">YANTRIC</strong>
                <em class="text-primary not-italic font-bold">THINGS</em>
            </span>
        </a>

        <button
            class="nav-toggle hidden w-11 h-11 p-2.5 border-current border-none bg-transparent [font:inherit] cursor-pointer ml-auto lte-767:flex lte-767:flex-col lte-767:gap-[5px] lte-767:items-center lte-767:justify-center lte-767:w-10 lte-767:h-10 lte-767:p-0 focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2"
            type="button"
            aria-expanded="false"
            aria-controls="site-nav"
            aria-label="Open menu"
        >
            <span class="block w-5.5 h-0.5 mx-auto my-[5px] rounded-[2px] bg-white"></span>
            <span class="block w-5.5 h-0.5 mx-auto my-[5px] rounded-[2px] bg-white"></span>
            <span class="block w-5.5 h-0.5 mx-auto my-[5px] rounded-[2px] bg-white"></span>
        </button>

        <nav class="site-nav flex gap-8 items-center justify-end ml-auto lte-1023:gap-6 lte-767:hidden lte-767:absolute lte-767:inset-x-0 lte-767:top-18 lte-767:flex-col lte-767:gap-0 lte-767:items-start lte-767:px-5 lte-767:py-4 lte-767:bg-navy lte-767:[&.open]:flex lte-900:[.site-header.open_&]:absolute lte-900:[.site-header.open_&]:inset-x-0 lte-900:[.site-header.open_&]:top-18 lte-900:[.site-header.open_&]:flex-col lte-900:[.site-header.open_&]:gap-0 lte-900:[.site-header.open_&]:items-stretch lte-900:[.site-header.open_&]:px-8 lte-900:[.site-header.open_&]:border-b-[rgba(255,255,255,0.08)] lte-900:[.site-header.open_&]:border-b lte-900:[.site-header.open_&]:bg-navy lte-900:[.site-header.open_&]:pt-3 lte-900:[.site-header.open_&]:pb-5 lte-767:[.site-header.open_&]:flex" id="site-nav">
            <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] tracking-[0.02em] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:w-full lte-767:py-3.5 lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary lte-900:[.site-header.open_.site-nav_&]:w-full lte-900:[.site-header.open_.site-nav_&]:py-[15px] lte-900:[.site-header.open_.site-nav_&]:border-b-[rgba(255,255,255,0.07)] lte-900:[.site-header.open_.site-nav_&]:border-b" href="/#products">Products</a>
            <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] tracking-[0.02em] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:w-full lte-767:py-3.5 lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary lte-900:[.site-header.open_.site-nav_&]:w-full lte-900:[.site-header.open_.site-nav_&]:py-[15px] lte-900:[.site-header.open_.site-nav_&]:border-b-[rgba(255,255,255,0.07)] lte-900:[.site-header.open_.site-nav_&]:border-b" href="/#services">Services</a>
            <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] tracking-[0.02em] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:w-full lte-767:py-3.5 lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary lte-900:[.site-header.open_.site-nav_&]:w-full lte-900:[.site-header.open_.site-nav_&]:py-[15px] lte-900:[.site-header.open_.site-nav_&]:border-b-[rgba(255,255,255,0.07)] lte-900:[.site-header.open_.site-nav_&]:border-b" href="/#solutions">Solutions</a>
            <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] tracking-[0.02em] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:w-full lte-767:py-3.5 lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary lte-900:[.site-header.open_.site-nav_&]:w-full lte-900:[.site-header.open_.site-nav_&]:py-[15px] lte-900:[.site-header.open_.site-nav_&]:border-b-[rgba(255,255,255,0.07)] lte-900:[.site-header.open_.site-nav_&]:border-b" href="/#about">About Us</a>
           <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] tracking-[0.02em] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:w-full lte-767:py-3.5 lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary lte-900:[.site-header.open_.site-nav_&]:w-full lte-900:[.site-header.open_.site-nav_&]:py-[15px]" href="/contact_page">Contact</a>
        </nav>

    </div>
</header>

  <main>
    <section class="flex relative items-center min-h-[min(78vh,640px)] overflow-hidden bg-[image:linear-gradient(110deg,#041020_0%,#07152d_55%,#0a2143_100%)] text-white pt-16 pb-20 lte-760:min-h-[auto] lte-760:pt-12 lte-760:pb-16 lte-560:pt-10 lte-560:pb-14" id="hero" data-hero-slider>
      <div class="absolute inset-0 bg-[image:radial-gradient(at_75%_45%,rgba(15,96,232,0.2),transparent_48%),radial-gradient(circle_at_10%_85%,rgba(15,96,232,0.12),transparent_32%)] pointer-events-none" aria-hidden="true"></div>
      <div class="grid relative z-1 grid-cols-[1.05fr_0.95fr] gap-8 items-center w-[min(100%_-_96px,1536px)] mx-auto lte-1100:w-[min(100%_-_80px,960px)] lte-900:grid-cols-[1fr] lte-900:w-[min(100%_-_64px,820px)] lte-760:w-[calc(100%_-_40px)] lte-560:w-[calc(100%_-_32px)] lte-430:w-[calc(100%_-_28px)]">
        <div>
          <div class="hero-slide-copy is-active [animation:fadeSlide_0.45s_ease_both] [&[hidden]]:hidden!" data-slide="0">
            <p class="text-[#6bb6ff] text-[12px] font-semibold tracking-[0.12em] mt-0 mb-4 uppercase">INTELLIGENT DIAGNOSTICS. CONNECTED SOLUTIONS.</p>
            <h1 class="max-w-[14ch] text-[clamp(40px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-1.2px] mt-0 mb-5 lte-900:max-w-none lte-760:text-[42px] lte-560:text-[38px] lte-430:text-[36px]">Engineering the future of connected systems</h1>
            <p class="max-w-[620px] my-0 text-[rgba(255,255,255,0.72)] text-[16px] leading-[1.7] lte-760:text-[15px]">Advanced CAN, IoT and Embedded solutions that power diagnostics, automation and innovation across industries.</p>
          </div>
          <div class="hero-slide-copy [animation:fadeSlide_0.45s_ease_both] [&[hidden]]:hidden!" data-slide="1" hidden>
            <p class="text-[#6bb6ff] text-[12px] font-semibold tracking-[0.12em] mt-0 mb-4 uppercase">FEATURED HARDWARE · CAN VISION</p>
            <h1 class="max-w-[14ch] text-[clamp(40px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-1.2px] mt-0 mb-5 lte-900:max-w-none lte-760:text-[42px] lte-560:text-[38px] lte-430:text-[36px]">Real-time CAN diagnostics in the field</h1>
            <p class="max-w-[620px] my-0 text-[rgba(255,255,255,0.72)] text-[16px] leading-[1.7] lte-760:text-[15px]">Rugged CAN / CAN FD gateway bridging vehicle buses to Wi‑Fi and USB for UDS workflows technicians trust.</p>
          </div>
          <div class="hero-slide-copy [animation:fadeSlide_0.45s_ease_both] [&[hidden]]:hidden!" data-slide="2" hidden>
            <p class="text-[#6bb6ff] text-[12px] font-semibold tracking-[0.12em] mt-0 mb-4 uppercase">IOT &amp; EMBEDDED SYSTEMS</p>
            <h1 class="max-w-[14ch] text-[clamp(40px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-1.2px] mt-0 mb-5 lte-900:max-w-none lte-760:text-[42px] lte-560:text-[38px] lte-430:text-[36px]">Connect devices from edge to cloud</h1>
            <p class="max-w-[620px] my-0 text-[rgba(255,255,255,0.72)] text-[16px] leading-[1.7] lte-760:text-[15px]">Gateways, firmware, and secure telemetry that turn machines into intelligent, connected things.</p>
          </div>
          <div class="hero-slide-copy [animation:fadeSlide_0.45s_ease_both] [&[hidden]]:hidden!" data-slide="3" hidden>
            <p class="text-[#6bb6ff] text-[12px] font-semibold tracking-[0.12em] mt-0 mb-4 uppercase">VT DASHBOARD</p>
            <h1 class="max-w-[14ch] text-[clamp(40px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-1.2px] mt-0 mb-5 lte-900:max-w-none lte-760:text-[42px] lte-560:text-[38px] lte-430:text-[36px]">Technician software that sees everything</h1>
            <p class="max-w-[620px] my-0 text-[rgba(255,255,255,0.72)] text-[16px] leading-[1.7] lte-760:text-[15px]">Live gauges, DID/DTC tools, routines and flash — built for service engineers who need clarity fast.</p>
          </div>
          <div class="flex flex-wrap gap-3 mt-7 lte-760:flex-col lte-760:items-stretch">
            <a class="inline-flex gap-2 items-center justify-center min-h-12 px-5 border-transparent border rounded-lg bg-primary text-white text-[14px] font-semibold [transition:background_0.2s_ease,color_0.2s_ease,border-color_0.2s_ease,transform_0.2s_ease] no-underline cursor-pointer lte-760:w-full active:[transform:translateY(0px)] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:bg-[#0b55cf] hover:[transform:translateY(-1px)] active:hover:[transform:translateY(0px)]" href="#products">EXPLORE PRODUCTS <span aria-hidden="true">→</span></a>
            <a class="inline-flex gap-2 items-center justify-center min-h-12 px-5 border-[rgba(255,255,255,0.45)] border rounded-lg text-white text-[14px] font-semibold [transition:background_0.2s_ease,color_0.2s_ease,border-color_0.2s_ease,transform_0.2s_ease] no-underline cursor-pointer lte-760:w-full active:[transform:translateY(0px)] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-white hover:bg-[rgba(255,255,255,0.08)] hover:[transform:translateY(-1px)] active:hover:[transform:translateY(0px)]" href="#services">OUR SERVICES</a>
          </div>
        </div>
        <div class="grid relative place-items-center min-h-90 lte-900:-order-1 lte-900:min-h-65 lte-760:min-h-57.5 lte-560:min-h-52.5 lte-430:min-h-47.5" aria-hidden="true">
          <div class="hero-slide-visual is-active grid absolute inset-0 place-items-center [animation:fadeSlide_0.45s_ease_both] [&[hidden]]:hidden!" data-slide="0">
            <img class="block w-[min(100%,560px)] max-w-full max-h-[400px] [outline:none] [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] object-contain [filter:drop-shadow(rgba(15,96,232,0.28)_0px_0px_28px)] lte-900:max-h-65 lte-760:max-h-57.5 lte-560:max-h-52.5 lte-430:max-h-47.5" src="/assets/hero-car-wireframe.svg" alt="" />
          </div>
          <div class="hero-slide-visual grid absolute inset-0 place-items-center [animation:fadeSlide_0.45s_ease_both] [&[hidden]]:hidden!" data-slide="1" hidden>
            <img class="block w-[min(100%,520px)] max-w-full max-h-90 [outline:none] [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] object-contain [mask-image:radial-gradient(72%_68%,#000_42%,transparent_78%)] [filter:drop-shadow(rgba(15,96,232,0.24)_0px_0px_24px)] lte-900:max-h-65 lte-760:max-h-55 lte-760:[mask-image:radial-gradient(78%_72%,#000_40%,transparent_82%)] lte-560:max-h-52.5 lte-430:max-h-47.5" src="/assets/hero-slide-2-can.png" alt="" />
          </div>
          <div class="hero-slide-visual grid absolute inset-0 place-items-center [animation:fadeSlide_0.45s_ease_both] [&[hidden]]:hidden!" data-slide="2" hidden>
            <img class="block w-[min(100%,520px)] max-w-full max-h-90 [outline:none] [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] object-contain [mask-image:radial-gradient(72%_68%,#000_42%,transparent_78%)] [filter:drop-shadow(rgba(15,96,232,0.24)_0px_0px_24px)] lte-900:max-h-65 lte-760:max-h-55 lte-760:[mask-image:radial-gradient(78%_72%,#000_40%,transparent_82%)] lte-560:max-h-52.5 lte-430:max-h-47.5" src="/assets/hero-slide-3-iot.png" alt="" />
          </div>
          <div class="hero-slide-visual grid absolute inset-0 place-items-center [animation:fadeSlide_0.45s_ease_both] [&[hidden]]:hidden!" data-slide="3" hidden>
            <img class="block w-[min(100%,520px)] max-w-full max-h-90 [outline:none] [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] object-contain [mask-image:radial-gradient(72%_68%,#000_42%,transparent_78%)] [filter:drop-shadow(rgba(15,96,232,0.24)_0px_0px_24px)] lte-900:max-h-65 lte-760:max-h-55 lte-760:[mask-image:radial-gradient(78%_72%,#000_40%,transparent_82%)] lte-560:max-h-52.5 lte-430:max-h-47.5" src="/assets/hero-slide-4-dash.png" alt="" />
          </div>
        </div>
      </div>
      <div class="hero-dots flex absolute inset-x-0 bottom-6 z-5 gap-[9px] justify-center lte-560:bottom-4" role="tablist" aria-label="Hero slides">
        <button type="button" class="active w-2 h-2 p-0 border-current border-none rounded-[50%] bg-[rgba(255,255,255,0.3)] [font:inherit] [transition:background_0.2s_ease,transform_0.2s_ease] cursor-pointer focus-visible:[outline:2px_solid_#FFFFFF] focus-visible:outline-offset-3 [.hero-dots_&.active]:bg-primary [.hero-dots_&.active]:[transform:scale(1.15)]" data-goto="0" aria-label="Slide 1"></button>
        <button class="w-2 h-2 p-0 border-current border-none rounded-[50%] bg-[rgba(255,255,255,0.3)] [font:inherit] [transition:background_0.2s_ease,transform_0.2s_ease] cursor-pointer focus-visible:[outline:2px_solid_#FFFFFF] focus-visible:outline-offset-3 [.hero-dots_&.active]:bg-primary [.hero-dots_&.active]:[transform:scale(1.15)]" type="button" data-goto="1" aria-label="Slide 2"></button>
        <button class="w-2 h-2 p-0 border-current border-none rounded-[50%] bg-[rgba(255,255,255,0.3)] [font:inherit] [transition:background_0.2s_ease,transform_0.2s_ease] cursor-pointer focus-visible:[outline:2px_solid_#FFFFFF] focus-visible:outline-offset-3 [.hero-dots_&.active]:bg-primary [.hero-dots_&.active]:[transform:scale(1.15)]" type="button" data-goto="2" aria-label="Slide 3"></button>
        <button class="w-2 h-2 p-0 border-current border-none rounded-[50%] bg-[rgba(255,255,255,0.3)] [font:inherit] [transition:background_0.2s_ease,transform_0.2s_ease] cursor-pointer focus-visible:[outline:2px_solid_#FFFFFF] focus-visible:outline-offset-3 [.hero-dots_&.active]:bg-primary [.hero-dots_&.active]:[transform:scale(1.15)]" type="button" data-goto="3" aria-label="Slide 4"></button>
      </div>
    </section>

    <section class="py-20 bg-white lte-760:py-16 lte-560:py-14" id="solutions">
      <div class="grid grid-cols-[minmax(0px,1.1fr)_minmax(0px,1.15fr)_minmax(260px,0.85fr)] gap-8 items-center w-[min(100%_-_96px,1536px)] mx-auto lte-1100:grid-cols-[1fr_1fr] lte-1100:w-[min(100%_-_80px,960px)] lte-900:w-[min(100%_-_64px,820px)] lte-760:grid-cols-[1fr] lte-760:w-[calc(100%_-_40px)] lte-560:w-[calc(100%_-_32px)] lte-430:w-[calc(100%_-_28px)]">
        <div class="reveal opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none]">
          <p class="max-w-[520px] my-0 text-body text-[16px] font-semibold leading-[1.7] tracking-[0.12em] uppercase">FEATURED PRODUCT</p>
          <h2 class="text-text text-[clamp(32px,3vw,40px)] font-bold leading-[1.15] tracking-[-0.8px] mt-0 mb-4 lte-760:text-[32px] lte-560:text-[30px]">CAN Vision</h2>
          <p class="max-w-[520px] my-0 text-body text-[16px] leading-[1.7]">Powerful, easy-to-use CAN bus interface for real-time communication and diagnostics.</p>
          <ul class="list-none pl-0 mt-6 mb-7">
            <li class="before:absolute before:top-1 before:left-0 before:w-4.5 before:h-4.5 before:rounded-[50%] before:bg-center before:bg-[image:url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2016%2016%27%3E%3Cpath%20d=%27M4%208.5l2.5%202.5L12%205%27%20fill=%27none%27%20stroke=%27white%27%20stroke-width=%272%27%20stroke-linecap=%27round%27/%3E%3C/svg%3E')] before:bg-[size:11px_auto] before:bg-no-repeat before:bg-primary before:box-border before:content-[''] relative my-3 text-body text-[15px] font-medium pl-7.5">High performance &amp; reliability</li>
            <li class="before:absolute before:top-1 before:left-0 before:w-4.5 before:h-4.5 before:rounded-[50%] before:bg-center before:bg-[image:url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2016%2016%27%3E%3Cpath%20d=%27M4%208.5l2.5%202.5L12%205%27%20fill=%27none%27%20stroke=%27white%27%20stroke-width=%272%27%20stroke-linecap=%27round%27/%3E%3C/svg%3E')] before:bg-[size:11px_auto] before:bg-no-repeat before:bg-primary before:box-border before:content-[''] relative my-3 text-body text-[15px] font-medium pl-7.5">Wide vehicle protocol support</li>
            <li class="before:absolute before:top-1 before:left-0 before:w-4.5 before:h-4.5 before:rounded-[50%] before:bg-center before:bg-[image:url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2016%2016%27%3E%3Cpath%20d=%27M4%208.5l2.5%202.5L12%205%27%20fill=%27none%27%20stroke=%27white%27%20stroke-width=%272%27%20stroke-linecap=%27round%27/%3E%3C/svg%3E')] before:bg-[size:11px_auto] before:bg-no-repeat before:bg-primary before:box-border before:content-[''] relative my-3 text-body text-[15px] font-medium pl-7.5">Plug &amp; play simplicity</li>
          </ul>
          <a href="/canvision" class="inline-flex gap-2 items-center justify-center min-h-12 px-5 border-transparent border rounded-lg text-inherit text-[14px] font-semibold [transition:background_0.2s_ease,color_0.2s_ease,border-color_0.2s_ease,transform_0.2s_ease] no-underline cursor-pointer active:[transform:translateY(0px)] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:[transform:translateY(-1px)] active:hover:[transform:translateY(0px)]">
    READ MORE <span aria-hidden="true">→</span>
</a>
        </div>
        <div class="reveal grid place-items-center opacity-0 [transform:translateY(12px)] [transition-behavior:normal,normal] [transition-duration:0.45s,0.45s] [transition-timing-function:ease,ease] [transition-delay:0.1s] [transition-property:opacity,transform] [&.visible]:opacity-100 [&.visible]:[transform:none]">
          <div class="product-orb grid place-items-center w-[min(100%,360px)] p-4.5 overflow-hidden rounded-[50%] bg-[image:radial-gradient(circle_at_40%_35%,#fff,#f1f5fa_65%,#e5ebf3)] [box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] aspect-square">
            <img class="block w-[92%] h-[92%] max-w-full [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] object-contain" src="/assets/canvision.png" alt="CAN Vision hardware interface" />
          </div>
        </div>
       <aside class="reveal px-6 py-7 border-border border rounded-xl bg-white [box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] opacity-0 [transform:translateY(12px)] [transition-behavior:normal,normal] [transition-duration:0.45s,0.45s] [transition-timing-function:ease,ease] [transition-delay:0.1s] [transition-property:opacity,transform] lte-1100:max-w-[420px] lte-1100:[grid-column:1_/_-1] [&.visible]:opacity-100 [&.visible]:[transform:none]">

    <div class="relative w-full h-[520px] overflow-hidden rounded-2xl lte-767:h-[400px]">

        <canvas class="block w-full h-full [outline:none] cursor-grab active:cursor-grabbing" id="canvision3D"></canvas>

        <div class="absolute top-1/2 left-1/2 text-primary text-[14px] font-semibold [transform:translate(-50%,-50%)] pointer-events-none" id="canvision3DLoading">
            Loading 3D Model...
        </div>

        <div class="absolute bottom-4.5 left-1/2 px-3.5 py-2 rounded-[20px] bg-[rgba(7,21,45,0.9)] text-white text-[12px] font-medium whitespace-nowrap [transform:translateX(-50%)] pointer-events-none">
            Move your cursor to rotate
        </div>

    </div>

</aside>
      </div>
    </section>

    <section class="bg-surface pt-20 pb-24 lte-760:pt-16 lte-760:pb-18" id="services">
      <div class="w-[min(100%_-_96px,1536px)] mx-auto lte-1100:w-[min(100%_-_80px,960px)] lte-900:w-[min(100%_-_64px,820px)] lte-760:w-[calc(100%_-_40px)] lte-560:w-[calc(100%_-_32px)] lte-430:w-[calc(100%_-_28px)]">
        <div class="reveal opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] mb-10 [transform:translateY(12px)] text-center [&.visible]:opacity-100 [&.visible]:[transform:none]">
          <h2 class="my-0 text-text text-[32px] font-bold leading-[1.2] tracking-[-0.6px]">Services we provide</h2>
          <span class="block w-12 h-[3px] mx-auto rounded-[2px] bg-primary mt-3.5" aria-hidden="true"></span>
        </div>
        <div class="grid grid-cols-[repeat(3,minmax(0px,1fr))] gap-5 lte-900:grid-cols-[repeat(2,minmax(0px,1fr))] lte-760:grid-cols-[1fr]">
          <article class="reveal p-6 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.35)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="w-11 h-11 text-primary mb-4" aria-hidden="true"><svg class="w-9 h-9" viewBox="0 0 24 24"><path d="M3 12h4l2-5 4 10 2-5h6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-0 mb-2.5">Diagnostics &amp; Testing</h3>
            <p class="my-0 text-body text-[15px] leading-[1.65]">Comprehensive vehicle diagnostics, ECU testing and validation tools for automotive and industrial systems.</p>
          </article>
          <article class="reveal p-6 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.35)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="w-11 h-11 text-primary mb-4" aria-hidden="true"><svg class="w-9 h-9" viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="6" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="18" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.2 12H15M16.2 7.5l-6.2 3.5M16.2 16.5l-6.2-3.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-0 mb-2.5">IoT Solutions</h3>
            <p class="my-0 text-body text-[15px] leading-[1.65]">End-to-end IoT connectivity platforms enabling real-time monitoring, control and data collection.</p>
          </article>
          <article class="reveal p-6 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.35)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="w-11 h-11 text-primary mb-4" aria-hidden="true"><svg class="w-9 h-9" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 10h2M12 10h2M16 10h1M8 14h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-0 mb-2.5">Embedded Systems</h3>
            <p class="my-0 text-body text-[15px] leading-[1.65]">Custom embedded hardware and firmware development for automotive, industrial and consumer applications.</p>
          </article>
          <article class="reveal p-6 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.35)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="w-11 h-11 text-primary mb-4" aria-hidden="true"><svg class="w-9 h-9" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-0 mb-2.5">Automation</h3>
            <p class="my-0 text-body text-[15px] leading-[1.65]">Smart automation solutions that streamline operations and improve efficiency across industries.</p>
          </article>
          <article class="reveal p-6 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.35)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="w-11 h-11 text-primary mb-4" aria-hidden="true"><svg class="w-9 h-9" viewBox="0 0 24 24"><path d="M6 16a6 6 0 0 1 12 0" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 16h8v3a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 8V5M10 10l-2-2M14 10l2-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-0 mb-2.5">Data &amp; Analytics</h3>
            <p class="my-0 text-body text-[15px] leading-[1.65]">Transform raw vehicle and sensor data into actionable insights with powerful analytics platforms.</p>
          </article>
          <article class="reveal p-6 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.35)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="w-11 h-11 text-primary mb-4" aria-hidden="true"><svg class="w-9 h-9" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-0 mb-2.5">Support &amp; Services</h3>
            <p class="my-0 text-body text-[15px] leading-[1.65]">Dedicated technical support, training and maintenance services to keep your systems running smoothly.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white pt-20 pb-24 lte-760:pt-16 lte-760:pb-18" id="products">
      <div class="w-[min(100%_-_96px,1536px)] mx-auto lte-1100:w-[min(100%_-_80px,960px)] lte-900:w-[min(100%_-_64px,820px)] lte-760:w-[calc(100%_-_40px)] lte-560:w-[calc(100%_-_32px)] lte-430:w-[calc(100%_-_28px)]">
        <div class="reveal flex gap-6 items-center justify-between opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] mb-10 [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none]">
          <h2 class="my-0 text-text text-[32px] font-bold leading-[1.2] tracking-[-0.6px]">Our Products</h2>
          <a class="inline-block text-primary text-[13px] font-semibold no-underline mt-4 focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:underline" href="#contact">VIEW ALL PRODUCTS <span aria-hidden="true">→</span></a>
        </div>
        <div class="grid grid-cols-[repeat(5,minmax(0px,1fr))] gap-4.5 lte-1100:grid-cols-[repeat(3,minmax(0px,1fr))] lte-760:grid-cols-[1fr_1fr] lte-760:gap-3.5 lte-560:grid-cols-[1fr]">
          <article class="reveal flex flex-col min-w-0 p-3.5 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.3)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="product-art flex items-center justify-center w-full h-[185px] overflow-hidden rounded-[10px] bg-surface lte-760:h-42.5 lte-560:h-52.5 lte-560:p-2.5 lte-430:h-50"><img class="block w-[92%] max-w-[92%] max-h-42.5 [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] object-contain lte-560:w-[94%]! lte-560:h-auto! lte-560:max-w-[94%]! lte-560:max-h-47.5! lte-430:max-h-[175px]!" src="/assets/canvision.png" alt="CAN Vision" /></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-3 mb-[7px]">CAN Vision</h3>
            <p class="grow basis-[0%] my-0 text-body text-[14px] leading-[1.6]">High-performance CAN bus interface for real-time vehicle diagnostics and communication.</p>

<a href="/canvision" class="inline-block text-primary text-[13px] font-semibold no-underline mt-4 focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:underline">
    READ MORE <span aria-hidden="true">→</span>
</a>
          </article>
          <article class="reveal flex flex-col min-w-0 p-3.5 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.3)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="product-art flex items-center justify-center w-full h-[185px] overflow-hidden rounded-[10px] bg-surface lte-760:h-42.5 lte-560:h-52.5 lte-560:p-2.5 lte-430:h-50"><img class="block w-[90%] max-w-[92%] max-h-[165px] [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] object-contain lte-560:w-[94%]! lte-560:h-auto! lte-560:max-w-[94%]! lte-560:max-h-47.5! lte-430:max-h-[175px]!" src="/assets/product-iot-gateway.png" alt="IoT Gateway" /></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-3 mb-[7px]">IoT Gateway</h3>
            <p class="grow basis-[0%] my-0 text-body text-[14px] leading-[1.6]">Secure edge connectivity bridging sensors, vehicles and cloud platforms.</p>
            <a class="inline-block text-primary text-[13px] font-semibold no-underline mt-4 focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:underline" href="#contact">READ MORE <span aria-hidden="true">→</span></a>
          </article>
          <article class="reveal flex flex-col min-w-0 p-3.5 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.3)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="product-art flex items-center justify-center w-full h-[185px] overflow-hidden rounded-[10px] bg-surface lte-760:h-42.5 lte-560:h-52.5 lte-560:p-2.5 lte-430:h-50"><img class="block w-[90%] max-w-[92%] max-h-37.5 [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] object-contain lte-560:w-[94%]! lte-560:h-auto! lte-560:max-w-[94%]! lte-560:max-h-47.5! lte-430:max-h-[175px]!" src="/assets/product-embedded-ecu.png" alt="Embedded ECU" /></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-3 mb-[7px]">Embedded ECU</h3>
            <p class="grow basis-[0%] my-0 text-body text-[14px] leading-[1.6]">Custom controller boards and production-ready embedded firmware stacks.</p>
            <a class="inline-block text-primary text-[13px] font-semibold no-underline mt-4 focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:underline" href="#contact">READ MORE <span aria-hidden="true">→</span></a>
          </article>
          <article class="reveal flex flex-col min-w-0 p-3.5 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.3)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="product-art flex items-center justify-center w-full h-[185px] overflow-hidden rounded-[10px] bg-surface lte-760:h-42.5 lte-560:h-52.5 lte-560:p-2.5 lte-430:h-50"><img class="block w-[92%] max-w-[92%] max-h-[155px] [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] object-contain lte-560:w-[94%]! lte-560:h-auto! lte-560:max-w-[94%]! lte-560:max-h-47.5! lte-430:max-h-[175px]!" src="/assets/product-data-logger.png" alt="Data Logger" /></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-3 mb-[7px]">Data Logger</h3>
            <p class="grow basis-[0%] my-0 text-body text-[14px] leading-[1.6]">Capture bus traffic and diagnostic sessions for deep-dive analysis.</p>
            <a class="inline-block text-primary text-[13px] font-semibold no-underline mt-4 focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:underline" href="#contact">READ MORE <span aria-hidden="true">→</span></a>
          </article>
          <article class="reveal flex flex-col min-w-0 p-3.5 border-border border rounded-xl bg-white opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none] hover:border-[rgba(15,96,232,0.3)] hover:[box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] hover:[transform:translateY(-2px)] [&.visible]:hover:[transform:none]">
            <div class="product-art flex items-center justify-center w-full h-[185px] overflow-hidden rounded-[10px] bg-surface lte-760:h-42.5 lte-560:h-52.5 lte-560:p-2.5 lte-430:h-50"><img class="block w-[94%] max-w-[92%] max-h-[165px] [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] object-contain lte-560:w-[94%]! lte-560:h-auto! lte-560:max-w-[94%]! lte-560:max-h-47.5! lte-430:max-h-[175px]!" src="/assets/product-vt-dashboard.png" alt="VT Dashboard" /></div>
            <h3 class="text-text text-[17px] font-semibold leading-[1.35] mt-3 mb-[7px]">VT Dashboard</h3>
            <p class="grow basis-[0%] my-0 text-body text-[14px] leading-[1.6]">Technician software for DID, DTC, routines, flash and live gauges.</p>
            <a class="inline-block text-primary text-[13px] font-semibold no-underline mt-4 focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:underline" href="#contact">READ MORE <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-surface pt-20 pb-24 lte-760:pt-16 lte-760:pb-18" id="contact">
      <div class="grid grid-cols-[minmax(0px,1fr)_minmax(0px,1fr)] gap-16 [align-items:start] w-[min(100%_-_96px,1536px)] mx-auto lte-1100:w-[min(100%_-_80px,960px)] lte-900:grid-cols-[1fr] lte-900:gap-[45px] lte-900:w-[min(100%_-_64px,820px)] lte-760:w-[calc(100%_-_40px)] lte-560:w-[calc(100%_-_32px)] lte-430:w-[calc(100%_-_28px)]">
       <div class="reveal opacity-0 [transition:opacity_0.45s_ease,transform_0.45s_ease] pt-2 [transform:translateY(12px)] [&.visible]:opacity-100 [&.visible]:[transform:none]">

    <div>
        <span class="inline-block text-primary text-[12px] font-semibold tracking-[0.12em] mb-3.5 uppercase">LET'S CONNECT</span>
        <h2 class="text-text text-[32px] font-bold leading-[1.2] mt-0 mb-4.5">Get a quote</h2>
        <p class="max-w-[620px] my-0 text-body text-[16px] leading-[1.7]">
            Tell us about your vehicle platform, protocols, and timeline.
            Our engineering team will review your requirements and respond
            with a tailored proposal.
        </p>
    </div>

    <div class="w-full h-px bg-border mt-12 mb-8"></div>

    <div>
        <h3 class="text-text text-[18px] font-semibold mt-0 mb-5">Talk to our team</h3>

        <a class="contact-item flex gap-4 items-center min-h-17 py-3 border-b-border border-b text-inherit no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2" href="mailto:contact@yantricthings.com">
            <span class="flex shrink-0 items-center justify-center w-11 h-11 border-border border rounded-[10px] bg-white text-primary text-[18px] [.contact-item:hover_&]:border-[rgba(15,96,232,0.45)]">✉</span>
            <span class="flex grow basis-[0%] flex-col gap-1">
                <small class="text-muted text-[12px] font-semibold tracking-[0.08em] uppercase">Email</small>
                <strong class="text-text text-[15px] font-semibold">contact@yantricthings.com</strong>
            </span>
            <span class="text-primary text-[18px] [transition:transform_0.2s_ease] [.contact-item:hover_&]:[transform:translateX(4px)]">→</span>
        </a>

        <div class="contact-item flex gap-4 items-center min-h-17 py-3 border-b-border border-b">
            <span class="flex shrink-0 items-center justify-center w-11 h-11 border-border border rounded-[10px] bg-white text-primary text-[18px] [.contact-item:hover_&]:border-[rgba(15,96,232,0.45)]">⌖</span>
            <span class="flex grow basis-[0%] flex-col gap-1">
                <small class="text-muted text-[12px] font-semibold tracking-[0.08em] uppercase">Location</small>
                <strong class="text-text text-[15px] font-semibold">Pune, India</strong>
            </span>
        </div>
    </div>

</div>
        <form class="reveal grid gap-4.5 p-8 border-border border rounded-xl bg-white [box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] opacity-0 [transform:translateY(12px)] [transition-behavior:normal,normal] [transition-duration:0.45s,0.45s] [transition-timing-function:ease,ease] [transition-delay:0.1s] [transition-property:opacity,transform] lte-760:p-6 lte-430:p-5 [&.visible]:opacity-100 [&.visible]:[transform:none]" action="mailto:info@yantricthings.com" method="post" enctype="text/plain">
          <label class="grid gap-[7px] text-text text-[14px] font-semibold">Name<input class="w-full h-12 px-3.5 py-0 border-border border rounded-lg bg-white text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 placeholder:text-muted" name="name" type="text" required placeholder="Your name" /></label>
          <label class="grid gap-[7px] text-text text-[14px] font-semibold">Email<input class="w-full h-12 px-3.5 py-0 border-border border rounded-lg bg-white text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 placeholder:text-muted" name="email" type="email" required placeholder="you@company.com" /></label>
          <label class="grid gap-[7px] text-text text-[14px] font-semibold">Message<textarea class="w-full min-h-28 px-3.5 py-[13px] border-border [border-width:1px] rounded-lg text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] resize-y focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 placeholder:text-muted" name="message" rows="4" required placeholder="Project details"></textarea></label>
          <button class="inline-flex gap-2 items-center justify-center min-h-12 px-5 py-0 border-transparent border rounded-lg bg-primary text-white [font-style:inherit] font-semibold text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.2s_ease,color_0.2s_ease,border-color_0.2s_ease,transform_0.2s_ease] cursor-pointer active:[transform:translateY(0px)] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:bg-[#0b55cf] hover:[transform:translateY(-1px)] active:hover:[transform:translateY(0px)]" type="submit">Send request</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer bg-deep-navy text-[rgba(255,255,255,0.72)] pt-16 pb-5 lte-760:pt-13">
    <div class="grid grid-cols-[1.35fr_repeat(5,minmax(0px,1fr))] gap-8 [align-items:start] w-[min(100%_-_96px,1536px)] mx-auto lte-1100:grid-cols-[1.2fr_repeat(3,minmax(0px,1fr))] lte-1100:w-[min(100%_-_80px,960px)] lte-900:w-[min(100%_-_64px,820px)] lte-760:grid-cols-[1fr_1fr] lte-760:w-[calc(100%_-_40px)] lte-760:gap-y-9 lte-760:gap-x-6 lte-560:grid-cols-[1fr] lte-560:w-[calc(100%_-_32px)] lte-430:w-[calc(100%_-_28px)]">
      <div class="flex flex-col items-start min-w-0 lte-1100:[grid-column:1_/_-1] lte-560:[grid-column:auto]">
        <a class="footer-lockup protected-asset flex! flex-col gap-2.5 items-center w-max max-w-full mx-0! text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline [-webkit-user-drag:none] select-none [-webkit-touch-callout:none] mt-0! mb-2! focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-inherit" href="#top" aria-label="Yantric Things home">
          <img class="footer-lockup-mark block w-16 h-16 max-w-full object-contain [-webkit-user-drag:none] pointer-events-none" src="/assets/logo-y-mark.png" alt="" width="72" height="72" draggable="false" />
          <span class="footer-lockup-textblock flex flex-col items-center w-[151px] max-w-full">
            <span class="footer-lockup-name block w-max max-w-full text-white text-[15px] leading-[1.2] tracking-[0.1em] whitespace-nowrap text-center"><strong class="text-white font-bold">YANTRIC</strong> <em class="text-primary not-italic font-semibold [.site-footer_a.footer-lockup:hover_.footer-lockup-name_&]:text-[#6bb6ff]">THINGS</em></span>
            <span class="footer-lockup-tag block w-full overflow-hidden text-[rgba(255,255,255,0.55)] text-[7px] font-normal leading-[1.35] tracking-[0px] whitespace-nowrap mt-1.5 text-center [transform:scaleX(0.996275)]">Intelligent Machines. Connected Things.</span>
          </span>
        </a>
        <div class="flex gap-2.5 mt-4.5">
          <a class="grid place-items-center w-8.5 h-8.5 rounded-[50%] bg-[rgba(255,255,255,0.08)] text-white text-[11px] font-semibold leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:bg-primary" href="https://www.linkedin.com/" aria-label="LinkedIn" rel="noopener noreferrer">in</a>
          <a class="grid place-items-center w-8.5 h-8.5 rounded-[50%] bg-[rgba(255,255,255,0.08)] text-white text-[11px] font-semibold leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:bg-primary" href="https://www.youtube.com/" aria-label="YouTube" rel="noopener noreferrer">yt</a>
          <a class="grid place-items-center w-8.5 h-8.5 rounded-[50%] bg-[rgba(255,255,255,0.08)] text-white text-[11px] font-semibold leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:bg-primary" href="mailto:info@yantricthings.com" aria-label="Email">@</a>
        </div>
      </div>
      <div class="min-w-0">
        <h4 class="text-white text-[12px] font-semibold tracking-[0.08em] mt-0 mb-4.5 uppercase">PRODUCTS</h4>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#products">CAN Vision</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#products">IoT Gateway</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#products">Embedded ECU</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#products">Data Logger</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#products">VT Dashboard</a>
      </div>
      <div class="min-w-0">
        <h4 class="text-white text-[12px] font-semibold tracking-[0.08em] mt-0 mb-4.5 uppercase">SERVICES</h4>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#services">Diagnostics &amp; Testing</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#services">IoT Solutions</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#services">Embedded Systems</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#services">Automation</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#services">Data &amp; Analytics</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#services">Support &amp; Services</a>
      </div>
      <div class="min-w-0">
        <h4 class="text-white text-[12px] font-semibold tracking-[0.08em] mt-0 mb-4.5 uppercase">COMPANY</h4>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#about">About Us</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#contact">Careers</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#about">Partners</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#resources">News &amp; Events</a>
      </div>
            <div class="min-w-0">
        <h4 class="text-white text-[12px] font-semibold tracking-[0.08em] mt-0 mb-4.5 uppercase">RESOURCES</h4>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#resources">Documentation</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#resources">Videos</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#resources">Case Studies</a>
        <a class="block my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#resources">Blog</a>
      </div>

      <div class="min-w-0">
        <h4 class="text-white text-[12px] font-semibold tracking-[0.08em] mt-0 mb-4.5 uppercase">CONTACT US</h4>

        <p class="flex! gap-2 items-start my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5]">
          <span aria-hidden="true">✉</span>
          contact@yantricthings.com
        </p>

        <p class="flex! gap-2 items-start my-[9px] text-[rgba(255,255,255,0.58)] text-[14px] leading-[1.5]">
          <span aria-hidden="true">⌖</span>
          Pune, India
        </p>
      </div>

    </div>
    <div class="flex flex-wrap gap-5 items-center justify-between w-full mx-auto border-t-[rgba(255,255,255,0.1)] border-t mt-12 pt-5 lte-1100:w-[min(100%_-_80px,960px)] lte-900:w-[min(100%_-_64px,820px)] lte-760:flex-col lte-760:gap-3 lte-760:items-start lte-760:w-[calc(100%_-_40px)] lte-560:w-[calc(100%_-_32px)] lte-430:w-[calc(100%_-_28px)]">
      <p class="my-0 text-[rgba(255,255,255,0.42)] text-[13px] leading-[1.5]">© 2026 YantricThings. All rights reserved.</p>
      <div>
        <a class="my-[9px] text-[rgba(255,255,255,0.42)] text-[13px] leading-[1.5] no-underline ml-5 lte-760:mr-4.5 lte-760:ml-0 focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#contact">Privacy Policy</a>
        <a class="my-[9px] text-[rgba(255,255,255,0.42)] text-[13px] leading-[1.5] no-underline ml-5 lte-760:mr-4.5 lte-760:ml-0 focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#contact">Terms of Use</a>
      </div>
    </div>
  </footer>
