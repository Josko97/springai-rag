export function Header({ theme, onToggleTheme, onClear }) {
  return (
    <header className="header">
      <div className="header-brand">
        <svg className="logo" viewBox="0 0 32 32" fill="none" aria-label="Chat">
          <rect x="2" y="4" width="28" height="20" rx="5" fill="currentColor" opacity="0.15" />
          <rect x="2" y="4" width="28" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="14" r="2" fill="currentColor" />
          <circle cx="16" cy="14" r="2" fill="currentColor" />
          <circle cx="22" cy="14" r="2" fill="currentColor" />
          <path d="M10 24 L13 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div>
          <div className="header-title">AI Chat</div>
          <div className="header-subtitle">POST /api/chat</div>
        </div>
      </div>

      <div className="header-actions">
        <button
          className="icon-btn"
          onClick={onClear}
          aria-label="Clear conversation"
          title="Clear conversation"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
            <path d="M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
          </svg>
        </button>

        <button
          className="icon-btn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title="Toggle theme"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
