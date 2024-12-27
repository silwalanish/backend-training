import fs from 'fs/promises';
import sortCostCenter from 'sort-cost-center' 


export const convertCsvToArray = (data : string): string[]  =>{
    const outputArray = []
    if(data){
        try{
            const dataArray = data.split('\n') as Array<string> // line break in my case is /n
            for (let i = 0 ; i < dataArray.length; i++){
                const item = dataArray[i].replace('\r','').split(',') as Array<string>
                if(item.length !== 2){
                    throw ('Invalid CSV format')
                }
                outputArray.push(item);
            }
            console.log(outputArray)
        }
        catch (err){
            console.log(err)
            throw err 
        }
        
    }
    return outputArray;
}

export const readCsvFile = async (file: string): Promise<object> => {
    try {
        const data = await fs.readFile(file, "utf8");

        return convertCsvToArray(data);
    } catch (err) {
        throw new Error(`Error reading the file: ${err.message}`);
    }
};

export const sortCostCenterArray = (data: string[][]): string[] => {
    console.log(sortCostCenter(data));
    return sortCostCenter(data);
}