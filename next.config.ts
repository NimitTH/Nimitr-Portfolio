import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],

  images: {
    remotePatterns: [new URL('https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/486860944_1185582623359526_7446013450316964797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEuwq-wjKmSnicmyicdvUvU83PbVpozU1Dzc9tWmjNTUHwWTEY3OgdJUq0sfiwactKYf4kv4MJhzJ1ADxB77RK3&_nc_ohc=GlOdKGf1mLsQ7kNvwFWm0rj&_nc_oc=AdmJ_mSOJxKlHKkuw11Vn8l-F3tE-7M9QgPQ4veNC5gVVYu_VETKjdoQx1grj1wFernh49c6PHzuzYRavYgmIxh-&_nc_zt=23&_nc_ht=scontent.fbkk5-7.fna&_nc_gid=Bq1KpJo1nruH53ma0_LrZA&oh=00_AfTFJ2ZcBllDU3M7mNu-OFRp0d_cTe22BIULtyQee5XeeA&oe=6886C0BD')],
  },
};

export default nextConfig;
