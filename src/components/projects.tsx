import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { RainbowButton } from "./magicui/rainbow-button"
import { FluentCertificate32Regular, IconParkSolidWebPage, StreamlinePlumpAiTechnologySparkSolid, StreamlineUltimateRewardStars2Bold } from "./icon"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
    {
        title: "ระบบขายสินค้า WPPrintIT ในวิทยาลัย",
        description:
            "เว็บนี้เป็นระบบการจัดการปริ้นรูปภาพใส่สิ่งของต่างๆ เช่น เสื้อยืด แก้วน้ำ และอื่นๆ โปรเจ็กต์นี้เป็นโปรเจกต์ที่ผมสะสมความรู้ต่างๆ แล้วเอามาทำเป็นระบบนี้ และยังเป็นโปรเจ็กต์จบปวช. 3 ของผมด้วย",
        image: "/images/wpprintit.jpg",
        technologies: ["Next.js", "TypeScript", "MySQL", "Prisma", "Tailwind CSS", "Zod", "Auth.js", "HeroUI", "Bcryptjs", "Axios", "Thunder client", "CursorAI", "React Hook Form", "Postman", "XAMPP"],
        liveUrl: "https://wpprintit.vercel.app/",
        githubUrl: "https://github.com/NimitTH/WPPrintIT",
    },
]

const certificates = [
    "/images/certificates/c1.jpg",
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <StreamlinePlumpAiTechnologySparkSolid className='mb-3.5 w-13 h-13 mx-auto text-yellow-300 drop-shadow-xl/50 drop-shadow-amber-400/65' />
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6">ผลงานโปรเจกต์ของฉัน</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        ส่วนนี้ก็จะเป็นโปรเจกต์ที่ผมได้ทำมาในช่วงเวลาที่ผ่านมา ซึ่งจะมีทั้งโปรเจกต์ที่เป็นโปรเจกต์จบการศึกษา และโปรเจกต์ที่ผมได้ทำเพื่อฝึกฝนทักษะต่างๆ ของผม
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-semibold flex items-center gap-2 mb-8"><IconParkSolidWebPage className="w-7 h-7" />ผลงานโปรเจกต์ที่เคยทำ</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.slice(0, 3).map((project, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden pt-0"
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                        <Button size="sm" variant="secondary" asChild>
                                            <Link href={project.githubUrl}>
                                                <Github className="h-4 w-4 mr-2" />
                                                Code
                                            </Link>
                                        </Button>
                                        <Button size="sm" asChild>
                                            <Link href={project.liveUrl}>
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Demo
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                <CardHeader className="gap-0">
                                    <CardTitle className="text-lg">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <Badge variant="secondary" className="text-xs">
                                                +{project.technologies.length - 4}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    {projects.length > 3 && (
                        <div className="text-center mt-8">
                            <RainbowButton variant="outline" className="mx-auto w-fit transition transform hover:scale-105">
                                <StreamlineUltimateRewardStars2Bold />
                                <Link href="#contact">ดูโปรเจกต์ทั้งหมด</Link>
                            </RainbowButton>
                        </div>
                    )}
                </div>

                <div>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 mb-8"><FluentCertificate32Regular className="w-7 h-7" />เกีตรบัตรที่เคยได้</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((src, index) => (
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <div className="cursor-pointer hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden shadow">
                                        <Image
                                            src={src}
                                            alt={`certificate-${index + 1}`}
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="min-w-dvh p-0 bg-transparent border-none">
                                    <Image
                                        src={src}
                                        alt={`certificate-${index + 1}`}
                                        width={1200}
                                        height={800}
                                        className="object-contain mx-auto rounded-xl"
                                    />
                                    <DialogTitle className="hidden"></DialogTitle>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}
