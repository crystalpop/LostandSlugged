import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../Authentication/firebase';

// Create a context to manage authentication state
const AuthContext = React.createContext();

// Custom hook to conveniently access the AuthContext
export function useAuth() {
    return useContext(AuthContext);
}

// AuthProvider component to wrap the application and provide authentication functionality
export function AuthProvider({ children }) {
    // State to track the current user
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    // Function to handle user signup using email and password
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    // Effect to listen for changes in the authentication state
    useEffect(() => {
        // Set up a listener for changes in the authentication state
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false);
            setCurrentUser(user);
        });

        // Clean up the listener when the component unmounts
        return unsubscribe;
    }, []);

    // Create a value object with current user and signup function
    const value = {
        currentUser,
        signup,
        login
    };

    // Provide the AuthContext with the value to the wrapped components
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}