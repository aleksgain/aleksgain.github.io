interface ImportMetaEnv {
  readonly PUBLIC_GITHUB_TOKEN: string;
  readonly LINKEDIN_CLIENT_ID: string;
  readonly LINKEDIN_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 