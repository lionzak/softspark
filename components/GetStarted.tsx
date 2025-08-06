'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


const GetStarted = () => {
    const router = useRouter();
    return (
        <section className="mt-8 bg-backgroundLight py-12 rounded-lg">
            <h2 className="text-3xl font-bold text-center text-primary">Get started with SoftSpark</h2>
            <div className="flex justify-center">
                <button className="mt-6 bg-secondary text-white px-10 py-2 rounded hover:bg-primary transition" onClick={() => router.push("/contact")}>
                    Get Started
                </button>
            </div>
        </section>
    )
}

export default GetStarted
