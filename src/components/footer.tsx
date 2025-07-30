import Link from "next/link"
import { Heart } from "lucide-react"
import { IcBaselineEmail, MdiGithub } from "./icon"

const quickLinks = [
    { href: "/", label: "หน้าแรก" },
    { href: "/about", label: "เกี่ยวกับ" },
    { href: "/projects", label: "ผลงาน" },
    { href: "/skills", label: "ทักษะ" },
    { href: "/contact", label: "ติดต่อ" },
];

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">นิมิตร สุวรรณศรี</h3>
                        <p className="text-gray-300 leading-7 mb-4 max-w-md">
                            ผมชอบใช้เฟรมเวิร์กอย่าง Nextjs ในการทำเว็บไซต์ ผมเป็นคนที่ชอบเรียนรู้สิ่งใหม่ๆ และสิ่งเดิมเพื่อทบทวนให้เข้าใจมากยิ่งขึ้น และใช้เวลาว่างที่จะ
                            ขยันฝึกฝนตัวเองเกือบตลอดที่ว่าง
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/NimitTH"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors duration-200"
                            >
                                <MdiGithub className="h-6 w-6" />
                            </a>
                            <a
                                href="mailto:nimit@gmail.com"
                                className="text-gray-300 hover:text-white transition-colors duration-200"
                            >
                                <IcBaselineEmail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">ลิงค์ด่วน</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Web Development</li>
                            <li>Frontend Development</li>
                            <li>Backend Development</li>
                            <li>UI/UX Design</li>
                            <li>Consulting</li>
                        </ul>
                    </div> */}
                </div>

                <div className="border-t border-muted-foreground mt-8 pt-8 text-center">
                    <p className="text-gray-300 flex items-center justify-center">
                        สร้าง <Heart className="h-4 w-4 mx-1 text-red-500" /> โดย นิมิตร สุวรรณศรี
                    </p>
                    <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} สงวนลิขสิทธิ์.</p>
                </div>
            </div>
        </footer>
    )
}
