export default function EchobitLandingPremium() {
  const joinUrl = "https://www.echobit.com/register/z6iOS1";
  const chatUrl = "https://open.kakao.com/o/smAuUjDh";
  const blogUrl = "https://blog.naver.com/1000tp";

  const features = [
    { title: "KYC 인증 보너스", desc: "KYC1 완료 시 200 USDT 즉시 지급 (10/24 09:00 ~ 11/24 09:00 KST)", icon: "🎁" },
    { title: "입금 리워드", desc: "선물 계정 순입금 ≥ 1,000 USDT → 25% 오픈쿠폰(최대 8,000 USDT)", icon: "💸" },
    { title: "수수료 혜택", desc: "오픈채팅 문의 시 요율 최대 30% 제공", icon: "⚡" },
    { title: "손실 보상", desc: "손실 부분 최대 20% 공제, 수익 전액 출금 가능", icon: "🛡️" },
  ];

  const steps = [
    { title: "회원가입", desc: "에코빗 가입하기 클릭 → 이메일/휴대폰 간편가입" },
    { title: "KYC 인증", desc: "My Account → Identity Authentication → 신분증 업로드" },
    { title: "입금 & 참여", desc: "선물계정에 입금 후 이벤트 신청, 쿠폰 수령" },
  ];

  const reviews = [
    { name: "홍** 님", text: "KYC 인증 바로 승인되고 200 USDT 즉시 들어왔어요!" },
    { name: "이** 님", text: "입금 이벤트 쿠폰으로 포지션 열고 수익 바로 냈습니다!" },
    { name: "박** 님", text: "수수료 혜택 덕분에 거래 비용이 확실히 줄었어요." },
  ];

  const faqs = [
    { q: "KYC 보너스로 수익이 나면 출금 가능한가요?", a: "네, 수익 부분은 전액 출금 가능합니다." },
    { q: "입금 쿠폰은 어떻게 쓰나요?", a: "원금+쿠폰 4:1 비율로 포지션 오픈이 가능합니다." },
    { q: "이벤트 인원 제한이 있나요?", a: "입금 리워드 이벤트는 500명 선착순입니다." },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0b0a20] via-[#14122b] to-[#1c1a35] text-white font-sans">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-gradient-to-br from-violet-700 to-indigo-500 shadow-lg grid place-items-center font-bold">E</div>
            <span className="text-sm sm:text-base text-white/80">Echobit 이벤트 센터</span>
          </div>
          <div className="flex items-center gap-2">
            <a href={chatUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl bg-yellow-400/90 text-black font-semibold hover:bg-yellow-300 transition">오픈채팅</a>
            <a href={joinUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition font-semibold">가입하기</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-indigo-700/30 blur-3xl"/>
        <div className="absolute -bottom-24 -right-24 size-[28rem] rounded-full bg-violet-700/20 blur-3xl"/>
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300">
              에코빗 거래소 10월 이벤트 총정리
            </span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-6">
            KYC 인증 시 200 USDT 지급, 입금 시 최대 8,000 USDT 리워드!<br/>단 3단계면 혜택을 모두 받을 수 있습니다.
          </p>
          <div className="flex justify-center gap-3">
            <a href={joinUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold shadow-lg">200 USDT 즉시 받기</a>
            <a href={chatUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 font-semibold">문의하기</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-2">주요 혜택</h2>
        <p className="text-white/70 mb-8">가장 큰 리워드와 혜택만 선별했습니다.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:bg-white/10 transition">
              <div className="text-3xl">{f.icon}</div>
              <div className="mt-2 font-semibold">{f.title}</div>
              <div className="mt-1 text-sm text-white/70">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">3단계 참여 가이드</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="size-12 grid place-items-center mx-auto rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 font-bold text-lg">{i+1}</div>
              <div className="mt-4 font-semibold text-lg">{s.title}</div>
              <div className="mt-2 text-sm text-white/70">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-2">실사용 후기</h2>
        <p className="text-white/70 mb-8">에코빗 이벤트에 참여한 실제 회원들의 후기입니다.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/70">{r.name}</div>
              <div className="mt-2 text-base">“{r.text}”</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bonus Claim Guide Section */}
      <section id="guide" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-2">보너스 수령 가이드</h2>
        <p className="text-white/70 mb-8">아래 단계를 따라가면 쉽게 보너스를 받을 수 있습니다.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="aspect-[4/3] rounded-xl bg-black/30 mb-3 grid place-items-center text-white/50 text-sm">
                스크린샷 {i+1}컷 자리
              </div>
              <div className="font-semibold">{s.title}</div>
              <div className="mt-1 text-sm text-white/70">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">자주 묻는 질문</h2>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-white/5">
              <summary className="cursor-pointer p-5 hover:bg-white/5 flex items-start justify-between">
                <div className="font-semibold pr-4">{f.q}</div>
                <span className="text-white/50 group-open:rotate-180 transition">▾</span>
              </summary>
              <div className="px-5 pb-5 text-white/70 text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <footer className="mt-8 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-2 gap-4 items-center">
          <div className="text-xs text-white/50">
            * 본 페이지는 이벤트 안내용 랜딩입니다. 거래 전 약관 및 공지를 반드시 확인하세요. 이벤트 내용과 일정은 주최 측 사정에 따라 변경될 수 있습니다.
          </div>
          <div className="flex md:justify-end gap-2">
            <a href={blogUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm">공식 블로그</a>
            <a href={chatUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl bg-yellow-400/90 text-black font-semibold text-sm hover:bg-yellow-300">오픈채팅</a>
            <a href={joinUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-90 font-semibold text-sm">가입하기</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
