import { useState, useRef, useEffect } from 'react'

export function MessageInput({ onSend, isLoading, status }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = Math.min(ta.scrollHeight, 180) + 'px'
  }, [value])

  // Re-focus after loading completes
  useEffect(() => {
    if (!isLoading) textareaRef.current?.focus()
  }, [isLoading])

  const canSend = value.trim().length > 0 && !isLoading

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (canSend) handleSend()
    }
  }

  const handleSend = () => {
    if (!canSend) return
    onSend(value.trim())
    setValue('')
  }

  return (
    <div className="input-area">
      <div className="input-box">
        <textarea
          ref={textareaRef}
          className="message-input"
          placeholder="Ask anything…"
          rows={1}
          aria-label="Message"
          autoComplete="off"
          spellCheck
          value={value}
          disabled={isLoading}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="send-btn"
          aria-label="Send message"
          disabled={!canSend}
          onClick={handleSend}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

      <div className="input-hint">
        <div className="api-status">
          <div className={`status-dot${status.error ? ' error' : ''}`} />
          <span>{status.text}</span>
        </div>
      </div>
    </div>
  )
}
