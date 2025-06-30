'use client';

import { useContext, useEffect } from "react";
import { Context as CreativesContext } from "contexts/CreativesContext";
import { Context as AgenciesContext } from "contexts/AgenciesContext";
import { Context as AuthContext } from "contexts/AuthContext";
import Agencies from "pageComponents/agencies";

const useDashboardStats = () => {

  const { state: { user } } = useContext(AuthContext);

  const {
    state: { stats:creatives_stats, },
    getStats:getCreativesStats,
      } = useContext(CreativesContext);

      const {
    state: { stats:agencies_stats, },
    getStats:getAgenciesStats,
      } = useContext(AgenciesContext);

  useEffect(() => {
    if(user?.role == 'creative') {
      getCreativesStats();
    } else if((user?.role == 'agency' || user?.role == 'advisor' || user?.role == 'recruiter')) {
      getAgenciesStats();
    }
  }, [user]);

  
  let dashboardStats = (user?.role == 'creative' ? creatives_stats : agencies_stats) || null;

  return { dashboardStats, };
};

export default useDashboardStats;
