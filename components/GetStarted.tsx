'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'


const GetStarted = () => {
    const router = useRouter();
    return (
        <section className="mt-8 bg-backgroundLight py-10 rounded-lg">
            <Image src="/logo-circle.png" width={100} height={100} alt="Softspark logo" className="mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-center text-black">Get started with SoftSpark</h2>
            <div className="flex justify-center">
                <button className="mt-6 bg-secondary text-black font-bold        px-10 py-2 rounded hover:bg-primary hover:text-white transition" onClick={() => router.push("/contact")}>
                    Get Started
                </button>
            </div>
        </section>
    )
}

export default GetStarted
