import { ArtDecoSunburst } from "@/components/ArtDecoSunburst";
import { ArtDecoDivider } from "@/components/ArtDecoDivider";

function App() {
  return (
    <main className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ArtDecoSunburst />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-16 h-px bg-primary" />
            </div>
          </div>

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Образовательный проект</p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            <span className="text-gold-gradient">Стоп,</span> Кибербуллинг
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Знания и инструменты для защиты себя и других в цифровом пространстве.
            Травля в сети — это не нормально. Вместе мы можем её остановить.
          </p>

          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* What is cyberbullying */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Что это такое</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
                Кибербуллинг — это не шутки
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Кибербуллинг — это травля, оскорбления, угрозы или преследование в сети. В отличие от обычного буллинга, он может преследовать тебя 24/7 и распространяться очень быстро.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Оскорбительные комментарии, распространение слухов, фейковые аккаунты, исключение из онлайн-групп, угрозы и запугивание — всё это формы кибербуллинга. Помни: ты не виноват, что это происходит.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Как защитить себя</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Твои 4 шага к защите</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Не отвечай",
                desc: "Агрессор ждёт твоей реакции. Лучшая реакция — полное отсутствие реакции.",
              },
              {
                num: "02",
                title: "Сохрани доказательства",
                desc: "Сделай скриншоты всех оскорбительных сообщений, постов, фото. Скопируй ссылки.",
              },
              {
                num: "03",
                title: "Блокируй и жалуйся",
                desc: "Используй функцию «Заблокировать» в соцсетях. Нажимай «Пожаловаться» на контент.",
              },
              {
                num: "04",
                title: "Расскажи взрослым",
                desc: "Травля — это тяжело. Не оставайся с этим один на один. Расскажи родителям или учителю.",
              },
            ].map((step) => (
              <div key={step.num} className="relative p-8 border border-border group hover:border-primary transition-colors duration-300">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />
                <div className="text-5xl font-serif text-primary/20 mb-4">{step.num}</div>
                <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographic Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="fan" />

          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Инфографика</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Цифры и факты</h2>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-2xl w-full border border-border">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />
              <img
                src="https://cdn.poehali.dev/files/5902c970-4391-4464-86f4-a32ed12b2035.jpg"
                alt="Инфографика: Стоп, кибербуллинг"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booklets Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Материалы</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Образовательные буклеты</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                src: "https://cdn.poehali.dev/files/ebe3272c-349c-48ec-8ca5-262791967d4e.png",
                alt: "Буклет: Кибербуллинг — это не шутки",
                caption: "Буклет 1 — Признаки, шаги защиты и что нельзя делать",
              },
              {
                src: "https://cdn.poehali.dev/files/da872f15-393d-4a96-8250-566ec025ed60.png",
                alt: "Буклет: Стоп, кибербуллинг! Твой цифровой иммунитет",
                caption: "Буклет 2 — Цифровой иммунитет и куда обратиться за помощью",
              },
            ].map((item, i) => (
              <div key={i} className="relative border border-border group hover:border-primary transition-colors duration-300">
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto"
                />
                <div className="p-4 border-t border-border">
                  <p className="text-muted-foreground text-sm text-center tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Safety Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />

          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Твой цифровой иммунитет</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Советы по цифровой безопасности</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🔒",
                title: "Пароль — это замок",
                tips: [
                  "Используй разные пароли для каждого сайта",
                  "Минимум 12 символов: буквы, цифры, знаки",
                  "Включи двухфакторную аутентификацию везде, где можно",
                  "Не сохраняй пароли в браузере на чужом устройстве",
                ],
              },
              {
                icon: "👁",
                title: "Настрой приватность",
                tips: [
                  "Посты и фото — только для друзей, не «все пользователи»",
                  "Регулярно проверяй настройки конфиденциальности",
                  "Не принимай запросы от незнакомых людей",
                  "Отключи геолокацию в историях и постах",
                ],
              },
              {
                icon: "🤔",
                title: "Подумай перед публикацией",
                tips: [
                  "Не публикуй номер телефона и домашний адрес",
                  "Не выкладывай фото документов и билетов",
                  "Не делись планами на отпуск заранее",
                  "Удалённое из сети всё равно может остаться в чужих руках",
                ],
              },
              {
                icon: "👥",
                title: "Фильтруй список друзей",
                tips: [
                  "Не добавляй незнакомых людей «для количества»",
                  "За пустыми профилями часто скрываются хейтеры",
                  "Периодически чисти список — убирай тех, кого не знаешь",
                  "Если кто-то давит или угрожает — блокируй без колебаний",
                ],
              },
            ].map((block, i) => (
              <div key={i} className="relative p-8 border border-border hover:border-primary transition-colors duration-300">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl">{block.icon}</span>
                  <h3 className="font-serif text-xl text-foreground">{block.title}</h3>
                </div>
                <ul className="space-y-3">
                  {block.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotline Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ArtDecoSunburst />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <ArtDecoDivider variant="chevron" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Ты не один</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">Куда обратиться за помощью</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Если тебе нужна помощь — не молчи. Есть люди, которые готовы поддержать тебя прямо сейчас.
            </p>
          </div>

          <div className="relative p-8 md:p-12 border border-border">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-primary font-serif text-4xl mb-3">01</div>
                <h3 className="text-foreground font-serif text-lg mb-2">Родители и школа</h3>
                <p className="text-muted-foreground text-sm">Родители, классный руководитель, школьный психолог</p>
              </div>
              <div>
                <div className="text-primary font-serif text-4xl mb-3">02</div>
                <h3 className="text-foreground font-serif text-lg mb-2">Телефон доверия</h3>
                <p className="text-muted-foreground text-sm">Детский телефон доверия:</p>
                <a href="tel:88002000122" className="text-primary font-serif text-xl hover:text-primary/80 transition-colors">
                  8-800-2000-122
                </a>
              </div>
              <div>
                <div className="text-primary font-serif text-4xl mb-3">03</div>
                <h3 className="text-foreground font-serif text-lg mb-2">Горячая линия</h3>
                <p className="text-muted-foreground text-sm">Центр безопасного интернета:</p>
                <a href="tel:88002002400" className="text-primary font-serif text-xl hover:text-primary/80 transition-colors">
                  8-800-200-24-00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-serif text-xl text-foreground">Стоп, Кибербуллинг</span>
              <div className="w-12 h-px bg-primary" />
            </div>
            <p className="text-muted-foreground text-sm text-center">
              #СтопКибербуллинг &nbsp;·&nbsp; #ТыНеОдин &nbsp;·&nbsp; #БезопасныйИнтернет
            </p>
            <p className="text-muted-foreground/50 text-xs">Образовательный проект · 2024</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;