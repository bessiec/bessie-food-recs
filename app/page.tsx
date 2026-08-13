// app/travelrecs/page.tsx
// To edit content or add cities, open data.ts in this same folder.

import { homeCities, taiwan, regions, foodExperts } from "./data";
import Script from "next/script";

function renderTitleWithEmphasis(title: string, emphasis: string) {
  if (!emphasis) return title;
  const parts = title.split(emphasis);
  return (
    <>
      {parts[0]}
      <em>{emphasis}</em>
      {parts[1]}
    </>
  );
}

export default function TravelRecsLandingPage() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JCZN280491" />
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());

            gtag('config', 'G-JCZN280491');
          `,
        }}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Noto+Serif+TC:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <style>{styles}</style>

      <div className="page">
        <header className="masthead">
          <div className="masthead-issue">A Notebook by Bessie Chu</div>
          <h1 className="masthead-title">
            Food and Travel<em> Recs</em>
          </h1>
          <div className="masthead-tagline">
            Restaurants, cafes, bars, and places worth your time
          </div>
        </header>

        <div className="section-label">
          <span className="num">i.</span>
          <span>The Home Cities</span>
        </div>

        <div className="featured">
          {homeCities.map((card) => (
            <article key={card.number} className="featured-card">
              <span className="featured-num">{card.number}</span>
              <div className="featured-kicker">{card.kicker}</div>
              <h2 className="featured-title">
                {renderTitleWithEmphasis(card.title, card.titleEmphasis)}
              </h2>
              <p className="featured-dek">{card.dek}</p>

              {card.type === "single" ? (
                <div className="single-cta">
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="single-cta-link"
                  >
                    {card.ctaLabel} <span aria-hidden="true">↗</span>
                  </a>
                  <span className="single-cta-format">{card.ctaFormat}</span>
                </div>
              ) : (
                <div className="map-list">
                  {card.maps.map((m) => (
                    <a
                      key={m.name}
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-row"
                    >
                      <span className="map-name">
                        {m.name} <span aria-hidden="true">↗</span>
                      </span>
                      <span className="map-meta">{m.meta}</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="section-label">
          <span className="num">ii.</span>
          <span>Taiwan</span>
        </div>

        <section className="taiwan-section">
          <div className="taiwan-hanzi" aria-hidden="true">台灣</div>
          <div className="taiwan-content">
            <div className="taiwan-kicker">{taiwan.kicker}</div>
            <h2 className="taiwan-title">
              {renderTitleWithEmphasis(taiwan.title, taiwan.titleEmphasis)}
            </h2>
            <p className="taiwan-dek">{taiwan.dek}</p>
            <a
              href={taiwan.url}
              target="_blank"
              rel="noopener noreferrer"
              className="taiwan-guide-cta"
            >
              {taiwan.ctaLabel} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <div className="section-label">
          <span className="num">iii.</span>
          <span>By Region</span>
        </div>

        <div className="regions">
          {regions.map((region) => (
            <div key={region.name} className="region">
              <div className="region-header">
                <div className="region-name">{region.name}</div>
                <div className="region-count">
                  {region.cities.length} map
                  {region.cities.length !== 1 ? "s" : ""}
                </div>
              </div>
              <div className="region-grid">
                {region.cities.map((c) => (
                  <a
                    key={c.city}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="region-card"
                  >
                    <div className="region-card-city">{c.city}</div>
                    <div className="region-card-meta">{c.country}</div>
                    <div className="region-card-arrow">
                      View map <span aria-hidden="true">↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-label">
          <span className="num">iv.</span>
          <span>Recommended Food Experts to Follow</span>
        </div>

        <div className="experts">
          {foodExperts.map((expert) => (
            <a
              key={expert.name}
              href={expert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="expert-card"
            >
              <div className="expert-name">
                {expert.name} <span aria-hidden="true">↗</span>
              </div>
              <div className="expert-description">{expert.description}</div>
            </a>
          ))}
        </div>

        <div className="colophon">
          <div>Curated by Bessie Chu</div>
          <div className="colophon-right">
            <a href="https://instagram.com/bessiefromsgv" target="_blank" rel="noopener noreferrer">@bessiefromsgv</a>
            <a href="https://bessiechu.com">bessiechu.com</a>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .page { background: #F3F4F2; font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #1A1C1A; min-height: 100vh; padding-bottom: 60px; }

  .masthead { padding: 56px 32px 36px; border-bottom: 1px solid #1A1C1A; text-align: center; }
  .masthead-issue { font-family: 'EB Garamond', Georgia, serif; font-size: 13px; letter-spacing: 0.18em; color: #5D605C; margin-bottom: 18px; text-transform: uppercase; font-weight: 400; }
  .masthead-title { font-family: 'EB Garamond', Georgia, serif; font-size: 72px; font-weight: 400; letter-spacing: -0.02em; line-height: 1; margin-bottom: 14px; }
  .masthead-title em { font-style: italic; font-weight: 400; }
  .masthead-tagline { font-family: 'EB Garamond', Georgia, serif; font-size: 16px; color: #5D605C; font-style: italic; letter-spacing: 0.01em; line-height: 1.4; }

  .section-label { display: flex; align-items: baseline; gap: 14px; margin: 48px 32px 22px; font-family: 'EB Garamond', Georgia, serif; font-size: 14px; color: #5D605C; font-style: italic; font-weight: 400; }
  .section-label::after { content: ""; flex: 1; height: 0.5px; background: #D2D3D0; align-self: center; }
  .section-label .num { color: #1A1C1A; font-size: 14px; }

  .featured { padding: 0 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .featured-card { background: white; border: 0.5px solid #D2D3D0; padding: 32px 30px 26px; transition: transform .2s, box-shadow .2s; position: relative; display: flex; flex-direction: column; }
  .featured-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
  .featured-num { position: absolute; top: 24px; right: 28px; font-family: 'EB Garamond', Georgia, serif; font-size: 42px; font-style: italic; color: #E0E1DD; line-height: 1; font-weight: 400; }
  .featured-kicker { font-family: 'EB Garamond', Georgia, serif; font-size: 12px; color: #9DA09C; margin-bottom: 12px; font-style: italic; letter-spacing: 0.04em; }
  .featured-title { font-family: 'EB Garamond', Georgia, serif; font-size: 36px; line-height: 1.05; font-weight: 400; margin-bottom: 16px; letter-spacing: -0.01em; }
  .featured-title em { font-style: italic; }
  .featured-dek { font-family: 'EB Garamond', Georgia, serif; font-size: 16px; line-height: 1.55; color: #3D403D; margin-bottom: 22px; flex: 1; }

  .single-cta { margin-top: auto; border-top: 0.5px solid #E2E3DF; padding-top: 18px; display: flex; align-items: baseline; justify-content: space-between; font-family: 'EB Garamond', Georgia, serif; font-size: 15px; }
  .single-cta-link { color: #1A1C1A; display: inline-flex; align-items: baseline; gap: 8px; border-bottom: 0.5px solid transparent; padding-bottom: 2px; text-decoration: none; }
  .single-cta-link:hover { border-bottom-color: #1A1C1A; }
  .single-cta-format { font-style: italic; color: #9DA09C; font-size: 12px; }

  .map-list { margin-top: auto; border-top: 0.5px solid #E2E3DF; padding-top: 16px; display: flex; flex-direction: column; gap: 9px; }
  .map-row { display: flex; align-items: baseline; justify-content: space-between; font-family: 'EB Garamond', Georgia, serif; font-size: 14px; line-height: 1.3; gap: 8px; text-decoration: none; color: inherit; }
  .map-row .map-name { color: #1A1C1A; flex: 1; border-bottom: 0.5px solid transparent; display: inline-flex; align-items: baseline; gap: 6px; padding-bottom: 2px; }
  .map-row:hover .map-name { border-bottom-color: #1A1C1A; }
  .map-row .map-meta { font-style: italic; color: #9DA09C; font-size: 12px; }

  .taiwan-section { margin: 0 32px; background: #E8EDEA; border: 0.5px solid #C5CDC8; padding: 48px 40px; position: relative; overflow: hidden; }
  .taiwan-hanzi { position: absolute; right: 32px; top: 50%; transform: translateY(-50%); font-family: 'Noto Serif TC', 'EB Garamond', serif; font-size: 128px; color: #D2DBD4; line-height: 1; font-weight: 400; pointer-events: none; user-select: none; z-index: 0; }
  .taiwan-content { position: relative; z-index: 1; max-width: 560px; }
  .taiwan-kicker { font-family: 'EB Garamond', Georgia, serif; font-size: 12px; color: #56635A; margin-bottom: 12px; font-style: italic; letter-spacing: 0.04em; }
  .taiwan-title { font-family: 'EB Garamond', Georgia, serif; font-size: 48px; font-weight: 400; line-height: 1; letter-spacing: -0.01em; margin-bottom: 16px; }
  .taiwan-title em { font-style: italic; }
  .taiwan-dek { font-family: 'EB Garamond', Georgia, serif; font-size: 17px; color: #2A3530; line-height: 1.55; margin-bottom: 24px; }
  .taiwan-guide-cta { display: inline-flex; align-items: baseline; gap: 8px; background: #1A1C1A; color: #F3F4F2; padding: 14px 22px; font-family: 'EB Garamond', Georgia, serif; font-size: 14px; font-style: italic; text-decoration: none; }
  .taiwan-guide-cta:hover { background: #3D403D; }

  .regions { padding: 0 32px; }
  .region { margin-bottom: 36px; }
  .region-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 0.5px solid #1A1C1A; }
  .region-name { font-family: 'EB Garamond', Georgia, serif; font-size: 26px; font-weight: 400; font-style: italic; letter-spacing: -0.01em; line-height: 1; }
  .region-count { font-family: 'EB Garamond', Georgia, serif; font-size: 13px; color: #9DA09C; font-style: italic; line-height: 1; }
  .region-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 11px; }
  .region-card { background: white; border: 0.5px solid #E2E3DF; padding: 16px 14px 14px; transition: border-color .15s, transform .15s; text-decoration: none; color: inherit; display: block; }
  .region-card:hover { border-color: #9DA09C; transform: translateY(-1px); }
  .region-card-city { font-family: 'EB Garamond', Georgia, serif; font-size: 18px; font-weight: 400; margin-bottom: 4px; line-height: 1.2; }
  .region-card-meta { font-family: 'EB Garamond', Georgia, serif; font-size: 12px; color: #9DA09C; font-style: italic; line-height: 1.2; }
  .region-card-arrow { margin-top: 10px; display: flex; align-items: baseline; gap: 5px; font-family: 'EB Garamond', Georgia, serif; font-size: 12px; color: #3D403D; font-style: italic; }

  .experts { padding: 0 32px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .expert-card { background: white; border: 0.5px solid #E2E3DF; padding: 18px 18px 16px; transition: border-color .15s, transform .15s; text-decoration: none; color: inherit; display: block; }
  .expert-card:hover { border-color: #9DA09C; transform: translateY(-1px); }
  .expert-name { font-family: 'EB Garamond', Georgia, serif; font-size: 20px; font-weight: 400; margin-bottom: 6px; line-height: 1.2; color: #1A1C1A; }
  .expert-description { font-family: 'EB Garamond', Georgia, serif; font-size: 13px; line-height: 1.5; color: #5D605C; font-style: italic; }

  .colophon { margin-top: 60px; padding: 24px 32px; border-top: 0.5px solid #D2D3D0; display: flex; justify-content: space-between; align-items: center; font-family: 'EB Garamond', Georgia, serif; font-style: italic; font-size: 13px; color: #5D605C; }
  .colophon-right { display: flex; gap: 18px; }
  .colophon a { color: #1A1C1A; text-decoration: none; border-bottom: 0.5px solid #5D605C; }

  @media (max-width: 768px) {
    .featured { grid-template-columns: 1fr; }
    .region-grid { grid-template-columns: repeat(2, 1fr); }
    .experts { grid-template-columns: 1fr; }
    .taiwan-section { padding: 36px 24px; }
    .taiwan-title { font-size: 36px; }
    .taiwan-hanzi { font-size: 80px; right: 16px; opacity: 0.6; }
    .masthead-title { font-size: 54px; }
  }
`;