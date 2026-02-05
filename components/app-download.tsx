import "@/styles/app-download.css"

export default function AppDownload() {
  return (
    <section className="app-download">
      <div className="app-download-container">
        <div className="download-content">
          <h2>Learn on the Go.</h2>
          <h3>Download the Ishan App.</h3>
          <p>
            Download our mobile app to access lectures offline, take mock tests and chat with mentors anytime,
            anywhere.
          </p>

          <div className="download-buttons">
            <button className="download-btn">
              <span>PLAY</span> Install on Google Play
            </button>
            <button className="download-btn secondary">
              <span>◾</span> Download on App Store
            </button>
          </div>
        </div>

        <div className="app-mockup">
          <div className="phone-frame">
            <div className="phone-screen"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
