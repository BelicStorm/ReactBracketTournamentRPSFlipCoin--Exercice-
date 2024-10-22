import React from "react"

// Custom Button component
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' }>(
    ({ className, variant = 'default', ...props }, ref) => {
        const baseStyles = `
        inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50
        p-[8px] min-w-[100px]
      `
        const variantStyles = variant === 'default'
            ? "text-primary-foreground bg-black text-white"
            : "border border-input hover:bg-black hover:text-white"

        return (
            <button className={`${baseStyles} ${variantStyles} ${className}`} ref={ref}          {...props} />
        )
    }
)

export default Button