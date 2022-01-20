/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "preview.codeless.co",
      "preview.colorlib.com",
      "images.unsplash.com",
      "scontent.fsgn2-3.fna.fbcdn.net",
      "scontent.fsgn2-2.fna.fbcdn.net",
      "raw.githubusercontent.com",
      "media.graphcms.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiaHV5a2h1b25nIiwiYSI6ImNrd3o0d2w1bDBrYzgybm9hZTk0Zzd1OG0ifQ.nH5mcPvMVkXKqBxpOKJkmQ",
  },
};
