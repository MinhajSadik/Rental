import React from "react"

interface BlureEffectProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const BlureEffect: React.FC<BlureEffectProps> = ({ children, onClick }) => {
  return (
    <div 
      className="bg-neutral-400/40 w-full h-screen z-30 flex flex-col items-center justify-center p-6 fixed left-0 top-0"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default BlureEffect;