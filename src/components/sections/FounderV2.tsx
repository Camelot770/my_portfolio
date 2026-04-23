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
          «В StackLab нет менеджеров проектов, потому что в коде нет
          менеджеров функций. С вами разговаривают те, кто{' '}
          <em>пишет</em> и <em>отвечает</em> — от первого созвона до
          ночного хот-фикса.»
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
            <b>Без посредников</b>Говорите с тем, кто пишет код
          </div>
        </div>
      </div>
    </section>
  );
}
