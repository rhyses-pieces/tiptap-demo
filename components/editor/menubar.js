import { useState } from 'react'
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
    FaSuperscript
} from 'react-icons/fa'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

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
        // check if slected text has heading,
        // if so apply appropriate level ({level: #}) in select value with setHeading()
        // otherwise, default to paragraph
        // let selected = document.querySelector('.ProseMirror').getSelection()
        // if (selected === editor.isActive('heading')) {
        //     setHeading()
        // }
        editor.chain().focus().setParagraph().run()
    }
  }

  return (
    <nav className="toolbar w-full mx-auto">
      <select value={font} onChange={handleFontChange}>
        <option value="sans-serif">Sans-serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
        <option value="Comic Sans MS, Comic Sans">Comic Sans</option>
        <option value="Inter">Inter</option>
      </select>

      <select value={heading} onChange={handleHeadingChange}>
        <option value="7">paragraph</option>
        <option value="1">heading 1</option>
        <option value="2">heading 2</option>
        <option value="3">heading 3!</option>
        <option value="4">heading 4</option>
        <option value="5">heading 5</option>
        <option value="6">heading 6</option>
      </select>

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        underline
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        left
      </button>
            <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        center
      </button>
            <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
      >
        justify
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        undo
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        redo
      </button>
    </nav>
  )
}

export default MenuBar