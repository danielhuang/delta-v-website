import ExternalLink from './ExternalLink'

export default () => (
  <div className="root">
    <div>
      <div>
        <h1>
          <ExternalLink href="https://dan.js.org">Daniel Huang</ExternalLink>
        </h1>
        <h2>President + Lead Developer</h2>
      </div>
      <div>
        <h1>
          <ExternalLink href="https://havish.dev">Havish Netla</ExternalLink>
        </h1>
        <h2>Machine Learning + AI</h2>
      </div>
    </div>
    <div>
      <div>
        <h1>
          <ExternalLink href="https://jeffreyy.dev">Jeffrey Yang</ExternalLink>
        </h1>
        <h2>Frontend + Backend</h2>
      </div>
    </div>

    <style jsx>{`
      .root {
        display: flex;
        font-size: calc(0.2em + 12px);
      }

      div {
        flex-wrap: wrap;
        justify-content: center;
      }

      .root * {
        box-sizing: border-box;
      }

      h1,
      h2 {
        font-weight: normal;
      }

      h1 {
        font-size: 1.1em;
      }

      h2 {
        font-size: 0.8em;
      }

      .root > div {
        display: flex;
      }

      .root > div > div {
        text-align: center;
        padding: 0px 10px;
        margin: 5px;
        width: 190px;
        box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px;
      }
    `}</style>
  </div>
)
