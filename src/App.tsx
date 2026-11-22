import { Instagram, Send, Phone, Copy, Check, User } from 'lucide-react';
import { useState } from 'react';

const instagramUrl = 'https://instagram.com/bnymin_mhmdi';
const telegramUrl = 'https://t.me/+989934049242';
const phoneNumber = '09934049242';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={copy}
      aria-label="کپی"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition hover:border-white/25 hover:text-white active:scale-95"
    >
      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* پس‌زمینه */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-[120px]" />
        <div
          className="animate-float absolute bottom-[-15%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-[120px]"
          style={{ animationDelay: '2.5s' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center px-6 py-16">
        {/* هدر */}
        <section className="animate-fade-up flex flex-col items-center text-center" style={{ animationDelay: '0ms' }}>
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-emerald-500/20 to-sky-500/10 shadow-2xl shadow-emerald-500/10">
            <User className="h-11 w-11 text-emerald-400" strokeWidth={1.5} />
          </div>
          <h1 className="mt-8 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            دکتر محمدی برزگر
          </h1>
          <p className="mt-4 max-w-md text-base font-light leading-8 text-neutral-400">
            هیچ فرد خاصی نیستم و فقط برای امتحان سایت این کارها را کرده‌ام. خوشحال می‌شوم از راه‌های زیر با من در
            ارتباط باشید.
          </p>
        </section>

        {/* راه‌های ارتباطی */}
        <section className="mt-12 w-full space-y-4">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-up group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-pink-500/10"
            style={{ animationDelay: '120ms' }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-400/20 text-pink-400 transition group-hover:scale-110">
              <Instagram className="h-6 w-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-neutral-400">اینستاگرام</span>
              <span className="mt-0.5 block truncate font-medium text-white" dir="ltr">
                bnymin_mhmdi
              </span>
            </span>
            <span className="text-xs text-neutral-500 transition group-hover:text-pink-400">مشاهده صفحه ←</span>
          </a>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-up group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-sky-500/10"
            style={{ animationDelay: '240ms' }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-400/20 text-sky-400 transition group-hover:scale-110">
              <Send className="h-6 w-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-neutral-400">تلگرام</span>
              <span className="mt-0.5 block font-medium text-white" dir="ltr">
                09934049242
              </span>
            </span>
            <span className="text-xs text-neutral-500 transition group-hover:text-sky-400">ارسال پیام ←</span>
          </a>

          <div
            className="animate-fade-up flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
            style={{ animationDelay: '360ms' }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-400/20 text-emerald-400">
              <Phone className="h-6 w-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-neutral-400">شماره تماس (تلگرام)</span>
              <span className="mt-0.5 block font-medium text-white" dir="ltr">
                09934049242
              </span>
            </span>
            <CopyButton text={phoneNumber} />
          </div>
        </section>

        <footer
          className="animate-fade-up mt-12 text-center text-xs font-light text-neutral-600"
          style={{ animationDelay: '480ms' }}
        >
          ساخته‌شده برای ارتباط با دکتر محمدی برزگر
        </footer>
      </main>
    </div>
  );
}
