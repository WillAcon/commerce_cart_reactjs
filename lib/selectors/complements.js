import { createSelector } from 'reselect';

export const getComplements = state => state.complements;

export const getComplementByType = createSelector(
    (state, props)=> state.complements.find(c => c.type === props.type),
    complement => complement
);


