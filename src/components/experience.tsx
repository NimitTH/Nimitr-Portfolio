import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import { IconParkSolidSourceCode } from './icon'

const experiences = [
  {
    company: "ร้านป้ายภู่กันแอดไวซ์ไทซิ่ง",
    position: "เด็กฝึกงานปวช. 3",
    duration: "2024",
    location: "เวียงป่าเป้า, เชียงราย",
    description:
      "ผมได้ฝีกงานที่ร้านป้ายภู่กันแอดไวซ์ไทซิ่ง ซึ่งเป็นร้านที่ทำเกี่ยวกับการพิมพ์ป้ายโฆษณาและสื่อสิ่งพิมพ์ต่างๆ ในช่วงเวลานี้ผมได้เรียนรู้การใช้เครื่องพิมพ์และการออกแบบกราฟิกพื้นฐาน",
    achievements: [
      "เรียนรู้การใช้เครื่องพิมพ์ดิจิทัลและการออกแบบกราฟิก",
      "พัฒนาทักษะการสื่อสารและการทำงานเป็นทีม",
      "ช่วยในการออกแบบและผลิตป้ายโฆษณา",
    ],
    tech: ["photoshop", "canva", "word"],
  },
  {
    company: "วิทยาลัยอาชีวศึกษาเชียงราย",
    position: "ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช.",
    duration: "2024",
    location: "เมืองเชียงราย, เชียงราย",
    description:
      "ได้มีโอกาสไปแข่งขันทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช. ที่วิทยาลัยอาชีวศึกษาเชียงราย ซึ่งเป็นการแข่งขันที่ท้าทายและประการณ์การเขียนโค้ดมากขึ้น",
    achievements: [
      "ได้รับรางวัลรองชนะเลิศอันดับ 1",
      "พัฒนาทักษะการเขียนโปรแกรมในภาษา HTML, CSS, PHP",
    ],
    tech: ["html", "css", "php", "xampp", "mysql"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <IconParkSolidSourceCode className="mb-3.5 w-14 h-14 mx-auto text-red-500 drop-shadow-lg/75 drop-shadow-rose-500" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">ประสบการณ์วิชาชีพ</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            การเดินทางของฉันผ่านประสบการณ์การเขียนโค้ดและการพัฒนาเว็บของฉัน
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-16 md:ml-0`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{exp.company}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">ความสำเร็จที่สำคัญ:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                            >
                              <span className="text-blue-600 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}