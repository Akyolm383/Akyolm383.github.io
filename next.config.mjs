/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // /hobi -> out/hobi/index.html (GitHub Pages bunu her koşulda sunar)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
