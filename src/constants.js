import samskrutikaMse1 from "./data/samskruthika_kannada_mse_1.json"
import samskrutikaMse2 from "./data/samskruthika_kannada_mse_2.json"
import balakeMse1 from "./data/balake_kannada_mse_1.json"
import balakeMse2 from "./data/balake_kannada_mse_2.json"

export const attemptTypes = ["learner", "intermediate"]
export const questionSets = ["balake kannada mse-1", "samskrutika kannada mse-1","balake kannada mse-2", "samskrutika kannada mse-2"]

export function getData(questionSet){
    if(questionSet==questionSets[0])
        return balakeMse1;
    if(questionSet==questionSets[1])
        return samskrutikaMse1
    if(questionSet==questionSets[2])
        return balakeMse2
    if(questionSet==questionSets[3])
        return samskrutikaMse2
    return [];
}