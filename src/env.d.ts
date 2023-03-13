declare namespace NodeJS {
  /** Merge declaration with `process` in order to override the global-scoped env. */
  export interface ProcessEnv {
    /**
     * Built-in environment variable.
     * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
     */
    readonly NG_APP_ENV: string;
    // Add your environment variables below
    readonly NG_APP_NAME: string;
    readonly NG_APP_DEBUG: string;
    readonly NG_APP_VERSION: string;
    readonly NG_APP_BASE_URL: string;
    readonly NG_APP_API_URL: string;
  }
}
