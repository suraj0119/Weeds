"use client"

import { createContext, useContext, useReducer, useMemo, type ReactNode, useCallback } from "react"

// Define the state type
type AppState = {
  isMenuOpen: boolean
  activeTab: string
  theme: "light" | "dark"
}

// Define action types
type AppAction =
  | { type: "TOGGLE_MENU"; payload?: boolean }
  | { type: "SET_ACTIVE_TAB"; payload: string }
  | { type: "SET_THEME"; payload: "light" | "dark" }

// Initial state
const initialState: AppState = {
  isMenuOpen: false,
  activeTab: "overview",
  theme: "light",
}

// Create context
const AppContext = createContext<
  | {
      state: AppState
      toggleMenu: (isOpen?: boolean) => void
      setActiveTab: (tab: string) => void
      setTheme: (theme: "light" | "dark") => void
    }
  | undefined
>(undefined)

// Reducer function
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isMenuOpen: action.payload !== undefined ? action.payload : !state.isMenuOpen,
      }
    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTab: action.payload,
      }
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Memoized action creators
  const toggleMenu = useCallback((isOpen?: boolean) => {
    dispatch({ type: "TOGGLE_MENU", payload: isOpen })
  }, [])

  const setActiveTab = useCallback((tab: string) => {
    dispatch({ type: "SET_ACTIVE_TAB", payload: tab })
  }, [])

  const setTheme = useCallback((theme: "light" | "dark") => {
    dispatch({ type: "SET_THEME", payload: theme })
  }, [])

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      state,
      toggleMenu,
      setActiveTab,
      setTheme,
    }),
    [state, toggleMenu, setActiveTab, setTheme],
  )

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
