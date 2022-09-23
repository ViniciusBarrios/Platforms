declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITBOOK_BASE_URL: string;
      APOLLO_SERVER_URL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
