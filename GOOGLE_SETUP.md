# Google Setup

## Search Console verification

This repo already includes both verification methods:

- Meta tag: `google-site-verification=2DX2R2IaVQIeDR4rioa_gIlZ1njQDvftJGdkHxP4J6I`
- HTML file: `/google40b5f5b12c0ff891.html`

After deployment, verify these URLs:

- `https://tanluc.dev/en`
- `https://tanluc.dev/google40b5f5b12c0ff891.html`

## DNS TXT verification

The domain currently uses Porkbun nameservers. Add this DNS record in Porkbun:

```text
Type: TXT
Host: @
Value: google-site-verification=2DX2R2IaVQIeDR4rioa_gIlZ1njQDvftJGdkHxP4J6I
TTL: Default
```

## Google Analytics

Create a GA4 web data stream for `https://tanluc.dev`, then set this environment variable in Vercel:

```text
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

Redeploy after adding or changing the variable.
