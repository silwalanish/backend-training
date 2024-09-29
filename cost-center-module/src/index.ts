import { CostCenter } from "./types/CostCenter";


function generateUniqueCostCenters(params:[string,string][]):CostCenter[]{
    const uniqueIds=new Set()
    return params.reduce((costCenters:CostCenter[], current:[string,string])  => {
        if(!uniqueIds.has(current[0])) {
            costCenters.push({id:current[0], name:current[1]})
            uniqueIds.add(current[0])
        }
        return costCenters
        },[]).sort((a,b)=>Number(a.id)-Number(b.id))
}

// console.log(generateUniqueCostCenters([["300","Cost Center B"],["200","Cost Center A"],["300","Cost Center B"]]))
export default generateUniqueCostCenters

// reduce