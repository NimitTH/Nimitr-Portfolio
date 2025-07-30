import { Button } from "@/components/ui/button"
import { ArrowDown, ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AuroraText } from "./magicui/aurora-text"
import { IcBaselineEmail, MdiGithub, MdiResume, StreamlineUltimateRewardStars2Bold } from "./icon"
import { RainbowButton } from "./magicui/rainbow-button"
import { TextAnimate } from "./magicui/text-animate"

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-balance text-4xl sm:text-4xl lg:text-6xl leading-tight tracking-tight font-bold mb-6">
                            <span>สวัสดีครับ ผมชื่อ </span>
                            <AuroraText
                                colors={["#ffbe0b", "#fb5607", "#ff006e"]}
                                className="drop-shadow-md/50 drop-shadow-rose-600 "
                            >
                                มิตร
                            </AuroraText>
                            <span className=""> เป็น </span>
                            <AuroraText
                                colors={["#3a0ca3", "#4361ee", "#7209b7"]}
                                className="drop-shadow-md/50 drop-shadow-violet-800 "
                            >
                                นักพัฒนาเว็บไซต์
                            </AuroraText>
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                            ผมชอบใช้เฟรมเวิร์กอย่าง Nextjs ในการทำเว็บไซต์ ผมเป็นคนที่ชอบเรียนรู้สิ่งใหม่ๆ และสิ่งเดิมเพื่อทบทวนให้เข้าใจมากยิ่งขึ้น และใช้เวลาว่างที่จะขยันฝึกฝนทักษะการเขียนโปรแกรมของตัวเองให้ดีขึ้น
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <RainbowButton className="transition transform hover:scale-105"><MdiResume /><Link href="#projects">ดู ประสบการณ์</Link></RainbowButton>
                            <RainbowButton variant="outline" className="transition transform hover:scale-105">
                                <StreamlineUltimateRewardStars2Bold />
                                <Link href="#projects">ดู ผลงาน</Link>
                            </RainbowButton>
                        </div>

                        <div className="flex justify-center lg:justify-start space-x-6">
                            <Link
                                href="https://github.com/NimitTH"
                                className="hover:text-primary transition-colors drop-shadow-md drop-shadow-primary/20"
                            >
                                <MdiGithub className="h-8 w-8" />
                            </Link>
                            <Link href="#" className=" hover:text-primary transition-colors drop-shadow-md drop-shadow-primary/20">
                                <IcBaselineEmail className="h-8 w-8" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center order-1 lg:order-2">
                        <div className="w-96 h-96 flex justify-center rounded-md overflow-hidden shadow-lg/50 shadow-primary/40 hover:shadow-lg hover:shadow-primary/40 transition-all hover:scale-105 duration-300">
                            <Image
                                src="/images/IMG_20250530_204745_369.jpg"
                                alt="Nimit Suwannasri"
                                className="object-cover"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="#about"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowDown className="h-6 w-6 animate-bounce" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
