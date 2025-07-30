"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { useState } from "react"
import { Fa7SolidPhoneVolume } from "./icon"
import Link from "next/link"
import { Label } from "./ui/label"

const contactInfo = [
    {
        icon: Github,
        title: "GitHub",
        value: "github.com/NimitTH",
        href: "https://github.com/NimitTH",
    },
    {
        icon: Mail,
        title: "Email",
        value: "nimtzth@gmail.com",
        href: "mailto:nimit@gmail.com",
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+66 096-948-5389",
        href: "tel:+66969485389",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Chiang Rai, Thailand",
        href: "#",
    },

]

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setSubmitStatus("success")
            setFormData({ name: "", email: "", subject: "", message: "" })
        } catch (error) {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <Fa7SolidPhoneVolume className="mb-3.5 w-13 h-13 mx-auto text-emerald-400 drop-shadow-lg/50 drop-shadow-teal-400/90" />
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6">ช่องทางติดต่อฉัน</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        สามารถติดต่อผมได้ผ่านทางอีเมล หรือโทรศัพท์ตามข้อมูลด้านล่างนี้ หรือถ้าต้องการให้ผมช่วยอะไร
                        สามารถส่งข้อความมาที่ฟอร์มด้านล่างนี้ได้เลยครับ
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">


                    {/* Contact Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">ส่งข้อความถึงฉัน</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name">ชื่อ *</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="subject">เรื่อง *</Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="message">ข้อความ *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="mt-1"
                                    />
                                </div>

                                {submitStatus === "success" && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                                        <p className="text-green-800">ขอบคุณ! ข้อความของคุณถูกส่งเรียบร้อยแล้ว</p>
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                                        <p className="text-red-800">ขออภัย เกิดข้อผิดพลาดในการส่งข้อความของคุณ โปรดลองอีกครั้ง</p>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            ส่งข้อความ
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">ข้อมูลการติดต่อ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                <info.icon className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{info.title}</h3>
                                                {info.href !== "#" ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-600">{info.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

        </section >
    )
}
