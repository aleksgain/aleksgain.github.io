
## 🔑 Environment Variables

- `PUBLIC_GITHUB_TOKEN`: GitHub Personal Access Token for fetching repository data
  - Generate at: https://github.com/settings/tokens
  - Required scopes: `repo`, `read:user`

- `LINKEDIN_CLIENT_ID`: LinkedIn OAuth Client ID
- `LINKEDIN_CLIENT_SECRET`: LinkedIn OAuth Client Secret
  - Get these from: https://www.linkedin.com/developers/apps
  - Required OAuth scopes: `r_liteprofile`, `r_emailaddress`

## 📦 Deployment

### Cloudflare Pages

1. Push your code to GitHub
2. In Cloudflare Pages dashboard:
   - Create new project
   - Connect to your GitHub repository
   - Configure build settings:
     - Framework preset: Astro
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Add environment variables in the Settings tab

### Build Settings

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 18.x

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## 📝 Development Notes

- The Credly badges component currently uses mock data for development
- LinkedIn integration requires OAuth setup
- GitHub stats are fetched using the GitHub API

## 📄 License

MIT License - feel free to use this code for your own portfolio!