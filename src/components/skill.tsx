import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { SkillIconsBootstrap, SkillIconsCss, SkillIconsHtml, SkillIconsJavascript, SkillIconsMysqlLight, SkillIconsNextjsLight, SkillIconsPhotoshop, SkillIconsPhpLight, SkillIconsPrisma, SkillIconsReactLight, SkillIconsTailwindcssLight, SkillIconsTypescript } from './icons/skills'
import { StreamlineUltimateRewardStars2Bold } from './icon'

const skills = [
    {
        name: "HTML",
        icon: <SkillIconsHtml className='w-8 h-8' />
    },
    {
        name: "CSS",
        icon: <SkillIconsCss className='w-8 h-8' />
    },
    {
        name: "PHP",
        icon: <SkillIconsPhpLight className='w-8 h-8' />
    },
    {
        name: "JavaScript",
        icon: <SkillIconsJavascript className='w-8 h-8' />
    },
    {
        name: "TypeScript",
        icon: <SkillIconsTypescript className='w-8 h-8' />
    },
    {
        name: "React",
        icon: <SkillIconsReactLight className="w-8 h-8" />
    },
    {
        name: "Next.js",
        icon: <SkillIconsNextjsLight className="w-8 h-8" />
    },
    {
        name: "Bootstrap",
        icon: <SkillIconsBootstrap className='w-8 h-8' />
    },
    {
        name: "Tailwind CSS",
        icon: <SkillIconsTailwindcssLight className='w-8 h-8' />
    },
    {
        name: "MySQL",
        icon: <SkillIconsMysqlLight className='w-8 h-8' />
    },
    {
        name: "Prisma",
        icon: <SkillIconsPrisma className='w-8 h-8' />
    },
    {
        name: "PhotoShop",
        icon: <SkillIconsPhotoshop className='w-8 h-8' />
    }
]

export function Skill() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <StreamlineUltimateRewardStars2Bold className='mb-3.5 w-14 h-14 mx-auto text-pink-500 drop-shadow-lg/75 drop-shadow-pink-400' />
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">ทักษะ & เทคโนโลยี</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        ต่อไปนี้คือเทคโนโลยีและเครื่องมือบางส่วนที่ฉันใช้เพื่อนำความคิดมาสู่ชีวิต
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-0">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="mx-auto mb-2">
                                    {skill.icon}
                                </div>
                                <div className="text-sm font-medium group-hover:text-blue-600 transition-colors">{skill.name}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
