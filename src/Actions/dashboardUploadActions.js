import { ANALYSIS_REPORT } from '../Utils/actionTypes';

export const uploadDashboardData = (payload) => ({
    type: ANALYSIS_REPORT.UPLOAD_ANALYSIS,
    payload,
});
