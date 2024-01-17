const CreateStateActionTypes ={
    // start create State
    CREATE_STATE: '@@CREATE_STATE',
   CREATE_STATE_LOADING: '@@CREATE_STATE/LOADING',
   CREATE_STATE_SUCESS: '@@CREATE_STATE/SUCESS',
   CREATE_STATE_RESET: '@@CREATE_STATE/RESET',
   CREATE_STATE_ERROR: '@@CREATE_STATE/ERROR',


   GET_STATE: '@@GET_STATE',
   GET_STATE_LOADING: '@@GET_STATE/LOADING',
   GET_STATE_SUCESS: '@@GET_STATE/SUCESS',
   GET_STATE_RESET: '@@GET_STATE/RESET',
   GET_STATE_ERROR: '@@GET_STATE/ERROR',

   DELETE_STATE : "@@DELETE_STATE",
   DELETE_STATE_LOADING: "@@DELETE_STATE/LOADING",
   DELETE_STATE_SUCESS: "@@DELETE_STATE/SUCESS",
   DELETE_STATE_RESET: "@@DELETE_STATE/RESET",
   DELETE_STATE_ERROR: "@@DELETE_STATE/ERROR",

   CREATE_CITY:"CREATE_CITY",
   CREATE_CITY_LOADING: "@@CREATE_CITY/LOADING",
   CREATE_CITY_SUCESS: "@@CREATE_CITY/SUCESS",
   CREATE_CITY_RESET: "@@CREATE_CITY/RESET",
   CREATE_CITY_ERROR: "@@CREATE_CITY/ERROR",

   GET_CITY_BY_STATE:"@@GET_CITY/BY_STATE",
   GET_CITY_BY_STATE_LOADING: "@@GET_CITY/BY_STATE/LOADING",
   GET_CITY_BY_STATE_SUCESS: "@@GET_CITY/BY_STATE/SUCESS",
   GET_CITY_BY_STATE_RESET: "@@GET_CITY/BY_STATE/RESET",
   GET_CITY_BY_STATE_ERROR: "@@GET_CITY/BY_STATE/ERROR",

   DELETE_CITY:"@@DELETE_CITY",
   DELETE_CITY_LOADING: "@@DELETE_CITY/LOADING",
   DELETE_CITY_SUCESS: "@@DELETE_CITY/SUCESS",
   DELETE_CITY_RESET: "@@DELETE_CITY/RESET",
   DELETE_CITY_ERROR: "@@DELETE_CITY/ERROR",


   UPDATE_CITY:"UPDATE_CITY",
   UPDATE_CITY_LOADING: "@@UPDATE_CITY/LOADING",
   UPDATE_CITY_SUCESS: "@@UPDATE_CITY/SUCESS",
   UPDATE_CITY_RESET: "@@UPDATE_CITY/RESET",
   UPDATE_CITY_ERROR: "@@UPDATE_CITY/ERROR",

   GET_CITY: "@@GET_CITY",
   GET_CITY_LOADING: "@@GET_CITY/LOADING",
   GET_CITY_SUCESS: "@@GET_CITY/SUCESS",
   GET_CITY_RESET: "@@GET_CITY/RESET",
   GET_CITY_ERROR: "@@GET_CITY/ERROR",

   INSERT_DESIGNATION: "@@INSERT_DESIGNATION",
   INSERT_DESIGNATION_LOADING: "@@INSERT_DESIGNATION/LOADING",
   INSERT_DESIGNATION_SUCESS: "@@INSERT_DESIGNATION/SUCESS",
   INSERT_DESIGNATION_RESET: "@@INSERT_DESIGNATION/RESET",
   INSERT_DESIGNATION_ERROR: "@@INSERT_DESIGNATION/ERROR",

   UPDATE_STATE: "@@UPDATE_STATE",
   UPDATE_STATE_LOADING: "@@UPDATE_STATE/LOADING",
   UPDATE_STATE_SUCESS: "@@UPDATE_STATE/SUCESS",
   UPDATE_STATE_RESET: "@@UPDATE_STATE/RESET",
   UPDATE_STATE_ERROR: "@@UPDATE_STATE/ERROR",

   
   UPDATE_DESIGNATION: "@@UPDATE_DESIGNATION",
  UPDATE_DESIGNATION_LOADING: "@@UPDATE_DESIGNATION/LOADING",
  UPDATE_DESIGNATION_SUCESS: "@@UPDATE_DESIGNATION/SUCESS",
  UPDATE_DESIGNATION_RESET: "@@UPDATE_DESIGNATION/RESET",
  UPDATE_DESIGNATION_ERROR: "@@UPDATE_DESIGNATION/ERROR",

  DELETE_DESIGNATION:"@@DELETE/DESIGNATION",
  DELETE_DESIGNATION_LOADING: "@@DELETE_DESIGNATION/LOADING",
  DELETE_DESIGNATION_SUCESS: "@@DELETE_DESIGNATION/SUCESS",
  DELETE_DESIGNATION_RESET: "@@DELETE_DESIGNATION/RESET",
  DELETE_DESIGNATION_ERROR: "@@DELETE_DESIGNATION/ERROR",

  CREATE_PROJECTION:"CREATE_PROJECTION",
   CREATE_PROJECTION_LOADING: "@@CREATE_PROJECTION/LOADING",
   CREATE_PROJECTION_SUCESS: "@@CREATE_PROJECTION/SUCESS",
   CREATE_PROJECTION_RESET: "@@CREATE_PROJECTION/RESET",
   CREATE_PROJECTION_ERROR: "@@CREATE_PROJECTION/ERROR",

   GET_PROJECTION: '@@GET_PROJECTION',
   GET_PROJECTION_LOADING: '@@GET_PROJECTION/LOADING',
   GET_PROJECTION_SUCESS: '@@GET_PROJECTION/SUCESS',
   GET_PROJECTION_RESET: '@@GET_PROJECTION/RESET',
   GET_PROJECTION_ERROR: '@@GET_PROJECTION/ERROR',

   
   UPDATE_PROJECTION: "@@UPDATE_PROJECTION",
   UPDATE_PROJECTION_LOADING: "@@UPDATE_PROJECTION/LOADING",
   UPDATE_PROJECTION_SUCESS: "@@UPDATE_PROJECTION/SUCESS",
   UPDATE_PROJECTION_RESET: "@@UPDATE_PROJECTION/RESET",
   UPDATE_PROJECTION_ERROR: "@@UPDATE_PROJECTION/ERROR",

   GET_STATE_BY_ZONE:"@@GET_STATE/BY_ZONE",
   GET_STATE_BY_ZONE_LOADING: "@@GET_STATE/BY_ZONE/LOADING",
   GET_STATE_BY_ZONE_SUCESS: "@@GET_STATE/BY_ZONE/SUCESS",
   GET_STATE_BY_ZONE_RESET: "@@GET_STATE/BY_ZONE/RESET",
   GET_STATE_BY_ZONE_ERROR: "@@GET_STATE/BY_ZONE/ERROR",

   CREATE_ZONE:"CREATE_ZONE",
   CREATE_ZONE_LOADING: "@@CREATE_ZONE/LOADING",
   CREATE_ZONE_SUCESS: "@@CREATE_ZONE/SUCESS",
   CREATE_ZONE_RESET: "@@CREATE_ZONE/RESET",
   CREATE_ZONE_ERROR: "@@CREATE_ZONE/ERROR",

   
   GET_ZONE: "@@GET_ZONE",
   GET_ZONE_LOADING: "@@GET_ZONE/LOADING",
   GET_ZONE_SUCESS: "@@GET_ZONE/SUCESS",
   GET_ZONE_RESET: "@@GET_ZONE/RESET",
   GET_ZONE_ERROR: "@@GET_ZONE/ERROR",

   UPDATE_ZONE: "@@UPDATE_ZONE",
   UPDATE_ZONE_LOADING: "@@UPDATE_ZONE/LOADING",
   UPDATE_ZONE_SUCESS: "@@UPDATE_ZONE/SUCESS",
   UPDATE_ZONE_RESET: "@@UPDATE_ZONE/RESET",
   UPDATE_ZONE_ERROR: "@@UPDATE_ZONE/ERROR",

   DELETE_ZONE:"@@DELETE/ZONE",
  DELETE_ZONE_LOADING: "@@DELETE_ZONE/LOADING",
  DELETE_ZONE_SUCESS: "@@DELETE_ZONE/SUCESS",
  DELETE_ZONE_RESET: "@@DELETE_ZONE/RESET",
  DELETE_ZONE_ERROR: "@@DELETE_ZONE/ERROR",

  GET_FULL_MONTHS: "@@GET_FULL_MONTHS",
  GET_FULL_MONTHS_LOADING:"@@GET_FULL_MONTHS_LOADING",
  GET_FULL_MONTHS_SUCCESS:"@@GET_FULL_MONTHS_SUCCESS",
  GET_FULL_MONTHS_RESET:"@@GET_FULL_MONTHS_RESET",
  GET_FULL_MONTHS_ERROR:"@@GET_FULL_MONTHS_ERROR",
  
  ADD_MONTHS_TARGET: "@@ADD_MONTHS_TARGET",
  ADD_MONTHS_TARGET_LOADING:"@@ADD_MONTHS_TARGET_LOADING",
  ADD_MONTHS_TARGET_SUCCESS:"@@ADD_MONTHS_TARGET_SUCCESS",
  ADD_MONTHS_TARGET_RESET:"@@ADD_MONTHS_TARGET_RESET",
  ADD_MONTHS_TARGET_ERROR:"@@ADD_MONTHS_TARGET_ERROR"

}
export default CreateStateActionTypes;