import Image from "next/image"
import Link from "next/link"
import { FluentPerson28Filled } from "./icon"

export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center mb-16">
                    <FluentPerson28Filled className='mb-3.5 w-14 h-14 mx-auto text-blue-400 drop-shadow-lg drop-shadow-sky-300' />
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6">เกี่ยวกับฉัน</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        ในส่วนนี้ผมจะนำเสนอประสบการณ์ในการพัฒนาเว็บไซต์โดยย่อ ซึ่งผมฝึกเขียนเว็บประมาณจะสองปีได้แล้วครับ ซึ่งผมก็พยายามพัฒนาตัวเองอยู่เรื่อยๆ ครับ
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="mx-auto w-96 h-96 rounded-md overflow-hidden shadow-lg/50 shadow-primary/40 hover:shadow-lg hover:shadow-primary/60 transition-all hover:scale-105 duration-300">
                        <Image
                            height={500}
                            width={500}
                            src="/images/IMG_20250330_195745_036.jpg"
                            alt="Nimit Suwansri"
                            className="object-cover"
                        />
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
                        <p className="text-lg text-muted-foreground mb-6">
                            ถ้าพูดถึงจุดเด่นของผมคือ ผมเป็นคนขยัน และมีความรับผิดชอบสูงครับผมจะพยายามทำงานให้
                            เสร็จตามกำหนดเวลา และพยายามทำให้ดีที่สุดครับ หรือหมกมุ่นกับสิ่งที่ทำอยู่ครับ
                            และผมก็เป็นคนที่ชอบเรียนรู้สิ่งใหม่ๆ อยู่เสมอครับ จุดที่ต้องปรับปรุงของผมคือ
                            ผมเป็นคนที่ไม่ค่อยกล้าแสดงออก และเป็นคน {" "}
                            <Link
                                href="https://www.google.com/search?q=perfectionist+%E0%B8%84%E0%B8%B7%E0%B8%AD&rlz=1C1VDKB_thTH1161TH1161&oq=perfectionist+%E0%B8%84%E0%B8%B7%E0%B8%AD&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgcIARAAGIAEMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMgoICBAAGIAEGKIE0gELNTI0MjEzajBqMTWoAgiwAgHxBUqeH-7X-YSV8QVKnh_u1_mElQ&sourceid=chrome&ie=UTF-8"
                                target="_blank" rel="noopener noreferrer"
                                className=" text-yellow-700/65 hover:underline hover:text-amber-500 transition-colors duration-200 hover:font-medium"
                            >
                                Perfectionist
                            </Link>
                            {" "}ด้วยครับ ผมเลยพยายามปรับปรุงตัวเองอยู่เรื่อยๆ ครับ
                        </p>
                    </div>


                </div>

                {/* <div className="flex justify-center">
                    <Link href="/mytimeline" className="flex items-center gap-2">

                        <RainbowButton className="transition-transform hover:scale-105 duration-300">ประวัติอย่างละเอียด</RainbowButton>

                    </Link>

                </div> */}
            </div>
        </section>
    )
}
