import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "outline" | "ghost"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-1 disabled:pointer-events-none disabled:opacity-50",
                    {
                        // Primary VC-gradient button
                        "bg-[linear-gradient(180deg,#6C7CFF,#4F63FF)] text-white shadow-[0_10px_40px_rgba(91,127,255,0.35)] hover:-translate-y-[2px] hover:shadow-[0_20px_60px_rgba(91,127,255,0.45)]": variant === "default",
                        "bg-surface-1 text-text-main hover:bg-surface-2 border border-surface-2/50": variant === "secondary",
                        "border border-surface-2 bg-[rgba(255,255,255,0.02)] backdrop-blur-[10px] hover:bg-[rgba(255,255,255,0.06)] text-text-main hover:border-[rgba(91,127,255,0.3)] shadow-[0_5px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]": variant === "outline",
                        "hover:bg-surface-1 hover:text-text-main text-text-dim": variant === "ghost",
                        "h-10 px-4 py-2": size === "default",
                        "h-8 rounded-lg px-3 text-xs": size === "sm",
                        "h-14 rounded-xl px-8 text-base": size === "lg",
                        "h-9 w-9": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
