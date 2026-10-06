import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import { aiVideoSeries, aiVideos } from '../data/aiVideos.js'
import { whatsappUrl } from '../data/site.js'

function VideoCard({ video, index }) {
  return (
    <Reveal>
      <article className={`ai-video-card${index % 2 ? ' ai-video-card-reverse' : ''}`}>
        <figure className="ai-video-media">
          <div className="ai-video-device">
            <video
              controls
              playsInline
              preload="none"
              poster={video.poster}
              aria-label={`Play ${video.title}`}
            >
              <source src={video.src} type="video/mp4" />
              {video.captions && (
                <track
                  kind="captions"
                  src={video.captions}
                  srcLang="en"
                  label="English"
                />
              )}
              Your browser does not support embedded video.
            </video>
          </div>
          <figcaption>{video.duration} · Vertical social video</figcaption>
        </figure>

        <div className="ai-video-copy">
          <p className="ai-video-number">{video.number}</p>
          <p className="eyebrow">{video.focus}</p>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <div className="ai-video-tags" aria-label="Video details">
            <span>Higgsfield</span>
            <span>{video.language}</span>
            <span>9:16</span>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function AIVideos() {
  return (
    <>
      <ScrollProgress />

      <section className="ai-video-hero">
        <div className="wrap ai-video-hero-grid">
          <div className="ai-video-hero-copy">
            <p className="eyebrow">AI video production · {aiVideoSeries.tool}</p>
            <h1>AI-generated.<br /><em>Human-directed.</em></h1>
            <p className="lede">{aiVideoSeries.summary}</p>
            <p className="ai-video-hero-note">
              My contribution: AI-assisted video creation with Higgsfield and visual direction
              for this series. These are creative samples; publication, campaign results,
              legal review, and separate script or voiceover authorship are not verified here.
            </p>
            <div className="ai-video-hero-actions">
              <a className="btn btn-primary" href="#showcase">Watch the showcase</a>
              <Link className="btn ai-video-ghost" to="/#work">View strategy work</Link>
            </div>
          </div>

          <div className="ai-video-hero-visual" aria-label="Two Al Mahy AI video covers">
            <div className="ai-video-cover ai-video-cover-back">
              <img
                src="/work/ai-videos/foreign-judgment-enforcement.webp"
                alt="Al Mahy cover about enforcing a foreign judgment in the UAE"
                width="720"
                height="1280"
              />
            </div>
            <div className="ai-video-cover ai-video-cover-front">
              <img
                src="/work/ai-videos/personal-status-enforcement.webp"
                alt="Al Mahy cover about enforcing a personal status judgment"
                width="720"
                height="1280"
              />
            </div>
            <span className="ai-video-tool-chip">Created with Higgsfield</span>
          </div>
        </div>

        <div className="wrap ai-video-stats" aria-label="AI video series at a glance">
          {aiVideoSeries.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section ai-video-showcase" id="showcase" aria-labelledby="ai-showcase-title">
        <div className="wrap">
          <div className="ai-video-section-head">
            <div>
              <p className="eyebrow">Selected executions</p>
              <h2 id="ai-showcase-title">One visual system, five legal stories.</h2>
            </div>
            <p>
              Every video is presented as a finished social asset. Press play to review the
              pacing, visual direction, captions, sound, and mobile framing.
            </p>
          </div>

          <div className="ai-video-list">
            {aiVideos.map((video, index) => (
              <VideoCard key={video.slug} video={video} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-video-process" aria-labelledby="ai-process-title">
        <div className="wrap ai-video-process-grid">
          <div>
            <p className="eyebrow">My production approach</p>
            <h2 id="ai-process-title">I use AI as a production tool, not the idea itself.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <div><strong>Find the visual hook</strong><p>Turn each legal topic into a simple image viewers can understand before they read the caption.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><strong>Direct one consistent world</strong><p>Keep the paper texture, black objects, gold marks, typography, and motion language recognisably Al Mahy.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><strong>Finish for mobile</strong><p>Structure every sequence for 9:16 viewing, readable captions, clear pacing, and sound-on or sound-off delivery.</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="ai-video-cta">
        <div className="wrap ai-video-cta-inner">
          <div>
            <p className="eyebrow">Need a video system for your brand?</p>
            <h2>Let’s turn the brief into something people will actually watch.</h2>
          </div>
          <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Start a conversation
          </a>
        </div>
      </section>
    </>
  )
}
