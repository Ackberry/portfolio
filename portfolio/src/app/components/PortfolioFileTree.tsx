'use client'

import { cn } from '@/lib/utils'
import {
  ChevronDown,
  ChevronRight,
  Ellipsis,
  File as FileTypeIcon,
  FileCode2,
  FileText,
  Folder as FolderTypeIcon,
  FolderOpen as FolderOpenTypeIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  File,
  Folder,
  Tree,
  type TreeViewElement,
} from './ui/file-tree'

const treeElements: TreeViewElement[] = [
  {
    id: 'portfolio',
    name: 'portfolio',
    isSelectable: false,
    children: [
      { id: 'gitignore', name: '.gitignore' },
      { id: 'readme-markdown', name: 'readme.markdown' },
      { id: 'next-config', name: 'next.config.ts' },
      { id: 'package-json', name: 'package.json' },
      { id: 'package-lock', name: 'package-lock.json' },
      {
        id: 'src',
        name: 'src',
        children: [
          {
            id: 'app',
            name: 'app',
            children: [
              { id: 'landing', name: 'page.tsx' },
              { id: 'home-page', name: 'home/page.tsx' },
              { id: 'projects', name: 'projects/page.tsx' },
              { id: 'skills', name: 'skills/page.tsx' },
              { id: 'experience', name: 'experience/page.tsx' },
              { id: 'layout', name: 'layout.tsx' },
            ],
          },
          {
            id: 'components',
            name: 'components',
            children: [
              { id: 'flickering-grid', name: 'FlickeringGrid.tsx' },
              { id: 'portfolio-file-tree', name: 'PortfolioFileTree.tsx' },
              { id: 'animated-dock', name: 'AnimatedDock.tsx' },
            ],
          },
        ],
      },
      {
        id: 'public',
        name: 'public',
        children: [
          { id: 'favicon', name: 'favicon.ico' },
          { id: 'next-svg', name: 'next.svg' },
        ],
      },
    ],
  },
]

function renderTree(
  elements: TreeViewElement[],
  onFileClick: (id: string) => void,
) {
  return elements.map((element) => {
    if (element.children && element.children.length > 0) {
      return (
        <Folder
          key={element.id}
          value={element.id}
          element={element.name}
          className="h-7 w-full rounded-sm px-1 text-[13px] font-medium text-gray-300 hover:bg-white/8 hover:text-white"
          closeIcon={
            <span className="inline-flex items-center gap-1">
              <ChevronRight className="size-3 text-gray-500" />
              <FolderTypeIcon className="size-3.5 text-blue-300/80" />
            </span>
          }
          openIcon={
            <span className="inline-flex items-center gap-1">
              <ChevronDown className="size-3 text-gray-400" />
              <FolderOpenTypeIcon className="size-3.5 text-blue-300/90" />
            </span>
          }
        >
          {renderTree(element.children, onFileClick)}
        </Folder>
      )
    }

    return (
      <File
        key={element.id}
        value={element.id}
        className="h-7 w-full rounded-sm px-1 text-[13px] text-gray-300 hover:bg-white/8 hover:text-white"
        fileIcon={getFileIcon(element.name)}
        onClick={() => onFileClick(element.id)}
      >
        {element.name}
      </File>
    )
  })
}

interface PortfolioFileTreeProps {
  initialSelectedId?: string
  variant?: 'floating' | 'sidebar'
  className?: string
}

export default function PortfolioFileTree({
  initialSelectedId = 'readme-markdown',
  variant = 'floating',
  className,
}: PortfolioFileTreeProps) {
  const router = useRouter()

  const handleFileClick = (id: string) => {
    if (id === 'readme-markdown') {
      router.push('/home')
    }
  }

  if (variant === 'sidebar') {
    return (
      <aside
        className={cn(
          'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f1116]/90 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl',
          className,
        )}
      >
        <div className="flex h-10 items-center justify-between border-b border-white/10 px-3">
          <span className="text-[11px] font-semibold tracking-[0.08em] text-gray-400">
            EXPLORER
          </span>
          <Ellipsis className="size-4 text-gray-500" />
        </div>

        <Tree
          className="h-[calc(100%-2.5rem)] w-full py-2"
          elements={treeElements}
          initialSelectedId={initialSelectedId}
          initialExpandedItems={['portfolio', 'src', 'app']}
          indicator={false}
        >
          {renderTree(treeElements, handleFileClick)}
        </Tree>
      </aside>
    )
  }

  return (
    <motion.aside
      className={cn(
        'fixed left-2 top-24 z-20 h-[240px] w-[180px] sm:left-4 sm:top-1/2 sm:h-[320px] sm:w-[260px] sm:-translate-y-1/2 md:h-[360px] md:w-[300px]',
        className,
      )}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="h-full w-full rounded-xl border border-white/15 bg-black/50 text-gray-200 backdrop-blur-md">
        <Tree
          className="h-full w-full py-3"
          elements={treeElements}
          initialSelectedId={initialSelectedId}
          initialExpandedItems={['portfolio', 'src', 'app']}
          indicator={false}
        >
          {renderTree(treeElements, handleFileClick)}
        </Tree>
      </div>
    </motion.aside>
  )
}

function getFileIcon(fileName: string) {
  if (
    fileName.endsWith('.tsx') ||
    fileName.endsWith('.ts') ||
    fileName.endsWith('.js') ||
    fileName.endsWith('.jsx') ||
    fileName.endsWith('.css')
  ) {
    return <FileCode2 className="size-3.5 text-cyan-300/90" />
  }

  if (fileName.endsWith('.md') || fileName.endsWith('.markdown')) {
    return <FileText className="size-3.5 text-emerald-300/90" />
  }

  return <FileTypeIcon className="size-3.5 text-gray-400" />
}
