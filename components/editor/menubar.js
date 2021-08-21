import { useEffect, useState } from 'react'
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaStrikethrough,
    FaUndo,
    FaRedo,
    FaQuoteLeft,
    FaRemoveFormat,
    FaAlignLeft,
    FaAlignCenter,
    FaAlignRight,
    FaAlignJustify,
    FaListUl,
    FaListOl,
    FaSubscript,
    FaSuperscript,
    FaCode,
    FaFileCode,
    FaGripLines
} from 'react-icons/fa'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  const fontFamilies = [
      { value: 'sans-serif', label: 'Sans-serif' },
      { value: 'serif', label: 'Serif' },
      { value: 'monospace', label: 'Monospace' },
  ]

  const headingLevels = [
      { value: '7', label: 'paragraph' },
      { value: '1', label: 'heading 1' },
      { value: '2', label: 'heading 2' },
      { value: '3', label: 'heading 3' },
      { value: '4', label: 'heading 4' },
      { value: '5', label: 'heading 5' },
      { value: '6', label: 'heading 6' },
  ]

  const [font, setFont] = useState('sans-serif')
  const [heading, setHeading] = useState({level: 7})

  const handleFontChange = (e) => {
    setFont(e.target.value)
    editor.chain().focus().setFontFamily(e.target.value).run()
  }

  const handleHeadingChange = (e) => {
    setHeading(e.target.value)
    if (editor.can().toggleHeading({level: parseInt(e.target.value, 10)})) {
        editor.chain().focus().toggleHeading({level: parseInt(e.target.value, 10)}).run()
    } else {
        editor.chain().focus().setParagraph().run()
    }
  }

  return (
    <nav className="toolbar w-full mx-auto">
      <select value={font} onChange={handleFontChange}>
        {fontFamilies.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
      </select>

      <select value={heading} onChange={handleHeadingChange}>
        {headingLevels.map((level) => <option key={level.value} value={level.value}>{level.label}</option>)}
      </select>

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <FaUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <FaStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <FaCode />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        className={editor.isActive('superscript') ? 'is-active' : ''}
      >
        <FaSuperscript />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        className={editor.isActive('subscript') ? 'is-active' : ''}
      >
        <FaSubscript />
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <FaRemoveFormat />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        <FaAlignLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        <FaAlignCenter />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        <FaAlignRight />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
      >
        <FaAlignJustify />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <FaFileCode />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <FaQuoteLeft />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <FaGripLines />
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <FaUndo />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <FaRedo />
      </button>
    </nav>
  )
}

export default MenuBar