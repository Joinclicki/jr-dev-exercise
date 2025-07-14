"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating?: number
  onRate?: (rating: number) => void
  readonly?: boolean
  size?: "sm" | "md" | "lg"
}

export default function StarRating({ rating = 0, onRate, readonly = false, size = "md" }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0)

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const handleClick = (value: number) => {
    if (!readonly && onRate) {
      onRate(value)
    }
  }

  const handleMouseEnter = (value: number) => {
    if (!readonly) {
      setHoverRating(value)
    }
  }

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0)
    }
  }

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hoverRating || rating)
        return (
          <button
            key={star}
            type="button"
            className={cn(
              "transition-colors duration-150",
              readonly ? "cursor-default" : "cursor-pointer hover:scale-110 transition-transform",
              sizeClasses[size],
            )}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            disabled={readonly}
          >
            <Star
              className={cn(
                "transition-colors duration-150",
                isFilled ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-300",
              )}
            />
          </button>
        )
      })}
      {rating > 0 && <span className="ml-2 text-sm text-gray-600 font-medium">{rating}/5</span>}
    </div>
  )
}
