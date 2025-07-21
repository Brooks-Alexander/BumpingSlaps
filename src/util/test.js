const exampleURL = 'https://example.com/callback#access_token=NwAExz...BV302Tk&token_type=Bearer&expires_in3600&state=123';
const match = exampleURL.match(/access_token=([^&]*)/);
console.log(match[1]);