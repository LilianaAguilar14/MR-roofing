export function MRRoofingLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* House base */}
          <rect x="15" y="35" width="30" height="20" fill="currentColor" />

          {/* Roof */}
          <path d="M10 35 L30 15 L50 35 Z" fill="currentColor" />

          {/* Chimney */}
          <rect x="38" y="20" width="6" height="15" fill="currentColor" />

          {/* Windows */}
          <rect x="20" y="40" width="6" height="6" fill="white" />
          <rect x="34" y="40" width="6" height="6" fill="white" />

          {/* Door */}
          <rect x="27" y="45" width="6" height="10" fill="white" />
        </svg>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">M&R ROOFING</h1>
        <p className="text-sm text-gray-500">INC</p>
      </div>
    </div>
  )
}
