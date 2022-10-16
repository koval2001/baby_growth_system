import { ADD_MEASURE, DELETE_ALL, GET_MEASUREMENTS, DELETE_MEASURE, UPDATE_MEASURE } from "../actions";

const initialState=[];

const operationsReducer = (state= initialState, action) => {
  switch(action.type){
    case GET_MEASUREMENTS:
      return action.payload;

    case ADD_MEASURE:
      return [...state, action.payload];

    case DELETE_ALL:
      return [];

    case DELETE_MEASURE:
      return state.filter((measure) => measure.id !== action.payload);

    case UPDATE_MEASURE:
      const updatedList = [];
      const data = action.payload;

      // eslint-disable-next-line
      state.map((item) => {
        if(item.id === data.previousId){
          item.id = data.id;
          item.content = data.content;
          item.title = data.title;
        }

        updatedList.push(item);
      });

      return updatedList;

    default:
      return state;
  }
};

export default operationsReducer;
