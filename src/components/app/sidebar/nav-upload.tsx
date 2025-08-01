// components/navigation/SidebarUpload.tsx (or similar path)

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FileUploader } from "@/components/app/sidebar/file-uploader"
// import { SidebarInput } from "@/components/ui/sidebar" // will be used later

export function SidebarUpload() {
  const handleFileUpload = (files: FileList) => {
    console.log("Uploaded file(s):", files)
    // You can add validation, preview, or backend handling here
  }

  return (
    <Card className="gap-2 py-4 shadow-none">
      <CardHeader className="px-4">
        <CardTitle className="text-sm">Data Upload</CardTitle>
        <CardDescription className="text-xs">
          Upload XLSX, XLS or CSV files.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form>
          <div className="grid gap-2.5">
            <FileUploader onChange={handleFileUpload} />
            <Button
              className="bg-sidebar-primary text-sidebar-primary-foreground w-full shadow-none"
              size="sm"
              type="submit"
            >
              Upload File
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
