import Image from "next/image"
import Link from "next/link"
import { ArcTimeline, ArcTimelineItem } from "@/components/magicui/arc-timeline";
import { GraduationCap, Sparkles } from "lucide-react";

const TIMELINE: ArcTimelineItem[] = [
    {
        time: "2553",
        steps: [
            {
                icon: <Sparkles width={20} height={20} />,
                content:
                    "อนุบาล 1 ที่ ศูนย์พัฒนาเด็กเล็ก ที่วัดร่องกู่",
            },
        ],
    },
    {
        time: "2554",
        steps: [
            {
                icon: <Sparkles width={20} height={20} />,
                content: "ย้ายมาต่ออนุบาล 2 ที่ โรงเรียนป่างิ้ววิทยา",
            },
        ],
    },
    {
        time: "2556",
        steps: [
            {
                icon: <Sparkles width={20} height={20} />,
                content:
                    "ต่อ ประถมศึกษาปีที่ 1 ที่โรงเรียนป่างิ้ว โรงเรียนเดิม",
            },
        ],
    },
    {
        time: "2562",
        steps: [
            {
                icon: <Sparkles width={20} height={20} />,
                content:
                    "ต่อ มัธยมศึกษาปีที่ 1 ที่โรงเรียนป่างิ้ว โรงเรียนเดิม",
            },
        ],
    },
    {
        time: "2565",
        steps: [
            {
                icon: <Sparkles width={20} height={20} />,
                content:
                    "มาต่อสายอาชีวะ ที่วิทยาลัยเทคนิคเวียงป่าเป้าในระดับชั้น ปวช. 1",
            },
        ],
    },
    {
        time: "2568",
        steps: [
            {
                icon: <Sparkles width={20} height={20} />,
                content:
                    "เรียนต่อที่วิทยาลัยเทคนิคเวียงป่าเป้า ในระดับชั้น ปวส. 1",
            },
        ],
    },
];

export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6">เกี่ยวกับฉัน</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        ในส่วนนี้ผมจะนำเสนอประสบการณ์ในการพัฒนาเว็บไซต์โดยย่อ ซึ่งผมฝึกเขียนเว็บประมาณจะสองปีได้แล้วครับ ซึ่งผมก็พยายามพัฒนาตัวเองอยู่เรื่อยๆ ครับ
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="flex flex-col gap-6">
                        <div className=" w-96 h-96 rounded-md overflow-hidden shadow-lg/50 shadow-primary/40 hover:shadow-lg hover:shadow-primary/60 transition-all hover:scale-105 duration-300">
                            <Image
                                height={500}
                                width={500}
                                src="/images/IMG_20250530_204745_369.jpg"
                                alt="Nimit Suwansri"
                                className="object-cover"
                            />

                        </div>
                        {/* <div className="flex items-center gap-2">
                            <p className="text-2xl font-bold">ชื่อ</p>
                            <p className="text-2xl font-medium">นิมิตร</p>
                        </div> */}
                    </div>

                    <div>
                        <p className="text-lg text-muted-foreground mb-6">
                            สวัสดีครับ! ผมชื่อ นิมิตร สุวรรณศรี หรือเรียกชื่อเล่นว่า มิตร ก็ได้ครับ ผมเริ่มสนใจในการพัฒนา
                            เว็บไซต์ก็ตอนอยู่ ปวช. 1 และผมก็เริ่มฝึกเขียนเว็บไซต์จริงจังๆ ตอนอยู่กลางเทอมของ ปวช. 2 ครับ
                            ผมก็เริ่มจากการเขียน HTML และ CSS ก่อนครับ หลังจากนั้นก็เริ่มฝึกเขียน JavaScript พอเริ่ม
                            เขียน JavaScript ได้สักพักก็ลองไปฝีกเขียน React พอผมเขียน React ได้สักพัก ก็ไปเห็นเฟรมเวิร์ก
                            อย่าง Next.js ก็เลยลองไปกระโดดฝีกเขียน Next.js เลยครับ ปัจจุบันผมก็เขียน Next.js นี่
                            แหละครับ พออยู่ ปวช. 3 เทอม 2 ครูก็ให้ทำ Project จบ ปวช. 3 ผมก็ใช้ Stack อย่าง Next.js นี่
                            แหละครับ และก็ได้ลองขี้น Vercel และใช้คลาวด์อย่าง TiDB Cloud ในการเก็บฐานข้อมูล
                            และใช้ Vercel Blob เก็บไฟล์ภาพครับ และก็มีแวะไปฝีก PHP เพราะตอนนั้นไปแข่งเขาให้ใช้ PHP XAMPP {" "}
                            <Link
                                href="http://www2.chainat.ac.th/vecskills/pages/my_cert_college_show_l3.php?y_id=2567&l_id=3&p_id=57&s_id=4&c_id=1357116101&ch_id=1357016101"
                                target="_blank" rel="noopener noreferrer"
                                className=" text-rose-700/65 hover:underline hover:text-rose-500 transition-colors duration-200 hover:font-medium"
                            >
                                ทักษะการเขียนโปรแกรมคอมพิวเตอร์
                            </Link>
                            {" "}ซึ่งผมได้ที่สองครับ แต่ PHP ผมคิดว่าผมอาจจะฝึกไม่เยอะเท่า JavaScript ครับผม
                        </p>
                    </div>


                </div>

                <div>
                    <h2 className="text-2xl flex items-center gap-2 justify-center font-semibold "><GraduationCap />ระดับการศึกษา</h2>

                    <ArcTimeline
                        data={TIMELINE}
                        defaultActiveStep={{ time: "2025 Q2", stepIndex: 0 }}
                        arcConfig={{
                            circleWidth: 4500,
                            angleBetweenMinorSteps: 0.4,
                            lineCountFillBetweenSteps: 8,
                            boundaryPlaceholderLinesCount: 50,
                        }}
                    />
                </div>

            </div>
        </section>
    )
}
