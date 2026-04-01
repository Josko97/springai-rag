import { useState, useCallback } from 'react'

const API_URL = 'http://localhost:8080/api/chat'

export function useChat() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ text: 'Ready · Enter to send, Shift+Enter for newline', error: false })

  const clearMessages = useCallback(() => {
    setMessages([])
  }, [])

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || isLoading) return

    const userMsg = { id: Date.now(), role: 'user', text, time: timestamp() }
    setMessages(prev => [...prev, userMsg])
    setIsLoading(true)
    setStatus({ text: 'Waiting for response…', error: false })

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status} — ${res.statusText}`)

      const data = await res.json()
      const reply =
        data.message ?? data.response ?? data.content ?? data.reply ?? data.text ?? data.answer ?? JSON.stringify(data)

      const assistantMsg = { id: Date.now() + 1, role: 'assistant', text: reply, time: timestamp() }
      setMessages(prev => [...prev, assistantMsg])
      setStatus({ text: 'Ready · Enter to send, Shift+Enter for newline', error: false })
    } catch (err) {
      const errorMsg = {
        id: Date.now() + 1,
        role: 'error',
        text: '⚠ ' + (err.message || 'Could not reach API'),
        time: timestamp(),
      }
      setMessages(prev => [...prev, errorMsg])
      setStatus({ text: 'Request failed', error: true })

      setTimeout(() => {
        setStatus({ text: 'Ready · Enter to send, Shift+Enter for newline', error: false })
        setMessages(prev => prev.filter(m => m.id !== errorMsg.id))
      }, 6000)
    } finally {
      setIsLoading(false)
    }
  }, [isLoading])

  return { messages, isLoading, status, sendMessage, clearMessages }
}

function timestamp() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
