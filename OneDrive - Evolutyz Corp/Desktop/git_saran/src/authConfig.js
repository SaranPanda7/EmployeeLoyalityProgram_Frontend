export const msalConfig = {
    auth: {
      clientId: "28d4f4eb-5c8b-4655-8465-e233e71ac3c8",
      authority: "https://login.microsoftonline.com/pravalikareddy6yahoo.onmicrosoft.com", 
      redirectUri: "http://localhost:3000/login",
      postLogoutRedirectUri: "http://localhost:3000",

    },
    cache: {
      cacheLocation: "sessionStorage", 
      storeAuthStateInCookie: false, 
    }
  };
  
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };