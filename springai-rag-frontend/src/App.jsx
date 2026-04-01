import { useChat } from './hooks/useChat'
import { useTheme } from './hooks/useTheme'
import { Header } from './components/Header'
import { MessageList } from './components/MessageList'
import { MessageInput } from './components/MessageInput'

export default function App() {
  const { theme, toggleTheme } = useTheme('dark')
  const { messages, isLoading, status, sendMessage, clearMessages } = useChat()

  return (
    <div className="app">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onClear={clearMessages}
      />
      <MessageList
        messages={messages}
        isLoading={isLoading}
      />
      <MessageInput
        onSend={sendMessage}
        isLoading={isLoading}
        status={status}
      />
    </div>
  )
}
