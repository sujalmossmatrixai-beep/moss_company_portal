import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  onReset?: () => void
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#f8f9fa] text-[#0d2335] flex items-center justify-center p-6 text-center font-['Inter']">
          <div className="max-w-md p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-sky-50 text-[#1b95cd] flex items-center justify-center mx-auto text-xl mb-3">
              ℹ️
            </div>
            <h2 className="font-['Poppins'] text-lg font-bold text-[#0d2335] mb-1">
              Product Overview Ready
            </h2>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              We encountered a minor refresh state while switching modules. Click below to return to the home view or reload.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  this.setState({ hasError: false, error: null })
                  if (this.props.onReset) this.props.onReset()
                  else window.location.hash = ''
                }}
                className="px-4 py-2 rounded-lg bg-[#1b95cd] hover:bg-[#1579b0] text-white font-['Poppins'] font-semibold text-xs transition-colors cursor-pointer"
              >
                Return to Home
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-4 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-['Poppins'] font-medium border border-slate-200 transition-colors cursor-pointer"
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
