<script>
  import { onMount } from 'svelte';
  import '#lib/styles/app.css';
  import { initContactNav } from '#lib/scripts/contact.js';

  onMount(() => {
    initContactNav();
  });
</script>

<svelte:head>
  <title>Contact Us | Yantric Things</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

    <header class="relative z-1000 h-18 bg-navy text-white lte-767:h-17">

        <div class="flex gap-8 items-center justify-between w-[min(100%_-_96px,1536px)] h-18 mx-auto lte-1439:w-[min(100%_-_80px,1280px)] lte-1023:w-[min(100%_-_64px,900px)] lte-767:w-[calc(100%_-_40px)] lte-450:w-[calc(100%_-_32px)]">

            <a href="/" class="brand inline-flex shrink-0 gap-2.5 items-center text-inherit no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2">
                <img class="block shrink-0 w-9 h-9 max-w-9 max-h-9 object-contain lte-450:w-8.5 lte-450:h-8.5"
                    src="/assets/logo-y-mark.png"
                    alt="Yantric Things"
                >

                <span class="inline-flex gap-[5px] items-baseline text-[16px] font-semibold leading-[20px] tracking-[0.3px] whitespace-nowrap lte-450:text-[15px]">
                    <strong class="text-white font-bold">YANTRIC</strong>
                    <em class="text-primary not-italic font-bold">THINGS</em>
                </span>
            </a>

            <nav class="contact-nav flex gap-8 items-center lte-1439:gap-7 lte-1023:gap-5.5 lte-767:hidden lte-767:absolute lte-767:inset-x-0 lte-767:top-17 lte-767:flex-col lte-767:gap-0 lte-767:items-stretch lte-767:px-5 lte-767:border-t-[rgba(255,255,255,0.08)] lte-767:border-t lte-767:bg-navy lte-767:pt-3 lte-767:pb-5 lte-767:[&.open]:flex">

                <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary [.contact-nav_&.active]:text-primary [.contact-nav_&.active]:font-semibold [.contact-nav_&.active]:[&::after]:hidden" href="/#products">
                    Products
                </a>

                <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary [.contact-nav_&.active]:text-primary [.contact-nav_&.active]:font-semibold [.contact-nav_&.active]:[&::after]:hidden" href="/#services">
                    Services
                </a>

                <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary [.contact-nav_&.active]:text-primary [.contact-nav_&.active]:font-semibold [.contact-nav_&.active]:[&::after]:hidden" href="/#solutions">
                    Solutions
                </a>

                <a class="relative py-6.5 text-white text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:py-[15px] lte-767:border-b-[rgba(255,255,255,0.07)] lte-767:border-b lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary [.contact-nav_&.active]:text-primary [.contact-nav_&.active]:font-semibold [.contact-nav_&.active]:[&::after]:hidden" href="/#about">
                    About Us
                </a>

                <a href="/contact_page" class="active relative py-6.5 text-white text-[14px] font-medium leading-[20px] [transition:color_0.2s_ease] no-underline lte-1023:text-[13px] lte-767:py-[15px] lte-767:text-[14px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary [.contact-nav_&.active]:text-primary [.contact-nav_&.active]:font-semibold [.contact-nav_&.active]:[&::after]:hidden">
                    Contact
                </a>

            </nav>

            <button
                class="nav-toggle hidden flex-col gap-[5px] items-center justify-center w-10.5 h-10.5 p-0 border-current border-none bg-transparent [font:inherit] cursor-pointer lte-767:flex focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2"
                aria-label="Open menu"
                type="button"
            >
                <span class="w-5.5 h-0.5 rounded-[2px] bg-white [transition:transform_0.2s_ease,opacity_0.2s_ease] [.nav-toggle.open_&]:[transform:translateY(7px)_rotate(45deg)]"></span>
                <span class="w-5.5 h-0.5 rounded-[2px] bg-white [transition:transform_0.2s_ease,opacity_0.2s_ease] [.nav-toggle.open_&]:opacity-0"></span>
                <span class="w-5.5 h-0.5 rounded-[2px] bg-white [transition:transform_0.2s_ease,opacity_0.2s_ease] [.nav-toggle.open_&]:[transform:translateY(-7px)_rotate(-45deg)]"></span>
            </button>

        </div>

    </header>

    <main>

        <section class="relative min-h-[500px] overflow-hidden bg-deep-navy text-white lte-767:min-h-[auto]">

            <div class="relative w-[min(100%_-_96px,1536px)] min-h-[500px] mx-auto pt-8 pb-16 lte-1439:w-[min(100%_-_80px,1280px)] lte-1023:w-[min(100%_-_64px,900px)] lte-767:w-[calc(100%_-_40px)] lte-767:min-h-[auto] lte-767:pt-6 lte-767:pb-14 lte-450:w-[calc(100%_-_32px)]">

                <div class="flex gap-2.5 items-center text-[12px] font-semibold tracking-[0.5px] lte-450:text-[11px]">

                    <a class="text-[rgba(255,255,255,0.55)] [transition:color_0.2s_ease] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/">
                        HOME
                    </a>

                    <span class="text-[rgba(255,255,255,0.35)]">/</span>

                    <span class="text-[rgba(255,255,255,0.75)]">
                        CONTACT US
                    </span>

                </div>

                <div class="flex relative z-2 items-center min-h-[390px] lte-767:min-h-[auto] lte-767:pt-17.5 lte-767:pb-7.5">

                    <div class="max-w-[720px] pt-[15px] lte-767:max-w-full">

                        <span class="inline-block text-primary text-[12px] font-semibold tracking-[1.2px] mb-4 uppercase">
                            LET'S CONNECT
                        </span>

                        <h1 class="text-[clamp(40px,5vw,52px)] font-bold leading-[1.08] tracking-[-1.5px] mt-0 mb-6 lte-1023:text-[44px] lte-767:text-[42px] lte-767:tracking-[-1px] lte-767:mb-5 lte-450:text-[38px]">
                            Get in Touch
                            <br>
                            <span class="text-primary">With Us</span>
                        </h1>

                        <p class="max-w-[650px] my-0 text-[rgba(255,255,255,0.72)] text-[16px] font-normal leading-[1.7] lte-767:text-[15px]">
                            Have a question, project idea, or technical requirement?
                            Our team is ready to help you build intelligent,
                            connected solutions.
                        </p>

                    </div>

                    <div class="absolute inset-0 overflow-hidden pointer-events-none lte-767:opacity-65">

                        <div class="absolute top-10 right-[2%] w-[420px] h-[420px] border-[rgba(15,96,232,0.25)] border rounded-[50%] lte-767:top-25 lte-767:-right-30 lte-767:w-75 lte-767:h-75"></div>

                        <div class="absolute top-30 right-[12%] w-65 h-65 border-[rgba(15,96,232,0.18)] border rounded-[50%] lte-767:top-[155px] lte-767:-right-10 lte-767:w-47.5 lte-767:h-47.5"></div>

                        <div class="absolute top-[38%] right-[8%] w-45 h-px bg-[rgba(15,96,232,0.25)] [transform:rotate(-35deg)]"></div>

                        <div class="absolute top-[67%] right-[18%] w-45 h-px bg-[rgba(15,96,232,0.25)] [transform:rotate(25deg)]"></div>

                        <div class="absolute top-1/4 right-1/5 w-[7px] h-[7px] rounded-[50%] bg-primary"></div>

                        <div class="absolute right-[9%] bottom-1/4 w-[7px] h-[7px] rounded-[50%] bg-primary"></div>

                    </div>

                </div>

            </div>

        </section>

        <section class="py-16 bg-surface lte-767:py-12">

            <div class="grid grid-cols-[repeat(4,1fr)] gap-4 w-[min(100%_-_96px,1536px)] mx-auto lte-1439:grid-cols-[repeat(2,1fr)] lte-1439:w-[min(100%_-_80px,1280px)] lte-1023:w-[min(100%_-_64px,900px)] lte-767:grid-cols-[1fr] lte-767:gap-3 lte-767:w-[calc(100%_-_40px)] lte-450:w-[calc(100%_-_32px)]">

                <div class="flex gap-4 min-h-[205px] p-6 border-border border rounded-xl bg-white [box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] [transition:transform_0.2s_ease,border-color_0.2s_ease] lte-767:min-h-[auto] lte-767:p-5 lte-450:p-4.5 hover:border-[rgba(15,96,232,0.35)] hover:[transform:translateY(-2px)]">

                    <div class="flex shrink-0 basis-10 items-center justify-center w-10 h-10 rounded-[10px] bg-light-blue text-primary text-[19px] leading-[1] lte-450:basis-9 lte-450:w-9 lte-450:h-9">
                        ✉
                    </div>

                    <div class="min-w-0">

                        <h3 class="text-[17px] font-semibold leading-[1.35] mt-0 mb-[7px]">
                            General Enquiries
                        </h3>

                        <a class="inline-block text-primary text-[14px] font-medium mb-3 no-underline [word-break:break-word] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:underline" href="mailto:contact@yantricthings.com">
                            contact@yantricthings.com
                        </a>

                        <p class="my-0 text-body text-[14px] leading-[1.6]">
                            For general questions, company information
                            and other enquiries, get in touch with our team.
                        </p>

                    </div>

                </div>

                <div class="flex gap-4 min-h-[205px] p-6 border-border border rounded-xl bg-white [box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] [transition:transform_0.2s_ease,border-color_0.2s_ease] lte-767:min-h-[auto] lte-767:p-5 lte-450:p-4.5 hover:border-[rgba(15,96,232,0.35)] hover:[transform:translateY(-2px)]">

                    <div class="flex shrink-0 basis-10 items-center justify-center w-10 h-10 rounded-[10px] bg-light-blue text-primary text-[19px] leading-[1] lte-450:basis-9 lte-450:w-9 lte-450:h-9">
                        ⚙
                    </div>

                    <div class="min-w-0">

                        <h3 class="text-[17px] font-semibold leading-[1.35] mt-0 mb-[7px]">
                            Technical Support
                        </h3>

                        <a class="inline-block text-primary text-[14px] font-medium mb-3 no-underline [word-break:break-word] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:underline" href="mailto:contact@yantricthings.com">
                            contact@yantricthings.com
                        </a>

                        <p class="my-0 text-body text-[14px] leading-[1.6]">
                            Need technical assistance or have a question
                            about our automotive solutions?
                        </p>

                    </div>

                </div>

                <div class="flex gap-4 min-h-[205px] p-6 border-border border rounded-xl bg-white [box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] [transition:transform_0.2s_ease,border-color_0.2s_ease] lte-767:min-h-[auto] lte-767:p-5 lte-450:p-4.5 hover:border-[rgba(15,96,232,0.35)] hover:[transform:translateY(-2px)]">

                    <div class="flex shrink-0 basis-10 items-center justify-center w-10 h-10 rounded-[10px] bg-light-blue text-primary text-[19px] leading-[1] lte-450:basis-9 lte-450:w-9 lte-450:h-9">
                        ◈
                    </div>

                    <div class="min-w-0">

                        <h3 class="text-[17px] font-semibold leading-[1.35] mt-0 mb-[7px]">
                            Product &amp; Sales
                        </h3>

                        <a class="inline-block text-primary text-[14px] font-medium mb-3 no-underline [word-break:break-word] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:underline" href="mailto:contact@yantricthings.com">
                            contact@yantricthings.com
                        </a>

                        <p class="my-0 text-body text-[14px] leading-[1.6]">
                            Talk to us about CAN Vision, automotive
                            diagnostics and product requirements.
                        </p>

                    </div>

                </div>

                <div class="flex gap-4 min-h-[205px] p-6 border-border border rounded-xl bg-white [box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] [transition:transform_0.2s_ease,border-color_0.2s_ease] lte-767:min-h-[auto] lte-767:p-5 lte-450:p-4.5 hover:border-[rgba(15,96,232,0.35)] hover:[transform:translateY(-2px)]">

                    <div class="flex shrink-0 basis-10 items-center justify-center w-10 h-10 rounded-[10px] bg-light-blue text-primary text-[19px] leading-[1] lte-450:basis-9 lte-450:w-9 lte-450:h-9">
                        ⌖
                    </div>

                    <div class="min-w-0">

                        <h3 class="text-[17px] font-semibold leading-[1.35] mt-0 mb-[7px]">
                            Our Location
                        </h3>

                        <strong class="block text-[14px] font-semibold mb-2.5">
                            Pune, India
                        </strong>

                        <p class="my-0 text-body text-[14px] leading-[1.6]">
                            Yantric Things is based in Pune, Maharashtra,
                            India.
                        </p>

                    </div>

                </div>

            </div>

        </section>

        <section class="bg-white pt-20 pb-24 lte-767:pt-14 lte-767:pb-16">

            <div class="grid grid-cols-[minmax(0px,1.65fr)_minmax(320px,0.8fr)] gap-6 items-stretch w-[min(100%_-_96px,1536px)] mx-auto lte-1439:w-[min(100%_-_80px,1280px)] lte-1023:grid-cols-[1fr] lte-1023:w-[min(100%_-_64px,900px)] lte-767:w-[calc(100%_-_40px)] lte-450:w-[calc(100%_-_32px)]">

                <div class="p-10 border-border border rounded-xl bg-white [box-shadow:rgba(7,21,45,0.06)_0px_8px_30px] lte-767:px-5 lte-767:py-7 lte-450:px-4 lte-450:py-6">

                    <span class="inline-block text-primary text-[12px] font-semibold tracking-[1px] mb-3 uppercase">
                        CONTACT ME
                    </span>

                    <h2 class="text-text text-[32px] font-bold leading-[1.2] tracking-[-0.6px] mt-0 mb-3 lte-767:text-[30px] lte-450:text-[27px]">
                        We're here to help.
                    </h2>

                    <p class="max-w-[700px] text-body text-[16px] leading-[1.65] mt-0 mb-8 lte-767:text-[15px] lte-767:mb-7">
                        Have a question about Yantric Things, our products,
                        services, or automotive diagnostic solutions?
                        Fill out the form below and we'll get back to you.
                    </p>

                    <form
                        class="w-full"
                        action="mailto:contact@yantricthings.com"
                        method="post"
                        enctype="text/plain"
                    >

                        <div class="grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-5 mb-5 lte-767:grid-cols-[1fr] lte-767:gap-4.5 lte-767:mb-4.5">

                            <label class="block text-text text-[14px] font-semibold leading-[1.4]">

                                Full Name
                                <span class="text-primary">*</span>

                                <input class="w-full h-12 mx-0 px-3.5 py-0 border-border border rounded-lg bg-white text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] mt-2 mb-0 focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-[#c8d1df] focus:hover:border-primary placeholder:text-muted"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                >

                            </label>

                            <label class="block text-text text-[14px] font-semibold leading-[1.4]">

                                Email Address
                                <span class="text-primary">*</span>

                                <input class="w-full h-12 mx-0 px-3.5 py-0 border-border border rounded-lg bg-white text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] mt-2 mb-0 focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-[#c8d1df] focus:hover:border-primary placeholder:text-muted"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                >

                            </label>

                        </div>

                        <div class="grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-5 mb-5 lte-767:grid-cols-[1fr] lte-767:gap-4.5 lte-767:mb-4.5">

                            <label class="block text-text text-[14px] font-semibold leading-[1.4]">

                                Phone Number

                                <input class="w-full h-12 mx-0 px-3.5 py-0 border-border border rounded-lg bg-white text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] mt-2 mb-0 focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-[#c8d1df] focus:hover:border-primary placeholder:text-muted"
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                >

                            </label>

                            <label class="block text-text text-[14px] font-semibold leading-[1.4]">

                                Company / Organization

                                <input class="w-full h-12 mx-0 px-3.5 py-0 border-border border rounded-lg bg-white text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] mt-2 mb-0 focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-[#c8d1df] focus:hover:border-primary placeholder:text-muted"
                                    type="text"
                                    name="company"
                                    placeholder="Enter your company name"
                                >

                            </label>

                        </div>

                        <div class="grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-5 mb-5 lte-767:grid-cols-[1fr] lte-767:gap-4.5 lte-767:mb-4.5">

                            <label class="block text-text text-[14px] font-semibold leading-[1.4]">

                                Subject / Project

                                <input class="w-full h-12 mx-0 px-3.5 py-0 border-border border rounded-lg bg-white text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] mt-2 mb-0 focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-[#c8d1df] focus:hover:border-primary placeholder:text-muted"
                                    type="text"
                                    name="subject"
                                    placeholder="Enter subject or project details"
                                >

                            </label>

                            <label class="block text-text text-[14px] font-semibold leading-[1.4]">

                                Enquiry Type

                                <select class="w-full h-12 px-3.5 border-border [border-width:1px] rounded-lg bg-white text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] mt-2 focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-[#c8d1df] focus:hover:border-primary" name="enquiry_type">

                                    <option class="px-0 pb-0" value="">
                                        Select enquiry type
                                    </option>

                                    <option class="px-0 pb-0" value="product">
                                        Product Enquiry
                                    </option>

                                    <option class="px-0 pb-0" value="technical">
                                        Technical Support
                                    </option>

                                    <option class="px-0 pb-0" value="sales">
                                        Sales
                                    </option>

                                    <option class="px-0 pb-0" value="partnership">
                                        Partnership
                                    </option>

                                    <option class="px-0 pb-0" value="other">
                                        Other
                                    </option>

                                </select>

                            </label>

                        </div>

                        <label class="block text-text text-[14px] font-semibold leading-[1.4] mb-5">

                            Message
                            <span class="text-primary">*</span>

                            <textarea class="w-full min-h-28 px-3.5 py-[13px] border-border [border-width:1px] rounded-lg text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[1.55] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] mt-2 resize-y focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-[#c8d1df] focus:hover:border-primary placeholder:text-muted"
                                name="message"
                                rows="6"
                                placeholder="Enter your message"
                                required
                            ></textarea>

                        </label>

                        <div class="flex gap-6 items-center justify-between mt-2 lte-767:flex-col lte-767:gap-5 lte-767:items-stretch">

                            <label class="flex! gap-2.5 items-center text-body! text-[13px]! font-normal! leading-[1.4] cursor-pointer">

                                <input class="shrink-0 w-[17px]! h-[17px]! m-0! px-3.5 py-0 border-border border rounded-lg bg-white text-text [font-style:inherit] [font-weight:inherit] text-[14px] font-[family-name:inherit] leading-[inherit] [outline:none] [transition:border-color_0.2s_ease,box-shadow_0.2s_ease] accent-primary focus:border-primary focus:[box-shadow:rgba(15,96,232,0.12)_0px_0px_0px_3px] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-[#c8d1df] focus:hover:border-primary placeholder:text-muted"
                                    type="checkbox"
                                    required
                                >

                                <span class="text-body!">
                                    I agree to be contacted by Yantric Things.
                                </span>

                            </label>

                            <button
                                type="submit"
                                class="inline-flex gap-3 items-center justify-center h-12 min-w-[155px] px-5 py-0 border-current border-none rounded-lg bg-primary text-white [font-style:inherit] font-semibold text-[14px] font-[family-name:inherit] leading-[inherit] [transition:background_0.2s_ease,transform_0.2s_ease] cursor-pointer lte-767:w-full active:[transform:translateY(0px)] focus-visible:[outline:3px_solid_rgba(15,96,232,0.25)] focus-visible:outline-offset-2 hover:bg-[#0b55cf] hover:[transform:translateY(-1px)] active:hover:[transform:translateY(0px)]"
                            >
                                Send Message
                                <span class="text-[18px] leading-[1]">→</span>
                            </button>

                        </div>

                    </form>

                </div>

                <aside class="relative p-10 overflow-hidden rounded-xl bg-navy text-white lte-767:px-6 lte-767:py-7.5 lte-450:px-5 lte-450:py-7 after:absolute after:-right-25 after:-bottom-25 after:w-65 after:h-65 after:border-[rgba(15,96,232,0.3)] after:border after:rounded-[50%] after:content-[''] after:pointer-events-none">

                    <div class="flex gap-2.5 items-center mb-8">

                        <img class="block w-8.5 h-8.5 max-w-full object-contain"
                            src="/assets/logo-y-mark.png"
                            alt="Yantric Things"
                        >

                        <span class="text-[15px] font-semibold tracking-[0.2px]">
                            YANTRIC <b class="text-primary font-bold">THINGS</b>
                        </span>

                    </div>

                    <h3 class="text-[28px] font-bold leading-[1.2] mt-0 mb-3.5 lte-450:text-[25px]">
                        Let's Connect
                    </h3>

                    <p class="my-0 text-[rgba(255,255,255,0.68)] text-[15px] leading-[1.7]">
                        We're always open to discussing new projects,
                        creative ideas and opportunities to build
                        intelligent automotive solutions.
                    </p>

                    <div class="h-px my-7 bg-[rgba(255,255,255,0.12)]"></div>

                    <div class="flex gap-3.5 items-start mb-6">

                        <div class="flex shrink-0 basis-9.5 items-center justify-center w-9.5 h-9.5 border-[rgba(15,96,232,0.35)] border rounded-[9px] bg-[rgba(15,96,232,0.08)] text-primary text-[17px]">
                            ✉
                        </div>

                        <div>

                            <small class="block text-[rgba(255,255,255,0.48)] text-[12px] font-semibold tracking-[0.7px] mb-1 uppercase">
                                Email
                            </small>

                            <a class="text-white text-[14px] font-medium leading-[1.5] no-underline [word-break:break-word] focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-primary" href="mailto:contact@yantricthings.com">
                                contact@yantricthings.com
                            </a>

                        </div>

                    </div>

                    <div class="flex gap-3.5 items-start mb-6">

                        <div class="flex shrink-0 basis-9.5 items-center justify-center w-9.5 h-9.5 border-[rgba(15,96,232,0.35)] border rounded-[9px] bg-[rgba(15,96,232,0.08)] text-primary text-[17px]">
                            ⌖
                        </div>

                        <div>

                            <small class="block text-[rgba(255,255,255,0.48)] text-[12px] font-semibold tracking-[0.7px] mb-1 uppercase">
                                Head Office
                            </small>

                            <strong class="text-white text-[14px] font-medium leading-[1.5] [word-break:break-word]">
                                Pune, Maharashtra, India
                            </strong>

                        </div>

                    </div>

                    <div class="flex gap-3.5 items-start mb-6">

                        <div class="flex shrink-0 basis-9.5 items-center justify-center w-9.5 h-9.5 border-[rgba(15,96,232,0.35)] border rounded-[9px] bg-[rgba(15,96,232,0.08)] text-primary text-[17px]">
                            ◷
                        </div>

                        <div>

                            <small class="block text-[rgba(255,255,255,0.48)] text-[12px] font-semibold tracking-[0.7px] mb-1 uppercase">
                                Working Hours
                            </small>

                            <strong class="text-white text-[14px] font-medium leading-[1.5] [word-break:break-word]">
                                Monday – Friday
                            </strong>

                            <strong class="text-white text-[14px] font-medium leading-[1.5] [word-break:break-word]">
                                9:00 AM – 6:00 PM
                            </strong>

                        </div>

                    </div>

                    <a
                        href="mailto:contact@yantricthings.com"
                        class="flex gap-3 items-center justify-between min-h-12 px-4.5 border-[rgba(15,96,232,0.55)] border rounded-lg text-white text-[14px] font-semibold [transition:background_0.2s_ease,border-color_0.2s_ease] mt-2 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:border-primary hover:bg-primary"
                    >

                        Start a Conversation

                        <span class="text-[18px]">
                            →
                        </span>

                    </a>

                </aside>

            </div>

        </section>

    </main>

<footer class="bg-deep-navy text-white">

    <div class="grid grid-cols-[1.5fr_repeat(5,1fr)] gap-10 w-[min(100%_-_96px,1536px)] mx-auto py-16 lte-1439:grid-cols-[1.5fr_repeat(3,1fr)] lte-1439:w-[min(100%_-_80px,1280px)] lte-1023:grid-cols-[repeat(3,1fr)] lte-1023:gap-8 lte-1023:w-[min(100%_-_64px,900px)] lte-767:grid-cols-[repeat(2,1fr)] lte-767:w-[calc(100%_-_40px)] lte-767:py-12 lte-767:gap-y-9 lte-767:gap-x-6 lte-450:grid-cols-[1fr] lte-450:w-[calc(100%_-_32px)]">

        <div class="pr-5 lte-1439:[grid-column:1_/_-1] lte-767:pr-0 lte-450:[grid-column:auto]">

            <a href="/" class="inline-flex gap-2.5 items-center text-inherit mb-4.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2">
                <img class="block w-8.5 h-8.5 max-w-full object-contain"
                    src="/assets/logo-y-mark.png"
                    alt="Yantric Things"
                >

                <span class="inline-flex gap-[5px] items-baseline text-[15px] leading-[1]">
                    <strong class="text-white font-bold">YANTRIC</strong>
                    <em class="text-primary not-italic font-bold">THINGS</em>
                </span>
            </a>

            <p class="max-w-67.5 my-0 text-[rgba(255,255,255,0.55)] text-[14px] leading-[1.7] lte-767:max-w-90">
                Intelligent automotive diagnostics,
                connected vehicle solutions and
                engineering technology.
            </p>

        </div>

        <div class="flex flex-col items-start">

            <h4 class="text-[rgba(255,255,255,0.72)] text-[12px] font-semibold leading-[1.2] tracking-[1px] mt-0 mb-4.5">PRODUCTS</h4>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#products">
                CAN Vision
            </a>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#products">
                IoT Gateway
            </a>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#products">
                Embedded ECU
            </a>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#products">
                Data Logger
            </a>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#products">
                VT Dashboard
            </a>

        </div>

        <div class="flex flex-col items-start">

            <h4 class="text-[rgba(255,255,255,0.72)] text-[12px] font-semibold leading-[1.2] tracking-[1px] mt-0 mb-4.5">SERVICES</h4>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#services">
                Diagnostics & Testing
            </a>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#services">
                IoT Solutions
            </a>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#services">
                Embedded Systems
            </a>
            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#services">
            Automation
            </a>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#services">
               Data & Analytics
            </a>
             <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#services">
              Support & Services
            </a>

        </div>

        <div class="flex flex-col items-start">

            <h4 class="text-[rgba(255,255,255,0.72)] text-[12px] font-semibold leading-[1.2] tracking-[1px] mt-0 mb-4.5">RESOURCES</h4>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#resources">
                Documentation
            </a>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#resources">
                Videos
            </a>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#resources">
                Case Studies
            </a>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#resources">
                Blog
            </a>

        </div>

        <div class="flex flex-col items-start">

            <h4 class="text-[rgba(255,255,255,0.72)] text-[12px] font-semibold leading-[1.2] tracking-[1px] mt-0 mb-4.5">COMPANY</h4>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#COMPANY">
                About Us
            </a>
             <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#COMPANY">
               Carrers
            </a>
             <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#COMPANY">
                Partners
            </a>
             <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="/#COMPANY">
                News & Events
            </a>

        </div>

        <div class="flex flex-col items-start">

            <h4 class="text-[rgba(255,255,255,0.72)] text-[12px] font-semibold leading-[1.2] tracking-[1px] mt-0 mb-4.5">CONTACT US</h4>

            <a class="text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.5] [transition:color_0.2s_ease] mb-2.5 no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="mailto:contact@yantricthings.com">
                contact@yantricthings.com
            </a>

            <p class="my-0 text-[rgba(255,255,255,0.56)] text-[14px] leading-[1.6]">
                Pune, Maharashtra, India
            </p>

        </div>

    </div>

    <div class="border-t-[rgba(255,255,255,0.1)] border-t">

        <div class="flex gap-6 items-center justify-between w-[min(100%_-_96px,1536px)] min-h-16 mx-auto lte-1439:w-[min(100%_-_80px,1280px)] lte-1023:w-[min(100%_-_64px,900px)] lte-767:flex-col lte-767:gap-3.5 lte-767:items-start lte-767:w-[calc(100%_-_40px)] lte-767:min-h-[auto] lte-767:py-5 lte-450:w-[calc(100%_-_32px)]">

            <p class="my-0 text-[rgba(255,255,255,0.45)] text-[13px]">
                © 2026 Yantric Things. All rights reserved.
            </p>

            <div class="flex gap-6 items-center lte-450:flex-wrap lte-450:gap-y-2.5 lte-450:gap-x-5">

                <a class="text-[rgba(255,255,255,0.45)] text-[13px] [transition:color_0.2s_ease] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#">
                    Privacy Policy
                </a>

                <a class="text-[rgba(255,255,255,0.45)] text-[13px] [transition:color_0.2s_ease] no-underline focus-visible:[outline:3px_solid_rgba(15,96,232,0.35)] focus-visible:outline-offset-2 hover:text-white" href="#">
                    Terms of Use
                </a>

            </div>

        </div>

    </div>

</footer>
