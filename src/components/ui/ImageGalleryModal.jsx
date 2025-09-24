import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export default function ImageGalleryModal({ project, isOpen, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)

    if (!isOpen || !project?.images || project.images.length === 0) return null

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        )
        setIsZoomed(false)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        )
        setIsZoomed(false)
    }

    const goToImage = (index) => {
        setCurrentImageIndex(index)
        setIsZoomed(false)
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Modal Content */}
                <div
                    className="relative w-full max-w-5xl max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent z-10 p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                <p className="text-sm text-gray-300">
                                    {currentImageIndex + 1} / {project.images.length}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative h-[70vh] flex items-center justify-center bg-gray-800">
                        <img
                            src={project.images[currentImageIndex]}
                            alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                            className={`max-w-full max-h-full object-contain transition-transform duration-300 cursor-pointer
                                ${isZoomed ? 'scale-150' : 'scale-100 hover:scale-105'}`}
                            onClick={() => setIsZoomed(!isZoomed)}
                            onError={(e) => {
                                e.target.src = '/placeholder-project.jpg' // fallback image
                            }}
                        />

                        {/* Zoom indicator */}
                        {!isZoomed && (
                            <button
                                onClick={() => setIsZoomed(true)}
                                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                            >
                                <ZoomIn size={20} />
                            </button>
                        )}

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Thumbnails */}
                    {project.images.length > 1 && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                                {project.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToImage(index)}
                                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all
                                            ${index === currentImageIndex
                                                ? 'border-sea-green scale-110'
                                                : 'border-gray-600 hover:border-gray-400'
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = '/placeholder-project.jpg'
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Keyboard navigation hint */}
                <div className="absolute bottom-4 left-4 text-gray-400 text-sm">
                    <p>← → Navigate • ESC Close • Click to zoom</p>
                </div>
            </div>
        </>
    )
}