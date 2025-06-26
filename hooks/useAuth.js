'use client';

import { useContext, useEffect } from "react";
import { Context as AuthContext } from "contexts/AuthContext"

const useAuth = () => {

    const {
        state: { token, token_validated, user },
      } = useContext(AuthContext);
    
    return {
        token, token_validated, user,
    };
}

export default useAuth;