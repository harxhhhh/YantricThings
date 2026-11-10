/** default.php inline script (scroll reveal + "via" nodes), wrapped for onMount(). Logic unchanged. */
export function initDefaultPage() {
  const observers = [];
  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
  },{threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  // via nodes light up as user scrolls past
  const vias = document.querySelectorAll('.via');
  const io2 = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('lit'); } });
  },{threshold:0.5});
  vias.forEach(v=>io2.observe(v));

  observers.push(io, io2);
  return () => observers.forEach((o) => o.disconnect());
}
