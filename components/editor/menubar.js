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

import { useState } from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  const fontList = [
    { label: 'Default', value: 'Atkinson Hyperlegible, sans-serif' },
    { label: 'Sans-serif', value: 'sans-serif' },
    { label: 'Serif', value: 'serif' },
    { label: 'Monospace', value: 'monospace' },
  ]

  const sizeList = [
    { label: '12px', value: '12px' },
    { label: '14px', value: '14px' },
    { label: '16px', value: '16px' },
    { label: '18px', value: '18px' },
    { label: '20px', value: '20px' },
  ]

  const headList = [
    { label: 'Paragraph', value: '4' },
    { label: 'Heading 1', value: '1' },
    { label: 'Heading 2', value: '2' },
    { label: 'Heading 3', value: '3' },
  ]

  const [font, setFont] = useState('')
  const [size, setSize] = useState('')
  const [head, setHead] = useState('')
  const [selectedFont, setSelectedFont] = useState([])
  const [selectedSize, setSelectedSize] = useState([])
  const [selectedHead, setSelectedHead] = useState([])

  return (
    <nav className="toolbar w-full mx-auto">
      <div className="inline-flex space-x-0.5">
        <Select
          name="fontFamily"
          placeholder="Select font..."
          className="flex-1 px-2 py-1"
          isSearchable="true"
          defaultValue={fontList.at(0)}
          value={
            editor.isActive('textStyle', {fontFamily: font}) ? (
              selectedFont.find(index => fontList[index])
            ) : fontList.at(0)
          }
          options={fontList}
          onChange={({value: fontSel}) => {
            setFont(fontSel)
            editor.chain().focus().setFontFamily(fontSel).run()
          }}
        />

        <CreatableSelect
          name="fontSize"
          placeholder="Select size..."
          className="flex-1 px-2 py-1"
          value={
            editor.isActive('textStyle', {fontSize: size}) ? (
              selectedSize.find(index => sizeList[index])
            ) : ''
          }
          options={sizeList}
          onChange={({value: sizeSel}) => {
            setSize(sizeSel)
            editor.chain().focus().setFontSize(sizeSel).run()
          }}
        />

        <Select
          name="headingList"
          placeholder="Select heading..."
          className="flex-1 px-2 py-1"
          defaultValue={headList[0]}
          value={
            editor.isActive('heading', {level: parseInt(head, 10)}) ? (
              selectedHead.find(index => headList[index])
            ) : headList.at(0)
          }
          options={headList}
          onChange={({value: headSel}) => {
            setHead(headSel)
            if (editor.can().toggleHeading({level: parseInt(headSel, 10)})) {
              editor.chain().focus().toggleHeading({level: parseInt(headSel, 10)}).run()
            } else {
              editor.chain().focus().setParagraph().run()
            }
          }}
        />
      </div>

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