import { useEffect, useRef } from 'react'

export function MessageList({ messages, isLoading }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <main
      className="messages-area"
      role="log"
      aria-live="polite"
      aria-label="Conversation"
    >
      {messages.length === 0 && !isLoading ? (
        <EmptyState />
      ) : (
        <>
          {messages.map(msg =>
            msg.role === 'error' ? (
              <ErrorMessage key={msg.id} text={msg.text} />
            ) : (
              <Message key={msg.id} role={msg.role} text={msg.text} time={msg.time} />
            )
          )}
          {isLoading && <TypingIndicator />}
        </>
      )}
      <div ref={bottomRef} />
    </main>
  )
}

function EmptyState() {
  return (
    <div className="empty-state">
      <svg className="empty-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="40" height="28" rx="6" />
        <circle cx="16" cy="22" r="2.5" fill="currentColor" />
        <circle cx="24" cy="22" r="2.5" fill="currentColor" />
        <circle cx="32" cy="22" r="2.5" fill="currentColor" />
        <path d="M14 36 L18 42" />
      </svg>
      <h2>Start a conversation</h2>
      <p>Type a message below and hit Enter — it goes straight to your Spring Boot endpoint.</p>
    </div>
  )
}

function Message({ role, text, time }) {
  return (
    <div className={`message ${role}`}>
      <div className="bubble">{text}</div>
      <span className="message-meta">{time}</span>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="typing-indicator">
      <div className="typing-bubble">
        <div className="typing-dot" />
        <div className="typing-dot" />
        <div className="typing-dot" />
      </div>
    </div>
  )
}

function ErrorMessage({ text }) {
  return <div className="error-msg">{text}</div>
}
