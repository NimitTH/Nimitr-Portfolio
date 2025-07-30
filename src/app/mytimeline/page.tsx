import { FamiconsCalendarOutline, TokenBrandedSource } from '@/components/icon';
import React from 'react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import Image from 'next/image';

export default function MyTimeLinePage() {
    return (
        <div className="min-h-screen bg-background relative">
            {/* Header */}
            <div className="border-b border-border/50">
                <div className="max-w-5xl mx-auto relative">
                    <div className="p-3 flex items-center justify-between">
                        <h1 className="text-3xl font-semibold tracking-tight">ประวัติของผมเองครับ</h1>

                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-10">
                <div className="relative">
                    <div className="relative">

                        {/* วันเกิด */}
                        <div className="flex flex-col md:flex-row gap-y-6">
                            <div className="md:w-48 flex-shrink-0">
                                <div className="md:sticky md:top-8 pb-10">
                                    <time className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-3">
                                        27 เมษายน 2006
                                    </time>

                                </div>
                            </div>

                            {/* Right side - Content */}
                            <div className="flex-1 md:pl-8 relative pb-10">
                                {/* Vertical timeline line */}
                                <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                                    {/* Timeline dot */}
                                    <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                                </div>

                                <div className="space-y-6">
                                    <div className="relative z-10 flex flex-col gap-2">
                                        <h2 className="text-2xl font-semibold tracking-tight text-balance">
                                            เกิดว่ะไอ้น้อง
                                        </h2>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            <span
                                                className="h-6 w-fit px-2 text-xs font-medium bg-muted text-muted-foreground rounded-full border flex items-center justify-center"
                                            >
                                                วันเกิด
                                            </span>
                                        </div>

                                    </div>
                                    <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance">
                                        <blockquote className="mt-6 border-l-2 pl-6 italic">
                                            &quot;ผมเกิดเมื่อวันที่ 27 เมษายน 2006 ที่จังหวัดเชียงราย ประเทศไทย และเป็นลูกคนที่ 1 และคนเดียวแหละมั้งครับ&quot;
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* เรียนชั้นประถม. */}
                        <div className="flex flex-col md:flex-row gap-y-6">
                            <div className="md:w-48 flex-shrink-0">
                                <div className="md:sticky md:top-8 pb-10">
                                    <time className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-3">
                                        27 เมษายน 2006
                                    </time>

                                </div>
                            </div>

                            <div className="flex-1 md:pl-8 relative pb-10">
                                <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                                    <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                                </div>

                                <div className="space-y-6">
                                    <div className="relative z-10 flex flex-col gap-2">
                                        <h2 className="text-2xl font-semibold tracking-tight text-balance">
                                            เข้าเรียนระดับชั้น ประถมศึกษา ที่ รร.ป่างิ้ววิทยา
                                        </h2>

                                        <div className="flex flex-wrap gap-2">
                                            <span
                                                className="h-6 w-fit px-2 text-xs font-medium bg-muted text-muted-foreground rounded-full border flex items-center justify-center"
                                            >
                                                การศีกษา
                                            </span>
                                        </div>

                                    </div>
                                    <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance">
                                        <blockquote className="mt-6 border-l-2 pl-6 italic">
                                            &quot;ผมจำความไม่ได้&quot;
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* เรียนชั้นมัธยม. */}
                        <div className="flex flex-col md:flex-row gap-y-6">
                            <div className="md:w-48 flex-shrink-0">
                                <div className="md:sticky md:top-8 pb-10">
                                    <time className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-3">
                                        14 พฤษาภาคม 2562
                                    </time>

                                </div>
                            </div>

                            <div className="flex-1 md:pl-8 relative pb-10">
                                <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                                    <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                                </div>

                                <div className="space-y-6">
                                    <div className="relative z-10 flex flex-col gap-2">
                                        <h2 className="text-2xl font-semibold tracking-tight text-balance">
                                            เข้าเรียนระดับชั้น มัธยมศึกษาตอนต้น ที่ รร.ป่างิ้ววิทยา
                                        </h2>

                                        <div className="flex flex-wrap gap-2">
                                            <span
                                                className="h-6 w-fit px-2 text-xs font-medium bg-muted text-muted-foreground rounded-full border flex items-center justify-center"
                                            >
                                                การศีกษา
                                            </span>
                                        </div>

                                    </div>
                                    <div>
                                        <blockquote className="mt-6 border-l-2 pl-6 italic">
                                            &quot;ก็พอขึ้นมัธยมต้นผมก็ต่อที่เดิมเลยเพราะใกล้บ้านผม อิอิ&quot;
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* เรียนชั้นปวช. */}
                        <div className="flex flex-col md:flex-row gap-y-6">
                            <div className="md:w-48 flex-shrink-0">
                                <div className="md:sticky md:top-8 pb-10">
                                    <time className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-3">
                                        16 พฤษาภาคม 2565
                                    </time>

                                </div>
                            </div>

                            <div className="flex-1 md:pl-8 relative pb-10">
                                <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                                    <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                                </div>

                                <div className="space-y-6">
                                    <div className="relative z-10 flex flex-col gap-2">
                                        <h2 className="text-2xl font-semibold tracking-tight text-balance">
                                            เข้าเรียนระดับชั้น ปวช. ที่ วท.เทคนิคเวียงป่าเป้า
                                        </h2>

                                        <div className="flex flex-wrap gap-2">
                                            <span
                                                className="h-6 w-fit px-2 text-xs font-medium bg-muted text-muted-foreground rounded-full border flex items-center justify-center"
                                            >
                                                การศีกษา
                                            </span>
                                        </div>

                                    </div>
                                    <div>
                                        <blockquote className="mt-6 border-l-2 pl-6 italic">
                                            &quot;ที่ผมไม่ไปต่อสาย ม.4 เพราะผมอยากเรียนอะไรที่เกี่ยวกับคอม กับวิทยาเทคนิคมันใกล้บ้านผมดี :)&quot;
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* แข่งขันทักษะ */}
                        <div className="flex flex-col md:flex-row gap-y-6">
                            <div className="md:w-48 flex-shrink-0">
                                <div className="md:sticky md:top-8 pb-10">
                                    <time className="text-sm font-medium text-muted-foreground mb-3">
                                        6 พฤศจิกายน 2567 ถึงวันที่ <br /> 7 พฤศจิกายน 2567
                                    </time>

                                </div>
                            </div>

                            <div className="flex-1 md:pl-8 relative pb-10">
                                <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                                    <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                                </div>

                                <div className="space-y-6">
                                    <div className="relative z-10 flex flex-col gap-2">
                                        <h2 className="text-2xl font-semibold tracking-tight text-balance">
                                            ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช. ประเภท ทีม ปีการศึกษา 2567
                                        </h2>

                                        <div className="flex flex-wrap gap-2">
                                            <span
                                                className="h-6 w-fit px-2 text-xs font-medium bg-muted text-muted-foreground rounded-full border flex items-center justify-center"
                                            >
                                                แข่งขันทักษะ
                                            </span>
                                        </div>

                                    </div>

                                    <div>
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="w-full"
                                            defaultValue="item-1"
                                        >
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger className='pt-0'><span className='flex items-center gap-1'><TokenBrandedSource className='w-6 h-6' />แหล่งที่มา</span></AccordionTrigger>
                                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                                    <ul className="ml-6 list-disc space-y-2 [&>li]:text-balance">
                                                        <li className='hover:underline'><Link href="http://www2.chainat.ac.th/vecskills/pages/level3_contest_list_detail.php?c_id=1357016201&lh_id=3&st_id=4&sma_id=7&smi_id=1&sl_id=1&p_id=57&s_id=4&l_id=3">ข้อมูลการแข่งขัน</Link></li>
                                                        <li className='hover:underline'><Link href="http://www2.chainat.ac.th/vecskills/pages/level3_contest_trophy2.php?p_id=57&s_id=4&l_id=3">รายงานผลการแข่งขันรายทักษะ</Link></li>
                                                        <li className='hover:underline'><Link href="https://www.facebook.com/photo?fbid=1091793289306470&set=pcb.1091793355973130">โพสต์ของ แผนกเทคโนโลยีสารสนเทศ</Link></li>
                                                        <li className='hover:underline'><Link href="https://www.facebook.com/wpptech.CEI/posts/pfbid02Uhs11YhNA2n9xNrcT2qtQXKdFYN3F8xziRrXPrAbKpsozY77AFVMnRwL5QebzyVXl">โพสต์ของ วิทยาลัยเทคนิคเวียงป่าเป้า</Link></li>
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>

                                        <Link href="https://www.facebook.com/photo/?fbid=1083169066934216&set=pcb.1083177193600070" className='overflow-hidden mt-4'>
                                            <Image
                                                src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/486860944_1185582623359526_7446013450316964797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEuwq-wjKmSnicmyicdvUvU83PbVpozU1Dzc9tWmjNTUHwWTEY3OgdJUq0sfiwactKYf4kv4MJhzJ1ADxB77RK3&_nc_ohc=GlOdKGf1mLsQ7kNvwFWm0rj&_nc_oc=AdmJ_mSOJxKlHKkuw11Vn8l-F3tE-7M9QgPQ4veNC5gVVYu_VETKjdoQx1grj1wFernh49c6PHzuzYRavYgmIxh-&_nc_zt=23&_nc_ht=scontent.fbkk5-7.fna&_nc_gid=Bq1KpJo1nruH53ma0_LrZA&oh=00_AfTFJ2ZcBllDU3M7mNu-OFRp0d_cTe22BIULtyQee5XeeA&oe=6886C0BD"
                                                alt='การแข่งขันทักษะ'
                                                width={800}
                                                height={600}
                                                className='w-full h-auto object-cover rounded-md '
                                            />
                                            <p className='text-center mt-5 italic'>ภาพบรรยากาศการแข่งขันทักษะ  </p>
                                        </Link>
                                        <blockquote className="mt-6 border-l-2 pl-6 italic">
                                            &quot;ผมได้มีโอกาสได้ไปแข่งขันทักษะของอาชีวะ ซึ่งหัวข้อจะเกี่ยวกับการสร้างเว็บสั่งอาหารออนไลน์โดยให้ใช้
                                            Stack อย่าง HTML CSS Bootstrap 5 PHP XAMPP และฐานข้อมูลตัวจริงที่เขาให้มา ผมมีเวลา 1 สัปดาห์
                                            ในการเตรียมตัวฝึกซ้อมเขียนโค้ด ไหนก็ตอนเตรียมตัวนำเสนออีก ในตอนนั้นผมยอมรับว่า ยังอ่อน PHP อยู่
                                            ผมอาจจะไม่ได้แตะ PHP เลยเพราะมั่วไปฝึก JavaScript React.js Next.js อย่างเดียวเลย ผมเลยพยายฝึก
                                            เท่าที่ได้ กับฝึกเท่าที่ตัวเองไหว โดยวิธีที่ผมใช้คือจำโค้ด จำโค้ดของรุ่นพี่ผมที่เคยไปแข่ง และผมก็พยายเข้าใจ 
                                            Syntax คำสั่งนี้ทำอะไรได้ กับทำความเข้าใจว่าอะไรเชื่อมอะไรด้วย และพยายเข้าใจบริบทภาพรวมของโค้ด
                                            ตอนที่ฝึก 1 สัปดาห์ ผมก็มีท้อบ้าง แต่ผมก็คิดในแง่ดีทำไมเราไม่ลองทำให้เต็มที่ล่ะ แทนที่จะมานั่งท้อ ก็เลย
                                            ตั้งใจฝีกอย่างเต็มที่ พอถึงวันแข่งผมก็เลยจากการสร้างไฟล์ db.php มั้ง เป็นตัว connect กับ phpmyadmin
                                            xmapp ก่อนเลยครับแล้วผมก็ทำระบบลงทะเบียน และต่อมาก็ระบบล็อกอินและก็มีบัคตรงนี้แหละครับผม
                                            ไม่สามารผ่านตรงนี้ไปได้ และก็เสียเวลานั้งแก้บัคซึ่งผมก็จำ error ไม่ได้ล่ะครับ ผมเลยไปในส่วนของแสดงสินค้า
                                            เลยล่ะกัน ซึ่งก็ทำสำเร็จ แต่ก็หมดเวลาซะแล้ว สายไปที่จะไปแต่งส่วนของแสดงสินค้า แถมสุ่นจับได้นำเสนอ
                                            เป็นวิลัยแรกอีก แต่ก็ดีผมจะได้นำเสนอแล้วจบๆไป ตอนนำเสนอผมก็นำเสนอเท่าที่มี และตอนนั้นก็คิดว่าต้อง
                                            ได้ที่โหล่แน่นอน พอถึงตอนประกาศผล ทีมที่ได้ที่ 1 นี้โครตจะเก่งทำตามในโจทย์ทั้งหมดเป๊ะ ส่วนทีมพวกผม
                                            ได้ที่ 2 แบบงงๆ อาจจะเป็นเพราะว่าคนที่เข้ามาแข่งน้อยด้วยมั้งครับ มีอยู่ 3 ทีม และก็ทีมที่ได้ที่ 3 เขาสร้างได้
                                            แค่หน้าแรกเองมั้ง สร้างใน 1 ชั่วโมง หลังจากนั้นทีมเขาน่าจะนั้งรอเรื่อยๆ พอมาดูต้องเองก็ไม่ต่างจากเขานี้ว่า 
                                            แต่ก็คิดว่าพยายมากกว่าเขาแล้วกัน จริงๆผมต้องขอบคุณครูที่ให้โอกาสให้ผมไปแข่งทักษะถึงแม้ว่าจะตะเกีย
                                            กตะกายมากๆ แต่ก็ถือว่าเป็นประสบการณ์ และก็พัฒนาทักษะการเขียนโค้ดด้วยครับผม :)&quot;
                                        </blockquote>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}