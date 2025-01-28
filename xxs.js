document.body.innerHTML = `
  <h1>Welcome to Your Custom XSS!</h1>
  <p>This page has been modified using an XSS payload. Always test responsibly!</p>
  <button onclick="alert('Have fun with ethical hacking!')">Click Me</button>
`;
