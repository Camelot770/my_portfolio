import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'grid',
        placeItems: 'center',
        padding: '180px 38px 80px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 760 }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(120px, 20vw, 280px)',
            fontWeight: 300,
            lineHeight: 0.85,
            letterSpacing: '-0.06em',
            color: 'var(--accent)',
          }}
        >
          404
        </div>
        <h1
          style={{
            marginTop: 20,
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.5vw, 54px)',
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: '-0.035em',
          }}
        >
          Сигнал <em style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontStyle: 'italic' }}>потерян</em>
        </h1>
        <p
          style={{
            marginTop: 24,
            color: 'var(--fg-dim)',
            fontSize: 16,
            lineHeight: 1.5,
          }}
        >
          Страница была перемещена, удалена или никогда не существовала.
          Попробуйте начать с главной.
        </p>
        <div
          style={{
            marginTop: 40,
            display: 'inline-flex',
            gap: 14,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Link href="/" className="cta__btn" data-cur="link">
            <span className="d" />
            На главную
          </Link>
          <Link href="/portfolio" className="cta__btn alt" data-cur="link">
            <span className="d" />
            Портфолио
          </Link>
        </div>
      </div>
    </div>
  );
}
