import { httpGET } from '../config/Api'

export const INIT_REQUEST_DATA = 'INIT_REQUEST_DATA'
export const TIGGER_REQUEST_DATA = 'TIGGER_REQUEST_DATA'

export function fetch_data(data) {
  return {
    type: INIT_REQUEST_DATA,
    data: data,
  }
}

export function fetch_more_data() {
  return {
    type: TIGGER_REQUEST_DATA,
  }
}

//是否数据
export function request_data() {
  return (dispatch, getState) => {
    //const { active } = getState()  获取active 状态
    httpGET('planner')
      .done(payload => {
        //console.log(payload);
        dispatch(fetch_data(payload.data))
      })
      .fail((err) => {
        console.log('error',err.responseText);
      })
  }
}
