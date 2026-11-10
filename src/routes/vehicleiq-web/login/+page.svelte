<script>
  import { onMount } from 'svelte';
  import '#lib/styles/app.css';
  import { initLogin, initLoginNav } from '#lib/scripts/login.js';

  onMount(() => {
    initLogin();
    initLoginNav();
  });
</script>

<svelte:head>
  <title>Sign in — Yantric Things</title>
  <meta name="robots" content="noindex,nofollow" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

  <header class="relative z-1000 h-18 bg-navy text-white lte-767:h-17">
    <div class="flex gap-8 items-center justify-between w-[min(100%_-_96px,1536px)] h-18 mx-auto lte-1439:w-[min(100%_-_80px,1280px)] lte-1023:w-[calc(100%_-_64px)] lte-767:w-[calc(100%_-_40px)] lte-767:h-17 lte-390:w-[calc(100%_-_32px)]">

      <a href="/" class="inline-flex shrink-0 gap-2.5 items-center text-inherit no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2">
        <img class="block shrink-0 w-9 h-9 max-w-9 max-h-9 object-contain lte-767:w-8.5 lte-767:h-8.5" src="/assets/logo-y-mark.png" alt="Yantric Things">
        <span class="inline-flex gap-[5px] items-baseline font-inter text-[16px] font-semibold leading-[20px] tracking-[0.3px] whitespace-nowrap lte-767:text-[15px]">
          <strong class="text-white font-bold">YANTRIC</strong>
          <em class="text-primary not-italic font-bold">THINGS</em>
        </span>
      </a>

      <nav class="login-nav flex gap-8 items-center lte-1023:gap-5.5 lte-767:hidden lte-767:absolute lte-767:inset-x-0 lte-767:top-17 lte-767:flex-col lte-767:gap-0 lte-767:items-stretch lte-767:px-5 lte-767:border-t-[rgba(255,255,255,0.08)] lte-767:border-t lte-767:bg-navy lte-767:pt-3 lte-767:pb-5 lte-767:[&.open]:flex">
        <a class="text-white font-inter text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] whitespace-nowrap no-underline lte-1023:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary" href="/#products">Products</a>
        <a class="text-white font-inter text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] whitespace-nowrap no-underline lte-1023:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary" href="/#services">Services</a>
        <a class="text-white font-inter text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] whitespace-nowrap no-underline lte-1023:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary" href="/#solutions">Solutions</a>
        <a class="text-white font-inter text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] whitespace-nowrap no-underline lte-1023:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary" href="/#about">About Us</a>
        <a class="text-white font-inter text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] whitespace-nowrap no-underline lte-1023:text-[13px] lte-767:py-[15px] lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary" href="/contact_page">Contact</a>
      </nav>

      <button class="login-nav-toggle hidden flex-col gap-[5px] items-center justify-center w-10.5 h-10.5 p-0 border-current border-none bg-transparent [font:inherit] cursor-pointer lte-767:flex focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2" type="button" aria-label="Open menu">
        <span class="w-5.5 h-0.5 rounded-[2px] bg-white [transition:transform_0.2s_ease,opacity_0.2s_ease] [.login-nav-toggle.open_&]:[transform:translateY(7px)_rotate(45deg)]"></span>
        <span class="w-5.5 h-0.5 rounded-[2px] bg-white [transition:transform_0.2s_ease,opacity_0.2s_ease] [.login-nav-toggle.open_&]:opacity-0"></span>
        <span class="w-5.5 h-0.5 rounded-[2px] bg-white [transition:transform_0.2s_ease,opacity_0.2s_ease] [.login-nav-toggle.open_&]:[transform:translateY(-7px)_rotate(-45deg)]"></span>
      </button>

    </div>
  </header>

  <div class="grid grid-cols-[1fr_1fr] min-h-[calc(-72px_+_100vh)] lte-1023:grid-cols-[1fr]">

    <aside class="flex relative items-end px-14 py-12 overflow-hidden bg-navy text-white lte-1439:px-12 lte-1023:min-h-90 lte-767:min-h-75 lte-767:px-6 lte-767:py-8 lte-390:px-5 lte-390:py-7" aria-hidden="true">

      <div class="absolute inset-0 bg-[image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(135deg,rgba(0,0,0,0.9),transparent_75%)] pointer-events-none"></div>
      <div class="absolute top-20 -right-25 w-90 h-90 rounded-[50%] bg-[rgba(15,96,232,0.22)] [filter:blur(50px)] pointer-events-none"></div>

      <div class="relative z-1 max-w-[520px]">

        <p class="brand-mark text-[rgba(255,255,255,0.82)] text-[12px] font-semibold leading-[20px] tracking-[0.12em] mt-0 mb-5 uppercase">
          YANTRIC <em class="text-primary not-italic">THINGS</em>
        </p>

        <h1 class="my-0 text-white font-inter text-[52px] font-bold leading-[1.1] tracking-[-0.03em] lte-1023:text-[44px] lte-1023:leading-[52px] lte-767:text-[36px] lte-767:leading-[44px] lte-390:text-[32px] lte-390:leading-[40px]">
          CAN Vision<br />
          Connect
        </h1>

        <p class="max-w-[480px] text-[rgba(255,255,255,0.72)] text-[16px] font-normal leading-[26px] mt-5 mb-0 lte-767:text-[15px] lte-767:leading-[24px] lte-767:mt-4">
          View live CANvision database data synced from the DiagTool Web app.
        </p>

      </div>

    </aside>

    <main class="grid place-items-center px-16 py-12 bg-surface lte-1439:px-12 lte-1439:py-10 lte-1023:min-h-[520px] lte-1023:px-8 lte-767:min-h-[auto] lte-767:px-5 lte-767:pt-8 lte-390:px-4 lte-390:pt-6 lte-390:pb-8">

      <form class="w-[min(100%,440px)] p-8 border-border border rounded-xl bg-white [box-shadow:rgba(7,21,45,0.06)_0px_12px_32px] lte-767:w-full lte-767:p-6 lte-390:p-5" id="loginForm" novalidate>

        <p class="my-0 text-primary text-[12px] font-semibold leading-[20px] tracking-[0.08em] uppercase">Staff sign-in</p>

        <h2 class="text-text font-inter text-[32px] font-bold leading-[40px] tracking-[-0.02em] mt-2 mb-0 lte-767:text-[28px] lte-767:leading-[36px]">Welcome back</h2>

        <p class="text-body text-[16px] font-normal leading-[24px] mt-2 mb-6">
          Sign in to open the data portal.
        </p>

        <label class="grid gap-2 mb-5">
          <span class="text-text text-[14px] font-semibold leading-[20px]">Username</span>

          <input class="w-full h-12 px-3.5 py-0 border-border border rounded-lg bg-white text-text [font-style:inherit] font-normal text-[15px] font-inter leading-[20px] [transition:border-color_0.15s_ease,box-shadow_0.15s_ease] focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus:[outline:none] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-[#c9d2e0] focus:focus-visible:[outline:none] focus:hover:border-primary placeholder:text-muted"
            type="text"
            id="username"
            name="username"
            autocomplete="username"
            required
            placeholder="admin"
            value=""
          />
        </label>

        <label class="grid gap-2 mb-5">
          <span class="text-text text-[14px] font-semibold leading-[20px]">Password</span>

          <input class="w-full h-12 px-3.5 py-0 border-border border rounded-lg bg-white text-text [font-style:inherit] font-normal text-[15px] font-inter leading-[20px] [transition:border-color_0.15s_ease,box-shadow_0.15s_ease] focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus:[outline:none] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-[#c9d2e0] focus:focus-visible:[outline:none] focus:hover:border-primary placeholder:text-muted"
            type="password"
            id="password"
            name="password"
            autocomplete="current-password"
            required
            placeholder="••••••••"
          />
        </label>

        <input class="[font:inherit] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2" type="hidden" id="apiBase" name="apiBase" />

        <p class="text-danger text-[14px] leading-[20px] mt-0 mb-4" id="errorMsg" hidden></p>

        <button
          type="submit"
          class="w-full h-12 px-5 py-0 border-current border-none rounded-lg bg-primary text-white [font-style:inherit] font-semibold text-[14px] font-inter leading-[20px] [transition:background-color_0.15s_ease,transform_0.1s_ease] cursor-pointer active:bg-[#0848b3] active:[transform:translateY(1px)] disabled:opacity-65 disabled:cursor-wait focus-visible:[outline:3px_solid_rgba(15,96,232,0.25)] focus-visible:outline-offset-2 hover:bg-[#0b55ce] active:hover:bg-[#0848b3]"
          id="submitBtn"
        >
          <span class="btn-label">Sign in</span>
          <span class="btn-busy" hidden>Signing in…</span>
        </button>

      </form>

    </main>

  </div>
