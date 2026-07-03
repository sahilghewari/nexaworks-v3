import * as React from "react"
import Image from "next/image"

export function GlimpseLogo({ className }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <Image 
                src="/logos/bgless.png"
                alt="NexaWorks Logo"
                fill
                className="object-contain"
                unoptimized
            />
        </div>
    )
}
