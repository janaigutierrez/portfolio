import { Star, Quote } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export default function ReviewCard({ review }) {
    const { t } = useTranslation()

    return (
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md border border-gray-600 rounded-xl p-6 text-center hover:border-sea-green transition-all duration-300">

            {/* Stars */}
            <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                    />
                ))}
            </div>

            {/* Quote */}
            <Quote className="w-8 h-8 text-sea-green mx-auto mb-4 opacity-60" />

            {/* Review Text */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{t(`reviews.${review.key}.text`)}"
            </p>

            {/* Client Info */}
            <div className="border-t border-gray-600 pt-4">
                <h4 className="font-bold text-white text-sm mb-1">
                    {t(`reviews.${review.key}.name`)}
                </h4>
                <p className="text-xs text-gray-400 mb-2">
                    {t(`reviews.${review.key}.role`)}
                </p>
                <div className="flex items-center justify-center space-x-2">
                    <span className="bg-sea-green bg-opacity-20 text-sea-green px-2 py-1 rounded text-xs font-medium">
                        {t(`reviews.${review.key}.project`)}
                    </span>
                    <span className="text-xs text-gray-500">
                        {review.date}
                    </span>
                </div>
            </div>
        </div>
    )
}