import React, { useEffect, useState } from 'react'
import { SemanticType } from '../utils/types.util'
import { onboard as ob } from '../_data/seed'

const useRandom = () => {

    const semantics: Array<SemanticType> = [
        'info', 'ongoing', 'success', 'normal', 'default', 'pink', 'orange', 'yellow', 'error',
        'blue', 'purple', 'green', 'warning-2', 'warning', 'red',
    ]

    const onboard: Array<{ color: string, bg: string, active: string }> = [
        ob.purple, ob.blue, ob.green, ob.yellow, ob.red, ob.pink
    ]

    useEffect(() => {

        

    }, [])

    const randomize = (len?: number) => {

        let result: number = 0;

        if (len && len > 0) {
            result = Math.floor(Math.random() * len);
        } else {
            result = Math.floor(Math.random() * 100);
        }

        return result;

    }

    const randomizeSemantics = () => {

        if(semantics.length === 0){
            return semantics[0]
        } else {
            const randomIndex = randomize(semantics.length);
            return semantics[randomIndex];
        }

    }

    const randomizeIndexes = (arr: Array<any>, size: number) => {

        let result: Array<number> = [];

        for(let i = 0; i < size; i++){

            let rand = randomize(arr.length);

            if(!result.includes(rand)){
                result.push(rand)
            }else {
                result.push(randomize(arr.length))
            }
            
        }

        return result

    }

    const randomizeOnboard = () => {
        let rand = randomize(onboard.length);
        return onboard[rand]
    }

    return { 
        semantics, 
        onboard, 

        randomize,
        randomizeOnboard,
        randomizeSemantics, 
        randomizeIndexes 
    }

}

export default useRandom