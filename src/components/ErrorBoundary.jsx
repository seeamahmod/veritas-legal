import { Component } from 'react'

import { isChunkError, reloadOnceForNewBuild } from '../lib/chunks'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error) {
    if (isChunkError(error)) reloadOnceForNewBuild()
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div role="alert" className="container-x flex min-h-[70vh] flex-col items-start justify-center gap-6 py-24">
        <p className="text-[14px] font-medium uppercase tracking-[0.08em] text-brand">Something went wrong</p>
        <h1 className="h-display max-w-[640px]">We couldn’t load this page.</h1>
        <p className="max-w-[560px] text-[18px] leading-[1.5] text-ink-soft">Please refresh, or call us on +1 (555) 222-7777 if the problem persists.</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex h-[52px] items-center rounded-full bg-brand px-7 font-medium text-white hover:bg-brand-dark"
        >
          Refresh page
        </button>
      </div>
    )
  }
}
