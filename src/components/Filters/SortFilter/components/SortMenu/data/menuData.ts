import { SORT } from 'constants/sort';

export const menuData = [
    {
        name:'Default',
        value: SORT.ALL,
        reversed: false 
    },
    {
        name: 'Ascending Date',
        value: SORT.DUE_DATE_TIME,
        reversed: true
    },
    {
        name: 'Descending Date',
        value: SORT.DUE_DATE_TIME,
        reversed: false
    },
    {
        name: 'Ascending Priority',
        value: SORT.PRIORITY,
        reversed: true
    },
    {
        name: 'Descending Priority',
        value: SORT.PRIORITY,
        reversed: false 
    },
    {
        name: 'Ascending Complexity',
        value: SORT.COMPLEXITY,
        reversed: true 
    },
    {
        name: 'Descending Complexity',
        value: SORT.COMPLEXITY,
        reversed: false 
    }
];