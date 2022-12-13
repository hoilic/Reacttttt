//component 가 아니라 순수 JS 파일이다.

// 1. action 생성
// 파일명+action명 (중복 방지)
const TIGER = 'animal/TIGER'
const DOG = 'animal/DOG'
const CAT = 'animal/CAT'
const CHICKEN = 'animal/CHICKEN'


// 2. action 보내기
export const tiger = () => ({type:TIGER})
export const dog = () => ({type:DOG})
export const cat = () => ({type:CAT})
export const chicken = () => ({type:CHICKEN})



//3. 초기값
const initialState = {name:'',crying:''}

//4. 리듀서 함수 만들기
//state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
//state: 현재 상태, acion: 액션 객체

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case TIGER:
            return{name:'호랑이', crying:'어흥' }
        case DOG:
            return{name:'강아지', crying:'멍멍'}
        case CAT:
            return{name:'고양이', crying:'야옹'}
        case CHICKEN:
            return{name:'병아리', crying:'삐약'}

        default:
            return state

    }
}
export default reducer