const { redirectDomain } = require("../../config/keys");

module.exports = ({ id, body }) => {
  return `
  <html>
    <body>
      <div style="text-align: center">
        <h3>We'd appreciate your feedback</h3>
        <p>${body}</p>
        <div>
          <a href="${redirectDomain}/api/surveys/${id}/yes">Yes</a>
        </div>
        <div>
          <a href="${redirectDomain}/api/surveys/${id}/no">No</a>
        </div>
      </div>
    </body>
  </html>
  `;
};
