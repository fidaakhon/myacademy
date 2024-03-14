"use client"
import { BackgroundBeams } from '@/components/ui/background-beams';
import { useState, useEffect } from 'react';


function page({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const [show, setShow] = useState({
        fundamentals: false,
        dailyLife: false,
    });

    useEffect(() => {
        if (slug === 'arabic_fundamentals') {
            setShow({ fundamentals: true, dailyLife: false });
        } else if (slug === 'arabic_daily_life') {
            setShow({ fundamentals: false, dailyLife: true });
        }
    }, [slug]);

    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
            {show.fundamentals && (
                <div className="max-w-2xl mx-auto p-4 relative z-10">
                    <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                        Arabic Fundamentals
                    </h1>
                </div>
            )}
            {show.dailyLife && (
                <div className="max-w-2xl mx-auto p-4 relative z-10">
                    <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                        Arabic Daily Life
                    </h1>
                </div>
            )}
        </div>
    )
}

export default page