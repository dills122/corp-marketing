# Deployment

This site is a static Astro build deployed to GitHub Pages with GitHub Actions.

## Workflows

Two workflows are configured:

- `.github/workflows/ci.yml` builds the site on pull requests and manual runs.
- `.github/workflows/deploy.yml` builds and deploys the site when `main` is pushed.

The deploy workflow uses Astro's official GitHub Pages path:

- `withastro/action@v6` builds and uploads the Astro site artifact.
- `actions/deploy-pages@v5` publishes the artifact to GitHub Pages.

## GitHub Pages Settings

In the GitHub repository:

1. Open `Settings` -> `Pages`.
2. Set `Build and deployment` -> `Source` to `GitHub Actions`.
3. Under `Custom domain`, set:

```text
shwimp.studio
```

4. After DNS is verified and the certificate is available, enable `Enforce HTTPS`.

## Custom Domain Files

The configured domain appears in two places:

```text
astro.config.mjs
public/CNAME
```

For a custom domain, Astro should use the full custom site URL and should not set a `base` path.

If the domain changes from `shwimp.studio`, update both files before deploying.

## DNS Notes

For a `www` or other subdomain, create a DNS `CNAME` record pointing the subdomain to the GitHub Pages default host:

```text
<github-user-or-org>.github.io
```

Do not include the repository name in the DNS target.

For an apex domain such as `shwimp.studio`, GitHub Pages normally uses `A` and `AAAA` records to GitHub Pages IP addresses. GitHub also recommends configuring the `www` variant alongside the apex domain for HTTPS and redirects.

Avoid wildcard DNS records for GitHub Pages domains.

## References

- Astro: Deploy your Astro site to GitHub Pages
  https://docs.astro.build/en/guides/deploy/github/
- GitHub: About custom domains and GitHub Pages
  https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
- GitHub: Managing a custom domain for your GitHub Pages site
  https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
