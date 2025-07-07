'use client'

import { useRef } from 'react'
import { UploadCloud } from 'lucide-react'

type FileUploaderProps = {
  onChange: (files: FileList) => void
}

export function FileUploader({ onChange }: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files.length > 0) {
      onChange(e.dataTransfer.files)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onChange(e.target.files)
    }
  }

  return (
    <div
      className="w-full h-32 border-2 border-dashed border-black/20 bg-white rounded-lg flex flex-col items-center justify-center text-center px-4 cursor-pointer hover:bg-black/10"
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <UploadCloud className="w-6 h-6 text-muted-foreground mb-2" />
      <p className="text-xs text-muted-foreground">
        Choose a file or drag & drop it here.<br />
      </p>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  )
}
