'use client';

import { useContext, useEffect } from "react";
import { Context as CreativesContext } from "contexts/CreativesContext";
import { Context as AuthContext } from "contexts/AuthContext";

const useDashboardStats = () => {

  const { state: { token } } = useContext(AuthContext);

  const {
    state: { stats, },
    getStats,
      } = useContext(CreativesContext);

  useEffect(() => {
    getStats();
  }, [token]);

  
  let dashboardStats = stats;

  return { dashboardStats, };
};

export default useDashboardStats;
