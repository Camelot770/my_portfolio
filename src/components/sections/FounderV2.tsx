'use client';

export function FounderV2() {
  return (
    <section className="founder">
      <div className="founder__img">
        <div className="founder__badge">
          <span className="d" />
          Основатель · на связи
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/my_photo.jpg" alt="Наум Коган — основатель StackLab" />
        <div className="founder__sig">
          <span>
            <b>Наум Коган</b>Founder · Lead Engineer
          </span>
          <span>
            iOS · MAX · Web
            <br />
            полный цикл
          </span>
        </div>
      </div>
      <div className="founder__body">
        <div className="sec__tag">05 · Люди</div>
        <blockquote className="founder__quote">
          «StackLab — про инженерию, а не про менеджмент. Архитектурные,
          продуктовые и технические решения{' '}
          <em>принимаются</em> и <em>исполняются</em> одной командой —
          от первого созвона до ночного хот-фикса.»
        </blockquote>
        <div className="founder__meta">
          <div className="row">
            <b>09:00 – 22:00 MSK</b>Прямой канал в Telegram / MAX
          </div>
          <div className="row">
            <b>в течение 30 мин</b>Ответ в рабочие часы
          </div>
          <div className="row">
            <b>Полный цикл</b>От идеи до публикации и поддержки
          </div>
          <div className="row">
            <b>Senior-уровень</b>Архитектура, iOS, MAX, веб — одна команда
          </div>
        </div>
      </div>
    </section>
  );
}
