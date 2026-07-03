import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline" | "success" | "warning" | "danger"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-1 focus:ring-offset-2",
                {
                    "border-transparent bg-accent-1/10 text-accent-1": variant === "default",
                    "border-transparent bg-surface-1 text-text-dim hover:bg-surface-2":
                        variant === "secondary",
                    "text-text-main border-surface-2": variant === "outline",
                    "border-transparent bg-success/10 text-success": variant === "success",
                    "border-transparent bg-warning/10 text-warning": variant === "warning",
                    "border-transparent bg-danger/10 text-danger": variant === "danger",
                },
                className
            )}
            {...props}
        />
    )
}

export { Badge }
