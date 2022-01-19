import {FIRST_UPDATE, SECOND_UPDATE, THIRD_UPDATE, FORTH_UPDATE, FIFTH_UPDATE} from '../constants'

export const updateFirstQuestion = (data: any) => {
    return {
        type: FIRST_UPDATE,
        payload: data
    }
}

export const updateSecondQuestion = (data: any) => {
    return {
        type: SECOND_UPDATE,
        payload: data
    }
}

export const updateThirdQuestion = (data: any) => {
    return {
        type: THIRD_UPDATE,
        payload: data
    }
}

export const updateForthQuestion = (data: any) => {
    return {
        type: FORTH_UPDATE,
        payload: data
    }
}

export const updateFifthQuestion = (data: any) => {
    return {
        type: FIFTH_UPDATE,
        payload: data
    }
}