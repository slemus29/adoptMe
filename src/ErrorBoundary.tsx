import { Component, ErrorInfo, PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends Component <PropsWithChildren, ErrorBoundaryState> {
    state = { hasError: false }
    static getDerivedStateFromError () {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Error boundary caught an error", error, errorInfo)
    }

    render(): ReactNode {
        if(this.state.hasError) {
            return(
                <h2>
                    There was an error with this listing. <Link to="/">Click here</Link>
                    to go back to the home page
                </h2>
            )
        }
        return this.props.children
    }
}