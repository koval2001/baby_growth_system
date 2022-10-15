const initState = {
  measures: [
    {id: '1', title: 'Height & Weight 1', content: '29, 3400'},
    {id: '2', title: 'Height & Weight 2', content: '34, 3500'},
    {id: '3', title: 'Height & Weight 3', content: '30, 3420'},
  ],
};

const measureReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_MEASURE':
      console.log('created measure', action.measure);
      break;

    default:
      console.log('default case');
      break;
  }

  return state;
};

export default measureReducer;
