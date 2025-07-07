// components/navigation/NavBreadcrumbs.tsx
'use client'

import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Page = {
  title: string
  link: string
  isPage: boolean
  separator?: boolean
}

type NavBreadcrumbsProps = {
  pages: Page[]
}

export function NavBreadcrumbs({ pages }: NavBreadcrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pages.map((page, index) => (
          <div className="flex items-center gap-2" key={index}>
            {page.isPage ? (
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <Link href={page.link}>{page.title}</Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={page.link}>{page.title}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
            {page.separator && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
