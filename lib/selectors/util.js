import { createSelector } from 'reselect';

export const getUtil = createSelector(state => state.util, util => util);