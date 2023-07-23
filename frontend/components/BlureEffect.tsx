import React from "react"

interface BlureEffectProps {
  children: React.ReactNode;
}

const BlureEffect: React.FC<BlureEffectProps> = ({ children }) => {
  return (
    <div className="fixed bg-neutral-400/40 w-full h-screen z-30 flex flex-col items-center justify-center p-6">
      {children}
    </div>
  )
}

export default BlureEffect;