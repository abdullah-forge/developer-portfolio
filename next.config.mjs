/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // The CV used to live at this address; old links keep working
  async redirects() {
    return [{ source: '/Muhammad_Abdullah_CV.pdf', destination: '/cv.pdf', permanent: true }]
  },
}

export default nextConfig
